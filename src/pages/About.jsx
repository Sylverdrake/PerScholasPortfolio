import React from 'react';
import FileSaver from 'file-saver';


function About() {
    const file = () =>
    {
        FileSaver.saveAs(
            process.env.PUBLIC_URL + "/resource/resume.pdf", "resume.pdf"
        )
    }

return (
<div className='wrapper'>
    <div className='box'>
    <div className='header'><h1>About me!</h1></div>
    <h3>Download: <button className='button' id='resume' onClick={file}><h3>My Resume.pdf</h3></button></h3>
                        <div className='content'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    <br/>
                        <div className='content'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    <br/>
                        <div className='content'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
    
    </div>
</div>
)
}

export default About