import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

//https://github.com/react-materialize/react-materialize/blob/master/test/setup.js
global.M = require('materialize-css');

configure({ adapter: new Adapter() });
