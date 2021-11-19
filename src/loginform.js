function LoginForm() {
  return (
    <div id="LoginForm">
      <h3>Log In</h3>
      <form>
        <label for="username">Username:</label>
        <input name="username" type="text" placeholder="Username" />
        <br />
        <br />
        <label for="password">Password:</label>
        <input name="password" type="text" placeholder="Password" />
      </form>
    </div>
  );
}

export default LoginForm;
