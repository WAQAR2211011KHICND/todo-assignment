import  Modal from 'react-bootstrap/Modal';
import  Button from 'react-bootstrap/Button';
import { useState } from 'react';


function Add(props){

    const title   = InputStateHandler(); 
    const details = InputStateHandler();
    const dueDate = InputStateHandler();


    const onSave = (e)=>{
        e.preventDefault();
        const saveObject ={
          title   : title.value, 
          details : details.value,
          dueDate : dueDate.value,
        };
        title.setValue('')
        details.setValue('')
        dueDate.setValue('')
        
        props.setTodoArray((prev)=>[...prev, saveObject ]);
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
            Add Todo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onSave}>

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
        </form>

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


export default Add;
