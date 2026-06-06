import {
  ArrowLeft,
  BarChart3,
  Users,
  ShoppingBag,
  TrendingUp,
  Download,
  Printer,
  Calendar,
  FileSpreadsheet,
  PieChart,
  Filter,
  FileText,
  CheckCircle,
  Clock,
  AlertTriangle,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./AdminReports.css";

function AdminReports() {
  const livestockData = [
    { type: "Swine", total: 22, percent: "42%", value: "₱168,000" },
    { type: "Goat", total: 14, percent: "27%", value: "₱76,500" },
    { type: "Cattle", total: 11, percent: "21%", value: "₱210,000" },
    { type: "Poultry", total: 9, percent: "10%", value: "₱32,500" },
  ];

  return (
    <div className="reports-page">
      <header className="reports-hero">
        <Link to="/admin-dashboard" className="back-btn">
          <ArrowLeft size={20} />
        </Link>

        <div>
          <span className="eyebrow">MAO Monitoring and Analytics</span>
          <h1>Reports & Analytics</h1>
          <p>
            Generate official summaries for livestock trading activities,
            users, verifications, and recorded transactions in Veruela.
          </p>
        </div>
      </header>

      <section className="report-actions">
        <div className="filter-box">
          <Calendar size={18} />
          <select>
            <option>May 2026</option>
            <option>April 2026</option>
            <option>March 2026</option>
          </select>
        </div>

        <div className="filter-box">
          <Filter size={18} />
          <select>
            <option>All Livestock</option>
            <option>Swine</option>
            <option>Cattle</option>
            <option>Goat</option>
            <option>Poultry</option>
          </select>
        </div>

        <button className="primary-action">
          <Download size={18} />
          Export PDF
        </button>

        <button className="secondary-action">
          <FileSpreadsheet size={18} />
          Export Excel
        </button>

        <button className="print-action">
          <Printer size={18} />
          Print
        </button>
      </section>

      <section className="analytics-grid">
        <MetricCard
          icon={<Users />}
          label="Total Farmers"
          value="82"
          change="+8 this month"
        />

        <MetricCard
          icon={<ShoppingBag />}
          label="Total Buyers"
          value="46"
          change="+4 this month"
        />

        <MetricCard
          icon={<BarChart3 />}
          label="Livestock Sold"
          value="34"
          change="+18% growth"
        />

        <MetricCard
          icon={<TrendingUp />}
          label="Trade Value"
          value="₱245K"
          change="Recorded this month"
        />
      </section>

      <section className="reports-layout">
        <div className="report-card large">
          <div className="card-title">
            <div>
              <h3>Livestock Performance</h3>
              <p>Breakdown of listings and transactions by livestock type.</p>
            </div>

            <PieChart size={24} />
          </div>

          <div className="livestock-performance">
            {livestockData.map((item) => (
              <div className="performance-row" key={item.type}>
                <div>
                  <strong>{item.type}</strong>
                  <p>{item.total} records • {item.value}</p>
                </div>

                <div className="progress-area">
                  <span>{item.percent}</span>
                  <div className="progress-bar">
                    <div style={{ width: item.percent }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="report-card">
          <div className="card-title">
            <div>
              <h3>Report Status</h3>
              <p>Generated monitoring documents.</p>
            </div>

            <FileText size={24} />
          </div>

          <ReportItem title="Monthly Sales Report" status="Ready" />
          <ReportItem title="Livestock Category Report" status="Ready" />
          <ReportItem title="Verification Report" status="Draft" />
          <ReportItem title="User Registration Report" status="Ready" />
        </div>
      </section>

      <section className="reports-layout bottom">
        <div className="report-card">
          <div className="card-title">
            <div>
              <h3>Verification Summary</h3>
              <p>Status of submitted livestock documents.</p>
            </div>
          </div>

          <StatusSummary
            icon={<CheckCircle />}
            title="Approved Documents"
            value="32"
            type="success"
          />

          <StatusSummary
            icon={<Clock />}
            title="Pending Review"
            value="14"
            type="warning"
          />

          <StatusSummary
            icon={<AlertTriangle />}
            title="Rejected / Flagged"
            value="5"
            type="danger"
          />
        </div>

        <div className="report-card large">
          <div className="card-title">
            <div>
              <h3>Monthly Transaction Report</h3>
              <p>Official transaction summary for selected period.</p>
            </div>
          </div>

          <div className="table-responsive">
            <table className="professional-table">
              <thead>
                <tr>
                  <th>Livestock</th>
                  <th>Completed</th>
                  <th>Pending</th>
                  <th>Flagged</th>
                  <th>Total Value</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Swine</td>
                  <td>14</td>
                  <td>5</td>
                  <td>1</td>
                  <td>₱168,000</td>
                </tr>

                <tr>
                  <td>Goat</td>
                  <td>9</td>
                  <td>3</td>
                  <td>1</td>
                  <td>₱76,500</td>
                </tr>

                <tr>
                  <td>Cattle</td>
                  <td>6</td>
                  <td>2</td>
                  <td>1</td>
                  <td>₱210,000</td>
                </tr>

                <tr>
                  <td>Poultry</td>
                  <td>5</td>
                  <td>2</td>
                  <td>0</td>
                  <td>₱32,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

function MetricCard({ icon, label, value, change }) {
  return (
    <div className="metric-card">
      <div className="metric-icon">{icon}</div>
      <h2>{value}</h2>
      <p>{label}</p>
      <small>{change}</small>
    </div>
  );
}

function ReportItem({ title, status }) {
  return (
    <div className="report-item">
      <div>
        <strong>{title}</strong>
        <p>Generated report file</p>
      </div>

      <span className={status === "Ready" ? "ready" : "draft"}>
        {status}
      </span>
    </div>
  );
}

function StatusSummary({ icon, title, value, type }) {
  return (
    <div className={`status-summary ${type}`}>
      <div>{icon}</div>

      <section>
        <strong>{title}</strong>
        <p>{value} records</p>
      </section>
    </div>
  );
}

export default AdminReports;