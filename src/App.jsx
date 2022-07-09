import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cssArray: [],
            cssString: ""
        }

        this.putClass = this.putClass.bind(this);
        this.generateString = this.generateString.bind(this);
    }

    putClass(cssClass) {
        let { cssArray } = this.state;

        if (cssArray.indexOf(cssClass) === -1) {
            cssArray.push(cssClass);
        } else {
            cssArray = cssArray.filter((value) => value !== cssClass);
        }

        this.setState({ cssArray: cssArray }, () => this.generateString());
    }

    generateString() {
        let { cssArray } = this.state;
        let newCSS = "";

        for (const css of cssArray) {
            newCSS += css + " ";
        }

        this.setState({ cssString: newCSS })
    }

    render() {
        let { cssString } = this.state;

        return (
            <div className="App">
                <div id="box" className={cssString}>
                    <p>Texto dentro da caixa</p>
                </div>

                <div>
                    <button onClick={() => this.putClass("borda")}>Borda</button>
                    <button onClick={() => this.putClass("cor")}>Cor</button>
                    <button onClick={() => this.putClass("negrito")}>Negrito</button>
                </div>
            </div>
        );
    }
}

export default App
