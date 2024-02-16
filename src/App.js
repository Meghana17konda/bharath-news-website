import React, { Component } from "react";
import "./App.css";
import { Footer, Navbar, News } from "./components";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  apiKey = process.env.REACT_APP_NEWS_ORG_API;
  render() {
    return (
      <>
        <LoadingBar
          color="var(--secondary-color)"
          progress={this.state.progress}
          height={5}
        />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="home"
                pageSize={8}
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="business"
                pageSize={8}
                country="us"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={8}
                country="us"
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="health"
                pageSize={8}
                country="us"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="science"
                pageSize={8}
                country="us"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="sports"
                pageSize={8}
                country="us"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="technology"
                pageSize={8}
                country="us"
                category="technology"
              />
            }
          />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;