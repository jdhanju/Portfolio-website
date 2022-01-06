import face from './images/face.png'

function About(){

    return(
        <div className='aboutContent'>
            <img src={face} className='myFace'/>
            <p>This is just a test. I just want to see what happens when I add alot of text for my bio
                please don't mess up the layout. Time for some random text: asdf  sdfsadfsadf s df sadf as df
                sadfsadfsaf  sdf as  asdfsdafas fsafd asdf  sadfasdfsadfsadf sadfsadfsad.
            </p>
        </div>
    );
}

export default About;