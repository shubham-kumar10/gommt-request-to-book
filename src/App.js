import './App.scss';
import Header from './components/Header';
import PropertyList from './pages/PropertyList';
import Signin from './pages/Signin';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { userContext } from './context/UserContext';
import BookProperty from './pages/BookProperty';
import Signup from './pages/Signup';
import BookingList from './pages/BookingList';
import Booking from './components/Booking';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  const [user, setUser] = useState(null);
  let query = useQuery();

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <userContext.Provider value={value}>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" component={PropertyList} exact />
          <Route
            path="/signup"
            isHost={query.get('isHost')}
            component={Signup}
          />
          <Route path="/addProperty" component={PropertyList} />
          <Route path="/book" component={BookProperty} />
          <Route path="/request/:id" component={Booking} />
          <Route path="/signin" component={Signin} />
          <Route path="/booking" component={BookingList} />
          <Route path="/booking/:userid" component={BookingList} />
        </Switch>
      </div>
    </userContext.Provider>
  );
}

export default App;
