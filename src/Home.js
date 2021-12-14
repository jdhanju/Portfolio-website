import FadeIn from "react-fade-in/lib/FadeIn";

function Home(){

    return(
        <div class="home-content">
            <FadeIn transitionDuration={600}>
                <h1>Welcome!</h1>
            </FadeIn>
            <FadeIn transitionDuration={600} delay={200}>
                <h2>I'm Jaiveer Dhanju.</h2>
            </FadeIn>
            <FadeIn transitionDuration={600} delay={400}>
                <h3>Your friendly neighborhood Software Developer.</h3>
            </FadeIn>
        </div>
    );
}

export default Home;