import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MailList from './mailList';
import MailDetail from './mailDetail';

const MenuLinkProps = () => {
  return (
      <Routes>
        <Route path="/" exact element={<MailList />}/>
        <Route path="detail/:selectMailbox/:uid" exact element={<MailDetail />} />
      </Routes>
  );
  };

export default MenuLinkProps;