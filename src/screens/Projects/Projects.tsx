import { useState } from 'react';
import styles from './Projects.module.scss';

const Projects = () => {
  const [project, setProject] = useState(1);

  return (
    <div className={styles.rootProjects}>
      <div className={styles.blockStart}>123</div>
      <div className={styles.blockEnd}>13</div>
    </div>
  );
};

export default Projects;
