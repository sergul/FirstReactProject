Install Babel

1. yarn add live-server
2. yarn add babel-cli babel-core babel-loader
3. yarn add babel-preset-env babel-plugin-transform-class-properties 
    (transpile with babel with this:
    babel src/index.js --out-file=public/bundle.js --presets=env --watch)
4. create the "scripts" section in package.json file

Install Webpack

1. yarn add webpack webpack-cli webpack-dev-server
2. create webpack.config.js file

npm i -D extract-text-webpack-plugin@next  install this version to fix the css extract bundle problem

Commands to build/run the project

"serve": "live-server public/" - runs the live-server local server to listen the changes
"build:dev": "webpack" - generates a development bundle sources: ./public/build/bundle.js and ./public/build/styles.css
"build:prod": "webpack -p --env production" - generates production sources ./public/build/bundle.js and ./public/build/styles.css
"dev-server": "webpack-dev-server" - runs webpack + live-server based on one time generated ./public/build/bundle.js file.