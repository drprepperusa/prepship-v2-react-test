# PrepShip V2 - React Conversion Challenge

## 🎯 Task
Convert the PrepShip V2 HTML/CSS/JS fulfillment management app to a functional React application in **2 hours**.

## 📋 What You're Building
PrepShip V2 is a ShipStation-style order fulfillment dashboard featuring:
- **Dark sidebar** with expandable status sections (Awaiting, Shipped, etc.)
- **Orders table** with sortable columns and order details
- **Right panel** for shipping, package, and recipient details
- **8+ tool tabs**: Orders, Batch, Rate Shop, Analysis, Inventory, Packages, Locations, Billing, Settings

## 🚀 Getting Started

### File Structure
```
src/
├── App.jsx                 # Main component (start here!)
├── components/             # Empty folder for your components
│   ├── Sidebar.jsx        # Left navigation sidebar
│   ├── TopBar.jsx         # Header bar
│   ├── OrdersTable.jsx    # Main orders table
│   ├── OrderPanel.jsx     # Right detail panel
│   └── ...                # Other components as needed
├── styles/
│   └── app.css            # Complete PrepShip V2 CSS (already provided)
└── data/
    └── sample-data.js     # Mock orders, locations, packages data
```

### Key Design Tokens
The CSS includes all the design system variables:
- **Colors**: `--ss-blue` (#2a5bd7), `--green` (#16a34a), `--red`, `--yellow`, `--orange`
- **Spacing**: 8px base grid
- **Sidebar width**: 220px
- **Panel width**: 390px (right detail panel)

## ✅ Acceptance Criteria

Your conversion is **complete** when:

1. **UI Structure** ✓
   - Sidebar renders with logo, search, status sections, store list, tools
   - Top bar shows with title, sync pill, buttons
   - Orders table displays (can be mock data)
   - Right panel shows order details

2. **Interactivity** ✓
   - Clicking sidebar sections expands/collapses them
   - Clicking an order row opens/closes the detail panel
   - Tab switching shows different views (Orders, Batch, Analysis, etc.)
   - Search and filters don't need to work (UI-only is fine)

3. **Styling** ✓
   - All CSS loads correctly
   - Layout matches the dark sidebar + main area + right panel structure
   - Colors, typography, and spacing match design tokens
   - Responsive (mobile view works)

4. **Code Quality** ✓
   - Components are reusable and properly organized
   - State management is clear (useState, props)
   - No console errors
   - Component names are descriptive

## 💡 Tips & Tricks

### Component Strategy
**Tip 1: Start with layout structure**
```jsx
export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main">
        <TopBar />
        <div className="content-split">
          <OrdersSection />
          <OrderPanel />
        </div>
      </main>
    </div>
  );
}
```

**Tip 2: Use React hooks for state**
- `useState` for sidebar expand/collapse, selected order, active tab
- `useCallback` for event handlers
- `useReducer` for complex order state (optional)

**Tip 3: Extract mock data**
Create a `data/sample-data.js` with:
```js
export const mockOrders = [
  { id: 1, orderNum: 'AMZ-12345', customer: 'John Doe', ... },
  { id: 2, orderNum: 'AMZN-67890', customer: 'Jane Smith', ... },
];
```

**Tip 4: CSS classes are your friend**
All the styling is already done. Just apply the right CSS classes:
- `.sidebar` → sidebar container
- `.orders-table` → table styling
- `.order-panel` → right detail panel
- `.btn-primary` → blue button
- `.ss-section` → sidebar status section

**Tip 5: Don't build everything**
You don't need:
- Real API calls (mock data is fine)
- Complex shipping logic
- Working search/filters
- Perfect animations

You DO need:
- Clean component structure
- Basic state management
- All UI sections visible
- No console errors

## 🎪 What's Included

### src/styles/app.css
✓ Complete PrepShip V2 stylesheet with:
- Design tokens (colors, spacing, shadows)
- Sidebar styles
- Table styles  
- Right panel styles
- Modal/drawer styles
- Mobile responsive styles

### src/App.jsx
→ Empty React component - YOUR CANVAS

### src/components/
→ Empty folder - create your components here

## ⏰ Timeline

- **0:00-0:30** - Read CSS, understand component structure, plan layout
- **0:30-1:30** - Build Sidebar, TopBar, OrdersTable, OrderPanel components
- **1:30-2:00** - Wire up state, test interactivity, fix bugs, polish

## 🔗 Reference

**Original PrepShip V2:** https://prepshipv2.drprepperusa.com (for visual reference if needed)

**React Docs:** https://react.dev

## ❓ Questions?

Ask yourself:
1. What state does this component need?
2. What events does it need to handle?
3. What CSS classes should I apply?
4. Can I break this into smaller components?

Good luck! 🚀
