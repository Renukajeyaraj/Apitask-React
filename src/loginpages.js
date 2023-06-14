import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
//import Button from '@mui/material/Button';
import { Button, FormControl } from '@mui/material';
import './loginpage.scss'
import { useDispatch, useSelector } from 'react-redux';
import { login } from './stateslice';

        let object=[{
            name:"renuka",
            password:"2406"
                },
                {
            name:"saranya",
            password:"1999"
                }]

    const Loginpages = () => {

            const [isName, setIsName] = useState('');
            const [isPass, setIsPass] = useState('');
            const [formSubmit, setFormSubmit] = useState(false);

            const state=useSelector(({sample})=>sample);
            const dispatch=useDispatch();
            //const {state,dispatch}=useContext(stateContext);
            


            const navigate=useNavigate()




            
            const userName=(e)=>{
                console.log("e", e.target.value)
                setIsName(e.target.value)
            }

            const userPass=(e)=>{
                console.log("e",e.target.value)
                setIsPass(e.target.value)
            }

        const handleSubmit=(e)=>{
            e.preventDefault();
            setFormSubmit(true)
            let arr=object.find((e)=>{
            if((e.name===isName)&&(e.password===isPass)){
                navigate('/homepages')
                JSON.stringify(localStorage.setItem("isLoggedIn", true))
            }
            })
            dispatch(login(true))
        }
            
            
        
  return (
    <div>
    
        <div className='code'>
             <form className="log-form" onSubmit={handleSubmit}>
                 <h2 className='log'>Login</h2>
            {/* <p>Doesn't have an account yet?<a href="#">Sign Up</a></p> */}
             <FormControl>
        
    <p><label>Name:</label></p>
     <span><TextField id="outlined-basic" label="Name" classname="text1"variant="outlined" value={isName} type="text" onChange={userName} /></span>
        {isName === "" && formSubmit && <div className='one'>userName is required</div>}

    <p><label>Password:</label> </p> 
     <span><TextField id="outlined-password-input" label="Password"type="password" value={isPass} onChange={userPass}/></span>
        {isPass === "" && formSubmit && <div className='one'>userPass is required</div>}

    {/* <div className='btn'>
        <Button  onClick={() => dispatch(login(true))} type='submit' className='but' variant="contained" color="primary">SIGN IN</Button>
       
    </div> */}

       <div><button  className='but'>SIGN IN</button></div>
      <span className='for'>Forget<a href="#" className='ang'>  Username/Password?</a></span>
        <span className='fors'>Don't have an account?<a href="#" className='angs'>Sign Up</a></span>
    
     </FormControl>
        </form>
        </div>
        </div>
     )
  }

  
  



export default Loginpages