import React, { useState, useEffect } from 'react';
import "./vendor-list.scss";
import SortingBox from "./SortingBox";
import FilterBox from "./FilterBox";
import ServiceBox from "./ServiceBox";
import { getFilters } from "../actions/filterActions";
import { getVendorList } from "../actions/vendorActions";
import { connect } from "react-redux";

const VendorList = (props) => {
  const [showFilters, setShowFilters] = useState(false);

  const [filterList, setFilterList] = useState([]);
  const [vendorList, setVendorList] = useState([]);
  //
  const [sortSelected, setSortSelected] = useState("");
  const [filterSelected, setFilterSelected] = useState("");
  // todo:
  const [serviceSelected, setServiceSelected] = useState("");

  useEffect(() => {
    props.getFilters();
    props.getVendorList(sortSelected, filterSelected, serviceSelected);
  }, [])

  //**************************************

  useEffect(() => {
    setFilterList(props.filters)
  }, [props.filters])

  //**************************************

  useEffect(() => {
    props.getVendorList(sortSelected, filterSelected, serviceSelected);
  }, [sortSelected, filterSelected, serviceSelected])

  //**************************************

  useEffect(() => {
    setVendorList(props.vendors)
  }, [props.vendors])

  //**************************************  

  const handleFilterClick = () => {
    setShowFilters(true)
  }

  const handleShowResult = () => {
    setShowFilters(false)
  }

  //**************************************  

  return (
    <div>
      {
        !showFilters ?
          <div className="vendor-wrapper">
            <SortingBox sortingList={filterList[1]} setSortSelected={setSortSelected} sortSelected={sortSelected} />

            <div className="vendor-list">
              {
                vendorList && vendorList.length && vendorList.map((item, index) => (
                  <div key={item.data.id} className="vendor-item">
                    <div className="title-part">
                      <div className="logo">
                        <img src={`${item.data.logo}`} />
                      </div>
                      <div className="title-text">
                        <span>
                          {item.data.title}
                        </span>
                        <span>
                          {item.data.description}
                        </span>
                        <span>
                          {item.data.address}
                        </span>
                      </div>
                    </div>

                    {
                      item.type === "VENDOR" &&
                      <div className="rate-part">
                        <span>
                          {item.data.commentCount} نظر
                        </span>
                        <span>
                          {Math.round(item.data.rating * 10) / 10}
                        </span>
                      </div>
                    }
                  </div>
                ))
              }
            </div>

            <div>
              <button
                className="filter-button"
                onClick={handleFilterClick}
              >فیلترها</button>
            </div>
          </div>

          :
          <div className="filters-main">
            <FilterBox filterList={filterList[0]} setFilterSelected={setFilterSelected} filterSelected={filterSelected}
            />

            <ServiceBox serviceList={filterList[2]} setServiceSelected={setServiceSelected} serviceSelected={serviceSelected} />

            <button
              className="show-button"
              onClick={handleShowResult}
            >نمایش نتایج</button>

          </div>
      }
    </div>
  );
}

const mapStateToProps = state => ({
  filters: state.filter.filters,
  vendors: state.vendor.vendors,
});

export default connect(mapStateToProps, { getFilters, getVendorList })(VendorList);