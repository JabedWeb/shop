import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Category = () => {

  // show the api data
  const [categories,setCategories]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5050/catergory').then(res=>{
      setCategories(res.data);
    })
  },[categories])

  //delete the single data

  const handleCategoryDelete =(id)=>{
    axios.delete('http://localhost:5050/catergory/' + id)
  }

  

  //edit single Data
  const [update,setUpdate]=useState(false)

  const [editCategory,setEditCategory]=useState('');

  const {id,name,email}=editCategory;

  const handleCategoryEdit=(id)=>{
    setUpdate(true)
    setView(false)
    axios.get('http://localhost:5050/catergory/' + id ).then(res=>{
      setEditCategory({
        serial : res.data.id,
        name : res.data.CategoryName,
        email : res.data.CategoryEmail
      })
    })
  }

  //edit single data updated

  const editUpdateDataSubmit =(e)=>{
    e.preventDefault();
    setUpdate(false)
    axios.patch('http://localhost:5050/catergory/' + editCategory.serial,{
      CategoryName : name,
      CategoryEmail : email
    })
  }

  //view single Data

  const [view,setView]=useState(false)

  const [viewCategory,setViewCategory]=useState('')

  const handleCategoyView=(id)=>{
    setView(true)
    setUpdate(false)
    axios.get('http://localhost:5050/catergory/' + id).then(res=>{
    setViewCategory({
      name : res.data.CategoryName,
      email : res.data.CategoryEmail
    })
    })
  }



  return (
    <>
    <Link to='/admin/addCategory' className='btn btn-primary btn-sm mb-4'>Add new Directory</Link>
    <hr/>
    <Table>
      <thead className='mb-4'>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </thead>
      <tbody className='mt-3'>
      {
        categories.map((data,index)=>
       <>
        <tr>
        <td>{index+1}</td>
        <td>{data.CategoryName}</td>
        <td>{data.CategoryEmail}</td>
        <td>
          <Button onClick={()=>handleCategoyView(data.id)} variant='success' className='btn btn-sm mb-4'>View</Button>
          <Button onClick={()=>handleCategoryEdit(data.id)} variant='warning' className='btn btn-sm'>Edit</Button>
          <Button onClick={()=>handleCategoryDelete(data.id)} className='btn btn-sm btn-danger'>Delete</Button>
        </td>
        </tr>
       </>
        )
      }
      </tbody>
    </Table>
    <br /> <br />
      {
        
      update && 
      <Form  onSubmit={editUpdateDataSubmit}>
        <Form.Group>
        <Form.Control type='Text' placeholder="Developer's Name"  value={name} onChange={e=> setEditCategory({...editCategory, name : e.target.value})} />
        </Form.Group>
        <Form.Group className='mt-2'>
        <Form.Control type='Text' placeholder="Developer's Email" value={email} onChange={e=> setEditCategory({...editCategory, email : e.target.value})} />
        </Form.Group>
       <Button className="btn-sm" type='submit'>Update Edit Data</Button>
   </Form>
      }

    <br /> <br />
      {
        
      view && 
      <>
      <h2>Category Detail</h2>
      <h3 style={{color : "gold"}}>{viewCategory.name}</h3>
      <h5>{viewCategory.email}</h5>
      </>
      }
    </>
  )
}

export default Category