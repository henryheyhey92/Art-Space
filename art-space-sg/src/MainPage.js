import React from 'react';
import axios from 'axios';
import Read from './Read';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Form from './Form';
import FixedBottomNavigation from './FixedBottomNavigation';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import 'bootstrap/dist/css/bootstrap.min.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ThreeKSharp } from '@mui/icons-material';


const BASE_URL = "https://hl-art-space.herokuapp.com/"
// const BASE_URL = "https://3000-henryheyhey92-artspacedb-fcgyjiweags.ws-us38.gitpod.io/"

const initialState = {
    imageLinkName: '',
    artWorkName: '',
    description: '',
    category: "",           // for the radio button
    medium: [],            // for the medium
    artistName: "",
    sex: "",  //use dropdown
    contact: "",
    password: "",
    email: "",
    price: "",
    objectId: ""
}


export default class MainPage extends React.Component {

    state = {
        data: [],
        active: 'main',
        show: 'block',
        artwork: [
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
        description: '',
        categoryOptions: [],   //for the radio button
        category: "",           // for the radio button
        mediumOptions: [],     // for the checkbox
        medium: [],            // for the medium

        artistName: "",
        sex: "",  //use dropdown
        contact: "",
        password: "",
        email: "",
        price: "",

        editbuttonflag: false,
        objectId: "",

        categoryOptionsV2: []
    }

    async componentDidMount() {
        let response = await axios.get(BASE_URL + "retrieve/artwork");
        let categoryResponse = await axios.get(BASE_URL + "retrieve/category");
        let mediumResponse = await axios.get(BASE_URL + "retrieve/medium");

        this.setState({
            data: response.data,
            categoryOptions: categoryResponse.data,
            mediumOptions: mediumResponse.data,
            categoryOptionV2: categoryResponse.data
        })
    }

    renderBottomNavBar = () => {
        return <FixedBottomNavigation />
    }

    renderPage = () => {
        if (this.state.active === 'main') {
            return <Read
                data={this.state.data}
                hideCreateButton={this.hideCreateButton}
                showCreateButton={this.showCreateButton}
                triggerEdit={this.updateFormData}
                refreshData={this.refreshMainPageData}
            />
        }
        if (this.state.active === 'form') {
            return <Form
                closeForm={this.closeForm}
                createArtWork={this.createArtWork}
                updateFormField={this.updateFormField}
                imageLink={this.state.imageLinkName}
                artWorkName={this.state.artWorkName}
                description={this.state.description}
                categoryOptions={this.state.categoryOptions}
                category={this.state.category}
                mediumOptions={this.state.mediumOptions}
                medium={this.state.medium}
                updateMediumCheckBox={this.updateCheckboxes}
                artistName={this.state.artistName}
                sex={this.state.sex}
                contactNum={this.state.contact}
                password={this.state.password}
                email={this.state.email}
                price={this.state.price}
                editBtn={this.state.editbuttonflag}
                updateArtWork={this.updateArtWork} />
        }

    }

    updateArtWork = async () => {
        console.log("Can edit/update ");
        let data = {
            "image_link": this.state.imageLinkName,
            "name": this.state.artWorkName,
            "description": this.state.description,
            "category": this.state.category.toLowerCase(),
            "medium": this.state.medium,
            "artist": {
                "name": this.state.artistName,
                "sex": this.state.sex.toLowerCase(),
                "contact_no": parseInt(this.state.contact),
                "email": this.state.email
            },
            "password": this.state.password,
            "price": parseInt(this.state.price)
        }
        let response = await axios.put(BASE_URL + 'update/artwork/' + this.state.objectId, data);
        console.log(response);

        let refreshData = await axios.get(BASE_URL + 'retrieve/artwork');
        this.setState({
            active: 'main',
            show: 'block',
            data: refreshData.data,
            editbuttonflag: false
        })
        this.setState(initialState)
    }

    updateFormData = (childData) => {
        console.log(childData);
        this.setState({
            imageLinkName: childData.image_link,
            artWorkName: childData.name,
            description: childData.description,
            category: childData.category,
            medium: childData.medium,
            artistName: childData.artist.name,
            sex: childData.artist.sex,
            contact: childData.artist.contact_no,
            email: childData.artist.email,
            password: childData.password,
            price: childData.price,

            active: 'form',
            show: 'none',
            editbuttonflag: true,
            objectId: childData._id
        })
    }

    refreshMainPageData = async (childData) => {
        if (childData) {
            let refreshData = await axios.get(BASE_URL + 'retrieve/artwork');
            this.setState({
                active: 'main',
                show: 'block',
                data: refreshData.data
            })
            this.setState(initialState)
        }
    }


    showCreateButton = (childData) => {
        this.setState({
            show: childData
        })
    }

    hideCreateButton = (childData) => {
        this.setState({
            show: childData
        })
    }

    updateCheckboxes = (e) => {
        if (this.state[e.target.name].includes(e.target.value)) {
            let indexToRemove = this.state[e.target.name].findIndex(v => {
                return v === e.target.value
            })
            let cloned = this.state[e.target.name].slice();
            cloned.splice(indexToRemove, 1);
            this.setState({
                [e.target.name]: cloned
            })
        } else {
            let clone = this.state[e.target.name].slice();
            clone.push(e.target.value);
            this.setState({
                [e.target.name]: clone
            })
        }
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //trigger renderForm 
    renderForm = () => {
        this.setState(initialState)
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

    createArtWork = async () => {
        let data = {
            "image_link": this.state.imageLinkName,
            "name": this.state.artWorkName,
            "description": this.state.description,
            "category": this.state.category,
            "medium": this.state.medium,
            "artist": {
                "name": this.state.artistName,
                "sex": this.state.sex,
                "contact_no": parseInt(this.state.contact),
                "email": this.state.email
            },
            "password": this.state.password,
            "price": parseInt(this.state.price)
        }
        let response = await axios.post(BASE_URL + 'create/art/post', data);
        console.log(response);

        let refreshData = await axios.get(BASE_URL + 'retrieve/artwork');
        this.setState({
            active: 'main',
            show: 'block',
            data: refreshData.data
        })
        this.setState(initialState)
    }

    renderRadioOption() {
        let options = [];
        let temp = [];
        console.log(this.state.categoryOptions.art_space);
        if (this.state.categoryOptions.art_space) {
            temp = this.state.categoryOptions.art_space;
        }
        if (temp) {
            for (let o of temp) {
                options.push(
                    <FormControlLabel
                        key={o.value}
                        value={o.value}
                        control={<Radio />}
                        label={o.name}
                        name='category'
                        onChange={this.updateFormField}
                        checked={this.state.category.includes(o.value)}
                        style={{ minWidth: 125 }} />
                )
            }
        }

        return options;
    }


    render() {
        return (
            <React.Fragment>
                <div style={{ position: "relative" }}>
                    <Fab variant="extended"
                        color="primary"
                        aria-label="add"
                        sx={{ m: 4, display: this.state.show }}
                        onClick={this.renderForm}>
                        <AddIcon sx={{ m: 1 }} />
                        Create
                    </Fab>
                    <Accordion sx={{ m: 5, display: this.state.show }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Filter</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
                            >
                                <InputBase
                                    sx={{ m: 1, flex: 1 }}
                                    placeholder="Search"
                                    inputProps={{ 'aria-label': 'search' }}
                                    xs={12} sm={12} md={12}
                                />
                                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>

                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ m: 5, display: this.state.show }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Filter</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
                            >
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly"}}
                                >
                                    {this.renderRadioOption()}
                                </RadioGroup>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                    {this.renderPage()}
                </div>
                {this.renderBottomNavBar()}
            </React.Fragment>
        )
    }
}