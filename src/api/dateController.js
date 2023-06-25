dateController = {};

dateController.date = async (req, res, next) => {
    // determine the current season, so prediction output, food recommendations, and expected birds can be temporally specific
    const determineSeason = () => {
        const today = new Date().toISOString().split('T')[0];
        const todayAsDate = new Date(today)
        const year = new Date().getFullYear();

        // seasons approximated by general Texas temps and bird activity, not actual equinox and solstice timings.
        const spring = new Date(`${year}-04-01`);
        const summer = new Date(`${year}-05-16`);
        const fall = new Date(`${year}-09-15`);
        const winter = new Date(`${year}-11-15`);

        if (todayAsDate >= spring && todayAsDate < summer) {
            return "Spring"
        } else if (todayAsDate >= summer && todayAsDate < fall) {
            return "Summer"
        } else if (todayAsDate >= fall && todayAsDate < winter) {
            return "Fall"
        } else {
            return "Winter"
        }
    }

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[new Date().getMonth()];

    try {
        res.season = determineSeason();
        res.month = month;
    } catch (err) {
        console.log('error in dateController: ', err);
        res.error = {"error in dateController": err};
        next(err);
    }
    next();
}

module.exports = dateController;