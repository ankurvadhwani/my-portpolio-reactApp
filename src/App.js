import React from "react";
import "./style.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Project from "./components/Projects";
import About from "./components/About";
import Header from './components/Header'
export default function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
        <Route path="/project" exact component={Project} />
      </Switch>
    </div>
  );
}
