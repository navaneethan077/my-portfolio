import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/Institute-web.jpeg'
import IMG2 from '../../assets/Bodimate.png'
import IMG3 from '../../assets/Movie-api.png'
import IMG4 from '../../assets/My_Portfolio.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Institute-web</h3>
            <small className='text-light'>MongoDB  | Express | React | Node. js.</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/navaneethan077/Institute-web" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://www.youtube.com/watch?v=qBvAAoWg6wE" target="_blank" rel='noreferrer' className='btn'>Project Demo Link</a>  
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Bodimate </h3>
            <small className='text-light'>MongoDB  | Express | React | Node. js.</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/navaneethan077/Bodimate" target="_blank" rel='noreferrer' className='btn'>Github</a>  
              <a href="https://bodimate.vercel.app/" target="_blank" rel='noreferrer' className='btn'>Project Demo Link</a>  
             

            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
            <a href="https://github.com/navaneethan077/my-portfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            <a href="https://navaneethan05.netlify.app/" target="_blank" rel='noreferrer' className='btn'>Project Demo Link</a>
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>Movie-api</h3>
            <small className='text-light'>MongoDB  | Express | React | Node. js.</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/navaneethan077/movie-api" target="_blank" rel='noreferrer' className='btn'>Github</a>
              {/* <a href="" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>   */}
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects