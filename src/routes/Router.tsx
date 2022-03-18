import { Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route element={<div />} path="/" />
      <Route element={<div />} path="about" />
    </Routes>
  );
};
