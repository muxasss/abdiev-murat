import React from 'react'
import './Tranings.css';
const Tranings = () => {
  return (
    <div>
         <section className='trainings-section'>
      <h1>Проведение гостевых семирнаров и лекций</h1>
        
      </section>
      <section className='trainings-section-2'>
        <div className='trainings-section-h1'>
        <h1>ГОСТЕВЫЕ ЛЕКЦИИ, СЕМИНАРЫ</h1>
        </div>
        <a target='blank' href='Гостевые лекции, семинары.pdf'>
        <button>PDF</button>
        </a>
        <a target='blank' href='Гостевые лекции, семинары.pdf' download>
        <button>Скачать</button>
        </a>
      </section>    
    </div>
  )
}

export default Tranings