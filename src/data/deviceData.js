// src/data/deviceData.js

export const deviceBrands = {
  phones: [
    "Apple", "MI", "Samsung", "Vivo", "OnePlus", "Oppo", "Realme",
    "Motorola"
  ],
  tablets: ["Samsung Tablet", "Lenovo Tablet"],
  ipads: ["iPad", "iPad Mini", "iPad Air", "iPad Pro"],
  macbooks: ["MacBook Air", "MacBook Pro"],
  watches: ["Apple Watch"]
};

export const deviceModelMap = {
  // 🔹 Apple Watch
  "Apple Watch": [
    { name: "Apple Watch Series SE 2", image: "/images/watch/se2.webp" },
    { name: "Apple Watch Series Ultra 2", image: "/images/watch/ultra2.webp" },
    { name: "Apple Watch Series Ultra 1", image: "/images/watch/ultra1.webp" },
    { name: "Apple Watch Series 9", image: "/images/watch/9.webp" },
    { name: "Apple Watch Series 8", image: "/images/watch/8.webp" },
  ],

  // 🔹 iPads
  iPad: [
    "iPad 10th Generation", "iPad 9th Generation", "iPad 8th Generation",
    "iPad 7th Generation", "iPad 6th Generation", "iPad 5th Generation",
    "iPad 4th Generation"
  ],
  "iPad Mini": ["iPad Mini 6", "iPad Mini 5", "iPad Mini 4"],
  "iPad Air": ["iPad Air 5", "iPad Air 4", "iPad Air 3"],
  "iPad Pro": ["iPad Pro 12.9", "iPad Pro 11", "iPad Pro 10.5"],

  // 🔹 Tablets
  "Samsung Tablet": [
  { name: "Samsung Galaxy Tab A7", image: "/images/tablets/samsung-tab-a7.webp" },
  { name: "Samsung Galaxy Tab S10 Plus", image: "/images/tablets/samsung-tab-s10-plus.webp" },
  { name: "Samsung Galaxy Tab S10 Ultra 5G", image: "/images/tablets/samsung-tab-s10-ultra-5g.webp" },
  { name: "Samsung Galaxy Tab S10 Ultra", image: "/images/tablets/samsung-tab-s10-ultra.webp" },
  { name: "Samsung Galaxy Tab S10 Plus 5G", image: "/images/tablets/samsung-tab-s10-plus-5g.webp" },
  { name: "Samsung Galaxy Tab A9 Plus 5G", image: "/images/tablets/samsung-tab-a9-plus-5g.webp" },
  { name: "Samsung Galaxy Tab S9", image: "/images/tablets/samsung-tab-s9.webp" },
  { name: "Samsung Galaxy Tab S9 Plus", image: "/images/tablets/samsung-tab-s9-plus.webp" },
  { name: "Samsung Galaxy Tab S9 FE", image: "/images/tablets/samsung-tab-s9-fe.webp" }
],

"Lenovo Tablet": [
  { name: "Lenovo Tab M10", image: "/images/tablets/lenovo-tab-m10.webp" },
  { name: "Lenovo Tab M9", image: "/images/tablets/lenovo-tab-m9.webp" },
  { name: "Lenovo Tab P11", image: "/images/tablets/lenovo-tab-p11.webp" },
  { name: "Lenovo Yoga Tab 13", image: "/images/tablets/lenovo-yoga-tab-13.webp" },
  { name: "Lenovo Yoga Tab 11", image: "/images/tablets/lenovo-yoga-tab-11.webp" }
],

  // 🔹 MacBooks
  "MacBook Air": [
    { name: "MacBook Air A2179", image: "/images/macbooks/a2179.webp" },
    { name: "MacBook Air A1465", image: "/images/macbooks/a1465.webp" },
    { name: "MacBook Air A1370", image: "/images/macbooks/a1370.webp" },
    { name: "MacBook Air 2023 A2941", image: "/images/macbooks/a2941.webp" },
    { name: "MacBook Air 2022 A2681", image: "/images/macbooks/a2681.webp" }
  ],
  "MacBook Pro": [
    { name: "MacBook Pro A1990", image: "/images/macbooks/pro-a1990.webp" },
    { name: "MacBook Pro A2338", image: "/images/macbooks/pro-a2338.webp" },
    { name: "MacBook Pro A1502", image: "/images/macbooks/pro-a1502.webp" },
    { name: "MacBook Pro 2023", image: "/images/macbooks/pro-2023.webp" },
    { name: "MacBook Pro M2", image: "/images/macbooks/pro-m2.webp" }
  ],

iPad: [
  { name: "iPad 10th Generation", image: "/images/ipad/10th-gen.webp" },
  { name: "iPad 9th Generation", image: "/images/ipad/9th-gen.webp" },
  { name: "iPad 8th Generation", image: "/images/ipad/8th-gen.webp" },
  { name: "iPad 7th Generation", image: "/images/ipad/7th-gen.webp" },
  { name: "iPad 6th Generation", image: "/images/ipad/6th-gen.webp" },
  { name: "iPad 5th Generation", image: "/images/ipad/5th-gen.webp" },
  { name: "iPad 4th Generation", image: "/images/ipad/4th-gen.webp" },
   { name: "iPad 3th Generation", image: "/images/ipad/3th-gen.webp" },
    { name: "iPad 2th Generation", image: "/images/ipad/2th-gen.webp" },
     { name: "iPad 1th Generation", image: "/images/ipad/1th-gen.webp" }
],
"iPad Mini": [
  { name: "iPad Mini 6", image: "/images/ipad/mini-6.webp" },
  { name: "iPad Mini 5", image: "/images/ipad/mini-5.webp" },
  { name: "iPad Mini 4", image: "/images/ipad/mini-4.webp" }
],

"iPad Air": [
  { name: "iPad Air 5", image: "/images/ipad/air-5.webp" },
  { name: "iPad Air 4", image: "/images/ipad/air-4.webp" },
  { name: "iPad Air 3", image: "/images/ipad/air-3.webp" }
],
"iPad Pro": [
  { name: "iPad Pro 12.9", image: "/images/ipad/pro-12.9.webp" },
  { name: "iPad Pro 11", image: "/images/ipad/pro-11.webp" },
  { name: "iPad Pro 10.5", image: "/images/ipad/pro-10.5.webp" }
],


  // 🔹 Phones
  Apple: [
    { name: "iPhone 15 Pro Max", image: "/images/models/15promax.png" },
    { name: "iPhone 15 Pro", image: "/images/models/15pro.png" },
    { name: "iPhone 15 Plus", image: "/images/models/15plus.png" },
    { name: "iPhone 15", image: "/images/models/15.png" },
    { name: "iPhone 14 Pro Max", image: "/images/models/14promax.png" },
    { name: "iPhone 14 Pro", image: "/images/models/14pro.png" },
    { name: "iPhone 14 Plus", image: "/images/models/14plus.png" },
    { name: "iPhone 14", image: "/images/models/14.png" },
    { name: "iPhone 13 Pro Max", image: "/images/models/13promax.png" },
    { name: "iPhone 13 Pro", image: "/images/models/13pro.png" },
    { name: "iPhone 13 Mini", image: "/images/models/13mini.png" },
    { name: "iPhone 13", image: "/images/models/13.png" },
    { name: "iPhone 12 Pro Max", image: "/images/models/12promax.png" },
    { name: "iPhone 12 Pro", image: "/images/models/12pro.png" },
    { name: "iPhone 12 Mini", image: "/images/models/12mini.png" },
    { name: "iPhone 12", image: "/images/models/12.png" },
    { name: "iPhone 11 Pro Max", image: "/images/models/11promax.png" },
    { name: "iPhone 11 Pro", image: "/images/models/11pro.png" },
    { name: "iPhone 11", image: "/images/models/11.png" },
    { name: "iPhone XS", image: "/images/models/xs.png" },
    { name: "iPhone XR", image: "/images/models/xr.png" },
    { name: "iPhone X", image: "/images/models/x.png" },
    { name: "iPhone 8 Plus", image: "/images/models/8plus.png" },
    { name: "iPhone 8", image: "/images/models/8.png" },
    { name: "iPhone 7 Plus", image: "/images/models/7plus.png" },
    { name: "iPhone 7", image: "/images/models/7.png" },
    { name: "iPhone 6S Plus", image: "/images/models/6splus.png" },
    { name: "iPhone 6S", image: "/images/models/6s.png" },
    { name: "iPhone 6 Plus", image: "/images/models/6plus.png" },
    { name: "iPhone 6", image: "/images/models/6.png" }
    ],
  MI: [
    { name: "Redmi Note 13 Pro+", image: "/images/models/note13proplus.png" },
    { name: "Redmi Note 13 Pro", image: "/images/models/note13pro.png" },
    { name: "Redmi Note 13", image: "/images/models/note13.png" },
    { name: "Redmi Note 12 Pro+", image: "/images/models/note12proplus.png" },
    { name: "Redmi Note 12 Pro", image: "/images/models/note12pro.png" },
    { name: "Redmi Note 12", image: "/images/models/note12.png" },
    { name: "Redmi Note 11 Pro+", image: "/images/models/note11proplus.png" },
    { name: "Redmi Note 11 Pro", image: "/images/models/note11pro.png" },
    { name: "Redmi Note 11", image: "/images/models/note11.png" },
    { name: "Redmi Note 10 Pro Max", image: "/images/models/note10promax.png" },
    { name: "Redmi Note 10 Pro", image: "/images/models/note10pro.png" },
    { name: "Redmi Note 10", image: "/images/models/note10.png" },
    { name: "Redmi Note 9 Pro Max", image: "/images/models/note9promax.png" },
    { name: "Redmi Note 9 Pro", image: "/images/models/note9pro.png" },
    { name: "Redmi Note 9", image: "/images/models/note9.png" },
    { name: "Redmi Note 8 Pro", image: "/images/models/note8pro.png" },
 ],
  Samsung: [
    { name: "Galaxy S25 Ultra", image: "/images/models/s25ultra.png" },
    { name: "Galaxy S25+", image: "/images/models/s25plus.png" },
    { name: "Galaxy S25", image: "/images/models/s25.png" },
    { name: "Galaxy S24 Ultra", image: "/images/models/s24ultra.png" },
    { name: "Galaxy S24+", image: "/images/models/s24plus.png" },
    { name: "Galaxy S24", image: "/images/models/s24.png" },
    { name: "Galaxy S23 Ultra", image: "/images/models/s23ultra.png" },
    { name: "Galaxy S23+", image: "/images/models/s23plus.png" },
    { name: "Galaxy S23", image: "/images/models/s23.png" },
    { name: "Galaxy Z Fold6", image: "/images/models/zflip6.png" },
    { name: "Galaxy Z Flip6", image: "/images/models/zflip6.png" },
    { name: "Galaxy Z Fold5", image: "/images/models/zfold5.png" },
    { name: "Galaxy Z Flip5", image: "/images/models/zflip5.png" },
    { name: "Galaxy A73 5G", image: "/images/models/a73.png" },
    { name: "Galaxy A72", image: "/images/models/a72.png" },
    { name: "Galaxy A71", image: "/images/models/a71.png" },
    { name: "Galaxy A70", image: "/images/models/a70.png" },
    { name: "Galaxy A54 5G", image: "/images/models/a54.png" },
    { name: "Galaxy A53 5G", image: "/images/models/a53.png" },
    { name: "Galaxy A52s 5G", image: "/images/models/a52s.png" },
    { name: "Galaxy A52", image: "/images/models/a52.png" },
    { name: "Galaxy A51", image: "/images/models/a51.png" },
    { name: "Galaxy A50", image: "/images/models/a50.png" },
    { name: "Galaxy M53 5G", image: "/images/models/m53.png" },
    { name: "Galaxy M52 5G", image: "/images/models/m52.png" },
    { name: "Galaxy M51", image: "/images/models/m51.png" },
   
    { name: "Galaxy M32", image: "/images/models/m32.png" },
    { name: "Galaxy M31", image: "/images/models/m31.png" },
   ],
  Vivo: [
    { name: "Vivo X100 Pro", image: "/images/models/x100pro.png" },
    { name: "Vivo X90 Pro+", image: "/images/models/x90proplus.png" },
    { name: "Vivo X80 Pro", image: "/images/models/x80pro.png" },
    { name: "Vivo X70 Pro+", image: "/images/models/x70proplus.png" },
    { name: "Vivo X60 Pro+", image: "/images/models/x60proplus.png" },
    { name: "Vivo V30 Pro", image: "/images/models/v30pro.png" },
    { name: "Vivo V29 Pro", image: "/images/models/v29pro.png" },
    { name: "Vivo V27 Pro", image: "/images/models/v27pro.png" },
    { name: "Vivo V25 Pro", image: "/images/models/v25pro.png" },
    { name: "Vivo V23 Pro", image: "/images/models/v23pro.png" }
  ],
  OnePlus: [
    { name: "OnePlus 13", image: "/images/brands/oneplus/13.png" },
    { name: "OnePlus 12R", image: "/images/brands/oneplus/12r.png" },
    { name: "OnePlus 12", image: "/images/brands/oneplus/12.png" },
    { name: "OnePlus 11R", image: "/images/brands/oneplus/11r.png" },
    { name: "OnePlus 11", image: "/images/brands/oneplus/11.png" },
    { name: "OnePlus 10T", image: "/images/brands/oneplus/10t.png" },
    { name: "OnePlus 9RT", image: "/images/brands/oneplus/9rt.png" },
    { name: "OnePlus Nord CE4", image: "/images/brands/oneplus/nordce4.png" },
    { name: "OnePlus Nord 3 5g", image: "/images/brands/oneplus/nord3.png" },
    { name: "OnePlus Nord", image: "/images/brands/oneplus/nord.png" },
 ],
  Oppo: [
  { name: "Oppo Find X8 Pro", image: "/images/models/findx8pro.png" },
  { name: "Oppo Find X8", image: "/images/models/findx8.png" },
  { name: "Oppo Reno 12 Pro", image: "/images/models/reno12pro.png" },
  { name: "Oppo Reno 12", image: "/images/models/reno12.png" },
  { name: "Oppo Find X7 Ultra", image: "/images/models/findx7ultra.png" },
  { name: "Oppo Reno 11 Pro 5G", image: "/images/models/reno11pro5g.png" },
  { name: "Oppo A3 Pro", image: "/images/models/a3pro.png" },
  { name: "Oppo A79 5G", image: "/images/models/a79.png" },
  { name: "Oppo A59 5G", image: "/images/models/a59.png" },
  { name: "Oppo A38", image: "/images/models/a38.png" }],
  Realme: [
    { name: "Realme GT 7 Pro", image: "/images/models/gt7pro.png" },
    { name: "Realme GT 6", image: "/images/models/gt6.png" },
    { name: "Realme GT 5", image: "/images/models/gt5.png" },
    { name: "Realme 12 Pro+", image: "/images/models/12proplus.png" },
    { name: "Realme 11 Pro+", image: "/images/models/11proplus.png" },
    { name: "Realme 10 Pro+", image: "/images/models/10proplus.png" },
    { name: "Realme Narzo 60 Pro", image: "/images/models/narzo60pro.png" },
    { name: "Realme Narzo 50 Pro", image: "/images/models/narzo50pro.png" },
    { name: "Realme C67 5G", image: "/images/models/c67.png" },
    { name: "Realme C55", image: "/images/models/c55.png" }
  ],
  Motorola: [
    { name: "Moto Edge 50 Ultra", image: "/images/models/edge50ultra.png" },
    { name: "Moto Edge 40 Pro", image: "/images/models/edge40pro.png" },
    { name: "Moto Edge 30 Ultra", image: "/images/models/edge30ultra.png" },
    { name: "Moto G Stylus 2025", image: "/images/models/gstylus2025.png" },
    { name: "Moto G Power 2024", image: "/images/models/gpower2024.png" },
    { name: "Moto G73 5G", image: "/images/models/g735g.png" },
    { name: "Moto G62 5G", image: "/images/models/g625g.png" },
    { name: "Moto G52", image: "/images/models/g52.png" },
    { name: "Moto E32", image: "/images/models/e32.png" },
    { name: "Moto E22", image: "/images/models/e22.png" }],
 
};
