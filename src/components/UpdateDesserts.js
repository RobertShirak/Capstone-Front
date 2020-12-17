import React, { Component } from "react";
import { BrowserRouter as Router} from 'react-router-dom'
import { Container } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { InputLabel, Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from '@material-ui/core';
import TextField from '@material-ui/core/TextField'



class UpdateDesserts extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: "",
            type: "",
            minutes: "",
            miles: "",
            calories: ""
        }
    }
    componentDidMount(){
        this.getDetails()
    }

    getDetails = () => {
        let logId = this.props.match.params.id;
        let url = "https://robs-capstone-back.herokuapp.com/desserts/specific/" + logId
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    name: res.name,
                    ingredients: res.ingredients,
                    directions: res.directions,
                    chef: res.chef
                }, () => {
                    console.log(this.state)
                })
            })
            .catch(err => console.log(err))
    }


    onChangeDessertsName = (e) => {
        console.log(e)
        this.setState({name: e.target.value})
    }

    onChangeIngredients = (e) => {
        console.log(e)
        this.setState({ingredients: e.target.value})
    }

    onChangeDirections = (e) => {
        console.log(e)
        this.setState({directions: e.target.value})
    }

    onChangeChef = (e) => {
        console.log(e)
        this.setState({chef: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        let logId = this.props.match.params.id.toString()
        let url = "https://robs-capstone-back.herokuapp.com/desserts/update/" + logId
        console.log(this.state)
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(data=>{
                console.log(data)
                this.setState({
                    date: data.date,
                    type: data.type,
                    minutes: data.minutes,
                    miles: data.miles,
                    calories: data.calories})
            })
            .catch(err => console.log(err))
            alert('Updated :D')
            window.location = "/desserts/history/"
        }



    render(){
        const centerit = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }
         
        const nicebuttons = {
            margin: "5px",
            backgroundColor: "red"
        }

        return(
            <Router>
      <AppBar position="relative">
      
        <Toolbar style= {{backgroundColor: 'red'}} >
          
            <Link href="/"  style={{ textDecoration: 'none' , color: 'white'}}   >
          <Typography variant="h6" color="inherit" noWrap >
            MANGIA
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>

            <div>
                <Container style={centerit} >
                    <Box>
                        <h1>Edit Dessert</h1>
                    </Box>
                    <Box maxWidth={400} >
                <form onSubmit={this.onSubmit} style={centerit}>
                    
                    <div>
                        <InputLabel style={{margin:"5px", centerit}}></InputLabel>
                        <Input style={{margin:"5px"}}
                        required 
                        onChange={this.onChangeDessertsName}
                        type="text"
                        placeholder="Recipe Name">
                        </Input>
                    </div>
                    <div>
                        {/* <InputLabel></InputLabel>
                        <Input
                            required 
                            onChange={this.onChangeIngredients}
                            type="textarea"
                            placeholder="List of Ingredients">
                        </Input> */}
                        <TextField
                        required
                        id="outlined-textarea"
                        //   label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Ingredients Needed"
                        variant="outlined"
                        onChange={this.onChangeIngredients}
                        />
                    </div>
                    <div>
                    <TextField
                        required
                        id="outlined-textarea"
                        //   label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Directions Needed"
                        variant="outlined"
                        onChange={this.onChangeDirections}
                        />
                    </div>
                    <div>
                        <InputLabel></InputLabel>
                        <Input
                            required 
                            onChange={this.onChangeChef}
                            type="text"
                            placeholder="Chef Name">
                        </Input>
                    </div>
                    <div style={{display:"flex"}}>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        style={nicebuttons}>
                        Submit
                    </Button>
                    <Link href="/desserts/history">
                    <Button
                    variant="contained"
                    color="primary"
                    style={nicebuttons}
                    onClick={this.handleHistory}>
                        All Desserts
                    </Button>
                </Link>
                </div>
                </form>
                </Box>
                </Container>
            </div>
            </Router>
        )
    }
}

export default UpdateDesserts