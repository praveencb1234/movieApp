
import React, { useEffect, useState } from 'react'
import './Movies.css'
import Axios from './Axios'



function Movies() {


    const [Movie, setMovie] = useState([])
    useEffect(() => {Axios.get('https://api.tvmaze.com/search/shows?q=all').then((response)=>{
        console.log(response.data[3].show)


        setMovie(response.data)





    })
    
          
    }, [])
    
{Movie.map((obj)=>{



return(


  <div className='top'>



  </div>
)


})}


const handleMovie=(id)=>{


  console.log(id)
  
  }


  return (
    <div>

<div className='hd'>
   
<h1>BOOK YOUR SHOW</h1>


 <img className='vlogo' src='https://cdn-icons.flaticon.com/png/128/2839/premium/2839026.png?token=exp=1653666247~hmac=bcb40cb91a6353ec09d81c299d0f0e30'></img>



<marquee className=' marq'><h1>THE FUTURE IN YOUR HANDS,CONNECT WITH US NOW</h1></marquee>
<div className='row'>
  

{Movie.map((obj)=>


<img onClick={()=>handleMovie(obj.show.id)} className='img1' src={obj.show.image.original}>

</img>



)}
   
    
</div>



<div className='bgimg'>




</div>
</div>




    </div>
  )
}

export default Movies