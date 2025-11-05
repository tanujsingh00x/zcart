const productIds = [
  12, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 11, 13, 14, 15, 16, 17, 18, 25, 20, 27, 29,
  23, 24,
];
const watchIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const laptopIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const speakerIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const consoleIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateProductData = (id) => {
  const names = [
    "Smart Bluetooth Earbuds with Noise Cancellation",
    "Wireless Over-Ear Headphones with Deep Bass",
    "TWS Earbuds with Long Battery Life",
    "Hi-Fi Stereo Earbuds with Mic",
    "Gaming Earbuds with Low Latency",
    "ANC Earphones with Dual Drivers",
    "Sport Wireless Earbuds, Sweatproof",
    "Premium Earbuds with Touch Controls",
  ];

  const name = names[Math.floor(Math.random() * names.length)];
  const originalPrice = getRandom(1800, 3000);
  const discountPercent = getRandom(30, 65);
  const price = Math.floor((originalPrice * (100 - discountPercent)) / 100);
  const discount = `${discountPercent}% off`;
  const rating = (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1);
  const reviews = `(${getRandom(1000, 20000)})`;
  const star = `${getRandom(3, 5)}`;

  return {
    id,
    name,
    price: `₹${price.toLocaleString()}`,
    pricevalue: price,
    originalPrice: `₹${originalPrice.toLocaleString()}`,
    discount,
    rating,
    reviews,
    star,
    img: `/b${id}.png`,
  };
};

const generateWatchData = (id) => {
  const names = [
    "Smart Fitness Watch with Heart Rate Monitor",
    "Luxury Analog Watch with Leather Strap",
    "Digital Sports Watch with Step Tracker",
    "Smartwatch with AMOLED Display",
    "Classic Metal Watch for Men",
    "Touchscreen Smartwatch with GPS",
    "Hybrid Smartwatch with Health Tracking",
    "Minimalist Watch with Stainless Steel Strap",
    "Bluetooth Smartwatch with Notifications",
    "Fitness Band with Sleep Monitor",
    "Smartwatch with Voice Assistant Support",
    "Waterproof Watch with Long Battery Life",
  ];

  const name = names[Math.floor(Math.random() * names.length)];
  const originalPrice = getRandom(1500, 2500);
  const discountPercent = getRandom(25, 60);
  const price = Math.floor((originalPrice * (100 - discountPercent)) / 100);
  const discount = `${discountPercent}% off`;
  const rating = (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1);
  const reviews = `(${getRandom(500, 15000)})`;
  const star = `${getRandom(3, 5)}`;

  return {
    id,
    name,
    price: `₹${price}`,
    pricevalue: price,
    originalPrice: `₹${originalPrice}`,
    discount,
    rating,
    reviews,
    star,
    img: `/w${id}.png`,
  };
};

const generateLaptopData = (id) => {
  const names = [
    "UltraSlim Laptop with Intel i7 Processor",
    "Premium Metal Laptop with Backlit Keyboard",
    "Gaming Laptop with RTX Graphics and RGB",
    "Laptop with 4K AMOLED Touchscreen Display",
    "Classic Business Laptop with Fingerprint Sensor",
    "Touchscreen Laptop with Stylus Support",
    "Hybrid 2-in-1 Laptop with Detachable Keyboard",
    "Minimalist Laptop with Aluminum Chassis",
    "Laptop with AI-Powered Performance Optimization",
    "Student Laptop with All-Day Battery Life",
    "Laptop with Built-in Voice Assistant",
    "Rugged Laptop with Waterproof Keyboard",
  ];

  const name = names[Math.floor(Math.random() * names.length)];
  const originalPrice = getRandom(40000, 90000);
  const discountPercent = getRandom(25, 60);
  const price = Math.floor((originalPrice * (100 - discountPercent)) / 100);
  const discount = `${discountPercent}% off`;
  const rating = (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1);
  const reviews = `(${getRandom(500, 15000)})`;
  const star = `${getRandom(3, 5)}`;

  return {
    id,
    name,
    price: `₹${price.toLocaleString()}`,
    pricevalue: price,
    originalPrice: `₹${originalPrice.toLocaleString()}`,
    discount,
    rating,
    reviews,
    star,
    img: `/l${id}.png`,
  };
};

const generateConsoleData = (id) => {
  const names = [
    "Next-Gen PlayStation 5 with Ultra-Fast SSD",
    "Powerful Xbox Series X with 4K Gaming Support",
    "Portable Nintendo Switch OLED with Enhanced Display",
    "Handheld Steam Deck with High Performance",
    "Advanced PlayStation 4 Pro with HDR Graphics",
    "Compact Xbox Series S with Digital Gaming",
    "Lightweight Nintendo Switch Lite with Long Battery Life",
    "Innovative PlayStation Portal with Remote Play",
  ];

  const name = names[Math.floor(Math.random() * names.length)];
  const originalPrice = getRandom(40000, 90000);
  const discountPercent = getRandom(25, 60);
  const price = Math.floor((originalPrice * (100 - discountPercent)) / 100);
  const discount = `${discountPercent}% off`;
  const rating = (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1);
  const reviews = `(${getRandom(500, 15000)})`;
  const star = `${getRandom(3, 5)}`;

  return {
    id,
    name,
    price: `₹${price.toLocaleString()}`,
    pricevalue: price,
    originalPrice: `₹${originalPrice.toLocaleString()}`,
    discount,
    rating,
    reviews,
    star,
    img: `/c${id}.png`,
  };
};

const generateSpeakerData = (id) => {
  const names = [
    "Next-Gen Bluetooth Speaker with Ultra-Fast Wireless Streaming",
    "Powerful Smart Speaker with 4K Audio Clarity",
    "Portable Wireless Speaker with Enhanced Bass",
    "Handheld Mini Speaker with High Performance Sound",
    "Advanced Home Speaker with HDR Audio",
    "Compact Bluetooth Speaker with Digital Sound",
    "Lightweight Travel Speaker with Long Battery Life",
    "Innovative Smart Speaker with Voice Control",
  ];

  const name = names[Math.floor(Math.random() * names.length)];
  const originalPrice = getRandom(40000, 90000);
  const discountPercent = getRandom(25, 60);
  const price = Math.floor((originalPrice * (100 - discountPercent)) / 100);
  const discount = `${discountPercent}% off`;
  const rating = (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1);
  const reviews = `(${getRandom(500, 15000)})`;
  const star = `${getRandom(3, 5)}`;

  return {
    id,
    name,
    price: `₹${price.toLocaleString()}`,
    pricevalue: price,
    originalPrice: `₹${originalPrice.toLocaleString()}`,
    discount,
    rating,
    reviews,
    star,
    img: `/s${id}.png`,
  };
};

export const products = productIds.map((id) => generateProductData(id));
export const watches = watchIds.map((id) => generateWatchData(id));
export const laptops = laptopIds.map((id) => generateLaptopData(id));
export const consoles = consoleIds.map((id) => generateConsoleData(id));
export const speakers = speakerIds.map((id) => generateSpeakerData(id));
