import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './detailspage.scss'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Detailspage= () => {

let {id}=useParams();

const [detail,setDetail]=useState([]);
console.log(detail)

const posts =()=>{
  fetch(`https://api.spacexdata.com/v3/launches/${id}`)
  .then((Res)=>Res.json())
  .then((json)=>setDetail(json))
  .catch((err) =>console.log(err))
}
useEffect(() =>{
  posts()
 },[])

  return (
    <div className='sect-2'>
      <div className='sect-container'>
  
            {[detail]?.map((det,index)=>{
                return(
                  <div key={index} className='sect-row'>
                    <div className='column1'>
                      <img src={det.links?.mission_patch} width="100%" height="auto"/>
                    </div>
                    <div className='column2'>
                    <h2 className='fname'>Flightnumber:<b className='one1'>{det.flight_number}</b></h2>  
                     <h3 className='mname'>Missionname:<b className='one1'>{det.mission_name}</b></h3> 
                     <h3  className='lname'>Launch date:<b className='one1'>{det.launch_date_local}</b></h3>
                     <p className='dname'>Details:<b className='one1'>{det.details}</b></p>
                     <span>
                      <button className='bon'>WikiPedia{det.wikipedia}<KeyboardDoubleArrowRightIcon/> </button>
                      <button className='bon'>YouTube{det.youtube_id}<KeyboardDoubleArrowRightIcon/></button>
                      </span>
                     

                    </div>
                    

                  </div>
                )
              })}
      </div>
    </div>
  )
}

export default Detailspage