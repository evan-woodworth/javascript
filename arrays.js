const favoriteAritst = ['Muse', 'Absofacto'];
const randomEmojis = ['😃', '😎', '🥱'];
const theDevLeague = ['Brandon Hall', 'Aaron Prince', 'Thomas Duong', 'Brianna Giorgi', 'Paul Knick', 'Maurice Chevez', 'Evan Woodworth', 'Amanda Posey'];
const my2DArray = [favoriteAritst, randomEmojis, theDevLeague];
const sampleArray = ['1', 2, 5-2, true];

// console.log(favoriteAritst);
// console.log(randomEmojis);
// console.log(theDevLeague);
// console.log(my2DArray);
// console.log(sampleArray);

for (let i=0; i<theDevLeague.length; i++) {
    console.log(theDevLeague[i]);
}
for (let i=0; i<randomEmojis.length; i++) {
    console.log(`${i+1} emoji, ah ah ah... `+randomEmojis[i]);
}
const theDevLeagueEmojis = [];
for (let i=0; i<theDevLeague.length; i++) {
    theDevLeagueEmojis.push(randomEmojis[Math.floor((Math.random()*randomEmojis.length))]+theDevLeague[i]);
    console.log(theDevLeagueEmojis[i]);
}