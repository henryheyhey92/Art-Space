import React from 'react';
import axios from 'axios';
import Read from './Read';


const BASE_URL= "https://hl-art-space.herokuapp.com/"
//const BASE_URL = "https://3000-henryheyhey92-artspacedb-fcgyjiweags.ws-us38.gitpod.io/"

export default class MainPage extends React.Component{

    state = {
        data: []
    }

    async componentDidMount(){
        let response = await axios.get(BASE_URL + "retrieve/artwork");
        console.log(response.data);
        this.setState({
            data: response.data
        })
    }
    
    renderPage = () =>{
        return <Read data={this.state.data}/>
    } 
    render(){
        return (
           <React.Fragment>
               {this.renderPage()}
            </React.Fragment>
        )
    }
}