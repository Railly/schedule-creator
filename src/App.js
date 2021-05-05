import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./pages/home";
import Form from "./pages/form";
import Solution from './pages/solution';
import Layout from './components/layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/form" component={Form}/>
          <Route path="/solution" component={Solution}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
