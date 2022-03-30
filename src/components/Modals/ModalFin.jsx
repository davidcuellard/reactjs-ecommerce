import React from 'react'
import { Link } from 'react-router-dom';
import qrbinance from '../../media/qr-binance.jpeg'
import { Button, Modal } from 'react-bootstrap'

function ModalFin(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
            <h4>Gracias por comprar con nosotros</h4>
            <p>Tu código de compra es: <b> { props.code } </b> </p>
            <p>Envía tu pago en USDT a la siguiente cuenta de Binance vía ERC20</p>
            <p>0x0b333a00115322e1dadf89b073dd0ec4ae657b1e</p>
            <img className='qrbinance' src = { qrbinance } />
            <p>Envía el comprobante de pago al correo <b> davidcuellard30@gmail.com </b>  con asunto tu código de compra</p>
            </Modal.Body>
            <Modal.Footer>
                <Link to="/"><Button onClick={ props.onHide }> Volver al home </Button></Link>          
            </Modal.Footer>
        </Modal>
    );
  }

export default ModalFin