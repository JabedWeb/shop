import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Tags = () => {


  const [tag,setTag]=useState([]);

    //Tag deleted 
    const handleDelete =(id)=>{
      console.log(id);
      axios.delete('http://localhost:5050/tags/' + id)
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
            <Button variant='success' className='btn btn-sm mb-4'>View</Button>
            <Button variant='warning' className='btn btn-sm'>Edit</Button>
            <Button onClick={ ()=> handleDelete(data.id) } className='btn btn-sm btn-danger'>Delete</Button>
          </td>
          </tr>
          ) 
        }
      </tbody>
    </Table>
    </>
  )
}

export default Tags;