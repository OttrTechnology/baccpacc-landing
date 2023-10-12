import { createPortal } from "react-dom";

import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Qr from "../qr/qr.component";
import "./baccpacc-modal.styles.scss";


const BaccpaccModal = () => {

    const [ opened, { open, close }] = useDisclosure(false);

    return (
        <>
            {
                createPortal(
                    <Modal opened= {opened} onClose={close} centered size= "auto" >
                        <div className="model-content">
                            <div className="qr-container"> <Qr /> </div>
                            <p className="modal-text">Scan to download baccpacc</p>
                        </div>
                    </Modal>,
                    document.body
                )
            }

            <button onClick={open} className="get-baccpacc"> get baccpacc </button>
        </>
    )
}

export default BaccpaccModal;