import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';


function GitHubCards() {
const [repo, setRepo] = useState([])
useEffect(() => {getRepo()}, [])

    const getRepo = async () =>
    {
        try {
            const response = await axios.get('https://api.github.com/users/Sylverdrake/repos')
            const myRepos = response.data;
            setRepo(myRepos);
        }
        catch (err)
        {
            console.error('Cannot get repos', err)
        }
    }
return (
    <div className='portfolio'>
                <div className='featured'>
            Test: {repo[19]?.full_name}
        </div>        
        <div className='featured'>
            Test: {repo[22]?.full_name}
        </div>        
        <div className='featured'>
            Test: {repo[25]?.full_name}
        </div>        
        <div className='featured'>
            Test: {repo[28]?.full_name}
        </div>
    </div>
)
}
export default GitHubCards

