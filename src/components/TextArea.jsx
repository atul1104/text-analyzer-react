import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TextArea = (props) => {
  const [text, setText] = useState('');

  const handleUppercase = () => {
    const upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    props.showAlert('Converted to UPPERCASE!', 'success');
  };
  const handleLowercase = () => {
    const lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    props.showAlert('Converted to lowercase!', 'success');
  };
  const handleClear = () => {
    setText('');
  };
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied to clipboard!', 'success');
  };
  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Extra spaces removed!', 'success');
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h1>Enter Your Text Below</h1>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Enter your text here"
        >
          <Form.Control
            as="textarea"
            placeholder="Enter your text here"
            style={{
              height: '200px',
            }}
            value={text}
            onChange={handleChange}
          />
        </FloatingLabel>
      </div>
      <div className="container my-3">
        <Button
          disabled={text.length === 0}
          variant="primary mx-2 my-3"
          onClick={handleUppercase}
        >
          Convert to Uppercase
        </Button>
        <Button
          disabled={text.length === 0}
          variant="primary mx-2 my-3"
          onClick={handleLowercase}
        >
          Convert to Lowercase
        </Button>
        <Button
          disabled={text.length === 0}
          variant="primary mx-2 my-3"
          onClick={handleClear}
        >
          Clear
        </Button>
        <Button
          disabled={text.length === 0}
          variant="primary mx-2 my-3"
          onClick={handleCopyToClipboard}
        >
          Copy to clipboard
        </Button>
        <Button
          disabled={text.length === 0}
          variant="primary mx-2 my-3"
          onClick={handleRemoveExtraSpaces}
        >
          Remove extra spaces
        </Button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{' '}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(' ').length} minutes read.</p>
      </div>
      <div
        className="container"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
      </div>
    </>
  );
};

export default TextArea;
