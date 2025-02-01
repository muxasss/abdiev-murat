import React from 'react'
import './Monograftion.css';

const Monograftion = () => {
  return (
    <div>
         <section className='monograftion-section'>
      <h1>Монографии</h1>
        
      </section>
      <section className='monograftion-section-2'>
        <div className='monograftion-section-h1'>
        <h1>СПИСОК МОНОГРАФИЙ АБДИЕВ МУРАТ</h1>
        </div>
        <a target='blank' href='Список монографий Абдиев М.Ж..pdf'>
        <button>PDF</button>
        </a>
        <a target='blank' href='Список монографий Абдиев М.Ж..pdf' download>
        <button>Скачать</button>
        </a>
      </section>    
    </div>
  )
}

export default Monograftion