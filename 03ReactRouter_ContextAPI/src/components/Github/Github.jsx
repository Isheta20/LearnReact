import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
const Github = () => {
    // const [data, setData] = useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Isheta20')
    //     .then(response => response.json())
    //     .then(data => {
    //         // console.log(data);
    //         setData(data);            
    //     })
    // }, [])

    const data = useLoaderData();
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-8 text-3xl flex flex-col gap-4 items-center'>
      <img src={data.avatar_url} alt="Git pic" width={300}/>
      Github Repositories: {data.public_repos}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Isheta20')
  return response.json();//returning the promise
}
