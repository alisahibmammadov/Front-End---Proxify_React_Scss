import React, { useState } from 'react'
import '../Faq/Faq.scss'

function Faq() {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)
  return (
    <div style={{background:'#f0f1fd'}}>
        <div className='faq container'>
        <h1>Frequently Asked Questions</h1>
        <div className='questions'>
            <div className='left'>
                <div className='left-box'>
                    <nav><span onClick={()=>setShow(!show)}>What is Proxify?</span><i onClick={()=>setShow(!show)} class="fa-solid fa-plus"></i></nav>
                    {show ? <p>Proxify is a Swedish IT company with a global reach; a community that comprises developers and designers at the very top of their field. We assist in helping startups and established companies around the world to work efficiently and effectively with talented developers and designers on a remote basis. And we’re looking for React.js developers to join us now!</p> :null}
                </div>
                <div className='left-box'>
                    <nav><span onClick={()=>setShow2(!show2)}>Is it the same as having a full-time job?</span><i onClick={()=>setShow2(!show2)} class="fa-solid fa-plus"></i></nav>
                    {show2 ? <p>Our hope is that you won’t want to, nor need to, look for other work. If you’re a senior React.js developer, at the top of your field, we want you to join for the long-term and we want you to work full-time with us and our clients. However, there are no guarantees in the way one considers with fixed, traditional employment. But we’re sure that you share our view that remote work is the way forward, particularly if you want to have a say in how you work, where you work from, as well as the type of projects you work on.</p>:null}
                </div>
                <div className='left-box'>
                    <nav><span onClick={()=>setShow3(!show3)}>How do I get paid?</span><i onClick={()=>setShow3(!show3)} class="fa-solid fa-plus"></i></nav>
                    {show3 ? <p>It’s simple, you send an invoice each month for the previous month’s work and we pay this promptly, either via SWIFT (international bank transfer) or other payment services, such as Revolut, Stripe, PayPal etc. Assuming no extenuating circumstances, you will always get paid on time. We do not rely on payment from our clients to pay our members.</p>:null}
                </div>
            </div>

            <div className='right'>
            <div className='right-box'>
                    <nav><span onClick={()=>setShow4(!show4)}>What happens after I get invited to the Proxify network?</span><i onClick={()=>setShow4(!show4)} class="fa-solid fa-plus"></i></nav>
                    {show4 ? <p>If we assume that you stand out in our comprehensive vetting process and you’re invited to join the network, then what typically happens after is that you get matched to a React.js project. This generally happens within 2 weeks, sometimes even quicker. Upon joining us, you’ll be given access to your own account and login where you’ll be able to see current opportunities relating to React.js and more, and apply to them directly yourself.</p>:null}
                </div>
                <div className='right-box'>
                    <nav><span onClick={()=>setShow5(!show5)}>What if there are no React.js projects I can be matched with immediately?</span><i onClick={()=>setShow5(!show5)} class="fa-solid fa-plus"></i></nav>
                    {show5 ? <p>With such a high number of candidates and talented React.js developers joining the network, it’s natural that this can happen. However, an increasing flow of demand for React.js developers, in a range of fields and technologies, makes us confident that we’ll be able to place you on a React.js project in a very short period of time.</p>:null}
                </div>
                <div className='right-box'>
                    <nav><span onClick={()=>setShow6(!show6)}>What if I don't like the React.js project that I start working on?</span><i onClick={()=>setShow6(!show6)} class="fa-solid fa-plus"></i></nav>
                    {show6 ? <p>As you’ll see in the application form that we ask you to complete, we care about your desire when it comes to the type of projects you’ll work on, whether that is using React.js exclusively or combining it with other areas of expertise. We’re well aware of the costs that come with a “wrong match” so it is our mission to make sure you’re placed on the right project from the start. If not? Then we’re committed to finding you another project to hop on to, of course.</p>:null}
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Faq