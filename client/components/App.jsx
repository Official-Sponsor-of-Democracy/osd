const React = require('react');
const Welcome = require('./Welcome');
const BusinessForm = require('./BusinessForm');

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
    } else if (this.state.renderThis === 'businessForm') {
      return (
        <div className="container-fluid">
          <BusinessForm />
        </div>
      );
    }
  }
}

module.exports = App;
