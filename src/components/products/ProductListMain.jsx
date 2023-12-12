/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Loader from 'components/common/loader/Loader';
import NoItemsFound from 'components/notFound/NoItemsFound';
import API from 'helpers/API';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ProductCard from './ProductCard';
import ProductsFilters from './ProductsFilters';

function ProductListMain({
  products,
  addtoCart,
  addToWishlist,
  homeScreenData,
  getProductList,
  loading,
}) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [subcategories, setSubcategories] = useState([]);
  // const url = process.env.REACT_APP_BASE_URL;
  const getSubcategory = async () => {
    try {
      const response = await API.get('subcategory');
      console.log(response);
      setSubcategories(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubcategory();
  }, []);

  const handleSubcategoryChange = (subcategory) => {
    // Handle the subcategory change, e.g., filter products based on the selected subcategory
    setSelectedSubcategory(subcategory);
  };

  const filteredProducts = selectedSubcategory
    ? products.filter((product) => product.subCategory === selectedSubcategory)
    : products;

  console.log('subcategory', subcategories);
  console.log('products', products);
  console.log('selectedsubcategory', selectedSubcategory);
  return (
    <div className="container-xxl">
      <div className="prodct-section">
        <div className="row">
          <ProductsFilters
            homeScreenData={homeScreenData}
            getProductList={getProductList}
          />

          {loading ? (
            <div className=" col-lg-9 col-md-12 col-sm-12 order-lg-2 order-1 order-md-1">
              <Loader />
            </div>
          ) : (
            <div className=" col-lg-9 col-md-12 col-sm-12 order-lg-2 order-1 order-md-1">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div className="product-grid-section-header">
                  <h1>Home Equipment&rsquo;s</h1>
                </div>
                <div
                  className="subcategory-dropdown"
                  style={{ flex: '0 0 auto', marginLeft: 16 }}
                >
                  <FormControl>
                    <InputLabel id="subcategory-label">Subcategory</InputLabel>
                    <Select
                      labelId="subcategory-label"
                      id="subcategory-select"
                      value={selectedSubcategory}
                      onChange={(e) => handleSubcategoryChange(e.target.value)}
                      style={{ width: '150px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {subcategories.map((subcategory) => (
                        <MenuItem key={subcategory} value={subcategory}>
                          {subcategory}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
              {/* <div className="product-grid-section-header">
                <h1>Home Equipment&rsquo;s</h1>
              </div>
              <div className="subcategory-dropdown">
                <FormControl fullWidth>
                  <InputLabel id="subcategory-label">
                    Select Subcategory
                  </InputLabel>
                  <Select
                    labelId="subcategory-label"
                    id="subcategory-select"
                    value={selectedSubcategory}
                    onChange={(e) => handleSubcategoryChange(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>Select Subcategory</em>
                    </MenuItem>
                    {subcategories.map((subcategory) => (
                      <MenuItem key={subcategory} value={subcategory}>
                        {subcategory}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div> */}
              {/* <div className="subcategory-dropdown">
                <select
                  value={selectedSubcategory}
                  onChange={(e) => handleSubcategoryChange(e.target.value)}
                >
                  <option value="">Select Subcategory</option>
                  {subcategories.map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
                </select>
              </div> */}
              {/* <div className="products-grid-body">
                {products.length ? (
                  products.map((product) => (
                    <ProductCard
                      product={product}
                      key={product._id}
                      addtoCart={addtoCart}
                      addToWishlist={addToWishlist}
                    />
                  ))
                ) : (
                  <NoItemsFound />
                )}
              </div> */}
              <div className="products-grid-body">
                {filteredProducts.length ? (
                  filteredProducts.map((product) => (
                    <ProductCard
                      product={product}
                      key={product._id}
                      addtoCart={addtoCart}
                      addToWishlist={addToWishlist}
                    />
                  ))
                ) : (
                  <NoItemsFound />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductListMain;
