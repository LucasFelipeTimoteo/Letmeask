import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { AdminRoom } from './pages/AdminRoom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/rooms/new">
              <NewRoom />
            </Route>
            <Route path="/rooms/:id">
              <Room />
            </Route>
            <Route path="/admin/rooms/:id">
              <AdminRoom />
            </Route>
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
