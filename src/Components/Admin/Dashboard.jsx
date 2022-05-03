import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
    <section className="dash my-5">
        <Container>
            <Row>
                <Col md={3}>
                <ul className='list-group'>
                    <li className='list-group-item'><Link to="/admin/dashboard">Dashboard</Link></li>
                    <li className='list-group-item'><Link to="/admin/products">Product</Link></li>
                    <li className='list-group-item'><Link to="/admin/category">Category</Link></li>
                    <li className='list-group-item'><Link to="/admin/tags">Tags</Link></li>
                    <li className='list-group-item'><a href="#">Logout</a></li>
                </ul>

                </Col>
                <Col md={9} >
                <Outlet/>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Dashboard