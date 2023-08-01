import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
return (
    <div className='wrapper'>
        <div className='box'>
            <div className='header'><h1>Carl Codes 402 You!</h1></div>
            <h1> - Web Development<br/>
            - Full Stack<br/>
            - Software Engineering
            </h1>

            <p className='content'>
                When you need a creative and forensic mindset, I'm your guy. As a geology major turned programmer, you may wonder
                how that correlates to programming. I was taught to look at the Earth as if I were a forensic scientist. Look at the big picture, 
                and wonder how it all ended up the way it is now. This allows me to look at problems I run into and work my way backwards, and discover
                clever and simple solutions to the issues at hand.
            </p>

            <p className='content'>
                <p id='skills'>What I specialize in:</p>
                [ HTML, CSS, JavaScript, Node.js, Express.js, React.js, MongoDB, SQL Queries, Java ]
                <br/> <br/>The list is still growing!
                I have an intense passion for learning, and can adapt to whatever is in my path. If you'd like to hire me,  
                <Link to="/contact" className='linkItem'><strong> CONTACT ME!</strong></Link>
            </p>

        </div>
    </div>
    )
}

export default Home