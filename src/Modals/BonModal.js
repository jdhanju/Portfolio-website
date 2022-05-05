import { Modal, Button } from "react-bootstrap";

function BonModel(props){
    return(
        <Modal show={props.modalShow} onHide = {props.modalHide}>
            <Modal.Header closeButton>
            <Modal.Title>Bon Voyage</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ fontWeight: 'bold' }}>nwHacks 2021</Modal.Body>

            <Modal.Body>
                <ul>
                    <li>
                        Created a service called Bon Voyage to help prevent prevent drinking and driving.
                    </li>
                    <br />
                    <li>
                        Developed the back end using Java, Spring boot, and the REST API to help process and send data to the front-end.
                    </li>
                    <br />
                    <li>
                        Constructed the front-end by using JavaScripT, HTML, and CSS.
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

export default BonModel;