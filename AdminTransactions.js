import {
  Search,
  Eye,
  AlertTriangle,
  ArrowLeft,
  Calendar,
  Download,
  CheckCircle,
  Clock,
  FileCheck2,
  Flag,
  MoreHorizontal,
  TrendingUp,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./AdminTransactions.css";

function AdminTransactions() {
  const transactions = [
    {
      id: "TRX-001",
      livestock: "Swine",
      seller: "Almyr Belenson",
      buyer: "Pedro Reyes",
      amount: "₱12,000",
      date: "May 20, 2026",
      stage: "Completed",
      status: "Completed",
    },
    {
      id: "TRX-002",
      livestock: "Goat",
      seller: "Juan Dela Cruz",
      buyer: "Maria Santos",
      amount: "₱8,500",
      date: "May 21, 2026",
      stage: "Verification",
      status: "Pending",
    },
    {
      id: "TRX-003",
      livestock: "Cattle",
      seller: "Mario Santos",
      buyer: "Jose Lim",
      amount: "₱35,000",
      date: "May 22, 2026",
      stage: "Negotiation",
      status: "Flagged",
    },
  ];

  return (
    <div className="admin-transactions-page">
      <header className="transactions-top">
        <div className="title-area">
          <Link to="/admin-dashboard" className="back-btn">
            <ArrowLeft size={20} />
          </Link>

          <div>
            <span>MAO Transaction Monitoring</span>
            <h1>Transaction Management</h1>
            <p>
              Track livestock trades from inquiry to completion and monitor
              suspicious or pending transactions.
            </p>
          </div>
        </div>

        <button className="export-btn">
          <Download size={18} />
          Export Report
        </button>
      </header>

      <section className="transaction-stats">
        <StatCard icon={<FileCheck2 />} value="34" label="Completed" trend="+18% this month" />
        <StatCard icon={<Clock />} value="12" label="Pending" trend="Awaiting verification" />
        <StatCard icon={<AlertTriangle />} value="3" label="Flagged" trend="Needs MAO review" />
        <StatCard icon={<TrendingUp />} value="₱245K" label="Trade Value" trend="Recorded sales" />
      </section>

      <section className="workflow-overview">
        <div>
          <h3>Structured Trading Workflow</h3>
          <p>Every livestock transaction must pass these required stages.</p>
        </div>

        <div className="workflow-steps">
          <div>Inquiry</div>
          <div>Negotiation</div>
          <div>Verification</div>
          <div>Confirmation</div>
          <div>Completed</div>
        </div>
      </section>

      <section className="transaction-toolbar">
        <div className="transaction-search">
          <Search size={18} />
          <input placeholder="Search transaction, buyer, seller..." />
        </div>

        <select>
          <option>All Status</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Flagged</option>
        </select>

        <select>
          <option>All Livestock</option>
          <option>Swine</option>
          <option>Cattle</option>
          <option>Goat</option>
          <option>Poultry</option>
        </select>

        <button className="date-btn">
          <Calendar size={17} />
          Date Filter
        </button>
      </section>

      <section className="transactions-card">
        <div className="card-header">
          <div>
            <h3>Transaction Records</h3>
            <p>Monitor complete transaction history and workflow progress.</p>
          </div>

          <MoreHorizontal size={22} />
        </div>

        <div className="table-responsive">
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Transaction</th>
                <th>Livestock</th>
                <th>Parties</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Workflow</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((trx) => (
                <tr key={trx.id}>
                  <td>
                    <strong>{trx.id}</strong>
                    <small>Marketplace trade</small>
                  </td>

                  <td>{trx.livestock}</td>

                  <td>
                    <strong>{trx.seller}</strong>
                    <small>Buyer: {trx.buyer}</small>
                  </td>

                  <td className="amount">{trx.amount}</td>

                  <td>{trx.date}</td>

                  <td>
                    <Workflow stage={trx.stage} />
                    <small className="stage-label">{trx.stage}</small>
                  </td>

                  <td>
                    <span className={`trx-status ${trx.status.toLowerCase()}`}>
                      {trx.status}
                    </span>
                  </td>

                  <td>
                    <div className="transaction-actions">
                      <button title="View">
                        <Eye size={17} />
                      </button>

                      <button title="Approve">
                        <CheckCircle size={17} />
                      </button>

                      <button title="Flag">
                        <Flag size={17} />
                      </button>

                      <button className="danger" title="Issue">
                        <AlertTriangle size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, value, label, trend }) {
  return (
    <div className="transaction-stat-card">
      <div className="stat-icon">{icon}</div>
      <h2>{value}</h2>
      <p>{label}</p>
      <small>{trend}</small>
    </div>
  );
}

function Workflow({ stage }) {
  const steps = ["Inquiry", "Negotiation", "Verification", "Confirmation", "Completed"];
  const activeIndex = steps.indexOf(stage);

  return (
    <div className="workflow-box">
      {steps.map((step, index) => (
        <span
          key={step}
          className={
            index < activeIndex ? "done" : index === activeIndex ? "active" : ""
          }
        ></span>
      ))}
    </div>
  );
}

export default AdminTransactions;