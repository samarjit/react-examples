[ref] https://webpack.js.org/guides/hmr-react/

npm i babel-core babel-loader babel-preset-es2015 babel-preset-react -S
npm i react react-dom -S
npm i webpack webpack-dev-server -D
npm i react-hot-loader@next -D

webpack-dev-server ./src/index.jsx --hot --inline
>node_modules\.bin\webpack-dev-server ./src/index.jsx --hot --inline

npm i -S redux
npm i -S react-redux

Add webpack plugin for object destructuring
npm install --save-dev babel-plugin-transform-es2015-destructuring
npm install --save-dev babel-plugin-transform-object-rest-spread    --- ...state is object spreaad not array spread operator. This is still not completed specs, so just use plugins/polyfills.

npm i -S redux-thunk-middleware   ---helps in nested reducers
npm i -S redux-promise-middleware   ---helps in reducing the code of complex middleware dispatches. It understans payloads that are promises and adds fires few standard redux actions by adding _PENDING _REJECTED _FULFILLED to action prefix. 

>npm i -S babel-plugin-transform-decorators-legacy --for decorators @connect
npm i -S babel-plugin-transform-class-properties --required for decorators too

npm i -S babel-plugin-react-html-attrs?
npm i -S babel-preset-stage-0 ? 