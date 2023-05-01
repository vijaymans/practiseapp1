import { useState } from "react";

const Section = (props) => {

    
   
     const { title, description, isVisibile, updaterFunction, keyy} = props;

     const [title1] = useState(title)
   
     const sectionStyle= {
        width : "80%", 
        margin : "10px auto",
        padding : "20px",
        border : "2px solid grey"
     }

     return (
       <div style ={ sectionStyle}> 
          { !isVisibile ? <button onClick ={()=>updaterFunction(true)}>Show</button>
                        :
                         <button onClick ={()=>updaterFunction(false)}>Hide</button>
          } 
   
       {isVisibile  &&  <>
                           <h3>{title}</h3>
                           <p>{description}</p>
                           </>
       }
   
       
       </div>
     );
   }

export default Section