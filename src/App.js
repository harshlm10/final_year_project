import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './components/Home'
import Excercise from './components/Excercise';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/excercise' component={Excercise} exact/>
            </Switch>
        </Router>
    )
}

export default App