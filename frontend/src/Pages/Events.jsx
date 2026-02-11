import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

const API_BASE = "/events";

export default function Events({ setActiveMenu, setSelectedEventId }) {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editData, setEditData] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [addData, setAddData] = useState({
    name_event: "",
    event_date: "",
    team: "",
    tier_event: "Normal",
    total_participation: "",
    season: "",
  });

  const itemsPerPage = 10;

  const showAlert = (message, type = "success") => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false, message: "", type: "" }), 3000);
  };

  const normalizeDate = (date) =>
    date ? new Date(date).toISOString().split("T")[0] : "";

  const fetchEvents = async () => {
    try {
      const res = await axios.get(`${API_BASE}/getAll`);
      const normalized = res.data.map((e) => ({
        ...e,
        event_date: normalizeDate(e.event_date),
      }));
      setEvents(normalized);
    } catch (err) {
      showAlert("Gagal memuat event", "danger");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (event_id) => {
    if (!window.confirm("Yakin ingin menghapus data ini?")) return;
    try {
      await axios.delete(`${API_BASE}/delete/${event_id}`);
      showAlert("Event berhasil dihapus", "danger");
      fetchEvents();
    } catch (err) {
      showAlert("Gagal menghapus event", "danger");
    }
  };

  const handleEditSave = async () => {
    const payload = {
      name_event: editData.name_event.trim(),
      event_date: normalizeDate(editData.event_date),
      team: editData.team.trim().slice(0, 10),
      tier_event: editData.tier_event,
      total_participation: parseInt(editData.total_participation, 10),
      season: parseInt(editData.season, 10),
    };
    if (
      !payload.name_event ||
      !payload.event_date ||
      !payload.team ||
      isNaN(payload.total_participation) ||
      isNaN(payload.season)
    ) {
      showAlert("Data belum lengkap atau format salah", "danger");
      return;
    }
    try {
      await axios.put(`${API_BASE}/update/${editData.event_id}`, payload);
      setEditData(null);
      fetchEvents();
      showAlert("Event berhasil diperbarui", "success");
    } catch {
      showAlert("Gagal memperbarui event", "danger");
    }
  };

  const handleAddSave = async () => {
    const payload = {
      name_event: addData.name_event.trim(),
      event_date: normalizeDate(addData.event_date),
      team: addData.team.trim().slice(0, 10),
      tier_event: addData.tier_event,
      total_participation: parseInt(addData.total_participation, 10),
      season: parseInt(addData.season, 10),
    };
    if (
      !payload.name_event ||
      !payload.event_date ||
      !payload.team ||
      isNaN(payload.total_participation) ||
      isNaN(payload.season)
    ) {
      showAlert("Data belum lengkap atau format salah", "danger");
      return;
    }
    try {
      await axios.post(`${API_BASE}/create`, payload);
      setShowAddModal(false);
      fetchEvents();
      showAlert("Event berhasil ditambahkan", "success");
    } catch {
      showAlert("Gagal menambahkan event", "danger");
    }
  };

  const filteredEvents = events.filter((e) =>
    e.name_event.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEvents = filteredEvents.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="main-wrapper">
      {alert.show && (
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      )}

      <div className="table-top">
        <h1>Events Table</h1>
        <div className="table-actions">
          <input
            className="search-input"
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
          <button
            className="btn-add"
            onClick={() => {
              setAddData({
                name_event: "",
                event_date: "",
                team: "",
                tier_event: "Normal",
                total_participation: "",
                season: "",
              });
              setShowAddModal(true);
            }}
          >
            Add Event
          </button>
        </div>
      </div>

      <table className="contents-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Event Name</th>
            <th>Event Date</th>
            <th>Team</th>
            <th>Tier Event</th>
            <th>Total Participation</th>
            <th>Season</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentEvents.map((e, index) => (
            <tr key={e.event_id}>
              <td>{startIndex + index + 1}</td>
              <td>{e.name_event}</td>
              <td>{e.event_date}</td>
              <td>{e.team}</td>
              <td>{e.tier_event}</td>
              <td>{e.total_participation}</td>
              <td>{e.season}</td>
              <td className="action-cell">
                <button className="btn-edit" onClick={() => setEditData(e)}>
                  Edit
                </button>
                <button
                  className="btn-detail"
                  onClick={() => {
                    setSelectedEventId(e.event_id);
                    setActiveMenu("EventDetail");
                  }}
                >
                  Detail
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(e.event_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {editData && (
        <div className="modal">
          <div className="modal-card">
            <h2>Edit Event</h2>
            <input
              value={editData.name_event}
              onChange={(e) =>
                setEditData({ ...editData, name_event: e.target.value })
              }
            />
            <input
              type="date"
              value={editData.event_date}
              onChange={(e) =>
                setEditData({ ...editData, event_date: e.target.value })
              }
            />
            <input
              value={editData.team}
              onChange={(e) =>
                setEditData({ ...editData, team: e.target.value })
              }
            />
            <select
              value={editData.tier_event}
              onChange={(e) =>
                setEditData({ ...editData, tier_event: e.target.value })
              }
            >
              <option value="Urgent">Urgent</option>
              <option value="Normal">Normal</option>
              <option value="Special">Special</option>
            </select>
            <input
              type="number"
              value={editData.total_participation}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  total_participation: e.target.value,
                })
              }
            />
            <input
              type="number"
              value={editData.season}
              onChange={(e) =>
                setEditData({ ...editData, season: e.target.value })
              }
            />
            <div className="modal-action">
              <button className="btn-edit" onClick={handleEditSave}>
                Save
              </button>
              <button className="btn-delete" onClick={() => setEditData(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddModal && (
        <div className="modal">
          <div className="modal-card">
            <h2>Add Event</h2>
            <input
              placeholder="Event Name"
              value={addData.name_event}
              onChange={(e) =>
                setAddData({ ...addData, name_event: e.target.value })
              }
            />
            <input
              type="date"
              value={addData.event_date}
              onChange={(e) =>
                setAddData({ ...addData, event_date: e.target.value })
              }
            />
            <input
              placeholder="Team"
              value={addData.team}
              onChange={(e) => setAddData({ ...addData, team: e.target.value })}
            />
            <select
              className="select-tier-event"
              value={addData.tier_event}
              onChange={(e) =>
                setAddData({ ...addData, tier_event: e.target.value })
              }
            >
              <option value="Urgent">Urgent</option>
              <option value="Normal">Normal</option>
              <option value="Special">Special</option>
            </select>

            <input
              type="number"
              placeholder="Total Participation"
              value={addData.total_participation}
              onChange={(e) =>
                setAddData({ ...addData, total_participation: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Season"
              value={addData.season}
              onChange={(e) =>
                setAddData({ ...addData, season: e.target.value })
              }
            />
            <div className="modal-action">
              <button className="btn-edit" onClick={handleAddSave}>
                Save
              </button>
              <button
                className="btn-delete"
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
