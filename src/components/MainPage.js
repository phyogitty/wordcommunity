import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Row } from 'react-bootstrap';
import history from '../services/history.js';

class MainPage extends Component {

    constructor () {
        super(); 
        this.state = {
            word: ""
        }
    }
    updateWord = (evt) => {
        console.log(evt.target.value);
        this.setState({
            word: evt.target.value
        });
    };

    searchWord = () => { 
        console.log("Pressed..");
        history.push('/result') 
    }
    render() {
        return (
            <div className="align-middle">
                <div className="mg-10 font-lg">Word Community</div>
                <Row>
                    <input 
                        placeholder="Enter your word here" 
                        type="text" 
                        onChange={this.updateWord}
                    />
                    
                    <button className="f-1half" onClick={this.searchWord}>Search</button>
                </Row>
                <div className="f-one"><i>"language can get tricky sometimes, but I am here for you"</i></div>
            </div>
        );
    }
}


export default MainPage;