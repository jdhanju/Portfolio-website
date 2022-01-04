import { Modal, Button } from "react-bootstrap";

function RainforestModal(props){
    return(
        <Modal show={props.modalShow} onHide = {props.modalHide}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Button variant="secondary" onClick={() => props.modalHide()}>
                Close
            </Button>
            <Modal.Footer>
                Close
            </Modal.Footer>
      </Modal>
    );
}

export default RainforestModal;