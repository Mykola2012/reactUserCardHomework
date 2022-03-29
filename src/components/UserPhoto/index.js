import styles from "./UserPhoto.module.css";

function UserPhoto(props) {
  const { src, alt, title } = props;

  return <img src={src} alt={alt} className={styles.userPhoto} title={title} />;
}

export default UserPhoto;
