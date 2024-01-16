
import { useRouter } from 'next/router'  
import FooterSection from './FooterSection'
import HeaderSection from './HeaderSection'

export default function Layout({ children }) {
    const router = useRouter()
    const HdrVisiblity = router.pathname !== '/_error'
    const FtrVisiblity = router.pathname !== '/_error'
    const FooterBlock = router.pathname === "/flight/checkout/[checkout]" || router.pathname === "/flight/flight-booking-confirmation" || router.pathname === "/flight/listing" ? null : (
      <FooterSection />
    )

    return (
        <>
            {HdrVisiblity && <HeaderSection />}
            <>{children}</>
            {FtrVisiblity && FooterBlock}
        </>
    )
}