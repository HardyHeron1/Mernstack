/**
 * Created by sahaque on 10/28/2017.
 */
import React from 'react';
import Header from './Header';

class App extends React.Component {

    state = {headerMessage:'Naming Contest'};

    render() {
        return (
            <div className="App">
                <Header headerMessage={this.state.headerMessage}/>
                <div>
                    37
                </div>
            </div>
        );
    }
}

export default App;