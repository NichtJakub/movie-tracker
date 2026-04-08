const STORAGE_KEY = "movieTrackerData";
const STORAGE_VERSION_KEY = "movieTrackerVersion";
const CURRENT_STORAGE_VERSION = "3";
const SORT_DIRECTION_KEY = "movieTrackerSortDirections";

const RATING_LABELS = [
    "0 - Unwatchable", "1 - Painful", "2 - Terrible", "3 - Weak", "4 - Forgettable",
    "5 - Okay", "6 - Solid", "7 - Enjoyable", "8 - Great", "9 - Amazing", "10 - Masterpiece"
];

const RATING_COLORS = [
    "#ff2d2d", "#ff4f1a", "#ff7300", "#ff9a00", "#ffc200",
    "#d4d400", "#a0c020", "#4caf50", "#00c896", "#00aaff", "#c77dff"
];

const MARVEL_MOVIE_SUMMARIES = {
    70: "Banished to Earth, Thor learns humility and must reclaim his power before Loki and the Destroyer unleash chaos.",
    80: "Nick Fury brings Earth's mightiest heroes together when Loki's invasion forces the Avengers to unite for the first time.",
    100: "Thor battles Malekith and the Aether while trying to protect Jane Foster and the Nine Realms from falling into darkness.",
    110: "Tony Stark faces a new terrorist threat while struggling with the trauma of New York and the cost of living as Iron Man.",
    120: "Steve Rogers uncovers a conspiracy inside S.H.I.E.L.D. and is forced to confront a deadly assassin from his past.",
    140: "Peter Quill and a band of outlaws reluctantly team up to protect a powerful Infinity Stone from Ronan.",
    150: "The Guardians search for the truth about Peter's father while their found-family bond is tested across the galaxy.",
    170: "Tony Stark's peacekeeping plan backfires when Ultron turns against humanity and the Avengers face the cost of their own ambitions.",
    180: "Scott Lang uses Hank Pym's shrinking tech to pull off a high-stakes heist and become an unlikely hero.",
    220: "Political pressure splits the Avengers into opposing sides as Steve Rogers and Tony Stark clash over control and accountability.",
    230: "Natasha Romanoff returns to the past she tried to escape and confronts the family and spy program that shaped her.",
    240: "T'Challa returns to Wakanda to take the throne, only to face a rival who challenges the nation's future and his identity.",
    260: "Peter Parker tries to balance school life with proving himself as Spider-Man while tracking the Vulture's black-market tech ring.",
    270: "After a career-ending accident, Stephen Strange enters the mystic arts and defends reality against a dark interdimensional force.",
    315: "Thor loses his hammer, faces Hela, and teams with Hulk and Loki to save Asgard from destruction.",
    340: "Scott reunites with Hope and Hank for a rescue mission tied to the Quantum Realm while new enemies close in.",
    350: "The Avengers and Guardians race across the universe to stop Thanos from collecting all six Infinity Stones.",
    370: "After the Snap, the surviving heroes risk everything on one final plan to undo Thanos's devastation.",
    390: "Shang-Chi is pulled back into the world he left behind when his father's Ten Rings empire resurfaces.",
    400: "Peter Parker's European trip is shattered when elemental attacks and Mysterio force him to step up after Endgame.",
    410: "A hidden group of immortal beings emerge to face an ancient threat tied to humanity's secret cosmic history.",
    420: "Peter's identity crisis spirals into a multiverse collision that brings old villains and painful choices to his doorstep.",
    430: "Doctor Strange navigates fractured realities with America Chavez while Wanda's grief becomes a dangerous multiverse threat.",
    460: "Wakanda mourns T'Challa while Shuri and her allies defend the nation from a new power rising beneath the sea.",
    490: "Thor teams with Valkyrie, Korg, and Jane Foster to stop Gorr the God Butcher from wiping out the gods.",
    520: "Scott Lang and his family are pulled into the Quantum Realm, where Kang offers a dangerous deal with reality-sized consequences.",
    530: "The Guardians risk everything to save Rocket and confront the painful history that made him who he is.",
    550: "Carol Danvers, Kamala Khan, and Monica Rambeau become entangled across space and must work together to stop a galactic crisis.",
    580: "Deadpool and Wolverine collide in a violent multiversal adventure that throws Fox-era chaos straight into the MCU.",
    610: "Sam Wilson steps fully into the Captain America role as a new global crisis tests his leadership and ideals.",
    620: "A volatile team of antiheroes and damaged operatives is sent on a dangerous mission that could redefine who gets called a hero.",
    630: "Marvel's First Family enters the MCU as Reed, Sue, Johnny, and Ben take their first steps into a larger cosmic adventure.",
    640: "An upcoming Spider-Man chapter set after No Way Home, with Peter Parker starting from scratch in a new phase of his life.",
    650: "An upcoming Avengers event film that brings the MCU's major heroes together for another world-shaking showdown.",
    660: "An upcoming multiverse crossover expected to unite major Marvel worlds and push the MCU toward a massive final conflict."
};

const MARVEL_SERIES_SUMMARIES = {
    "Agatha All Along": "Agatha Harkness steps back into the spotlight with dark magic, witchy schemes, and fallout tied to WandaVision.",
    "Agent Carter": "Peggy Carter balances covert missions, early S.H.I.E.L.D. politics, and postwar life while proving herself in a world that underestimates her.",
    "Agents of SHIELD": "Coulson's team handles alien threats, Hydra fallout, Inhumans, time travel, and world-ending crises from the ground level of the MCU.",
    "Cloak & Dagger": "Tandy and Tyrone discover linked powers that pull them into a dangerous fight against corruption and abuse in New Orleans.",
    "Daredevil": "Blind lawyer Matt Murdock wages a brutal war on crime in Hell's Kitchen while his double life tests every relationship around him.",
    "Daredevil: Born Again": "Matt Murdock returns to the streets of New York for a new chapter that reconnects him with old enemies and fresh political danger.",
    "Echo": "Maya Lopez returns home after Hawkeye and is forced to confront family history, grief, and the violent world that shaped her.",
    "Eyes of Wakanda": "This animated Wakandan story follows secret missions tied to the nation's history, legacy, and hidden reach across the world.",
    "Hawkeye": "Clint Barton teams up with Kate Bishop in a holiday-season adventure involving old mistakes, new enemies, and a reluctant partnership.",
    "Helstrom": "Daimon and Ana Helstrom investigate demonic horrors and the darkness buried deep in their own family history.",
    "I Am Groot": "Baby Groot stars in short cosmic misadventures that are small in scale, playful in tone, and full of Guardians-style charm.",
    "Inhumans": "The royal family of Attilan is torn apart by a coup and forced to survive on Earth while trying to reclaim their kingdom.",
    "Iron Fist": "Danny Rand returns to New York with mystical martial arts power and struggles to live up to the Iron Fist mantle.",
    "Ironheart": "Riri Williams builds advanced armor of her own and steps into the MCU as a brilliant young inventor with huge ambition.",
    "Jessica Jones": "Private investigator Jessica Jones uses her strength and sharp instincts to face trauma, corruption, and dangerous superpowered threats.",
    "Loki": "Loki is pulled into the TVA and becomes tangled in a time-bending story about identity, chaos, and the fate of the multiverse.",
    "Luke Cage": "Luke Cage tries to protect Harlem as a bulletproof hero pulled between community responsibility and rising criminal power.",
    "Moon Knight": "Marc Spector's fractured identity, ancient Egyptian gods, and brutal vigilante justice collide in a surreal psychological adventure.",
    "Ms. Marvel": "Kamala Khan juggles family, fandom, and new cosmic powers while growing into a hero of her own.",
    "Runaways": "A group of teens on the run uncover the truth about their parents and band together against a corrupt legacy.",
    "Secret Invasion": "Nick Fury returns to stop a covert Skrull infiltration that turns paranoia and mistrust into a global crisis.",
    "She-Hulk: Attorney at Law": "Jennifer Walters balances superhuman chaos, legal cases, and her new She-Hulk life in a self-aware Marvel comedy.",
    "The Daily Bugle": "This in-universe news parody reacts to Spider-Man-era events with commentary, satire, and viral-media energy.",
    "The Defenders": "Daredevil, Jessica Jones, Luke Cage, and Iron Fist join forces when a larger threat forces New York's street heroes together.",
    "The Falcon and the Winter Soldier": "Sam Wilson and Bucky Barnes confront grief, politics, and the legacy of Captain America in a world reshaped after Endgame.",
    "The Punisher": "Frank Castle wages a relentless one-man war while uncovering conspiracies tied to his family's murder and his military past.",
    "WandaVision": "Wanda Maximoff's grief transforms suburban life into a reality-warping mystery that reshapes the MCU.",
    "What If...?": "This animated multiverse anthology imagines alternate Marvel timelines where one changed choice rewrites everything.",
    "WHiH News Front": "This in-universe news series expands the MCU through fake broadcasts, interviews, and media coverage around major events.",
    "Your Friendly Neighborhood Spider-Man": "This animated Spider-Man story explores Peter Parker's early hero days from a fresh alternate-MCU angle."
};

const MARVEL_SHORT_SUMMARIES = {
    "Agents of SHIELD: Slingshot": "Yo-Yo Rodriguez takes the spotlight in a fast-paced side mission that expands the Agents of SHIELD world.",
    "Marvel One-Shot: A Funny Thing Happened on the Way to Thor's Hammer": "Agent Coulson deals with a roadside robbery on the way to New Mexico and reminds everyone he is dangerous even without powers.",
    "Marvel One-Shot: Agent Carter": "Peggy Carter finally gets field action on a solo mission that helps bridge her path toward the Agent Carter series.",
    "Marvel One-Shot: All Hail the King": "A prison interview with Trevor Slattery reveals the fallout of Iron Man 3 and hints at bigger Mandarin-related consequences.",
    "Marvel One-Shot: Item 47": "After the Battle of New York, two civilians find Chitauri tech and quickly get in over their heads.",
    "Marvel One-Shot: The Consultant": "S.H.I.E.L.D. agents manipulate the Abomination situation with a dry, hilarious mission involving Tony Stark.",
    "Peter's To-Do List": "This Spider-Man short fills in Peter Parker's pre-vacation errands and the chaos he tries to clean up before Far From Home."
};

const MARVEL_SPECIAL_SUMMARIES = {
    "The Guardians of the Galaxy Holiday Special": "The Guardians try to give Peter Quill a perfect Christmas and turn a simple gift idea into festive cosmic chaos.",
    "Werewolf by Night": "A stylish monster-horror special that throws Marvel into a darker world of hunters, creatures, and bloody supernatural stakes."
};

function buildWhereToWatchUrl(title, year = "") {
    const query = year ? (title + " " + year) : title;
    return "https://www.justwatch.com/de/Suche?q=" + encodeURIComponent(query);
}

const movieData = [
    {
        id: 10,
        title: "Captain America: The First Avenger",
        year: 2011,
        type: "movie",
        phase: 1,
        imdb: 6.9,
        universe: "marvel",
        poster: "img-optimized/Captain America The First Avenger.jpg",
        infoPanel: {
            summary: "Steve Rogers volunteers for a risky super-soldier program during World War II and becomes Captain America to stop Hydra.",
            links: [
                { label: "Where to watch", url: buildWhereToWatchUrl("Captain America: The First Avenger", 2011) }
            ]
        }
    },
    { id: 15, title: "Marvel One-Shot: Agent Carter", year: 2013, type: "short", phase: 1, imdb: 7.7, universe: "marvel", poster: "img-optimized/Marvel One-Shot Agent Carter.jpg" },
    { id: 20, title: "Agent Carter (Seasons 1 & 2)", year: 2015, type: "series", phase: 1, imdb: 7.7, universe: "marvel", poster: "img-optimized/Agent Carter.jpeg" },
    {
        id: 30,
        title: "Captain Marvel",
        year: 2019,
        type: "movie",
        phase: 3,
        imdb: 6.8,
        universe: "marvel",
        poster: "img-optimized/Captain Marvel.jpg",
        infoPanel: {
            summary: "Carol Danvers uncovers the truth about her past while a war between the Kree and the Skrulls spills onto Earth.",
            links: [
                { label: "Where to watch", url: buildWhereToWatchUrl("Captain Marvel", 2019) }
            ]
        }
    },
    {
        id: 40,
        title: "Iron Man",
        year: 2008,
        type: "movie",
        phase: 1,
        imdb: 7.9,
        universe: "marvel",
        poster: "img-optimized/Iron Man.jpg",
        infoPanel: {
            summary: "After being captured by terrorists, Tony Stark builds a powered suit and reinvents himself as Iron Man.",
            links: [
                { label: "Where to watch", url: buildWhereToWatchUrl("Iron Man", 2008) }
            ]
        }
    },
    {
        id: 50,
        title: "Iron Man 2",
        year: 2010,
        type: "movie",
        phase: 1,
        imdb: 7.0,
        universe: "marvel",
        poster: "img-optimized/Iron Man 2.jpeg",
        infoPanel: {
            summary: "Tony Stark faces pressure from the government, a deadly new rival, and the fallout of revealing his identity to the world.",
            links: [
                { label: "Where to watch", url: buildWhereToWatchUrl("Iron Man 2", 2010) }
            ]
        }
    },
    {
        id: 60,
        title: "The Incredible Hulk",
        year: 2008,
        type: "movie",
        phase: 1,
        imdb: 6.7,
        universe: "marvel",
        poster: "img-optimized/The Incredible Hulk.jpeg",
        infoPanel: {
            summary: "Bruce Banner searches for a cure while staying one step ahead of the military and the monster growing inside him.",
            links: [
                { label: "Where to watch", url: buildWhereToWatchUrl("The Incredible Hulk", 2008) }
            ]
        }
    },
    { id: 65, title: "Marvel One-Shot: A Funny Thing Happened on the Way to Thor's Hammer", year: 2011, type: "short", phase: 1, imdb: 7.0, universe: "marvel", poster: "img-optimized/A Funny Thing Happened on the Way to Thor's Hammer.jpg" },
    { id: 70, title: "Thor", year: 2011, type: "movie", phase: 1, imdb: 7.0, universe: "marvel", poster: "img-optimized/Thor.jpg" },
    { id: 75, title: "Marvel One-Shot: The Consultant", year: 2011, type: "short", phase: 1, imdb: 6.7, universe: "marvel", poster: "img-optimized/Marvel One-Shot The Consultant.jpg" },
    { id: 80, title: "The Avengers", year: 2012, type: "movie", phase: 1, imdb: 8.0, universe: "marvel", poster: "img-optimized/The Avengers.jpeg" },
    { id: 85, title: "Marvel One-Shot: Item 47", year: 2012, type: "short", phase: 1, imdb: 8.0, universe: "marvel", poster: "img-optimized/Marvel One-Shot Item 47.jpg" },
    { id: 90, title: "Agents of SHIELD Season 1, Episodes 1-7", year: 2013, type: "series", phase: 2, imdb: 7.5, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 100, title: "Thor: The Dark World", year: 2013, type: "movie", phase: 2, imdb: 6.8, universe: "marvel", poster: "img-optimized/Thor- The Dark World.jpeg" },
    { id: 105, title: "Agents of SHIELD Season 1, Episodes 8-12", year: 2013, type: "series", phase: 2, imdb: 7.5, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 110, title: "Iron Man 3", year: 2013, type: "movie", phase: 2, imdb: 7.1, universe: "marvel", poster: "img-optimized/Iron Man 3.jpg" },
    { id: 115, title: "Agents of SHIELD Season 1, Episodes 13-15", year: 2014, type: "series", phase: 2, imdb: 7.5, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 117, title: "Marvel One-Shot: All Hail the King", year: 2014, type: "short", phase: 2, imdb: 7.1, universe: "marvel", poster: "img-optimized/All Hail the King.jpg" },
    { id: 118, title: "Agents of SHIELD Season 1, Episode 16", year: 2014, type: "series", phase: 2, imdb: 7.5, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 120, title: "Captain America: The Winter Soldier", year: 2014, type: "movie", phase: 2, imdb: 7.8, universe: "marvel", poster: "img-optimized/Captain America- The Winter Soldier.jpg" },
    { id: 125, title: "Agents of SHIELD Season 1, Episodes 17-22 & Season 2, Episodes 1-2", year: 2014, type: "series", phase: 2, imdb: 7.9, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 140, title: "Guardians of the Galaxy", year: 2014, type: "movie", phase: 2, imdb: 8.0, universe: "marvel", poster: "img-optimized/Guardians of the Galaxy.jpeg" },
    { id: 145, title: "I Am Groot Season 1, Episode 1", year: 2022, type: "series", phase: 4, imdb: 7.0, universe: "marvel", poster: "img-optimized/I Am Groot.png" },
    { id: 147, title: "Agents of SHIELD Season 2, Episode 3", year: 2014, type: "series", phase: 2, imdb: 7.9, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 150, title: "Guardians of the Galaxy Vol. 2", year: 2017, type: "movie", phase: 3, imdb: 7.6, universe: "marvel", poster: "img-optimized/Guardians of the Galaxy Vol. 2.jpeg" },
    { id: 155, title: "I Am Groot Season 1, Episodes 2-5 & Season 2", year: 2023, type: "series", phase: 5, imdb: 7.0, universe: "marvel", poster: "img-optimized/I Am Groot.png" },
    { id: 157, title: "Agents of SHIELD Season 2, Episodes 4-5", year: 2014, type: "series", phase: 2, imdb: 7.9, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 160, title: "Daredevil Season 1", year: 2015, type: "series", phase: 2, imdb: 8.7, universe: "marvel", poster: "img-optimized/Daredevil.jpg" },
    { id: 165, title: "Jessica Jones Season 1", year: 2015, type: "series", phase: 2, imdb: 8.1, universe: "marvel", poster: "img-optimized/Marvel's Jessica Jones.jpg" },
    { id: 167, title: "Agents of SHIELD Season 2, Episodes 6-19", year: 2015, type: "series", phase: 2, imdb: 7.9, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 170, title: "Avengers: Age of Ultron", year: 2015, type: "movie", phase: 2, imdb: 7.3, universe: "marvel", poster: "img-optimized/Avengers- Age of Ultron.jpeg" },
    { id: 172, title: "Agents of SHIELD Season 2, Episodes 20-22", year: 2015, type: "series", phase: 2, imdb: 7.9, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 175, title: "WHiH News Front Season 1", year: 2015, type: "series", phase: 2, imdb: 6.5, universe: "marvel", poster: "img-optimized/WHIH Newsfront.png" },
    { id: 180, title: "Ant-Man", year: 2015, type: "movie", phase: 2, imdb: 7.3, universe: "marvel", poster: "img-optimized/Ant-Man.jpeg" },
    { id: 185, title: "Daredevil Season 2", year: 2016, type: "series", phase: 3, imdb: 8.2, universe: "marvel", poster: "img-optimized/Daredevil.jpg" },
    { id: 190, title: "Luke Cage Season 1", year: 2016, type: "series", phase: 3, imdb: 7.3, universe: "marvel", poster: "img-optimized/Marvel's Luke Cage.jpg" },
    { id: 195, title: "Agents of SHIELD Season 3, Episodes 1-10", year: 2015, type: "series", phase: 3, imdb: 7.9, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 200, title: "Iron Fist Season 1", year: 2017, type: "series", phase: 3, imdb: 6.5, universe: "marvel", poster: "img-optimized/Marvel's Iron Fist.jpg" },
    { id: 202, title: "Agents of SHIELD Season 3, Episodes 11-14", year: 2016, type: "series", phase: 3, imdb: 7.9, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 205, title: "WHiH News Front Season 2, Episode 1", year: 2016, type: "series", phase: 3, imdb: 6.5, universe: "marvel", poster: "img-optimized/WHIH Newsfront.png" },
    { id: 207, title: "Agents of SHIELD Season 3, Episodes 15-16", year: 2016, type: "series", phase: 3, imdb: 7.9, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 208, title: "WHiH News Front Season 2, Episode 2", year: 2016, type: "series", phase: 3, imdb: 6.5, universe: "marvel", poster: "img-optimized/WHIH Newsfront.png" },
    { id: 209, title: "Agents of SHIELD Season 3, Episodes 17-18", year: 2016, type: "series", phase: 3, imdb: 7.9, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 211, title: "WHiH News Front Season 2, Episodes 3-5", year: 2016, type: "series", phase: 3, imdb: 6.5, universe: "marvel", poster: "img-optimized/WHIH Newsfront.png" },
    { id: 212, title: "The Defenders Season 1", year: 2017, type: "series", phase: 3, imdb: 7.2, universe: "marvel", poster: "img-optimized/Marvel's The Defenders.jpg" },
    { id: 213, title: "Agents of SHIELD Season 3, Episode 19", year: 2016, type: "series", phase: 3, imdb: 7.9, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 220, title: "Captain America: Civil War", year: 2016, type: "movie", phase: 3, imdb: 7.8, universe: "marvel", poster: "img-optimized/Captain America- Civil War.jpg" },
    { id: 221, title: "Agents of SHIELD Season 3, Episode 20", year: 2016, type: "series", phase: 3, imdb: 7.9, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 230, title: "Black Widow", year: 2021, type: "movie", phase: 4, imdb: 6.7, universe: "marvel", poster: "img-optimized/Black Widow.jpg" },
    { id: 235, title: "Agents of SHIELD Season 3, Episodes 21-22", year: 2016, type: "series", phase: 3, imdb: 7.9, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 240, title: "Black Panther", year: 2018, type: "movie", phase: 3, imdb: 7.3, universe: "marvel", poster: "img-optimized/Black Panther.jpg" },
    { id: 245, title: "Eyes of Wakanda Season 1", year: 2024, type: "series", phase: 5, imdb: 6.5, universe: "marvel", poster: "img-optimized/Eyes of Wakanda.jpg" },
    { id: 250, title: "Inhumans Season 1", year: 2017, type: "series", phase: 3, imdb: 4.9, universe: "marvel", poster: "img-optimized/Marvel's Inhumans.jpeg" },
    { id: 260, title: "Spider-Man: Homecoming", year: 2017, type: "movie", phase: 3, imdb: 7.4, universe: "marvel", poster: "img-optimized/Spider-Man- Homecoming.jpeg" },
    { id: 265, title: "The Punisher Season 1", year: 2017, type: "series", phase: 3, imdb: 8.5, universe: "marvel", poster: "img-optimized/Marvel's The Punisher.jpg" },
    { id: 270, title: "Doctor Strange", year: 2016, type: "movie", phase: 3, imdb: 7.5, universe: "marvel", poster: "img-optimized/Doctor Strange.png" },
    { id: 275, title: "Cloak & Dagger Season 1", year: 2018, type: "series", phase: 3, imdb: 7.0, universe: "marvel", poster: "img-optimized/Marvel's Cloak & Dagger.jpg" },
    { id: 280, title: "Agents of SHIELD Season 4, Episodes 1-8", year: 2016, type: "series", phase: 3, imdb: 8.1, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 282, title: "Agents of SHIELD: Slingshot", year: 2016, type: "short", phase: 3, imdb: 8.1, universe: "marvel", poster: "img-optimized/Agents of SHIELD Slingshot Season 1.jpg" },
    { id: 283, title: "Agents of SHIELD Season 4, Episodes 9-22", year: 2017, type: "series", phase: 3, imdb: 8.1, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 285, title: "Jessica Jones Season 2", year: 2018, type: "series", phase: 3, imdb: 7.2, universe: "marvel", poster: "img-optimized/Marvel's Jessica Jones.jpg" },
    { id: 290, title: "Agents of SHIELD Season 5, Episodes 1-10", year: 2017, type: "series", phase: 3, imdb: 7.9, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 295, title: "Luke Cage Season 2", year: 2018, type: "series", phase: 3, imdb: 7.5, universe: "marvel", poster: "img-optimized/Marvel's Luke Cage.jpg" },
    { id: 300, title: "Iron Fist Season 2", year: 2018, type: "series", phase: 3, imdb: 7.0, universe: "marvel", poster: "img-optimized/Marvel's Iron Fist.jpg" },
    { id: 305, title: "Daredevil Season 3", year: 2018, type: "series", phase: 3, imdb: 8.6, universe: "marvel", poster: "img-optimized/Daredevil.jpg" },
    { id: 310, title: "Cloak & Dagger Season 2", year: 2019, type: "series", phase: 3, imdb: 6.8, universe: "marvel", poster: "img-optimized/Marvel's Cloak & Dagger.jpg" },
    { id: 315, title: "Thor: Ragnarok", year: 2017, type: "movie", phase: 3, imdb: 7.9, universe: "marvel", poster: "img-optimized/Thor- Ragnarok.png" },
    { id: 318, title: "Agents of SHIELD Season 5, Episodes 11-13", year: 2018, type: "series", phase: 3, imdb: 7.9, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 320, title: "Runaways Season 1 & Season 2 & Season 3, Episodes 1-4", year: 2019, type: "series", phase: 3, imdb: 7.1, universe: "marvel", poster: "img-optimized/Marvel's Runaways.jpg" },
    { id: 325, title: "The Punisher Season 2", year: 2019, type: "series", phase: 3, imdb: 8.1, universe: "marvel", poster: "img-optimized/Marvel's The Punisher.jpg" },
    { id: 330, title: "Jessica Jones Season 3", year: 2019, type: "series", phase: 3, imdb: 6.8, universe: "marvel", poster: "img-optimized/Marvel's Jessica Jones.jpg" },
    { id: 340, title: "Ant-Man and the Wasp", year: 2018, type: "movie", phase: 3, imdb: 7.1, universe: "marvel", poster: "img-optimized/Ant-Man and the Wasp.jpeg" },
    { id: 345, title: "Agents of SHIELD Season 5, Episodes 14-18", year: 2018, type: "series", phase: 3, imdb: 7.9, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 350, title: "Avengers: Infinity War", year: 2018, type: "movie", phase: 3, imdb: 8.4, universe: "marvel", poster: "img-optimized/Avengers- Infinity War.jpeg" },
    { id: 355, title: "Agents of SHIELD Season 5, Episodes 19-22", year: 2018, type: "series", phase: 3, imdb: 7.9, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 357, title: "Runaways Season 3, Episodes 5-10", year: 2019, type: "series", phase: 3, imdb: 7.1, universe: "marvel", poster: "img-optimized/Marvel's Runaways.jpg" },
    { id: 360, title: "Agents of SHIELD Seasons 6 & 7", year: 2019, type: "series", phase: 3, imdb: 7.8, universe: "marvel", poster: "img-optimized/Agents of SHIELD.jpg" },
    { id: 365, title: "Helstrom Season 1", year: 2020, type: "series", phase: 3, imdb: 6.2, universe: "marvel", poster: "img-optimized/Helstrom.jpg" },
    { id: 370, title: "Avengers: Endgame", year: 2019, type: "movie", phase: 3, imdb: 8.4, universe: "marvel", poster: "img-optimized/Avengers- Endgame.jpeg" },
    { id: 375, title: "Loki Season 1", year: 2021, type: "series", phase: 4, imdb: 8.2, universe: "marvel", poster: "img-optimized/Loki.jpg" },
    { id: 380, title: "What If...? Season 1", year: 2021, type: "series", phase: 4, imdb: 7.4, universe: "marvel", poster: "img-optimized/What If....jpg" },
    { id: 385, title: "WandaVision Season 1", year: 2021, type: "series", phase: 4, imdb: 7.9, universe: "marvel", poster: "img-optimized/WandaVision.jpeg" },
    { id: 390, title: "Shang-Chi and the Legend of the Ten Rings", year: 2021, type: "movie", phase: 4, imdb: 7.4, universe: "marvel", poster: "img-optimized/Shang-Chi and the Legend of the Ten Rings.jpg" },
    { id: 395, title: "The Falcon and the Winter Soldier Season 1", year: 2021, type: "series", phase: 4, imdb: 7.3, universe: "marvel", poster: "img-optimized/The Falcon and the Winter Soldier.jpg" },
    { id: 397, title: "Peter's To-Do List", year: 2019, type: "short", phase: 3, imdb: 7.5, universe: "marvel", poster: "img-optimized/Peter's To-Do List.jpg" },
    { id: 400, title: "Spider-Man: Far From Home", year: 2019, type: "movie", phase: 3, imdb: 7.5, universe: "marvel", poster: "img-optimized/Spider-Man- Far From Home.jpg" },
    { id: 405, title: "The Daily Bugle Seasons 1 & 2", year: 2021, type: "series", phase: 4, imdb: 6.8, universe: "marvel", poster: "img-optimized/The Daily Bugle.jpg" },
    { id: 407, title: "She-Hulk: Attorney at Law Season 1, Episode 1", year: 2022, type: "series", phase: 4, imdb: 5.3, universe: "marvel", poster: "img-optimized/She-Hulk- Attorney at Law.jpg" },
    { id: 410, title: "Eternals", year: 2021, type: "movie", phase: 4, imdb: 6.3, universe: "marvel", poster: "img-optimized/Eternals.jpg" },
    { id: 420, title: "Spider-Man: No Way Home", year: 2021, type: "movie", phase: 4, imdb: 8.2, universe: "marvel", poster: "img-optimized/Spider-Man- No Way Home.jpg" },
    { id: 430, title: "Doctor Strange in the Multiverse of Madness", year: 2022, type: "movie", phase: 4, imdb: 6.9, universe: "marvel", poster: "img-optimized/Doctor Strange in the Multiverse of Madness.png" },
    { id: 440, title: "Hawkeye Season 1", year: 2021, type: "series", phase: 4, imdb: 7.5, universe: "marvel", poster: "img-optimized/Hawkeye.png" },
    { id: 445, title: "She-Hulk: Attorney at Law Season 1, Episodes 2-3", year: 2022, type: "series", phase: 4, imdb: 5.3, universe: "marvel", poster: "img-optimized/She-Hulk- Attorney at Law.jpg" },
    { id: 450, title: "Moon Knight Season 1", year: 2022, type: "series", phase: 4, imdb: 7.4, universe: "marvel", poster: "img-optimized/Moon Knight.png" },
    { id: 460, title: "Black Panther: Wakanda Forever", year: 2022, type: "movie", phase: 4, imdb: 7.0, universe: "marvel", poster: "img-optimized/Black Panther- Wakanda Forever.png" },
    { id: 465, title: "Echo Season 1", year: 2024, type: "series", phase: 4, imdb: 6.5, universe: "marvel", poster: "img-optimized/Echo.png" },
    { id: 470, title: "She-Hulk: Attorney at Law Season 1, Episodes 4-9", year: 2022, type: "series", phase: 4, imdb: 5.3, universe: "marvel", poster: "img-optimized/She-Hulk- Attorney at Law.jpg" },
    { id: 480, title: "Ms. Marvel Season 1", year: 2022, type: "series", phase: 4, imdb: 7.0, universe: "marvel", poster: "img-optimized/Ms. Marvel.png" },
    { id: 490, title: "Thor: Love and Thunder", year: 2022, type: "movie", phase: 4, imdb: 6.3, universe: "marvel", poster: "img-optimized/Thor- Love and Thunder.png" },
    { id: 495, title: "Ironheart Season 1", year: 2025, type: "series", phase: 5, imdb: 5.3, universe: "marvel", poster: "img-optimized/Ironheart.png" },
    { id: 500, title: "Werewolf by Night", year: 2022, type: "special", phase: 4, imdb: 7.2, universe: "marvel", poster: "img-optimized/Werewolf by Night.jpg" },
    { id: 510, title: "The Guardians of the Galaxy Holiday Special", year: 2022, type: "special", phase: 4, imdb: 7.3, universe: "marvel", poster: "img-optimized/The Guardians of the Galaxy Holiday Special.png" },
    { id: 520, title: "Ant-Man and the Wasp: Quantumania", year: 2023, type: "movie", phase: 5, imdb: 6.1, universe: "marvel", poster: "img-optimized/Ant-Man and the Wasp- Quantumania.jpg" },
    { id: 530, title: "Guardians of the Galaxy Vol. 3", year: 2023, type: "movie", phase: 5, imdb: 7.9, universe: "marvel", poster: "img-optimized/Guardians of the Galaxy Vol. 3.jpg" },
    { id: 540, title: "Secret Invasion Season 1", year: 2023, type: "series", phase: 5, imdb: 5.9, universe: "marvel", poster: "img-optimized/Secret Invasion.jpg" },
    { id: 550, title: "The Marvels", year: 2023, type: "movie", phase: 5, imdb: 5.6, universe: "marvel", poster: "img-optimized/The Marvels.jpg" },
    { id: 560, title: "Loki Season 2", year: 2023, type: "series", phase: 5, imdb: 8.3, universe: "marvel", poster: "img-optimized/Loki.jpg" },
    { id: 570, title: "What If...? Season 2", year: 2023, type: "series", phase: 5, imdb: 7.2, universe: "marvel", poster: "img-optimized/What If....jpg" },
    { id: 580, title: "Deadpool & Wolverine", year: 2024, type: "movie", phase: 5, imdb: 7.7, universe: "marvel", poster: "img-optimized/Deadpool & Wolverine.jpg" },
    { id: 590, title: "Agatha All Along Season 1", year: 2024, type: "series", phase: 5, imdb: 7.0, universe: "marvel", poster: "img-optimized/Agatha All Along (2024).jpg" },
    { id: 595, title: "What If...? Season 3", year: 2025, type: "series", phase: 5, imdb: 7.2, universe: "marvel", poster: "img-optimized/What If....jpg" },
    { id: 600, title: "Your Friendly Neighborhood Spider-Man Season 1", year: 2025, type: "series", phase: 5, imdb: 8.0, universe: "marvel", poster: "img-optimized/Your Friendly Neighborhood Spider-Man.png" },
    { id: 605, title: "Daredevil: Born Again Season 1", year: 2025, type: "series", phase: 5, imdb: 7.5, universe: "marvel", poster: "img-optimized/Daredevil Born Again.jpg" },
    { id: 610, title: "Captain America: Brave New World", year: 2025, type: "movie", phase: 5, imdb: 5.8, universe: "marvel", poster: "img-optimized/Captain America- Brave New World.jpg" },
    { id: 620, title: "Thunderbolts*", year: 2025, type: "movie", phase: 5, imdb: 7.1, universe: "marvel", poster: "img-optimized/Thunderbolts.jpg" },
    { id: 630, title: "The Fantastic Four: First Steps", year: 2025, type: "movie", phase: 6, imdb: 6.8, universe: "marvel", poster: "img-optimized/The Fantastic Four First Steps.jpg" },
    { id: 640, title: "Spider-Man: Brand New Day", year: 2026, type: "movie", phase: 6, imdb: 0, universe: "marvel", poster: "img-optimized/Spider-Man- Brand New Day.png", releaseDate: "July 31, 2026" },
    { id: 650, title: "Avengers: Doomsday", year: 2026, type: "movie", phase: 6, imdb: 0, universe: "marvel", poster: "img-optimized/Avengers- Doomsday.jpg", releaseDate: "December 18, 2026" },
    { id: 660, title: "Avengers: Secret Wars", year: 2027, type: "movie", phase: 6, imdb: 0, universe: "marvel", poster: "img-optimized/Avengers- Secret Wars.png", releaseDate: "December 17, 2027" },
    { id: 2001, title: "Man of Steel", year: 2013, type: "movie", phase: 1, imdb: 7.1, universe: "dc", poster: "img-optimized/Man of Steel.png" },
    { id: 2002, title: "The Batman", year: 2022, type: "movie", phase: 1, imdb: 7.8, universe: "dc", poster: "img-optimized/The Batman.png" },
    { id: 2003, title: "Wonder Woman", year: 2017, type: "movie", phase: 1, imdb: 7.4, universe: "dc", poster: "img-optimized/Wonder Woman.png" }
];

const seriesBaseTitleCounts = buildSeriesBaseTitleCounts(movieData);
const upcomingCountdownMovies = [
    { elementId: "countdown-spiderman", title: "Spider-Man: Brand New Day" },
    { elementId: "countdown-doomsday", title: "Avengers: Doomsday" },
    { elementId: "countdown-secretwars", title: "Avengers: Secret Wars" }
].map((entry) => ({
    ...entry,
    movie: movieData.find((movie) => movie.title === entry.title)
}));
let countdownIntervalId = null;

let currentUniverse = "marvel";
let userData = readStoredData();
let ratingTargetId = null;
let sortDirections = readStoredSortDirections();

document.addEventListener("DOMContentLoaded", () => {
    try {
        localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_STORAGE_VERSION);
    } catch (error) {
        // Ignore storage errors and continue with in-memory data.
    }

    movieData.forEach((movie) => {
        userData[movie.id] = normalizeUserEntry(userData[movie.id]);
    });

    saveUserData();
    setupEventListeners();
    setupStickyJourney();
    buildRatingPanel();
    startDoomsdayCountdown();
    render();
});

function readStoredData() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return {};

        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
            return {};
        }

        return parsed;
    } catch (error) {
        return {};
    }
}

function saveUserData() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    } catch (error) {
        // Ignore storage errors and keep the current session usable.
    }
}

function readStoredSortDirections() {
    const defaults = { year: "asc", imdb: "desc", user: "desc" };

    try {
        const raw = localStorage.getItem(SORT_DIRECTION_KEY);
        if (!raw) return { ...defaults };

        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
            return { ...defaults };
        }

        return {
            year: parsed.year === "desc" ? "desc" : defaults.year,
            imdb: parsed.imdb === "asc" ? "asc" : defaults.imdb,
            user: parsed.user === "asc" ? "asc" : defaults.user
        };
    } catch (error) {
        return { ...defaults };
    }
}

function saveSortDirections() {
    try {
        localStorage.setItem(SORT_DIRECTION_KEY, JSON.stringify(sortDirections));
    } catch (error) {
        // Ignore storage errors and keep the current session usable.
    }
}

function setJourneyTitle(universe) {
    const title = "YOUR " + universe.toUpperCase() + " JOURNEY";
    const mainTitle = document.getElementById("journey-title");
    const stickyTitle = document.getElementById("sticky-journey-title");

    if (mainTitle) {
        mainTitle.innerText = title;
    }

    if (stickyTitle) {
        stickyTitle.innerText = title;
    }
}

function syncStickyJourneyVisibility() {
    const source = document.querySelector(".progress-section");
    const stickyBar = document.getElementById("sticky-journey-bar");
    if (!source || !stickyBar) return;

    const sourceBounds = source.getBoundingClientRect();
    const shouldShow = sourceBounds.bottom <= 0;
    stickyBar.classList.toggle("is-visible", shouldShow);
    stickyBar.setAttribute("aria-hidden", shouldShow ? "false" : "true");
}

function setupStickyJourney() {
    const stickyBar = document.getElementById("sticky-journey-bar");
    if (!stickyBar) return;

    setJourneyTitle(currentUniverse);
    window.addEventListener("scroll", syncStickyJourneyVisibility, { passive: true });
    window.addEventListener("resize", syncStickyJourneyVisibility);
    syncStickyJourneyVisibility();
}

function setDcInteractionLock(isLocked) {
    const controls = document.querySelector(".controls");
    const timeline = document.getElementById("timeline-content");
    const toggleIds = [
        "search-input",
        "phase-filter",
        "sort-select",
        "sort-direction-btn",
        "extended-toggle",
        "hide-seen-toggle"
    ];

    if (controls) {
        controls.classList.toggle("is-locked", isLocked);
    }

    if (timeline) {
        timeline.classList.toggle("is-locked", isLocked);
    }

    toggleIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        if ("disabled" in element) {
            element.disabled = isLocked;
        }

        element.setAttribute("aria-disabled", String(isLocked));
    });
}

function canToggleSortDirection(sortBy) {
    return sortBy === "year" || sortBy === "imdb" || sortBy === "user";
}

function getSortDirection(sortBy) {
    if (!canToggleSortDirection(sortBy)) return "asc";
    return sortDirections[sortBy] || (sortBy === "year" ? "asc" : "desc");
}

function updateSortDirectionButton() {
    const button = document.getElementById("sort-direction-btn");
    const label = document.getElementById("sort-direction-text");
    const icon = button ? button.querySelector("i") : null;
    const sortBy = document.getElementById("sort-select").value;
    const isToggleable = canToggleSortDirection(sortBy);
    const direction = getSortDirection(sortBy);

    if (!button || !label || !icon) return;

    button.classList.toggle("is-disabled", !isToggleable);
    button.setAttribute("aria-disabled", String(!isToggleable));

    if (!isToggleable) {
        label.textContent = "DEFAULT ORDER";
        icon.className = "fas fa-arrow-right-long";
        return;
    }

    if (sortBy === "year") {
        label.textContent = direction === "asc" ? "OLDEST FIRST" : "NEWEST FIRST";
        icon.className = direction === "asc" ? "fas fa-arrow-up-short-wide" : "fas fa-arrow-down-wide-short";
        return;
    }

    label.textContent = direction === "asc" ? "LOWEST RATED" : "HIGHEST RATED";
    icon.className = direction === "asc" ? "fas fa-arrow-up-short-wide" : "fas fa-arrow-down-wide-short";
}

function normalizeRating(value) {
    if (value === null || value === undefined || value === "") return null;
    const numericValue = Number(value);
    return Number.isInteger(numericValue) && numericValue >= 0 && numericValue <= 10 ? numericValue : null;
}

function normalizeUserEntry(entry) {
    return {
        seen: Boolean(entry && entry.seen),
        rating: normalizeRating(entry && entry.rating)
    };
}

function buildSeriesBaseTitleCounts(list) {
    const counts = {};

    list.forEach((movie) => {
        if (movie.type !== "series") return;

        const baseTitle = getSeriesBaseTitle(movie.title);
        counts[baseTitle] = (counts[baseTitle] || 0) + 1;
    });

    return counts;
}

function getSeriesBaseTitle(title) {
    return title
        .replace(/\s+\((?:Season|Seasons)[^)]*\)$/i, "")
        .replace(/\s+Seasons?.*$/i, "")
        .trim();
}

function getDisplayTitle(movie) {
    if (movie.type !== "series") return movie.title;

    const baseTitle = getSeriesBaseTitle(movie.title);
    return seriesBaseTitleCounts[baseTitle] === 1 ? baseTitle : movie.title;
}

function closeInfoPanels(exceptEntry = null) {
    document.querySelectorAll(".info-entry.is-open").forEach((entry) => {
        if (entry !== exceptEntry) {
            entry.classList.remove("is-open");
            const button = entry.querySelector(".info-btn");
            if (button) {
                button.setAttribute("aria-expanded", "false");
            }
        }
    });
}

function getInfoSummaryKey(movie) {
    return movie.type === "series" ? getSeriesBaseTitle(movie.title) : movie.title;
}

function getDefaultInfoPanel(movie) {
    if (movie.universe !== "marvel") return null;
    if (movie.type !== "movie" && movie.type !== "series" && movie.type !== "short" && movie.type !== "special") return null;

    const displayTitle = getDisplayTitle(movie);
    const summaryKey = getInfoSummaryKey(movie);
    const searchTitle = movie.title;
    const phaseText = currentUniverse === "marvel" && movie.phase ? "Phase " + movie.phase : "the Marvel timeline";
    const summary = movie.type === "movie"
        ? (MARVEL_MOVIE_SUMMARIES[movie.id] || (displayTitle + " is a Marvel movie in " + phaseText + ". Use Where to watch to check current streaming options."))
        : movie.type === "series"
            ? (MARVEL_SERIES_SUMMARIES[summaryKey] || (summaryKey + " is a Marvel series entry in this timeline. Use Where to watch to check current availability."))
            : movie.type === "short"
                ? (MARVEL_SHORT_SUMMARIES[summaryKey] || (summaryKey + " is a Marvel short in " + phaseText + ". Use Where to watch to check if it is currently available."))
                : (MARVEL_SPECIAL_SUMMARIES[summaryKey] || (summaryKey + " is a Marvel special presentation in " + phaseText + ". Use Where to watch to check current availability."));

    return {
        summary,
        links: [
            { label: "Where to watch", url: buildWhereToWatchUrl(searchTitle, movie.year) }
        ]
    };
}

function getRatingDescriptor(value) {
    const label = RATING_LABELS[value] || "";
    const parts = label.split(" - ");
    return parts.length > 1 ? parts[1] : label;
}

function formatImdbRating(value) {
    return Number(value).toFixed(1);
}

function buildRatingPanel() {
    const container = document.getElementById("rating-options");
    container.innerHTML = "";

    RATING_LABELS.forEach((label, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "rating-option";
        button.dataset.value = index;
        button.style.setProperty("--rc", RATING_COLORS[index]);
        button.innerHTML =
            '<span class="ro-num">' + index + "</span>" +
            '<span class="ro-label">' + getRatingDescriptor(index) + "</span>";
        button.addEventListener("click", () => {
            applyRating(ratingTargetId, index);
            closeRatingPanel();
        });
        container.appendChild(button);
    });
}

function openRatingPanel(id, title) {
    if (!canRateMovie(id)) return;

    ratingTargetId = id;
    document.getElementById("rating-panel-title").textContent = title.toUpperCase();

    const overlay = document.getElementById("rating-overlay");
    overlay.classList.remove("hidden");
    requestAnimationFrame(() => overlay.classList.add("visible"));

    document.querySelectorAll(".rating-option").forEach((button) => {
        button.classList.toggle("selected", Number(button.dataset.value) === userData[id].rating);
    });
}

function closeRatingPanel() {
    const overlay = document.getElementById("rating-overlay");
    overlay.classList.remove("visible");
    window.setTimeout(() => overlay.classList.add("hidden"), 300);
}

function updateDoomsdayCountdown() {
    upcomingCountdownMovies.forEach((entry) => {
        const container = document.getElementById(entry.elementId);
        const timeEl = container ? container.querySelector(".countdown-time") : null;
        const dateEl = container ? container.querySelector(".countdown-date") : null;
        if (!container || !timeEl || !dateEl || !entry.movie || !entry.movie.releaseDate) return;

        const targetDate = new Date(entry.movie.releaseDate + " 00:00:00");
        const now = new Date();
        const diff = targetDate.getTime() - now.getTime();

        dateEl.textContent = entry.movie.releaseDate;

        if (diff <= 0) {
            timeEl.textContent = "NOW PLAYING";
            container.classList.add("countdown-live");
            return;
        }

        container.classList.remove("countdown-live");

        const totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / 86400);
        timeEl.textContent = String(days).padStart(3, "0") + " DAYS";
    });
}

function startDoomsdayCountdown() {
    updateDoomsdayCountdown();
    if (countdownIntervalId) {
        window.clearInterval(countdownIntervalId);
    }
    countdownIntervalId = window.setInterval(updateDoomsdayCountdown, 1000);
}

function canRateMovie(id) {
    return Boolean(userData[id] && userData[id].seen);
}

function applyRating(id, value) {
    if (!userData[id] || !canRateMovie(id)) return;

    userData[id].rating = normalizeRating(value);
    saveUserData();

    const sortBy = document.getElementById("sort-select").value;
    if (sortBy === "user") {
        render();
        return;
    }

    const movie = movieData.find((entry) => entry.id === id);
    const card = document.querySelector('.card[data-movie-id="' + id + '"]');
    if (movie && card) {
        const actions = card.querySelector(".actions");
        const existingButton = actions ? actions.querySelector(".rating-btn") : null;
        if (actions && existingButton) {
            actions.replaceChild(createRatingButton(movie, userData[id].rating, userData[id].seen), existingButton);
        }
    }

    updateProgress(getFilteredMovies({ includeSeen: true }));
}

function normalizePosterUrl(url) {
    if (!url) return "";
    return url.replace(/^https?:\/\/www\.themoviedb\.org\/t\/p\//, "https://image.tmdb.org/t/p/");
}

function getPosterCandidates(url) {
    const normalizedUrl = normalizePosterUrl(url);
    if (!normalizedUrl) return [];

    if (/^https?:\/\//i.test(normalizedUrl) || /^data:/i.test(normalizedUrl)) {
        return [normalizedUrl];
    }

    const extensionMatch = normalizedUrl.match(/\.(jpg|jpeg|png|webp)$/i);
    if (!extensionMatch) {
        return [normalizedUrl];
    }

    const basePath = normalizedUrl.slice(0, -extensionMatch[0].length);
    const orderedExtensions = [extensionMatch[0].toLowerCase(), ".jpg", ".jpeg", ".png", ".webp"];
    const seenExtensions = new Set();

    return orderedExtensions.reduce((candidates, extension) => {
        if (seenExtensions.has(extension)) return candidates;
        seenExtensions.add(extension);
        candidates.push(basePath + extension);
        return candidates;
    }, []);
}

function escapeSvgText(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function createFallbackPoster(movie) {
    const accent = movie.universe === "dc" ? "#0476f2" : "#e23636";
    const title = getDisplayTitle(movie);
    const initials = title
        .replace(/[^A-Za-z0-9 ]/g, "")
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 3)
        .map((word) => word.charAt(0))
        .join("") || "MV";
    const safeTitle = escapeSvgText(title.toUpperCase());
    const safeMeta = escapeSvgText(String(movie.year) + " - " + movie.type.toUpperCase());
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 900">
            <defs>
                <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#080808" />
                    <stop offset="100%" stop-color="#191919" />
                </linearGradient>
                <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="${accent}" stop-opacity="0.95" />
                    <stop offset="100%" stop-color="${accent}" stop-opacity="0.25" />
                </linearGradient>
            </defs>
            <rect width="600" height="900" fill="url(#bg)" />
            <circle cx="500" cy="130" r="180" fill="url(#glow)" opacity="0.55" />
            <circle cx="120" cy="760" r="170" fill="url(#glow)" opacity="0.28" />
            <rect x="36" y="36" width="528" height="828" rx="28" fill="none" stroke="${accent}" stroke-opacity="0.35" stroke-width="3" />
            <text x="52" y="200" fill="${accent}" font-family="Arial, sans-serif" font-size="150" font-weight="700" letter-spacing="8">${initials}</text>
            <text x="52" y="700" fill="#ffffff" font-family="Arial, sans-serif" font-size="34" font-weight="700">${safeTitle}</text>
            <text x="52" y="754" fill="#bdbdbd" font-family="Arial, sans-serif" font-size="22" letter-spacing="3">${safeMeta}</text>
        </svg>`;

    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function createPosterElement(movie) {
    const poster = document.createElement("div");
    poster.className = "poster";

    const img = document.createElement("img");
    const posterCandidates = getPosterCandidates(movie.poster);
    const fallbackSrc = createFallbackPoster(movie);
    let candidateIndex = 0;

    img.className = "poster-img";
    img.alt = getDisplayTitle(movie) + " poster";
    img.loading = "lazy";

    img.addEventListener("error", () => {
        candidateIndex += 1;

        if (candidateIndex < posterCandidates.length) {
            img.src = posterCandidates[candidateIndex];
            return;
        }

        if (img.src !== fallbackSrc) {
            img.src = fallbackSrc;
            return;
        }

        poster.classList.add("poster-fallback");
    });

    img.addEventListener("load", () => {
        poster.classList.toggle("poster-fallback", img.src === fallbackSrc);
    });

    img.src = posterCandidates.length > 0 ? posterCandidates[0] : fallbackSrc;
    if (posterCandidates.length === 0) {
        poster.classList.add("poster-fallback");
    }

    poster.appendChild(img);

    const badgeText = movie.badge || (movie.type === "series"
        ? "SERIES"
        : movie.type === "short"
            ? "SHORT"
            : movie.type === "special"
                ? "SPECIAL"
                : "");

    if (badgeText) {
        const badge = document.createElement("span");
        badge.className = "type-badge";
        badge.textContent = badgeText;
        poster.appendChild(badge);
    }

    const overlay = document.createElement("div");
    overlay.className = "poster-overlay";
    poster.appendChild(overlay);

    return poster;
}

function createSeenToggle(movieId, seen) {
    const label = document.createElement("label");
    label.className = "seen-label";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = seen;
    input.addEventListener("change", () => toggleSeen(movieId));

    const checkmark = document.createElement("span");
    checkmark.className = "checkmark";

    label.appendChild(input);
    label.appendChild(checkmark);
    label.appendChild(document.createTextNode("WATCHED"));

    return label;
}

function createRatingButton(movie, rating, seen) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "rating-btn";

    if (!seen) {
        button.classList.add("is-disabled");
        button.disabled = true;
        button.setAttribute("aria-disabled", "true");
        button.innerHTML = '<i class="fas fa-lock"></i><span>WATCH FIRST</span>';
        return button;
    }

    button.addEventListener("click", () => openRatingPanel(movie.id, getDisplayTitle(movie)));

    if (rating !== null && rating !== undefined) {
        button.classList.add("rated");
        button.style.setProperty("--rc", RATING_COLORS[rating]);
        button.innerHTML =
            '<span class="rb-num">' + rating + "</span>" +
            '<span class="rb-label">' + getRatingDescriptor(rating) + "</span>";
    } else {
        button.classList.add("unrated");
        button.innerHTML = '<i class="fas fa-star"></i><span>SELECT YOUR RATING</span>';
    }

    return button;
}

function createUpcomingNotice(movie) {
    const notice = document.createElement("div");
    notice.className = "upcoming-notice";
    notice.textContent = "RELEASES " + (movie.releaseDate || movie.year);
    return notice;
}

function createInfoButton(movie) {
    const panelData = movie.infoPanel || getDefaultInfoPanel(movie);
    if (!panelData) return null;

    const entry = document.createElement("div");
    entry.className = "info-entry";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "info-btn";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open details for " + getDisplayTitle(movie));
    button.innerHTML = '<i class="fas fa-circle-info"></i>';

    const panel = document.createElement("div");
    panel.className = "info-popover";

    const summary = document.createElement("p");
    summary.className = "info-popover-summary";
    summary.textContent = panelData.summary;
    panel.appendChild(summary);

    const linkRow = document.createElement("div");
    linkRow.className = "info-popover-links";
    panelData.links.forEach((linkEntry) => {
        const link = document.createElement("a");
        link.className = "info-popover-link";
        link.href = linkEntry.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = linkEntry.label;
        linkRow.appendChild(link);
    });
    panel.appendChild(linkRow);

    button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const shouldOpen = !entry.classList.contains("is-open");
        closeInfoPanels(shouldOpen ? entry : null);
        entry.classList.toggle("is-open", shouldOpen);
        button.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
    });

    entry.appendChild(button);
    entry.appendChild(panel);
    return entry;
}

function resetProgress() {
    const confirmed = window.confirm(
        "This will reset your entire tracker progress.\n\n" +
        "Watched marks and all personal ratings will be removed.\n\n" +
        "Do you want to continue?"
    );
    if (!confirmed) return;

    movieData.forEach((movie) => {
        userData[movie.id] = { seen: false, rating: null };
    });

    saveUserData();
    closeRatingPanel();
    render();
}

function setupEventListeners() {
    document.querySelectorAll(".uni-btn").forEach((button) => {
        button.addEventListener("click", (event) => {
            const target = event.target.closest(".uni-btn");
            if (!target) return;

            currentUniverse = target.dataset.uni;
            document.querySelectorAll(".uni-btn").forEach((entry) => entry.classList.remove("active"));
            target.classList.add("active");
            document.body.className = currentUniverse + "-theme";
            setJourneyTitle(currentUniverse);
            document.getElementById("phase-filter").value = "all";
            document.getElementById("phase-filter-container").style.display = currentUniverse === "dc" ? "none" : "flex";
            render();
        });
    });

    document.querySelectorAll(".search-chip").forEach((chip) => {
        chip.addEventListener("click", (event) => {
            if (event.target.closest("input")) return;
            const input = chip.querySelector("input");
            if (input) input.focus();
        });
    });

    setupCustomSelects();
    syncSelectDisplay("phase-filter", "phase-filter-display");
    syncSelectDisplay("sort-select", "sort-select-display");
    updateSortDirectionButton();

    document.getElementById("search-input").addEventListener("input", render);
    document.getElementById("phase-filter").addEventListener("change", () => {
        syncSelectDisplay("phase-filter", "phase-filter-display");
        render();
    });
    document.getElementById("sort-select").addEventListener("change", () => {
        syncSelectDisplay("sort-select", "sort-select-display");
        updateSortDirectionButton();
        render();
    });
    document.getElementById("sort-direction-btn").addEventListener("click", () => {
        const sortBy = document.getElementById("sort-select").value;
        if (!canToggleSortDirection(sortBy)) return;

        sortDirections[sortBy] = getSortDirection(sortBy) === "asc" ? "desc" : "asc";
        saveSortDirections();
        updateSortDirectionButton();
        render();
    });
    document.getElementById("extended-toggle").addEventListener("change", render);
    document.getElementById("hide-seen-toggle").addEventListener("change", render);
    document.getElementById("reset-progress-btn").addEventListener("click", resetProgress);
    document.getElementById("close-rating").addEventListener("click", closeRatingPanel);
    document.getElementById("rating-overlay").addEventListener("click", (event) => {
        if (event.target === event.currentTarget) {
            closeRatingPanel();
        }
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest(".info-entry")) {
            closeInfoPanels();
        }

        if (!event.target.closest(".select-chip")) {
            closeCustomSelects();
        }
    });
}

function syncSelectDisplay(selectId, displayId) {
    const select = document.getElementById(selectId);
    const display = document.getElementById(displayId);
    if (!select || !display) return;
    display.textContent = select.options[select.selectedIndex].textContent;
}

function setupCustomSelects() {
    document.querySelectorAll(".select-chip").forEach((chip) => {
        const select = chip.querySelector("select");
        if (!select) return;

        let menu = chip.querySelector(".custom-select-menu");
        if (!menu) {
            menu = document.createElement("div");
            menu.className = "custom-select-menu";
            chip.appendChild(menu);
        }

        menu.innerHTML = "";

        Array.from(select.options).forEach((option) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "custom-select-option" + (option.selected ? " active" : "");
            const label = document.createElement("span");
            label.className = "custom-select-option-label";
            label.textContent = option.textContent;
            button.appendChild(label);

            if (option.dataset.saga) {
                const saga = document.createElement("span");
                saga.className = "custom-select-option-saga";
                saga.textContent = option.dataset.saga;
                button.appendChild(saga);
            }

            button.addEventListener("click", (event) => {
                event.stopPropagation();
                select.value = option.value;
                syncSelectDisplay(select.id, select.id + "-display");
                updateCustomSelectState(chip, select.value);
                closeCustomSelects();
                select.dispatchEvent(new Event("change", { bubbles: true }));
            });
            menu.appendChild(button);
        });

        chip.addEventListener("click", (event) => {
            if (event.target.closest(".custom-select-menu")) return;
            const isOpen = chip.classList.contains("open");
            closeCustomSelects();
            if (!isOpen) {
                chip.classList.add("open");
                updateCustomSelectState(chip, select.value);
            }
        });
    });
}

function updateCustomSelectState(chip, value) {
    chip.querySelectorAll(".custom-select-option").forEach((optionButton, index) => {
        const select = chip.querySelector("select");
        const option = select.options[index];
        optionButton.classList.toggle("active", option.value === value);
    });
}

function closeCustomSelects() {
    document.querySelectorAll(".select-chip.open").forEach((chip) => chip.classList.remove("open"));
}

function getFilteredMovies(options = {}) {
    const {
        includeSeen = true,
        ignoreHideSeen = false
    } = options;

    const isExtended = document.getElementById("extended-toggle").checked;
    const hideSeen = document.getElementById("hide-seen-toggle").checked;
    const searchQuery = document.getElementById("search-input").value.trim().toLowerCase();
    const phaseFilter = document.getElementById("phase-filter").value;
    const sortBy = document.getElementById("sort-select").value;
    const sortDirection = getSortDirection(sortBy);

    const filtered = movieData.filter((movie) => {
        const data = userData[movie.id] || { seen: false, rating: null };

        if (movie.universe !== currentUniverse) return false;
        if (!isExtended && movie.type !== "movie") return false;
        if (!ignoreHideSeen && hideSeen && includeSeen && data.seen) return false;

        const searchableTitle = (movie.title + " " + getDisplayTitle(movie)).toLowerCase();
        if (!searchableTitle.includes(searchQuery)) return false;

        if (currentUniverse === "marvel" && phaseFilter !== "all" && String(movie.phase) !== phaseFilter) {
            return false;
        }

        return true;
    });

    if (sortBy === "year") {
        filtered.sort((a, b) => sortDirection === "asc" ? a.year - b.year : b.year - a.year);
    } else if (sortBy === "imdb") {
        filtered.sort((a, b) => sortDirection === "asc" ? a.imdb - b.imdb : b.imdb - a.imdb);
    } else if (sortBy === "user") {
        filtered.sort((a, b) => {
            const ratingB = userData[b.id] && userData[b.id].rating !== null ? userData[b.id].rating : -1;
            const ratingA = userData[a.id] && userData[a.id].rating !== null ? userData[a.id].rating : -1;
            return sortDirection === "asc" ? ratingA - ratingB : ratingB - ratingA;
        });
    } else {
        filtered.sort((a, b) => a.id - b.id);
    }

    return filtered;
}

function render() {
    const container = document.getElementById("timeline-content");
    container.innerHTML = "";
    container.classList.toggle("dc-coming-soon-mode", currentUniverse === "dc");
    setDcInteractionLock(currentUniverse === "dc");
    const filtered = getFilteredMovies();
    const progressSource = getFilteredMovies({ includeSeen: true, ignoreHideSeen: true });

    const grid = document.createElement("div");
    grid.className = "grid";

    filtered.forEach((movie, index) => {
        const data = userData[movie.id] || { seen: false, rating: null };
        const isUpcoming = movie.imdb <= 0;
        const card = document.createElement("div");
        card.className = "card" + (data.seen ? " seen" : "");
        card.dataset.movieId = String(movie.id);
        card.style.animationDelay = Math.min(index * 0.04, 0.8) + "s";

        const posterEl = createPosterElement(movie);
        const content = document.createElement("div");
        content.className = "card-content";

        const title = document.createElement("h4");
        title.textContent = getDisplayTitle(movie);

        const meta = document.createElement("div");
        meta.className = "meta";

        const year = document.createElement("span");
        year.className = "meta-year";
        year.textContent = String(movie.year) + (currentUniverse === "marvel" ? " - Phase " + movie.phase : "");

        const metaRight = document.createElement("div");
        metaRight.className = "meta-right";

        const imdb = document.createElement("span");
        imdb.className = "imdb-val" + (movie.imdb > 0 ? "" : " upcoming");
        if (movie.imdb > 0) {
            const star = document.createElement("i");
            star.className = "fas fa-star";
            imdb.appendChild(star);
            imdb.appendChild(document.createTextNode(" " + formatImdbRating(movie.imdb)));
        } else {
            imdb.textContent = "UPCOMING";
        }

        meta.appendChild(year);
        metaRight.appendChild(imdb);
        if (!isUpcoming) {
            const infoButton = createInfoButton(movie);
            if (infoButton) {
                metaRight.appendChild(infoButton);
            }
        }
        meta.appendChild(metaRight);

        const actions = document.createElement("div");
        actions.className = "actions";
        if (isUpcoming) {
            actions.appendChild(createUpcomingNotice(movie));
        } else {
            actions.appendChild(createSeenToggle(movie.id, data.seen));
            actions.appendChild(createRatingButton(movie, data.rating, data.seen));
        }

        content.appendChild(title);
        content.appendChild(meta);
        content.appendChild(actions);

        card.appendChild(posterEl);
        card.appendChild(content);
        grid.appendChild(card);
    });

    container.appendChild(grid);

    if (currentUniverse === "dc") {
        const stamp = document.createElement("div");
        stamp.className = "dc-coming-soon-stamp";
        stamp.innerHTML = '<span class="dc-coming-soon-stamp-inner">COMING SOON</span>';
        container.appendChild(stamp);
    }

    updateProgress(progressSource);
}

function toggleSeen(id) {
    if (!userData[id]) return;

    userData[id].seen = !userData[id].seen;
    if (!userData[id].seen) {
        userData[id].rating = null;
    }
    saveUserData();

    const hideSeen = document.getElementById("hide-seen-toggle").checked;
    if (hideSeen) {
        render();
        return;
    }

    const card = document.querySelector('.card[data-movie-id="' + id + '"]');
    if (card) {
        card.classList.toggle("seen", userData[id].seen);

        const checkbox = card.querySelector('.seen-label input[type="checkbox"]');
        if (checkbox) {
            checkbox.checked = userData[id].seen;
        }

        const movie = movieData.find((entry) => entry.id === id);
        const actions = card.querySelector(".actions");
        const existingButton = actions ? actions.querySelector(".rating-btn") : null;
        if (movie && actions && existingButton) {
            actions.replaceChild(createRatingButton(movie, userData[id].rating, userData[id].seen), existingButton);
        }
    }

    updateProgress(getFilteredMovies({ includeSeen: true }));
}

function updateProgress(list) {
    const releasedItems = list.filter((movie) => movie.imdb > 0);
    const total = releasedItems.length;
    const seen = releasedItems.filter((movie) => userData[movie.id] && userData[movie.id].seen).length;
    const percent = total > 0 ? Math.round((seen / total) * 100) : 0;

    document.getElementById("progress-fill").style.width = percent + "%";
    document.getElementById("progress-glow").style.width = percent + "%";
    document.getElementById("progress-text").innerText = seen + " of " + total + " completed";
    document.getElementById("progress-percent").innerText = percent + "%";

    document.getElementById("sticky-progress-fill").style.width = percent + "%";
    document.getElementById("sticky-progress-glow").style.width = percent + "%";
    document.getElementById("sticky-progress-text").innerText = seen + " of " + total + " completed";
    document.getElementById("sticky-progress-percent").innerText = percent + "%";
}


