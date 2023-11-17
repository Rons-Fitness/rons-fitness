/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import Loader from 'components/common/loader/Loader';
import NoItemsFound from 'components/notFound/NoItemsFound';
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
              <div className="product-grid-section-header">
                <h1>Home Equipment&rsquo;s</h1>
              </div>
              <div className="products-grid-body">
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
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductListMain;
