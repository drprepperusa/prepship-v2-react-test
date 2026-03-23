import { useState } from 'react';
import './styles/app.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import OrdersTable from './components/OrdersTable';
import OrderPanel from './components/OrderPanel';
import { mockOrders } from './data/sample-data';

export default function App() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [activeTab, setActiveTab] = useState('orders');
  const [expandedSections, setExpandedSections] = useState({
    awaiting: true,
    shipped: false,
    cancelled: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar
        expandedSections={expandedSections}
        toggleSection={toggleSection}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <main className="main">
        <TopBar />

        {activeTab === 'orders' && (
          <div className="content-split">
            <div className="orders-section">
              <div className="filterbar">
                <div className="search-wrap">
                  <input
                    type="text"
                    placeholder="Search orders..."
                  />
                </div>
                <select className="filter-sel">
                  <option>All Statuses</option>
                  <option>Awaiting</option>
                  <option>Shipped</option>
                </select>
              </div>

              <div className="stats-bar">
                <div className="stat-item">
                  <div className="stat-val">{mockOrders.length}</div>
                  <div className="stat-lbl">Total</div>
                </div>
                <div className="stat-sep"></div>
                <div className="stat-item">
                  <div className="stat-val">5</div>
                  <div className="stat-lbl">Awaiting</div>
                </div>
                <div className="stat-sep"></div>
                <div className="stat-item">
                  <div className="stat-val">3</div>
                  <div className="stat-lbl">Shipped</div>
                </div>
              </div>

              <div className="orders-wrap">
                <OrdersTable
                  orders={mockOrders}
                  onSelectOrder={setSelectedOrder}
                  selectedOrder={selectedOrder}
                />
              </div>
            </div>

            {selectedOrder && (
              <OrderPanel order={selectedOrder} />
            )}
          </div>
        )}

        {activeTab !== 'orders' && (
          <div className="view-content">
            <h2>📋 {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Tab</h2>
            <p>This section is under construction. Build it out as needed!</p>
          </div>
        )}
      </main>
    </div>
  );
}
