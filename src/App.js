import React, { Component } from "react";
import Header from "./components/Header";
import PostsPanel from "./components/PostsPanel";
import LinksPanel from "./components/LinksPanel";

const postsPanelStyle = {
    padding: "30px"
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="columns" style={postsPanelStyle}>
          <div className="column is-three-quarters">
            <PostsPanel />
          </div>
          <div className="column">
            <LinksPanel />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
