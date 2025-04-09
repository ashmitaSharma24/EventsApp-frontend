import React, { useEffect } from 'react';
import { fetchEvents } from '../utils/event-service.js';

export const CollegeEvents = () => {
  useEffect(() => {
    // Call fetchEvents when component mounts
    fetchEvents("", ""); // change the values as needed
  }, []);

  return (
    <>
      <h1>college events</h1>
    </>
  );
};
