import React from 'react'

class Profileclass extends React.Component {

    constructor(props)
    {
        //constructor gets invoked first when class gets loaded
        super(props)

        // the place where we initialize state
        this.state = {
            name : this.props.name,
            age : this.props.age
        }

        console.log("Child- constructor")
    }

    componentDidMount()
    {
        //this is equivalent to useEffect in react
        console.log("Child- Component did mount method")
    }

    render()
    {
        console.log("Child- render")
        return (<div>
                    <h2>Profile-class conponent</h2>
                    <p>{this.props.name}</p>
                    <p>{this.state.count}</p>
                    <p>{this.state.count1}</p>
                    <button onClick ={()=>
                    {
                        this.setState(
                             {
                                name : "dada",
                                age : this.state.age + 2
                             }
                        )
                    }}>Click me</button>

                </div>)
    }

}

export default Profileclass