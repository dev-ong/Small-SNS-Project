import styles from "../styles/Home.module.scss";

const SignUp = () => {
  return (
    <div className={styles.signup_container}>
      <p className={styles.signup_title}>JU-A</p>
      <p className={styles.signup_description}>
        친구들의 사진과 동영상을 보려면 <br></br> 가입하세요
      </p>
      <div className={styles.signup_input_container}>
        <input
          className={styles.signup_input}
          type="text"
          placeholder="아이디"
        ></input>
      </div>
    </div>
  );
};

export default SignUp;
