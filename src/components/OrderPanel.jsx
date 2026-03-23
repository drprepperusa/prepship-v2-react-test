export default function OrderPanel({ order }) {
  if (!order) return null;

  return (
    <div className="order-panel">
      <div className="panel-inner">
        <div className="panel-topbar">
          <div className="panel-ordnum">Order #{order.orderNum}</div>
          <button className="panel-topbar-btn">⚙️</button>
        </div>

        <div className="panel-body">
          {/* Shipping Section */}
          <div className="panel-section">
            <div className="panel-section-header">
              <span className="panel-section-arrow">›</span>
              <span className="panel-section-title">📦 Shipping</span>
            </div>
            <div className="panel-section-body">
              <div className="ship-field-row">
                <label className="ship-field-label">Carrier</label>
                <select className="ship-select">
                  <option>UPS Ground</option>
                  <option>USPS</option>
                  <option>FedEx</option>
                </select>
              </div>
              <div className="ship-field-row">
                <label className="ship-field-label">Weight</label>
                <input
                  type="number"
                  className="ship-input"
                  placeholder="0.0"
                />
                <span className="ship-input-unit">lb</span>
              </div>
              <div className="create-label-wrap">
                <button className="create-label-btn">
                  🏷️ Create Label
                </button>
              </div>
            </div>
          </div>

          {/* Items Section */}
          <div className="panel-section">
            <div className="panel-section-header">
              <span className="panel-section-arrow">›</span>
              <span className="panel-section-title">📋 Items</span>
            </div>
            <div className="panel-section-body">
              {order.itemDetails?.map((item, idx) => (
                <div key={idx} className="item-row">
                  <div className="item-img">📷</div>
                  <div className="item-info">
                    <div className="item-name">{item.name}</div>
                    <div className="item-sku">{item.sku}</div>
                    <div className="item-price-row">${item.price.toFixed(2)}</div>
                  </div>
                  <div className="item-qty">{item.qty}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recipient Section */}
          <div className="panel-section">
            <div className="panel-section-header">
              <span className="panel-section-arrow">›</span>
              <span className="panel-section-title">👤 Recipient</span>
            </div>
            <div className="panel-section-body">
              <div className="recip-header">
                <span className="recip-title">Ship To</span>
              </div>
              <div className="recip-name">{order.shipTo?.name}</div>
              <div className="recip-addr">
                {order.shipTo?.address}
              </div>
              <div className="recip-validated">
                ✓ Address validated
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
