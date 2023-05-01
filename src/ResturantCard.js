import { IMG_CDN_URL } from "./Components/Constants"

const ResturantCard = (props) =>
        {
            console.log(props)

        const {name,avgRating,cuisines,cloudinaryImageId} = props

                const reststyle ={
                    width : "200px",
                    border : "3px solid blue",
                    margin : "5px",
                    padding : "10px",
                    wordWrap : "break-word"
                    }

            return (<div style={reststyle}>
                <img 
                style={{width : "100%"}}
                alt="hotel"
                src ={`${IMG_CDN_URL}${cloudinaryImageId}`}
                />
                <h2>{name}</h2>
                <h3>Rating - {avgRating}</h3>
                <h4>cusines -{cuisines.join()}</h4>
            </div>)
        }
export default ResturantCard