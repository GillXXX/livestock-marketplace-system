import {
  ArrowLeft,
  Settings,
  ShieldCheck,
  UserCog,
  Bell,
  ClipboardCheck,
  FileCheck2,
  Save,
  Lock,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./AdminSettings.css";

function AdminSettings() {
  return (
    <div className="admin-settings-page">
      <div className="settings-header">
        <Link to="/admin-dashboard" className="back-btn">
          <ArrowLeft size={20} />
        </Link>

        <div>
          <h1>System Settings</h1>
          <p>
            Configure admin controls, security preferences, approval rules, and
            notification settings.
          </p>
        </div>
      </div>

      <section className="settings-grid">
        <SettingsCard
          icon={<ShieldCheck />}
          title="Role-Based Access Control"
          text="Control system permissions for admin, farmers, and buyers."
          status="Enabled"
        />

        <SettingsCard
          icon={<ClipboardCheck />}
          title="Listing Approval"
          text="Require MAO review before livestock listings appear publicly."
          status="Manual Review"
        />

        <SettingsCard
          icon={<FileCheck2 />}
          title="Document Verification"
          text="Require certificates or permits before transaction confirmation."
          status="Required"
        />

        <SettingsCard
          icon={<Bell />}
          title="Admin Notifications"
          text="Receive alerts for new listings, documents, and transactions."
          status="Enabled"
        />
      </section>

      <div className="settings-panel">
        <div className="settings-panel-title">
          <div>
            <h3>General System Configuration</h3>
            <p>Basic marketplace rules and admin preferences.</p>
          </div>
        </div>

        <div className="settings-form">
          <div className="settings-group">
            <label>System Name</label>
            <input
              type="text"
              defaultValue="Web-Based Livestock Marketplace System"
            />
          </div>

          <div className="settings-group">
            <label>Municipality</label>
            <input type="text" defaultValue="Veruela, Agusan del Sur" />
          </div>

          <div className="settings-group">
            <label>Admin Office</label>
            <input type="text" defaultValue="Municipal Agriculture Office" />
          </div>

          <div className="settings-group">
            <label>Allowed Livestock Types</label>
            <input type="text" defaultValue="Swine, Cattle, Goat, Poultry" />
          </div>

          <div className="settings-group">
            <label>Default Listing Status</label>
            <select defaultValue="Pending Approval">
              <option>Pending Approval</option>
              <option>Auto Approved</option>
              <option>Draft</option>
            </select>
          </div>

          <div className="settings-group">
            <label>Default Transaction Workflow</label>
            <select defaultValue="Strict Workflow">
              <option>Strict Workflow</option>
              <option>Flexible Workflow</option>
            </select>
          </div>
        </div>
      </div>

      <div className="settings-panel">
        <div className="settings-panel-title">
          <div>
            <h3>Security and Access Settings</h3>
            <p>Manage login, role permissions, and account restrictions.</p>
          </div>
        </div>

        <div className="settings-list">
          <SettingToggle
            icon={<Lock />}
            title="Require secure login"
            text="Users must login before accessing marketplace dashboards."
            active
          />

          <SettingToggle
            icon={<ShieldCheck />}
            title="Enable role-based access"
            text="Separate access for farmers, buyers, and MAO administrators."
            active
          />

          <SettingToggle
            icon={<UserCog />}
            title="Allow account deactivation"
            text="Admins can activate or deactivate user accounts."
            active
          />

          <SettingToggle
            icon={<FileCheck2 />}
            title="Require document verification"
            text="Transactions cannot be completed without required documents."
            active
          />

          <SettingToggle
            icon={<Bell />}
            title="Enable admin notification alerts"
            text="Notify admin when new actions require review."
            active
          />
        </div>
      </div>

      <div className="settings-actions">
        <button className="save-settings-btn">
          <Save size={18} />
          Save Settings
        </button>
      </div>
    </div>
  );
}

function SettingsCard({ icon, title, text, status }) {
  return (
    <div className="settings-card">
      <div className="settings-icon">{icon}</div>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

      <span>{status}</span>
    </div>
  );
}

function SettingToggle({ icon, title, text, active }) {
  return (
    <div className="setting-toggle">
      <div className="setting-toggle-icon">{icon}</div>

      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>

      <label className="switch">
        <input type="checkbox" defaultChecked={active} />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default AdminSettings;