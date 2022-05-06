import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Tags = () => {
  const [tagupdate,setTagUpdate]=useState(false);
  //tag edited
  const [tags,setTags]=useState({
    name :'',
    id : ''
  });

  const handleTagEdit=(id)=>{
    setTagUpdate(true)
    axios.get('http://localhost:5050/tags/' + id).then(res=>{
      setTags({
        ...tags,
        name : res.data.name,
        id : res.data.id
      })
    })
  }
    //Tag deleted 
    const [tag,setTag]=useState([]);

    const handleDelete =(id)=>{
      console.log(id);
      axios.delete('http://localhost:5050/tags/' + id)
    }
    //slung update 
    const makeSlug =(data)=>{
      let arr=data.split(' ');
      return arr.join('-').toLowerCase();
  }
    //submit update tag
    const tagUpdateSubmit=(e)=>{
      let slug =makeSlug(tags.name)
      e.preventDefault();
      axios.patch('http://localhost:5050/tags/' + tags.id,{
        name : tags.name,
        slug : slug
      })
    }
  //reload purpose used ussEffect function
  useEffect(()=>{
    axios.get('http://localhost:5050/tags').then(res=>{
      setTag(res.data)
    })
  },[tag])

  return (
       <>
    <Link to="/admin/addTags" className='btn btn-primary btn-sm mb-4'>Add new Tag</Link>
    <hr/>
    <Table>
      <thead className='mb-4'>
        <th>#</th>
        <th>Name</th>
        <th>Slug</th>
        <th>Action</th>
      </thead>
      <tbody className='mt-3'>
        {
          tag.map((data,index)=>
          <tr>
          <td>{index+1}</td>
          <td>{data.name}</td>
          <td>{data.slug}</td>
          <td>
            {/* <Button variant='success' className='btn btn-sm mb-4'>View</Button> */}
            <Button onClick={ ()=>handleTagEdit(data.id)} variant='warning' className='btn btn-sm'>Edit</Button>
            <Button onClick={ ()=> handleDelete(data.id) } className='btn btn-sm btn-danger'>Delete</Button>
          </td>
          </tr>
          ) 
        }
      </tbody>
    </Table>

    <hr/>
        {
           tagupdate && 
         <>
          <h3>Edit Form Tag</h3>
          <Form onSubmit={tagUpdateSubmit}>
              <Form.Control value={tags.name} onChange={e=> setTags({...tags, name : e.target.value})} type='text'/><br />
              <Button  className='btn btn-sm' type='submit'>Update</Button>
          </Form>
         
         </>
        }

    </>
  )
}

export default Tags;