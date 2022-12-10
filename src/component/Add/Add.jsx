import  Modal from 'react-bootstrap/Modal';
import  Button from 'react-bootstrap/Button';

function Add(props){

    const setTodoArray = props.setTodoArray;

    const onSave = (e)=>{
        e.preventDefault();
        console.log(e);
        // props.onHide();
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
        <form action={onSave}>

            <label htmlFor="title">Title</label>
            <input type="text" id='title' /><br />

            <label htmlFor="detail">Details</label>
            <input type="text" id='detail' /><br />

            <label htmlFor="Date">Due Date</label>
            <input type="text" id='Date' /><br />
            
            <input type="submit" value="Save"/>
        </form>

      </Modal.Body>
      <Modal.Footer>
            {/* <Button type='Submit' onClick={props.onHide}>Save</Button> */}
      </Modal.Footer>
    </Modal>
    )
}


export default Add;
