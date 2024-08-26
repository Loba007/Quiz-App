export const jsQuestions = [ 
    { 
        id: 1, 
        question: "What is the correct syntax to create a function in JavaScript?", 
        options: [ 
            { choice: "function myFunction()", isCorrect: true }, 
            { choice: "function = myFunction()", isCorrect: false }, 
            { choice: "def myFunction()", isCorrect: false }, 
            { choice: "function: myFunction()", isCorrect: false } 
        ] 
    }, 
    { 
        id: 2, 
        question: "Which data type is not primitive in JavaScript?", 
        options: [ 
            { choice: "String", isCorrect: false }, 
            { choice: "Number", isCorrect: false }, 
            { choice: "Boolean", isCorrect: false }, 
            { choice: "Array", isCorrect: true } 
        ] 
    }, 
    { 
        id: 3, 
        question: "How do you declare a JavaScript variable?", 
        options: [ 
            { choice: "var myVar;", isCorrect: true }, 
            { choice: "variable myVar;", isCorrect: false }, 
            { choice: "v myVar;", isCorrect: false }, 
            { choice: "declare myVar;", isCorrect: false } 
        ] 
    }, 
    { 
        id: 4, 
        question: "What does 'typeof' operator return in JavaScript?", 
        options: [ 
            { choice: "The type of the variable", isCorrect: true }, 
            { choice: "The value of the variable", isCorrect: false }, 
            { choice: "The length of the variable", isCorrect: false }, 
            { choice: "The scope of the variable", isCorrect: false } 
        ] 
    }, 
    { 
        id: 5, 
        question: "Which method is used to find an element by its ID in JavaScript?", 
        options: [ 
            { choice: "getElementById()", isCorrect: true }, 
            { choice: "getElementByClass()", isCorrect: false }, 
            { choice: "getId()", isCorrect: false }, 
            { choice: "findElementById()", isCorrect: false } 
        ] 
    }, 
    { 
        id: 6, 
        question: "Which operator is used to assign a value to a variable in JavaScript?", 
        options: [ 
            { choice: "=", isCorrect: true }, 
            { choice: "==", isCorrect: false }, 
            { choice: "===", isCorrect: false }, 
            { choice: ":", isCorrect: false } 
        ] 
    }, 
    { 
        id: 7, 
        question: "How can you add a comment in JavaScript?", 
        options: [ 
            { choice: "// This is a comment", isCorrect: true }, 
            { choice: "<&#33--This is a comment-->", isCorrect: false }, 
            { choice: "' This is a comment", isCorrect: false }, 
            { choice: "# This is a comment", isCorrect: false } 
        ] 
    }, 
    { 
        id: 8, 
        question: "What is the correct way to check if two variables are equal in value and type?", 
        options: [ 
            { choice: "===", isCorrect: true }, 
            { choice: "==", isCorrect: false }, 
            { choice: "=", isCorrect: false }, 
            { choice: "equals()", isCorrect: false } 
        ] 
    }, 
    { 
        id: 9, 
        question: "How do you create an array in JavaScript?", 
        options: [ 
            { choice: "var colors = ['red', 'green', 'blue'];", isCorrect: true }, 
            { choice: "var colors = 'red', 'green', 'blue';", isCorrect: false }, 
            { choice: "var colors = {'red', 'green', 'blue'};", isCorrect: false }, 
            { choice: "var colors = (red, green, blue);", isCorrect: false } 
        ] 
    }, 
    { 
        id: 10, 
        question: "Which method is used to remove the last element from an array?", 
        options: [ 
            { choice: "pop()", isCorrect: true }, 
            { choice: "push()", isCorrect: false }, 
            { choice: "shift()", isCorrect: false }, 
            { choice: "unshift()", isCorrect: false } 
        ] 
    }, 
    { 
        id: 11, 
        question: "What does JSON stand for?", 
        options: [ 
            { choice: "JavaScript Object Notation", isCorrect: true }, 
            { choice: "JavaScript Online Network", isCorrect: false }, 
            { choice: "JavaScript Object Namespace", isCorrect: false }, 
            { choice: "JavaScript Oriented Notation", isCorrect: false } 
        ] 
    }, 
    { 
        id: 12, 
        question: "Which function is used to parse a JSON string into a JavaScript object?", 
        options: [ 
            { choice: "JSON.parse()", isCorrect: true }, 
            { choice: "JSON.stringify()", isCorrect: false }, 
            { choice: "JSON.convert()", isCorrect: false }, 
            { choice: "JSON.objectify()", isCorrect: false } 
        ] 
    }, 
    { 
        id: 13, 
        question: "What does the 'this' keyword refer to in JavaScript?", 
        options: [ 
            { choice: "The object from which it was called", isCorrect: true }, 
            { choice: "The current function", isCorrect: false }, 
            { choice: "The parent object", isCorrect: false }, 
            { choice: "The global object", isCorrect: false } 
        ] 
    }, 
    { 
        id: 14, 
        question: "Which event occurs when the user clicks on an HTML element?", 
        options: [ 
            { choice: "onclick", isCorrect: true }, 
            { choice: "onmouseover", isCorrect: false }, 
            { choice: "onchange", isCorrect: false }, 
            { choice: "onload", isCorrect: false } 
        ] 
    }, 
    { 
        id: 15, 
        question: "How do you write an IF statement in JavaScript?", 
        options: [ 
            { choice: "if (condition) { }", isCorrect: true }, 
            { choice: "if condition { }", isCorrect: false }, 
            { choice: "if (condition) then { }", isCorrect: false }, 
            { choice: "if condition then { }", isCorrect: false } 
        ] 
    }, 
    { 
        id: 16, 
        question: "Which operator is used to concatenate strings in JavaScript?", 
        options: [ 
            { choice: "+", isCorrect: true }, 
            { choice: "&", isCorrect: false }, 
            { choice: "*", isCorrect: false }, 
            { choice: "concat()", isCorrect: false } 
        ] 
    }, 
    { 
        id: 17, 
        question: "How do you create a JavaScript object?", 
        options: [ 
            { choice: "var person = {firstName:'John', lastName:'Doe'};", isCorrect: true }, 
            { choice: "var person = (firstName:'John', lastName:'Doe');", isCorrect: false }, 
            { choice: "var person = ['firstName':'John', 'lastName':'Doe'];", isCorrect: false }, 
            { choice: "var person = <firstName='John', lastName='Doe'>;", isCorrect: false } 
        ] 
    }, 
    { 
        id: 18, 
        question: "How can you add an element at the beginning of an array?", 
        options: [ 
            { choice: "unshift()", isCorrect: true }, 
            { choice: "shift()", isCorrect: false }, 
            { choice: "push()", isCorrect: false }, 
            { choice: "pop()", isCorrect: false } 
        ] 
    }, 
    { 
        id: 19, 
        question: "Which statement is used to exit a loop in JavaScript?", 
        options: [ 
            { choice: "break", isCorrect: true }, 
            { choice: "exit", isCorrect: false }, 
            { choice: "stop", isCorrect: false }, 
            { choice: "return", isCorrect: false } 
        ] 
    }, 
    { 
        id: 20, 
        question: "How do you find the number of elements in an array?", 
        options: [ 
            { choice: "array.length", isCorrect: true }, 
            { choice: "array.size", isCorrect: false }, 
            { choice: "array.count", isCorrect: false }, 
            { choice: "array.elements", isCorrect: false } 
        ] 
    }, 
    { 
        id: 21, 
        question: "Which of the following is not a JavaScript loop?", 
        options: [ 
            { choice: "foreach", isCorrect: true }, 
            { choice: "for", isCorrect: false }, 
            { choice: "while", isCorrect: false }, 
            { choice: "do while", isCorrect: false } 
        ] 
    }, 
    { 
        id: 22, 
        question: "Which method is used to add one or more elements to the end of an array?", 
        options: [ 
            { choice: "push()", isCorrect: true }, 
            { choice: "pop()", isCorrect: false }, 
            { choice: "shift()", isCorrect: false }, 
            { choice: "unshift()", isCorrect: false } 
        ] 
    }, 
    { 
        id: 23, 
        question: "What is the output of the following code: `console.log(typeof NaN);`?", 
        options: [ 
            { choice: "number", isCorrect: true }, 
            {choice: "NaN", isCorrect: false }, 
            { choice: "undefined", isCorrect: false }, 
            { choice: "null", isCorrect: false } 
        ] 
    }, 
    { 
        id: 24, 
        question: "How do you write a switch statement in JavaScript?", 
        options: [ 
            { choice: "switch(expression) { case x: break; case y: break; }", isCorrect: true }, 
            { choice: "switch(expression) { case x; break; case y; break; }", isCorrect: false }, 
            { choice: "switch { case x: break; case y: break; }", isCorrect: false }, 
            { choice: "switch(expression) { x: break; y: break; }", isCorrect: false } 
        ] 
    }, 
    { 
        id: 25, 
        question: "Which method is used to convert a string to lowercase in JavaScript?", 
        options: [ 
            { choice: "toLowerCase()", isCorrect: true }, 
            { choice: "lowercase()", isCorrect: false }, 
            { choice: "changeCase('lower')", isCorrect: false }, 
            { choice: "convertCase('lower')", isCorrect: false } 
        ] 
    }, 
    { 
        id: 26, 
        question: "Which method is used to remove whitespace from both ends of a string?", 
        options: [ 
            { choice: "trim()", isCorrect: true }, 
            { choice: "strip()", isCorrect: false }, 
            { choice: "cut()", isCorrect: false }, 
            { choice: "clean()", isCorrect: false } 
        ] 
    }, 
    { 
        id: 27, 
        question: "What does the '===' operator compare?", 
        options: [ 
            { choice: "Both value and type", isCorrect: true }, 
            { choice: "Only value", isCorrect: false }, 
            { choice: "Only type", isCorrect: false }, 
            { choice: "Both type and reference", isCorrect: false } 
        ] 
    }, 
    { 
        id: 28, 
        question: "Which method is used to add a new element to the beginning of an array?", 
        options: [ 
            { choice: "unshift()", isCorrect: true }, 
            { choice: "shift()", isCorrect: false }, 
            { choice: "push()", isCorrect: false }, 
            { choice: "pop()", isCorrect: false } 
        ] 
    }, 
    { 
        id: 29, 
        question: "Which of the following is a correct way to declare a JavaScript array?", 
        options: [ 
            { choice: "var arr = [1, 2, 3];", isCorrect: true }, 
            { choice: "var arr = (1, 2, 3);", isCorrect: false }, 
            { choice: "var arr = {1, 2, 3};", isCorrect: false }, 
            { choice: "var arr = <1, 2, 3>;", isCorrect: false } 
        ] 
    }, 
    { 
        id: 30, 
        question: "Which function is used to parse an integer from a string in JavaScript?", 
        options: [ 
            { choice: "parseInt()", isCorrect: true }, 
            { choice: "parse()", isCorrect: false }, 
            { choice: "getInt()", isCorrect: false }, 
            { choice: "toInteger()", isCorrect: false } 
        ] 
    }, 
    { 
        id: 31, 
        question: "Which method is used to reverse an array in JavaScript?", 
        options: [ 
            { choice: "reverse()", isCorrect: true }, 
            { choice: "invert()", isCorrect: false }, 
            { choice: "flip()", isCorrect: false }, 
            { choice: "switch()", isCorrect: false } 
        ] 
    }, 
    { 
        id: 32, 
        question: "What will the following code return: `Boolean(10 > 9)`?", 
        options: [ 
            { choice: "true", isCorrect: true }, 
            { choice: "false", isCorrect: false }, 
            { choice: "NaN", isCorrect: false }, 
            { choice: "undefined", isCorrect: false } 
        ] 
    }, 
    { 
        id: 33, 
        question: "Which method removes the last element from an array?", 
        options: [ 
            { choice: "pop()", isCorrect: true }, 
            { choice: "push()", isCorrect: false }, 
            { choice: "shift()", isCorrect: false }, 
            { choice: "unshift()", isCorrect: false } 
        ] 
    }, 
    { 
        id: 34, 
        question: "Which method is used to join two or more arrays?", 
        options: [ 
            { choice: "concat()", isCorrect: true }, 
            { choice: "join()", isCorrect: false }, 
            { choice: "merge()", isCorrect: false }, 
            { choice: "combine()", isCorrect: false } 
        ] 
    }, 
    { 
        id: 35, 
        question: "Which keyword is used to create a constant in JavaScript?", 
        options: [ 
            { choice: "const", isCorrect: true }, 
            { choice: "constant", isCorrect: false }, 
            { choice: "var", isCorrect: false }, 
            { choice: "let", isCorrect: false } 
        ] 
    }, 
    { 
        id: 36, 
        question: "What will the following code output: `console.log('5' + 5);`?", 
        options: [ 
            { choice: "'55'", isCorrect: true }, 
            { choice: "10", isCorrect: false }, 
            { choice: "NaN", isCorrect: false }, 
            { choice: "TypeError", isCorrect: false } 
        ] 
    }, 
    { 
        id: 37, 
        question: "Which method is used to find the index of an element in an array?", 
        options: [ 
            { choice: "indexOf()", isCorrect: true }, 
            { choice: "findIndex()", isCorrect: false }, 
            { choice: "find()", isCorrect: false }, 
            { choice: "search()", isCorrect: false } 
        ] 
    }, 
    { 
        id: 38, 
        question: "How do you declare a function in JavaScript?", 
        options: [ 
            { choice: "function myFunction() { }", isCorrect: true }, 
            { choice: "def myFunction() { }", isCorrect: false }, 
            { choice: "function: myFunction() { }", isCorrect: false }, 
            { choice: "declare myFunction() { }", isCorrect: false } 
        ] 
    }, 
    { 
        id: 39, 
        question: "Which method is used to convert a string to an integer in JavaScript?", 
        options: [ 
            { choice: "parseInt()", isCorrect: true }, 
            { choice: "parse()", isCorrect: false }, 
            { choice: "toInteger()", isCorrect: false }, 
            { choice: "getInt()", isCorrect: false } 
        ] 
    }, 
    { 
        id: 40, 
        question: "Which property of the 'arguments' object contains the number of arguments passed to a function?", 
        options: [ 
            { choice: "length", isCorrect: true }, 
            { choice: "size", isCorrect: false }, 
            { choice: "count", isCorrect: false }, 
            { choice: "arguments.length", isCorrect: false } 
        ] 
    }, 
    { 
        id: 41, 
        question: "Which of the following is not a valid JavaScript variable name?", 
        options: [ 
            { choice: "2names", isCorrect: true }, 
            { choice: "first_name", isCorrect: false }, 
            { choice: "$value", isCorrect: false }, 
            { choice: "_variable", isCorrect: false } 
        ] 
    }, 
    { 
        id: 42, 
        question: "How can you detect the client's browser name?", 
        options: [ 
            { choice: "navigator.appName", isCorrect: true }, 
            { choice: "client.browserName", isCorrect: false }, 
            { choice: "browser.name", isCorrect: false }, 
            { choice: "client.navigator", isCorrect: false } 
        ] 
    }, 
    { 
        id: 43, 
        question: "What will the following code output: `console.log(2 + '2');`?", 
        options: [ 
            { choice: "'22'", isCorrect: true }, 
            { choice: "4", isCorrect: false }, 
            { choice: "NaN", isCorrect: false }, 
            { choice: "TypeError", isCorrect: false } 
        ] 
    }, 
    { 
        id: 44, 
        question: "How can you convert a string to an array in JavaScript?", 
        options: [ 
            { choice: "split()", isCorrect: true }, 
            { choice: "slice()", isCorrect: false }, 
            { choice: "splice()", isCorrect: false }, 
            { choice: "toArray()", isCorrect: false } 
        ] 
    }, 
    { 
        id: 45, 
        question: "Which of the following methods checks if a string starts with a specific substring?", 
        options: [ 
            { choice: "startsWith()", isCorrect: true }, 
            { choice: "beginWith()", isCorrect: false }, 
            { choice: "starts()", isCorrect: false }, 
            { choice: "startswith()", isCorrect: false } 
        ] 
    }, 
    { 
        id: 46, 
        question: "What is the difference between `let` and `var` in JavaScript?", 
        options: [ 
            { choice: "`let` is block-scoped, `var` is function-scoped", isCorrect: true }, 
            { choice: "`let` is global-scoped, `var` is block-scoped", isCorrect: false }, 
            { choice: "`let` is local-scoped, `var` is global-scoped", isCorrect: false }, 
            { choice: "`let` is function-scoped, `var` is block-scoped", isCorrect: false } 
        ] 
    }, 
    { 
        id: 47, 
        question: "Which method is used to combine all elements of an array into a string?", 
        options: [ 
            { choice: "join()", isCorrect: true }, 
            { choice: "concat()", isCorrect: false }, 
            { choice: "merge()", isCorrect: false }, 
            { choice: "add()", isCorrect: false } 
        ] 
    }, 
    { 
        id: 48, 
        question: "Which of the following is a JavaScript framework?", 
        options: [ 
            { choice: "Angular", isCorrect: true }, 
            { choice: "Laravel", isCorrect: false }, 
            { choice: "Django", isCorrect: false }, 
            { choice: "Rails", isCorrect: false } 
        ] 
    }, 
    { 
        id: 49, 
        question: "Which keyword is used to handle exceptions in JavaScript?", 
        options: [ 
            { choice: "try", isCorrect: true }, 
            { choice: "catch", isCorrect: false }, 
            { choice: "throw", isCorrect: false }, 
            { choice: "error", isCorrect: false } 
        ] 
    }, 
    { 
        id: 50, 
        question: "What will the following code output: `console.log(1 == '1');`?", 
        options: [ 
            { choice: "true", isCorrect: true }, 
            { choice: "false", isCorrect: false }, 
            { choice: "NaN", isCorrect: false }, 
            { choice: "TypeError", isCorrect: false } 
        ] 
    } 
];