const birds = require("./birds");

const birdsByCity = {
    austin: {
        jan: [birds.cedarWaxwing, birds.americanGoldfinch, birds.yellowRumpedWarbler, birds.blueJay, birds.redBelliedWoodpecker, birds.goldenFrontedWoodpecker, birds.ladderBackedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.lesserGoldfinch, birds.houseSparrow, birds.europeanStarling],
        feb: [birds.cedarWaxwing, birds.americanGoldfinch, birds.yellowRumpedWarbler, birds.blueJay, birds.redBelliedWoodpecker, birds.goldenFrontedWoodpecker, birds.ladderBackedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.lesserGoldfinch, birds.houseSparrow, birds.europeanStarling],
        mar: [birds.blackChinnedHummingbird, birds.cedarWaxwing, birds.americanGoldfinch, birds.yellowRumpedWarbler, birds.blueJay, birds.redBelliedWoodpecker, birds.goldenFrontedWoodpecker, birds.ladderBackedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.lesserGoldfinch, birds.houseSparrow, birds.europeanStarling],
        apr: [birds.blackChinnedHummingbird, birds.rubyThroatedHummingbird, birds.cedarWaxwing, birds.houseWren, birds.yellowRumpedWarbler, birds.nashvilleWarbler, birds.blueJay, birds.redBelliedWoodpecker, birds.goldenFrontedWoodpecker, birds.ladderBackedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.lesserGoldfinch, birds.houseSparrow, birds.europeanStarling],
        may: [birds.blackChinnedHummingbird, , birds.orchardOriole, birds.baltimoreOriole, birds.grayCatbird, birds.yellowWarbler, birds.blueJay, birds.redBelliedWoodpecker, birds.goldenFrontedWoodpecker, birds.ladderBackedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.lesserGoldfinch, birds.houseSparrow, birds.europeanStarling],
        jun: [birds.paintedBunting, birds.blackChinnedHummingbird, , birds.juveniles, birds.blueJay, birds.redBelliedWoodpecker, birds.goldenFrontedWoodpecker, birds.ladderBackedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.lesserGoldfinch, birds.houseSparrow, birds.europeanStarling],
        jul: [birds.paintedBunting, birds.blackChinnedHummingbird, , birds.juveniles, birds.blueJay, birds.redBelliedWoodpecker, birds.goldenFrontedWoodpecker, birds.ladderBackedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.lesserGoldfinch, birds.houseSparrow, birds.europeanStarling],
        aug: [birds.paintedBunting, birds.blackChinnedHummingbird, birds.rubyThroatedHummingbird, birds.orchardOriole, birds.blueJay, birds.redBelliedWoodpecker, birds.goldenFrontedWoodpecker, birds.ladderBackedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.lesserGoldfinch, birds.houseSparrow, birds.europeanStarling],
        sep: [birds.blackChinnedHummingbird, birds.rubyThroatedHummingbird, birds.baltimoreOriole, birds.nashvilleWarbler, birds.yellowWarbler, birds.blueJay, birds.redBelliedWoodpecker, birds.goldenFrontedWoodpecker, birds.ladderBackedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.lesserGoldfinch, birds.houseSparrow, birds.europeanStarling],
        oct: [birds.nashvilleWarbler, birds.blueJay, birds.redBelliedWoodpecker, birds.goldenFrontedWoodpecker, birds.ladderBackedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.lesserGoldfinch, birds.houseSparrow, birds.europeanStarling],
        nov: [birds.yellowRumpedWarbler, birds.blueJay, birds.redBelliedWoodpecker, birds.goldenFrontedWoodpecker, birds.ladderBackedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.lesserGoldfinch, birds.houseSparrow, birds.europeanStarling],
        dec: [birds.cedarWaxwing, birds.americanGoldfinch, birds.yellowRumpedWarbler, birds.blueJay, birds.redBelliedWoodpecker, birds.goldenFrontedWoodpecker, birds.ladderBackedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.lesserGoldfinch, birds.houseSparrow, birds.europeanStarling]
    },
    dallas: {
        jan: [birds.cedarWaxwing, birds.americanGoldfinch, birds.yellowRumpedWarbler, birds.blueJay, birds.redBelliedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.houseSparrow, birds.europeanStarling],
        feb: [birds.cedarWaxwing, birds.americanGoldfinch, birds.yellowRumpedWarbler, birds.blueJay, birds.redBelliedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.houseSparrow, birds.europeanStarling],
        mar: [birds.cedarWaxwing, birds.americanGoldfinch, birds.yellowRumpedWarbler, birds.blueJay, birds.redBelliedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.houseSparrow, birds.europeanStarling],
        apr: [birds.rubyThroatedHummingbird, birds.cedarWaxwing, birds.houseWren, birds.yellowRumpedWarbler, birds.nashvilleWarbler, birds.blueJay, birds.redBelliedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.houseSparrow, birds.europeanStarling],
        may: [birds.rubyThroatedHummingbird, birds.cedarWaxwing, birds.orchardOriole, birds.baltimoreOriole, birds.grayCatbird, birds.yellowWarbler, birds.blueJay, birds.redBelliedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.houseSparrow, birds.europeanStarling],
        jun: [birds.paintedBunting, birds.rubyThroatedHummingbird, birds.juveniles, birds.blueJay, birds.redBelliedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.houseSparrow, birds.europeanStarling],
        jul: [birds.paintedBunting, birds.rubyThroatedHummingbird, birds.juveniles, birds.blueJay, birds.redBelliedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.houseSparrow, birds.europeanStarling],
        aug: [birds.paintedBunting, birds.rubyThroatedHummingbird, birds.blueJay, birds.redBelliedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.houseSparrow, birds.europeanStarling],
        sep: [birds.rubyThroatedHummingbird, birds.blueJay, birds.redBelliedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.houseSparrow, birds.europeanStarling],
        oct: [birds.yellowRumpedWarbler, birds.blueJay, birds.redBelliedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.houseSparrow, birds.europeanStarling],
        nov: [birds.americanGoldfinch, birds.yellowRumpedWarbler, birds.blueJay, birds.redBelliedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.houseSparrow, birds.europeanStarling],
        dec: [birds.cedarWaxwing, birds.americanGoldfinch, birds.yellowRumpedWarbler, birds.blueJay, birds.redBelliedWoodpecker, birds.downyWoodpecker, birds.northernCardinal, birds.carolinaChickadee, birds.tuftedTitmouse, birds.houseFinch, birds.houseSparrow, birds.europeanStarling]
    },
    houston: {
        jan: [birds.yellowRumpedWarbler, birds.blueJay],
        feb: [birds.yellowRumpedWarbler, birds.blueJay],
        mar: [birds.yellowRumpedWarbler, birds.blueJay],
        apr: [birds.blueJay],
        may: [birds.blueJay],
        jun: [birds.paintedBunting, birds.rubyThroatedHummingbird, birds.juveniles, birds.blueJay],
        jul: [birds.paintedBunting, birds.rubyThroatedHummingbird, birds.juveniles, birds.blueJay],
        aug: [birds.paintedBunting, birds.rubyThroatedHummingbird, birds.blueJay],
        sep: [birds.paintedBunting, birds.rubyThroatedHummingbird, birds.blueJay],
        oct: [birds.blueJay],
        nov: [birds.yellowRumpedWarbler, birds.blueJay],
        dec: [birds.yellowRumpedWarbler, birds.blueJay]
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