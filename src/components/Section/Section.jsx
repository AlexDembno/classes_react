import PropTypes from 'prop-types';
import styles from './Section.module.css';

function Section({ title, children }) {
  return (
    <section className={title ? styles.superSection : styles.baseSection}>
      {title && <h2 className={styles.titleStyle}>{title}</h2>}
      {children}
    </section>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
