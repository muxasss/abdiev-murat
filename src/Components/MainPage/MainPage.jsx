import React, { useState } from 'react';
import './Main.css';
import { LuGoal } from "react-icons/lu";
import { GiTeacher, GiProgression } from "react-icons/gi";

const MainPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div>
      <section className='section1'>
        {/* <img src='muratphoto1.jpg' alt="Главное изображение" /> */}
      </section>

      <section className='section2'>
        <div className='all'>
          <div>
            <LuGoal className='icon' />
            <h1>Экономист с 25 летним опытом</h1>
            <p>Я квалифицированный преподаватель, <br /> передающий знания и опыт.</p>
          </div>
          <div>
            <GiTeacher className='icon' />
            <h1>Современный метод обучения</h1>
            <p>Современное обучение сочетает <br /> традиции и инновации, вовлекая <br /> студентов в процесс создания знаний.</p>
          </div>
          <div>
            <GiProgression className='icon' />
            <h1>Экономист высокого класса</h1>
            <p>Мой вклад в экономику это <br /> использование знаний и <br /> инноваций для создания <br /> стабильного и устойчивого <br /> роста.</p>
          </div>
        </div>
      </section>

      <section className='section3'>
        <div className='all3'>
          <div>
            <img src='muratphoto4.jpg' alt="Дополнительное изображение" />
          </div>
          <div>
            <p>Каждый шаг к процветанию нашей страны — это <br /> шаг к будущему, где экономика Кыргызстана <br /> будет не только стабильной, но и динамично <br /> развивающейся. К 2030 году мы стремимся стать <br /> нацией с высококвалифицированной рабочей <br /> силой, успешными предприятиями и сильными <br /> инновациями.</p>
            <p>Основой этого прогресса являются люди — ученые, <br /> преподаватели, инвесторы, предприниматели и <br /> рабочие, которые формируют знания, развивают <br /> бизнес и создают прочный фундамент для <br /> конкурентоспособности на мировой арене. <br /> Наши усилия направлены на развитие человеческого <br /> потенциала, что является главным ресурсом для <br /> достижения устойчивого роста и благосостояния.</p>
          </div>
        </div>
      </section>

      <section className='video-section'>
        <div className='video-container'>
          {isPlaying ? (
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dkk-MVW13TE?si=_uWfS6vXrSFsAAdR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          ) : (
            <div className='video-preview' onClick={handlePlay}>
              <p className='video-text'>Видеоролик про университет</p>
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/play-button-circled--v1.png"
                alt="Play"
                className='play-icon'
              />
            </div>
          )}
        </div>
      </section>
      
    </div>
  );
};

export default MainPage;