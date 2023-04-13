/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import Loader from 'components/common/loader/Loader';
import moment from 'moment';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getUserOrders } from 'redux/auth/actions';

const OrderList = ({ getOrders, loading, orders, keyword }) => {
  useEffect(() => {
    getOrders();
  }, [getOrders]);

  const history = useHistory();
  useEffect(() => {
    if (keyword && keyword.length > 0) history.push('/products');
  }, [keyword]);
  return (
    <div style={{ minHeight: 'calc(100vh - 115px)', overflow: 'auto' }}>
      {loading ? (
        <Loader />
      ) : (
        <div className="my-order-section">
          <div className="container">
            <div className="row" style={{ justifyContent: 'center' }}>
              <div className="col-lg-8 com-md-9 col-sm-12">
                <div className="my-order-body">
                  <div className="my-order-head">
                    <h1>My Order</h1>
                  </div>
                  {orders.map((order) => (
                    <Link to={`/user/orders/${order._id}`} key={order._id}>
                      <div className="my-order-contain">
                        <div className="row">
                          <div className="col-lg-2 col-md-3    m-0 p-0">
                            <div className="d-flex justify-content-center align-items-center">
                              <div className="my-order-img-box">
                                <a>
                                  {' '}
                                  <img
                                    src="/asstes/img/order-logo/package.png"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-9  ">
                            <div className="my-order-list">
                              <a>
                                <h5>
                                  {moment(order.createdAt).format(
                                    'Do MMMM YYYY ,  h:mm a'
                                  )}
                                </h5>
                              </a>
                              <div>
                                {order.orderItems[0].name}{' '}
                                <span className="fw-semibold ">
                                  {Boolean(
                                    Number(order.orderItems.length - 1)
                                  ) &&
                                    '+' +
                                      Number(order.orderItems.length - 1) +
                                      ' more'}
                                </span>
                              </div>
                              <p className="fw-semibold">₹{order.total}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  const { keyword, loading, orders } = user;
  return { keyword, loading, orders };
};
const mapDispatchToProps = (dispatch) => ({
  getOrders: () => dispatch(getUserOrders()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
