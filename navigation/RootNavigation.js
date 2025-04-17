//ini lah file yang akan digunakan pada app.js yang berfungsi untuk menentukan
// page yang boleh diakses
// jika kita lihat bisa juga kita gunakan sebagai role divider
import React, {useState, useEffect} from 'react';
import {UnAuthicated, Authincated} from './MainNavigation';
// import {useSelector} from 'react-redux';

const RootNavigation = () => {
  //   const user = useSelector(state => state.user);
  //   if (user.isLoggedIn) {
  //     return <Authincated />;
  //   } else {
  //     return <UnAuthicated />;
  //   }

  return <Authincated />;
};

export default RootNavigation;
