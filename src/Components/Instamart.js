import { useState } from "react";
import Section from './Section'


const Instamart = (props) => {


    const [isVisibile, setIsVisible] = useState(false)
   
    const updaterFunction =(display) =>
    {
        setIsVisible(display)
    }


  return (
    <>
      <h2 style={{textAlign :"center"}}>Instamart Component</h2>
      
      
      <Section
        title={"About Instamart"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
        }
        isVisibile={isVisibile}
        updaterFunction={updaterFunction}
       
      />
      
      {/* <Section
        title={"Carrers Instamart"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "
        }
        isVisibile={isVisibile}
        updaterFunction={updaterFunction}
      />
        
        <Section
        title={"Teams Instamart"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "
        }
        isVisibile={isVisibile}
        updaterFunction={updaterFunction}
      /> */}
     
   

    </>
  );
};

export default Instamart;
