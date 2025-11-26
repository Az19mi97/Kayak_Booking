import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Selection from './extension/Selection';
import {kayakInfo} from './product/KayakInfo';

Enzyme.configure({ adapter: new Adapter() });

describe('Filtrering viser resultater baseret på beståede parametre', () => {
  it('Skal filtreres efter pris', () => {
    const expectedData =
    [
      {
        kayakID: 'Inflatable Kayak',
        brand: 'Ukendt',
        description: 'Mest beregnet til whitewater.',
        price: 500,
        location:
        [
           'Lyngby',
           'Ballerup'
        ]
      }
    ];

    const wrapper = shallow(<Selection />);
    const instance = wrapper.instance();
    const minPrice = 100;
    const maxPrice = 200;
    instance.filterByPrice(minPrice,maxPrice);
    expect(wrapper.state('data')).toEqual(expectedData);
  });

   it('Skal filtreres efter personer', () => {
    const expectedData = [];
    const wrapper = shallow(<Selection />);
    expect(wrapper.state('data')).toEqual(expectedData);
  });

  it('Skal filtreres efter brands', () => {
    const expectedData = [
      {
        kayakID: 'Crossover Kayak',
        brand: 'Ukendt',
        description: 'Tackler en række forskellige miljøer uden at skifte båd.',
        price: 400,
        location:
        [
          'Lyngby',
          'Ballerup'
        ]
      }
    ];
    const wrapper = shallow(<Selection />);
    const instance = wrapper.instance();
    const checked = true;
    const brand = 'Uknown';
    instance.filtrationByBrands(checked,brand);
    expect(wrapper.state('data')).toEqual(expectedData);
    const unChecked = false;
    instance.filtrationByBrands(unChecked,brand);
    const updatedData = kayakInfo;
    expect(wrapper.state('data')).toEqual(updatedData);
  });

  it('Skal filtreres efter ønskede informationer', () => {
    const expectedData = [
      {
        kayakID: 'Recreational Kayak',
        brand: 'Ukendt',
        description: 'De bruges bedst på søer og fladvandsstrømme.',
        price: 300,
        location:
          [
            'Lyngby',
            'Ballerup'
          ]
    }
    ];
    const wrapper = shallow(<Selection />);expect(wrapper.state('data')).toEqual(expectedData);
    const updatedData = kayakInfo;expect(wrapper.state('data')).toEqual(updatedData);
  });
});
