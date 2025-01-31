import sinon from 'sinon'

import BaseProperty, { PropertyType } from '../../../src/backend/adapters/base-property'
import BaseResource from '../../../src/backend/adapters/base-resource'

export const expectedResult = {
  id: 'someID',
  properties: [...Array(10)].map((a, i) => new BaseProperty({
    path: `property.${i}`, type: PropertyType.string,
  })),
  resourceName: 'resourceName',
  databaseName: 'databaseName',
  databaseType: 'mongodb',
  parent: {
    name: 'databaseName',
    icon: 'icon-mongodb',
  },
}

export default (): BaseResource => (
  {
    _decorated: null,
    id: sinon.stub().returns(expectedResult.id),
    properties: sinon.stub().returns(expectedResult.properties),
    name: sinon.stub().returns(expectedResult.resourceName),
    property: sinon.stub().returns(new BaseProperty({ path: 'prop', type: PropertyType.string })),
    databaseName: sinon.stub().returns(expectedResult.databaseName),
    databaseType: sinon.stub().returns(expectedResult.databaseType),
    count: sinon.stub(),
    find: sinon.stub(),
    populate: sinon.stub(),
    findOne: sinon.stub(),
    build: sinon.stub(),
    create: sinon.stub(),
    update: sinon.stub(),
    delete: sinon.stub(),
    assignDecorator: sinon.stub(),
    decorate: sinon.stub(),
  }
)
