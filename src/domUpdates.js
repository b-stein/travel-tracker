let domUpdates = {
  displayAgentDash() {
    document.querySelector('.login').classList.add('hide');
    document.querySelector('.agent-dash').classList.remove('hide');
  },

  displayUserDash() {
    document.querySelector('.login').classList.add('hide');
    document.querySelector('.traveler-dash').classList.remove('hide');
  }
}

export default domUpdates;