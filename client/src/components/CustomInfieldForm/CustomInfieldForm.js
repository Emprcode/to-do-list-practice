import React from 'react'
import { Form } from 'react-bootstrap'

export const CustomInfieldForm = () => {
  return (
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    
  )
}
