import { faHome } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Button from './atoms/Button';
import Navbar from './organisms/Navbar';
import Brand from '@organisms/Navbar/Brand';
import { FirebaseContext } from '../fb';
import firebase from 'firebase';

import { app } from './../fb';

function AppRoot() {
    const [currentUser, setCurrentUser] = React.useState<firebase.User | null>(
        null
    );

    React.useEffect(() => {
        return app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
        });
    }, []);
    return (
        <BrowserRouter>
            <FirebaseContext.Provider value={{ app, currentUser }}>
                <div>
                    <Navbar fixed="top" color="blue-gray" brandName="JITT" brandIcon={faHome}>
                        
                    </Navbar>
                    <h3>JITT</h3>
                    <p>Testing</p>
                    <Button tag="button" type="button" color="light-green">
                        Red Button
                    </Button>
                    <button
                        className="button indigo has-background-blue small"
                        type="button">
                        Click me!
                    </button>
                </div>
            </FirebaseContext.Provider>
        </BrowserRouter>
    );
}

export default AppRoot;
