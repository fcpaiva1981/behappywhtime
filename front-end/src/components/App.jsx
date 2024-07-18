import React from 'react';
import Header from './Header';
import Novousuario from "./Novousuario";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Novousuario/>
            </div>
        );
    }
}

export default App;