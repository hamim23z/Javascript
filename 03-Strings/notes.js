/*
Syntax Rules for Strings
    • To make a string, we use either single quotes '' or double quotes "" or backtick ``
    • We can add pieces of text together by using the + operator. This is known as string concatenation.
    • We can concatenate strings and numbers together, what Javascript will do is just convert it all to a string.
*/


/*
Typeof Operator
    • This operator allows us to see what kind of data type we have. It's syntax is typeof()
*/


/*
Escape Characters
    • Because we have double quotes and single quotes, we can have some conflictions. To represent an apostrophe or
    aka single quote we use \' or \"
    • \n is another escape character and what this does is create a new line.
*/


/*
Backticks
    • When using backticks, we can use interpolation, which is recommended and a lot cleaner. It's syntax is `` and if we
    have any values we want to show, we use ${} to do so. 
    • It also helps us create multi line strings.
*/


console.log(typeof(5))
console.log(typeof('Hello'))
console.log('hello' + 3) //this is known as automatic type conversion
console.log('$28.94')
console.log('$' + 28.94)
console.log('I\'m using an escape character.')
console.log("This is a\n new line")