<p align="center">
    <a href="https://raaghu.io" target="_blank">
        <img src="./raaghu_icon.png" alt="logo" width="125"/>
    </a>
<p/>
</p>
<p>
<h1 align="center">raaghu Elements</h1>
</p>

<p align="center">
<a href="https://npmjs.org/rds-elements"><img src="https://img.shields.io/npm/v/rds-elements/latest.svg" alt="npm latest version" ></a>
<a href="https://npmjs.org/rds-elements"><img src="https://img.shields.io/npm/v/rds-elements/next.svg" alt="npm next version" ></a>
</br>

<p align="center">
    <a href="https://raaghu.io" target="blank">View Demo</a>
    ·
    <a href="https://github.com/Wai-Technologies/raaghu/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/Wai-Technologies/raaghu/issues/new">Request Feature</a>
</p>
<h2 >Content</h2>
<!-- vscode-markdown-toc -->

* [ Introducing raaghu-elements](#Introducingraaghu-elements)
*  [Demo](#Demo)
*  [Features](#Features)
*  [How to Set up `raaghu-elements` for Development?](#setup)
*  [Built With](#BuiltWith)
*  [Upcoming Features](#UpcomingFeatures)
* 
<p align="center">

##  <a name='Introducingraaghu-elements'></a> Introducing raaghu-elements 

raaghu-elements is an opensource Angular library framework built on top of Bootstrap 5 and Storybook having 60+ user interface elements as well as 170+ custom icons that offers highly customizable and reusable Angular UI elements.

raaghu elements can be used as a base to build complex components and UI layouts whilst maintaining a high level of reusability.



##  <a name='Demo'></a>Demo

Here is a quick demo of the elements. We hope you enjoy it.
<img title="imge" alt="gif" src="../static/Demo (1).gif">

Liked it? Please give us a ⭐️ to show your appreciation

Many Thanks to all the `supporters` who have helped this project with stars(⭐)

##   <a name='Features'></a> Features

###  <a name='Highreusability'></a> High reusability
 - Promotes reusability throughout the UI and pages
 - Reduces code duplication and helps in delivering a more consistent and even UI

### <a name='Responsiveandmobile-friendly'></a> Responsive and mobile-friendly
- All of the elements are built for a wide variety of screen sizes


## <a name='setup'></a> How to Set up `raaghu-elements` for Development?

You can run `raaghu-elements` locally with a few easy steps.

1. Clone the repository

```bash
git clone https://github.com/Wai-Technologies/raaghu.git
```
  
<img title="imge" alt="gif" src="../static/Screenshot (40).png">


2. Change the working directory

```bash
cd raaghu-elements
```


3. Install dependencies

```bash
npm install
```
 <img title="imge" alt="gif" src="../static/Screenshot (39).png">
4. Build all the libraries
 <img title="imge" alt="gif" src="../static/Screenshot (66).png">
```bash
npm run build-all
```
> **_NOTE:_** Above command will create a folder named "rds-elements" with all the libraries

5. Create a new blank angular project: new directory, other location

```bash
# use angular CLI to create a new project
ng new <project_name>

# change directory to newly created project's mode modules folder
cd <project_name>/node_modules

# copy the build folder "rds-elements", created in step 4
```

6. Use rds-elements libraries

```bash
# Import it in your app.module.ts file, include the library
import { RdsButtonModule } from "rds-elements/rds-button"

# import the above module
imports: [
  RdsButtonModule
]

# Use it in the html file
<rds-button
  [color]="buttonColorType"
  [block]="true"
  size="'medium'"
  [label]="buttonLabel"
  [disabled]="!loginForm.valid"
  (click)="submit()">
</rds-button>
```

7. Build and serve

```bash
npm start
```

8. Storybook

```bash
# View all elements inside storybook
npm run storybook 
```


##  <a name='BuiltWith'></a>Built With

- [Angular Libraries](https://angular.io/guide/libraries): Build bulletproof UI components faster
- [Bootstrap 5](https://bootstrap.com/): Sleek, intuitive, and powerful framework for faster and easier web development.
- [Storybook](https://storybook.js.org/): Build bulletproof UI components faster


## <a name='UpcomingFeatures'></a>Upcoming Features
- Predefined themes for the UI/UX.
- Heroes, feature sections, newsletter sign up forms for the marketing websites.
- Checkout forms, shopping carts, product views for the e-commerce websites.
- Fully capable with Abp.io .



<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->



