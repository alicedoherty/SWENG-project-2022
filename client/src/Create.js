import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Header from './Header'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

function writePostToSystem(post){
      console.log(post)
}
 
export default function Create (){

    //temporary values, will need to connect to user data to determine username and id will most likely be random
    //(rerandomise if it already exists).
    let auth = "Greg" 
    let ids = 1

    const [post, setPost] = useState({id:0, title:"", author:"", content:""})

    return(
      <div className = "Create">
        <Container maxWidth="xs">
          <Header/>
          <Paper elevation={1} square sx={{width:600,marginTop:10, backgroundColor:"lightblue", position:"fixed", left:40, top:15}}>
            <Container disableGutters sx={{padding: 2}}>
              <TextField
                id="post-title"
                label="Title"
                variant="standard"
                onChange={(e) => {
                  let tit = e.target.value
                  let cont = post.content
                  setPost({id:ids, title:tit, author:auth, content:cont})

                }}
              />
              <TextField multiline rows={15} sx={{marginTop:2}}
                id="post-content"
                label="Content"
                fullWidth
                onChange={(e) => {
                  let tit = post.title
                  let cont = e.target.value
                  setPost({id:ids, title:tit, author:auth, content:cont})

                }}
              />
              <Button variant="contained"  sx={{marginTop:2}} 
                onClick={(e)=>{
                  writePostToSystem(post)
                }}>
                Post
              </Button>
            </Container>
          </Paper>
        </Container>

      </div>
      

      

        
    );
}