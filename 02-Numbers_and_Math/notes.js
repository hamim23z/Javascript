/*
Syntax Rules for Numbers and Math
    • We write it out like normal math.
    • Can do math with more than one number.
    • We can also use decimal numbers.
*/

/*
Order of Operations
    • This is known as operator precedence.
    • If we have both, then it is computed left to right.
    • Multiplication and division are done first.
    • Addition and subtraction are done after.
    • Using parenthesis is good if we want to calculate something first.
*/

/*
Numbers
    • Integers are whole numbers. Such as 1, 2, 3, 4, etc.
    • Floats are decimal numbers. Such as 1.1, 2.2, etc.
*/

/*
Common Issue with Floats
    • Computers have trouble keeping up with floats and displaying them.
    • To avoid this issue when calculating money, we can use cents instead of dollars. But then divide by 100. 
    • 7.99 would become 799 basically.
*/

/*
Round a Number
    • We use the Math function. So it would be Math.round(). And inside the () goes our number. 
    • This is regular rounding, if below 5 rounds down. If 5 or above it rounds up.
    • For money, we use the whole cent value instead of dollars. And then we convert it back to dollars by 
    dividing by 100. And all that goes inside Math.round()
*/

console.log(10.90*2 + 20.95)
console.log(10.90*2 + 20.95 + 4.99)
console.log(20.95 + 7.99*2)
console.log(36.93 * 0.1)
console.log((2095 + 799) / 100)

console.log(((2095 + 799) * 0.1))
console.log(Math.round((2095 + 799) * 0.1) / 100) //this is how we round values like 2.894 to 2.89