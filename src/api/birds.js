const birds = {
    northernCardinal: {
        title: "Northern Cardinal",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: true
    },
    carolinaWren: {
        title: "Carolina Wren",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: true
    },
    bewicksWren: {
        title: "Bewick's Wren",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: true
    },
    tuftedTitmouse: {
        title: "Tufted Titmouse",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: true
    },
    blackCrestedTitmouse: {
        title: "Black-crested Titmouse",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: true
    },
    carolinaChickadee: {
        title: "Carolina Chickadee",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: true
    },
    northernMockingbird: {
        title: "Northern Mockingbird",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: true
    },
    blueJay: {
        title: "Blue Jay",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Loves peanuts",
            2: "May visit bird baths and water sources",
            3: "Usually travels in family groups of 2 - 7"
        },
        yearround: true
    },
    europeanStarling: {
        title: "European Starling",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Invasive, typically a nuisance at feeders",
            2: "Drawn to soft foods like suet or de-shelled seeds",
            3: "Typically travel in small groups"
        },
        yearround: true
    },
    houseSparrow: {
        title: "House Sparrow",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: true
    },
    paintedBunting: {
        title: "Painted Bunting",
        desc: "Uncommon",
        imgPath: "/Painted_Bunting-cropped.png",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: false
    },
    rubyThroatedHummingbird: {
        title: "Ruby-throated Hummingbird",
        desc: "",
        imgPath: "Common",
        details: {
            1: "Easy to attract with hummingbird feeders",
            2: "Will feed on red, orange, and yellow flowers",
            3: ""
        },
        yearround: false
    },
    blackChinnedHummingbird: {
        title: "Black-chinned Hummingbird",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: false
    },
    juveniles: {
        title: "Juvenile Birds",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Baby birds have hatched, fledged, and left the nest",
            2: "Young follow parents around, learning how to eat and be a bird",
            3: "Commonly seen young include Blue Jay, Titmice, and Cardinals"
        },
        yearround: false
    },
    baltimoreOriole: {
        title: "Baltimore Oriole",
        desc: "Uncommon",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: false
    },
    orchardOriole: {
        title: "Orchard Oriole",
        desc: "Uncommon",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: false
    },
    roseBreastedGrosbeak: {
        title: "Rose-breasted Grosbeak",
        desc: "Uncommon",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: false
    },
    houseFinch: {
        title: "House Finch",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Eats sunflower, safflower, peanuts",
            2: "May visit bird baths and water sources",
            3: "Males show red color, females do not"
        },
        yearround: true
    },
    lesserGoldfinch: {
        title: "Lesser Goldfinch",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Loves de-shelled crushed sunflower",
            2: "May visit bird baths and water sources",
            3: "Present year-round, but only favors feeders seasonally"
        },
        yearround: true
    },
    americanGoldfinch: {
        title: "American Goldfinch",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Loves de-shelled crushed sunflower",
            2: "May visit bird baths and water sources",
            3: "Only in Texas during winter months"
        },
        yearround: false
    },
    darkEyedJunco: {
        title: "Dark-eyed Junco",
        desc: "Uncommon",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: false
    },
    whiteCrownedSparrow: {
        title: "White-crowned Sparrow",
        desc: "Uncommon",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: false
    },
    clayColoredSparrow: {
        title: "Clay-colored Sparrow",
        desc: "Uncommon",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: false
    },
    grayCatbird: {
        title: "Gray Catbird",
        desc: "Uncommon",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: false
    },
    orangeCrownedWarbler: {
        title: "Orange-crowned Warbler",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: false
    },
    yellowRumpedWarbler: {
        title: "Yellow-rumped Warbler",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Will eat suet and drink from bird baths",
            2: "",
            3: ""
        },
        yearround: false
    },
    rubyCrownedKinglet: {
        title: "Ruby-crowned Kinglet",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: false
    },
    goldenFrontedWoodpecker: {
        title: "Golden-fronted Woodpecker",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: true
    },
    redBelliedWoodpecker: {
        title: "Red-bellied Woodpecker",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: true
    },
    downyWoodpecker: {
        title: "Downy Woodpecker",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: true
    },
    ladderBackedWoodpecker: {
        title: "Ladder-backed Woodpecker",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: true
    },
    yellowBelliedSapsucker: {
        title: "Yellow-bellied Sapsucker",
        desc: "Uncommon",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: false
    },
    northernFlicker: {
        title: "Northern Flicker",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: false
    },
    cedarWaxwing: {
        title: "Cedar Waxwing",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Loves to eat berries off trees & shrubs",
            2: "May visit bird baths and water sources",
            3: "Almost always travel in groups"
        },
        yearround: false
    },
    barnSwallow: {
        title: "Barn Swallow",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: false
    },
    americanRobin: {
        title: "American Robin",
        desc: "Common",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: false
    },
    houseWren: {
        title: "House Wren",
        desc: "Uncommon",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: false
    },
    nashvilleWarbler: {
        title: "Nashville Warbler",
        desc: "Uncommon",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: false
    },
    yellowWarbler: {
        title: "Yellow Warbler",
        desc: "Uncommon",
        imgPath: "",
        details: {
            1: "Prefers millet, but may eat sunflower",
            2: "May visit bird baths and water sources",
            3: "Difficult to get at most urban & suburban homes"
        },
        yearround: false
    },
}



module.exports = birds;