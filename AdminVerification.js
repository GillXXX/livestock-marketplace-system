import {
  Search,
  Eye,
  CheckCircle,
  XCircle,
  FileText,
  ArrowLeft,
  Download,
  ShieldCheck,
  AlertTriangle,
  Clock,
  Filter,
  MoreHorizontal,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./AdminVerification.css";

function AdminVerification() {
  const documents = [
    {
      id: "DOC-001",
      farmer: "Almyr Belenson",
      livestock: "Swine",
      document: "Health Certificate",
      file: "swine-health-certificate.pdf",
      date: "May 20, 2026",
      status: "Pending",
    },
    {
      id: "DOC-002",
      farmer: "Mario Santos",
      livestock: "Cattle",
      document: "BAI Transport Permit",
      file: "cattle-bai-permit.pdf",
      date: "May 19, 2026",
      status: "Approved",
    },
    {
      id: "DOC-003",
      farmer: "Juan Dela Cruz",
      livestock: "Goat",
      document: "Vaccination Record",
      file: "goat-vaccination-record.pdf",
      date: "May 18, 2026",
      status: "Rejected",
    },
  ];

  return (
    <div className="verification-page">
      <header className="verification-topbar">
        <div className="top-left">
          <Link to="/admin-dashboard" className="back-btn">
            <ArrowLeft size={20} />
          </Link>

          <div>
            <span>MAO Document Control</span>
            <h1>Document Verification</h1>
            <p>
              Review livestock health certificates, BAI permits, vaccination
              records, and MAO clearance files.
            </p>
          </div>
        </div>

        <button className="export-btn">
          <Download size={18} />
          Export Records
        </button>
      </header>

      <section className="verification-kpis">
        <KpiCard icon={<Clock />} value="14" label="Pending Review" tone="warning" />
        <KpiCard icon={<CheckCircle />} value="32" label="Approved Documents" tone="success" />
        <KpiCard icon={<AlertTriangle />} value="5" label="Rejected / Flagged" tone="danger" />
        <KpiCard icon={<ShieldCheck />} value="51" label="Total Submissions" tone="primary" />
      </section>

      <section className="verification-panel">
        <div className="panel-header">
          <div>
            <h3>Verification Queue</h3>
            <p>Process submitted livestock documents before transaction confirmation.</p>
          </div>

          <button className="more-btn">
            <MoreHorizontal size={22} />
          </button>
        </div>

        <div className="verification-toolbar">
          <div className="verification-search">
            <Search size={18} />
            <input placeholder="Search farmer, livestock, document, or file name..." />
          </div>

          <select>
            <option>All Document Types</option>
            <option>Health Certificate</option>
            <option>BAI Transport Permit</option>
            <option>Vaccination Record</option>
            <option>MAO Clearance</option>
          </select>

          <select>
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>

          <button className="filter-btn">
            <Filter size={17} />
            Filter
          </button>
        </div>

        <div className="table-responsive">
          <table className="verification-table">
            <thead>
              <tr>
                <th>Document ID</th>
                <th>Farmer</th>
                <th>Livestock</th>
                <th>Document Type</th>
                <th>File</th>
                <th>Date Submitted</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td>
                    <strong>{doc.id}</strong>
                  </td>

                  <td>
                    <div className="farmer-cell">
                      <div className="avatar">{doc.farmer.charAt(0)}</div>
                      <div>
                        <strong>{doc.farmer}</strong>
                        <p>Registered Farmer</p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span className="livestock-pill">{doc.livestock}</span>
                  </td>

                  <td>{doc.document}</td>

                  <td>
                    <div className="file-cell">
                      <FileText size={18} />
                      <span>{doc.file}</span>
                    </div>
                  </td>

                  <td>{doc.date}</td>

                  <td>
                    <span className={`doc-status ${doc.status.toLowerCase()}`}>
                      {doc.status}
                    </span>
                  </td>

                  <td>
                    <div className="verification-actions">
                      <button title="View Document">
                        <Eye size={17} />
                      </button>

                      <button title="Download File">
                        <Download size={17} />
                      </button>

                      <button title="Approve Document">
                        <CheckCircle size={17} />
                      </button>

                      <button className="danger" title="Reject Document">
                        <XCircle size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="verification-guide">
        <div>
          <h3>Livestock Verification Requirements</h3>
          <p>
            These requirements help standardize the verification stage of the
            livestock trading workflow.
          </p>
        </div>

        <div className="guide-grid">
          <GuideCard title="Swine" text="Veterinary certificate or MAO health clearance." />
          <GuideCard title="Cattle" text="Health certificate and BAI livestock transport permit." />
          <GuideCard title="Goat" text="Vaccination record and MAO clearance." />
          <GuideCard title="Poultry" text="Flock health declaration or health clearance." />
        </div>
      </section>
    </div>
  );
}

function KpiCard({ icon, value, label, tone }) {
  return (
    <div className={`verify-kpi ${tone}`}>
      <div className="kpi-icon">{icon}</div>
      <div>
        <h2>{value}</h2>
        <p>{label}</p>
      </div>
    </div>
  );
}

function GuideCard({ title, text }) {
  return (
    <div className="guide-card">
      <strong>{title}</strong>
      <p>{text}</p>
    </div>
  );
}

export default AdminVerification;