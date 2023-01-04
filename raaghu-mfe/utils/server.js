// var Service = require('../lib/node-windows.js').Service;
var Service = require('node-windows').Service;
var dir = require('path').join(process.cwd(), './utils/server_host.js')

// Create a new service object
var svc = new Service({
    name: 'raaghu host',
    description: 'raaghu host web server',
    script: dir,
    env: {
        name: "NODE_ENV",
        value: "production"
    }
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function () {
    svc.start();
});

// Listen for the "uninstall" event so we know when it's done.
svc.on('uninstall', function () {
    console.log('Uninstall complete.');
    console.log('The service exists: ', svc.exists);
});

// Just in case this file is run twice.
svc.on('alreadyinstalled', function () {
    console.log('This service is already installed.' + svc.name);
    svc.uninstall();
});

svc.on("error", function () {
    console.log("Something went wrong.");
});

svc.on("invalidinstallation ", function () {
    console.log(" This service is detected but missing require files");
});

// Listen for the "start" event and let us know when the
// process has actually started working.
svc.on('start', function () {
    console.log(svc.name + ' started!\nVisit http://localhost:8080 to see it in action.');
});

// Install the script as a service.
console.log("Installing to", dir)
svc.install();
// // -------------------------------------------------------------
// var dirC = require('path').join(process.cwd(), './utils/server_rds-components.js')

// // Create a new service object
// var svcC = new Service({
//     name: 'raaghu components',
//     description: 'raaghu components web server',
//     script: dirC,
//     env: {
//         name: "NODE_ENV",
//         value: "production"
//     }
// });

// // Listen for the "install" event, which indicates the
// // process is available as a service.
// svcC.on('install', function () {
//     svcC.start();
// });

// // Listen for the "uninstall" event so we know when it's done.
// svcC.on('uninstall', function () {
//     console.log('Uninstall complete.');
//     console.log('The service exists: ', svcC.exists);
// });

// // Just in case this file is run twice.
// svcC.on('alreadyinstalled', function () {
//     console.log('This service is already installed.' + svcC.name);
//     svcC.uninstall();
// });

// // Listen for the "start" event and let us know when the
// // process has actually started working.
// svcC.on('start', function () {
//     console.log(svcC.name + ' started!\nVisit http://localhost:5000 to see it in action.');
// });

// // Install the script as a service.
// console.log("Installing to", dirC)
// svcC.install();
// // -------------------------------------------------------------
// var dirD = require('path').join(process.cwd(), './utils/server_dashboard.js')

// // Create a new service object
// var svcD = new Service({
//     name: 'raaghu dashboard',
//     description: 'raaghu dashboard web server',
//     script: dirD,
//     env: {
//         name: "NODE_ENV",
//         value: "production"
//     }
// });

// // Listen for the "install" event, which indicates the
// // process is available as a service.
// svcD.on('install', function () {
//     svcD.start();
// });

// // Listen for the "uninstall" event so we know when it's done.
// svcD.on('uninstall', function () {
//     console.log('Uninstall complete.');
//     console.log('The service exists: ', svcD.exists);
// });

// // Just in case this file is run twice.
// svcD.on('alreadyinstalled', function () {
//     console.log('This service is already installed.' + svcD.name);
//     svcD.uninstall();
// });

// // Listen for the "start" event and let us know when the
// // process has actually started working.
// svcD.on('start', function () {
//     console.log(svcD.name + ' started!\nVisit http://localhost:5001 to see it in action.');
// });

// // Install the script as a service.
// console.log("Installing to", dirD)
// svcD.install();
// // -------------------------------------------------------------
// var dirL = require('path').join(process.cwd(), './utils/server_login.js')

// // Create a new service object
// var svcL = new Service({
//     name: 'raaghu login',
//     description: 'raaghu login web server',
//     script: dirL,
//     env: {
//         name: "NODE_ENV",
//         value: "production"
//     }
// });

// // Listen for the "install" event, which indicates the
// // process is available as a service.
// svcL.on('install', function () {
//     svcL.start();
// });

// // Listen for the "uninstall" event so we know when it's done.
// svcL.on('uninstall', function () {
//     console.log('Uninstall complete.');
//     console.log('The service exists: ', svcL.exists);
// });

// // Just in case this file is run twice.
// svcL.on('alreadyinstalled', function () {
//     console.log('This service is already installed.' + svcL.name);
//     svcL.uninstall();
// });

// // Listen for the "start" event and let us know when the
// // process has actually started working.
// svcL.on('start', function () {
//     console.log(svcL.name + ' started!\nVisit http://localhost:5011 to see it in action.');
// });

// // Install the script as a service.
// console.log("Installing to", dirL)
// svcL.install();
// // -------------------------------------------------------------