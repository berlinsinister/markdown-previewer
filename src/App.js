import React from 'react';
import './App.css';
import marked from 'marked';

let txt = `# h1 header
## h2 subheader
[links](https://www.freecodecamp.com), some **bold** or _italic_ stuff!
\`<code></code>\`

> block quote

![React Logo w/ Text](https://i.ibb.co/QHHs6BD/logo-react.png)

\`\`\`
// arrow function sample
const foo () => x > 0 ? x : 32;
\`\`\`
- coffee
- milk
- honey`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: txt,
      first: marked(txt, { breaks: true }),
      flag: false
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: marked(event.target.value, { breaks: true }),
      flag: true
    });
  }
  render() {
    return (
      <div className="container">

        <div id="editor-container">
          <div id="editor-title"><span><i className="fa fa-terminal" id="terminal"></i></span>&nbsp; Editor</div>
          <div id="editor-content">
            <textarea id="editor" onChange={this.handleChange}>
              {this.state.input}
            </textarea>
          </div>
        </div>

        <div id="preview-container">
          <div id="preview-title">Preview</div>
          <div id="preview-content">
            <div id="preview" dangerouslySetInnerHTML={{ __html: this.state.flag ? this.state.input : this.state.first }}></div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;