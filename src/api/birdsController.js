const birdsByCity = require("./birdsByCity");
const birds = require("./birdsByCity");

const birdsController = {};

birdsController.birds = async (req, res, next) => {
    // define which species are expected during each month, based on region
    const { city } = req.body;

    const janBirds = [];
    const febBirds = city === "Austin" ? birdsByCity.austin.feb :
        city === "Dallas" ? birdsByCity.dallas.feb :
            city === "Houston" ? birdsByCity.houston.feb :
                city === "San Antonio" ? birdsByCity.sanAntonio.feb : [];
    const marBirds = [birds.paintedBunting, birds.rubyThroatedHummingbird];
    const aprBirds = [birds.paintedBunting, birds.rubyThroatedHummingbird];
    const mayBirds = [birds.paintedBunting, birds.rubyThroatedHummingbird];
    const junBirds = city === "Austin" ? birdsByCity.austin.jun :
        city === "Dallas" ? birdsByCity.dallas.jun :
            city === "Houston" ? birdsByCity.houston.jun :
                city === "San Antonio" ? birdsByCity.sanAntonio.jun : [];
    const julBirds = [birds.paintedBunting, birds.rubyThroatedHummingbird];
    const augBirds = [birds.paintedBunting, birds.rubyThroatedHummingbird];
    const sepBirds = [birds.paintedBunting, birds.rubyThroatedHummingbird];
    const octBirds = [birds.paintedBunting, birds.rubyThroatedHummingbird];
    const novBirds = [birds.paintedBunting, birds.rubyThroatedHummingbird];
    const decBirds = [birds.paintedBunting, birds.rubyThroatedHummingbird];

    const currentBirds = res.month === "Januray" ? janBirds :
        res.month === "February" ? febBirds :
            res.month === "March" ? marBirds :
                res.month === "April" ? aprBirds :
                    res.month === "May" ? mayBirds :
                        res.month === "June" ? junBirds :
                            res.month === "July" ? julBirds :
                                res.month === "August" ? augBirds :
                                    res.month === "September" ? sepBirds :
                                        res.month === "Octber" ? octBirds :
                                            res.month === "November" ? novBirds :
                                                res.month === "December" ? decBirds : [];

    try {
        res.locals.birds = currentBirds;
    } catch (err) {
        console.log('error in birdsController: ', err);
    }
    next();
};

module.exports = birdsController;