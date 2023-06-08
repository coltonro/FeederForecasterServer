const birds = require("./birds");

const birdsController = {};

birdsController.birds = async (req, res, next) => {
    //const currentBirds = res.month === "June" ? birds.june : 
    //{};

    try {
        res.locals.birds = [birds.paintedBunting];
    } catch (err) {
        console.log('error in birdsController: ', err);
    }
    next();
};

module.exports = birdsController;