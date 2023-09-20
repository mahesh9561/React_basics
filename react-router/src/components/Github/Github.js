import React, { useEffect, useState } from 'react'
import './style.css'
function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        const api = "https://api.github.com/users/mahesh9561";
        fetch(api)
            .then(response => response.json())
            .then(data => setData(data))

    }, [])

    return (
        <>
            <div className='container m-4 p-4'>
                <div className='section1'>
                    <h1>GitHub Followers: {data.followers}</h1>
                    <img src={data.avatar_url} alt="Git Photos" width={150} />
                    <h1 className='text-orange-600 text-xl'>{data.name}</h1>
                </div>
            </div>
        </>
    )
}

export default Github
