import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src=""
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="phone" placeholder="Phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to the System? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}