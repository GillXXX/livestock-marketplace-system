import {
  Search,
  Filter,
  Heart,
  MapPin,
  ShieldCheck,
  Star,
  SlidersHorizontal,
  Eye,
} from "lucide-react";

import "./Marketplace.css";

function Marketplace() {
  const listings = [
    {
      id: 1,
      name: "Brahman Cattle",
      type: "Cattle",
      breed: "Brahman",
      price: 45000,
      weight: "210 kg",
      age: "2 years",
      location: "Veruela, Agusan del Sur",
      seller: "Mario Santos",
      image:
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1400&auto=format&fit=crop",
      verified: true,
    },
    {
      id: 2,
      name: "Boer Goat",
      type: "Goat",
      breed: "Boer",
      price: 8500,
      weight: "32 kg",
      age: "5 months",
      location: "Poblacion, Veruela",
      seller: "Juan Dela Cruz",
      image:
        "https://images.unsplash.com/photo-1524024973431-2ad916746881?q=80&w=1400&auto=format&fit=crop",
      verified: true,
    },
    {
      id: 3,
      name: "Large White Swine",
      type: "Swine",
      breed: "Large White",
      price: 12000,
      weight: "65 kg",
      age: "8 months",
      location: "La Fortuna, Veruela",
      seller: "Almyr Belenson",
      image:
        "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1400&auto=format&fit=crop",
      verified: true,
    },
  ];

  return (
    <div className="marketplace-page">
      <section className="market-hero">
        <div>
          <span>BUYER MARKETPLACE</span>
          <h1>Find verified livestock from local farmers.</h1>
          <p>
            Browse swine, cattle, goats, and poultry listings with transparent
            pricing, seller information, and farm location visibility.
          </p>
        </div>

        <div className="hero-card">
          <h3>56</h3>
          <p>Available Listings</p>
        </div>
      </section>

      <section className="market-toolbar">
        <div className="market-search">
          <Search size={20} />
          <input placeholder="Search livestock, breed, seller, or location..." />
        </div>

        <select>
          <option>All Livestock</option>
          <option>Swine</option>
          <option>Cattle</option>
          <option>Goat</option>
          <option>Poultry</option>
        </select>

        <select>
          <option>Price Range</option>
          <option>₱1,000 - ₱10,000</option>
          <option>₱10,000 - ₱30,000</option>
          <option>₱30,000 above</option>
        </select>

        <button>
          <SlidersHorizontal size={18} />
          Filters
        </button>
      </section>

      <section className="market-layout">
        <aside className="filter-panel">
          <div className="filter-title">
            <Filter size={20} />
            <h3>Filters</h3>
          </div>

          <div className="filter-group">
            <label>Livestock Type</label>
            <div><input type="checkbox" /> Swine</div>
            <div><input type="checkbox" /> Cattle</div>
            <div><input type="checkbox" /> Goat</div>
            <div><input type="checkbox" /> Poultry</div>
          </div>

          <div className="filter-group">
            <label>Verification</label>
            <div><input type="checkbox" /> Verified sellers only</div>
            <div><input type="checkbox" /> With health documents</div>
          </div>

          <div className="filter-group">
            <label>Location</label>
            <div><input type="checkbox" /> Veruela only</div>
            <div><input type="checkbox" /> Nearby barangays</div>
          </div>
        </aside>

        <main className="market-content">
          <div className="market-section-header">
            <div>
              <h2>Available Livestock</h2>
              <p>Showing verified marketplace listings for buyers.</p>
            </div>

            <select>
              <option>Sort by Newest</option>
              <option>Lowest Price</option>
              <option>Highest Price</option>
              <option>Nearest Location</option>
            </select>
          </div>

          <div className="market-grid">
            {listings.map((item) => (
              <div className="market-card" key={item.id}>
                <div className="market-image">
                  <img src={item.image} alt={item.name} />

                  <span className="verified-pill">
                    <ShieldCheck size={14} />
                    Verified
                  </span>

                  <button className="heart-btn">
                    <Heart size={20} />
                  </button>
                </div>

                <div className="market-body">
                  <div className="market-card-head">
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.breed} • {item.age}</p>
                    </div>

                    <h4>₱{item.price.toLocaleString()}</h4>
                  </div>

                  <div className="market-info">
                    <div>
                      <span>Weight</span>
                      <strong>{item.weight}</strong>
                    </div>

                    <div>
                      <span>Type</span>
                      <strong>{item.type}</strong>
                    </div>
                  </div>

                  <div className="seller-box">
                    <div>
                      <strong>{item.seller}</strong>
                      <p>
                        <MapPin size={14} />
                        {item.location}
                      </p>
                    </div>

                    <span>
                      <Star size={14} />
                      4.8
                    </span>
                  </div>

                  <button className="view-details-btn">
                    <Eye size={18} />
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>
    </div>
  );
}

export default Marketplace;