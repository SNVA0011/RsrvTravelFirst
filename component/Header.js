import { useEffect, useState } from 'react'; 
import Container from 'react-bootstrap/Container'  
import { PageStaicJson } from '../static/StaticJson'; 


export default function Header() { 
    const HeaderUrl = PageStaicJson('header'); 
 
    // sticky header
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);
    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 150 ? true : false;
        setSticky(stickyClass);
    };

    return (
        <>
            <header className={`bg-light py-4 ${sticky ? 'fixed' : ''}`}>
                <Container>
                    <p>Header</p>
                </Container>
            </header>

            <div className='header-emptyarea full-w'></div>
        </>
    )
}








