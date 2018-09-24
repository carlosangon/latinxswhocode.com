import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LatinxWhoCodeApp from "./LatinxWhoCodeApp";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { startSetDevs } from "./actions/devs";
import { unregister } from "./registerServiceWorker";

const store = configureStore();

class Jsx extends Component {
  componentWillMount(){
    store.dispatch(startSetDevs())
  }
  render() {
    return (
      <Provider store={store}>
        <LatinxWhoCodeApp />
      </Provider>
    );
  }
}

ReactDOM.render(<Jsx/>, document.getElementById("root"));
unregister();