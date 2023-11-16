import classNames from 'classnames';
import Loader from 'components/common/loader/Loader';
import EmptyOrder from 'components/notFound/EmptyOrder';
import moment from 'moment';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { changeSearchText, getUserOrders } from 'redux/auth/actions';

function OrderList({ getOrders, loading, orders, keyword, setSearchText }) {
  useEffect(() => {
    getOrders();
  }, [getOrders]);

  const history = useNavigate();
  useEffect(() => {
    setSearchText('');
  }, []);

  useEffect(() => {
    if (keyword && keyword.length > 0) history('/products');
  }, [keyword]);

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 115px)',
        overflow: 'auto',
        background: '#fff',
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <div className="my-order-section">
          <div className="container">
            <div
              className="row"
              // style={{ justifyContent: 'center' }}
            >
              <div className="col-lg-8 com-md-9 col-sm-12">
                <div className="my-order-body">
                  <div className="my-order-head">
                    <h1 style={{ zIndex: 1 }}>My Order</h1>
                  </div>

                  {orders.length ? (
                    orders.map((order) => (
                      <Link to={`/user/orders/${order._id}`} key={order._id}>
                        <div className="my-order-contain">
                          <div className="row">
                            <div className="col-lg-2 col-md-3    m-0 p-0">
                              <div className="d-flex justify-content-center align-items-center">
                                <div
                                  className={classNames(
                                    'my-order-img-box',
                                    order.currentOrderStatus.status ===
                                      'Order Delivered' &&
                                      'my-order-img-box-green',
                                    order.currentOrderStatus.status ===
                                      'Cancelled' && 'my-order-img-box-red',
                                  )}
                                >
                                  <a>
                                    {order.currentOrderStatus &&
                                    [
                                      'Order Placed',
                                      'Order Confirmed',
                                      'Out For Delivery',
                                    ].includes(
                                      order.currentOrderStatus.status,
                                    ) ? (
                                      <img
                                        src="/asstes/img/order-logo/package.png"
                                        alt=""
                                      />
                                    ) : (
                                      <img
                                        src="/asstes/img/order-logo/package 1.png"
                                        alt=""
                                      />
                                    )}
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-9 col-md-9  ">
                              <div className="my-order-list">
                                <a>
                                  <h5 style={{ fontWeight: 800 }}>
                                    Order ID: {order._id}
                                  </h5>
                                  <h6>
                                    Delivery On{' '}
                                    {moment(order.createdAt)
                                      .add(4, 'days')
                                      .format('Do MMMM YYYY')}
                                  </h6>
                                </a>
                                {/* <div className="sub-title">
                                  {order.orderItems[0].name}{' '}
                                  <span className="fw-semibold ">
                                    {Boolean(
                                      Number(order.orderItems.length - 1),
                                    ) &&
                                      `+${Number(
                                        order.orderItems.length - 1,
                                      )} more`}
                                  </span>
                                </div> */}
                                {/* <p className="fw-semibold">{order.total}$</p> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <EmptyOrder />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = ({ user }) => {
  const { keyword, loading, orders } = user;
  return { keyword, loading, orders };
};
const mapDispatchToProps = (dispatch) => ({
  getOrders: () => dispatch(getUserOrders()),
  setSearchText: (text) => dispatch(changeSearchText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
