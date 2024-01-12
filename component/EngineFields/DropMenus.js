import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'next/image';


export default function TravelClass({icon, label, value, className,menuclass, children }) {
  return (
    <Dropdown className='exp-menustv'>
    <Dropdown.Toggle as={'div'}>
      <InputGroup className={`engineexp-text ${className}`}>
        <Form.Label>{label}</Form.Label>
        <InputGroup.Text className='first'>
          <Image width="16" height="16" src={`/images/${icon}`} alt={label} />
        </InputGroup.Text>
        <Form.Control value={value} readOnly={true} className='pe-0'  aria-labelledby={label}/>
        <InputGroup.Text className='last'>
          <Image width="16" height="16" src={`/images/clstrv-arrow.png`} alt='arrow' />
        </InputGroup.Text>
      </InputGroup>
    </Dropdown.Toggle>

    <Dropdown.Menu className={menuclass}>
      {children}
    </Dropdown.Menu>
  </Dropdown>
  )
}

