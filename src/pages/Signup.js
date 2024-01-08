import React from "react";
const Login = () => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <button className={styles.closeBtn} onClick={onCLose}></button>
          <div>로그인하세요.</div>
        </div>
        <form onSubmit={onSubmit}>
          <div className={styles.modalBody}>
            <div className={styles.inputDiv}>
              <label className={styles.inputLabel} htmlFor="id">
                아이디
              </label>
              <input
                id="id"
                className={styles.input}
                value={id}
                onChange={handleChangeId}
                type="text"
                placeholder=""
              />
            </div>
            <div className={styles.inputDiv}>
              <label className={styles.inputLabel} htmlFor="password">
                비밀번호
              </label>
              <input
                id="password"
                className={styles.input}
                value={password}
                onChange={handleChangePassword}
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div className={styles.message}>{message}</div>
          <div className={styles.modalFooter}>
            <button className={styles.actionBtn} disabled={!id && !password}>
              로그인하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
