import FadeIn from "react-fade-in/lib/FadeIn";
import Box from "./Components/Box";

function Projects(){

    return(
        <div>
            <FadeIn transitionDuration={600}>
                <Box icon={'Portfolio Site'}/>
                <br />
                <br />
                <Box icon={'Safe Restaurants'}/>
            </FadeIn>
        </div>
    );
}

export default Projects;