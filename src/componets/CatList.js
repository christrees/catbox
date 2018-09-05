import React, { Component } from 'react';
import config from "../config";
import { load } from '../helpers/spreadsheet';

class CatList extends Component {

  state = {
    pile: [],
    error: null
  }

  componentDidMount() {
    // 1. Load the JavaScript client library.
    window.gapi.load("client", this.initClient);
  }

  onLoad = (data, error) => {
    if (data) {
      const pile = data.items;
      this.setState({ pile });
    } else {
      this.setState({ error });
    }
  };

  initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
      // 3. Initialize and make the API request.
      load(this.onLoad);
    });
  };

  /*
  render() {
    return (
      <div>
        This will be the list of catcrap
      </div>
    );
  }
  */
  render() {
    const { pile, error } = this.state;
    if (error) {
      return <div>{this.state.error}</div>;
    }
    return (
      <ul>
        {pile.map((item, i) => (
          <li key={i}>
            {item.colA} {item.colB} {item.colC}
          </li>
        ))}
      </ul>
    );
  }
}

export default CatList;
