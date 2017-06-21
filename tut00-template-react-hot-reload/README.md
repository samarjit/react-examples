[ref] https://webpack.js.org/guides/hmr-react/

npm i babel-core babel-loader babel-preset-es2015 babel-preset-react -S
npm i react react-dom -S
npm i webpack webpack-dev-server -D
npm i react-hot-loader@next -D

webpack-dev-server ./src/index.jsx --hot --inline
>node_modules\.bin\webpack-dev-server ./src/index.jsx --hot --inline

