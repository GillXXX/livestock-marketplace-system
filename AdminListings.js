import {
  Search,
  Eye,
  CheckCircle,
  AlertTriangle,
  Trash2,
  ArrowLeft,
  Filter,
  MapPin,
  MoreHorizontal,
  ClipboardCheck,
  Clock,
  BadgeCheck,
  XCircle,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./AdminListings.css";

function AdminListings() {
  const listings = [
    {
      id: "LST-0101",
      livestock: "Swine",
      breed: "Large White",
      farmer: "Almyr Belenson",
      location: "Veruela",
      price: "₱12,000",
      status: "Pending",
      date: "May 23, 2026",
    },
    {
      id: "LST-0102",
      livestock: "Cattle",
      breed: "Brahman",
      farmer: "Mario Santos",
      location: "Veruela",
      price: "₱35,000",
      status: "Approved",
      date: "May 22, 2026",
    },
    {
      id: "LST-0103",
      livestock: "Goat",
      breed: "Boer Goat",
      farmer: "Juan Dela Cruz",
      location: "Veruela",
      price: "₱8,500",
      status: "Flagged",
      date: "May 21, 2026",
    },
  ];

  return (
    <div className="admin-listings-page">
      <header className="listings-header">
        <div className="header-left">
          <Link to="/admin-dashboard" className="back-btn">
            <ArrowLeft size={20} />
          </Link>

          <div>
            <span className="eyebrow">MAO Administration</span>
            <h1>Listings Approval</h1>
            <p>Review livestock posts, approve valid listings, flag suspicious records, and remove invalid marketplace entries.</p>
          </div>
        </div>

        <button className="export-btn">
          <ClipboardCheck size={18} />
          Approval Log
        </button>
      </header>

      <section className="listing-kpi-grid">
        <Kpi icon={<ClipboardCheck />} value="56" label="Total Listings" />
        <Kpi icon={<Clock />} value="14" label="Pending Review" />
        <Kpi icon={<BadgeCheck />} value="38" label="Approved" />
        <Kpi icon={<AlertTriangle />} value="4" label="Flagged" />
      </section>

      <section className="listing-toolbar">
        <div className="listing-search">
          <Search size={18} />
          <input placeholder="Search by livestock, farmer, ID, or location..." />
        </div>

        <select>
          <option>All Livestock Types</option>
          <option>Swine</option>
          <option>Cattle</option>
          <option>Goat</option>
          <option>Poultry</option>
        </select>

        <select>
          <option>All Status</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Flagged</option>
        </select>

        <button className="filter-btn">
          <Filter size={17} />
          Apply Filter
        </button>
      </section>

      <section className="listings-layout">
        <div className="listings-table-card">
          <div className="card-title">
            <div>
              <h3>Submitted Livestock Listings</h3>
              <p>Listings submitted by farmers for MAO review.</p>
            </div>

            <button className="more-btn">
              <MoreHorizontal size={20} />
            </button>
          </div>

          <div className="table-responsive">
            <table className="professional-table">
              <thead>
                <tr>
                  <th>Listing</th>
                  <th>Farmer</th>
                  <th>Location</th>
                  <th>Price</th>
                  <th>Date Posted</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {listings.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="listing-cell">
                        <div className="animal-icon">{getAnimalIcon(item.livestock)}</div>
                        <div>
                          <strong>{item.livestock}</strong>
                          <p>{item.breed} • {item.id}</p>
                        </div>
                      </div>
                    </td>

                    <td>
                      <strong>{item.farmer}</strong>
                      <p className="subtext">Farmer Account</p>
                    </td>

                    <td>
                      <div className="location-cell">
                        <MapPin size={15} />
                        {item.location}
                      </div>
                    </td>

                    <td>
                      <strong>{item.price}</strong>
                    </td>

                    <td>{item.date}</td>

                    <td>
                      <span className={`status-pill ${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </td>

                    <td>
                      <div className="action-set">
                        <button title="View Details">
                          <Eye size={17} />
                        </button>

                        <button className="approve" title="Approve Listing">
                          <CheckCircle size={17} />
                        </button>

                        <button className="flag" title="Flag Listing">
                          <AlertTriangle size={17} />
                        </button>

                        <button className="reject" title="Reject Listing">
                          <XCircle size={17} />
                        </button>

                        <button className="delete" title="Delete Listing">
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="approval-panel">
          <h3>Review Guidelines</h3>
          <p>Before approving a listing, ensure that the livestock details are complete and valid.</p>

          <div className="guideline">
            <CheckCircle size={18} />
            Complete livestock type, breed, age, and weight
          </div>

          <div className="guideline">
            <CheckCircle size={18} />
            Clear livestock photo uploaded
          </div>

          <div className="guideline">
            <CheckCircle size={18} />
            Reasonable price and valid seller location
          </div>

          <div className="guideline warning">
            <AlertTriangle size={18} />
            Flag listings with suspicious details
          </div>

          <div className="approval-summary">
            <div>
              <strong>Today’s Reviews</strong>
              <span>7 listings checked</span>
            </div>

            <div>
              <strong>Average Approval Time</strong>
              <span>12 minutes</span>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

function Kpi({ icon, value, label }) {
  return (
    <div className="listing-kpi-card">
      <div className="kpi-icon">{icon}</div>
      <h2>{value}</h2>
      <p>{label}</p>
    </div>
  );
}

function getAnimalIcon(type) {
  if (type === "Swine") return "🐖";
  if (type === "Cattle") return "🐄";
  if (type === "Goat") return "🐐";
  if (type === "Poultry") return "🐔";
  return "🐾";
}

export default AdminListings;