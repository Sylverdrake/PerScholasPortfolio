import React from 'react'

function Contact() {

return (
    <div className='conWrapper'>
        <div className="conBox">
        <div className='header'><h1>Contact me!</h1></div>
<h1>If you would like to contact me for a job opportunity or freelance work, you can email me directly at: 
    <br/><br/>cavitevitchdev@gmail.com</h1>
            <div className="socials">
            <button><img id='linkedin' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngmind.com%2Fwp-content%2Fuploads%2F2019%2F08%2FLinkedin-Logo-Png-Transparent-Background-1.png&f=1&nofb=1&ipt=56080a588a212640a6c71502fb1b1050f9c23c58491937de9a0c8918ddccdafc&ipo=images' alt='' onClick={() => window.open('https://www.linkedin.com/in/carl-vitevitch/')}/></button>
            <button><img id='github' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fgithub%2Fgithub_PNG40.png&f=1&nofb=1&ipt=a47745d2092f062c51031e84480e52893ed5747f479ce8b7587092c4aa69f09f&ipo=images' alt='' onClick={() => window.open('https://github.com/Sylverdrake')}/></button>
            </div>
        </div>

    </div>
)
}

export default Contact