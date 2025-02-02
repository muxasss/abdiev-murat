import React from 'react'
import './Organization.css';
const Organization = () => {
  return (
    <div>
        <section className='organization-section1'>

        </section>
        <section className='organization-section2'>
          <div className='organization-section-h1'>

            <h1>ЧЛЕН РЕГИОНАЛЬНОЙ АКАДЕМИИ МЕНЕДЖМЕНТА.</h1>
          </div>
            <h2>Решением от 31 мая 2017 года (протокол №5) избран корреспондентом Региональной академии менеджмента.</h2>
            <a href='management.pdf'>
            <button>PDF</button>
            </a>
            <a href='management.pdf' download="filename.pdf">
            <button>Скачать</button>
            </a>
        </section>
    </div>
  )
}

export default Organization