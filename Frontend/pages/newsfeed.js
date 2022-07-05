import styles from "../styles/Home.module.scss";
import Image from "next/image";
import homeImg from "../public/img/menu_home.png"
import profileImg from "../public/img/menu_profile.png"

const NewsFeed = () => {
  return (

    <footer className={styles.footer_button}>
      <div
        className={styles.footer_button_left}
      >
        <button className={styles.button_default}>
          
          {/* <div className={styles.circle}> */}
            <Image
              className={styles.circle_img}
              src={homeImg}
              width={35}
              height={35} />Home
          {/* </div> */}

        </button>
      </div>
      <div
        className={styles.footer_button_right}
      >
        <button className={styles.button_default}>
          {/* <div className={styles.circle}> */}
            <Image
              className={styles.circle_img}
              src={profileImg}
              width={35}
              height={35} />MyPage
          {/* </div> */}

        </button>
      </div>
    </footer>
  );
};

export default NewsFeed;
