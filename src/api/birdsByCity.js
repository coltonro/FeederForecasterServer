const birds = require("./birds");

const birdsByCity = {
    austin: {
        jan: [],
        feb: [],
        mar: [],
        apr: [],
        may: [],
        jun: [birds.paintedBunting, birds.blackChinnedHummingbird, birds.juveniles],
        jul: [birds.paintedBunting, birds.blackChinnedHummingbird, birds.juveniles],
        aug: [birds.paintedBunting, birds.blackChinnedHummingbird],
        sep: [],
        oct: [],
        nov: [],
        dec: []
    },
    dallas: {
        jan: [],
        feb: [],
        mar: [],
        apr: [],
        may: [],
        jun: [birds.paintedBunting, birds.rubyThroatedHummingbird, birds.juveniles],
        jul: [birds.paintedBunting, birds.rubyThroatedHummingbird, birds.juveniles],
        aug: [birds.paintedBunting, birds.rubyThroatedHummingbird],
        sep: [],
        oct: [],
        nov: [],
        dec: []
    },
    houston: {
        jan: [],
        feb: [],
        mar: [],
        apr: [],
        may: [],
        jun: [birds.paintedBunting, birds.rubyThroatedHummingbir, birds.juveniles],
        jul: [birds.paintedBunting, birds.rubyThroatedHummingbird, birds.juveniles],
        aug: [birds.paintedBunting, birds.rubyThroatedHummingbird],
        sep: [birds.paintedBunting, birds.rubyThroatedHummingbird],
        oct: [],
        nov: [],
        dec: []
    },
    sanAntonio: {
        jan: [],
        feb: [],
        mar: [],
        apr: [],
        may: [],
        jun: [birds.paintedBunting, birds.blackChinnedHummingbird, birds.juveniles],
        jul: [birds.paintedBunting, birds.blackChinnedHummingbird, birds.juveniles],
        aug: [birds.paintedBunting, birds.blackChinnedHummingbird],
        sep: [],
        oct: [],
        nov: [],
        dec: []
    },
}

module.exports = birdsByCity;