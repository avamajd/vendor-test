import React, { useState, useEffect } from 'react';
import "./sorting-box.scss";
import { connect } from "react-redux";

const SortingBox = (props) => {
  const { sortingList, setSortSelected, sortSelected } = props;

  const handleSortClick = (val) => {
    setSortSelected && setSortSelected(val)
  }

  return (
    <div className="sortings-box">
      {
        sortingList && sortingList.restaurantFilters.map((item, index) => (
          <div key={item.value} className={`sort-item ${sortSelected === item.value ? "selected-item" : ""}`} onClick={() => handleSortClick(item.value)} >
            {item.title}
          </div>
        ))
      }
    </div>
  );
}

export default SortingBox

