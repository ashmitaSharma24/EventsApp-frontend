import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { AddEvents } from "./pages/addEventPage";
import { CollegeEvents } from "./pages/collegeEvents";
import { PopularEvents } from "./pages/popularEvents";
import AuthPage from "./pages/authPage";
import { Webinars } from "./pages/webinars";
import { Fests } from "./pages/fests";
import { Muns } from "./pages/muns";
import { Hackathons } from "./pages/hackathons";
import { Competitions } from "./pages/competitions";
import { AllEvents } from "./pages/all-events";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<AuthPage />} />
        <Route path="*" element={<AuthPage />} />
        {/* Other routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/home/webinars" element={<Webinars />} />
        <Route path="/home/competetions" element={<Competitions />} />
        <Route path="/home/muns" element={<Muns />} />
        <Route path="/home/hackathons" element={<Hackathons />} />
        <Route path="/home/fests" element={<Fests />} />
        <Route path="/all-events" element={<AllEvents />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-event" element={<AddEvents />} />
        <Route path="/college-events" element={<CollegeEvents />} />
        <Route path="/popular-events" element={<PopularEvents />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
