import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';


function GitHubCards() {
const [repo, setRepo] = useState([]);

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
                    <img className='fImg' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F233-2332677_image-500580-placeholder-transparent.png&f=1&nofb=1&ipt=bf2da49be302c2eb1c0e157402b7672822220d71558f50d70dcaeb867cd71ad0&ipo=images' alt='' onClick={() => window.open(`${repo[19]?.html_url}`)}/>
                <div className='fInfo'>
                    <h3>Prototype Weather App</h3>
                    <hr/>
                    <p className='fText'>{repo[19]?.description}</p>
                    <hr/>
                    <div className='tags'>Written in: {repo[19]?.language}, React</div>
                </div>
            </div>        
            
            <div className='featured'>
                <img className='fImg' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F233-2332677_image-500580-placeholder-transparent.png&f=1&nofb=1&ipt=bf2da49be302c2eb1c0e157402b7672822220d71558f50d70dcaeb867cd71ad0&ipo=images' alt='' onClick={() => window.open(`${repo[22]?.html_url}`)}/>
                <div className='fInfo'>
                    <h3>Atmocast</h3>
                    <hr/>
                    <p className='fText'>{repo[22]?.description}</p>
                    <hr/>
                    <div className='tags'>Written in: {repo[22]?.language}, React</div>
                </div>
            </div>
    </div>

    <div className='portfolio'>
            <div className='featured'>
                <img className='fImg' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F233-2332677_image-500580-placeholder-transparent.png&f=1&nofb=1&ipt=bf2da49be302c2eb1c0e157402b7672822220d71558f50d70dcaeb867cd71ad0&ipo=images' alt='' onClick={() => window.open(`${repo[25]?.html_url}`)}/>
                <div className='fInfo'>
                    <h3>Webpage Space Battle</h3>
                    <hr/>
                    <p className='fText'>{repo[25]?.description}</p>
                    <hr/>
                    <div className='tags'>Written in: {repo[25]?.language}</div>
                </div>
            </div>  

            <div className='featured'>
                <img className='fImg' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F233-2332677_image-500580-placeholder-transparent.png&f=1&nofb=1&ipt=bf2da49be302c2eb1c0e157402b7672822220d71558f50d70dcaeb867cd71ad0&ipo=images' alt='' onClick={() => window.open(`${repo[28]?.html_url}`)}/>
                <div className='fInfo'>
                    <h3>First Fantasy: A Webpage Micro RPG</h3>
                    <hr/>
                    <p className='fText'>{repo[28]?.description}</p>
                    <hr/>
                    <div className='tags'>Written in: {repo[28]?.language}</div>
                </div>
            </div>
    </div>
</div>
)
}
export default GitHubCards

