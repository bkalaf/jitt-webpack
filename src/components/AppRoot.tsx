import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function AppRoot() {
    return <BrowserRouter>
        <div>
            <h3>JITT</h3>
            <p>Testing</p>
            <button className="button indigo small" type="button">Click me!</button>
        </div>
    </BrowserRouter>
}

export default AppRoot;