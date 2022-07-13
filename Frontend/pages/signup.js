import styles from "../styles/Home.module.scss";
import { useEffect, useState } from "react";

const SignUp = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [checkNull, setCheckNull] = useState(false);

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (id !== "" && name !== "" && password !== "") {
      setCheckNull(true);
    } else {
      setCheckNull(false);
    }
  }, [id, name, password]);

  return (
    <div className={styles.signup_container}>
      <p className={styles.signup_title}>JU-A</p>
      <p className={styles.signup_description}>
        친구들의 사진과 동영상을 보려면 <br></br> 가입하세요
      </p>
      <main className={styles.signup_main}>
        <div className={styles.signup_input_container}>
          <input
            className={styles.signup_input}
            type="text"
            onChange={onChangeId}
            placeholder="아이디"
          ></input>
        </div>
        <div className={styles.signup_input_container}>
          <input
            className={styles.signup_input}
            type="text"
            value={name}
            onChange={onChangeName}
            placeholder="사용자 이름"
          ></input>
        </div>
        <div className={styles.signup_input_container}>
          <input
            className={styles.signup_input}
            type="text"
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호"
          ></input>
        </div>
        {checkNull ? (
          <button className={styles.signup_button_fill}>가입</button>
        ) : (
          <button className={styles.signup_button_null}>가입</button>
        )}
        <p>
          계정이 있으신가요?{" "}
          <a href={"/login"} className={styles.signup_a}>
            로그인
          </a>
        </p>
      </main>
    </div>
  );
};

export default SignUp;
