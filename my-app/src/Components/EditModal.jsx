import React from 'react';
import {Modal} from 'react-bootstrap';
export default function EditModal(props) {
    console.log(props.show);
    return (
            <Modal show={props.show} onHide={props.handleClose} centered>
                <div className="modal-main-div">
                    <div className="modal-content">
                        <div style={{display:'flex'}}>
                            <input />
                        </div>
                        <div></div>
                    </div>
                </div>
            </Modal>
    )
}
