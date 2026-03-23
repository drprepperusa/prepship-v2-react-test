export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-title">📦 Orders</div>
      <div className="topbar-right">
        <div className="sync-pill done">
          <span className="sync-dot"></span>
          Last sync: 2 min ago
        </div>
        <button className="btn btn-primary btn-sm">
          🔧 Create Label
        </button>
      </div>
    </div>
  );
}
