import React from 'react'
import './Dissertations.css'
const Dissertations = () => {
  return (
    <div>
       <section className='dissertations-section'>
      <h1>Руководство диссертацией</h1>
        
      </section>
      <section className='dissertations-section-2'>
        <div className='dissertations-section-h1'>
        <h1>НАУЧНОЕ РУКОВОДСТВО</h1>
        </div>
        <a target='blank' href='Научное руководство.pdf'>
        <button>PDF</button>
        </a>
        <a target='blank' href='Научное руководство.pdf' download>
        <button>Скачать</button>
        </a>
      </section>    
    </div>
  )
}

export default Dissertations