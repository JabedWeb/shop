import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AddTag = () => {
    const [tag,setTag]=useState('');

    //make sLug generate
    const makeSlug =(data)=>{
        let arr=data.split(' ');
        return arr.join('-').toLowerCase();
    }

    //submit add new tag function
    const handleSubmit =(e)=>{
        let slug = makeSlug(tag);
        e.preventDefault();

    axios.post('http://localhost:5050/tags',{
             id : '',
            name : tag,
            slug : slug
        }).then(res=>{
            setTag('');
        })
    }

  return (
    <>
    <Link  className='btn btn-primary btn-sm' to="/admin/tags">All Tag</Link>
    <br />
    <br />
    <br />
    <Form onSubmit={handleSubmit}>
        <Form.Control value={tag} onChange={e=> setTag(e.target.value)} type='text'/><br />
        <Button className='btn btn-sm' type='submit'>Add Tags</Button> 
    </Form>
    </>
  )
}

export default AddTag;