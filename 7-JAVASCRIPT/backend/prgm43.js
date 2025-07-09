// text = 'hai hello all hello world all'
// // w.a.p to get the word count from the given text
// // o/p = {hai:1 ,hello:2, all:2, world:1}

// words = text.split(' ')
// console.log(words)
// o = {}
// for(w of words){ // hai // hello // all //hello
//     if(w in o){ // hello
//         o[w] += 1 // hello :2 // all:2
//     }
//     else{
//         o[w] = 1 // hai: 1 // hello : 1 // all:1 // world:1
//     }
// }
// console.log(o)

// console.log(`------------------`);


numArray = [10,20,30,20,40,50,50,60,10]
// w.a.p to find the count count

op = {}

// for (num of numArray) {
//     if (num in op) {
//         op[num] += 1
//     } else {
//         op[num] = 1
//     }
// }

// console.log(op);

// numArray.forEach((num) => num in op ? op[num] += 1 : op[num] = 1);

// console.log(op);

// console.log(`--------------------------------`);

pattern = 'ABC'
// find the first recursive letter - B
otp = {}

// words = pattern.split('')
// console.log(words);

// for (letter of words) {
//     if (letter in otp) {
//         console.log(letter);
//         break;
//     } else {
//         otp[letter] = 1
//     }
// }

// otp = {}

words = pattern.split('')
// console.log(words);
isPresent = false

for (letter of words) {
    if (letter in otp) {
        console.log(letter);
        isPresent = true
        break
    } else {
        otp[letter] = 1
    }
}

!isPresent && console.log('no recursive item');

