function makePerson(age, name) {
    return {
        age: age,
        name: name,
        born: new Date()
    }
}

/*
Create a function that accepts a number, loop for the length of that number, and return an array of people objects.
*/

var createPeopleArr = function(n) {
    var arr = []
    for (var i=0; i<n; i++) {
        var person = makePerson(Math.random()*99, 'Tyler');
        arr.push(person);
    }
    return arr;
}

var people = createPeopleArr(10);

//create a simple algorithm to replace the code below that generates n number of people objects, each with a random age, and return the array of objects

var people = [
    makePerson(Math.round(Math.random()*99)),
    makePerson(Math.round(Math.random()*99)),
    makePerson(Math.round(Math.random()*99)),
    makePerson(Math.round(Math.random()*99)),
    makePerson(Math.round(Math.random()*99))
];
    
_.each(people, function(person) {
    console.log(person.age);
});
    
//now, create a simple algorithm that will return the oldest person model from your generated array of people

var getOldestPerson= function(arrOfPeople) {
    var ageWhiteBoard = 0;
    var indieWhiteBoard = '';
    for(var i=0; i < arrOfPeople.length; i++) {
        if (ageWhiteBoard < arrOfPeople[i].age) {
            ageWhiteBoard = arrOfPeople[i].age;
            indiceWhiteBoard = i;
        };
    }
    return arrOfPeople[indiceWhiteBoard];
}

var oldest = getOldestPerson(people);
console.log('The oldest is ', oldest);