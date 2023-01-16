import React from 'react'
import '../Footer/Footer.scss'
import MemberButton from '../Membership/Button/MemberButton'
import FooterLinks from './Links/FooterLinks'

function Footer() {
  return (
    <div className='footer'>
        <h1>Join us as a React.js developer</h1>
        <MemberButton/>
        <FooterLinks/>
    </div>
  )
}

export default Footer