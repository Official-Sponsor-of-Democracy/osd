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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            
          </div>
         
          <div id="middle-column" className="col-md-6">
            <img id="osd-icon" src="https://preview.ibb.co/cTMFwe/Screen_Shot_2018_09_13_at_12_39_03_PM.png"/>
            <h3 >
              Thank you for joining the cause. 
			      </h3>
            <p>
              After the election we will send you information about your employee-voter turnout,
            along with an Offical Sponsor of Democracy seal
            which you can proudly display at the office.
             </p>
             <p>
             Check your email for more info on how you can start encouraging your employees to participate. 
            </p>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

module.exports = SignupComplete;
