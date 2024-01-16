import React from 'react'
import Engine from "../../component/engine/Engine";
import PageHead from "../../component/common/PageHead";
import { Hostname } from '../../utils/static';


const index = () => {
  return (
    <>
      <PageHead
        title="Vacation Package Deals | Last minute Vacation Package"
        description="Book your cheap Vacation Package deals, Last minute Vacation Package deals and Holiday Package Deals at reservationsdeal.in. Plan your next dream destination at unbeatable rates.
In case of any issue, please let me know."
        keywords={`${Hostname}, Package,  Package Deals`}
      />

      <Engine activetab={2} />
    </>
  )
}

export default index