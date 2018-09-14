const React = require('react');
<<<<<<< HEAD
const Welcome = require('./Welcome.jsx');
const BusinessForm = require('./BusinessForm.jsx');
=======
const Welcome = require('./Welcome');
const BusinessForm = require('./BusinessForm');
const BusinessLogin = require('./BusinessLogIn');
const Profile = require('./Profile');
>>>>>>> 6b240ae3d2ccd3d8df0dc75ab79f4679a4ff58e5

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
  }
}

module.exports = App;
