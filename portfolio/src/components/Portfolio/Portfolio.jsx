import React from 'react'
import './Portfolio.css'
import fit from '../../assets/fit.png'
import food from '../../assets/food.png'
import kik from '../../assets/kik.png'
import nwa from '../../assets/nwa.png'

const data = [
  {
    id: 1,
    image: fit,
    title: 'Kikumba All Wear',
    github: 'https://github.com',
    demo: 'https://cdn.dribbble.com/userupload/4359134/file/original-0f78e992b72e7c3e3e2b12ac57cad710.jpg?compress=1&resize=640x480&vertical=top'
  },
  {
    id: 1,
    image: food,
    title: 'Kikumba All Wear',
    github: 'https://github.com',
    demo: 'https://cdn.dribbble.com/userupload/4359134/file/original-0f78e992b72e7c3e3e2b12ac57cad710.jpg?compress=1&resize=640x480&vertical=top'
  },
  {
    id: 1,
    image: kik,
    title: 'Kikumba All Wear',
    github: 'https://github.com',
    demo: 'https://cdn.dribbble.com/userupload/4359134/file/original-0f78e992b72e7c3e3e2b12ac57cad710.jpg?compress=1&resize=640x480&vertical=top'
  },
  {
    id: 1,
    image: nwa,
    title: 'Kikumba All Wear',
    github: 'https://github.com',
    demo: 'https://cdn.dribbble.com/userupload/4359134/file/original-0f78e992b72e7c3e3e2b12ac57cad710.jpg?compress=1&resize=640x480&vertical=top'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} />
                </div>

                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} target="_blank" className='btn'>Github</a>
                  <a href={demo} target="_blank" className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        } 
      </div>
    </section>
  )
}

export default Portfolio