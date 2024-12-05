import Girl from '../../assets/images/exp.jpg';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import Title from '../../components/Title/Title';
import experience from '../../data/experience.json';
import styles from './Experience.module.scss';

type Props = {
  handleClick: (where: number) => void;
};

const Experience = ({ handleClick }: Props) => {
  return (
    <div className={styles.rootExperience} onClick={() => handleClick(4)}>
      <header>
        <Title uppercase fontBoW="black" size="l" fontWeight="w900">
          Experience
        </Title>
        <div className={styles.summary}>
          <Title uppercase fontBoW="black" size="xs">
            Summary
          </Title>
          Experienced frontend developer skilled in React, Redux, TypeScript,
          and SCSS. Proficient in building user-friendly applications,
          optimizing performance, and delivering innovative solutions.
          Successfully launched multiple applications, including payment and
          meal plan platforms. A collaborative professional focused on creating
          impactful, user-centered results.
        </div>
      </header>
      <div className={styles.experience}>
        <div className={styles.imgContainer}>
          <img src={Girl} alt="" />
        </div>
        <div className={styles.expCards}>
          {experience.map((exp, index) => {
            return <ExperienceCard exp={exp} key={exp.title} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
