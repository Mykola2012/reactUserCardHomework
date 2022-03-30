import styles from "./UserActivity.module.css";

function UserActivity(props) {
  const { tweets, folowing, folovers, likesCount } = props;

  return (
    <div className={styles.activityWrapper}>
      <div className={styles.activityInfoWrapper}>
        <h3 className={styles.activityTitle}>Tweets</h3>
        <p className={styles.activityData}>{tweets}</p>
      </div>

      <div className={styles.activityInfoWrapper}>
        <h3 className={styles.activityTitle}>Folowing</h3>
        <p className={styles.activityData}>{folowing}</p>
      </div>

      <div className={styles.activityInfoWrapper}>
        <h3 className={styles.activityTitle}>Folovers</h3>
        <p className={styles.activityData}>{folovers}</p>
      </div>
      <div className={styles.activityInfoWrapper}>
        <h3 className={styles.activityTitle}>Likes</h3>
        <p className={styles.activityLikes}>{likesCount}</p>
      </div>
    </div>
  );
}

export default UserActivity;
