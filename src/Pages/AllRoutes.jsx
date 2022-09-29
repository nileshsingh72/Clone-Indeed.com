import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import CompanyReviews from "./CompanyReviews";
import SalaryGuide from "./SalaryGuide";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/companyreviews" element={<CompanyReviews />}></Route>
      <Route path="/salaryguide" element={<SalaryGuide />}></Route>
      <Route path="/employers" element={<Employers />}></Route>
    </Routes>
  );
}
