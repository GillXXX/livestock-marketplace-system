import {
  ImagePlus,
  MapPin,
  BadgeDollarSign,
  Weight,
  HeartPulse,
  Calendar,
  Tag,
  FileText,
  ArrowLeft,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Post.css";

function Post() {
  return (
    <div className="premium-post-page">

      {/* HEADER */}
      <div className="premium-post-header">

        <div className="header-left">

          <Link
            to="/listings"
            className="back-btn"
          >
            <ArrowLeft size={20} />
          </Link>

          <div>

            <span className="page-tag">
              LIVESTOCK MARKETPLACE
            </span>

            <h1>Create New Listing</h1>

            <p>
              Publish your livestock professionally and reach more verified buyers across the marketplace.
            </p>

          </div>

        </div>

      </div>

      {/* FORM */}
      <div className="premium-post-card">

        <form>

          {/* IMAGE UPLOAD */}
          <div className="premium-upload-box">

            <div className="upload-icon">
              <UploadCloud size={44} />
            </div>

            <h3>
              Upload Livestock Images
            </h3>

            <p>
              Drag & drop or upload JPG, PNG, or JPEG images.
            </p>

            <button
              type="button"
              className="upload-btn"
            >
              <ImagePlus size={18} />
              Choose Files
            </button>

            <input type="file" multiple />

          </div>

          {/* SECTION TITLE */}
          <div className="section-title">
            <ShieldCheck size={18} />
            Livestock Information
          </div>

          {/* GRID */}
          <div className="premium-form-grid">

            {/* TYPE */}
            <div className="form-group">

              <label>
                Livestock Type
              </label>

              <div className="input-wrapper">

                <Tag size={18} />

                <select>
                  <option>
                    Choose livestock type
                  </option>

                  <option>Swine</option>
                  <option>Cattle</option>
                  <option>Goat</option>
                  <option>Poultry</option>
                </select>

              </div>

            </div>

            {/* BREED */}
            <div className="form-group">

              <label>
                Breed
              </label>

              <div className="input-wrapper">

                <Tag size={18} />

                <input
                  type="text"
                  placeholder="Enter livestock breed"
                />

              </div>

            </div>

            {/* AGE */}
            <div className="form-group">

              <label>
                Age
              </label>

              <div className="input-wrapper">

                <Calendar size={18} />

                <input
                  type="text"
                  placeholder="Example: 8 months"
                />

              </div>

            </div>

            {/* WEIGHT */}
            <div className="form-group">

              <label>
                Weight
              </label>

              <div className="input-wrapper">

                <Weight size={18} />

                <input
                  type="text"
                  placeholder="Example: 120 kg"
                />

              </div>

            </div>

            {/* PRICE */}
            <div className="form-group">

              <label>
                Price
              </label>

              <div className="input-wrapper">

                <BadgeDollarSign size={18} />

                <input
                  type="text"
                  placeholder="Enter selling price"
                />

              </div>

            </div>

            {/* HEALTH */}
            <div className="form-group">

              <label>
                Health Status
              </label>

              <div className="input-wrapper">

                <HeartPulse size={18} />

                <input
                  type="text"
                  placeholder="Healthy / Vaccinated"
                />

              </div>

            </div>

          </div>

          {/* LOCATION */}
          <div className="form-group full-width">

            <label>
              Farm Location
            </label>

            <div className="input-wrapper">

              <MapPin size={18} />

              <input
                type="text"
                placeholder="Veruela, Agusan del Sur"
              />

            </div>

          </div>

          {/* DESCRIPTION */}
          <div className="form-group full-width">

            <label>
              Description
            </label>

            <div className="textarea-wrapper">

              <FileText size={18} />

              <textarea
                rows="6"
                placeholder="Provide complete livestock details, feeding history, vaccination records, and additional information..."
              ></textarea>

            </div>

          </div>

          {/* ACTIONS */}
          <div className="post-actions">

            <button
              type="button"
              className="draft-btn"
            >
              Save Draft
            </button>

            <button
              className="publish-btn"
              type="submit"
            >
              Publish Listing
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Post;