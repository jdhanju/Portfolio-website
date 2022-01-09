import face from './images/face.png'
import face2 from './images/face2.png'
import { SocialIcon } from 'react-social-icons';
import FadeIn from "react-fade-in/lib/FadeIn";

function About(){

    return(
        <div className='aboutContent'>
            <FadeIn transitionDuration={600}>
                <img src={face2} className='myFace'/>
                <p>Hello World! I'm Jaiveer Dhanju and I'm a
                    computer science student attending Simon Fraser University residing in Burnaby, BC. 
                    Even though I love exploring new programming languages and frameworks, my favorite part about being a software developer is 
                    having the freedom to express my ideas through code! If you have any questions, or just want to say hello, feel free to contact me.
                    Below are my social pages and my email:
                </p>
                <br />
                <div className='socialContainer'>
                    <div className='mySocials'>
                        <SocialIcon url='https://www.linkedin.com/in/jaiveer-dhanju/'/>
                    </div>
                    <div className='mySocials'>
                        <SocialIcon url='https://github.com/jdhanju'/>
                    </div>
                    <div className='mySocials'>
                        <SocialIcon network='email' url='mailto:jaiveerdhanju@hotmail.com'/>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

export default About;