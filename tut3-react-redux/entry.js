import {observable, computed} from 'mobx';
    import {observer} from 'mobx-react';
    import React from 'react';
    import {Component} from 'react'
import ReactDOM from 'react-dom'

    @observer class Store extends Component {
        @observable count = 0;
       render(){
            return(
                <div>
                     Counter : {this.count} <br/>
                    <button onClick={this.handleInc}>+++</button>
                    <button onClick={this.handleDec}>---</button>
                </div>
            )
       } 

       handleInc= () =>{
            this.count++;
       }

       handleDec= () =>{
           this.count--;
       }
    }

const render = (Component) => {
  ReactDOM.render(
    
    <Store/>
   ,
    document.getElementById('app')
  );
};

render(Store);

// if (module.hot) {
//   module.hot.accept('./app', () => {
//     render(App)
//   });
// }

export default Store;