import styles from "./StatusLike.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function StatusLike(props) {
  return (
    <div className={styles.wrapperLike}>
      <FontAwesomeIcon icon={faHeart} className={styles.statusLike} />
    </div>
  );
}

export default StatusLike;
