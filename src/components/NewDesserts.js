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


const axios = require("axios");




class NewDesserts extends Component {
    constructor(props){
        super(props)
        this.state = {
            history: "",
            newDesserts: {
                name: "",
                ingredients: "",
                directions: "",
                chef: "",
            }
        }
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
        axios
            .post("https://robs-capstone-back.herokuapp.com/desserts/add", this.state)
            .then(() => {
                console.log("attempt submission")
                window.location ="/desserts/history"
            })
      }

      handleHistory = (e) => {
          console.log('handled')
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
      

            <Container style={centerit}>
                <h1>Add New Dessert Recipe</h1>
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
                    <TextField
                        required
                        id="outlined-textarea"
                        //   label="Multiline"
                        multiline
                        rows={4}
                        placeholder="Ingredients Needed"
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
                        placeholder="Directions Needed"
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
            </Router>
        )
    }
}

export default NewDesserts