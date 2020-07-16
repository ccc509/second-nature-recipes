# Second Nature Recipes

## Install and run

### Requirements
 - Node.js, can be downloaded here: https://nodejs.org/en/download/
 - npm (package manager for Node.js) - version 6.9.0 or higher is needed

Once cloned the repo, go to the folder and execute the command below to install all packages.

```
npm install
```

Once the installation is complete, run the command below to start to web app.

```
npm start
```

## Implementation explained

The web app is created using React JS, there are 3 components and each component has its own CSS file. All components are implemented by using functional component considering they are much easier to read and test because they are plain JavaScript functions without state or lifecycle-hooks. Moreover, the React team mentioned that there may be a performance boost for functional component in future React versions

Several libraries are used such as `react-bootstrap` and `react-perfect-scrollbar`

### Recipe List

This component loads the data from a local JSON file, then creates a list of `Recipe preview` which contains the image and title of the recipe, once the preview is clicked, a pop-up window contain the details of the recipe will be displayed and you can exit the window by click the button on the top right or click anywhere outside of the window.

The pop-up window was implemented by using `Modal` from library `react-bootstrap`  the modal is a wrapper of component `recipe details panel` which will be explained later.

### Recipe Preview

This component displays the smaller sized image (75px in width) and title of the recipe. In addition, a clicked handler is passed in which enables users to click on the preview and display the recipe details panel.

### Recipe Details Panel

This component is wrapped inside a `react-perfect-scrollbar` which enables users to scroll up and down. However, a minimum scroll bar length is defined as 50.

Each ingredient and method is displayed on a different row.

## Code style

In order to ensure the code has a level of clarity that makes reading and maintaining easier for anyone who has to work on it, ESLint is configured and used. The JavaScript Style Guide used for this web app is Airbnb. Prettier is also used to make code look better. Scripts below have configured 

```
npm run lint
npm run lint-fix
npm run lint-fix-win
npm run lint-prettier
npm run lint-prettier-fix
```

PS do not use `npm run lint-fix-win` on Mac, use `npm run lint-fix` instead
