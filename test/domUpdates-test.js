import { expect } from 'chai';
import domUpdates from '../src/domUpdates';
const chai = require('chai');
let spies = require('chai-spies');
chai.use(spies);
import destinations from './destinations-data';
import trips from './trips';
import Agent from '../src/agent';
import Traveler from '../src/traveler';

describe('querySelector', () => {
	let agent;
	let user;
	let felice = {
		"id": 19,
		"name": "Felicdad Rishbrook",
		"travelerType": "thrill-seeker"
	};
	let tripArray;

	beforeEach(() => {
		agent = new Agent('agent', 'travel2020', trips);
		user = new Traveler(felice, 'traveler19', 'travel2020', trips);
		tripArray = [trips[0]];

		global.document = {};
		chai.spy.on(document, ['querySelector'], () => {
			return {
				classList: {
					add: () => {},
					remove: () => {}
				},
				insertAdjacentHTML: () => {}
			};
		});
	})

	it('should be an object', () => {
		expect(domUpdates).to.be.an('object');
	})

	it('should spy on querySelector functions being called on the document for displayAgentDash invocation', () => {
		domUpdates.displayAgentDash(agent, destinations, '2020/09/06');

		expect(document.querySelector).to.have.been.called(7);
		expect(document.querySelector).to.have.been.called.with('.login-wrapper');
	})

	it('should spy on querySelector functions being called on the document for displayUserDash invocation', () => {
		domUpdates.displayUserDash(user, destinations, '2020/09/06');

		expect(document.querySelector).to.have.been.called(9);
		expect(document.querySelector).to.have.been.called.with('.login-wrapper');
	})

	// it.skip('should spy on insertAdjacentHTML being called to the document', () => {
	// 	let spy = chai.spy.on(domUpdates, 'displayReqForm', () => {});
	// 	chai.spy.on(document, 'insertAdjacentHTML', () => {});

	// 	domUpdates.generatePendRequests(document.querySelector('.revenue'), tripArray, destinations);

	// 	expect(spy).to.have.been.called(1);
	// })
})