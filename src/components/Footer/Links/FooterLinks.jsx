import React from 'react'
import '../Links/FooterLinks.scss'

function FooterLinks() {
  return (
    <div className='footer_links'>
        <div>
            <img src="https://public-assets.toggl.com/b/assets/@toggl/hire/images/61b31827d33479857511f98d_proxify_logo-removebg-preview.6cfa7bcf.png" alt="Logo" />
        </div>
        <div>
            <h1>Contact</h1>
            <p>hr@proxify.io</p>
            <p>Follow us:</p>
            <p>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-facebook"></i>
            </p>
        </div>
        <div>
            <h1>Navigation</h1>
            <p>How we hire</p>
            <p>Company</p>
            <p>Member stories</p>
            <p>Open Roles</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
        </div>
        <div>
            <h1>Address</h1>
            <p>Sweden</p>
            <p>Barnhusgatan 22 <br /> 111 23 Stockholm</p>
            <p>Ukraine</p>
            <p>Klovskyi Descent, B. 7A</p>
            <p>Office #14 <br /> 01021 Kyiv</p>
        </div>
        <div>
            <h1>Remote jobs by stack</h1>
            <p>Laravel jobs<i class="fa-solid fa-arrow-right"></i></p>
            <p>PHP jobs<i class="fa-solid fa-arrow-right"></i></p>
            <p>WordPress jobs<i class="fa-solid fa-arrow-right"></i></p>
            <p>React.js jobs<i class="fa-solid fa-arrow-right"></i></p>
            <p>Angular jobs<i class="fa-solid fa-arrow-right"></i></p>
            <p>React Native jobs<i class="fa-solid fa-arrow-right"></i></p>
            <p>Python jobs<i class="fa-solid fa-arrow-right"></i></p>
        </div>
        <div>
            <p>Node.js jobs<i class="fa-solid fa-arrow-right"></i></p>
            <p>C# jobs<i class="fa-solid fa-arrow-right"></i></p>
            <p>Vue.js jobs<i class="fa-solid fa-arrow-right"></i></p>
            <p>.NET jobs<i class="fa-solid fa-arrow-right"></i></p>
            <p>Flutter jobs<i class="fa-solid fa-arrow-right"></i></p>
            <p>Symfony jobs<i class="fa-solid fa-arrow-right"></i></p>
            <p>Java jobs<i class="fa-solid fa-arrow-right"></i></p>
            <p>See all <i class="fa-solid fa-arrow-right"></i></p>
        </div>
    </div>
  )
}

export default FooterLinks