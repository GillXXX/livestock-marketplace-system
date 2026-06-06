import { useState } from "react";

import {
  LayoutDashboard,
  Users,
  ClipboardCheck,
  ShieldCheck,
  FileCheck2,
  BarChart3,
  Bell,
  BellRing,
  Search,
  Settings,
  LogOut,
  MapPin,
  Eye,
  CheckCircle,
  AlertTriangle,
  Clock,
  UserCircle,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [showNotif, setShowNotif] = useState(false);

  return (
    <div className="pro-admin">
      <aside className="pro-sidebar">
        <div className="pro-brand">
          <div className="pro-logo">MAO</div>

          <div>
            <h3>Livestock Admin</h3>
            <p>Veruela MAO</p>
          </div>
        </div>

        <nav>
          <Link className="active" to="/admin-dashboard">
            <LayoutDashboard size={20} /> Dashboard
          </Link>

          <Link to="/admin-users">
            <Users size={20} /> Users
          </Link>

          <Link to="/admin-listings">
            <ClipboardCheck size={20} /> Listings
          </Link>

          <Link to="/admin-verification">
            <ShieldCheck size={20} /> Verification
          </Link>

          <Link to="/admin-transactions">
            <FileCheck2 size={20} /> Transactions
          </Link>

          <Link to="/admin-map">
            <MapPin size={20} /> Map Monitoring
          </Link>

          <Link to="/admin-notifications">
            <BellRing size={20} /> Notifications
          </Link>

          <Link to="/admin-reports">
            <BarChart3 size={20} /> Reports
          </Link>

          <Link to="/admin-settings">
            <Settings size={20} /> Settings
          </Link>
        </nav>

        <Link className="pro-logout" to="/login">
          <LogOut size={20} /> Logout
        </Link>
      </aside>

      <main className="pro-main">
        <header className="pro-topbar">
          <div>
            <span>Municipal Agriculture Office</span>
            <h1>Admin Command Center</h1>
            <p>
              Monitor users, listings, verification, transactions, reports, and
              seller locations.
            </p>
          </div>

          <div className="pro-actions">
            <div className="pro-search">
              <Search size={18} />
              <input placeholder="Search records..." />
            </div>

            <div className="notif-wrap">
              <button
                onClick={() => setShowNotif(!showNotif)}
                className="pro-icon-btn"
              >
                <Bell size={21} />
                <i></i>
              </button>

              {showNotif && (
                <div className="notif-panel">
                  <h4>Notifications</h4>

                  <div className="notif-item unread">
                    <strong>New listing submitted</strong>
                    <p>Swine listing needs approval.</p>
                    <small>2 mins ago</small>
                  </div>

                  <div className="notif-item">
                    <strong>Document pending</strong>
                    <p>Cattle BAI permit requires review.</p>
                    <small>15 mins ago</small>
                  </div>

                  <div className="notif-item">
                    <strong>Transaction completed</strong>
                    <p>Goat sale recorded successfully.</p>
                    <small>1 hour ago</small>
                  </div>
                </div>
              )}
            </div>

            <div className="admin-profile">
              <UserCircle size={34} />

              <div>
                <strong>MAO Admin</strong>
                <p>Administrator</p>
              </div>
            </div>
          </div>
        </header>

        <section className="kpi-grid">
          <Kpi
            title="Registered Users"
            value="128"
            trend="+12 this month"
            icon={<Users />}
          />

          <Kpi
            title="Active Listings"
            value="56"
            trend="4 livestock categories"
            icon={<ClipboardCheck />}
          />

          <Kpi
            title="Pending Verification"
            value="14"
            trend="Needs action"
            icon={<Clock />}
          />

          <Kpi
            title="Completed Trades"
            value="34"
            trend="+18% increase"
            icon={<CheckCircle />}
          />
        </section>

        <section className="pro-grid">
          <div className="pro-card wide">
            <div className="card-head">
              <div>
                <h3>Verification Queue</h3>
                <p>
                  Review submitted documents and approve or flag transactions.
                </p>
              </div>

              <button>View All</button>
            </div>

            <table className="pro-table">
              <thead>
                <tr>
                  <th>Farmer</th>
                  <th>Livestock</th>
                  <th>Document</th>
                  <th>Workflow</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Almyr Belenson</td>
                  <td>Swine</td>
                  <td>Health Certificate</td>
                  <td>
                    <Workflow step="Verification" />
                  </td>
                  <td>
                    <span className="badge pending">Pending</span>
                  </td>
                  <td>
                    <button className="table-btn">
                      <Eye size={17} />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>Mario Santos</td>
                  <td>Cattle</td>
                  <td>BAI Permit</td>
                  <td>
                    <Workflow step="Confirmation" />
                  </td>
                  <td>
                    <span className="badge approved">Approved</span>
                  </td>
                  <td>
                    <button className="table-btn">
                      <Eye size={17} />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>Juan Dela Cruz</td>
                  <td>Goat</td>
                  <td>Vaccination Record</td>
                  <td>
                    <Workflow step="Negotiation" />
                  </td>
                  <td>
                    <span className="badge flagged">Flagged</span>
                  </td>
                  <td>
                    <button className="table-btn">
                      <Eye size={17} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pro-card">
            <h3>System Activity</h3>

            <Activity
              icon={<CheckCircle />}
              title="Listing approved"
              text="Swine listing approved."
            />

            <Activity
              icon={<AlertTriangle />}
              title="Document review"
              text="Cattle permit pending."
            />

            <Activity
              icon={<Users />}
              title="New user"
              text="Farmer account registered."
            />
          </div>
        </section>

        <section className="pro-grid bottom">
          <div className="pro-card">
            <div className="card-head">
              <div>
                <h3>Map Monitoring</h3>
                <p>Seller and farm location overview.</p>
              </div>

              <MapPin size={22} />
            </div>

            <div className="pro-map">
              <div className="pin p1"></div>
              <div className="pin p2"></div>
              <div className="pin p3"></div>

              <div className="map-info">
                <strong>Veruela, Agusan del Sur</strong>
                <p>23 registered seller locations</p>
              </div>
            </div>
          </div>

          <div className="pro-card">
            <div className="card-head">
              <div>
                <h3>Reports Overview</h3>
                <p>Quick access to printable monitoring reports.</p>
              </div>

              <BarChart3 size={22} />
            </div>

            <div className="report-row">
              <strong>Monthly Sales Report</strong>
              <span>Ready</span>
            </div>

            <div className="report-row">
              <strong>Livestock Category Summary</strong>
              <span>Ready</span>
            </div>

            <div className="report-row">
              <strong>Pending Verification Report</strong>
              <span>Draft</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function Kpi({ title, value, trend, icon }) {
  return (
    <div className="kpi-card">
      <div className="kpi-icon">{icon}</div>
      <h2>{value}</h2>
      <p>{title}</p>
      <small>{trend}</small>
    </div>
  );
}

function Workflow({ step }) {
  return (
    <div className="workflow">
      <span className="done"></span>
      <span className="done"></span>
      <span className={step === "Negotiation" ? "active" : "done"}></span>
      <span
        className={
          step === "Verification"
            ? "active"
            : step === "Confirmation"
            ? "done"
            : ""
        }
      ></span>
      <span className={step === "Confirmation" ? "active" : ""}></span>
    </div>
  );
}

function Activity({ icon, title, text }) {
  return (
    <div className="activity-row">
      <div>{icon}</div>

      <section>
        <strong>{title}</strong>
        <p>{text}</p>
      </section>
    </div>
  );
}

export default AdminDashboard;