import _ from 'lodash'
import chai, { assert, expect } from 'chai'
import { flattenObj } from '../utils/flattenObject'
import { flatLevel1, flatLevel2, flatLevel3, flateArrayOfObjects, flatLevel1Expected, flatLevel2Expected, flatLevel3Expected, flateArrayOfObjectsExpected } from './__mocks__/samplesToFlatten'

describe.only('object flattener test suite', () => {
  it('should flatten a 1 level deep object', () => {
    let flatSample1 = flattenObj(flatLevel1)
    expect(_.isEqual(flatSample1, flatLevel1Expected)).to.be.true
  })
  it('should flatten a two level deep object', () => {
    let flatSample2 = flattenObj(flatLevel2)
    expect(_.isEqual(flatSample2, flatLevel2Expected)).to.be.true
  })
  it('should flatten a three level deep object', () => {
    let flatSample3 = flattenObj(flatLevel3)
    expect(_.isEqual(flatSample3, flatLevel3Expected)).to.be.true
  })
  it('should flatten an object including array of objects', () => {
    let flattenNestedArrays = flattenObj(flateArrayOfObjects) // ?
    expect(_.isEqual(flattenNestedArrays, flateArrayOfObjectsExpected)).to.be.true
  })
})
