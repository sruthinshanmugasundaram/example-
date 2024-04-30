import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Example from "./ExampleProject"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Example />} />
      </Routes>
    </Router>
  );
};

export default App;