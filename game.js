const cats = [
    {
        name: "Milo",
        image: "images/cat1.jpg",
        weight: 4.4,
        rarity: "common"
    },
    {
        name: "Peanut",
        image: "images/cat2.jpg",
        weight: 2,
        rarity: "common"
    },
    {
        name: "Bella",
        image: "images/cat3.webp",
        weight: 4.7,
        rarity: "common"
    },
    {
        name: "Oscar",
        image: "images/cat4.avif",
        weight: 0.9,
        rarity: "uncommon"
    },
    {
        name: "Cleo",
        image: "images/cat5.jpg",
        weight: 5.0,
        rarity: "common"
    },
    {
        name: "Pauline",
        image: "images/cat6.jfif",
        weight: 5.4,
        rarity: "common"
    },
    {
        name: "Max",
        image: "images/cat7.jfif",
        weight: 1.1,
        rarity: "uncommon"
    },
    {
        name: "George",
        image: "images/cat8.jfif",
        weight: 5,
        rarity: "common"
    },
    {
        name: "Luna",
        image: "images/cat9.jfif",
        weight: 4.4,
        rarity: "common"
    },
    {
        name: "Pete",
        image: "images/cat10.jfif",
        weight: 6.6,
        rarity: "common"
    },
    {
        name: "Alice",
        image: "images/cat11.jfif",
        weight: 0.9,
        rarity: "rare"
    },
    {
        name: "Pip and Pop",
        image: "images/cat12.jfif",
        weight: 1.8,
        rarity: "epic"
    },
    {
        name: "Daisy",
        image: "images/cat13.jfif",
        weight: 1,
        rarity: "common"
    },
    {
        name: "Fluffball",
        image: "images/cat14.jfif",
        weight: 1.9,
        rarity: "uncommon"
    },
    {
        name: "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune",
        image: "images/cat15.jfif",
        weight: 9.2,
        rarity: "epic"
    },
    {
        name: "Crookshanks",
        image: "images/cat16.jfif",
        weight: 5.5,
        rarity: "uncommon"
    },
    {
        name: "Biscuit",
        image: "images/cat17.jfif",
        weight: 5.2,
        rarity: "common"
    },
    {
        name: "Noodle",
        image: "images/cat18.jfif",
        weight: 5.2,
        rarity: "common"
    },
    {
        name: "Cosmo",
        image: "images/cat19.jfif",
        weight: 9.5,
        rarity: "uncommon"
    },
    {
        name: "Goliath",
        image: "images/cat20.jfif",
        weight: 12.6,
        rarity: "rare"
    },
    {
        name: "Tobi",
        image: "images/cat21.jfif",
        weight: 10.9,
        rarity: "common"
    },
    {
        name: "Oliver",
        image: "images/cat22.jfif",
        weight: 11.8,
        rarity: "common"
    },
    {
        name: "Princess",
        image: "images/cat23.jfif",
        weight: 1,
        rarity: "uncommon"
    },
    {
        name: "Rosie",
        image: "images/cat24.jfif",
        weight: 5.1,
        rarity: "common"
    },
    {
        name: "Tilly",
        image: "images/cat25.jfif",
        weight: 4.6,
        rarity: "common"
    },
    {
        name: "Johnathan",
        image: "images/cat26.jfif",
        weight: 0.7,
        rarity: "rare"
    },
    {
        name: "Michael Jackson",
        image: "images/cat27.jfif",
        weight: 12.3,
        rarity: "epic"
    },
    {
        name: "Tubby",
        image: "images/cat28.jfif",
        weight: 11.8,
        rarity: "rare"
    },
    {
        name: "Lester",
        image: "images/cat29.jfif",
        weight: 12,
        rarity: "common"
    },
    {
        name: "Tony",
        image: "images/cat30.jfif",
        weight: 150.3,
        rarity: "epic"
    },
    {
        name: "Matilda",
        image: "images/cat31.jfif",
        weight: 4.1,
        rarity: "common"
    },
    {
        name: "Simon",
        image: "images/cat32.jfif",
        weight: 2.1,
        rarity: "common"
    },
    {
        name: "Lilac",
        image: "images/cat33.jfif",
        weight: 1.5,
        rarity: "uncommon"
    },
    {
        name: "Sophie",
        image: "images/cat34.jfif",
        weight: 3.2,
        rarity: "common"
    },
    {
        name: "Charlie",
        image: "images/cat35.jfif",
        weight: 3.1,
        rarity: "common"
    },
    {
        name: "Bob",
        image: "images/cat36.jfif",
        weight: 2.7,
        rarity: "common"
    },
    {
        name: "Kit and Kat",
        image: "images/cat37.jfif",
        weight: 6.1,
        rarity: "rare"
    },
    {
        name: "Snowball",
        image: "images/cat38.jfif",
        weight: 3.7,
        rarity: "uncommon"
    },
    {
        name: "Whiskers",
        image: "images/cat39.jfif",
        weight: 6,
        rarity: "common"
    },
    {
        name: "Fluffy",
        image: "images/cat40.jfif",
        weight: 6.1,
        rarity: "common"
    },
    {
        name: "Nigel",
        image: "images/cat41.jfif",
        weight: 6.5,
        rarity: "common"
    },
    {
        name: "Caspar",
        image: "images/cat42.jfif",
        weight: 5.5,
        rarity: "common"
    },
    {
        name: "Smudge",
        image: "images/cat43.jfif",
        weight: 6.4,
        rarity: "common"
    },
    {
        name: "Inky",
        image: "images/cat44.jfif",
        weight: 1,
        rarity: "uncommon"
    },
    {
        name: "Lucky",
        image: "images/cat45.jfif",
        weight: 0.9,
        rarity: "uncommon"
    },
    {
        name: "Penelope",
        image: "images/cat46.jfif",
        weight: 4,
        rarity: "common"
    },
    {
        name: "Simba",
        image: "images/cat47.jfif",
        weight: 4.8,
        rarity: "common"
    },
    {
        name: "Pig",
        image: "images/cat48.jfif",
        weight: 4.7,
        rarity: "uncommon"
    },
    {
        name: "Stella",
        image: "images/cat49.jfif",
        weight: 0.7,
        rarity: "common"
    },
    {
        name: "Nemo",
        image: "images/cat50.jfif",
        weight: 1.3,
        rarity: "uncommon"
    },
    {
        name: "Simeone",
        image: "images/cat51.jfif",
        weight: 4.6,
        rarity: "common"
    },
    {
        name: "Boo",
        image: "images/cat52.jfif",
        weight: 5.2,
        rarity: "common"
    },
    {
        name: "Chloe",
        image: "images/cat53.jfif",
        weight: 5.2,
        rarity: "common"
    },
    {
        name: "Patches",
        image: "images/cat54.jfif",
        weight: 4.7,
        rarity: "common"
    },
    {
        name: "Noir",
        image: "images/cat55.jfif",
        weight: 6.3,
        rarity: "uncommon"
    },
    {
        name: "Fuzzy",
        image: "images/cat56.jfif",
        weight: 5,
        rarity: "common"
    },
    {
        name: "Thomas",
        image: "images/cat57.jfif",
        weight: 5.1,
        rarity: "common"
    },
    {
        name: "Harry",
        image: "images/cat58.jfif",
        weight: 1.1,
        rarity: "common"
    },
    {
        name: "Freddy",
        image: "images/cat59.jfif",
        weight: 4.5,
        rarity: "common"
    },
    {
        name: "Peter",
        image: "images/cat60.jfif",
        weight: 1,
        rarity: "common"
    },
    {
        name: "Hannah",
        image: "images/cat61.jfif",
        weight: 4.5,
        rarity: "common"
    },
    {
        name: "Betty",
        image: "images/cat62.jfif",
        weight: 4.1,
        rarity: "common"
    },
    {
        name: "Molly and Kyle",
        image: "images/cat63.jfif",
        weight: 9,
        rarity: "uncommon"
    },
    {
        name: "Lilly and Billy",
        image: "images/cat64.jfif",
        weight: 6.2,
        rarity: "uncommon"
    },
    {
        name: "Darth Vader",
        image: "images/cat65.jfif",
        weight: 1.3,
        rarity: "epic"
    },
    {
        name: "Pickle",
        image: "images/cat66.jfif",
        weight: 1.2,
        rarity: "uncommon"
    },
    {
        name: "Crumbs",
        image: "images/cat67.jfif",
        weight: 5.1,
        rarity: "uncommon"
    },
    {
        name: "Misty",
        image: "images/cat68.jfif",
        weight: 5.2,
        rarity: "common"
    },
    {
        name: "Speckles",
        image: "images/cat69.jfif",
        weight: 4.9,
        rarity: "common"
    },
    {
        name: "Benjamin",
        image: "images/cat70.jfif",
        weight: 3.6,
        rarity: "common"
    },
    {
        name: "Poppy",
        image: "images/cat71.jfif",
        weight: 3.3,
        rarity: "common"
    },
    {
        name: "Gizmo",
        image: "images/cat72.jfif",
        weight: 3.8,
        rarity: "common"
    },
    {
        name: "Snowy and Stormy",
        image: "images/cat73.jfif",
        weight: 8,
        rarity: "uncommon"
    },
    {
        name: "Bruno",
        image: "images/cat74.jfif",
        weight: 1.3,
        rarity: "legendary"
    },
    {
        name: "Tim and Tam",
        image: "images/cat75.jfif",
        weight: 18,
        rarity: "rare"
    },
    {
        name: "Ryan",
        image: "images/cat76.jfif",
        weight: 8.9,
        rarity: "uncommon"
    },
    {
        name: "Pineapple",
        image: "images/cat77.jfif",
        weight: 9.1,
        rarity: "uncommon"
    },
    {
        name: "Snuggles",
        image: "images/cat78.jfif",
        weight: 2.1,
        rarity: "common"
    },
    {
        name: "Sammy",
        image: "images/cat79.jfif",
        weight: 2,
        rarity: "common"
    },
    {
        name: "Winston",
        image: "images/cat80.jfif",
        weight: 7.4,
        rarity: "common"
    },
    {
        name: "Whiskers",
        image: "images/cat81.jfif",
        weight: 6.5,
        rarity: "common"
    },
    {
        name: "Sparky",
        image: "images/cat82.jfif",
        weight: 0.8,
        rarity: "uncommon"
    },
    {
        name: "Ben",
        image: "images/cat83.jfif",
        weight: 7.6,
        rarity: "uncommon"
    },
    {
        name: "Angel",
        image: "images/cat84.jfif",
        weight: 6.2,
        rarity: "common"
    },
    {
        name: "Lorna",
        image: "images/cat85.jfif",
        weight: 7.5,
        rarity: "uncommon"
    },
    {
        name: "Cole",
        image: "images/cat86.jfif",
        weight: 7.6,
        rarity: "uncommon"
    },
    {
        name: "Pumpkin",
        image: "images/cat87.jfif",
        weight: 7.8,
        rarity: "rare"
    },
    {
        name: "Gertrude and her babies",
        image: "images/cat88.jfif",
        weight: 7.3,
        rarity: "rare"
    },
    {
        name: "Tyler",
        image: "images/cat89.jfif",
        weight: 6.7,
        rarity: "uncommon"
    },
    {
        name: "Fluffless",
        image: "images/cat90.jfif",
        weight: 6.9,
        rarity: "rare"
    },
    {
        name: "Natalie",
        image: "images/cat91.jfif",
        weight: 3.3,
        rarity: "uncommon"
    },
    {
        name: "Minny",
        image: "images/cat92.jfif",
        weight: 2.8,
        rarity: "uncommon"
    },
    {
        name: "Whispy",
        image: "images/cat93.jfif",
        weight: 3.5,
        rarity: "uncommon"
    },
    {
        name: "Yasmin",
        image: "images/cat94.jfif",
        weight: 0.8,
        rarity: "legendary"
    },
    {
        name: "Millie",
        image: "images/cat95.jfif",
        weight: 1,
        rarity: "common"
    },
    {
        name: "Chewbacca",
        image: "images/cat96.jfif",
        weight: 3,
        rarity: "rare"
    },
    {
        name: "Reed, Sue, Johnny and Ben",
        image: "images/cat97.jfif",
        weight: 5.6,
        rarity: "rare"
    },
    {
        name: "Strider",
        image: "images/cat98.jfif",
        weight: 60,
        rarity: "epic"
    },
    {
        name: "Odin",
        image: "images/cat99.jfif",
        weight: 15,
        rarity: "rare"
    },
    {
        name: "Scoobert, Doobert and Poobert",
        image: "images/cat100.jfif",
        weight: 3.3,
        rarity: "epic"
    }
];


/* =====================================================
   AUTOMATIC CAT IDS
   cat1 = ID 1, cat2 = ID 2, etc.
   ===================================================== */

cats.forEach((cat, index) => {
    cat.id = index + 1;
});


/* =====================================================
   RARITY SETTINGS

   Fill every cat's rarity with ONE of:
   "common", "uncommon", "rare", "epic", "legendary"
   ===================================================== */

const rarityInfo = {
    common: {
        name: "Common",
        emoji: "🟢",
        weight: 60
    },

    uncommon: {
        name: "Uncommon",
        emoji: "🔵",
        weight: 25
    },

    rare: {
        name: "Rare",
        emoji: "🟣",
        weight: 10
    },

    epic: {
        name: "Epic",
        emoji: "🟡",
        weight: 4
    },

    legendary: {
        name: "Legendary",
        emoji: "🔴",
        weight: 1
    }
};

const rarityOrder = [
    "common",
    "uncommon",
    "rare",
    "epic",
    "legendary"
];


/* =====================================================
   GAME VARIABLES
   ===================================================== */

let mode = "";

let cat1;
let cat2;

let questionNumber = 0;
let score = 0;
let streak = 0;

let answered = false;

let dailyQuestions = [];
let answerHistory = [];


/* =====================================================
   HTML ELEMENTS
   ===================================================== */

const modeSelection =
    document.getElementById("mode-selection");

const gameScreen =
    document.getElementById("game-screen");

const resultsScreen =
    document.getElementById("results-screen");

const collectionScreen =
    document.getElementById("collection-screen");


const dailyModeButton =
    document.getElementById("daily-mode-button");

const infiniteModeButton =
    document.getElementById("infinite-mode-button");

const collectionButton =
    document.getElementById("collection-button");


const cat1Image =
    document.getElementById("cat1-image");

const cat2Image =
    document.getElementById("cat2-image");


const cat1Name =
    document.getElementById("cat1-name");

const cat2Name =
    document.getElementById("cat2-name");


const cat1Button =
    document.getElementById("cat1-button");

const cat2Button =
    document.getElementById("cat2-button");


const result =
    document.getElementById("result");

const streakDisplay =
    document.getElementById("streak");

const questionNumberDisplay =
    document.getElementById("question-number");

const nextButton =
    document.getElementById("next-button");

const quitButton =
    document.getElementById("quit-button");


const finalScore =
    document.getElementById("final-score");

const finalMessage =
    document.getElementById("final-message");

const answerHistoryDisplay =
    document.getElementById("answer-history");


const playInfiniteButton =
    document.getElementById("play-infinite-button");

const menuButton =
    document.getElementById("menu-button");


/* =====================================================
   DAILY CAT ELEMENTS
   ===================================================== */

const dailyCatImage =
    document.getElementById("daily-cat-image");

const dailyCatName =
    document.getElementById("daily-cat-name");

const dailyCatWeight =
    document.getElementById("daily-cat-weight");

const dailyCatMessage =
    document.getElementById("daily-cat-message");

const dailyCatRarity =
    document.getElementById("daily-cat-rarity");

const dailyCatCollectionMessage =
    document.getElementById("daily-cat-collection-message");


/* =====================================================
   COLLECTION ELEMENTS
   ===================================================== */

const collectionGrid =
    document.getElementById("collection-grid");

const collectionProgress =
    document.getElementById("collection-progress");

const collectionCount =
    document.getElementById("collection-count");

const collectionMenuButton =
    document.getElementById("collection-menu-button");


/* =====================================================
   SAVED DAILY DATA
   ===================================================== */

let lastCompletedDate =
    localStorage.getItem("catLastCompletedDate");

let dailyStreak =
    parseInt(
        localStorage.getItem("catDailyStreak")
    ) || 0;


/* =====================================================
   SAVED CAT COLLECTION
   ===================================================== */

let collectedCatIds = [];

const savedCollection =
    localStorage.getItem("catCollection");

if (savedCollection) {
    try {
        const parsedCollection =
            JSON.parse(savedCollection);

        if (Array.isArray(parsedCollection)) {
            collectedCatIds = [
                ...new Set(
                    parsedCollection
                        .map(Number)
                        .filter(id =>
                            Number.isInteger(id) &&
                            id >= 1 &&
                            id <= cats.length
                        )
                )
            ];
        }
    } catch (error) {
        collectedCatIds = [];
    }
}


/* =====================================================
   DAILY CAT MESSAGES
   ===================================================== */

const catMessages = [
    "This cat has mastered the art of looking adorable.",
    "Probably thinking about food.",
    "Officially today's most important cat.",
    "Expert napper. Professional troublemaker.",
    "Would probably knock your glass off the table.",
    "A very good cat. 10/10. Would pet again.",
    "This cat has absolutely no regrets.",
    "Currently accepting treats.",
    "Too fluffy to be trusted.",
    "Just here for the snacks.",
    "Could probably beat you at this game.",
    "A cat of excellent quality.",
    "Definitely plotting something.",
    "The internet's newest favourite cat.",
    "Probably deserves another treat.",
    "A certified good bean.",
    "Small paws. Big personality.",
    "Today's star of the show.",
    "Would like you to know that dinner is late.",
    "Just look at that face."
];


/* =====================================================
   DATE FUNCTIONS
   ===================================================== */

function getTodayString() {
    const today = new Date();

    const year =
        today.getFullYear();

    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            today.getDate()
        ).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


function getTodayNumber() {
    const today = new Date();

    return (
        today.getFullYear() * 10000 +
        today.getMonth() * 100 +
        today.getDate()
    );
}


function daysBetween(
    date1String,
    date2String
) {
    const [year1, month1, day1] =
        date1String.split("-").map(Number);

    const [year2, month2, day2] =
        date2String.split("-").map(Number);

    const date1 =
        Date.UTC(year1, month1 - 1, day1);

    const date2 =
        Date.UTC(year2, month2 - 1, day2);

    const difference =
        Math.abs(date2 - date1);

    return Math.round(
        difference /
        (1000 * 60 * 60 * 24)
    );
}


/* =====================================================
   CHECK IF TODAY IS COMPLETE
   ===================================================== */

function hasCompletedToday() {
    return (
        lastCompletedDate ===
        getTodayString()
    );
}


/* =====================================================
   SEEDED RANDOM
   Used so everyone receives the same 10 Daily questions.
   The collection reward is NOT seeded, so different
   players can receive different cats.
   ===================================================== */

function seededRandom(seed) {
    const x =
        Math.sin(seed) * 10000;

    return x -
        Math.floor(x);
}


/* =====================================================
   COLLECTION FUNCTIONS
   ===================================================== */

function saveCollection() {
    localStorage.setItem(
        "catCollection",
        JSON.stringify(collectedCatIds)
    );
}


function hasCollectedCat(cat) {
    return collectedCatIds.includes(cat.id);
}


function collectCat(cat) {
    if (!cat || hasCollectedCat(cat)) {
        return false;
    }

    collectedCatIds.push(cat.id);
    saveCollection();
    updateCollectionCount();

    return true;
}


function getUncollectedCats() {
    return cats.filter(cat => {
        return !hasCollectedCat(cat);
    });
}


function chooseRewardCat() {
    const uncollectedCats =
        getUncollectedCats();

    if (uncollectedCats.length === 0) {
        return null;
    }

    const availableRarities = [];

    for (const rarityName of rarityOrder) {
        const catsOfThisRarity =
            uncollectedCats.filter(cat => {
                return cat.rarity === rarityName;
            });

        if (catsOfThisRarity.length > 0) {
            availableRarities.push({
                rarity: rarityName,
                cats: catsOfThisRarity,
                weight: rarityInfo[rarityName].weight
            });
        }
    }

    /*
       If you have not filled in the rarities yet,
       the game can still choose an uncollected cat.
       Once all rarities are filled in, the weighted
       rarity system above will be used normally.
    */
    if (availableRarities.length === 0) {
        return uncollectedCats[
            Math.floor(
                Math.random() *
                uncollectedCats.length
            )
        ];
    }

    let totalWeight = 0;

    availableRarities.forEach(item => {
        totalWeight += item.weight;
    });

    let randomNumber =
        Math.random() * totalWeight;

    let chosenRarity =
        availableRarities[0];

    for (const item of availableRarities) {
        randomNumber -= item.weight;

        if (randomNumber <= 0) {
            chosenRarity = item;
            break;
        }
    }

    const possibleCats =
        chosenRarity.cats;

    return possibleCats[
        Math.floor(
            Math.random() *
            possibleCats.length
        )
    ];
}


function getDailyRewardCat() {
    const today =
        getTodayString();

    const savedRewardDate =
        localStorage.getItem(
            "catRewardDate"
        );

    const savedRewardId =
        Number(
            localStorage.getItem(
                "catRewardId"
            )
        );

    /*
       If today's reward was already chosen,
       always return the same cat.
    */
    if (
        savedRewardDate === today &&
        Number.isInteger(savedRewardId) &&
        savedRewardId >= 1
    ) {
        const savedCat =
            cats.find(cat => {
                return cat.id === savedRewardId;
            });

        if (savedCat) {
            collectCat(savedCat);
            return savedCat;
        }
    }

    const newCat =
        chooseRewardCat();

    if (!newCat) {
        return null;
    }

    localStorage.setItem(
        "catRewardDate",
        today
    );

    localStorage.setItem(
        "catRewardId",
        newCat.id
    );

    const messageIndex =
        Math.floor(
            Math.random() *
            catMessages.length
        );

    localStorage.setItem(
        "catRewardMessageIndex",
        messageIndex
    );

    collectCat(newCat);

    return newCat;
}


function getSavedRewardMessage() {
    let messageIndex =
        Number(
            localStorage.getItem(
                "catRewardMessageIndex"
            )
        );

    if (
        !Number.isInteger(messageIndex) ||
        messageIndex < 0 ||
        messageIndex >= catMessages.length
    ) {
        messageIndex = 0;
    }

    return catMessages[messageIndex];
}


function displayDailyReward() {
    const dailyCat =
        getDailyRewardCat();

    if (!dailyCat) {
        if (dailyCatImage) {
            dailyCatImage.src = "";
            dailyCatImage.alt = "";
            dailyCatImage.classList.add("hidden");
        }

        if (dailyCatName) {
            dailyCatName.textContent =
                "Collection Complete!";
        }

        if (dailyCatWeight) {
            dailyCatWeight.textContent = "";
        }

        if (dailyCatRarity) {
            dailyCatRarity.textContent =
                "🏆 You collected every cat!";
            dailyCatRarity.className = "";
        }

        if (dailyCatMessage) {
            dailyCatMessage.textContent =
                "You are officially a Cat Higher or Lower master.";
        }

        if (dailyCatCollectionMessage) {
            dailyCatCollectionMessage.textContent =
                `${cats.length} / ${cats.length} cats discovered`;
        }

        return;
    }

    if (dailyCatImage) {
        dailyCatImage.classList.remove("hidden");
        dailyCatImage.src =
            dailyCat.image;
        dailyCatImage.alt =
            dailyCat.name;
    }

    if (dailyCatName) {
        dailyCatName.textContent =
            dailyCat.name;
    }

    if (dailyCatWeight) {
        dailyCatWeight.textContent =
            `${dailyCat.weight} kg`;
    }

    const rarity =
        rarityInfo[dailyCat.rarity];

    if (dailyCatRarity) {
        if (rarity) {
            dailyCatRarity.textContent =
                `${rarity.emoji} ${rarity.name.toUpperCase()}!`;

            dailyCatRarity.className =
                `rarity-${dailyCat.rarity}`;
        } else {
            dailyCatRarity.textContent =
                "🐱 CAT!";
            dailyCatRarity.className = "";
        }
    }

    if (dailyCatMessage) {
        dailyCatMessage.textContent =
            `"${getSavedRewardMessage()}"`;
    }

    if (dailyCatCollectionMessage) {
        dailyCatCollectionMessage.textContent =
            "🐾 Added to your collection!";
    }

    updateCollectionCount();
}
function updateCollectionCount() {
    const amountCollected =
        collectedCatIds.length;

    const text =
        `${amountCollected} / ${cats.length} cats discovered`;

    if (collectionCount) {
        collectionCount.textContent =
            text;
    }

    if (collectionProgress) {
        collectionProgress.textContent =
            text;
    }
}


function createCollectionCard(cat) {
    const card =
        document.createElement("div");

    card.className =
        "collection-card";

    if (hasCollectedCat(cat)) {
        const image =
            document.createElement("img");

        image.src =
            cat.image;

        image.alt =
            cat.name;

        const name =
            document.createElement("h4");

        name.textContent =
            cat.name;

        const weight =
            document.createElement("p");

        weight.textContent =
            `${cat.weight} kg`;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(weight);
    } else {
        card.classList.add(
            "locked-card"
        );

        const lockedPicture =
            document.createElement("div");

        lockedPicture.className =
            "locked-cat";

        lockedPicture.textContent =
            "🔒";

        const hiddenName =
            document.createElement("h4");

        hiddenName.textContent =
            "???";

        card.appendChild(
            lockedPicture
        );

        card.appendChild(
            hiddenName
        );
    }

    return card;
}


function addCollectionSection(
    headingText,
    className,
    sectionCats
) {
    if (
        !collectionGrid ||
        sectionCats.length === 0
    ) {
        return;
    }

    const section =
        document.createElement("div");

    section.className =
        "collection-rarity-section";

    const heading =
        document.createElement("h3");

    const collectedInSection =
        sectionCats.filter(cat => {
            return hasCollectedCat(cat);
        }).length;

    heading.textContent =
        `${headingText} — ${collectedInSection} / ${sectionCats.length}`;

    if (className) {
        heading.className =
            className;
    }

    section.appendChild(
        heading
    );

    const catContainer =
        document.createElement("div");

    catContainer.className =
        "collection-cats";

    sectionCats.forEach(cat => {
        catContainer.appendChild(
            createCollectionCard(cat)
        );
    });

    section.appendChild(
        catContainer
    );

    collectionGrid.appendChild(
        section
    );
}


function renderCollection() {
    if (!collectionGrid) {
        return;
    }

    collectionGrid.innerHTML =
        "";

    rarityOrder.forEach(
        rarityName => {
            const rarity =
                rarityInfo[rarityName];

            const rarityCats =
                cats.filter(cat => {
                    return (
                        cat.rarity ===
                        rarityName
                    );
                });

            addCollectionSection(
                `${rarity.emoji} ${rarity.name}`,
                `rarity-${rarityName}`,
                rarityCats
            );
        }
    );

    /*
       This section is useful while you are still
       filling in your 100 rarities. It disappears
       automatically when every rarity is filled.
    */
    const unassignedCats =
        cats.filter(cat => {
            return !rarityInfo[cat.rarity];
        });

    addCollectionSection(
        "⚪ Rarity Not Assigned Yet",
        "",
        unassignedCats
    );

    updateCollectionCount();
}


/* =====================================================
   DAILY QUESTIONS
   ===================================================== */

function createDailyQuestions() {
    dailyQuestions = [];

    const today =
        getTodayNumber();

    for (
        let i = 0;
        i < 10;
        i++
    ) {
        let firstIndex =
            Math.floor(
                seededRandom(
                    today + i * 17
                ) * cats.length
            );

        let secondIndex =
            Math.floor(
                seededRandom(
                    today + i * 31 + 100
                ) * cats.length
            );

        if (
            firstIndex === secondIndex
        ) {
            secondIndex =
                (secondIndex + 1) %
                cats.length;
        }

        dailyQuestions.push({
            cat1:
                cats[firstIndex],

            cat2:
                cats[secondIndex]
        });
    }
}


/* =====================================================
   SCREEN FUNCTIONS
   ===================================================== */

function showScreen(screen) {
    if (modeSelection) {
        modeSelection.classList.add(
            "hidden"
        );
    }

    if (gameScreen) {
        gameScreen.classList.add(
            "hidden"
        );
    }

    if (resultsScreen) {
        resultsScreen.classList.add(
            "hidden"
        );
    }

    if (collectionScreen) {
        collectionScreen.classList.add(
            "hidden"
        );
    }

    if (screen) {
        screen.classList.remove(
            "hidden"
        );
    }
}


/* =====================================================
   RANDOM CATS FOR INFINITE MODE
   ===================================================== */

function getRandomPair() {
    let first =
        Math.floor(
            Math.random() * cats.length
        );

    let second =
        Math.floor(
            Math.random() * cats.length
        );

    while (
        second === first
    ) {
        second =
            Math.floor(
                Math.random() * cats.length
            );
    }

    return [
        cats[first],
        cats[second]
    ];
}


/* =====================================================
   START DAILY MODE
   ===================================================== */

function startDailyMode() {
    if (
        hasCompletedToday()
    ) {
        alert(
            "You've already completed today's challenge! Come back tomorrow for a new one 🐱"
        );

        return;
    }

    mode = "daily";

    questionNumber = 0;
    score = 0;
    streak = 0;

    answerHistory = [];

    streakDisplay.textContent =
        streak;

    createDailyQuestions();

    showScreen(
        gameScreen
    );

    loadQuestion();
}


/* =====================================================
   START INFINITE MODE
   ===================================================== */

function startInfiniteMode() {
    mode = "infinite";

    questionNumber = 0;
    score = 0;
    streak = 0;

    answerHistory = [];

    streakDisplay.textContent =
        streak;

    showScreen(
        gameScreen
    );

    loadQuestion();
}


/* =====================================================
   LOAD QUESTION
   ===================================================== */

function loadQuestion() {
    answered = false;

    cat1Button.disabled = false;
    cat2Button.disabled = false;

    nextButton.classList.add(
        "hidden"
    );

    result.textContent = "";

    if (
        mode === "daily"
    ) {
        const question =
            dailyQuestions[
                questionNumber
            ];

        cat1 =
            question.cat1;

        cat2 =
            question.cat2;

        questionNumberDisplay.textContent =
            `Question ${questionNumber + 1} / 10`;
    } else {
        const pair =
            getRandomPair();

        cat1 =
            pair[0];

        cat2 =
            pair[1];

        questionNumberDisplay.textContent =
            `Question ${questionNumber + 1}`;
    }

    displayCats();
}


/* =====================================================
   DISPLAY CATS
   ===================================================== */

function displayCats() {
    cat1Image.src =
        cat1.image;

    cat2Image.src =
        cat2.image;

    cat1Name.textContent =
        cat1.name;

    cat2Name.textContent =
        cat2.name;
}

/* =====================================================
   INFINITE MODE STREAK REWARD

   Every 25 correct answers in a row unlocks
   one new cat for the collection.
   ===================================================== */

function checkInfiniteStreakReward() {

    if (mode !== "infinite") {
        return;
    }

    if (streak === 0 || streak % 25 !== 0) {
        return;
    }

    const rewardCat = chooseRewardCat();

    if (!rewardCat) {
        result.textContent +=
            " 🏆 You already own every cat!";
        return;
    }

    collectCat(rewardCat);

    const rarity =
        rarityInfo[rewardCat.rarity];

    let rarityText = "";

    if (rarity) {
        rarityText =
            `${rarity.emoji} ${rarity.name}`;
    }

    result.textContent +=
        ` 🎁 ${streak} STREAK REWARD! You unlocked ${rewardCat.name}! ${rarityText}`;

    updateCollectionCount();
}

/* =====================================================
   MAKE GUESS
   ===================================================== */

function makeGuess(chosenCat) {
    if (answered) {
        return;
    }

    answered = true;

    cat1Button.disabled = true;
    cat2Button.disabled = true;

    let isCorrect = false;

    /*
       If the cats weigh exactly the same,
       either answer is accepted as correct.
    */
    if (
        cat1.weight ===
        cat2.weight
    ) {
        isCorrect = true;

        result.textContent =
            `🎉 It's a tie! ${cat1.name} and ${cat2.name} both weigh ${cat1.weight} kg.`;
    } else {
        let correctCat;

        if (
            cat1.weight >
            cat2.weight
        ) {
            correctCat =
                cat1;
        } else {
            correctCat =
                cat2;
        }

        isCorrect =
            chosenCat ===
            correctCat;

        if (isCorrect) {
            result.textContent =
                `🎉 Correct! ${correctCat.name} weighs ${correctCat.weight} kg.`;
        } else {
            result.textContent =
                `❌ Wrong! ${correctCat.name} weighs ${correctCat.weight} kg.`;
        }
    }

  if (isCorrect) {
    score++;
    streak++;
    answerHistory.push(true);

    checkInfiniteStreakReward();

} else {
    streak = 0;
    answerHistory.push(false);
}

    streakDisplay.textContent =
        streak;

    if (
        mode === "daily"
    ) {
        if (
            questionNumber >= 9
        ) {
            nextButton.textContent =
                "See Results";
        } else {
            nextButton.textContent =
                "Next Question";
        }
    } else {
        nextButton.textContent =
            "Next Cats";
    }

    nextButton.classList.remove(
        "hidden"
    );
}


/* =====================================================
   NEXT QUESTION
   ===================================================== */

function nextQuestion() {
    questionNumber++;

    if (
        mode === "daily" &&
        questionNumber >= 10
    ) {
        showResults();
        return;
    }

    loadQuestion();
}


/* =====================================================
   COMPLETE DAILY CHALLENGE
   ===================================================== */

function completeDailyChallenge() {
    const today =
        getTodayString();

    if (
        lastCompletedDate !== null
    ) {
        const daysSinceLastChallenge =
            daysBetween(
                lastCompletedDate,
                today
            );

        if (
            daysSinceLastChallenge === 1
        ) {
            dailyStreak++;
        } else if (
            daysSinceLastChallenge > 1
        ) {
            dailyStreak = 1;
        }
    } else {
        dailyStreak = 1;
    }

    lastCompletedDate =
        today;

    localStorage.setItem(
        "catLastCompletedDate",
        lastCompletedDate
    );

    localStorage.setItem(
        "catDailyStreak",
        dailyStreak
    );

    localStorage.setItem(
        "catLastScore",
        score
    );
}


/* =====================================================
   SHOW RESULTS
   ===================================================== */

function showResults() {
    completeDailyChallenge();

    /*
       This picks one personal, uncollected reward cat
       and permanently adds it to the collection.
    */
    displayDailyReward();

    showScreen(
        resultsScreen
    );

    finalScore.textContent =
        `${score} / 10`;

    if (
        score === 10
    ) {
        finalMessage.textContent =
            `🏆 Perfect score! You're a cat expert! 🔥 ${dailyStreak} day streak`;
    } else if (
        score >= 8
    ) {
        finalMessage.textContent =
            `😸 Excellent! You really know your cats. 🔥 ${dailyStreak} day streak`;
    } else if (
        score >= 6
    ) {
        finalMessage.textContent =
            `🐱 Nice work! That's a solid score. 🔥 ${dailyStreak} day streak`;
    } else if (
        score >= 4
    ) {
        finalMessage.textContent =
            `😺 Not bad! Come back tomorrow and try again. 🔥 ${dailyStreak} day streak`;
    } else {
        finalMessage.textContent =
            `😿 Better luck tomorrow! 🔥 ${dailyStreak} day streak`;
    }

    answerHistoryDisplay.textContent =
        "";

    answerHistory.forEach(
        function(correct) {
            const symbol =
                document.createElement(
                    "span"
                );

            symbol.textContent =
                correct ? "🟩" : "🟥";

            answerHistoryDisplay.appendChild(
                symbol
            );
        }
    );

    updateDailyButton();
}


/* =====================================================
   UPDATE DAILY BUTTON
   ===================================================== */

function updateDailyButton() {
    if (
        hasCompletedToday()
    ) {
        dailyModeButton.innerHTML =
            `
                🐱 Daily Challenge Complete!
                <span>Come back tomorrow for a new challenge</span>
            `;

        dailyModeButton.disabled =
            true;

        dailyModeButton.style.opacity =
            "0.6";

        dailyModeButton.style.cursor =
            "default";
    } else {
        dailyModeButton.innerHTML =
            `
                🗓️ Daily Challenge
                <span>10 questions every day</span>
            `;

        dailyModeButton.disabled =
            false;

        dailyModeButton.style.opacity =
            "1";

        dailyModeButton.style.cursor =
            "pointer";
    }
}


/* =====================================================
   RETURN TO MENU
   ===================================================== */

function returnToMenu() {
    showScreen(
        modeSelection
    );

    updateDailyButton();
    updateCollectionCount();
}


/* =====================================================
   BUTTON EVENTS
   ===================================================== */

dailyModeButton.addEventListener(
    "click",
    startDailyMode
);


infiniteModeButton.addEventListener(
    "click",
    startInfiniteMode
);


cat1Button.addEventListener(
    "click",
    function() {
        makeGuess(cat1);
    }
);


cat2Button.addEventListener(
    "click",
    function() {
        makeGuess(cat2);
    }
);


nextButton.addEventListener(
    "click",
    nextQuestion
);


quitButton.addEventListener(
    "click",
    returnToMenu
);


menuButton.addEventListener(
    "click",
    returnToMenu
);


playInfiniteButton.addEventListener(
    "click",
    startInfiniteMode
);


if (collectionButton) {
    collectionButton.addEventListener(
        "click",
        function() {
            renderCollection();

            showScreen(
                collectionScreen
            );
        }
    );
}


if (collectionMenuButton) {
    collectionMenuButton.addEventListener(
        "click",
        returnToMenu
    );
}


/* =====================================================
   START
   ===================================================== */

updateDailyButton();
updateCollectionCount();

showScreen(
    modeSelection
);


/* =====================================================
   OPTIONAL RARITY CHECK

   This does not stop the game.
   It simply tells you in the browser console how many
   cats still need a rarity filled in.
   ===================================================== */

const catsWithoutRarity =
    cats.filter(cat => {
        return !rarityInfo[cat.rarity];
    });

if (catsWithoutRarity.length > 0) {
    console.log(
        `${catsWithoutRarity.length} cats still need a rarity.`
    );
} else {
    console.log(
        "All cat rarities are filled in! 🐱"
    );
}