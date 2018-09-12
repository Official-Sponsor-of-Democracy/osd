const React = require('react');


function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <h3>
            Official Sponsors of Democracy
          </h3>
          <dl>
            <dt>
                Support Your Employees
            </dt>
            <dd>
                Bolster employee morale by letting them know that you support their right to vote
            </dd>
            <dt>
                Logistics Made Easy
            </dt>
            <dd>
                We create a logistical gameplan custom-tailored to each employee voter
            </dd>
            <dt>
               No Surprises
            </dt>
            <dd>
              Get ahead of election-day scheduling so business goes smoothly
            </dd>
          </dl>
        </div>
        <div className="col-md-6">
          <div role="form">
            <div className="form-group">

              <label htmlFor="exampleInputEmail1">
                    Email address
                <input type="email" className="form-control" id="exampleInputEmail1" />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                    Password
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
                  Submit
            </button>
          </div>
          <div>
                    Already a member?
            <button type="button" id="existingMember" className="btn btn-background">
              Sign In Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = App;
