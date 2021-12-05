import { MainTemplate } from "common/components/MainTemplate";
import { RandomCatsPage } from "pages/RandomCats";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { RANDOM_CATS } from "router/path";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route path={RANDOM_CATS} element={<RandomCatsPage />} />
          <Route path="*" element={<p>There's nothing here!</p>} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
};
