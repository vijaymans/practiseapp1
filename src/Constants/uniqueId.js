import {v4 as uuidv4} from 'uuid'


const uniqueIdentifier =() =>
{
    const uniquestr = String(uuidv4())
    const uniquenumber = uniquestr.match(/\d+/)[0];

    return Number(uniquenumber[0])
}

export default uniqueIdentifier