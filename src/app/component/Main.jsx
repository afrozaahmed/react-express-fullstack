import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store';
import {ConnectedDashboard} from './Dashboard'
import {Router,Route} from 'react-router-dom';
import {history} from '../store/history';
import {ConnectedNavigation} from './Navigation';
import {ConnectedTaskDetails} from './TaskDetail';

export const Main = () => (
    <Router history={history}>

    
    <Provider store={store}>
        <div>
            <h3>
                <ConnectedNavigation />
               {/*<ConnectedDashboard />*/}
               <Route 
               exact
               path="/dashboard"
               render={()=>(<ConnectedDashboard/>)}
               />
               <Route 
               exact
               path="/task/:id"
               render={({match})=>(<ConnectedTaskDetails match={match}/>)}
               />
            </h3>
        </div>
    </Provider>
    </Router>
)