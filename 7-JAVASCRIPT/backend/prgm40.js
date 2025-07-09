sentance = "good Morning all"
//w.a.p to print all vowels from the given string
// a e i o u => o o o i a

newArray = Array.from(sentance)
console.log(newArray);
vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
d = []
for (char of newArray) {
    // console.log(char);
    if (vowels.includes(char)) {
        // console.log(char);
        d.push(char)
    }
}
console.log(d);

Array.from(sentance).filter((char)=>vowels.includes(char)).forEach((item)=>console.log(item))


// w.a.p to check whether a given string is palindrom or not
// eg : malayalam