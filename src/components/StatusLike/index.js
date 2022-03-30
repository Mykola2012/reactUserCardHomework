import styles from "./StatusLike.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function StatusLike(props) {
  const { isLike } = props;

  const isStylesLike = isLike ? "trueLike" : "falseLike";

  return (
    <div className={styles.wrapperLike}>
      <FontAwesomeIcon icon={faHeart} className={styles.falseLike} />
    </div>
  );
}

export default StatusLike;
