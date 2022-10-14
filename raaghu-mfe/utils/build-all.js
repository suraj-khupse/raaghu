
// Imports
const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');
const APP_ROUTES = fs.readFileSync(path.join(__dirname, '../projects/host/src/app/app.routes.ts'), 'utf-8');
const appConfig = JSON.parse(fs.readFileSync(path.join(__dirname, '../projects/host/src/assets', 'appconfig.json'), 'utf-8'));
const mfeFilePath = path.join(__dirname, '../projects', 'mfe-config.ts');
const mfeFilePathTemp = path.join(__dirname, '../projects', 'mfe-config-temp.ts');
const projects = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'angular.json'), 'utf-8')).projects;

if (process.argv.length > 3) {
    console.log('Invalid command');
    process.exit(0);
}

if (appConfig.replaceUrl == "true") {

    console.log('Changing URLs in mfe-config.json file...');
    fs.copyFileSync(mfeFilePath, mfeFilePathTemp);
    let mfeConfig = fs.readFileSync(mfeFilePath).toString();
    let mfeConfigJSON = mfeConfig.substring(mfeConfig.indexOf("{"), mfeConfig.lastIndexOf("}") + 1);

    mfeConfigJSON = mfeConfigJSON.replace(/\'/g, "\"");
    mfeConfigJSON = mfeConfigJSON.replace(/([a-zA-Z]*): {/g, "\"$1\": {");
    mfeConfigJSON = mfeConfigJSON.replace(/url:/g, "\"url\":");
    mfeConfigJSON = mfeConfigJSON.replace(/\",/g, "\"");
    mfeConfigJSON = JSON.parse(mfeConfigJSON);

    for (const mfeConf of Object.keys(mfeConfigJSON)) {
        let pathConf = '';
        let url = mfeConfigJSON[mfeConf].url;
        let portIndex = url.indexOf("localhost:");
        let portConfig = url.substring(portIndex + 10, portIndex + 14);

        for (const project of Object.keys(projects)) {

            if (projects[project]["projectType"] == 'application' && project.indexOf('storybook') == -1) {

                if (portConfig == projects[project]["architect"]["serve"]["options"]["port"]) {
                    pathConf = projects[project]["architect"]["build"]["options"]["outputPath"].substring(5);

                    if (mfeConf == "host") {
                        url = url.replace(/((http|https):\/\/localhost:)\d{4}/g, appConfig.appBaseUrl);
                    } else {
                        url = url.replace(/((http|https):\/\/localhost:)\d{4}/g, appConfig.appBaseUrl + "/" + pathConf);
                    }

                    mfeConfigJSON[mfeConf].url = url;
                    break;
                }
            }
        }
    }
    mfeConfig = mfeConfig.substring(0, mfeConfig.indexOf("{")) + JSON.stringify(mfeConfigJSON, null, 2);
    mfeConfig = mfeConfig.replace(/\"url\":/g, "url:");
    mfeConfig = mfeConfig.replace(/\"/g, "");
    mfeConfig = mfeConfig.replace(/(http|https):\/\//g, "\'$1:\/\/");
    mfeConfig = mfeConfig.replace(/.js/g, ".js\'");
    // console.log(mfeConfig);
    fs.writeFileSync(mfeFilePath, mfeConfig);
}

console.log('Building project \x1b[32m rds-components \x1b[0m...');
execSync(`ng build rds-components > output.log &`, { cwd: process.cwd(), stdio: 'inherit' });
// let commandline = 'concurrently ';
for (const project of Object.keys(projects)) {
    if (projects[project]["projectType"] === 'application' && (project.indexOf('storybook') == -1 || project.indexOf('rds-components') == -1)) {
        console.log('Building project \x1b[32m' + project + '\x1b[0m...');
        execSync(`ng build ${project} > output.log &`, { cwd: process.cwd(), stdio: 'inherit' });
        // commandline = commandline + ' \"ng build ' + project + '\"';
    }
}
// console.log('Building projects \x1b[32mALL\x1b[0m...');
// execSync(`${commandline} > output.log &`, { cwd: process.cwd(), stdio: 'inherit' });

console.log('Deleting temporary files...');
if (appConfig.replaceUrl == "true") {
    fs.copyFileSync(mfeFilePathTemp, mfeFilePath);
    if (fs.existsSync(mfeFilePathTemp)) {
        fs.unlinkSync(mfeFilePathTemp)
    }
}

console.log('Done...');