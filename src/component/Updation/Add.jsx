import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Form } from "react-bootstrap";

function Add(props) {
  const title = InputStateHandler();
  const details = InputStateHandler();
  const dueDate = InputStateHandler();

  const onSave = (e) => {
    e.preventDefault();
    const saveObject = {
      title: title.value,
      details: details.value,
      dueDate: dueDate.value,
    };
    title.setValue("");
    details.setValue("");
    dueDate.setValue("");

    props.setTodoArray((prev) => [...prev, saveObject]);
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSave} >
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text"  {...title} placeholder="Enter Title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDetail">
            <Form.Label>Detail</Form.Label>
            <Form.Control type="text" {...details} placeholder="Enter Detail" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="text" {...dueDate} placeholder="Enter Date" />
          </Form.Group>

          <Button variant="primary" type="submit" >
            Save
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

const InputStateHandler = (initialValue) => {
  const [value, setValue] = useState(initialValue || "");
  return {
    value: value,
    onChange: (e) => setValue(e.target.value),
    setValue: (v) => setValue(v),
  };
};

export default Add;
