import {
  ArrowLeft,
  Search,
  Filter,
  FileCheck2,
  Clock,
  CheckCircle,
  AlertTriangle,
  Eye,
  Download,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Calendar,
  Wallet,
  TrendingUp,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./BuyerTransactions.css";

function BuyerTransactions() {
  const transactions = [
    {
      id: "TRX-001",
      livestock: "Large White Swine",
      seller: "Almyr Belenson",
      location: "Poblacion, Veruela",
      price: "₱12,000",
      date: "May 20, 2026",
      stage: "Negotiation",
      status: "Pending",
    },
    {
      id: "TRX-002",
      livestock: "Boer Goat",
      seller: "Juan Dela Cruz",
      location: "Sinobong, Veruela",
      price: "₱8,500",
      date: "May 18, 2026",
      stage: "Completed",
      status: "Completed",
    },
    {
      id: "TRX-003",
      livestock: "Brahman Cattle",
      seller: "Mario Santos",
      location: "La Fortuna, Veruela",
      price: "₱35,000",
      date: "May 15, 2026",
      stage: "Verification",
      status: "Verification",
    },
  ];

  return (
    <div className="buyer-transactions-page">
      <header className="transactions-header">
        <div className="header-left">
          <Link to="/buyer-dashboard" className="back-btn">
            <ArrowLeft size={20} />
          </Link>

          <div>
            <span className="page-tag">BUYER TRANSACTION CENTER</span>
            <h1>My Transactions</h1>
            <p>
              Track livestock inquiries, negotiations, verification progress,
              and completed purchase records.
            </p>
          </div>
        </div>
      </header>

      <section className="transaction-stats">
        <StatCard icon={<FileCheck2 />} value="8" label="Total Transactions" note="All purchase records" />
        <StatCard icon={<Clock />} value="3" label="Pending Deals" note="Awaiting seller action" />
        <StatCard icon={<CheckCircle />} value="4" label="Completed" note="Recorded purchases" />
        <StatCard icon={<Wallet />} value="₱55.5K" label="Purchase Value" note="Total estimated value" />
      </section>

      <section className="transaction-toolbar">
        <div className="transaction-search">
          <Search size={18} />
          <input type="text" placeholder="Search transaction, seller, livestock..." />
        </div>

        <select>
          <option>All Status</option>
          <option>Pending</option>
          <option>Verification</option>
          <option>Completed</option>
          <option>Flagged</option>
        </select>

        <select>
          <option>All Livestock</option>
          <option>Swine</option>
          <option>Cattle</option>
          <option>Goat</option>
          <option>Poultry</option>
        </select>

        <button>
          <Filter size={17} />
          Filter
        </button>
      </section>

      <section className="transactions-layout">
        <div className="transactions-card">
          <div className="card-header">
            <div>
              <h3>Purchase Transaction Records</h3>
              <p>Monitor every livestock deal through the structured workflow.</p>
            </div>

            <button className="export-btn">
              <Download size={17} />
              Export
            </button>
          </div>

          <div className="transaction-list">
            {transactions.map((item) => (
              <div className="premium-transaction-card" key={item.id}>
                <div className="transaction-top">
                  <div className="transaction-left">
                    <div className="transaction-icon-box">
                      <FileCheck2 size={24} />
                    </div>

                    <div>
                      <div className="transaction-heading">
                        <h3>{item.livestock}</h3>

                        <span className="transaction-id">
                          {item.id}
                        </span>
                      </div>

                      <p className="seller-name">
                        Seller: {item.seller}
                      </p>

                      <div className="transaction-meta">
                        <span>
                          <MapPin size={14} />
                          {item.location}
                        </span>

                        <span>
                          <Calendar size={14} />
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="transaction-right">
                    <strong>{item.price}</strong>

                    <span
                      className={
                        item.status === "Completed"
                          ? "premium-status completed"
                          : item.status === "Verification"
                          ? "premium-status verification"
                          : "premium-status pending"
                      }
                    >
                      {item.status}
                    </span>
                  </div>
                </div>

                <div className="transaction-center">
                  <div className="workflow-wrapper">
                    <div className="workflow-header">
                      <h4>Transaction Workflow</h4>
                      <p>Current Stage: {item.stage}</p>
                    </div>

                    <Workflow stage={item.stage} />
                  </div>
                </div>

                <div className="transaction-footer">
                  <div className="transaction-info-box">
                    <ShieldCheck size={18} />

                    <div>
                      <strong>MAO Verified Transaction</strong>
                      <p>
                        Livestock documents and seller credentials are validated
                        before final confirmation.
                      </p>
                    </div>
                  </div>

                  <div className="premium-actions">
                    <button className="view-btn-premium">
                      <Eye size={17} />
                      View Details
                    </button>

                    <button className="message-btn-premium">
                      <MessageCircle size={17} />
                      Contact Seller
                    </button>

                    <button className="download-btn-premium">
                      <Download size={17} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="transaction-side-panel">
          <div className="side-panel-card">
            <h3>Trading Workflow</h3>
            <p>
              Each livestock transaction follows a structured process before it
              becomes a completed record.
            </p>

            <div className="workflow-guide">
              <GuideItem number="1" title="Inquiry" text="Buyer sends interest to seller." />
              <GuideItem number="2" title="Negotiation" text="Price and terms are discussed." />
              <GuideItem number="3" title="Verification" text="Documents are reviewed." />
              <GuideItem number="4" title="Confirmation" text="Both parties confirm deal." />
              <GuideItem number="5" title="Completed" text="Transaction is recorded." />
            </div>
          </div>

          <div className="side-panel-card">
            <h3>Transaction Health</h3>

            <HealthItem
              icon={<ShieldCheck />}
              title="Verified Sellers"
              text="All listed sellers are monitored by MAO."
            />

            <HealthItem
              icon={<TrendingUp />}
              title="Transparent Pricing"
              text="Prices are visible before negotiation."
            />

            <HealthItem
              icon={<AlertTriangle />}
              title="Report Issue"
              text="Flag suspicious or incomplete transactions."
            />
          </div>
        </aside>
      </section>
    </div>
  );
}

function StatCard({ icon, value, label, note }) {
  return (
    <div className="transaction-stat-card">
      <div className="stat-icon">{icon}</div>
      <h2>{value}</h2>
      <p>{label}</p>
      <small>{note}</small>
    </div>
  );
}

function Workflow({ stage }) {
  const steps = ["Inquiry", "Negotiation", "Verification", "Confirmation", "Completed"];
  const activeIndex = steps.indexOf(stage);

  return (
    <div className="workflow-line">
      {steps.map((step, index) => (
        <span
          key={step}
          className={
            index < activeIndex
              ? "done"
              : index === activeIndex
              ? "active"
              : ""
          }
        ></span>
      ))}
    </div>
  );
}

function GuideItem({ number, title, text }) {
  return (
    <div className="guide-item">
      <span>{number}</span>

      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

function HealthItem({ icon, title, text }) {
  return (
    <div className="health-item">
      <div>{icon}</div>

      <section>
        <strong>{title}</strong>
        <p>{text}</p>
      </section>
    </div>
  );
}

export default BuyerTransactions;