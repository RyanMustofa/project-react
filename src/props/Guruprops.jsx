import React from 'react';
import { Modal,Button } from 'react-bootstrap';
import GuruAdd from '../component/content/GuruAdd';

const Guruprops = ({ tampil,tutup,show,data }) => {
    return(
        <div>
            <Button onClick={tampil}>edit</Button>
                <Modal show={show} onHide={tutup}>
                    <Modal.Header>Edit Data</Modal.Header>
                    <Modal.Body>
                        <GuruAdd datas={data} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={tutup}>
                                    Close
                              </Button>
                        <Button variant="primary" onClick={tutup}>
                            Save Changes
                      </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    )
}

export default Guruprops;
