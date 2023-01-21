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
                src ={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
                />
                <h2>{name}</h2>
                <h3>Rating - {avgRating}</h3>
                <h4>cusines -{cuisines.join()}</h4>
            </div>)
        }
export default ResturantCard