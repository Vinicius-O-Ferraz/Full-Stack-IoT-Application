const router = require('express').Router() //router é um controlador de rotas

router.get('/devices', (req, res) => {
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

  module.exports = router