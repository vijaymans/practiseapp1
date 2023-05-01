import React from 'react'

class ProfileClass extends React.Component {

    constructor(props)
    {
        super(props)
        this.state ={
            name : this.props.name,
            age : this.props.age
        }
    }


    render()
    {
        return (
            <>
                <h1>Class Components</h1>
                 <p>{this.state.name}</p>
                 <p></p>
                 {/* <p>{this.props.name}</p> */}
                 <button onClick = { () =>
                {
                    this.setState({
                        name : "ashok"
                    })
                }}>Click</button>
            </>
        )
    }
}