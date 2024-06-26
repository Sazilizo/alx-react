import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('<BodySectionWithMarginBottom />', () => {
  it('renders all component and props', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title='test title'>
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    const div = wrapper.find('.bodySectionWithMargin').first();
    const BodySection = wrapper.find('BodySection');
    const innerBody = BodySection.dive();
    const h2 = innerBody.find('h2');
    const p = innerBody.find('p');
    expect(div.exists()).toEqual(true);
    expect(BodySection).toHaveLength(1);
    expect(BodySection.props().title).toEqual('test title');
    expect(h2).toHaveLength(1);
    expect(h2.text()).toEqual('test title');
    expect(p).toHaveLength(1);
    expect(p.text()).toEqual('test children node');
  });
});