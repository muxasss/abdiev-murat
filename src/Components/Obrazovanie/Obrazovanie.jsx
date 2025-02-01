import React from 'react';
import './Obrazovanie.css';
const Obrazovanie = () => {

  return (
    <div>
       <section className='obrazovanie-section'>
      <h1>Образование</h1>
        
      </section>
      <section className='obrazovanie-section-2'>
        <div className='obrazovanie-section-h1'>
        <h1>ОБРАЗОВАНИЕ АБДИЕВ МУРАТ</h1>
        </div>
        <h2>Диплом бакалавра по<br></br> специальности 'Экономика'</h2>
        <a target='blank' href='Диплом бакалавра (2).pdf'>
        <button>PDF</button>
        </a>
        <a target='blank' href='Диплом бакалавра (2).pdf' download>
        <button>Скачать</button>
        </a>
        <h2>Диплом по специальности<br></br> "Бухгалтерский учет и аудит"</h2>
        <a target='blank' href='Диплом бухгалтерский учет.pdf'>
        <button>PDF</button>
        </a>
        <a target='blank' href='Диплом бухгалтерский учет.pdf' download>
        <button>Скачать</button>
        </a>
      </section>
    </div>
  )
}

export default Obrazovanie