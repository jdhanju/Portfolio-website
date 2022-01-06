import { Modal, Button } from "react-bootstrap";

function RainforestModal(props){
    return(
        <Modal show={props.modalShow} onHide = {props.modalHide}>
            <Modal.Header closeButton>
            <Modal.Title>Rainforest Automation</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ fontWeight: 'bold' }}>Duration: May 2021 - Dec 2021 (8 Months)</Modal.Body>

            <Modal.Body>
                <ul>
                    <li>
                        Developed an engagement portal for Puget Sound Energy using React, Redux, AWS services, OAuth 2.0, and a content management system.
                    </li>
                    <br />
                    <li>
                        Implemented new features for the company's user portal using React and Redux.
                    </li>
                    <br />
                    <li>
                        Maintained, updated, and debugged 40+ tickets for React components, Redux stores, and optimized REST API request functions.
                    </li>
                    <br />
                    <li>
                        Troubleshooted UNIX firmware using bash scripts and XML commands.
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

export default RainforestModal;