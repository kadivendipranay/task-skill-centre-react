
import React, { useState } from "react";

export default function Auth({ onLogin, onClose }) {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const users = JSON.parse(
      localStorage.getItem("task_demo_users") || "[]"
    );

    const normalizedEmail = email.trim().toLowerCase();

    if (mode === "register") {
      if (password.length < 6) {
        setMessage("Password must contain at least 6 characters.");
        return;
      }

      if (password !== confirmPassword) {
        setMessage("Passwords do not match.");
        return;
      }

      if (users.some((user) => user.email === normalizedEmail)) {
        setMessage("Account already exists. Please log in.");
        return;
      }

      const newUser = {
        name: name.trim(),
        phone: phone.trim(),
        email: normalizedEmail,
        password
      };

      // Demo only: do not store real passwords in localStorage.
      localStorage.setItem(
        "task_demo_users",
        JSON.stringify([...users, newUser])
      );

      onLogin({
        name: newUser.name,
        email: newUser.email
      });

      onClose();
      return;
    }

    const existingUser = users.find(
      (user) =>
        user.email === normalizedEmail &&
        user.password === password
    );

    if (!existingUser) {
      setMessage("Incorrect email or password. Please try again.");
      return;
    }

    onLogin({
      name: existingUser.name,
      email: existingUser.email
    });

    onClose();
  }

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <button
          className="auth-close"
          onClick={onClose}
          type="button"
          aria-label="Close login"
        >
          ×
        </button>

        <div className="auth-icon">🎓</div>

        <h2>
          {mode === "login"
            ? "Welcome Back!"
            : "Create Your Account"}
        </h2>

        <p className="auth-subtitle">
          TASK Skill Centre
        </p>

        <div className="auth-tabs">
          <button
            type="button"
            className={mode === "login" ? "active" : ""}
            onClick={() => {
              setMode("login");
              setMessage("");
            }}
          >
            Login
          </button>

          <button
            type="button"
            className={mode === "register" ? "active" : ""}
            onClick={() => {
              setMode("register");
              setMessage("");
            }}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {mode === "register" && (
            <>
              <label htmlFor="auth-name">Full Name</label>
              <input
                id="auth-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
              />

              <label htmlFor="auth-phone">Phone Number</label>
              <input
                id="auth-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                pattern="[0-9+\-\s]{10,15}"
                required
              />
            </>
          )}

          <label htmlFor="auth-email">Email Address</label>
          <input
            id="auth-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="auth-password">Password</label>
          <input
            id="auth-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
            minLength={6}
            required
          />

          {mode === "register" && (
            <>
              <label htmlFor="auth-confirm">
                Confirm Password
              </label>
              <input
                id="auth-confirm"
                type="password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                placeholder="Re-enter your password"
                required
              />
            </>
          )}

          {message && (
            <p className="auth-message" role="alert">
              {message}
            </p>
          )}

          <button
            className="button button-red auth-submit"
            type="submit"
          >
            {mode === "login"
              ? "Login"
              : "Create Account"}
          </button>
        </form>

        <p className="auth-switch">
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            type="button"
            onClick={() => {
              setMode(mode === "login" ? "register" : "login");
              setMessage("");
            }}
          >
            {mode === "login" ? " Register" : " Login"}
          </button>
        </p>

        <p className="auth-warning">
          Demo authentication only. Do not use real passwords.
          Connect a secure backend before publishing.
        </p>
      </div>
    </div>
  );
}
