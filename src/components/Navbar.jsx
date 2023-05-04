import "./styles/Navbar.scss"
import { Nav } from 'react-bootstrap'
import { Socials } from './Footer.jsx'
import {NAVBAR_LINKS} from '../Constants'

const LOGO_URL = 'https://raw.githubusercontent.com/nnoromiv/mushee/master/public/images/mushee.jpg'

export const Logo = () => {
    return (
        <img src={LOGO_URL} alt="logo" srcSet="" className='LogoImage'/>
    )
}

const NavLinks = () => {
    return (
        <Nav className='NavLinks'>
        {
            NAVBAR_LINKS.slice(0,).map(navbar_links => {
                return(
                    <Nav activeKey='/' color='black' key={navbar_links.href} >
                        <Nav.Item>
                            <Nav.Link href={navbar_links.href} eventKey={navbar_links.href}>{navbar_links.link}</Nav.Link>
                        </Nav.Item>
                    </Nav>
                )
            })
        }
        </Nav>
    )
}

const PrimaryNavbar = () => {
    return(
        <div className='PrimaryNavbar'>
        <Logo />
        <Socials />
        </div>
    )
}

const Navbar = () => {
  return (
    <header>
        <PrimaryNavbar />
        <NavLinks />
    </header>
  )
}

export default Navbar