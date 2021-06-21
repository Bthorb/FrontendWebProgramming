import React ,{useState, useEffect} from 'react'

const FormComponant = () => {

    const [cvalue, setCvalue] = useState('')
    const [candy, setCandy] = useState([])


    console.log(candy)

    

    return (
        <div>
            <form>
                <input type="text" name="candyname" onChange={(e)=>setCvalue(e.target.value)} value={cvalue}></input>
                <button type="submit" onClick={()=>setCandy(cvalue)}>click</button>
            </form>
        </div>
    )
}

export default FormComponant
