import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { Icon } from '@iconify/react';

const CheckoutAccordian = ({ visibleContent, hiddenContent, theme, title, collapse }) => {
    const [open, setOpen] = useState(collapse);
    return (
        <div className={`collapse-clp ${theme.color}`}>
            <button className='btn btn-clp d-flex' onClick={() => setOpen(!open)} aria-expanded={open}>
                <div className='flex-grow-1 pe-2'>
                    <Icon icon={theme.icon} className='icon-content' />
                    {title}
                </div>
                <div className='icon-right'>
                    {open ? <Icon icon="lucide:minus" className='icon-op'/> : <Icon icon="lucide:plus" className='icon-op'/>}
                </div>
            </button>

            <div className={`w-100 ${open ? 'open' : 'closed'}`}>
                {visibleContent}
                <Collapse in={open}>
                    <div>
                        {hiddenContent}
                    </div>
                </Collapse>
            </div>

        </div>
    )
}

export default CheckoutAccordian