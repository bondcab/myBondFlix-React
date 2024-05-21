// import { API_URL } from "../../../config";
import styles from "./GoogleLinkButton.module.css";

function GoogleLinkButton() {
  return (
    <a
      // href={`${API_URL}/auth/google`}
      className={styles.siteLink}
      data-testid="google-login-link"
    >
      <div className={styles.login}>
        <img
          src="/images/googleIcon.png"
          alt="google icon"
          className={styles.googleIcon}
        />
        <div className={styles.loginTextContainer}>
          <h3 className={styles.loginText}>Login with Google</h3>
        </div>
      </div>
    </a>
  );
}

export default GoogleLinkButton;
