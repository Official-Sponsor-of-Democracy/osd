const React = require('react');
const Utilities = require('../utilities');

class SignupComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  // renderPage(page) {
  //   this.state.clicked++;
  //   if (this.state.clicked > 0) {
  //     this.props.changePage(page);
  //   }
  // }

  // changePage(pageId) {
  //   this.setState(() => {
  //     return { renderThis: pageId };
  //   });
  // }

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <h3>
              Thank you for joining the cause. 
			      </h3>
            <p>
              You should receive an email from us with more info on how your employees can participate. After receiving the email you should be able to log in with your email and password to view your business profile. 
            </p>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = SignupComplete;
