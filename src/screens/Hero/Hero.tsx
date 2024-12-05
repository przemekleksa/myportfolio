import Title from '../../components/Title/Title';
import styles from './Hero.module.scss';

type Props = {
  handleClick: (where: number) => void;
};

const Hero = ({ handleClick }: Props) => {
  return (
    <div className={styles.root} onClick={() => handleClick(2)}>
      <Title size="xxxl" font="robotoCondensed" fontWeight="w900">
        RESUME
      </Title>
      <Title size="s" font="robotoCondensed" uppercase>
        Przemysław Leksa
      </Title>
    </div>
  );
};

export default Hero;
