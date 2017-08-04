import React from "react";
import { Router } from "dva/router";

const cached = {};

function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}
function RouterConfig({ history, app }) {
  const routes = [
    {
      path: "/",
      name: "IndexPage",
      getComponent(nextState, cb) {
        require.ensure([], require => {
          cb(null, require("./routes/IndexPage"));
        });
      },
      childRoutes:[
        {
          path:"home",
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/Home'))
            }, 'home')
          }
        },
        {
          path:"movies",
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/Movies'))
            }, 'movies')
          }
        },
        {
          path:"teleplays",
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/Teleplays'))
            }, 'teleplays')
          }
        },
        {
          path:"cartoons",
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/Cartoons'))
            }, 'cartoons')
          }
        },
        {
          path:"news",
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/News'))
            }, 'news')
          }
        },
        {
          path:"ranks",
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/Ranks'))
            }, 'ranks')
          }
        },
        {
          path:"search",
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/search.js'));
              cb(null, require('./routes/Search'))
            }, 'search')
          }
        }
      ]
    }
  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
