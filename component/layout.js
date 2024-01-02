
import { useRouter } from 'next/router'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
    const router = useRouter()
    const HdrVisiblity = router.pathname !== '/_error'
    const FtrVisiblity = router.pathname !== '/_error'

    return (
        <>
            {HdrVisiblity && <Header />}
            <>{children}</>
            {FtrVisiblity && <Footer />}
        </>
    )
}