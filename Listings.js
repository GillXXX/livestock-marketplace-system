import {
  ArrowLeft,
  Search,
  PlusCircle,
  Filter,
  TrendingUp,
  PackageCheck,
  Clock3,
  Wallet,
  MapPin,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./Listings.css";

function Listings() {
  const listings = [
    {
      id: 1,
      breed: "Friesian Heifer",
      price: 1250000,
      age: "18 months",
      location: "Lilongwe",
      image:
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1400&auto=format&fit=crop",
    },
    {
      id: 2,
      breed: "Boer Goat",
      price: 8500,
      age: "5 months",
      location: "Veruela",
      image:
        "https://images.unsplash.com/photo-1524024973431-2ad916746881?q=80&w=1400&auto=format&fit=crop",
    },
    {
      id: 3,
      breed: "Large White Swine",
      price: 12000,
      age: "8 months",
      location: "Agusan del Sur",
      image:
        "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  return (
    <div className="premium-listings-page">

      {/* HEADER */}
      <div className="premium-header">

        <div className="header-left">

          <Link
            to="/farmer-dashboard"
            className="back-btn"
          >
            <ArrowLeft size={20} />
          </Link>

          <div>

            <span className="page-tag">
              FARMER MARKETPLACE
            </span>

            <h1>
              My Livestock Listings
            </h1>

            <p>
              Manage your livestock marketplace postings professionally.
            </p>

          </div>

        </div>

        <Link
          to="/post"
          className="create-btn"
        >
          <PlusCircle size={18} />
          Create Listing
        </Link>

      </div>

      {/* STATS */}
      <section className="stats-grid">

        <StatCard
          icon={<PackageCheck />}
          value="12"
          label="Active Listings"
          note="+2 this week"
        />

        <StatCard
          icon={<Clock3 />}
          value="3"
          label="Pending Review"
          note="Awaiting verification"
        />

        <StatCard
          icon={<TrendingUp />}
          value="409"
          label="Marketplace Views"
          note="Buyer engagement"
        />

        <StatCard
          icon={<Wallet />}
          value="₱245K"
          label="Estimated Value"
          note="Combined listing worth"
        />

      </section>

      {/* TOOLBAR */}
      <section className="toolbar-section">

        <div className="search-box">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search livestock..."
          />

        </div>

        <div className="toolbar-actions">

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

          <button className="filter-btn">
            <Filter size={18} />
            Filters
          </button>

        </div>

      </section>

      {/* LISTINGS */}
      <section className="premium-livestock-grid">

        {listings.map((item) => (

          <div
            className="premium-card"
            key={item.id}
          >

            {/* IMAGE */}
            <div className="premium-image-wrapper">

              <img
                src={item.image}
                alt={item.breed}
              />

              <span className="premium-badge">
                VERIFIED
              </span>

              <button className="favorite-btn">
                ♡
              </button>

            </div>

            {/* BODY */}
            <div className="premium-card-body">

              <div className="premium-card-top">

                <div>

                  <h3>
                    {item.breed}
                  </h3>

                  <p>
                    <MapPin size={15} />

                    {item.location} • {item.age}
                  </p>

                </div>

                <h2>
                  ₱{item.price.toLocaleString()}
                </h2>

              </div>

              <button className="details-btn">
                View Details
              </button>

            </div>

          </div>

        ))}

      </section>

    </div>
  );
}

function StatCard({
  icon,
  value,
  label,
  note,
}) {
  return (
    <div className="stat-card">

      <div className="stat-icon">
        {icon}
      </div>

      <h2>{value}</h2>

      <p>{label}</p>

      <small>{note}</small>

    </div>
  );
}

export default Listings;