import { Routes, Route } from "react-router-dom";
import Shop from "../pages/Shop";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};

export default AppRoutes;
