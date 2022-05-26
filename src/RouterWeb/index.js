import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';

export const RouterWeb = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="*" element={<Home />} />
    </Routes>
  );
};
