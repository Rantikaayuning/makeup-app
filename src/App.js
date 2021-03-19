import './styles.css';
import Homepage from './pages/Homepage';
import { Footer } from './components/Footer';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          component={Homepage}
        />
      </Switch>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
