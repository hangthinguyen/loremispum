import styles from "./ParagraphHolder.module.scss";

const ParagraphHolder = ({ input }) => {
  return (
    <div className={styles.paragraphHolder}>
      <div> {input}</div>
    </div>
  );
};

export default ParagraphHolder;
