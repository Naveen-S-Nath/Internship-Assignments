import React, { useState } from "react";

function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess("Signup successful!");
    } else {
      setSuccess("");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          width: "350px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Signup</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", marginBottom: "5px" }}
          />
          <p style={{ color: "red" }}>{errors.name}</p>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", marginBottom: "5px" }}
          />
          <p style={{ color: "red" }}>{errors.email}</p>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", marginBottom: "5px" }}
          />
          <p style={{ color: "red" }}>{errors.password}</p>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", marginBottom: "5px" }}
          />
          <p style={{ color: "red" }}>{errors.confirmPassword}</p>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              background: "#ff758c",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Signup
          </button>
        </form>

        {success && (
          <p style={{ color: "green", marginTop: "10px" }}>{success}</p>
        )}
      </div>
    </div>
  );
}

export default SignupForm;