
import { useRouter } from 'next/router'  
import FooterSection from './FooterSection'
import HeaderSection from './HeaderSection'

export default function Layout({ children }) {
    const router = useRouter()
    const HdrVisiblity = router.pathname !== '/_error'
    const FtrVisiblity = router.pathname !== '/_error'
    const FlightResults = router.pathname === "/flight/checkout/[checkout]" || router.pathname === "/flight/flight-booking-confirmation" || router.pathname === "/flight/listing";
    const FooterBlock = FlightResults ? null : (
      <FooterSection />
    )

    return (
        <>
            {HdrVisiblity && <HeaderSection FlightHeader={FlightResults} />}
            <>{children}</>
            {FtrVisiblity && FooterBlock}
        </>
    )
}