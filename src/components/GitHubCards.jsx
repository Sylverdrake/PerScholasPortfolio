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
<div>
    <div className='portfolio'>
            <div className='featured'>
                <span>{repo[19]?.name}</span>

                <img className='fImg' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F233-2332677_image-500580-placeholder-transparent.png&f=1&nofb=1&ipt=bf2da49be302c2eb1c0e157402b7672822220d71558f50d70dcaeb867cd71ad0&ipo=images' alt=''/>
                <div className='fInfo'>
                    <p>{repo[19]?.description}</p>
                    <p>Written in: {repo[19]?.language}</p>
                </div>
            </div>        
            
            <div className='featured'>
                <span>{repo[22]?.name}</span>
                <img className='fImg' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F233-2332677_image-500580-placeholder-transparent.png&f=1&nofb=1&ipt=bf2da49be302c2eb1c0e157402b7672822220d71558f50d70dcaeb867cd71ad0&ipo=images' alt=''/>
                <div className='fInfo'>
                    <p>{repo[22]?.description}</p>
                    <p>Written in: {repo[22]?.language}</p>
                </div>
            </div>
    </div>

    <div className='portfolio'>
            <div className='featured'>
                <span>{repo[25]?.name}</span>
                <img className='fImg' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F233-2332677_image-500580-placeholder-transparent.png&f=1&nofb=1&ipt=bf2da49be302c2eb1c0e157402b7672822220d71558f50d70dcaeb867cd71ad0&ipo=images' alt=''/>
                <div className='fInfo'>
                    <p>{repo[25]?.description}</p>
                    <p>Written in: {repo[25]?.language}</p>
                </div>
            </div>  

            <div className='featured'>
                <span>{repo[28]?.name}</span>
                <img className='fImg' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F233-2332677_image-500580-placeholder-transparent.png&f=1&nofb=1&ipt=bf2da49be302c2eb1c0e157402b7672822220d71558f50d70dcaeb867cd71ad0&ipo=images' alt=''/>
                <div className='fInfo'>
                    <p>{repo[28]?.description}</p>
                    <p>Written in: {repo[28]?.language}</p>
                </div>
            </div>
    </div>
</div>
)
}
export default GitHubCards

