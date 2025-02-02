import React from 'react';
import './AvtorSvid.css';

const AvtorSvid = () => {
    
  return (
    <div>
      <section className='avtorsvid-section'>
      <h1>Авторские свидетельства</h1>
        
      </section>
      <section className='avtorsvid-section-2'>
        <div className='avtorsvid-section-h1'>
        <h1>СПИСОК АВТОРСКИХ СВИДЕТЕЛЬСТВ</h1>
        </div>
        <a target='blank' href='Список автор.свид. Абдиев М.Ж..pdf'>
        <button>PDF</button>
        </a>
        <a target='blank' href='Список автор.свид. Абдиев М.Ж..pdf' download>
        <button>Скачать</button>
        </a>
      </section>
    </div>
  );
};

export default AvtorSvid;
