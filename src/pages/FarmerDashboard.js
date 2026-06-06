import { useState } from "react";

import {
  Bell,
  Menu,
  X,
  Home,
  List,
  PlusCircle,
  MessageCircle,
  User,
  LogOut,
  TrendingUp,
  CheckCircle,
  ClipboardList,
  Search,
  ArrowUpRight,
  Clock,
  BadgeCheck,
  MapPin,
  Wallet,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./FarmerDashboard.css";

function FarmerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="farmer-shell">
      <aside className={sidebarOpen ? "farmer-sidebar" : "farmer-sidebar collapsed"}>
        <div className="farmer-brand">
          <div className="farmer-logo">🐮</div>
          {sidebarOpen && (
            <div>
              <h3>HerdMarket</h3>
              <p>Farmer Portal</p>
            </div>
          )}
        </div>

        <nav className="farmer-nav">
          <Link className="active" to="/farmer-dashboard">
            <Home size={20} />
            <span>Dashboard</span>
          </Link>

          <Link to="/listings">
            <List size={20} />
            <span>My Listings</span>
          </Link>

          <Link to="/post">
            <PlusCircle size={20} />
            <span>Post Livestock</span>
          </Link>

          <Link to="/messages">
            <MessageCircle size={20} />
            <span>Messages</span>
          </Link>

          <Link to="/profile">
            <User size={20} />
            <span>Profile</span>
          </Link>
        </nav>

        <div className="sidebar-status">
          <p>Account Status</p>
          <strong>Verified Farmer</strong>
          <span>MAO approved</span>
        </div>

        <Link className="farmer-logout" to="/login">
          <LogOut size={20} />
          <span>Logout</span>
        </Link>
      </aside>

      <main className="farmer-main">
        <header className="farmer-topbar">
          <div className="topbar-left">
            <button
              className="menu-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <div>
              <span className="eyebrow">Farmer Dashboard</span>
              <h1>Welcome back, Almyr</h1>
              <p>Manage your livestock listings, inquiries, and transactions.</p>
            </div>
          </div>

          <div className="topbar-actions">
            <div className="dashboard-search">
              <Search size={18} />
              <input type="text" placeholder="Search listings, buyers..." />
            </div>

            <div className="notification-wrapper">
              <button
                className="notification-btn"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell size={22} />
                <i></i>
              </button>

              {showNotifications && (
                <div className="notification-dropdown">
                  <h4>Notifications</h4>

                  <div className="notification-item unread">
                    <strong>New inquiry</strong>
                    <p>Juan asked about your Swine listing.</p>
                    <small>2 mins ago</small>
                  </div>

                  <div className="notification-item">
                    <strong>Transaction completed</strong>
                    <p>Goat sale has been confirmed.</p>
                    <small>1 hour ago</small>
                  </div>

                  <div className="notification-item">
                    <strong>New message</strong>
                    <p>Maria sent you a message.</p>
                    <small>Today</small>
                  </div>
                </div>
              )}
            </div>

            <div className="farmer-profile-chip">
              <div className="profile-avatar">A</div>
              <div>
                <strong>Almyr Belenson</strong>
                <p>Verified Farmer</p>
              </div>
            </div>
          </div>
        </header>

        <section className="farmer-hero-card">
          <div>
            <span>Marketplace Performance</span>
            <h2>Your herd is gaining more buyer attention this week.</h2>
            <p>
              You received 3 new inquiries overnight. Keep your livestock listings
              updated to improve buyer trust and visibility.
            </p>

            <div className="hero-actions">
              <Link to="/post">
                Post New Livestock
                <ArrowUpRight size={18} />
              </Link>

              <Link className="secondary" to="/messages">
                View Messages
              </Link>
            </div>
          </div>

          <div className="hero-metric">
            <strong>3</strong>
            <span>New inquiries</span>
          </div>
        </section>

        <section className="kpi-grid">
          <KpiCard
            icon={<TrendingUp />}
            value="12"
            label="Active Listings"
            note="+2 this week"
          />

          <KpiCard
            icon={<MessageCircle />}
            value="8"
            label="Buyer Inquiries"
            note="3 unread"
          />

          <KpiCard
            icon={<CheckCircle />}
            value="34"
            label="Completed Sales"
            note="Recorded transactions"
          />

          <KpiCard
            icon={<Wallet />}
            value="₱245K"
            label="Trade Value"
            note="Estimated total"
          />
        </section>

        <section className="dashboard-grid">
          <div className="dashboard-card wide">
            <div className="card-header">
              <div>
                <h3>Recent Activity</h3>
                <p>Latest updates from your marketplace transactions.</p>
              </div>

              <button>View all</button>
            </div>

            <ActivityItem
              icon={<ClipboardList />}
              title="New inquiry received"
              text="Buyer asked about your Swine listing."
              time="2 mins ago"
            />

            <ActivityItem
              icon={<BadgeCheck />}
              title="Transaction completed"
              text="Goat sale has been confirmed and recorded."
              time="1 hour ago"
            />

            <ActivityItem
              icon={<Clock />}
              title="Verification pending"
              text="Cattle document is waiting for MAO review."
              time="Today"
            />
          </div>

          <div className="dashboard-card">
            <div className="card-header">
              <div>
                <h3>My Livestock Listings</h3>
                <p>Current listing status overview.</p>
              </div>
            </div>

            <ListingItem name="Swine" detail="Large White • ₱12,000" status="Available" />
            <ListingItem name="Goat" detail="Boer Goat • ₱8,500" status="Pending" />
            <ListingItem name="Cattle" detail="Brahman • ₱35,000" status="Available" />
          </div>
        </section>

        <section className="dashboard-grid bottom">
          <div className="dashboard-card">
            <div className="card-header">
              <div>
                <h3>Trading Workflow</h3>
                <p>Your current transaction progress.</p>
              </div>
            </div>

            <WorkflowItem livestock="Swine" buyer="Juan Dela Cruz" step="Negotiation" />
            <WorkflowItem livestock="Goat" buyer="Maria Santos" step="Completed" />
            <WorkflowItem livestock="Cattle" buyer="Pedro Reyes" step="Verification" />
          </div>

          <div className="dashboard-card">
            <div className="card-header">
              <div>
                <h3>Farm Location</h3>
                <p>Seller visibility for buyer inspection.</p>
              </div>

              <MapPin size={22} />
            </div>

            <div className="mini-map">
              <div className="map-pin"></div>

              <div className="map-label">
                <strong>Veruela, Agusan del Sur</strong>
                <p>Farm location visible to buyers</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function KpiCard({ icon, value, label, note }) {
  return (
    <div className="kpi-card">
      <div className="kpi-icon">{icon}</div>
      <h2>{value}</h2>
      <p>{label}</p>
      <small>{note}</small>
    </div>
  );
}

function ActivityItem({ icon, title, text, time }) {
  return (
    <div className="activity-row">

      <div className="activity-left">

        <div className="activity-icon">
          {icon}
        </div>

        <div className="activity-content">
          <strong>{title}</strong>
          <p>{text}</p>
        </div>

      </div>

      <span className="activity-time">
        {time}
      </span>

    </div>
  );
}

function ListingItem({ name, detail, status }) {
  return (
    <div className="listing-row">
      <div>
        <strong>{name}</strong>
        <p>{detail}</p>
      </div>

      <span className={status === "Available" ? "status available" : "status pending"}>
        {status}
      </span>
    </div>
  );
}

function WorkflowItem({ livestock, buyer, step }) {
  return (
    <div className="workflow-item">
      <div>
        <strong>{livestock}</strong>
        <p>Buyer: {buyer}</p>
      </div>

      <div>
        <Workflow step={step} />
        <span>{step}</span>
      </div>
    </div>
  );
}

function Workflow({ step }) {
  const steps = ["Inquiry", "Negotiation", "Verification", "Confirmation", "Completed"];
  const activeIndex = steps.indexOf(step);

  return (
    <div className="workflow-line">
      {steps.map((item, index) => (
        <i
          key={item}
          className={
            index < activeIndex
              ? "done"
              : index === activeIndex
              ? "active"
              : ""
          }
        ></i>
      ))}
    </div>
  );
}

export default FarmerDashboard;