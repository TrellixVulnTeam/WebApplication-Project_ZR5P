import React from 'react'
import { Link } from 'react-router-dom'
import "./AdminPage.css";
function AdminPage() {
  return (
    <>
      <div className="container adminPage-wrapper">
        <h1 className="text-center">Roles of Admin</h1>
        <div className="container_link row">
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <Link to="/addBestSeller" className="btn btn-outline-dark">
              Add Best Seller Items
            </Link>
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <Link to="/displayBestSeller" className="btn btn-outline-dark">
              Display Best Seller Items
            </Link>
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <Link to="/addTrendProduct" className="btn btn-outline-dark">
              Add Trend Product Items
            </Link>
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <Link to="/displayTrendProduct" className="btn btn-outline-dark">
              Display Trend Product Items
            </Link>
          </div>
          <div className="text-center mt-3 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <Link to="/create-new-product" className="btn btn-outline-dark">
              Create A New Product
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage