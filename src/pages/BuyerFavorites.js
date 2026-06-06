import {
  ArrowLeft,
  Heart,
  Search,
  Filter,
  MapPin,
  Eye,
  MessageCircle,
  Trash2,
  ShieldCheck,
  TrendingUp,
  Wallet,
  Clock3,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./BuyerFavorites.css";

function BuyerFavorites() {
  const savedListings = [
    {
      id: 1,
      name: "Large White Swine",
      type: "Swine",
      price: 12000,
      location: "Poblacion, Veruela",
      seller: "Almyr Belenson",
      saved: "2 days ago",
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1400&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Boer Goat",
      type: "Goat",
      price: 8500,
      location: "Sinobong, Veruela",
      seller: "Juan Dela Cruz",
      saved: "Yesterday",
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1524024973431-2ad916746881?q=80&w=1400&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Brahman Cattle",
      type: "Cattle",
      price: 35000,
      location: "La Fortuna, Veruela",
      seller: "Mario Santos",
      saved: "Today",
      status: "Pending",
      image:
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  return (
    <div className="buyer-favorites-page">
      <div className="favorites-header">
        <div className="header-left">
          <Link to="/buyer-dashboard" className="back-btn">
            <ArrowLeft size={20} />
          </Link>

          <div>
            <span className="page-tag">BUYER SAVED LISTINGS</span>
            <h1>Saved Livestock</h1>
            <p>
              Review your favorite livestock listings, compare prices, and contact
              verified sellers.
            </p>
          </div>
        </div>
      </div>

      <section className="favorites-stats">
        <StatCard icon={<Heart />} value="9" label="Saved Listings" note="Your watchlist" />
        <StatCard icon={<ShieldCheck />} value="7" label="Verified Sellers" note="MAO monitored" />
        <StatCard icon={<Wallet />} value="₱55.5K" label="Saved Value" note="Total estimate" />
        <StatCard icon={<TrendingUp />} value="3" label="Active Inquiries" note="From saved items" />
      </section>

      <section className="favorites-toolbar">
        <div className="favorites-search">
          <Search size={18} />
          <input type="text" placeholder="Search saved livestock..." />
        </div>

        <select>
          <option>All Livestock</option>
          <option>Swine</option>
          <option>Cattle</option>
          <option>Goat</option>
          <option>Poultry</option>
        </select>

        <select>
          <option>All Status</option>
          <option>Available</option>
          <option>Pending</option>
          <option>Sold</option>
        </select>

        <button>
          <Filter size={17} />
          Filter
        </button>
      </section>

      <section className="saved-grid">
        {savedListings.map((item) => (
          <div className="saved-card" key={item.id}>
            <div className="saved-image">
              <img src={item.image} alt={item.name} />

              <span className="saved-type">{item.type}</span>

              <button className="remove-heart">
                <Heart size={18} fill="currentColor" />
              </button>
            </div>

            <div className="saved-body">
              <div className="saved-title">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.seller}</p>
                </div>

                <strong>₱{item.price.toLocaleString()}</strong>
              </div>

              <div className="saved-meta">
                <div>
                  <MapPin size={16} />
                  <span>{item.location}</span>
                </div>

                <div>
                  <Clock3 size={16} />
                  <span>Saved {item.saved}</span>
                </div>
              </div>

              <div className="saved-status-row">
                <span
                  className={
                    item.status === "Available"
                      ? "saved-status available"
                      : "saved-status pending"
                  }
                >
                  {item.status}
                </span>

                <span className="verified-seller">
                  <ShieldCheck size={14} />
                  Verified seller
                </span>
              </div>

              <div className="saved-actions">
                <button className="view-btn">
                  <Eye size={17} />
                  View Details
                </button>

                <button className="message-btn">
                  <MessageCircle size={17} />
                  Inquire
                </button>

                <button className="delete-btn">
                  <Trash2 size={17} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

function StatCard({ icon, value, label, note }) {
  return (
    <div className="favorite-stat-card">
      <div className="favorite-stat-icon">{icon}</div>
      <h2>{value}</h2>
      <p>{label}</p>
      <small>{note}</small>
    </div>
  );
}

export default BuyerFavorites;