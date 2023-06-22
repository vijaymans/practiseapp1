import { useState, useEffect } from "react";
import "./dependent.css";
import { geodata } from "../Data/geodata";
import { useDispatch } from "react-redux";
import { geoactionpost } from "../actions/geoaction";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { useNavigate, } from "react-router-dom";



const DependentDropdown = () => {
  const [country, setCountry] = useState("");
  const [ustate, setUState] = useState("");
  const [city, setCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);


  const [userobj, setUserObj] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  const handleCountryChange = (e) => {
    const selectedcountryobj = geodata.find((ele) => {
      return ele.name == e.target.value;
    });

    console.log(selectedcountryobj);
    setStates(selectedcountryobj.states);
    setCountry(e.target.value);
  };

  const handleStateChange = (e) => {
    console.log(e.target.value);

    const selectedstatecitiesobj = states.find((ele) => {
      return ele.name == e.target.value;
    });

    console.log(selectedstatecitiesobj);
    setCities(selectedstatecitiesobj.cities);
    setUState(e.target.value);
  };

  const handleCityChange = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  };

  const handleSubmit = () =>
   {
    const userdata = {
      id: uuidv4(),
      country: country,
      state: ustate,
      city: city,
    };
    console.log(userdata);
    setUserObj(userdata);

    if (userdata.country.length && userdata.state.length)
     {
           dispatch(geoactionpost(userdata));

      }
     else
     {
        alert("Please enter all the fields");
    }

};

  const geodata1 = useSelector((state) => {
    return state.geodata;
});


useEffect(()=>
{
  console.log('master',geodata1)
  console.log('child',userobj)

  const isexists = geodata1.find((ele)=>
                {
                    return ele.id == userobj.id
                })
  console.log(isexists)

   if (isexists && isexists.status ===201) 
   {
      navigate('/SuccessMessage' ,
      {
          state : isexists
      }) 
   }

   

    else if(isexists && isexists.status!=201) 
    {
      localStorage.setItem("isexists", JSON.stringify(isexists))
       navigate('/ErrorMessage',
       {
         replace : true
       })
    } 
        
  },[geodata1])

  



  return ( <>
        <div className="dependent-dropdown">
        <h2>Countries-States-cities</h2>
        <h3>Countries</h3>
        <select value={country} onChange={handleCountryChange}>
            <option>Please Enter Country</option>
            {geodata.map((ele) => {
            return <option key={ele.id}>{ele.name}</option>;
            })}
        </select>{" "}
        <br /> <br />
        <h3>States</h3>
        <select value={ustate} onChange={handleStateChange}>
            <option>Please Select the State</option>
            {states.map((ele) => {
            return <option key={ele.id}> {ele.name} </option>;
            })}
        </select>{" "}
        <br /> <br />
        <h3>Cities</h3>
        <select value={city} onChange={handleCityChange}>
            <option>Please Select the city</option>
            {
            //
            cities.map((ele) => {
                return <option key={ele.id}>{ele.name} </option>;
            })
            }
        </select>
        <br />
        <button style={{ marginTop: "20px" }} onClick={handleSubmit}>
            Submit
        </button>
        <br /> <br />
        
        </div>
        </>
    
  );
};

export default DependentDropdown;
