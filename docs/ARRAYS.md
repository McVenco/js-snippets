# a JavaScript Array cheatsheet

(A good part of this was copied from https://gist.github.com/ourmaninamsterdam/1be9a5590c9cf4a0ab42)


## Basic operations, adding, removing

* [Create an array](#create-an-array)
* [Empty an array](#empty-an-array)
* [Clone an array](#clone-an-array)
* [Get last item](#get-last-item)
* [Remove first item](#remove-first-item)
* [Remove last item](#remove-last-item)
* [Add new item(s) to beginning](#add-new-items-to-beginning)
* [Add new item(s) to end](#add-new-items-to-end)
* [Overwrite item at a specific index](#overwrite-item-at-a-specific-index)
* [Add new item(s) at a specific index](#add-new-items-at-a-specific-index)
* [Remove single item at a specific index](#remove-single-item-at-a-specific-index)
* [Remove several items](#remove-several-items)

## Order, sort

* [Reverse an array](#reverse-an-array)
* [Delimit an array](#delimit-an-array)
* [Sort in numerical order](#sort-in-numerical-order)
* [Sort in alphabetical order](#sort-in-alphabetical-order)
* [Join two arrays together](#join-two-arrays-together)
* [Copy specific item(s)](#copy-specific-items)
* [Augment items within an array](#augment-items-within-an-array)
* [Return true if every item meets a condition](#return-true-if-every-item-meets-a-condition)
* [Return true if at least one item matches a condition](#return-true-if-at-least-one-item-matches-a-condition)
* [Execute a function once per array item](#execute-a-function-once-per-array-item)
* [Filter an array](#filter-an-array)
* [Detect an array](#detect-an-array)
* [Simple FIFO queue](#simple-fifo-queue)
* [Find index of an item](#find-index-of-an-item)
* [Randomise an array](#randomise-an-array)
* [Chaining Methods](#chaining-methods)


## Create an array

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus'];
```

## Empty an array

Keeping references intact.

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus'];

dinosaurs.splice(0, dinosaurs.length);
```

or

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus'];

dinosaurs.length = 0
```

## Clone an array

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus'];

let copy = dinosaurs.slice();
// ['Triceratops', 'Diplodocus', 'Stegosaurus']
```

## Get last item

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus'];

dinosaurs[dinosaurs.length - 1];
// 'Stegosaurus'
```

Or

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus'];

dinosaurs.slice(-1)[0];
// 'Stegosaurus'
```

## Remove first item

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus'];

dinosaurs.shift();
// 'Triceratops'

dinosaurs;
// ['Diplodocus', 'Stegosaurus']
```

## Remove last item

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus'];

dinosaurs.pop();
// 'Stegosaurus'

dinosaurs;
// ['Triceratops', 'Diplodocus'];
```

## Add new item(s) to beginning

```javascript
let dinosaurs = ['Diplodocus', 'Stegosaurus'];

dinosaurs.unshift('Triceratops');
// 3 - the array length

dinosaurs;
// ['Triceratops', 'Diplodocus', 'Stegosaurus']
```

## Add new item(s) to end

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus'];

dinosaurs.push('Velociraptor');
// 2
dinosaurs;
// ['Triceratops', 'Diplodocus', 'Stegosaurus', 'Velociraptor'];
```

## Overwrite item at a specific index

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus'];

dinosaurs[1] = 'Velociraptor';
// ['Triceratops', 'Velociraptor', 'Stegosaurus'];
```

Or

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus'];

dinosaurs.splice(1, 1, 'Velociraptor');
```

## Add new item(s) at a specific index

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus'];

dinosaurs.splice(1, 0, 'Velociraptor', 'Mosasaurus');
// ['Triceratops', 'Velociraptor', 'Mosasaurus', 'Diplodocus', 'Stegosaurus']
```

## Remove single item at a specific index

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus'];

dinosaurs.splice(1, 1);
// ['Diplodocus']

dinosaurs;
// ['Triceratops', 'Stegosaurus']
```

## Remove several items

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', ''];

dinosaurs.splice(1, 2);
// ['Diplodocus', 'Stegosaurus']

dinosaurs;
// ['Triceratops']
```

## Reverse an array

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus'];

dinosaurs.reverse();
// ['Stegosaurus', 'Diplodocus', 'Triceratops'];
```

## Delimit an array

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus'];

dinosaurs.join(' AND ');
// 'Triceratops AND Diplodocus AND Stegosaurus'
```

## Sort in alphabetical order

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus', 'Velociraptor'];

dinosaurs.sort();
// ['Diplodocus', 'Stegosaurus', 'Triceratops', 'Velociraptor']
```

## Sort in numerical order

```javascript
let numbers = [1438,2605,794,3947,6241,11745,2585];

numbers.sort(function(a, b) {
    return a - b;
});
// [794,1438,2585,2605,3947,6241,11745]
```

## Join two arrays together

```javascript
let dayTimeMeals = ['breakfast', 'lunch'];
let nightTimeMeals = ['dinner', 'supper'];

let allTheMeals = dayTimeMeals.concat(nightTimeMeals);
// ['breakfast', 'lunch', 'dinner', 'supper']
```

## Copy specific item(s)

```javascript
let meals = ['breakfast', 'lunch', 'dinner', 'supper'];

nightTimeMeals = meals.slice(2,4);
// ['dinner', 'supper']
```

## Augment items within an array

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus'];
let type = ['ferocious', 'humongous', 'laidback'];

dinosaurs.map(function(item, i) {
  return item + ' is ' + type[i];
});
// ["Triceratops is ferocious", "Diplodocus is humongous", "Stegosaurus is laidback"]
```

## Return true if every item meets a condition

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus', 'Velociraptor'];

dinosaurs.every(function(item){ return item.length > 0 });
// true

dinosaurs.every(function(item){ return item.length > 6 });
// false
```

## Return true if at least one item matches a condition

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus', 'Velociraptor'];

dinosaurs.some(function(item){ return item === 'Diplodocus';});
// true

dinosaurs.some(function(item){ return item === 'Pteranodon';});
//false
```

## Execute a function once per array item

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus', 'Velociraptor'];

dinosaurs.forEach(function(currentValue, index, arr){
  console.log(index, currentValue, arr);
});
```

## Filter an array

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus', 'Velociraptor'];

dinosaurs.filter(function(item) {
  return item !== 'Stegosaurus';
});
// ['Triceratops', 'Diplodocus', 'Velociraptor'];
```
## Detect an array

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus'];

Array.isArray(dinosaurs)
// true
```

## Simple FIFO queue

```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus'];

dinosaurs.shift(); 
dinosaurs.push('Velociraptor');

// ['Diplodocus', 'Stegosaurus', 'Velociraptor']

dinosaurs.shift()
dinosaurs.push('Brachiosaurus');

// ['Stegosaurus', 'Velociraptor', 'Brachiosaurus']
// ... and so on ...
```

## Find index of an item


```javascript
let dinosaurs = ['Triceratops', 'Diplodocus', 'Stegosaurus'];

dinosaurs.indexOf('Stegosaurus');
// 2
```

## Randomise an array

```javascript
function randomiseArray(arr) {
    let buffer = [], start;

    for(let i = arr.length; i >= arr.length && i > 0;i--) {
        start = Math.floor(Math.random() * arr.length);
        buffer.push(arr.splice(start, 1)[0])
    };

    return buffer;
}

randomiseArray([0,1,2,3,4]);
// [2,1,0,3,4]

randomiseArray([0,1,2,3,4]);
// [3,2,1,4,0]

randomiseArray([0,1,2,3,4]);
// [1,2,4,0,3]
```

## Chaining methods

```javascript
let meals = [
  {type: 'breakfast', name: 'Full English', calories: 1500},
  {type: 'breakfast', name: 'Colacao', calories: 260},
  {type: 'breakfast', name: 'Croissant and jam', calories: 520},
  {type: 'breakfast', name: 'Granola with Greek yoghurt and blueberries', calories: 680},
  {type: 'brinner', name: 'Shepherds Pie with strawberry yoghurt', calories: 915},
  {type: 'brinner', name: 'Milky Porridge with beef and green beans', calories: 875},
  {type: 'dinner', name: 'Phad Thai', calories: 750},
  {type: 'dinner', name: 'Chicken Katsu curry and rice', calories: 830},
];

function getMealsByMaxCalories(meals, maxCalories, dailyAllowance) {
  return meals
    .filter(function(meal) {
        return meal.calories <= maxCalories;
    })
    .map(function(meal) {
        return {
            name: meal.name,
            calories: meal.calories,
            percentageOfDailyAllowance: meal.calories / dailyAllowance * 100
        }
    });
}
    
getMealsByMaxCalories(meals, 850, 2000);

/*
[
  {
    "name": "Colacao",
    "calories": 260,
    "percentageOfDailyAllowance": 13
  },
  {
    "name": "Croissant and jam",
    "calories": 520,
    "percentageOfDailyAllowance": 26
  },
  {
    "name": "Granola with Greek yoghurt and blueberries",
    "calories": 680,
    "percentageOfDailyAllowance": 34
  },
  {
    "name": "Phad Thai",
    "calories": 750,
    "percentageOfDailyAllowance": 37.5
  }
]
*/
```