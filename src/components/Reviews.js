
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Reviews({ opHrs }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {opHrs ? (
        <div>
          <div>
            <Button
              variant="secondary"
              className="px-3 py-2 mt-2 btn"
              onClick={handleShow}
            >
              Working Hours
            </Button>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Working Hours</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-text">
              <h5>Monday : {opHrs.Monday}</h5>
              <hr />
              <h5>Tuesday : {opHrs.Tuesday}</h5>
              <hr />
              <h5>Wednesday : {opHrs.Wednesday}</h5>
              <hr />
              <h5>Thursday : {opHrs.Thursday}</h5>
              <hr />
              <h5>Friday : {opHrs.Friday}</h5>
              <hr />
              <h5>Saturday : {opHrs.Saturday}</h5>
              <hr />
              <h5>Sunday : {opHrs.Sunday}</h5>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <p>nothing</p>
      )}
    </>
  );
}

export default Reviews;
