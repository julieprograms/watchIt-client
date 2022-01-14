import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import moviesApp from './reducers/reducers';

import {MainView} from './components/main-view/main-view';

//import statement to indicate that './index.scss' needs to be bundled
import './index.scss';

const store = createStore(moviesApp, devToolsEnhancer());

//main component (will eventually use all the others)
class watchItApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <MainView />
        </Container>
      </Provider>
    );
  }
}

//finds the root of the app:
const container = document.getElementsByClassName('app-container')[0];

//tell react to render the app in the root DOM element
ReactDOM.render(React.createElement(watchItApplication), container);
