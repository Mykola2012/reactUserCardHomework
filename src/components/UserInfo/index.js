import styles from "./UserInfo.module.css";

function UserInfo(props) {
  const { firstName, lastName, userNickname, linkProfile } = props;

  return (
    <div className={styles.userInfoWrapper}>
      <h2 className={styles.userName}>
        {firstName} {lastName}
      </h2>
      <a href={linkProfile} className={styles.userNickname}>
        @{userNickname}
      </a>
    </div>
  );
}

export default UserInfo;
