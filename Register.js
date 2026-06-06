import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Phone,
  MapPin,
  Tractor,
  ShoppingBag,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState("farmer");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    // TEMPORARY
    // Later this will connect to backend/database
    navigate("/login");
  };

  return (
    <div className="modern-register">
      <section className="register-showcase">
        <div className="showcase-overlay"></div>

        <div className="register-showcase-content">
          <div className="register-brand">
            <div className="register-brand-icon">
              <Tractor size={28} />
            </div>

            <div>
              <h2>HerdMarket</h2>
              <span>Livestock Marketplace Platform</span>
            </div>
          </div>

          <div className="register-showcase-text">
            <span>SECURE LIVESTOCK TRADING</span>

            <h1>Create your marketplace account.</h1>

            <p>
              Join the Web-Based Livestock Marketplace System for farmers and
              buyers in Veruela, Agusan del Sur.
            </p>
          </div>

          <div className="register-feature">
            <ShieldCheck size={24} />

            <div>
              <strong>Role-Based Access</strong>
              <p>
                Farmers can post livestock listings while buyers can browse,
                inquire, and negotiate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="register-panel">
        <div className="register-card">
          <div className="register-header">
            <span>CREATE ACCOUNT</span>

            <h2>Register to HerdMarket</h2>

            <p>
              Select your account role and complete your registration details.
            </p>
          </div>

          <form onSubmit={handleRegister}>
            <label className="field-label">Select Account Role</label>

            <div className="role-select-grid">
              <button
                type="button"
                className={role === "farmer" ? "role-option active" : "role-option"}
                onClick={() => setRole("farmer")}
              >
                <Tractor size={24} />
                <div>
                  <strong>Farmer</strong>
                  <p>Post and manage livestock listings</p>
                </div>
              </button>

              <button
                type="button"
                className={role === "buyer" ? "role-option active" : "role-option"}
                onClick={() => setRole("buyer")}
              >
                <ShoppingBag size={24} />
                <div>
                  <strong>Buyer</strong>
                  <p>Browse livestock and send inquiries</p>
                </div>
              </button>
            </div>

            <div className="register-form-grid">
              <div className="form-group">
                <label>Full Name</label>

                <div className="input-wrapper">
                  <User size={20} />
                  <input type="text" placeholder="Enter full name" required />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>

                <div className="input-wrapper">
                  <Mail size={20} />
                  <input type="email" placeholder="example@email.com" required />
                </div>
              </div>

              <div className="form-group">
                <label>Phone Number</label>

                <div className="input-wrapper">
                  <Phone size={20} />
                  <input type="text" placeholder="+63 912 345 6789" required />
                </div>
              </div>

              <div className="form-group">
                <label>Location</label>

                <div className="input-wrapper">
                  <MapPin size={20} />
                  <input
                    type="text"
                    placeholder="Veruela, Agusan del Sur"
                    required
                  />
                </div>
              </div>

              {role === "farmer" && (
                <div className="form-group full">
                  <label>Farm / Barangay Location</label>

                  <div className="input-wrapper">
                    <MapPin size={20} />
                    <input
                      type="text"
                      placeholder="Example: Poblacion, Veruela"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="form-group">
                <label>Password</label>

                <div className="input-wrapper">
                  <Lock size={20} />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    required
                  />

                  <button
                    type="button"
                    className="eye-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Confirm Password</label>

                <div className="input-wrapper">
                  <Lock size={20} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    required
                  />
                </div>
              </div>
            </div>

            <label className="terms">
              <input type="checkbox" required />
              <span>
                I agree to the system terms and allow my information to be used
                for livestock marketplace transactions.
              </span>
            </label>

            <button className="register-btn" type="submit">
              Create Account
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="signin-link">
            <p>
              Already have an account?
              <Link to="/login"> Sign in</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;