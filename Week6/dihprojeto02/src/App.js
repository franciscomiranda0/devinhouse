import { Provider } from 'react-redux';
import store from './redux/store.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes/routes';
import EntryView from './views/EntryView';

function App() {

  return (
    <div className={'app__root'}>
      <Provider
        store={store}>
        <BrowserRouter
          basename={process.env.PUBLIC_URL}>
          <Switch>
            {routes.map((route, index) =>
              <Route
                component={route.component}
                exact
                key={index}
                path={route.path} />
            )}
          </Switch>
        </BrowserRouter>
        <EntryView />
      </Provider>
    </div>
  );
}

export default App;
