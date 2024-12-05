import { useState } from 'react';
import styles from './Projects.module.scss';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from '../../components/Title/Title';
import projects from '../../data/projects.json';
import Github from '/images/icons/github-sign.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './CustomSwiperBullet.css';

const Projects = () => {
  const [project, setProject] = useState(1);
  console.log(project);

  const img = ({ name, image }: { name: string; image: string }) => {
    return (
      <img
        src={image}
        alt={name}
        style={{
          width: '100%',
          height: '50dvh',
          objectFit: 'contain',
          borderRadius: '10px',
          marginBottom: '20px',
        }}
        className={styles.slideImage}
      />
    );
  };

  return (
    <div className={styles.rootProjects}>
      <div className={styles.blockStart}>
        <div className={styles.title}>
          <Title
            size="l"
            fontBoW="black"
            fontWeight="w900"
            uppercase
            lineHeight="8rem"
          >
            Pro
          </Title>
          <Title
            size="l"
            fontBoW="black"
            fontWeight="w900"
            uppercase
            lineHeight="8rem"
          >
            je
          </Title>
          <Title
            size="l"
            fontBoW="black"
            fontWeight="w900"
            uppercase
            lineHeight="8rem"
          >
            cts
          </Title>
        </div>

        <div className={styles.stack}>
          <h3>Stack</h3>
          <p>{projects[project].stack.join(', ')}</p>
        </div>
      </div>
      <div className={styles.blockEnd}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          style={{
            maxWidth: '70dvw',
            // margin: 'auto'
          }}
          loop
          className={styles.swiper}
          onSlideChange={(swiper) => setProject(swiper.activeIndex)}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                // style={{ textAlign: 'center' }}
                className={styles.slide}
              >
                <div className={styles.projectHeader}>
                  <div className={styles.title}>
                    <Title size="xs" fontBoW="black" uppercase>
                      {project.name}
                    </Title>
                    <Title size="xxxs" fontBoW="black">
                      {project.subtitle}
                    </Title>
                  </div>
                  <div className={styles.more}>
                    {project.git && (
                      <a href={project.git}>
                        <img src={Github} alt="github link" height={32} />
                      </a>
                    )}
                    <Title size="xxxs" fontBoW="black">
                      {project.from} - {project.to}
                    </Title>
                  </div>
                </div>

                <div className={styles.imgContainer}>
                  {project.url ? (
                    <a href={`${project.url}`}>{img(project)}</a>
                  ) : (
                    img(project)
                  )}
                </div>
                <div className={styles.details}>
                  <p>{project.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
