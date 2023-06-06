const sunflower = {
    title: 'Sunflower',
    desc: 'High quality protein',
    imgPath: '/sunflowerseeds.jpg',
    details: {
        1: "Favorite of Cardinals",
        2: "Seed eaters love it (Cardinals, Chickadees, Titmice, Finches)",
        3: "De-shelled are most attractive, especially to small birds",
    }
};

const suet = {
    title: 'Suet',
    desc: 'Crude fat for energy',
    imgPath: '/suet_cake.png',
    details: {
        1: "Appeals to more species than any other food",
        2: "Brings in hard-to-attract birds like wrens and warblers",
        3: "Especially valuble in cold weather to help replinish fat stores for warmth",
    }
};

const peanuts = {
    title: 'Peanuts',
    desc: 'Favorite of Jays & Woodpeckers',
    imgPath: '/peanuts.jpg',
    details: {
        1: "Whole peanuts are great for Jays & sometimes larger woodpeckers",
        2: "Shelled peanuts attract additional birds like Titmice & Cardinals",
        3: "Jays collect and cache peanuts during fall for upcoming winter months"
    }
};

const water = {
    title: 'Water',
    desc: 'Attracts variety & low cost',
    imgPath: '/bird_bath_robin.png',
    details: {
        1: "Attracts more diversity than food alone",
        2: "More cost effective than bird feeders",
        3: "Especially valuble during hot and dry months"
    }
}

const nectar = {
    title: 'Nectar',
    desc: 'Energy for Hummingbirds',
    imgPath: '/hummingbird_feeder.png',
    details: {
        1: "Helps hummingbirds hydrate and replish calories.",
        2: "A 4 to 1 ratio of water to sugar mimics real flower nectar.",
        3: "Spoils quickly in heat. Should be replaced every 2-3 days"
    }
};

const jelly = {
    title: 'Jelly',
    desc: 'Orioles LOVE this sugary treat',
    imgPath: '/oriole_feeder.png',
    details: {
        1: "Grape jelly is most widely used, but other flavors work too",
        2: "Place on a brightly colored surface (red/orange) to catch orioles' attention",
        3: "Works great with Oriole feeders"
    }
}

const millet = {
    title: 'Millet',
    desc: 'A favorite of Buntings',
    imgPath: '/millet.png',
    details: {
        1: "Best food for Painted Buntings",
        2: "Good for native sparrow species during winter months",
        3: "Avoid millet if House Sparrows are a problem at your feeders"
    }
}

const foodController = {}

foodController.foods = async (req, res, next) => {
    // determine the current season, so prediction output can be more specific
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

    try {
        const recommendBySeason = () => {
            if (determineSeason() === "Winter") return [suet, sunflower, peanuts, jelly]
            // if (determineSeason() === "Spring") return [sunflower, suet, peanuts, nectar, water]
            if (determineSeason() === "Spring") return [sunflower]
            if (determineSeason() === "Summer") return [sunflower, nectar, water, millet]
            if (determineSeason() === "Fall") return [sunflower, suet, peanuts, water, millet]
        }

        res.locals.foods = recommendBySeason();
    } catch (err) {
        console.error(`Error in seasonalFoods.ts: `, err.message);
        next(err);
    }

    next()
}

module.exports = foodController;