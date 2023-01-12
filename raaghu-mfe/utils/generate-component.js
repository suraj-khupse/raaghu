// Imports
const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');

// Check whether the arguments passed contain the mfe name and the page name
if (process.argv.length !== 3) {
    console.log('Invalid command');
    process.exit(0);
}

// Parse the name of the mfe and the page name
const pageName = process.argv[2];


// Get hold of the app folder path inside the mfe
const appFolderPath = path.join(__dirname, '..', 'projects', 'rds-components', 'src', 'app');
// Generate the page component using angular-cli
if (fs.existsSync(appFolderPath)) {
    execSync(`ng g m ${pageName}`, { cwd: appFolderPath, stdio: 'inherit' });
    execSync(`ng g c ${pageName}`, { cwd: appFolderPath, stdio: 'inherit' });
    console.log("Done !!");
} else {
    console.log("The app folder is missing from the rds-components");
}




