const App1 =(props) =>
{
    console.log('child',props)

    const {sendData} =props

    const arr=["vijay","varun", "vinod"]
    sendData(arr)
    return(<></>)

}

export default App1