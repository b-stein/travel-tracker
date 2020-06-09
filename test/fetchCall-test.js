import chai from 'chai';
import { expect } from 'chai';
import FetchCall from '../src/fetchCall'
const spies = require('chai-spies');
chai.use(spies);

describe('FetchCall', function() {
  let fetchCall;
  
  beforeEach(function() {
    fetchCall = new FetchCall()
    global.fetch = () => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          x: true,
        }),
      }) 
    }
    chai.spy.on(fetchCall, 'fetch', () => { })
    // window.fetch = {}
    // let newPromise = new Promise() 
    // do i need another chai spy for the fetch specifically? 
  })
  
  it('should have a property of rootUrl', function() {
    expect(fetchCall.rootURL).to.equal('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data');
  });
  
  it('should get all travelers', function() {
    fetchCall.getTravelers();
    expect(fetch).to.have.been.called(1);
    // expect(api.getTravelers()).to.equal(fetch(url).then(response => response.json()).catch(err => console.log(err.message)));
  });

  // it.skip('should get all trips', function() {
  //   expect(fetchCall.getTrips()).to.equal(fetch(url).then(response => response.json()).catch(err => console.log(err.message)));
  // });

  // it.skip('should get all travel destinations', function() {
  //   expect(fetchCall.getDestinations()).to.equal(fetch(url).then(response => response.json()).catch(err => console.log(err.message)));
  // });
});