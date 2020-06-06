import { expect } from 'chai';
import domUpdates from '../src/domUpdates';
const chai = require('chai');
let spies = require('chai-spies');
chai.use(spies);

describe('domUpdates', () => {
	beforeEach(() => {
		global.document = {};
		chai.spy.on(document, ['querySelector'], () => {});
	})

	it('should be an object', () => {
		expect(domUpdates).to.be.an('object');
	})

	it('should spy on querySelector functions being called on the document', () => {
		domUpdates.querySelector();
		expect(document.querySelector).to.have.been.called(1);
	})
})