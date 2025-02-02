import React from 'react'
import './NauchTrud.css';
const NauchTrud = () => {
  return (
    <div>
       <section className='nauchtrud-section'>
      <h1>Научные статьи</h1>
        
      </section>
      <section className='nauchtrud-section-2'>
        <div className='Awards-section-h1'>
        <h1>СПИСОК НАУЧНЫХ СТАТЬЕЙ</h1>
        </div>
        <a target='blank' href='Список науч.трудов Абдиев М..pdf'>
        <button>PDF</button>
        </a>
        <a target='blank' href='Список науч.трудов Абдиев М..pdf' download>
        <button>Скачать</button>
        </a>
      </section>
    </div>
  )
}

export default NauchTrud