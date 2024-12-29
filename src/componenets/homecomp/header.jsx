import React from 'react'
import '../../assets/css/index.css'
import logo from '../../assets/image/logo.png'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-4">
                <img src={logo} alt="" />
            </div>
            <div className="col-8">
              <div className="pages">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Services</Link></li>
                    <li><Link to='/'>Contact us</Link></li>
                    <li><Link to='/'>About us</Link></li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}
