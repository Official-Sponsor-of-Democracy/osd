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
              h3. Lorem ipsum dolor sit amet.
			      </h3>
            <p>
              Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus. <small>Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit. Nulla euismod ultrices massa, et feugiat ipsum consequat eu.</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = SignupComplete;
