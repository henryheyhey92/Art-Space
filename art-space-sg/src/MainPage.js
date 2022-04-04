import React from 'react';
import axios from 'axios';
import Read from './Read';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Form from './Form';

const BASE_URL = "https://hl-art-space.herokuapp.com/"

export default class MainPage extends React.Component {

    state = {
        data: [],
        active: 'main',
        show: 'block',
        artwork : [
            {
                "image_link": "",
                "name": "",
                "description": "",
                "category": "",
                "medium": "",
                "artist": {
                    "name": "",
                    "sex": "",
                    "contact_no": null,
                    "email": ""
                },   
                "password": "",
                "price": null
            }
        ],

        imageLinkName: '',
        artWorkName: '',
        description:'',
        categoryOptions: [],
        category: ""

    }

    async componentDidMount() {
        let response = await axios.get(BASE_URL + "retrieve/artwork");
        let categoryResponse = await axios.get(BASE_URL + "retrieve/category");
        
        this.setState({
            data: response.data,
            categoryOptions : categoryResponse.data
        })
        console.log(this.state.categoryOptions);
    }

    // handleChange = (event) =>{
    //     this.setState({
    //         category: value
    //     })
    // }

    renderPage = () => {
        if (this.state.active === 'main') {
            return <Read data={this.state.data} />
        }
        if (this.state.active === 'form') {
            return <Form 
                    closeForm={this.closeForm}
                    addForm={this.createArtWork}
                    createArtWork={this.state.artwork}
                    updateFormField={this.updateFormField}
                    imageLink={this.state.imageLinkName}
                    artWorkName={this.state.artWorkName}
                    description={this.state.description}
                    categoryOptions={this.state.categoryOptions}
                    category={this.state.category}/>
        }

    }

    updateFormField = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //trigger renderForm 
    renderForm = () => {
        this.setState({
            active: 'form',
            show: 'none'
        })
    }

    closeForm = () => {
        this.setState({
            active: 'main',
            show: 'block'
        })
        
    }

    createArtWork = () => {
        this.setState({

        })
    }

    render() {
        return (
            <React.Fragment>
                <div style={{position: "relative"}}>
                    <Fab variant="extended"
                        color="primary"
                        aria-label="add"
                        sx={{ m: 4 , display: this.state.show}}
                        onClick={this.renderForm}>
                        <AddIcon sx={{ m: 1}} />
                        Create
                    </Fab> 
                    {this.renderPage()}
                </div>
            </React.Fragment>
        )
    }
}