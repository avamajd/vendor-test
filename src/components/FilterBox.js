import React, { useState, useEffect } from 'react';
import "./filter-box.scss";
import { connect } from "react-redux";

const FilterBox = (props) => {
  const { filterList, setFilterSelected, filterSelected } = props;

  const handleSortClick = (val) => {
    setFilterSelected && setFilterSelected(val)
  }

  return (
    <div className="filters-box">
      {
        filterList && filterList.restaurantFilters.map((item, index) => (
          <div key={item.value} className={`filter-item ${filterSelected === item.value ? "selected-item" : ""}`} onClick={() => handleSortClick(item.value)} >
            {item.title}
          </div>
        ))
      }
    </div>
  );
}

export default FilterBox

