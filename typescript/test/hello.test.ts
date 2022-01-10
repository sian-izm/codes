import TestTarget from '../src/hello';
import { expect } from 'chai';

describe("TestTarget", () => {
    it("should have a name", () => {
        let testTarget = new TestTarget("test");
        assert.equal(testTarget.name, "test");
    });
});
