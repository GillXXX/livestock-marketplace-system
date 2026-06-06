import {
  ArrowLeft,
  Search,
  Filter,
  Download,
  Eye,
  UserCheck,
  UserX,
  Trash2,
  ShieldCheck,
  Users,
  Tractor,
  ShoppingBag,
  Clock,
  MoreVertical,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./AdminUsers.css";

function AdminUsers() {
  const users = [
    {
      id: "USR-001",
      name: "Almyr Belenson",
      email: "almyr@email.com",
      phone: "+63 912 345 6789",
      role: "Farmer",
      location: "Veruela, Agusan del Sur",
      status: "Active",
      verification: "Verified",
      joined: "May 12, 2026",
      listings: 12,
    },
    {
      id: "USR-002",
      name: "Maria Santos",
      email: "maria@email.com",
      phone: "+63 917 222 8841",
      role: "Buyer",
      location: "Veruela, Agusan del Sur",
      status: "Active",
      verification: "N/A",
      joined: "May 15, 2026",
      listings: 0,
    },
    {
      id: "USR-003",
      name: "Juan Dela Cruz",
      email: "juan@email.com",
      phone: "+63 919 888 1022",
      role: "Farmer",
      location: "Veruela, Agusan del Sur",
      status: "Pending",
      verification: "Pending",
      joined: "May 18, 2026",
      listings: 3,
    },
    {
      id: "USR-004",
      name: "Pedro Reyes",
      email: "pedro@email.com",
      phone: "+63 915 444 2210",
      role: "Buyer",
      location: "Veruela, Agusan del Sur",
      status: "Inactive",
      verification: "N/A",
      joined: "May 20, 2026",
      listings: 0,
    },
  ];

  return (
    <div className="enterprise-users-page">
      <header className="users-page-header">
        <div className="header-left">
          <Link to="/admin-dashboard" className="back-button">
            <ArrowLeft size={20} />
          </Link>

          <div>
            <span className="eyebrow">MAO ADMINISTRATION</span>
            <h1>User Management</h1>
            <p>
              Manage farmer and buyer accounts, verify farmer profiles, and
              monitor user access within the livestock marketplace.
            </p>
          </div>
        </div>

        <button className="export-btn">
          <Download size={18} />
          Export Users
        </button>
      </header>

      <section className="user-kpi-grid">
        <KpiCard
          icon={<Tractor size={24} />}
          value="74"
          label="Registered Farmers"
          note="+8 this month"
        />

        <KpiCard
          icon={<ShoppingBag size={24} />}
          value="54"
          label="Registered Buyers"
          note="+4 this month"
        />

        <KpiCard
          icon={<Clock size={24} />}
          value="11"
          label="Pending Verification"
          note="Requires MAO review"
        />

        <KpiCard
          icon={<ShieldCheck size={24} />}
          value="96%"
          label="Verified Accounts"
          note="Account quality rate"
        />
      </section>

      <section className="user-management-card">
        <div className="management-toolbar">
          <div className="toolbar-title">
            <h3>Registered System Users</h3>
            <p>Farmers and buyers currently registered in the system.</p>
          </div>

          <div className="toolbar-actions">
            <div className="search-control">
              <Search size={18} />
              <input type="text" placeholder="Search name, email, or ID..." />
            </div>

            <button className="filter-btn">
              <Filter size={18} />
              Filters
            </button>
          </div>
        </div>

        <div className="filter-row">
          <select>
            <option>All Roles</option>
            <option>Farmer</option>
            <option>Buyer</option>
          </select>

          <select>
            <option>All Account Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Pending</option>
          </select>

          <select>
            <option>All Verification</option>
            <option>Verified</option>
            <option>Pending</option>
            <option>N/A</option>
          </select>
        </div>

        <div className="enterprise-table-wrapper">
          <table className="enterprise-users-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Contact</th>
                <th>Role</th>
                <th>Status</th>
                <th>Verification</th>
                <th>Listings</th>
                <th>Joined</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="user-cell">
                      <div className="avatar">
                        {user.name.charAt(0)}
                      </div>

                      <div>
                        <strong>{user.name}</strong>
                        <p>{user.id} • {user.location}</p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="contact-cell">
                      <strong>{user.email}</strong>
                      <p>{user.phone}</p>
                    </div>
                  </td>

                  <td>
                    <span className={`role-pill ${user.role.toLowerCase()}`}>
                      {user.role === "Farmer" ? (
                        <Tractor size={14} />
                      ) : (
                        <ShoppingBag size={14} />
                      )}
                      {user.role}
                    </span>
                  </td>

                  <td>
                    <span className={`status-pill ${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`verification-pill ${
                        user.verification === "Verified"
                          ? "verified"
                          : user.verification === "Pending"
                          ? "pending"
                          : "neutral"
                      }`}
                    >
                      {user.verification}
                    </span>
                  </td>

                  <td>
                    <strong className="listing-count">
                      {user.listings}
                    </strong>
                  </td>

                  <td>{user.joined}</td>

                  <td>
                    <div className="table-actions">
                      <button title="View Details">
                        <Eye size={17} />
                      </button>

                      <button title="Verify Farmer">
                        <UserCheck size={17} />
                      </button>

                      <button title="Deactivate Account">
                        <UserX size={17} />
                      </button>

                      <button className="danger" title="Delete User">
                        <Trash2 size={17} />
                      </button>

                      <button title="More Options">
                        <MoreVertical size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="verification-summary">
        <div>
          <h3>Farmer Verification Queue</h3>
          <p>
            Farmers with pending verification should be reviewed before their
            livestock listings are approved.
          </p>
        </div>

        <div className="queue-list">
          <div>
            <strong>Juan Dela Cruz</strong>
            <span>Pending farmer verification</span>
          </div>

          <div>
            <strong>Ramon Garcia</strong>
            <span>Missing valid ID / farm location</span>
          </div>

          <div>
            <strong>Lito Manalo</strong>
            <span>Needs MAO profile confirmation</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function KpiCard({ icon, value, label, note }) {
  return (
    <div className="user-kpi-card">
      <div className="kpi-icon">
        {icon}
      </div>

      <h2>{value}</h2>
      <p>{label}</p>
      <small>{note}</small>
    </div>
  );
}

export default AdminUsers;