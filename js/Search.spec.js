import React from 'react'
import Search from './Search'
import ShowCard from './ShowCard'
import preload from '../public/data.json'
import { shallow } from 'enzyme' // new
import { shallowToJson } from 'enzyme-to-json' // new

test('Search snapshot test', () => {
  const component = shallow(<Search/>) // changed
  const tree = shallowToJson(component) // changed
  expect(tree).toMatchSnapshot()
})

test('Search should render a ShowCard for each show', () => {
  const component = shallow(<Search />)
  expect(component.find(ShowCard).length).toEqual(preload.shows.length)
})

test('Search should render correct amount of shows based on search', () => {
  const searchWord = 'house'
  const component = shallow(<Search />)
  // fire the search event
  component.find('input').simulate('change', {target: {value: searchWord}})
  // the filter statement from Search.js
  // normally he would extract this out so it's not a copy/paste
  const showCount = preload.shows.filter((show) =>
    `${show.title} ${show.description}`.toUpperCase()
      .indexOf(searchWord.toUpperCase())
      >= 0).length
  expect(component.find(ShowCard).length).toEqual(showCount)
})
