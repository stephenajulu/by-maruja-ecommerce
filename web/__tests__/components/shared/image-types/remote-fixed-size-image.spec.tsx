import { mount } from 'enzyme';
import React from 'react';
import LazyLoadImage from '../../../../src/components/shared/image-types/lazy-image';
import RemoteFixedSizeImage from '../../../../src/components/shared/image-types/remote-fixed-size-image';

const image = {
  image: '',
  alt: '',
  asset: '',
};

describe('RemoteFixedSizeImage component', () => {
  it('should return a lazyloadimage component', () => {
    const wrapper = mount(<RemoteFixedSizeImage {...image} />);

    expect(wrapper.find(LazyLoadImage).length).toBe(1);
  });
});
