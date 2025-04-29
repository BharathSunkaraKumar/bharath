import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer-container'>
      <div className="say-hi wrapper">
        <h1>👋 Thanks for stopping by! Here is more of me if you are interested :)</h1>
      </div>
      <table>
          <thead>
            <tr>
              <th>pages</th>
            
              <th>projects</th>
            
              <th>let' connect</th>
            </tr>
          </thead>
        <tbody>
          <tr>
            <td><Link to='/'>Home</Link></td>
            <td>project1</td>
            <td>linkedin</td>
          </tr>
          <tr>
            <td><Link to='/about'>about</Link></td>
            <td>project2</td>
            <td>X</td>
          </tr>
          <tr>
            <td><a href='/projects'>Projects</a></td>
            <td>project2</td>
            <td>email</td>
          </tr>
          <tr>
            <td></td>
            <td>project3</td>
            <td>cv</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Footer