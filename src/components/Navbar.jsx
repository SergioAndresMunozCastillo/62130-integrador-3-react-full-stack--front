import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import DarkModeContext from '../contexts/DarkModeContext'

const Navbar = () => {
  const {mode} = useContext(DarkModeContext)

  return (
    <nav className={`nav-bar nav-bar__${mode}-mode`}>
        <ul className='nav-bar__nav-list'>
            <li className='nav-bar__nav-item'><NavLink className={`nav-bar__nav-link nav-bar__nav-link__${mode}-mode`} to="/">Inicio</NavLink></li>
            <li className='nav-bar__nav-item'><NavLink className={`nav-bar__nav-link nav-bar__nav-link__${mode}-mode`} to="/alta">Alta</NavLink></li>
            <li className='nav-bar__nav-item'><NavLink className={`nav-bar__nav-link nav-bar__nav-link__${mode}-mode`} to="/nosotros">Nosotros</NavLink></li>
            <li className='nav-bar__nav-item'><NavLink className={`nav-bar__nav-link nav-bar__nav-link__${mode}-mode`} to="/contacto">Contacto</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar