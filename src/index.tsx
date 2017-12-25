import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { App } from "./components/App";

function renderApp() {
  const app = (
    <App
      name="crazytoucan"
    />
  );

  ReactDOM.render(app, document.getElementById("app"));
}

document.addEventListener("DOMContentLoaded", () => {
  renderApp();
});

/*
 * The block below is needed for Hot Module Reloading (HMR) in webpack 3.
 * We need to re-`require` the file within this block, as otherwise the old version
 * of the code will be referenced in the reload (which is bad).
 *
 * Webpack 3 hot reloading works by propagating any change you make up the `import`
 * structure in your code, so any code that hits the App.tsx file will trigger the
 * reload callback below. Furthermore, code changes that don't hit App.tsx won't
 * get caught by HMR.
 *
 * This code is obviously fickle. https://github.com/gaearon/react-hot-loader#known-limitations
 * walks through some gotchas for component registration.
 */
if (module.hot) {
  module.hot.accept("./components/App", () => {
    const NextApp = require("./components/App").App;
    ReactDOM.render(
      <AppContainer>
        <NextApp
          name="crazytoucan"
        />
      </AppContainer>,
      document.getElementById("app")
    );
  });
}