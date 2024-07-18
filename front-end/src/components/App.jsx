import React from 'react';
import Header from './header';
import Novousuario from "./novousuario";

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