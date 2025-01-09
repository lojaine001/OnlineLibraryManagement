import React from 'react';
import { CustomFilterProps } from '@/types';  // Import the interface

const CustomFilter: React.FC<CustomFilterProps> = ({ title }) => {
  return (
    <div className="custom-filter">
      <label htmlFor={title} className="custom-filter__label">
        {title.charAt(0).toUpperCase() + title.slice(1)}:
      </label>
      <select id={title} className="custom-filter__dropdown">
        <option value="">All {title}</option>
        {/* You can populate these options dynamically based on available data */}
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
    </div>
  );
};

export default CustomFilter;
