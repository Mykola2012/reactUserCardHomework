import styles from "./StatusLike.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";

class StatusLike extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLike: false,
      likesCount: 1003861,
    };
  }

  isStatusLike = (e) => {
    const { isLike, likesCount } = this.state;

    if (isLike) {
      this.setState({ isLike: false });
      this.setState({ likesCount: likesCount - 1 });
    } else {
      this.setState({ isLike: true });
      this.setState({ likesCount: likesCount + 1 });
    }
  };

  render() {
    const { likesCount } = this.state;
    const { isLike } = this.state;
    const changeColor = {
      color: isLike ? "#e7f702" : "#fff",
    };

    return (
      <div className={styles.wrapperLike}>
        <FontAwesomeIcon
          icon={faHeart}
          style={changeColor}
          className={styles.statusLike}
          onClick={this.isStatusLike}
        />
        <div className={styles.likeCountWrapper}>
          <h3 className={styles.likeCountTitle}>Likes</h3>
          <p className={styles.likeCountData}>{likesCount}</p>
        </div>
      </div>
    );
  }
}

export default StatusLike;
