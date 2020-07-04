const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    let player1;
    let obj;

    let i = 1;
    var anystrength = Math.floor(Math.random() * 100);
    TEST_PLAYERS.forEach(player1 => {
        obj = {
            name: player1,
            strength: getRandomStrength(),
            image: "images/super-" + i + ".png",
            type: "hero"
        };
        detailedPlayers.push(obj);
        i++;
    });
    return detailedPlayers;

}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random() * 100);
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for (i = 0; i < players.length; i++) {
        player = `
              <div class="player">
                  <img src="${players[i].image}" alt="">
                  <div class="name">${players[i].name}</div>
                  <div class="strength">${players[i].strength}</div>
              </div>`;
        if (players[i].type == type) fragment += player;
    }

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}