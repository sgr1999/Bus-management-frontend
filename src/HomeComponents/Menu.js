import React from 'react'

import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='mt-5'>
       <ListGroup>
           <ListGroupItem  tag="a" herf="#!" action>Home</ListGroupItem>
           <ListGroupItem tag="a" herf="#!" action>Bus Details</ListGroupItem>
           <ListGroupItem tag="a" herf="#!" action>Bus Booking</ListGroupItem>
           <Link className='list-group-item list-group-item-action' tag="a" to="/employee-details" action>Employee Details</Link>
           <Link className='list-group-item list-group-item-action' tag="a" to="/customer-details" action>Customer Details</Link>
 
        </ListGroup>
    </div>
  )
}

export default Menu