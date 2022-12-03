import styles from './LoadingAnimation.module.css';

const LoadingAnimationCSSModules = () => {

  let codeSnippet = `<div className={styles.component}>`

  return (
    <div className={styles.component}>
      <h2>LoadingAnimationCSSModules</h2>
      <div>Styles imported via CSS Modules Stylesheet</div>
      <div>CSS classes can be named the same but are applied only to specific component.</div>
      <pre>import styles from './LoadingAnimation.module.css';</pre>
      <pre>{codeSnippet}</pre>
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
