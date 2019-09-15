'use strict'

const e = React.createElement

class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false
    }
  }

  render() {
    if (this.state.liked) {
      return (
        <div>You liked this.</div>
      )
    }

    //I certainly prefer JSX
    return (
      <button
        onClick={ () => this.setState({ liked: true })}>
        Like me fool
      </button>
    )

    // return e(
    //   'button',
    //   { onClick: () => this.setState({ liked: true }) },
    //   'Like'
    // );
  }
}

const domContainer = document.querySelector('#text_input_container');
ReactDOM.render(e(TextInput), domContainer);
