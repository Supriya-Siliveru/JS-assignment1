//--------------- Wap to print reverse of a number-----------------

// function reverseNumber(number) {
//     const numString = number.toString();

//     const reversedString = numString.split('').reverse().join('');

//     const reversedNumber = parseInt(reversedString);

//     console.log(`The reverse of ${number} is: ${reversedNumber}`);
// }
// const inputNumber = 987;
// reverseNumber(inputNumber);

//or

        // for (let i = 0; i <=10; i++) {

        //     console.log(i)

        // }
        // for (let j = 10; j >= 0; j--) {
        //     console.log(j)


        // } 

//---------------wap to check number is palindrome-------------------

// function ispalindrome(number) {
//     const numString = number.toString();

//     const reversedString = numString.split('').reverse().join('');
//     return numString===reversedString;

// }
// const inputNumber = 12321;
// if(ispalindrome(inputNumber)){
//     console.log("Number is a palindrome")

// }else{
//     console.log("Not a palindrome")
// }



//---------------wap to check number is armstrong or not--------------------

        // let sum = 0;
        // let number = prompt("Enter your number")
        // let temp = num;


        // while(temp>0){
        //     let reminder = temp%10;
        //     sum += reminder*reminder*reminder;
        //     temp = parseInt(temp/10);
        // }
        // if(sum === num){
        //     console.log(number,'is an Armstrong Number.')
        // }else{
        //     console.log(number,'is not an Armstrong Number.')
        // }

//------------------wap to calculate sum of digits of a number---------------

        // let num = prompt("enter the Number")
        // function sumofDigits(num){
        //     let sum = 0;
        //     while (num > 0){
        //         sum += num % 10;
        //         num = Math.floor(num/10);
        //     }
        //     return sum;
        // }
        // const result = sumofDigits(num);
        // console.log(result)

//----------------wap for table---------------------

        // let n = prompt("Enter table number");
        // for (let i = 1; i <= 10; i++){
        //     let result = n*i
        //     console.log(result)

        // }

//-----------------wap for tables of 1-20-----------------

        // for (let i = 1; i <= 20; i++){
        //     for (let j = 1; j <= 10; j++){
        //         console.log(i*j)
        //     }
        //     console.log("\n")
        // }

//--------------wap to prime numbers in functions------------

        // function isprime(number) {

        //     for (let i = 2; i < number; i++) {
        //         if (number % i === 0) {

        //             return false;
        //         }
        //     }
        //     return true;
        // }
        // let number = prompt("enter a number")
        // if (isprime(number)) {
        //     console.log(number, "is a prime")
        // } else {
        //     console.log(number, 'is not a prime')
        // }



//----------------------Assignment: objects related question---------------------------

let players = [
    {
        name:"test1",
        team:"A"
    },
    {
        name:"test2",
        team:"B"
    },
    {
        name:"test3",
        team:"B"
    },
    {
        name:"test4",
        team:"A"
    },
    {
        name:"test5",
        team:"A"
    },
    {
        name:"test6",
        team:"A"
    },
]
let organizedTeams = {};

for (let player of players) {
    organizedTeams[player.team] = organizedTeams[player.team] || [];
    organizedTeams[player.team].push({ name: player.name });
}

console.log(organizedTeams);