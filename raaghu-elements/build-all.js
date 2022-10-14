const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
const projectRootFolder = 'src';

const buildAllProjects = async (projects) => {
  // let commandline = 'concurrently ';
  for (const project of Object.keys(projects)) {
    if (project != "storybook") {
      console.log('Building project ' + project + '...');
      execSync(`ng build ${project} > output.log`, { cwd: process.cwd(), stdio: 'inherit' });
      // commandline = commandline + ' \"ng build ' + project + '\"';
    }
  }
  // console.log('Building projects \x1b[32mALL\x1b[0m...');
  // execSync(`${commandline} > output.log`, { cwd: process.cwd(), stdio: 'inherit' });
}

function getProjects() {
  return JSON.parse(fs.readFileSync(path.join(__dirname, 'angular.json')).toString()).projects
}

async function start() {

  const projects = getProjects();
  fs.rmSync(path.join(__dirname, 'rds-elements'), { recursive: true, force: true });
  fs.mkdirSync(path.join(__dirname, 'rds-elements'));
  console.log('Building projects from ' + projectRootFolder);
  await buildAllProjects(projects);

}

start();
