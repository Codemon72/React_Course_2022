import styles from './styles/StylingWithCSSModules.module.css';

const StylingWithCSSModules = () => {
  let codeSnippet = `<div className={styles.component}>`;

  return (
    <div className={styles.component}>
      <h2>StylingWithCSSModules</h2>
      <div>Styles imported via CSS Modules Stylesheet</div>
      <ul>
        <li>looks like regular CSS</li>
        <li>can be scoped to individual component (no name collisions)</li>
        <li>can reduce bundle size</li>
      </ul>
      <pre>
        import styles from './LoadingAnimation.module.css';
        <br />
        <br />
        ... <br />
        <br />
        {codeSnippet}
      </pre>
      <br />
      <button>Button Example With Style Scoped To This Component</button>
      <br />
      <input
        type='text'
        placeholder='Input Example with style scoped to this component'
      />
    </div>
  );
};

export default StylingWithCSSModules;
