import {
  ArrowLeft,
  BellRing,
  ClipboardCheck,
  ShieldCheck,
  FileCheck2,
  Users,
  CheckCircle,
  AlertTriangle,
  Eye,
  Trash2,
  Search,
  Filter,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./AdminNotifications.css";

function AdminNotifications() {
  const notifications = [
    {
      id: 1,
      type: "Listing Approval",
      title: "New livestock listing submitted",
      message: "Almyr Belenson submitted a Swine listing for approval.",
      time: "2 minutes ago",
      status: "Unread",
      icon: <ClipboardCheck size={22} />,
    },
    {
      id: 2,
      type: "Document Verification",
      title: "Document requires review",
      message: "Mario Santos uploaded a BAI Transport Permit for cattle.",
      time: "15 minutes ago",
      status: "Unread",
      icon: <ShieldCheck size={22} />,
    },
    {
      id: 3,
      type: "Transaction Alert",
      title: "Transaction completed",
      message: "Goat sale between Juan Dela Cruz and Maria Santos was recorded.",
      time: "1 hour ago",
      status: "Read",
      icon: <FileCheck2 size={22} />,
    },
    {
      id: 4,
      type: "User Registration",
      title: "New farmer registered",
      message: "A new farmer account is waiting for verification.",
      time: "Today",
      status: "Read",
      icon: <Users size={22} />,
    },
  ];

  return (
    <div className="admin-notifications-page">
      <div className="notifications-header">
        <Link to="/admin-dashboard" className="back-btn">
          <ArrowLeft size={20} />
        </Link>

        <div>
          <span className="notif-eyebrow">MAO ADMIN CENTER</span>
          <h1>Notifications</h1>
          <p>
            Review listing approvals, verification requests, transaction alerts,
            and farmer reports.
          </p>
        </div>
      </div>

      <section className="notification-stats">
        <NotifStat icon={<BellRing />} value="18" label="Total Alerts" />
        <NotifStat icon={<AlertTriangle />} value="7" label="Unread Alerts" />
        <NotifStat icon={<ShieldCheck />} value="5" label="Verification Requests" />
        <NotifStat icon={<CheckCircle />} value="11" label="Resolved Today" />
      </section>

      <div className="notification-toolbar">
        <div className="notification-search">
          <Search size={18} />
          <input type="text" placeholder="Search notifications..." />
        </div>

        <select>
          <option>All Types</option>
          <option>Listing Approval</option>
          <option>Document Verification</option>
          <option>Transaction Alert</option>
          <option>User Registration</option>
        </select>

        <select>
          <option>All Status</option>
          <option>Unread</option>
          <option>Read</option>
        </select>

        <button>
          <Filter size={17} />
          Filter
        </button>
      </div>

      <section className="notifications-layout">
        <div className="notifications-list-card">
          <div className="notifications-card-header">
            <div>
              <h3>Admin Notification Inbox</h3>
              <p>Latest marketplace actions that require admin attention.</p>
            </div>

            <button>Mark all as read</button>
          </div>

          <div className="notification-list">
            {notifications.map((notif) => (
              <div
                className={`notification-row ${
                  notif.status === "Unread" ? "unread" : ""
                }`}
                key={notif.id}
              >
                <div className="notification-icon">
                  {notif.icon}
                </div>

                <div className="notification-content">
                  <div className="notification-meta">
                    <span>{notif.type}</span>
                    <small>{notif.time}</small>
                  </div>

                  <h4>{notif.title}</h4>
                  <p>{notif.message}</p>

                  <div className="notification-tags">
                    <span
                      className={
                        notif.status === "Unread"
                          ? "tag-unread"
                          : "tag-read"
                      }
                    >
                      {notif.status}
                    </span>
                  </div>
                </div>

                <div className="notification-actions">
                  <button title="View details">
                    <Eye size={17} />
                  </button>

                  <button className="danger" title="Delete notification">
                    <Trash2 size={17} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="notification-side-panel">
          <h3>Notification Categories</h3>

          <CategoryItem
            icon={<ClipboardCheck size={20} />}
            title="Listing Approvals"
            count="6"
            text="Livestock posts waiting for review"
          />

          <CategoryItem
            icon={<ShieldCheck size={20} />}
            title="Document Verification"
            count="5"
            text="Certificates and permits pending"
          />

          <CategoryItem
            icon={<FileCheck2 size={20} />}
            title="Transaction Alerts"
            count="4"
            text="Workflow and transaction updates"
          />

          <CategoryItem
            icon={<Users size={20} />}
            title="User Reports"
            count="3"
            text="Farmer and buyer account updates"
          />
        </aside>
      </section>
    </div>
  );
}

function NotifStat({ icon, value, label }) {
  return (
    <div className="notif-stat-card">
      <div className="notif-stat-icon">{icon}</div>
      <h2>{value}</h2>
      <p>{label}</p>
    </div>
  );
}

function CategoryItem({ icon, title, count, text }) {
  return (
    <div className="notif-category">
      <div className="notif-category-icon">{icon}</div>

      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>

      <span>{count}</span>
    </div>
  );
}

export default AdminNotifications;