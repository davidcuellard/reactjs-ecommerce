import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap'

function ModalData(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
            <h4>Por favor ingresa todos tus datos</h4>
            </Modal.Body>
            <Modal.Footer>
                <Link to="/cart"><Button onClick={ props.onHide }> Seguir comprando </Button></Link>          
            </Modal.Footer>
        </Modal>
    );
  }

export default ModalData