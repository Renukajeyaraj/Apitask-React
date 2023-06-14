import React,{useEffect,useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
// import Navbars from './navbars'
import './homepages.scss'
import { useNavigate } from 'react-router-dom';

const Homepages = () => {

  const Navigate=useNavigate();
    const [users,setUsers]=useState([]);
    console.log(users);
    const posts =()=>{
    fetch("https://api.spacexdata.com/v3/launches")
    .then((Res)=>Res.json())
    .then((json)=>setUsers(json))
    .catch((err) =>console.log(err))
}
useEffect(() =>{
    posts()
   },[])

   const userId= id =>{
      Navigate(`/detailspage/${id}`)
   }

  return (
    <div className='container'>
       <div className='row'>
        {/* <Navbars/> */}
           
        
            
        {users.map((user,index) => {
            return (
           
                <div className='col' key={index}>
                    
                     <Card sx={{ maxWidth: 345 }}>
                     
      <CardActionArea>
        <CardMedia
          component="img"
      
          image={user.links.mission_patch}
            />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
                {user.mission_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>userId(user.flight_number)}>
          Details
        </Button>
      </CardActions>
    </Card>
        </div>
            )
           
        })}
       
        
    </div>
         
    </div>
    
  )
}

export default Homepages