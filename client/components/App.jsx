const React = require('react');
const Welcome = require('./Welcome.jsx');
const BusinessForm = require('./BusinessForm.jsx');
const BusinessLogin = require('./BusinessLogIn.jsx');
const Profile = require('./Profile.jsx');
const SignupComplete = require('./SignupComplete.jsx');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderThis: 'welcome',
      businessInfo: 'goodbye',
    };
  }

  changePage(pageId, info) {
    // if 
    if (pageId === 'profile') {
      this.setState(() => ({ businessInfo: info, renderThis: pageId }));
    } else {
      this.setState(() => ({ renderThis: pageId }));
    }
  }

  render() {
    if (this.state.renderThis === 'welcome') {
      return (
      
          <Welcome changePage={this.changePage.bind(this)} />
      
      );
    }
    if (this.state.renderThis === 'businessForm') {
      return (
       
          <BusinessForm changePage={this.changePage.bind(this)} />
       
      );
    }
    if (this.state.renderThis === 'login') {
      return (
      
          <BusinessLogin changePage={this.changePage.bind(this)} />
     
      );
    }
    if (this.state.renderThis === 'profile') {
      return (
        <div id="profile" className="container-fluid">
          <Profile info={this.state.businessInfo} changePage={this.changePage.bind(this)} />
        </div>
      );
    }
    if (this.state.renderThis === 'signupcomplete') {
      return (
        <div className="container-fluid">
          <SignupComplete changePage={this.changePage.bind(this)} />
        </div>
      );
    }
  }
}

module.exports = App;
