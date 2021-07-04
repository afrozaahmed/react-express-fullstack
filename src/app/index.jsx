import {store} from './store'
import React from 'react';
import ReactDOM from 'react-dom';

import {Main} from './component/Main';

ReactDOM.render(
    <Main />,
    document.getElementById("app")
)


console.log(store.getState());