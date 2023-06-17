const birdsByCity = require("./birdsByCity");
const birds = require("./birdsByCity");

const birdsController = {};

birdsController.birds = async (req, res, next) => {
    // define which species are expected during each month, based on region
    const { city } = req.body;

    const janBirds = city === "Austin" ? birdsByCity.austin.jan :
        city === "Dallas" ? birdsByCity.dallas.jan :
            city === "Houston" ? birdsByCity.houston.jan :
                city === "San Antonio" ? birdsByCity.sanAntonio.jan : [];;
    const febBirds = city === "Austin" ? birdsByCity.austin.feb :
        city === "Dallas" ? birdsByCity.dallas.feb :
            city === "Houston" ? birdsByCity.houston.feb :
                city === "San Antonio" ? birdsByCity.sanAntonio.feb : [];
    const marBirds = city === "Austin" ? birdsByCity.austin.mar :
        city === "Dallas" ? birdsByCity.dallas.mar :
            city === "Houston" ? birdsByCity.houston.mar :
                city === "San Antonio" ? birdsByCity.sanAntonio.mar : [];
    const aprBirds = city === "Austin" ? birdsByCity.austin.apr :
        city === "Dallas" ? birdsByCity.dallas.apr :
            city === "Houston" ? birdsByCity.houston.apr :
                city === "San Antonio" ? birdsByCity.sanAntonio.apr : [];
    const mayBirds = city === "Austin" ? birdsByCity.austin.may :
        city === "Dallas" ? birdsByCity.dallas.may :
            city === "Houston" ? birdsByCity.houston.may :
                city === "San Antonio" ? birdsByCity.sanAntonio.may : [];
    const junBirds = city === "Austin" ? birdsByCity.austin.jun :
        city === "Dallas" ? birdsByCity.dallas.jun :
            city === "Houston" ? birdsByCity.houston.jun :
                city === "San Antonio" ? birdsByCity.sanAntonio.jun : [];
    const julBirds = city === "Austin" ? birdsByCity.austin.jul :
        city === "Dallas" ? birdsByCity.dallas.jul :
            city === "Houston" ? birdsByCity.houston.jul :
                city === "San Antonio" ? birdsByCity.sanAntonio.jul : [];
    const augBirds = city === "Austin" ? birdsByCity.austin.aug :
        city === "Dallas" ? birdsByCity.dallas.aug :
            city === "Houston" ? birdsByCity.houston.aug :
                city === "San Antonio" ? birdsByCity.sanAntonio.aug : [];
    const sepBirds = city === "Austin" ? birdsByCity.austin.sep :
        city === "Dallas" ? birdsByCity.dallas.sep :
            city === "Houston" ? birdsByCity.houston.sep :
                city === "San Antonio" ? birdsByCity.sanAntonio.sep : [];
    const octBirds = city === "Austin" ? birdsByCity.austin.oct :
        city === "Dallas" ? birdsByCity.dallas.oct :
            city === "Houston" ? birdsByCity.houston.oct :
                city === "San Antonio" ? birdsByCity.sanAntonio.oct : [];
    const novBirds = city === "Austin" ? birdsByCity.austin.nov :
        city === "Dallas" ? birdsByCity.dallas.nov :
            city === "Houston" ? birdsByCity.houston.nov :
                city === "San Antonio" ? birdsByCity.sanAntonio.nov : [];
    const decBirds = city === "Austin" ? birdsByCity.austin.dec :
        city === "Dallas" ? birdsByCity.dallas.dec :
            city === "Houston" ? birdsByCity.houston.dec :
                city === "San Antonio" ? birdsByCity.sanAntonio.dec : [];

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