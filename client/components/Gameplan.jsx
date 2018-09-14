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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
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
                1808 Elysian Fields Ave
              </dd>
              <dd>
                New Orleans, LA 70117
              </dd>
              <dt>
                Plan Ahead
              </dt>
              <dd>
                It should take you about two hours to drive to your
                polling location, vote, and get to work
              </dd>
            </dl>
            <img alt="Bootstrap Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" onClick={this.printStuff.bind(this, this.props)}/>
            <h3 className="text-center text-success">
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
              Based on our calculations it should take {this.props.employeeInfo.name.toString()} [number] hours
              to exercise their right to vote on [date]. Talk to each other to sort
              out the specifics so everything goes smoothly on election day. Thank
              you for supporting democracy one vote at a time!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Gameplan;
