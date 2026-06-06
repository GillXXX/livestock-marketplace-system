import { useState } from "react";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  Tractor,
  ArrowRight,
} from "lucide-react";

import { useNavigate, Link } from "react-router-dom";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // TEMPORARY LOGIN
    navigate("/farmer-dashboard");
  };

  return (
    <div className="modern-login">
      {/* LEFT SIDE */}
      <section className="login-showcase">
        <div className="overlay"></div>

        <div className="showcase-content">
          <div className="brand-badge">
            <div className="brand-icon">
              <Tractor size={28} />
            </div>

            <div>
              <h2>HerdMarket</h2>
              <span>Livestock Marketplace Platform</span>
            </div>
          </div>

          <div className="showcase-text">
            <span className="mini-title">
              WEB-BASED LIVESTOCK MARKETPLACE
            </span>

            <h1>
              Modern livestock trading for farmers and buyers in Veruela.
            </h1>

            <p>
              Secure livestock listings, transaction monitoring, map-based
              seller visibility, and structured trading workflows powered by
              digital agriculture technology.
            </p>
          </div>

          <div className="showcase-features">
            <div className="feature-card">
              <ShieldCheck size={22} />

              <div>
                <strong>Secure Trading Workflow</strong>
                <p>
                  Verification-based livestock transactions with MAO monitoring.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <Mail size={22} />

              <div>
                <strong>Farmer & Buyer Messaging</strong>
                <p>
                  Built-in communication and negotiation tools for trading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="login-panel">
        <div className="login-card">
          <div className="login-header">
            <span className="login-tag">WELCOME BACK</span>

            <h2>Sign in to your account</h2>

            <p>
              Access your livestock marketplace dashboard and continue trading.
            </p>
          </div>

          <form onSubmit={handleLogin}>
            {/* EMAIL */}
            <div className="form-group">
              <label>Email Address</label>

              <div className="input-wrapper">
                <Mail size={20} />

                <input
                  type="email"
                  placeholder="farmer@email.com"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="form-group">
              <div className="password-label">
                <label>Password</label>

                <Link to="/">Forgot password?</Link>
              </div>

              <div className="input-wrapper">
                <Lock size={20} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* OPTIONS */}
            <div className="login-options">
              <label className="remember-box">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
            </div>

            {/* LOGIN BUTTON */}
            <button className="login-btn" type="submit">
              Sign In
              <ArrowRight size={18} />
            </button>
          </form>

          {/* DIVIDER */}
          <div className="divider">
            <span></span>
            <p>OR CONTINUE WITH</p>
            <span></span>
          </div>

          {/* SOCIAL */}
          <div className="social-login">
            <button>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="google"
              />
              Google
            </button>

            <button>
              📱 Phone
            </button>
          </div>

          {/* REGISTER */}
          <div className="register-link">
            <p>
              Don’t have an account?
              <Link to="/register"> Create Account</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;