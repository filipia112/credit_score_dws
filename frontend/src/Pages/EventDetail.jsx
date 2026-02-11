import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";

const API_BASE = "/event-players";
const API_BASE_PLAYER = "/players";

export default function EventDetail({ eventId, setActiveMenu }) {
  
  const [event, setEvent] = useState(null);
  const [eventPlayers, setEventPlayers] = useState([]);
  const [allPlayers, setAllPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [mvpAvaCount, setMvpAvaCount] = useState(1);

  const [form, setForm] = useState({
    player_id: "",
    rally_type: "-",
    score_event: "",
    total_points: 0,
    active_participation: 1,
    mvp_of: "",
    rank_event: "-",
    is_15m: 0,
  });

  const showAlert = (message, type = "success") => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false, message: "", type: "" }), 3000);
  };
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredPlayers = eventPlayers.filter((ep) =>
    ep.player?.name?.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPlayers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPlayers = filteredPlayers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`${API_BASE}/event/${eventId}/detail`)
      .then((res) => {
        setEvent(res.data);
        setEventPlayers(res.data.event_players || []);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        showAlert("Gagal memuat data event", "danger");
      });
  };

  const fetchAllPlayers = async () => {
    try {
      const res = await axios.get(`${API_BASE_PLAYER}/getAll`);
      setAllPlayers(res.data);
    } catch {
      showAlert("Gagal memuat daftar player", "danger");
    }
  };

  useEffect(() => {
    if (!eventId) return;
    fetchData();
    fetchAllPlayers();
  }, [eventId]);

  const calculatePoint = () => {
    if (!form.player_id) return 0;
    let point = 0;

    if (form.active_participation === 0) point += 10;
    if (form.is_15m === 1) point += 10;

    if (form.rally_type === "Single Rally") point += 2;
    if (form.rally_type === "Double Rally") point += 5;

    if (event?.tier_event === "Normal") point += 3;
    if (event?.tier_event === "Urgent") point += 8;
    if (event?.tier_event === "Special") point += 5;

    if (form.rank_event === "MvP AvA") point += 3 * mvpAvaCount;
    if (form.rank_event === "MvP BGB Building Control") point += 5;
    if (form.rank_event === "MvP BGB Defeat Enemy Unit") point += 8;
    if (form.rank_event === "MvP BGB Carry Rare Earth Alloy") point += 15;
    if (form.rank_event === "MvP BGB Gather at Oil Tanks") point += 3;
    if (form.rank_event === "MvP Tuesday clashes") point += 20;
    if (form.rank_event === "Top Rank 1 BGB") point += 10;
    if (form.rank_event === "Top Rank 3 BGB") point += 8;
    if (form.rank_event === "Merit Ranking Top 10") point += 50;
    if (form.rank_event === "Merit Ranking Top 20") point += 30;
    if (form.rank_event === "Merit Ranking Top 50") point += 10;
    if (form.rank_event === "Merit Ranking Top 100") point += 5;
    if (form.rank_event === "Top 3 Frank") point += 10;
    if (form.rank_event === "Top 10 Frank") point += 8;
    if (form.rank_event === "Top 50 Zombie") point += 20;
    if (form.rank_event === "Top 100 Zombie") point += 10;
    if (form.rank_event === "Top 200 Zombie") point += 5;
    if (form.rank_event === "Top 10 AvA") point += 5;
    if (form.rank_event === "Top 30 AvA") point += 3;
    if (form.rank_event === "Top 10 Contribution") point += 10;
    if (form.rank_event === "Top 20 Contribution") point += 8;
    if (form.rank_event === "Top 50 Contribution") point += 5;
    if (form.rank_event === "Top 100 Contribution") point += 3;
    if (form.rank_event === "Top 10 Capital Clash") point += 30;
    if (form.rank_event === "Top 20 Capital Clash") point += 15;
    if (form.rank_event === "Top 50 Capital Clash") point += 10;
    if (form.rank_event === "Top 100 Capital Clash") point += 5;
    if (form.rank_event === "Top 5 Tuesday clashes") point += 8;
    if (form.rank_event === "Top 10 Tuesday clashes") point += 5;

    return point;
  };

  const handleAddSave = () => {
    if (!form.player_id || form.score_event === "") {
      showAlert("Data player belum lengkap", "danger");
      return;
    }

    const payload = {
      event_id: eventId,
      player_id: form.player_id,
      rally_type: form.rally_type,
      score_event: form.score_event,
      total_points: calculatePoint(),
      active_participation: form.active_participation,
      mvp_of: form.rank_event === "MvP AvA" ? `MvP AvA ${mvpAvaCount}x` : "",
      rank_event: form.rank_event,
    };

    axios
      .post(API_BASE, payload)
      .then(() => {
        setShowAddModal(false);
        setForm({
          player_id: "",
          rally_type: "-",
          score_event: "",
          total_points: 0,
          ismvp: 0,
          active_participation: 1,
          mvp_of: "",
          rank_event: "-",
        });
        setMvpAvaCount(1);
        fetchData();
        showAlert("Player berhasil ditambahkan", "success");
      })
      .catch(() => showAlert("Gagal menambahkan player", "danger"));
  };
  const handleDelete = (id) => {
    if (!window.confirm("Yakin hapus player ini?")) return;

    axios
      .delete(`${API_BASE}/${id}`)
      .then(() => {
        setEventPlayers((prev) => prev.filter((p) => p.id !== id));
        showAlert("Player berhasil dihapus", "danger");
      })
      .catch(() => showAlert("Gagal menghapus player", "danger"));
  };

  if (loading) return <div className="container">Loading...</div>;
  if (!event) return <div className="container">Data tidak ditemukan</div>;

  return (
    <div className="table-page">
      {alert.show && (
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      )}

      <button className="btn-back" onClick={() => setActiveMenu("Events")}>
        Back
      </button>

      <h2>{event.name_event}</h2>
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
        <button className="btn-add" onClick={() => setShowAddModal(true)}>
          Add Player
        </button>
      </div>
      {showAddModal && (
        <div className="modal">
          <div className="modal-card form-modal">
            <h2>Add Participation</h2>

            <select
              value={form.player_id}
              onChange={(e) => setForm({ ...form, player_id: e.target.value })}
              className="select-tier"
            >
              <option value="">Select Player</option>
              {allPlayers.map((p) => (
                <option key={p.player_id} value={p.player_id}>
                  {p.name}
                </option>
              ))}
            </select>

            <p>Rally</p>
            <select
              value={form.rally_type}
              onChange={(e) => setForm({ ...form, rally_type: e.target.value })}
              className="select-tier"
            >
              <option value="-">-</option>
              <option value="Single Rally">Single Rally</option>
              <option value="Double Rally">Double Rally</option>
            </select>

            <p>Rank Achievement</p>
            <select
              value={form.rank_event}
              onChange={(e) => setForm({ ...form, rank_event: e.target.value })}
              className="select-tier"
            >
              <option value="-">-</option>
              <option value="MvP AvA">MvP AvA</option>
              <option value="MvP BGB Building Control">
                MvP BGB Building Control
              </option>
              <option value="MvP BGB Defeat Enemy Unit">
                MvP BGB Defeat Enemy Unit
              </option>
              <option value="MvP BGB Carry Rare Earth Alloy">
                MvP BGB Carry Rare Earth Alloy
              </option>
              <option value="MvP BGB Gather at Oil Tanks">
                MvP BGB Gather at Oil Tanks
              </option>
              <option value="MvP Tuesday clashes">MvP Tuesday clashes</option>
              <option value="Top Rank 1 BGB">Top Rank 1 BGB</option>
              <option value="Top Rank 3 BGB">Top Rank 3 BGB</option>
              <option value="Merit Ranking Top 10">Merit Ranking Top 10</option>
              <option value="Merit Ranking Top 20">Merit Ranking Top 20</option>
              <option value="Merit Ranking Top 50">Merit Ranking Top 50</option>
              <option value="Merit Ranking Top 100">
                Merit Ranking Top 100
              </option>
              <option value="Top 3 Frank">Top 3 Frank</option>
              <option value="Top 10 Frank">Top 10 Frank</option>
              <option value="Top 50 Zombie">Top 50 Zombie Siege</option>
              <option value="Top 100 Zombie">Top 100 Zombie Siege</option>
              <option value="Top 200 Zombie">Top 200 Zombie Siege</option>
              <option value="Top 10 AvA">Top 10 AvA</option>
              <option value="Top 30 AvA">Top 30 AvA</option>
              <option value="Top 10 Contribution">Top 10 Contribution</option>
              <option value="Top 20 Contribution">Top 20 Contribution</option>
              <option value="Top 50 Contribution">Top 50 Contribution</option>
              <option value="Top 100 Contribution">Top 100 Contribution</option>
              <option value="Top 10 Capital Clash">Top 10 Capital Clash</option>
              <option value="Top 20 Capital Clash">Top 20 Capital Clash</option>
              <option value="Top 50 Capital Clash">Top 50 Capital Clash</option>
              <option value="Top 100 Capital Clash">
                Top 100 Capital Clash
              </option>
              <option value="Top 5 Tuesday clashes">
                Top 5 Tuesday clashes
              </option>
              <option value="Top 10 Tuesday clashes">
                Top 10 Tuesday clashes
              </option>
            </select>

            {form.rank_event === "MvP AvA" && (
              <>
                <p>MvP AvA Count</p>
                <select
                  value={mvpAvaCount}
                  onChange={(e) => setMvpAvaCount(Number(e.target.value))}
                  className="select-tier"
                >
                  <option value={1}>1x</option>
                  <option value={2}>2x</option>
                  <option value={3}>3x</option>
                  <option value={4}>4x</option>
                  <option value={5}>5x</option>
                  <option value={6}>6x</option>
                </select>
              </>
            )}

            <p>Credit Point</p>
            <input type="text" value={calculatePoint()} disabled />
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <p style={{ margin: 0 }}>Point AvA 15M</p>

              <label className="checkbox-row" style={{ margin: 0 }}>
                <input
                  type="checkbox"
                  checked={form.is_15m === 1}
                  onChange={(e) =>
                    setForm({ ...form, is_15m: e.target.checked ? 1 : 0 })
                  }
                />
                <span>20M (+10 Point)</span>
              </label>
            </div>

            <p>Score Event</p>
            <input
              type="text"
              value={form.score_event}
              onChange={(e) =>
                setForm({ ...form, score_event: e.target.value })
              }
            />

            <div className="modal-action">
              <button className="btn-save" onClick={handleAddSave}>
                Save
              </button>
              <button
                className="btn-cancel"
                onClick={() => {
                  setShowAddModal(false);
                  setMvpAvaCount(1);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="table-card">
        <table className="contents-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name Player</th>
              <th>Rally</th>
              <th>Rank</th>
              <th>Event Score</th>
              <th>Credit Score</th>
              <th>MVP</th>
              <th>Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentPlayers.length === 0 && (
              <tr>
                <td colSpan="9" style={{ textAlign: "center" }}>
                  No data
                </td>
              </tr>
            )}

            {currentPlayers.map((ep, index) => (
              <tr key={ep.id}>
                <td>{startIndex + index + 1}</td>
                <td>{ep.player?.name}</td>
                <td>{ep.rally_type}</td>
                <td>{ep.player?.rank_alliance || "-"}</td>
                <td>{ep.score_event}</td>
                <td>{ep.total_points}</td>
                <td>{ep.mvp_of || "-"}</td>
                <td>{ep.active_participation ? "Yes" : "-"}</td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(ep.id)}
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
      </div>
    </div>
  );
}
