import React, { Component } from "react";
import { BrowserRouter as Router} from 'react-router-dom'
import { Container } from '@material-ui/core';
import { Button } from '@material-ui/core';
import {  Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from '@material-ui/core';

class DessertsView extends Component{
    constructor(props){
        super(props)
        this.state = {
            history: []
        }
    }

    componentDidMount = () => {
        let url = "https://robs-capstone-back.herokuapp.com/desserts"
        fetch(url)
            .then(res => res.json())
            .then(history=>{
                console.log(history)
                this.setState({history: history})
            })
    }

    
    handleDelete = (id) => {
        let url = "https://robs-capstone-back.herokuapp.com/desserts/delete/" + id
        console.log(url)
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(hist => {
                this.state.history = hist
                
            })
            .catch(err => {
                console.log(err)
            })
            window.location.reload();
    }

    handleUpdate = (id) => {
        console.log(id)
        let url = "https://robs-capstone-back.herokuapp.com/desserts/specific" + id
        console.log(url)
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
                <h1>All Dessert Recipes</h1>
                <Box>
                {
                    this.state.history.length ?
                    this.state.history.map((recipe, i)=>{
                        console.log(recipe)
                    return <div style={{centerit}}
                    key={i} >
                <span style={{fontWeight:"bold"}}>Name of Recipe:</span> {recipe.name}<br/>
                
                <span style={{fontWeight:"bold"}}>Ingredients Needed:</span> {recipe.ingredients} <br/>
                <span style={{fontWeight:"bold"}}>Cooking Directions:</span> {recipe.directions}<br/>
                <span style={{fontWeight:"bold"}}>Chefs Name:</span> {recipe.chef}<br/><br/>
                <div style={{display: "flex"}}>
                <Link href={`/desserts/edit/${recipe._id}`}>
                    <Button style={nicebuttons}
                    onClick={() => {
                        this.handleUpdate(recipe._id)
                    }}
                    variant="contained"
                    color='primary'>
                        update
                    </Button><br/>
                        </Link>
                        <Button style={nicebuttons}
                        onClick= {() => {
                            this.handleDelete(recipe._id)
                        }} 
                        variant="contained"
                        color="primary">
                            delete
                        </Button>
                        <br/>
                        </div>
                        <br/>
                        </div>
                        
                    }) : ""
                }
                <div style={{display: "flex", justifyContent:"center"}}>
                <Link href='/desserts'>
                    <Button style={nicebuttons}
                        variant="contained"
                        color="primary">
                        New Dessert
                    </Button>
                </Link>
                <Link href='/'>
                    <Button style={nicebuttons}
                        variant="contained"
                        color="primary">
                        Home
                    </Button>
                </Link>
                </div>
                </Box>
            </Container>
            </Router>
        )
    }
}

export default DessertsView