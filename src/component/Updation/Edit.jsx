import  Modal from 'react-bootstrap/Modal';
import  Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Form } from 'react-bootstrap';


function Edit(props){


    const title   = InputStateHandler(props.title); 
    const details = InputStateHandler(props.details);
    const dueDate = InputStateHandler(props.dueDate);

    const onSave = (e)=>{
        e.preventDefault();
        const saveObject ={
          title   : title.value, 
          details : details.value,
          dueDate : dueDate.value,
        };
        
        props.setTodoArray((prev)=>{
            return prev.map(
                (todo)=>
                   (todo.title === props.title)
                    ? {...saveObject } : todo
            );
        });
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
        <Modal.Title id="contained-modal-title-vcenter">
            Edit Todo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <form onSubmit={onSave}>

            <label htmlFor="title">Title</label>
            <input type="text" id='title' {...title} /><br />

            <label htmlFor="detail">Details</label>
            <input type="text" id='detail' {...details} /><br />

            <label htmlFor="Date">Due Date</label>
            <input type="text" id='Date' {...dueDate} /><br />
            
            <Button 
              type='submit' 
              onClick={props.onHide}>
                Save
            </Button>
        </form> */}

        
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
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
    )

    
  }
  
  
  const InputStateHandler = (initialValue) =>{
    const [value, setValue] = useState(initialValue||'');
    return {
      value:    value,
      onChange: (e)=> setValue(e.target.value),
      setValue: (v)=>  setValue(v)
    }
  }


export default Edit;
