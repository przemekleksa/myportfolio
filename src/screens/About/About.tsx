import Guy from '../../assets/images/about.jpg';
import Title from '../../components/Title/Title';
import styles from './About.module.scss';

type Props = {
  handleClick: (where: number) => void;
};

const About = ({ handleClick }: Props) => {
  return (
    <div className={styles.rootAbout} onClick={() => handleClick(3)}>
      <div className={styles.about}>
        <div className={styles.imgContainer}>
          <img src={Guy} alt="person in a tie" />
        </div>

        <div className={styles.aboutText}>
          <p className={styles.pro}>
            <p>
              Frontend Developer with a passion for creating fast, optimized,
              and user-friendly web applications. I specialize in using
              technologies like React, TypeScript, SCSS, and AWS Lambda to build
              seamless and efficient digital experiences. I am always focused on
              delivering high-quality solutions that provide value to users.
            </p>
            <p>
              I thrive in SCRUM teams, collaborating with backend developers to
              ensure seamless integration and optimize performance. I’m
              committed to writing clean, maintainable code and always looking
              for ways to improve both development processes and user
              experiences.
            </p>
            <p>
              I’m driven by learning, taking on new challenges, and delivering
              high-quality solutions. Outside of work, I stay engaged with
              technology, gaming, and other hobbies that keep my problem-solving
              skills sharp.
            </p>
          </p>
          <div className={styles.priv}>
            <p>
              I am passionate about a variety of hobbies that span different
              aspects of life. One of my favorite activities is building with
              LEGO, where I enjoy both the creativity and challenge it offers.
              I'm also fascinated by the history of video games, exploring how
              they have evolved over the years and shaped modern entertainment.
            </p>
            <p>
              Cars are another big interest of mine, especially understanding
              their engineering and design. I love the thrill of travel, whether
              it's exploring new cities or venturing into the great outdoors.
              Cycling is one of my preferred ways to stay active and discover
              new places.
            </p>
            <p>
              Lastly, I have a deep appreciation for 90's Hip Hop, which not
              only fuels my love for music but also connects me to the cultural
              history of that era. Each of these interests keeps me curious and
              constantly learning.
            </p>
          </div>
        </div>
      </div>
      <footer>
        <Title size="xl" uppercase fontWeight="w900" font="robotoCondensed">
          About me
        </Title>
      </footer>
    </div>
  );
};

export default About;
