import React from 'react';
import {Switch, Route} from "react-router-dom";
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import BranchList from './components/BranchList';
import BranchDetail from './components/BranchDetail';
import BranchEdit from './components/BranchEdit';
import LandingPage from "./components/LandingPage";

function App() {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/branches" component={BranchList}/>
            <Route exact path="/branches/:id" component={BranchDetail}/>
            <Route exact path="/branches/:id/edit" component={BranchEdit}/>
            <Route exact path="/users" component={UserList}/>
            <Route exact path="/users/:id" component={UserDetail}/>
        </Switch>
    );
}

export default App;