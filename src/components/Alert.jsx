import React from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertDismissible(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: '70px' }}>
      {props.alert && (
        <Alert variant={props.alert.type}>
          <p>
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          </p>
        </Alert>
      )}
    </div>
  );
}

export default AlertDismissible;
