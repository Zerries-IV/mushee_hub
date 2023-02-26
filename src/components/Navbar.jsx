// import Button from 'react-bootstrap/Button'
import React from 'react'
import "./styles/Navbar.scss"
import { Nav } from 'react-bootstrap'
import { Socials } from './Footer'

export const Logo = () => {
    return (
        <img src='images/Logo.png' alt="logo" srcSet="" className='LogoImage'/>
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
        href: '#FAQ',
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
        <NavLinks />
        <Socials />
        {/* <div className='AuthButton'>
            <Button variant='primary' className="Button">Sign in</Button>
            <Button variant='outline-primary' className="Button">Log in</Button>
        </div> */}
    </div>
    )
}

const Navbar = () => {
  return (
    <header>
        <PrimaryNavbar />
    </header>
  )
}

export default Navbar