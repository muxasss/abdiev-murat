import React, { useEffect } from 'react';
import './Zvanie.css'; // Импортируем файл с стилями

const Zvanie = () => {
  useEffect(() => {
    // Добавляем имя в body
    document.body.classList.add('zvanie-body');

    // Удаляем класс при размонтировании компонента
    return () => {
      document.body.classList.remove('zvanie-body');
    };
  }, []);

  return (
      <div className="zvanie-page">
        <section className='start'>

        <h1 className='h1-s'>Научная степень и звание</h1>
        </section>
        <section className='zvanie-section2'>
            <div className='h1-2'>

            <h1 className='h1-1'>СПИСОК НАУЧНЫХ СТЕПЕНЕЙ</h1>
            </div>
            <h2>Специализируется на стратегическом управлении и экономическом анализе. Автор научных публикаций и участник международных конференций.</h2>
            <h2>Доцент по экономике</h2>
            <a href='2025-01-29-00-05.pdf'>
            <button>PDF</button>
            </a>
            <a href='2025-01-29-00-05.pdf' download="filename.pdf">
            <button>Скачать</button>
            </a>



            <h2>Изучает вопросы устойчивого развития экономики и управления ресурсами. Автор научных статей и участник профильных конференций.</h2>
            <h2>Кандидат экономических наук</h2>
            <a href='2025-01-29-00-22.pdf'>
            <button>PDF</button>
            </a>
            <a href='2025-01-29-00-22.pdf' download="filename.pdf">
            <button>Скачать</button>
            </a>


            <h2>Эксперт в области макроэкономики и стратегического планирования. Авторитетный исследователь и автор монографий, руководитель крупных научных проектов.</h2>
            <h2>Доктор экономических наук</h2>
            <a href='Диплом доктора наук.pdf'>
            <button>PDF</button>
            </a>
            <a href='Диплом доктора наук.pdf' download="filename.pdf">
            <button>Скачать</button>
            </a>
        </section>
      {/* <div className="zvanie-container">
        <div className="card">
          <img src="diplom-kandidat.jpg" alt="Кандидат наук" />
          <h3>Кандидат наук</h3>
        </div>
        <div className="card">
          <img src="diplom-doktor.jpg" alt="Доктор наук" />
          <h3>Доктор наук</h3>
        </div>
        <div className="card">
          <img src="diplom-docent.jpg" alt="Доцент" />
          <h3>Доцент</h3>
        </div>
      </div> */}
    </div>
  );
}

export default Zvanie;
