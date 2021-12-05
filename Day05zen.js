//1.	Do the below programs in anonymous function & IIFE

//A.Print odd numbers in an array
//anonymous function:

let arr = [1, 2, 3, 4, 5, 6];
let a = function (arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            console.log(arr[i])
        }

    }

}
a(arr)

    //IIFE function :
    (function (arr) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 1) {
                console.log(arr[i])
            }

        }

    })(arr = [1, 2, 3, 4, 5]);

//Arrow function:
let arr = [1, 2, 3, 4, 5, 6];
let a = (arr) => {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            console.log(arr[i])
        }

    }

}
a(arr)

//B.Convert all the strings to title caps in a string array
//Anonymous function
a = ['swetha', 'nizar', 'san'];

myFunction = function (array) {
    b = [];
    for (i = 0; i < array.length; i++) {
        b.push(array[i].toUpperCase())
    }
    console.log(b);
}

myFunction(a);

//IIFE function
(function (array) {
    b = [];
    for (i = 0; i < array.length; i++) {
        b.push(array[i].toUpperCase())
    }
    console.log(b);
})(array = ['swetha', 'nizar', 'san']);

//Arrow function
myfunction = (arr) => {
    arrnew = [];
    for (i = 0; i < arr.length; i++) {
        arrnew[i] = arr[i].toUpperCase();
    }
    console.log(arrnew);
}
myfunction(arr = ['Swetha', 'san']);

//C.Sum of all numbers in an array

//Anonymous function

let a = function (a, b, c, d, e, f) {
    return a + b + c + d + e + f;
}
console.log(a(1, 2, 3, 4, 5, 6));

//IIFE function

(function (a, b, c, d, e, f) {
    console.log(a + b + c + d + e + f)
})(1, 2, 3, 4, 5, 6);

//Arrow function

let a = (a, b, c) => a + b + c;
console.log(a(1, 2, 3))


//D.Return all the prime numbers in an array
//Anonymous function
var Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
myFunction =
    function (numArray) {
        numArray = numArray.filter((number) => {
            for (var i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) return false;
            }
            return true;
        });

        console.log(numArray);
    }

myFunction(Array);

//IIFE function
(function () {

    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });

    console.log(numArray);
})(numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//Arrow function
numArray = (number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

console.log(numArray);

//G Remove duplicates from an array

//Anonymous function
let a = [1, 2, 3, 3, 2, 2, 6, 6];

myvariable = function (arr) {
    len = arr.length;
    b = [];
    for (i = 0; i < len; i++) {
        if (b.indexOf(arr[i]) === -1) {
            b.push(arr[i])

        }
    }
    console.log(b);
}
myvariable(a);

//IIFE function
(function (arr) {
    len = arr.length;
    b = [];
    for (i = 0; i < len; i++) {
        if (b.indexOf(arr[i]) === -1) {
            b.push(arr[i])

        }
    }
    console.log(b);
})(a = [1, 2, 3, 3, 2, 2, 6, 6]);
