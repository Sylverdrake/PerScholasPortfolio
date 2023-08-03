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
            <p>Test: {repo[19]?.full_name}</p>
                <img className='fImg' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F233-2332677_image-500580-placeholder-transparent.png&f=1&nofb=1&ipt=bf2da49be302c2eb1c0e157402b7672822220d71558f50d70dcaeb867cd71ad0&ipo=images' alt=''/>
                
                </div>        
            <div className='featured'>
                Test: {repo[22]?.full_name}
                <img className='fImg' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F233-2332677_image-500580-placeholder-transparent.png&f=1&nofb=1&ipt=bf2da49be302c2eb1c0e157402b7672822220d71558f50d70dcaeb867cd71ad0&ipo=images' alt=''/>
            </div>
    </div>

    <div className='portfolio'>
            <div className='featured'>
                Test: {repo[25]?.full_name}
                <img className='fImg' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F233-2332677_image-500580-placeholder-transparent.png&f=1&nofb=1&ipt=bf2da49be302c2eb1c0e157402b7672822220d71558f50d70dcaeb867cd71ad0&ipo=images' alt=''/>
            </div>        
            <div className='featured'>
                Test: {repo[28]?.full_name}
                <img className='fImg' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F233-2332677_image-500580-placeholder-transparent.png&f=1&nofb=1&ipt=bf2da49be302c2eb1c0e157402b7672822220d71558f50d70dcaeb867cd71ad0&ipo=images' alt=''/>
            </div>
    </div>
</div>
)
}
export default GitHubCards

