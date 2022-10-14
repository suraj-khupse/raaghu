const path = require('path');
const fse = require('fs-extra');
const { execSync } = require('child_process');
const currentDir = path.join(__dirname, '../');
const ngElementsDir = path.join(__dirname, '../../raaghu-elements');
const ngComponentsDir = path.join(__dirname, '../projects/libs/rds-elements');
const filesToReplace = [
    '.storybook',
    '.editorconfig',
    '.gitignore',
    'tsconfig.json'
];
const dependentElements = [
    'rds-icon',
    'rds-label',
    'rds-icon-label',
    'rds-checkbox',
    'rds-radio-button',
    'rds-select-list',
    'rds-badge',
    'rds-button',
    'rds-avatar',
    'rds-like-dislike',
    'rds-rating',
    'rds-product-image',
    'rds-stepper',
    'rds-app-details',
    'rds-team-member',
    'rds-nav-tab',
    'rds-big-number-widget',
    'rds-chart-bar-horizontal',
    'rds-chart-line'
];

function replaceFiles() {
    for (const fileName of filesToReplace) {
        fse.copySync(path.join(ngElementsDir, fileName), path.join(ngComponentsDir, fileName), { overwrite: true });
    }
}

function mergeTSConfigJson() {
    let changesDone = false;
    const ngElementsFile = JSON.parse(fse.readFileSync(path.join(currentDir, 'tsconfig.json')).toString());
    if (ngElementsFile.compilerOptions.paths["@libs/rds-elements"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-elements": [
                "projects/libs/rds-elements/src/root/public-api"
            ]
        };
        changesDone = true;
    };
    if (ngElementsFile.compilerOptions.paths["@libs/rds-icon"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-icon": [
                "rds-elements/rds-icon/public-api",
                "rds-elements/rds-icon"
            ]
        };
        changesDone = true;
    };
    if (ngElementsFile.compilerOptions.paths["@libs/rds-badge"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-badge": [
                "rds-elements/rds-badge/public-api",
                "rds-elements/rds-badge"
            ]
        };
        changesDone = true;
    };
    if (ngElementsFile.compilerOptions.paths["@libs/rds-button"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-button": [
                "rds-elements/rds-button/public-api",
                "rds-elements/rds-button"
            ]
        };
        changesDone = true;
    };
    if (ngElementsFile.compilerOptions.paths["@libs/rds-avatar"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-avatar": [
                "rds-elements/rds-avatar/public-api",
                "rds-elements/rds-avatar"
            ]
        };
        changesDone = true;
    };
    if (ngElementsFile.compilerOptions.paths["@libs/rds-like-dislike"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-like-dislike": [
                "rds-elements/rds-like-dislike/public-api",
                "rds-elements/rds-like-dislike"
            ]
        };
        changesDone = true;
    };
    if (ngElementsFile.compilerOptions.paths["@libs/rds-rating"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-rating": [
                "rds-elements/rds-rating/public-api",
                "rds-elements/rds-rating"
            ]
        };
        changesDone = true;
    };
    if (ngElementsFile.compilerOptions.paths["@libs/rds-icon-label"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-icon-label": [
                "rds-elements/rds-icon-label/public-api",
                "rds-elements/rds-icon-label"
            ]
        };
        changesDone = true;
    };
    if (ngElementsFile.compilerOptions.paths["@libs/rds-select-list"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-select-list": [
                "rds-elements/rds-select-list/public-api",
                "rds-elements/rds-select-list"
            ]
        };
        changesDone = true;
    };
    if (ngElementsFile.compilerOptions.paths["@libs/rds-label"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-label": [
                "rds-elements/rds-label/public-api",
                "rds-elements/rds-label"
            ]
        };
        changesDone = true;
    };
    if (ngElementsFile.compilerOptions.paths["@libs/rds-checkbox"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-checkbox": [
                "rds-elements/rds-checkbox/public-api",
                "rds-elements/rds-checkbox"
            ]
        };
        changesDone = true;
    };
    if (ngElementsFile.compilerOptions.paths["@libs/rds-radio-button"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-radio-button": [
                "rds-elements/rds-radio-button/public-api",
                "rds-elements/rds-radio-button"
            ]
        };
        changesDone = true;
    };
    if (ngElementsFile.compilerOptions.paths["@libs/rds-product-image"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-product-image": [
                "rds-elements/rds-product-image/public-api",
                "rds-elements/rds-product-image"
            ]
        };
        changesDone = true;
    };
    if (ngElementsFile.compilerOptions.paths["@libs/rds-stepper"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-stepper": [
                "rds-elements/rds-stepper/public-api",
                "rds-elements/rds-stepper"
            ]
        };
        changesDone = true;
    };
    if (ngElementsFile.compilerOptions.paths["@libs/rds-app-details"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-app-details": [
                "rds-elements/rds-app-details/public-api",
                "rds-elements/rds-app-details-image"
            ]
        };
        changesDone = true;
    };
    if (ngElementsFile.compilerOptions.paths["@libs/rds-counter"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-counter": [
                "rds-elements/rds-counter/public-api",
                "rds-elements/rds-counter"
            ]
        };
        changesDone = true;
    };
    if (ngElementsFile.compilerOptions.paths["@libs/rds-team-member"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-team-member": [
                "rds-elements/rds-team-member/public-api",
                "rds-elements/rds-team-member"
            ]
        };
        changesDone = true;
    };
    if (ngElementsFile.compilerOptions.paths["@libs/rds-nav-tab"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-nav-tab": [
                "rds-elements/rds-nav-tab/public-api",
                "rds-elements/rds-nav-tab"
            ]
        };
        changesDone = true;
    };
    if (ngElementsFile.compilerOptions.paths["@libs/rds-big-number-widget"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-big-number-widget": [
                "rds-elements/rds-big-number-widget/public-api",
                "rds-elements/rds-big-number-widget"
            ]
        };
        changesDone = true;
    };
    if (ngElementsFile.compilerOptions.paths["@libs/rds-chart-line"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-chart-line": [
                "rds-elements/rds-chart-line/public-api",
                "rds-elements/rds-chart-line"
            ]
        };
        changesDone = true;
    };
    if (ngElementsFile.compilerOptions.paths["@libs/rds-chart-bar-horizontal"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths,
            "@libs/rds-chart-bar-horizontal": [
                "rds-elements/rds-chart-bar-horizontal/public-api",
                "rds-elements/rds-chart-bar-horizontal"
            ]
        };
        changesDone = true;
    };
    if (changesDone) {
        console.log('Updating tsconfig.json file...');
        fse.writeFileSync(path.join(currentDir, 'tsconfig.json'), JSON.stringify(ngElementsFile, null, 2));
    }
}

function getDirectories(source) {
    return fse.readdirSync(source, { withFileTypes: true })
        .filter(d => d.isDirectory()).map(d => d.name);
}

function copyProjects() {
    const ngElementsDirectories = getDirectories(path.join(ngElementsDir, 'src'));
    for (const dir of ngElementsDirectories) {
        fse.copySync(path.join(ngElementsDir, 'src', dir), path.join(ngComponentsDir, 'src', dir), { overwrite: true });
    }
}

function buildDependentElements() {
    console.log('Building dependent \x1b[32m' + dependentElements.toString() + '\x1b[0m elements...');
    // let commandline = 'concurrently ';
    for (const element of dependentElements) {
        execSync(`npm run build ${element} > output.log &`, { cwd: ngElementsDir, stdio: 'inherit' });
        // commandline = commandline + ' \"npm run build ' + element + '\"';
    }
    // execSync(`${commandline}`, { cwd: ngElementsDir, stdio: 'inherit' });

    console.log("Coping element's build folder...");
    fse.copySync(path.join(ngElementsDir, 'rds-elements'), path.join(currentDir, 'rds-elements'), { overwrite: true });
}

try {

    buildDependentElements();

    console.log('Replacing config files...');
    replaceFiles();

    console.log('Merging tsconfig.json file...');
    mergeTSConfigJson();

    console.log('Copying over projects...');
    copyProjects();

} catch (error) {
    console.error(error);
}
