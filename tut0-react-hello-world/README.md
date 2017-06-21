https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr

npm i webpack -S

mkdir src

touch src/app.js

touch webpack.config.js

./node_modules/.bin/webpack -d


npm i babel-loader babel-preset-es2015 babel-preset-react -S

npm i -S babel-core


touch .babelrc

```
{
  "presets" : ["es2015", "react"]
}
```
```
// Existing Code ....
var config = {
  // Existing Code ....
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
}
```

## Source Maps
devtool: 'cheap-module-eval-source-map',

npm i react -S
npm i react react-dom -S

package.json

{
  // ...
  "scripts": {
    "dev": "webpack -d --watch",
    "build" : "webpack -p"
  },
  // ...
}



./node_modules/.bin/webpack -d --watch


import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

render(<App/>, document.getElementById('app'));
