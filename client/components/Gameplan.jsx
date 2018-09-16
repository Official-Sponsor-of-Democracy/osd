const React = require('react');

class Gameplan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  printStuff(stuff) {
    console.log(stuff)
  }
  render() {
    return (
      <div  className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div id="gameplan-middle-column" className="col-md-6">
            <img id="osd-icon-gameplan" src="https://preview.ibb.co/cTMFwe/Screen_Shot_2018_09_13_at_12_39_03_PM.png" onClick={this.printStuff.bind(this, this.props)} />
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
                11/6/2018
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
                It should take you about {this.props.employeeInfo.drivetime.toString()} hours to drive to your
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
              Based on our calculations it should take {this.props.employeeInfo.name.toString()} {this.props.employeeInfo.drivetime.toString()} hours
              to exercise their right to vote on [date]. Talk to each other to sort
              out the specifics so everything goes smoothly on election day. Thank
              you for supporting democracy one vote at a time!
            </p>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

module.exports = Gameplan;
