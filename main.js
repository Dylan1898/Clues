Friends = ['Bob', 'Carl', 'Willy', 'Dwayne', 'Ronald']
Locations = ['Bathroom', 'Closet', 'Livingroom', 'Sauna', 'Bedroom', 'Greenhouse', 'Hallway', 'Kitchen', 'Nursery', 'Den']
Weapons = ['bottle', 'knife', 'gun', 'tongs', 'cheese grater', 'slingshot', 'bananna', 'frog', 'log', 'apple', 'axe', 'throwing knife', 'coathanger', 'vaccum', 'broom', 'mop', 'razorblade', 'pizza', 'dog poop', 'whip']
friendNum = []
x = 0
v = Friends[friendNum[x]]
counter= 0
document.addEventListener('DOMContentLoaded', function () {
    // for ( x=0; x<101; x++){
    //    console.log(Friends[x]) 
    // }
var getAlert = (function () {
    
    return function () {return counter ;}
    
})();

    for (i = 1; i < 101; i++) {
        friendNum.push(getRandomInt())
        clickCounter=0
        var h3 = document.createElement('h3')
        var texty = h3.append('Clue  ' + [i])

        // h3.id=(getRandomInt() +  getRandomInt2() + getRandomInt3()) 
        document.body.appendChild(h3)
        h3.addEventListener('click', function () {
            alert(getAlert())
            
        })
        
    }
    
})

function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(5);
    return Math.floor(Math.random() * (max - min)) + min
}
function getRandomInt2(min, max) {
    min = Math.ceil(0);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min)) + min
}
function getRandomInt3(min, max) {
    min = Math.ceil(0);
    max = Math.floor(20);
    return Math.floor(Math.random() * (max - min)) + min
}

console.log(getRandomInt())
var q = getRandomInt()

friendNum.push(getRandomInt())

// Friends[friendNum[x]] + ' did it in the ' + Locations[0] + ' with a ' + Weapons[0] + '.'