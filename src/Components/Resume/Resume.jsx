import React from 'react'
import './Resume.css';
const Resume = () => {
  return (
    <div>
      <section className='resume-section'>
      <h1>Обо мне</h1>
        
      </section>
      
      <section className='resume-section-2'>
        <div className='resume-section-h1'>
        <h1>РЕЗЮМЕ АБДИЕВ МУРАТ</h1>
        </div>
        <a target='blank' href='Резюме Абдиев М. 17.01.2025.pdf'>
        <button>PDF</button>
        </a>
        <a target='blank' href='Резюме Абдиев М. 17.01.2025.pdf' download>
        <button>Скачать</button>
        </a>
      </section>
    </div>
  )
}

export default Resume