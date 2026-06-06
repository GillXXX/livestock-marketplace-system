import {
  ArrowLeft,
  MapPin,
  Search,
  Filter,
  Users,
  ClipboardCheck,
  Navigation,
  Eye,
  LocateFixed,
  Layers,
  Activity,
  AlertTriangle,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./AdminMapMonitoring.css";

function AdminMapMonitoring() {
  const locations = [
    {
      id: 1,
      farmer: "Almyr Belenson",
      livestock: "Swine",
      barangay: "Poblacion",
      address: "Poblacion, Veruela",
      listings: 3,
      status: "Active",
      risk: "Normal",
    },
    {
      id: 2,
      farmer: "Mario Santos",
      livestock: "Cattle",
      barangay: "La Fortuna",
      address: "La Fortuna, Veruela",
      listings: 2,
      status: "Active",
      risk: "Normal",
    },
    {
      id: 3,
      farmer: "Juan Dela Cruz",
      livestock: "Goat",
      barangay: "Sinobong",
      address: "Sinobong, Veruela",
      listings: 1,
      status: "Pending",
      risk: "Review",
    },
  ];

  return (
    <div className="map-admin-page">
      <header className="map-topbar">
        <div className="map-title-group">
          <Link to="/admin-dashboard" className="map-back-btn">
            <ArrowLeft size={20} />
          </Link>

          <div>
            <span className="eyebrow">MAO LOCATION MONITORING</span>
            <h1>Map Monitoring</h1>
            <p>
              Monitor seller locations, livestock listing distribution, and farm
              activity within Veruela, Agusan del Sur.
            </p>
          </div>
        </div>

        <button className="primary-action">
          <Navigation size={18} />
          Center Veruela Map
        </button>
      </header>

      <section className="map-kpi-grid">
        <MapStat icon={<Users />} value="23" label="Seller Locations" trend="+4 this month" />
        <MapStat icon={<ClipboardCheck />} value="56" label="Mapped Listings" trend="Active marketplace records" />
        <MapStat icon={<Layers />} value="4" label="Livestock Types" trend="Swine, cattle, goat, poultry" />
        <MapStat icon={<LocateFixed />} value="100%" label="Within Veruela" trend="Scope compliant" />
      </section>

      <section className="map-filter-panel">
        <div className="map-search-box">
          <Search size={18} />
          <input placeholder="Search farmer, barangay, livestock type..." />
        </div>

        <select>
          <option>All Livestock</option>
          <option>Swine</option>
          <option>Cattle</option>
          <option>Goat</option>
          <option>Poultry</option>
        </select>

        <select>
          <option>All Barangays</option>
          <option>Poblacion</option>
          <option>La Fortuna</option>
          <option>Sinobong</option>
        </select>

        <button>
          <Filter size={17} />
          Apply Filter
        </button>
      </section>

      <section className="map-main-grid">
        <div className="map-card map-card-large">
          <div className="card-heading">
            <div>
              <h3>Seller Location Overview</h3>
              <p>Approximate visual monitoring map for seller/farm locations.</p>
            </div>

            <span className="live-badge">
              <Activity size={15} />
              Live Preview
            </span>
          </div>

          <div className="professional-map">
            <div className="route route-a"></div>
            <div className="route route-b"></div>
            <div className="route route-c"></div>

            <MapMarker className="marker-a" count="3" name="Almyr Belenson" text="Swine • Poblacion" />
            <MapMarker className="marker-b" count="2" name="Mario Santos" text="Cattle • La Fortuna" />
            <MapMarker className="marker-c warning" count="1" name="Juan Dela Cruz" text="Goat • Sinobong" />

            <div className="map-center-label">
              <strong>Veruela, Agusan del Sur</strong>
              <p>Seller/farm location monitoring area</p>
            </div>

            <div className="map-legend">
              <span><i className="active-dot"></i> Active</span>
              <span><i className="pending-dot"></i> Pending Review</span>
            </div>
          </div>
        </div>

        <aside className="map-card">
          <div className="card-heading">
            <div>
              <h3>Seller Records</h3>
              <p>Registered farm/seller locations</p>
            </div>
            <strong className="record-count">{locations.length}</strong>
          </div>

          <div className="location-records">
            {locations.map((item) => (
              <div className="location-record" key={item.id}>
                <div className="record-icon">
                  <MapPin size={20} />
                </div>

                <div className="record-info">
                  <strong>{item.farmer}</strong>
                  <p>{item.address}</p>

                  <div className="record-tags">
                    <span>{item.livestock}</span>
                    <span>{item.listings} listing(s)</span>
                  </div>
                </div>

                <div className="record-action">
                  <span className={item.status === "Active" ? "status-active" : "status-pending"}>
                    {item.status}
                  </span>

                  <button>
                    <Eye size={17} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="map-insights-grid">
        <div className="map-card">
          <h3>Livestock Distribution</h3>

          <Distribution label="Swine" value="22" width="72%" />
          <Distribution label="Goat" value="14" width="48%" />
          <Distribution label="Cattle" value="11" width="38%" />
          <Distribution label="Poultry" value="9" width="30%" />
        </div>

        <div className="map-card">
          <h3>Monitoring Alerts</h3>

          <div className="alert-row">
            <AlertTriangle size={20} />
            <div>
              <strong>Pending location review</strong>
              <p>1 seller location needs MAO validation.</p>
            </div>
          </div>

          <div className="alert-row normal">
            <MapPin size={20} />
            <div>
              <strong>Coverage status</strong>
              <p>All current listings are within Veruela scope.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MapStat({ icon, value, label, trend }) {
  return (
    <div className="map-stat-card">
      <div className="map-stat-icon">{icon}</div>
      <h2>{value}</h2>
      <p>{label}</p>
      <small>{trend}</small>
    </div>
  );
}

function MapMarker({ className, count, name, text }) {
  return (
    <div className={`pro-marker ${className}`}>
      <span>{count}</span>

      <div className="marker-card">
        <strong>{name}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

function Distribution({ label, value, width }) {
  return (
    <div className="distribution-item">
      <div>
        <strong>{label}</strong>
        <span>{value}</span>
      </div>

      <div className="distribution-track">
        <div style={{ width }}></div>
      </div>
    </div>
  );
}

export default AdminMapMonitoring;