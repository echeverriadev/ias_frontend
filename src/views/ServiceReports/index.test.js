import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ServiceReports from "./index";
configure({ adapter: new Adapter() });


let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ServiceReports />);
  });

describe('<ServiceReportForm />', () => {
  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy()
  });

  it('Check if create new report buttons renders on screen', () => {
    expect(wrapper.find('#create').text()).toEqual('Crear nuevo reporte')
  });


});
