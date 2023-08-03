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
    console.log(repo[0])
return (
    <div>
        <div>
            Test: {repo[22]?.full_name}
        </div>

    </div>
)
}
export default GitHubCards

