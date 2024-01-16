import React from 'react'
import { Icon } from '@iconify/react';


const ChoosePromo = () => {
  return (
    <div className='selectby-promo mbchk-20'>
      <h4><Icon icon="bxs:offer" /> Select Promo Code</h4>
      <hr className='sepr-hrprice'></hr>
      <div className="couponfee-area">

        <label htmlFor="promo-1" className="radio-custom-site">
          <input type="radio" name="tab" value="ZCRIWO14" id="promo-1" className="hidden" defaultChecked={true} />
          <span className="label" />
          <span className="radiocustom-text">
            <b>ZCRIWO14 <Icon icon="bxs:offer" /></b>
            <span className='inner d-block'>After applying this coupon there will be no convenience fee applied on customer booking</span>
          </span>
        </label>

        <label htmlFor="promo-2" className="radio-custom-site disabled">
          <input type="radio" name="tab" value="ZCRIWO14" id="promo-2" className="hidden" disabled />
          <span className="label" />
          <span className="radiocustom-text">
            <b>ZCRIWO14 <Icon icon="bxs:offer" /></b>
            <span className='inner d-block'>After applying this coupon there will be no convenience fee applied on customer booking</span>
          </span>
        </label>
        
      </div>
    </div>
  )
}

export default ChoosePromo