import React, { useEffect } from 'react';
import { AdminLogin } from '../../components/admin';

const Admin = () => {
  const isLoggedIn = false;
  return isLoggedIn ? <div>Admin</div> : <AdminLogin />;
};

export default Admin;
