import chai from 'chai';
import { expect } from 'chai';
import FetchCall from '../src/fetchCall'
const spies = require('chai-spies');
chai.use(spies);

describe('FetchCall', function() {
  let fetchCall;
  
  beforeEach(function() {
    fetchCall = new FetchCall();
    global.window = () => {};
    chai.spy.on(window, 'fetch', () => { })
  })
  
  it('should have a property of rootURL', function() {
    expect(fetchCall.rootURL).to.equal('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data');
  })
  
  it.skip('should call to get all travelers', function() {
    fetchCall.getTravelers();
    expect(window.fetch).to.have.been.called(1);
  })
})