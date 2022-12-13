import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategories } from '../redux/categories/categories';
import './styles/Categories.css';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(changeCategories('change'));
  };

  return (
    <div className="categories-container">
      <p id="cat-parag">{status}</p>
      <button id="cat-btn" onClick={handleChange} type="button">
        Check status
      </button>
    </div>
  );
};

export default Categories;
