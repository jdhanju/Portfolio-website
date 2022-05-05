import { Modal, Button } from "react-bootstrap";

function BacteriaModel(props){
    return(
        <Modal show={props.modalShow} onHide = {props.modalHide}>
            <Modal.Header closeButton>
            <Modal.Title>Bacteria Cell Simulator</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ fontWeight: 'bold' }}>Personal Project</Modal.Body>

            <Modal.Body>
                <ul>
                    <li>
                        Utilized Java and the Java Swing Framework to develop a simulator to emulate white bllod cell behaviour.
                    </li>
                    <br />
                    <li>
                        The simulator was created using an object oriented design, inheritance, and polymorphism to achieve more organized and reusable code.
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

export default BacteriaModel;