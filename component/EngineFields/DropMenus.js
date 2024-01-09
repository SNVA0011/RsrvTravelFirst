import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';


export default function TravelClass({icon, label, value, className,menuclass, children }) {
  return (
    <Dropdown className='exp-menustv'>
    <Dropdown.Toggle as={'div'}>
      <InputGroup className={`engineexp-text ${className}`}>
        <Form.Label>{label}</Form.Label>
        <InputGroup.Text className='first'>
          <img src={`/images/${icon}`} alt={label} />
        </InputGroup.Text>
        <Form.Control value={value} readOnly={true} className='pe-0' />
        <InputGroup.Text className='last'>
          <img src={`/images/clstrv-arrow.png`} />
        </InputGroup.Text>
      </InputGroup>
    </Dropdown.Toggle>

    <Dropdown.Menu className={menuclass}>
      {children}
    </Dropdown.Menu>
  </Dropdown>
  )
}

