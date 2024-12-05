import Title from '../Title/Title';
import styles from './ExperienceCard.module.scss';

export type Experience = {
  from: string;
  to: string;
  company: string;
  title: string;
  exp: string;
};

type Props = {
  exp: Experience;
  index: number;
};

const ExperienceCard = ({ exp, index }: Props) => {
  console.log(exp);
  return (
    <div className={styles.expCard}>
      <div className={styles.header}>
        <div className={styles.details}>
          <div className={styles.dates}>
            <Title size="xxxs" fontBoW="black">
              {exp.from}
            </Title>
            <span>-</span>
            <Title size="xxxs" fontBoW="black">
              {exp.to}
            </Title>
          </div>
          <div className={styles.where}>
            <Title size="xxs" fontBoW="black">
              {exp.company}
            </Title>
          </div>
        </div>
        <div className={styles.number}>{index + 1}</div>
      </div>
      <div className={styles.title}>
        <Title size="xxs" fontBoW="black">
          {exp.title}
        </Title>
      </div>
      <div className={styles.experienceDetails}>{exp.exp}</div>
    </div>
  );
};

export default ExperienceCard;
