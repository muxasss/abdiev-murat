import React from 'react'
import './Scopus.css';

const Scopus = () => {
  return (
    <div>
         <section className='scopus-section'>
      <h1>Научные статьи Scopus</h1>
        
      </section>
      <section className='nauchtrud-section-2'>
        <div className='Awards-section-h1'>
        <h1>СПИСОК НАУЧНЫХ ТРУДОВ "SCOPUS"</h1>
        </div>
        <a target='blank' href='Список_науч_трудов_СКОПУС_Абдиев_М_.pdf'>
        <button>PDF</button>
        </a>
        <a target='blank' href='Список_науч_трудов_СКОПУС_Абдиев_М_.pdf' download>
        <button>Скачать</button>
        </a>
      </section>
    </div>
  )
}

export default Scopus