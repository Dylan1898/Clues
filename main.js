Friends = ['Bob', 'Carl', 'Willy', 'Dwayne', 'Ronald']
Locations = ['bathroom', 'closet', 'livingroom', 'sauna', 'bedroom', 'greenhouse', 'hallway', 'kitchen', 'nursery', 'den']
Weapons = ['bottle', 'knife', 'gun', 'tongs', 'cheese grater', 'slingshot', 'bananna', 'frog', 'log', 'apple', 'axe', 'throwing knife', 'coathanger', 'vaccum', 'broom', 'mop', 'razorblade', 'pizza', 'dog poop', 'whip']
counter = 0
document.addEventListener('DOMContentLoaded', function () {
    for (i = 1; i < 101; i++) {
        // friendNum.push(getRandomInt())
        var h3 = document.createElement('h3')
        var texty = h3.append('Clue  ' + [i])
        h3.id = ((counter += 1)+ getRandomInt())
        document.body.appendChild(h3)
        h3.addEventListener('click', function () {
            alert(Friends[this.id %5] + ' did it in the ' + Locations[this.id%10] + ' with a ' + Weapons[this.id%20]+ '.')
        })
    }
})
function getRandomInt(min, max) {
  min = Math.ceil(0);
  max = Math.floor(101);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
