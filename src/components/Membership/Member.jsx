import React from 'react'
import MemberButton from './Button/MemberButton'
import '../Membership/Member.scss'
import { Link } from 'react-router-dom'

function Member() {
  return (
    <div className='memberShip'>
      <div className='memberShip_logo'>
        <img src='https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png' alt="React_logo" className='logo' />
      </div>
      <div className='memberShip_dev'>
        <p>React.js developers, we're waiting for you to React</p>
      </div>
      <div className='memberShip_offer'>
        <p><i className="fa-solid fa-check"></i>Long-term positions</p>
        <p><i className="fa-solid fa-check"></i>Join a community of React.js developers</p>
        <p><i className="fa-solid fa-check"></i>Fair compensation</p>
        <p><i className="fa-solid fa-check"></i>Flexible working hours</p>
        <p><i className="fa-solid fa-check"></i>Work from anywhere</p>
      </div>
      <div className='memberShip_button'>
        <MemberButton/>
      </div>
      <div className='memberShip_skill'>
        <p>Not a React.js developer? <Link> <span> Find your skill!</span></Link></p>
      </div>
        
    </div>
  )
}

export default Member