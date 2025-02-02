import React from 'react'
import './LessonBooks.css';
const LessonBooks = () => {
  return (
    <div>
        <section className='lessonbooks-section'>

        
      </section>
      <section className='lessonbooks-section-2'>
        <div className='lessonbooks-section-h1'>
        <h1>СПИСОК УЧЕБНО-МЕТОДИЧЕСКИХ ТРУДОВ</h1>
        </div>
        <a target='blank' href='Список  метод.трудов Абдиев М.Ж..pdf'>
        <button>PDF</button>
        </a>
        <a target='blank' href='Список  метод.трудов Абдиев М.Ж..pdf' download>
        <button>Скачать</button>
        </a>
      </section>   
    </div>
  )
}

export default LessonBooks