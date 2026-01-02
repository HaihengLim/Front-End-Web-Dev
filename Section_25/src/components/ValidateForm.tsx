import { useState } from "react";

/* =======================
  Types
======================= */

type User = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type Errors = Partial<Record<keyof User, string>>;

type InputProps = {
  id: keyof User;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
};

/* =======================
  Validation
======================= */

function validate(user: User): Errors {
  const errors: Errors = {};

  if (!user.name.trim()) {
    errors.name = "User name is required";
  }

  if (!user.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {
    errors.email = "Invalid email format";
  }

  if (!user.password.trim()) {
    errors.password = "Password is required";
  } else if (user.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!user.confirmPassword.trim()) {
    errors.confirmPassword = "Please confirm your password";
  } else if (user.password !== user.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
}

/* =======================
  Reusable Input Component
======================= */

function InputField({
  id,
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
}: InputProps) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`form-control ${error ? "is-invalid" : ""}`}
        aria-describedby={errorId}
      />

      {error && (
        <div id={errorId} className="invalid-feedback">
          {error}
        </div>
      )}
    </div>
  );
}

/* =======================
  Main Form Component
======================= */

export default function ValidateForm() {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [touched, setTouched] = useState<Record<keyof User, boolean>>({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const errors = validate(user);

  const visibleErrors: Errors = Object.fromEntries(
    Object.entries(errors).filter(([key]) => touched[key as keyof User])
  );

  /* ---------- Handlers ---------- */

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser((u) => ({ ...u, [name]: value }));
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      password: true,
      confirmPassword: true,
    });

    if (Object.keys(errors).length > 0) return;

    alert(
      `Registered successfully!\n\nName: ${user.name}\nEmail: ${user.email}`
    );

    setUser({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setTouched({
      name: false,
      email: false,
      password: false,
      confirmPassword: false,
    });
  }

  /* ---------- Render ---------- */

  return (
    <form className="w-50 mx-auto" onSubmit={handleSubmit} noValidate>
      <h2 className="text-center mb-4">Sign Up</h2>

      <InputField
        id="name"
        label="Name"
        value={user.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={visibleErrors.name}
      />

      <InputField
        id="email"
        label="Email"
        value={user.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={visibleErrors.email}
      />

      <InputField
        id="password"
        label="Password"
        type="password"
        value={user.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={visibleErrors.password}
      />

      <InputField
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        value={user.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={visibleErrors.confirmPassword}
      />

      <button className="btn btn-primary w-100 mt-3">Register</button>
    </form>
  );
}
