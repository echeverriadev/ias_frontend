import React from 'react';
import ServiceReportForm from './ServiceReportForm';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ServiceReportForm />);
  });

describe('<ServiceReportForm />', () => {
  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy()
  });

  it('Check div error validations', () => {
    const validation = <div className="wrapper-error"></div>
    expect(wrapper.contains(validation)).toEqual(true)
  });
});
