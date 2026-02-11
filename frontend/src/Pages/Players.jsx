import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

const API_BASE = "/players";

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editData, setEditData] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const rankOrder = { R5: 5, R4: 4, R3: 3, R2: 2, R1: 1 };

  const [addData, setAddData] = useState({
    name: "",
    watchtower: "",
    march_power: "",
    role: "",
    rank_alliance: "",
  });

  const itemsPerPage = 10;

  const showAlert = (message, type = "success") => {
    setAlert({ show: true, message, type });
    setTimeout(() => {
      setAlert({ show: false, message: "", type: "" });
    }, 3000);
  };

  const fetchPlayers = async () => {
    const res = await axios.get(`${API_BASE}/getAll`);
    setPlayers(res.data);
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus data ini?")) return;
    await axios.delete(`${API_BASE}/delete/${id}`);
    showAlert("Data berhasil dihapus", "danger");
    fetchPlayers();
  };

  const handleEditSave = async () => {
    await axios.put(`${API_BASE}/update/${editData.player_id}`, editData);
    setEditData(null);
    showAlert("Data berhasil diperbarui", "success");
    fetchPlayers();
  };

  const handleAddSave = async () => {
    await axios.post(`${API_BASE}/create`, addData);
    setAddData({
      name: "",
      watchtower: "",
      march_power: "",
      role: "",
      rank_alliance: "",
    });
    setShowAddModal(false);
    showAlert("Data berhasil ditambahkan", "success");
    fetchPlayers();
  };

  const filteredPlayers = players
    .filter((p) => p.name?.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const rankA = rankOrder[a.rank_alliance] || 0;
      const rankB = rankOrder[b.rank_alliance] || 0;
      return rankB - rankA;
    });

  const totalPages = Math.ceil(filteredPlayers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPlayers = filteredPlayers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="main-wrapper">
      {alert.show && (
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      )}

      <div className="table-top">
        <h1>Players List</h1>

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
                name: "",
                watchtower: "",
                march_power: "",
                role: "",
                rank_alliance: "",
              });
              setShowAddModal(true);
            }}
          >
            Add Player
          </button>
        </div>
      </div>

      <table className="contents-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Rank</th>
            <th>Watchtower</th>
            <th>March Power</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentPlayers.map((p, index) => (
            <tr key={p.player_id}>
              <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
              <td>{p.name}</td>
              <td>{p.rank_alliance}</td>
              <td>{p.watchtower}</td>
              <td>{p.march_power}</td>
              <td>{p.role}</td>
              <td className="action-cell">
                <button className="btn-edit" onClick={() => setEditData(p)}>
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(p.player_id)}
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
            <h2>Edit Player</h2>

            <input
              value={editData.name}
              onChange={(e) =>
                setEditData({ ...editData, name: e.target.value })
              }
            />

            <select
              className="select-tier-event"
              value={editData.rank_alliance}
              onChange={(e) =>
                setEditData({ ...editData, rank_alliance: e.target.value })
              }
            >
              <option value="">Select Rank</option>
              <option value="R1">R1</option>
              <option value="R2">R2</option>
              <option value="R3">R3</option>
              <option value="R4">R4</option>
            </select>

            <select
              className="select-tier-event"
              value={editData.watchtower}
              onChange={(e) =>
                setEditData({ ...editData, watchtower: e.target.value })
              }
            >
              <option value="">Select Watchtower</option>
              <option value="WT 30">WT 30</option>
              <option value="I1">I1</option>
              <option value="I2">I2</option>
              <option value="I3">I3</option>
              <option value="I4">I4</option>
              <option value="I5">I5</option>
              <option value="I6">I6</option>
              <option value="I7">I7</option>
              <option value="I8">I8</option>
            </select>

            <input
              value={editData.march_power}
              onChange={(e) =>
                setEditData({ ...editData, march_power: e.target.value })
              }
            />

            <select
              className="select-tier-event"
              value={editData.role}
              onChange={(e) =>
                setEditData({ ...editData, role: e.target.value })
              }
            >
              <option value="">Pilih Role</option>
              <option value="Fighter">Fighter</option>
              <option value="Shooter">Shooter</option>
              <option value="Rider">Rider</option>
            </select>

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
            <h2>Add Player</h2>

            <input
              placeholder="Name"
              value={addData.name}
              onChange={(e) => setAddData({ ...addData, name: e.target.value })}
            />

            <select
              className="select-tier-event"
              value={addData.rank_alliance}
              onChange={(e) =>
                setAddData({ ...addData, rank_alliance: e.target.value })
              }
            >
              <option value="">Select Rank</option>
              <option value="R1">R1</option>
              <option value="R2">R2</option>
              <option value="R3">R3</option>
              <option value="R4">R4</option>
            </select>

            <select
              className="select-tier-event"
              value={addData.watchtower}
              onChange={(e) =>
                setAddData({ ...addData, watchtower: e.target.value })
              }
            >
              <option value="">Select Watchtower</option>
              <option value="WT 30">WT 30</option>
              <option value="I1">I1</option>
              <option value="I2">I2</option>
              <option value="I3">I3</option>
              <option value="I4">I4</option>
              <option value="I5">I5</option>
              <option value="I6">I6</option>
              <option value="I7">I7</option>
              <option value="I8">I8</option>
            </select>

            <input
              placeholder="March Power"
              value={addData.march_power}
              onChange={(e) =>
                setAddData({ ...addData, march_power: e.target.value })
              }
            />

            <select
              className="select-tier-event"
              value={addData.role}
              onChange={(e) => setAddData({ ...addData, role: e.target.value })}
            >
              <option value="">Pilih Role</option>
              <option value="Fighter">Fighter</option>
              <option value="Shooter">Shooter</option>
              <option value="Rider">Rider</option>
            </select>

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
