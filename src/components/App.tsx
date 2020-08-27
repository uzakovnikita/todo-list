import React, { FunctionComponent } from "react";
import {Auth} from './Auth';
// import {newTaskForm} from './newTaskForm';
// import {tasks} from './tasks';

export const App: FunctionComponent () => {
    return (
        <div className="app">
					<Auth />
        </div>
    )
}