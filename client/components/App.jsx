const React = require('react');
const Welcome = require('./Welcome');
const BusinessForm = require('./BusinessForm');
const BusinessLogin = require('./BusinessLogIn');
const Profile = require('./Profile');
const SignupComplete = require('./SignupComplete');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderThis: 'welcome',
    };
  }

  changePage(pageId) {
    this.setState(() => {
      return { renderThis: pageId };
    });
  }

  render() {
    if (this.state.renderThis === 'welcome') {
      return (
        <div className="container-fluid">
          <Welcome changePage={this.changePage.bind(this)} />
        </div>
      );
    }  
    if (this.state.renderThis === 'businessForm') {
      return (
        <div className="container-fluid">
          <BusinessForm changePage={this.changePage.bind(this)} />
        </div>
      );
    }
    if (this.state.renderThis === 'login') {
      return (
        <div className="container-fluid">
          <BusinessLogin changePage={this.changePage.bind(this)} />
        </div>
      );
    }
    if (this.state.renderThis === 'profile') {
      return (
        <div className="container-fluid">
          <Profile changePage={this.changePage.bind(this)} />
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
