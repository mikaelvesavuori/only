import * as Mocha from 'mocha';
import { assert } from 'chai';
import * as test from '../app/scripts/ts/app';

describe('#Typescript function', function () {
  it('should always return 1', function () {
    assert.equal(1, test.return1());
  });
});
