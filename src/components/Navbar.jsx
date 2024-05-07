import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='Navbar'>

        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>

        <div className="links">
          <ul>
            <li href="#" >MENU</li>
            <li href="#" >LOCATION</li>
            <li href="#" >ABOUT</li>
            <li href="#" >CONTACT</li>
          </ul>
        </div>

        <button className='button'>Login</button>

      </nav>

      <div className="hero">
        <div className="content">

          <div className="ucontent">
            YOUR FEET DESERVE THE BEST
          </div>

          <div className="mcontent">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          </div>

          <div className="but">
            <button className='shop'>Shop Now</button>
            <button className='cate'>Category</button>
          </div>


          <div className="bcontent">
            Also Available On
            <div className="img">
              <img src="/images/flipkart.png" alt="" />
              <img src="/images/amazon.png" alt="" />
            </div>
          </div>
          <div className="shoe">
          <img src="/images/shoe_image.png" alt="" />
        </div>
        </div>
        
      </div>

    </>
  )
}

export default Navbar