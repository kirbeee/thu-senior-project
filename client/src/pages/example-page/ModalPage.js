import { useState } from "react";
import Modal from '../../components/Modal';
import Button from "../../components/Button";

function ModalPage(){
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary >I Accept</Button>
        </div>)

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                This is a modal
            </p>
        </Modal>)

    return(
        <div className="relative">
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}
        </div>
    )
}

export default ModalPage;