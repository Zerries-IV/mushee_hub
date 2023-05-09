import "./styles/Navbar.scss"
import { Nav } from 'react-bootstrap'
import { Socials } from './Footer.jsx'
import {NAVBAR_LINKS} from '../Constants'
import { useState } from "react"
import  PropTypes from "prop-types"

const LOGO_URL = 'https://raw.githubusercontent.com/nnoromiv/mushee/master/src/assets/mushee.jpg'

export const Logo = () => {
    return (
        <img src={LOGO_URL} alt="logo" srcSet="" className='LogoImage'/>
    )
}

const NavLinks = (props) => {
    const [active, setActive] = useState(props.Active)
    return (
        <Nav className='NavLinks' activeKey={active} color='black'  onSelect={(selectedKey) => setActive(selectedKey)}>
        {
            NAVBAR_LINKS.slice(0,).map(navbar_links => {
                return(
                    <Nav.Item key={navbar_links.href}>
                        <Nav.Link href={navbar_links.href} eventKey={navbar_links.href} >{navbar_links.link}</Nav.Link>
                    </Nav.Item>
                )
            })
        }
        </Nav>
    )
}

NavLinks.propTypes = {
    Active: PropTypes.string
}

const PrimaryNavbar = () => {
    return(
        <div className='PrimaryNavbar'>
        <Logo />
        <Socials />
        </div>
    )
}

const Navbar = (props) => {
  return (
    <header>
        <PrimaryNavbar />
        <NavLinks Active={props.navActive}/>
    </header>
  )
}

Navbar.propTypes = {
    navActive: PropTypes.string
}


export default Navbar