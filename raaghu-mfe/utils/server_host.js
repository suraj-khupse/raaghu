// const path = require('path')
// -------------------------------------------------------------

const path = require('path');
const fs = require('fs');
let express = require('express');
let cors = require('cors');
let app = [];
let port = [];
let projCounter = 0;

const projects = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'angular.json'), 'utf-8')).projects;
for (const project of Object.keys(projects)) {
    if (projects[project]["projectType"] == 'application' && project.indexOf('storybook') == -1) {
        // console.log("Projct: ", project, " Port: ", projects[project]["architect"]["serve"]["options"]["port"]);

        port[projCounter] = projects[project]["architect"]["serve"]["options"]["port"];

        app[projCounter] = express();
        app[projCounter].use(cors({ origin: '*' }));
        app[projCounter].use(express.static('./dist/' + project))
        // app.set('view engine', 'pug');

        app[projCounter].get('/', (req, res) => {
            res.header("Access-Control-Allow-Origin", "*");
            if (port[projCounter] == 8080) {
                res.sendFile('index.html', { root: __dirname });
            } else {
                res.sendFile('remoteEntry.js', { root: __dirname })
            }
        });

        app[projCounter].listen(port[projCounter], () => {
            console.log("Server is listening on port " + port[projCounter]);
        });
    }
}


