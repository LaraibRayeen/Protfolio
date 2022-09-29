import React from 'react'
import profile from '../Image/profile.png'

const About = () => {
  return (
    <section id="about" className="about_wap m-5 p-5">
        <div className='comntainer'>
            <div className='row justify-content-between align-item-center'>
                <div className='col-lg-5 md-4 mb-lg-0'>
                    <img src={profile} className="img-fluid rounded-3" alt='about-us'></img>
                    
                </div>

            </div>

        </div>

    </section>
  )
}

export default About