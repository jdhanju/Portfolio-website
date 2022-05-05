import { Modal, Button } from "react-bootstrap";

function SafeModel(props){
    return(
        <Modal show={props.modalShow} onHide = {props.modalHide}>
            <Modal.Header closeButton>
            <Modal.Title>Safe Restaurants</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ fontWeight: 'bold' }}>School Project</Modal.Body>

            <Modal.Body>
                <ul>
                    <li>
                        Created an Android app usning Java and Android Studio that allows users to view health inspections of nearby restaurants.
                    </li>
                    <br />
                    <li>
                        Integrated the Google Maps API, so users can see the location of restaurants.
                    </li>
                    <br />
                    <li>
                        User the Agile Methodology Scrum to plan the project, in which I took the responsibilities of the scrum master, and repository manager.
                    </li>
                </ul>
            </Modal.Body>

            <Modal.Footer>
                <Button color="secondary" onClick={() => props.modalHide()}>
                    Close
                </Button>    
            </Modal.Footer>
    </Modal>
    );
}

export default SafeModel;