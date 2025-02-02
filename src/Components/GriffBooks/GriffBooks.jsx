import React from 'react'
import './GriffBooks.css';
const GriffBooks = () => {
  return (
    <div>
        <section className='griftbooks-section'>
      <h1>Учебные книги и <br></br>пособия с грифом</h1>
        
      </section>
      <section className='griftbooks-section-2'>
        <div className='griftbooks-section-h1'>
        <h1>СПИСОК УЧЕБНИКОВ И УЧЕБНЫХ ПОСОБИЙ С ГРИФОМ</h1>
        </div>
        <a target='blank' href='Cписок Гриф МОиН КР Абдиев М.Ж..pdf'>
        <button>PDF</button>
        </a>
        <a target='blank' href='Cписок Гриф МОиН КР Абдиев М.Ж..pdf' download>
        <button>Скачать</button>
        </a>
      </section>
    </div>
  )
}

export default GriffBooks