import {BrowserRouter} from 'react-router-dom'
import Router from './Router';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <BrowserRouter>
       <Nav/>
       <Router/>
    </BrowserRouter>
  );
}

export default App;
