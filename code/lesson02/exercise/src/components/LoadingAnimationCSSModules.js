import styles from './LoadingAnimation.module.css';

const LoadingAnimationCSSModules = () => {
  return (
    <div className='component'>
      <h2>LoadingAnimationCSSModules</h2>
      <span>Styles imported via CSS Modules Stylesheet</span>
      <br />
      <br />
      <br />
      <div className={styles.box}>
        <div className={styles.bouncing_balls_loadingAnimation}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimationCSSModules;
