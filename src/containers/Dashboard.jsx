import DashboardMain from 'components/dashboard/DashboardMain';
import Footer from 'components/footer/Footer';
import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ height: 'calc(100vh - 113px)', overflow: 'auto' }}>
      <DashboardMain />
      <Footer />
    </div>
  );
};

export default Dashboard;
