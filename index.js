import config from './config/development.json';
import Application from './source/server/Application.js';

const appliction = new Application(config);
appliction.launch();
