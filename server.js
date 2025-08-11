const express = require("express");
const next = require("next");
const { faker } = require("@faker-js/faker");
const _ = require("lodash");

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();
  app.use(express.json());

  // สร้างข้อมูล mock คงที่แค่ครั้งเดียวตอน server start
  const allHotels = _.times(300, (index) => ({
    id: index + 1,
    city: faker.location.city(),
    country: faker.location.country(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    hotelName: faker.company.name(),
    description: faker.lorem.sentence(),
    imageUrl: `https://picsum.photos/400/200?random=${faker.number.int(1000)}`,
    price: faker.number.int({ min: 1000, max: 2000 }),
  }));

  app.post("/api/hotel/calculate", (req, res) => {
    const { id, roomType, nights } = req.body;

    // ตรวจสอบว่ามีข้อมูลครบ
    if (!id || !roomType || !nights) {
      return res
        .status(400)
        .json({ error: "id, roomType และ nights จำเป็นต้องมี" });
    }

    // หาโรงแรมจาก mock data
    const hotel = allHotels.find((h) => h.id.toString() === id.toString());
    if (!hotel) {
      return res.status(404).json({ error: "Hotel not found" });
    }

    // Mock ราคาตาม roomType
    let roomTypeFactor = 1;
    switch (roomType.toLowerCase()) {
      case "deluxe":
        roomTypeFactor = 1;
        break;
      case "standard":
        roomTypeFactor = 1;
        break;
    }

    // คำนวณราคา
    const pricePerNight = Math.round(hotel.price * roomTypeFactor);
    const totalRoomPrice = pricePerNight * nights;
    const discount = 0; // mock ไม่มีส่วนลด
    const priceAfterDiscount = totalRoomPrice - discount;
    const tax = Math.round(priceAfterDiscount * 0.07); 
    const totalAmount = priceAfterDiscount + tax;

    res.json({
      id: hotel.id,
      name: hotel.hotelName,
      address: `${hotel.city}, ${hotel.state}, ${hotel.country}`,
      imageUrl: hotel.imageUrl,
      pricePerNight,
      nights,
      discount,
      tax,
      totalAmount,
      description: hotel.description,
      city: hotel.city,
      country: hotel.country,
    });
  });

  app.get("/api/hotel/:id", (req, res) => {
    const { id } = req.params;
    const hotel = allHotels.find((hotel) => hotel.id.toString() === id);

    if (!hotel) {
      return res.status(404).json({ error: "Hotel not found" });
    }
    res.json(hotel);
  });

  app.get("/api/search", (req, res) => {
    const location = req.query.location;

    // ถ้า location ไม่มี หรือ เป็นค่าว่าง
    if (!location || location.trim() === "") {
      // ส่ง allHotels ทั้งหมดกลับไปเลย
      return res.json(allHotels);
    }

    // กรองจากข้อมูลคงที่
    const filtered = allHotels.filter(
      (hotel) =>
        hotel.city.toLowerCase().includes(location.toLowerCase()) ||
        hotel.country.toLowerCase().includes(location.toLowerCase()) ||
        hotel.state.toLowerCase().includes(location.toLowerCase()) ||
        hotel.hotelName.toLowerCase().includes(location.toLowerCase())
    );

    res.json(filtered);
  });

  app.all("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
  });
});
