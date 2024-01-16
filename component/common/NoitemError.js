import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useEffect } from 'react'
import {
  faArrowLeftLong
} from "@fortawesome/free-solid-svg-icons"; 
import { useRouter } from 'next/router';

export default function Pageerror({ title, subtitle, link, linktext }) {
  const navigation = useRouter(); 

  useEffect(() => { 
    window.scrollTo(0, 0)
    setTimeout(() => {
      navigation.push("/");
    }, 5000);
  }, []); 

  return (
    <> 
      <div className="pageerror-wrap full-w engineexp-btn text-center py-5  wf-100 ">
        <div className='pageerror-inner'>
          <div className='imgwr'>
            <img src='/images/err-found.jpg' />
          </div>
          <div className='flex-grow-1'>
            <div className='my-4'>
              <div className="h5 mb-3 fw-semibold">{title}</div>
              <div className="text-secondary text-lg ">{subtitle}</div>
            </div>
            <Link href={link}><a className="btn btn-site ripple-wv"><span><FontAwesomeIcon icon={faArrowLeftLong} className='me-2' /> {linktext}</span></a></Link>
          </div>
        </div>
      </div>
    </>
  )
}
