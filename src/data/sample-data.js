export const mockOrders = [
  {
    id: 1,
    orderNum: 'AMZ-12345678',
    customer: 'John Doe',
    items: 2,
    total: 89.99,
    status: 'awaiting',
    itemDetails: [
      { name: 'Blue Widget Pro', sku: 'WID-001', price: 49.99, qty: 1 },
      { name: 'Red Gadget XL', sku: 'GAD-002', price: 40.00, qty: 1 },
    ],
    shipTo: {
      name: 'John Doe',
      address: '123 Main St\nNew York, NY 10001\nUSA',
    },
  },
  {
    id: 2,
    orderNum: 'AMZN-87654321',
    customer: 'Jane Smith',
    items: 1,
    total: 124.50,
    status: 'shipped',
    itemDetails: [
      { name: 'Premium Tool Kit', sku: 'KIT-005', price: 124.50, qty: 1 },
    ],
    shipTo: {
      name: 'Jane Smith',
      address: '456 Oak Ave\nLos Angeles, CA 90001\nUSA',
    },
  },
  {
    id: 3,
    orderNum: 'EBY-11223344',
    customer: 'Mike Johnson',
    items: 3,
    total: 215.75,
    status: 'awaiting',
    itemDetails: [
      { name: 'Black Case', sku: 'CASE-010', price: 35.00, qty: 1 },
      { name: 'Screen Protector', sku: 'PROT-020', price: 9.99, qty: 2 },
      { name: 'Cable Set', sku: 'CABLE-030', price: 171.76, qty: 1 },
    ],
    shipTo: {
      name: 'Mike Johnson',
      address: '789 Pine Rd\nChicago, IL 60601\nUSA',
    },
  },
  {
    id: 4,
    orderNum: 'SHP-55667788',
    customer: 'Sarah Williams',
    items: 1,
    total: 299.00,
    status: 'shipped',
    itemDetails: [
      { name: 'Deluxe Controller', sku: 'CTRL-100', price: 299.00, qty: 1 },
    ],
    shipTo: {
      name: 'Sarah Williams',
      address: '321 Elm St\nSeattle, WA 98101\nUSA',
    },
  },
  {
    id: 5,
    orderNum: 'AMZ-99887766',
    customer: 'David Brown',
    items: 4,
    total: 450.25,
    status: 'awaiting',
    itemDetails: [
      { name: 'Laptop Stand', sku: 'STAND-001', price: 99.99, qty: 1 },
      { name: 'Keyboard', sku: 'KEY-002', price: 129.99, qty: 1 },
      { name: 'Mouse', sku: 'MOUSE-003', price: 49.99, qty: 2 },
      { name: 'USB Hub', sku: 'HUB-004', price: 120.28, qty: 1 },
    ],
    shipTo: {
      name: 'David Brown',
      address: '654 Maple Dr\nBoston, MA 02101\nUSA',
    },
  },
];
