export default function OrdersTable({ orders, onSelectOrder, selectedOrder }) {
  return (
    <table className="orders-table">
      <thead>
        <tr>
          <th style={{ width: '30px' }}>
            <input type="checkbox" />
          </th>
          <th>Order #</th>
          <th>Customer</th>
          <th>Items</th>
          <th>Total</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr
            key={order.id}
            className={selectedOrder?.id === order.id ? 'row-panel-open' : ''}
            onClick={() => onSelectOrder(selectedOrder?.id === order.id ? null : order)}
          >
            <td>
              <input type="checkbox" />
            </td>
            <td className="order-num">{order.orderNum}</td>
            <td className="customer-name">{order.customer}</td>
            <td>{order.items}</td>
            <td>${order.total.toFixed(2)}</td>
            <td>
              <span className="sync-pill" style={{
                background: order.status === 'shipped' ? '#f0fdf4' : '#eef2ff',
                color: order.status === 'shipped' ? '#16a34a' : '#2a5bd7',
                border: `1px solid ${order.status === 'shipped' ? '#bbf7d0' : '#c3d0f5'}`
              }}>
                {order.status}
              </span>
            </td>
            <td>
              <button className="btn btn-xs btn-ghost">📋</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
