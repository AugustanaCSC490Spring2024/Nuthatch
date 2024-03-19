'use strict';

const e = React.createElement;

class SignUpButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Sign Up'
    );
  }
}

const domContainer = document.querySelector('#sign_up_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(SignUpButton));