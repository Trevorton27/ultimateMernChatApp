import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import baseUrl from '../clientUtils/baseUrl';

function Index({ user, userFollowStats }) {
  console.log('user: ', user);
  useEffect(() => {
    document.title = `Welcome, ${user.name.split(' ')[0]}`;
  }, []);
  return <div>Hiya. Welcome to the homepage.</div>;
}

export default Index;
