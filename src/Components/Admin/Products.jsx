import React from 'react'
import { Button, Table } from 'react-bootstrap';

const Products = () => {
  return (
    <>
    <Button className='btn btn-sm mb-4'>Add new Products</Button>
    <hr/>
    <Table>
      <thead className='mb-4'>
        <th>#</th>
        <th>Name</th>
        <th>Slug</th>
        <th>Action</th>
      </thead>
      <tbody className='mt-3'>
        <td>1</td>
        <td>Men</td>
        <td>Men</td>
        <td>
          <Button variant='success' className='btn btn-sm mb-4'>View</Button>
          <Button variant='warning' className='btn btn-sm'>Edit</Button>
          <Button  className='btn btn-sm btn-danger'>Delete</Button>
        </td>
      </tbody>
    </Table>
    </>
  )
}

export default Products;