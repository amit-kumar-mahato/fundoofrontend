import React from 'react';
import {Modal} from 'react-bootstrap';
export default function EditModal(props) {
<<<<<<< HEAD
    console.log(props.show+"/ "+props.onHide);
    return (
            <Modal show={props.show} onHide={props.onHide} centered>
=======
    console.log(props.show);
    return (
            <Modal show={props.show} onHide={props.handleClose} centered>
>>>>>>> 0da234bfc6c2c577c773c54384d4929a1030c5ac
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
