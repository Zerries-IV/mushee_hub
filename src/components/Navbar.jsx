// import Button from 'react-bootstrap/Button'
import React from 'react'
import "./styles/Navbar.scss"
import { Nav } from 'react-bootstrap'
import { Socials } from './Footer'

const LOGO_URL = 'https://raw.githubusercontent.com/nnoromiv/mushee/master/public/images/mushee.jpg'

export const Logo = () => {
    return (
        <img src={LOGO_URL} alt="logo" srcSet="" className='LogoImage'/>
    )
}

export const NAVBAR_LINKS = [
    {
        href: '/',
        link: 'Home'
    },
    {
        href: '/businesses',
        link: 'Businesses'
    },
    {
        href: 'https://mushee.gitbook.io/mushee',
        link: 'Whitepaper'
    },
    {
        href: 'https://mushee.gitbook.io/mushee/mushee-base/security-and-mushee',
        link: 'FAQ'
    },
]

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