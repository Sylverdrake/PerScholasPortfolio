import React from 'react'

function Contact() {

return (
    <div className='conWrapper'>
        <div className="conBox">
<h1>If you would like to contact me, you can email through: 
    <br/>cavitevitch@gmail.com</h1>
            <div className="socials">
            <button className='button' id='linkedin'onClick={() => window.open('https://www.linkedin.com/in/carl-vitevitch/')}><span className="li">LinkedIn</span></button>
            <button className='button' id ='github' onClick={() => window.open('https://github.com/Sylverdrake')}><span className='gb'></span>GitHub</button>
            </div>
        </div>

    </div>
)
}

export default Contact