import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-dom/extend-expect';
import { cleanup } from 'react-testing-library';

require('jest-localstorage-mock');

configure({ adapter: new Adapter() });

afterEach(cleanup);
