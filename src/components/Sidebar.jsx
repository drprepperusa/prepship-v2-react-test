export default function Sidebar({ expandedSections, toggleSection, activeTab, setActiveTab }) {
  const tools = [
    { id: 'orders', icon: '📦', name: 'Orders' },
    { id: 'batch', icon: '🔄', name: 'Batch' },
    { id: 'rateshop', icon: '💰', name: 'Rate Shop' },
    { id: 'analysis', icon: '📊', name: 'Analysis' },
    { id: 'inventory', icon: '🏪', name: 'Inventory' },
    { id: 'packages', icon: '📫', name: 'Packages' },
    { id: 'locations', icon: '📍', name: 'Locations' },
    { id: 'billing', icon: '💳', name: 'Billing' },
  ];

  const stores = [
    { id: 1, name: 'Amazon', count: 12 },
    { id: 2, name: 'eBay', count: 8 },
    { id: 3, name: 'Shopify', count: 5 },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-wordmark">
          <span style={{ color: '#2a5bd7', fontWeight: 800 }}>Ship</span>
          <span style={{ color: '#1a1f2e' }}>Station</span>
        </div>
        <div className="logo-sub">Orders</div>
      </div>

      <div className="sidebar-search">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="sidebar-nav">
        {/* Awaiting Section */}
        <div
          className={`ss-section ${expandedSections.awaiting ? 'expanded' : ''}`}
        >
          <div
            className={`ss-header ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => {
              toggleSection('awaiting');
              setActiveTab('orders');
            }}
          >
            <span className="ss-arrow">›</span>
            <span className="ss-label">Awaiting</span>
            <span className="ss-badge">12</span>
          </div>
          <div className="ss-stores">
            {stores.map((store) => (
              <div key={store.id} className="ss-store">
                <span className="ss-store-name">{store.name}</span>
                <span className="ss-store-count">{store.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Shipped Section */}
        <div
          className={`ss-section ${expandedSections.shipped ? 'expanded' : ''}`}
        >
          <div
            className="ss-header"
            onClick={() => toggleSection('shipped')}
          >
            <span className="ss-arrow">›</span>
            <span className="ss-label">Shipped</span>
            <span className="ss-badge">8</span>
          </div>
          <div className="ss-stores">
            {stores.map((store) => (
              <div key={store.id} className="ss-store">
                <span className="ss-store-name">{store.name}</span>
                <span className="ss-store-count">{Math.floor(store.count / 2)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cancelled Section */}
        <div
          className={`ss-section ${expandedSections.cancelled ? 'expanded' : ''}`}
        >
          <div
            className="ss-header"
            onClick={() => toggleSection('cancelled')}
          >
            <span className="ss-arrow">›</span>
            <span className="ss-label">Cancelled</span>
            <span className="ss-badge">2</span>
          </div>
          <div className="ss-stores">
            {stores.map((store) => (
              <div key={store.id} className="ss-store">
                <span className="ss-store-name">{store.name}</span>
                <span className="ss-store-count">0</span>
              </div>
            ))}
          </div>
        </div>

        <div className="sidebar-divider"></div>

        {/* Tools */}
        <div className="sidebar-tools">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className={`sidebar-tool-item ${activeTab === tool.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tool.id)}
            >
              <span className="sidebar-tool-icon">{tool.icon}</span>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-bottom">
        <span className="conn-dot"></span>Connected
      </div>
    </div>
  );
}
