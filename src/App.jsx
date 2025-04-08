import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { AddEvents } from "./pages/addEventPage";
import { CollegeEvents } from "./pages/collegeEvents";
import { PopularEvents } from "./pages/popularEvents";
import AuthPage from "./pages/authPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<AuthPage />} />
        <Route path="*" element={<AuthPage />} />
        {/* Other routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-event" element={<AddEvents />} />
        <Route path="/college-events" element={<CollegeEvents />} />
        <Route path="/popular-events" element={<PopularEvents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
