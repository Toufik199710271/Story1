import React from 'react';

function Login() {
  return (
    <div>
      <h2>تسجيل الدخول</h2>
      <form>
        <label>البريد الإلكتروني:</label>
        <input type="email" required />
        <label>كلمة المرور:</label>
        <input type="password" required />
        <button type="submit">دخول</button>
      </form>
    </div>
  );
}

export default Login;
