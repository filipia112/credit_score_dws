import React, { useState } from "react";
import {
  ChevronDown,
  Home,
  Users,
  Settings,
} from "lucide-react";
import MainContent from "./Pages/Main";
import Players from "./Pages/Players";
import Events from "./Pages/Events";
import EventDetail from "./Pages/EventDetail";
import "./index.css";

export default function Dashboard() {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [selectedEventId, setSelectedEventId] = useState(null);

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h1 className="logo">A78</h1>

        <nav className="nav">
          <button
            className={activeMenu === "Dashboard" ? "active" : ""}
            onClick={() => setActiveMenu("Dashboard")}
          >
            <Home size={20} />
          </button>

          <div className="dropdown">
            <button
              className="dropdown-btn"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <Users size={20} /> <ChevronDown size={16} />
            </button>

            {openMenu && (
              <div className="dropdown-menu">
                <button onClick={() => setActiveMenu("Players")}>
                  Players
                </button>
                <button onClick={() => setActiveMenu("Events")}>
                  Events
                </button>
              </div>
            )}
          </div>

          <button
            className={activeMenu === "Settings" ? "active" : ""}
            onClick={() => setActiveMenu("Settings")}
          >
            <Settings size={20} />
          </button>
        </nav>
      </aside>

      <div className="main-wrapper">
        {activeMenu === "Dashboard" && <MainContent />}
        {activeMenu === "Players" && <Players />}

        {activeMenu === "Events" && (
          <Events
            setActiveMenu={setActiveMenu}
            setSelectedEventId={setSelectedEventId}
          />
        )}

        {activeMenu === "EventDetail" && (
          <EventDetail
            eventId={selectedEventId}
            setActiveMenu={setActiveMenu}
          />
        )}
      </div>
    </div>
  );
}
