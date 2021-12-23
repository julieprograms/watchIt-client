import React from 'react';
import ReactDOM from 'react-dom';

//import statement to indicate that './index.scss' needs to be bundled
import './index.scss';

//main component (will eventually use all the others)
class watchItApplication extends React.Component {
  render() {
    return (
      <div className="watchIt">
        <div>Good morning</div>
      </div>
    );
  }
}

//finds the root of the app:
const container = document.getElementsByClassName('app-container')[0];

//tell react to render the app in the root DOM element
ReactDOM.render(React.createElement(watchItApplication), container);
