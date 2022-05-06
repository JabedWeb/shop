import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AddCategory = () => {

    const [category,setCategory]=useState('');
    const {name,email}=category;

    const addSubmitCategory =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5050/catergory',{
            id : '',
            CategoryName : name,
            CategoryEmail : email
        }).then(res=>{
            setCategory({
                name : '',
                email :''
            })
        })
    }
  return (
    <>
     <Link to="/admin/category" className='btn btn-primary btn-sm mb-4'>All Category</Link>
    <hr/>
   <Form onSubmit={addSubmitCategory}>
        <Form.Group>
        <Form.Control type='Text' placeholder="Developer's Name" value={name} onChange={e => setCategory({...category, name : e.target.value})}  />
        </Form.Group>
        <Form.Group className='mt-2'>
        <Form.Control type='Text' placeholder="Developer's Email" value={email} onChange={ e => setCategory({...category, email: e.target.value})} />
        </Form.Group>
       <Button className="btn-sm" type='submit'>Add New Category</Button>
   </Form>
    </>
  )
}

export default AddCategory