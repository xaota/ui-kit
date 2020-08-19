import config from './config/development.json';
import Application from './source/server/index.js';

const appliction = new Application(config);
appliction.launch();
