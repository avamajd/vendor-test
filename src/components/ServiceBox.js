import React, { useState, useEffect } from 'react';
import "./service-box.scss";
import { connect } from "react-redux";

const ServiceBox = (props) => {
  const { serviceList, setServiceSelected, serviceSelected } = props;

  const handleSortClick = (val) => {
    setServiceSelected && setServiceSelected(val);
  }

  return (
    <div className="services-box">
      {
        serviceList && serviceList.restaurantFilters.map((item, index) => (
          <div key={item.value} className={`service-item ${serviceSelected === item.value ? "selected-item" : ""}`} onClick={() => handleSortClick(item.value)} >
            {item.title}
          </div>
        ))
      }
    </div>
  );
}

export default ServiceBox

