let  array = [
    {
        "id": 1,
        "name": "cat",
        "size": "small",
    },
    {
        "id": 2,
        "name": "dog",
        "size": "small",
    },
    {
        "id": 3,
        "name": "pig",
        "size": "big",
    }
]
let  newArray = array.map(function (animal) {
    if(animal.id == 1){
        animal.size = "big";
    }
    return animal;
});
console.log(newArray);