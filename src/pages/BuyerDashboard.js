import { useState } from "react";

import {
  Bell,
  Menu,
  X,
  Home,
  Store,
  Heart,
  MessageCircle,
  FileCheck2,
  MapPin,
  User,
  Settings,
  LogOut,
  Search,
  ShoppingBag,
  Clock,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  Eye,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./BuyerDashboard.css";

function BuyerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);

  const recommended = [
    {
      id: 1,
      name: "Large White Swine",
      type: "Swine",
      price: "₱12,000",
      location: "Poblacion, Veruela",
      seller: "Almyr Belenson",
      image:
        "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1400&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Boer Goat",
      type: "Goat",
      price: "₱8,500",
      location: "Sinobong, Veruela",
      seller: "Juan Dela Cruz",
      image:
        "https://images.unsplash.com/photo-1524024973431-2ad916746881?q=80&w=1400&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Brahman Cattle",
      type: "Cattle",
      price: "₱35,000",
      location: "La Fortuna, Veruela",
      seller: "Mario Santos",
      image:
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  return (
    <div className="buyer-shell">
      <aside className={sidebarOpen ? "buyer-sidebar" : "buyer-sidebar collapsed"}>
        <div className="buyer-brand">
          <div className="buyer-logo">🐄</div>

          {sidebarOpen && (
            <div>
              <h3>HerdMarket</h3>
              <p>Buyer Portal</p>
            </div>
          )}
        </div>

        <nav className="buyer-nav">
          <Link className="active" to="/buyer-dashboard">
            <Home size={20} />
            <span>Dashboard</span>
          </Link>

          <Link to="/marketplace">
            <Store size={20} />
            <span>Marketplace</span>
          </Link>

          <Link to="/buyer-favorites">
            <Heart size={20} />
            <span>Saved Listings</span>
          </Link>

          <Link to="/messages">
            <MessageCircle size={20} />
            <span>Messages</span>
          </Link>

          <Link to="/buyer-transactions">
            <FileCheck2 size={20} />
            <span>Transactions</span>
          </Link>

          <Link to="/buyer-map">
            <MapPin size={20} />
            <span>Map Explorer</span>
          </Link>

          <Link to="/profile">
            <User size={20} />
            <span>Profile</span>
          </Link>

          <Link to="/buyer-settings">
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </nav>

        <div className="buyer-sidebar-card">
          <p>Buyer Status</p>
          <strong>Verified Buyer</strong>
          <span>Ready to inquire</span>
        </div>

        <Link className="buyer-logout" to="/login">
          <LogOut size={20} />
          <span>Logout</span>
        </Link>
      </aside>

      <main className="buyer-main">
        <header className="buyer-topbar">
          <div className="topbar-left">
            <button
              className="menu-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <div>
              <span className="eyebrow">Buyer Dashboard</span>
              <h1>Find livestock with confidence</h1>
              <p>Browse verified listings, contact farmers, and track inquiries.</p>
            </div>
          </div>

          <div className="topbar-actions">
            <div className="buyer-search">
              <Search size={18} />
              <input type="text" placeholder="Search livestock, breed, location..." />
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
                    <strong>Seller replied</strong>
                    <p>Almyr responded to your Swine inquiry.</p>
                    <small>2 mins ago</small>
                  </div>

                  <div className="notification-item">
                    <strong>New nearby listing</strong>
                    <p>A new goat listing was posted in Veruela.</p>
                    <small>Today</small>
                  </div>

                  <div className="notification-item">
                    <strong>Price update</strong>
                    <p>Brahman cattle listing price was updated.</p>
                    <small>Yesterday</small>
                  </div>
                </div>
              )}
            </div>

            <div className="buyer-profile-chip">
              <div className="profile-avatar">B</div>
              <div>
                <strong>Buyer Account</strong>
                <p>Verified Buyer</p>
              </div>
            </div>
          </div>
        </header>

        <section className="buyer-hero">
          <div>
            <span>Livestock Discovery</span>
            <h2>Explore verified livestock listings from farmers in Veruela.</h2>
            <p>
              Search by livestock type, price, seller location, and availability.
              Send inquiries directly and monitor your purchase progress.
            </p>

            <div className="hero-actions">
              <Link to="/marketplace">
                Browse Marketplace
                <ArrowUpRight size={18} />
              </Link>

              <Link className="secondary" to="/buyer-map">
                View Nearby Sellers
              </Link>
            </div>
          </div>

          <div className="hero-highlight">
            <strong>56</strong>
            <span>Available listings</span>
          </div>
        </section>

        <section className="buyer-kpi-grid">
          <KpiCard icon={<Heart />} value="9" label="Saved Listings" note="Your favorites" />
          <KpiCard icon={<MessageCircle />} value="5" label="Active Inquiries" note="2 awaiting reply" />
          <KpiCard icon={<ShoppingBag />} value="3" label="Completed Purchases" note="Transaction history" />
          <KpiCard icon={<MapPin />} value="23" label="Nearby Sellers" note="Within Veruela" />
        </section>

        <section className="buyer-content-grid">
          <div className="buyer-panel wide">
            <div className="panel-header">
              <div>
                <h3>Recommended Livestock</h3>
                <p>Listings matched based on your recent marketplace activity.</p>
              </div>

              <Link to="/marketplace">View all</Link>
            </div>

            <div className="recommended-grid">
              {recommended.map((item) => (
                <div className="recommended-card" key={item.id}>
                  <div className="recommended-image">
                    <img src={item.image} alt={item.name} />
                    <span>{item.type}</span>
                    <button>
                      <Heart size={17} />
                    </button>
                  </div>

                  <div className="recommended-body">
                    <div className="recommended-title">
                      <div>
                        <h4>{item.name}</h4>
                        <p>{item.seller}</p>
                      </div>

                      <strong>{item.price}</strong>
                    </div>

                    <div className="recommended-location">
                      <MapPin size={15} />
                      {item.location}
                    </div>

                    <div className="recommended-actions">
                      <button>
                        <Eye size={16} />
                        View Details
                      </button>

                      <button className="inquire">
                        <MessageCircle size={16} />
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="buyer-panel">
            <div className="panel-header compact">
              <div>
                <h3>Recent Inquiries</h3>
                <p>Your latest seller conversations.</p>
              </div>
            </div>

            <InquiryItem
              icon={<Clock />}
              title="Swine Listing"
              text="Waiting for seller response"
              status="Pending"
            />

            <InquiryItem
              icon={<ShieldCheck />}
              title="Goat Listing"
              text="Seller confirmed availability"
              status="Confirmed"
            />

            <InquiryItem
              icon={<MessageCircle />}
              title="Cattle Listing"
              text="Negotiation in progress"
              status="Negotiation"
            />
          </aside>
        </section>

        <section className="buyer-bottom-grid">
          <div className="buyer-panel">
            <div className="panel-header">
              <div>
                <h3>Marketplace Activity</h3>
                <p>Latest updates from livestock sellers.</p>
              </div>
            </div>

            <ActivityItem title="New swine listing posted" text="Poblacion, Veruela • ₱12,000" />
            <ActivityItem title="Goat listing price updated" text="Sinobong, Veruela • ₱8,500" />
            <ActivityItem title="New cattle listing available" text="La Fortuna, Veruela • ₱35,000" />
          </div>

          <div className="buyer-panel">
            <div className="panel-header">
              <div>
                <h3>Nearby Seller Map</h3>
                <p>Preview of seller locations near you.</p>
              </div>

              <MapPin size={22} />
            </div>

            <div className="buyer-map-preview">
              <div className="map-pin one"></div>
              <div className="map-pin two"></div>
              <div className="map-pin three"></div>

              <div className="map-label">
                <strong>Veruela, Agusan del Sur</strong>
                <p>23 mapped livestock sellers</p>
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
    <div className="buyer-kpi-card">
      <div className="kpi-icon">{icon}</div>
      <h2>{value}</h2>
      <p>{label}</p>
      <small>{note}</small>
    </div>
  );
}

function InquiryItem({ icon, title, text, status }) {
  return (
    <div className="inquiry-item">
      <div className="inquiry-icon">{icon}</div>

      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>

      <span>{status}</span>
    </div>
  );
}

function ActivityItem({ title, text }) {
  return (
    <div className="buyer-activity-item">
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>

      <TrendingUp size={18} />
    </div>
  );
}

export default BuyerDashboard;