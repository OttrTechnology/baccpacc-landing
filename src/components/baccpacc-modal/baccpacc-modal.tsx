import { createPortal } from "react-dom";

import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Qr from "/qr.svg?url";
import "./baccpacc-modal.styles.scss";


const BaccpaccModal = () => {

    const [ opened, { open, close }] = useDisclosure(false);

    return (
        <>
            {
                createPortal(
                    <Modal opened= {opened} onClose={close} padding= {0} centered size="auto" className="modal" radius={"1.25rem"} >
                        <div className="modal-content">
                            <img src= {Qr} alt="QR Code" className="qr-container" />
                            <p className="modal-text">Scan to download Baccpacc</p>
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