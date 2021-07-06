import { Switch, Route, Redirect } from 'react-router'
import Home from "./components/Home/Home"
import About from "./components/About/About"

const Router = ()=>{
  return(
    <Switch>
      <Route exact path = '/' component ={Home}/>
      <Route path = '/about' component = {About}/>
    </Switch>
  )
}

export default Router