import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'

export default(
<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/contact" component={Contact}/>
  <Route path="/about" component={About}/>
</Switch>
)