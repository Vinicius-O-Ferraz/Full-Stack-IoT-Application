const express = require("express")
const app = express()
const PORT = 3080

app.get('/devices', (req, res) => {
  const devices = [{
      id: 1,
      name: "Fridge",
      kwh: 23,
      current: 2.1,
      voltage: 127,
      fp:1
  }]
  res.json({
    success: true,
    devices: devices
  });
});

app.listen(PORT)
