const React = require('react');
const Utilities = require('../utilities');

class Gameplan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
    };
  }

  makeEmail(propsObj) {
    console.log(propsObj.employeeInfo);
    // const { businessName } = propsObj.employeeInfo;
    // const { employerContact } = propsObj.employeeInfo;
    // const { address } = propsObj.employeeInfo;
    // const { numEmployees } = propsObj.employeeInfo;
    // const { email } = propsObj.employeeInfo;
    // Utilities.createEmail(employerContact, businessId, businessEmail, userName, userEmail, driveTime)
    // .then(()=>{
    //   alert(`Thanks ${userName}, your email has been sent`)
    // })
   
  }

  

  render() {
    return (
      <div id="gameplan" className="container-fluid">
        <div className="row">
          <div className="col-md-3" />
          <div id="gameplan-middle-column" className="col-md-6">
            <img id="osd-icon-gameplan" src="https://preview.ibb.co/cTMFwe/Screen_Shot_2018_09_13_at_12_39_03_PM.png" />
            <h3 className="text-center">
              The Gameplan
            </h3>
            <dl>
              <dt>
                Election
              </dt>
              <dd>
                U.S. Midterms
              </dd>
              <dt>
                Election Date
              </dt>
              <dd>
                Tuesday, November 6th, 2018
              </dd>
              <dt>
                Voting Location
              </dt>
              <dd>
                {this.props.employeeInfo.chosenlocation.toString()}
              </dd>
              <dt>
                Plan Ahead
              </dt>
              <dd>
                It should take you about {this.props.employeeInfo.drivetime.toString()} 
                hours to drive to your
                polling location, vote, and get to work
              </dd>
            </dl>
            <h3 className="text-center">
              Looping in your boss
            </h3>
            <dt>
              Your boss supports you as a voter
            </dt>
            <dd>
              We will email this gameplan to you and your boss so you two
              can finalize your plan
            </dd>
            <p className="text-center text-muted">
              Based on our calculations it should take {this.props.employeeInfo.name.toString()} approximately {this.props.employeeInfo.drivetime.toString()} hours to exercise their right to vote on Tuesday, November 6th, 2018.
              Talk to each other to sort out the specifics
              so everything goes smoothly on election day. Thank
              you for supporting democracy one vote at a time!
            </p>
            <button type="submit" className="btn btn-primary" onClick={this.makeEmail.bind(this, this.props)}>
              Approve
              </button>
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    );
  }
}

module.exports = Gameplan;
