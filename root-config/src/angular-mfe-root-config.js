import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructLayoutEngine,
  constructRoutes,
} from "single-spa-layout";
import eventBus from "./event-bus.js";
// Esponi l'EventBus globalmente
window.eventBus = eventBus;

const data = {
  props: {
    favoriteDog: "Franklin",
  },
  loaders: {},
};

const routes = constructRoutes(
  document.querySelector("#single-spa-layout"),
  data,
);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return import(/* webpackIgnore: true */ name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();