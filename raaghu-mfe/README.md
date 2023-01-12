
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<p align="center">
    <a href="https://raaghu.io" target="_blank">
        <img src="./raaghu_icon.png" alt="logo" width="125"/>
    </a>
<p/>
<p>
<h1 align="center">Raaghu Micro-Frontend</h1>
<p/>

<p align="center">
    <a href="https://raaghu.io" target="blank">View Demo</a>
    ·
    <a href="https://github.com/Wai-Technologies/raaghu/issues/new">Report Bug</a>
</p>

<!-- vscode-markdown-toc -->



- [Introducing `raaghu`](#introducing-raaghu)
- [Demo](#demo)
- [ Features](#-features)
- [ Prerequisites for development ⚛️](#-prerequisites-for-development-️)
- [ How to Set up `raaghu-mfe` for Development?](#-how-to-set-up-raaghu-mfe-for-development)
- [Development support](#development-support)
- [Built With](#built-with)


##  <a name='Introducingraaghu-elements'></a>Introducing `raaghu`

__`raaghu`__ micro-frontend(mfe) is an angular based open-source software built with Bootstrap 5 and Storybook framework.raaghu mfe enables you to build complex components as well as UI layout by applying CSS to the inbuilt __`raaghu-elements`__, components and pages according to the wireframe design<br>
Micro front-end architecture breaks page designs into components that results in a high-level reusabiility, flexibility, with ease of maintainence.


##  <a name='Demo'></a>Demo

Here is a quick demo

<img title="imge" alt="gif" src="../static/raaghu.gif">


Share your appreciation to raaghu design system contributors with a ⭐️

##   <a name='Features'></a> Features



## <a name='pre'></a> Prerequisites for development ⚛️

> #### To use the raaghu, you should be familiar with:
> - Angular: Desired version-13.x 
> - TypeScript
> - JavaScript
> - HTML
> - CSS

> #### To setup raaghu on your local system:
> - Angular-CLI (Command Line Interface): version 13.x
> - Node.js: version 16.x
> - NPM (Node Package Manager): version 8.x

## <a name='setup'></a> How to Set up `raaghu-mfe` for Development?
You can run `raaghu-mfe` locally with a few easy steps.

1. Clone the repository

```bash
git clone https://github.com/Wai-Technologies/raaghu.git
```
<img src="../static/clone.png" alt="Screenshot-17"  border="0"><br />

2. Change the working directory
 
```bash
cd raaghu/raaghu-elements
```



3. Install dependencies

```bash
npm install
```
<img src="../static/MicrosoftTeams-image (8).png" alt="Screenshot-17"  border="0"><br />


4. Change the working directory

```bash
cd raaghu/raaghu-mfe
```
<img src="../static/MicrosoftTeams-image (10).png" alt="Screenshot-17"  border="0"><br />

5. Install dependencies

```bash
npm install
```
<img src="../static/MicrosoftTeams-image (9).png" alt="Screenshot-17"  border="0"><br />


6. Synchronize raaghu-elements repository

```bash
npm run sync-elements
```
<img src="../static/MicrosoftTeams-image (10).png" alt="Screenshot-17"  border="0"><br />
> **_NOTE:_** Above command will sync/copy raaghu-elements from public repository to the above local MFE project.

7. Patch Dev Server

```bash
npm run patch-dev-server
```
<img src="../static/MicrosoftTeams-image (12).png" alt="Screenshot-17"  border="0"><br />

8. Build and serve

```bash
npm run start
```
<img src="../static/MicrosoftTeams-image (13).png" alt="Screenshot-17"  border="0"><br />
9. Storybook


```bash
# View all pages and components and elements inside the storybook
npm run storybook 
```



##  Development support

1. Create a common Library

```bash
npm run lib <library_name>
```

2. Create a component

```bash
npm run page rds-components <component_name>
```

3. Create a screen / MFE

```bash
npm run mfe <mfe_name> <port_number>
```

4. Create a page within an existing MFE

```bash
npm run page <mfe_name> <page_name>
```


##  <a name='BuiltWith'></a>Built With
- [Angular 15](https://angular.io/): Modern web Developer's platform
- [Bootstrap 5](https://getbootstrap.com/): Sleek, intuitive, and powerful framework for faster and easier web development.
- [raaghu-elements Libraries](https://www.npmjs.com/package/rds-elements): Build bulletproof UI components faster
- [Storybook](https://storybook.js.org/): Build bulletproof UI components faster
 


