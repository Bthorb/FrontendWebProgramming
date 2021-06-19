import React,{useState, useEffect} from 'react'
import axios from 'axios'

const AxiosComponant = () => {


    const [data, setData] = useState({})    

    let base_url = 'https://jsonplaceholder.typicode.com'
    let users = '/users'
    let posts = '/posts'

    let users_path = base_url + users
    let posts_path = base_url + posts

    const datapost = {
        id: 11,
        username: "Ben",
    }

    const dataput = {
        id: 11,
        username: "NN",
    }


    useEffect(async()=>{
        await axios.get(users_path)
        .then(res => {
            console.log(res.data)
            setData(res.data)
        });

        await axios.get(posts_path)
        .then(res => {
            console.log(res.data)
            setData(res.data)
        });
        
        await axios.post(users_path,{datapost})
        .then(res => {
            console.log(res)
            console.log(res.data)
            
        });

//         await axios.put(users_path,{dataput})
//         .then(res => {
//             console.log(res)
//             console.log(res.data)
            
// });

            await axios.patch(users_path+'/'+dataput.id,{dataput})
            .then(res => {
                console.log(res)
                console.log(res.data)
                
            });

            await axios.delete(users_path+'/'+dataput.id)
            .then(res => {
                console.log(res)
                console.log(res.data)
                
            });


    },[])

   
    return (
        <div>
            
        </div>
    )
}

export default AxiosComponant
