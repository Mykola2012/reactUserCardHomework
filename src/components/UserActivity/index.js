import styles from "./UserActivity.module.css";

function UserActivity(props) {
  const { tweets, following, followers } = props;

  return (
    <div className={styles.activityWrapper}>
      <div className={styles.activityInfoWrapper}>
        <h3 className={styles.activityTitle}>Following</h3>
        <p className={styles.activityData}>{following}</p>
      </div>
      <div className={styles.activityInfoWrapper}>
        <h3 className={styles.activityTitle}>Tweets</h3>
        <p className={styles.activityData}>{tweets}</p>
      </div>
      <div className={styles.activityInfoWrapper}>
        <h3 className={styles.activityTitle}>Followers</h3>
        <p className={styles.activityData}>{followers}</p>
      </div>
    </div>
  );
}

export default UserActivity;
