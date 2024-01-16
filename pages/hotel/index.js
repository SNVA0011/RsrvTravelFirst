import React from 'react'
import Engine from "../../component/engine/Engine";
import PageHead from "../../component/common/PageHead";
import { Hostname } from '../../utils/static';

const index = () => {
  return (
    <>
      <PageHead
        title={`ReservationsDeal : Hotels, Vacations & Travel Deals`}
        description={`Book Tickets, luxury hotels tickets with best deals from your destinations & Get Best Price Guarantee @ ${Hostname}`}
        keywords={`${Hostname}, Hotels, Travel Deals`}
      />

    <Engine activetab={1} />
</>
  )
}

export default index
 