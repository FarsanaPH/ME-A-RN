// # # # #
// # # # #
// # # # #
// # # # #

for (row = 1; row <= 4; row++) { // 1 //2 //3 // 4 //5
    str = ""
    for (col = 1; col <= 4; col++) { // 1<=4 // 2<=4 //
        str = str + "# " // # // ## / ####
    }
    console.log(str);
}

// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4
console.log(`----------------------------`);

for (row = 1; row <= 4; row++) { // 1 //2 //3 // 4 //5
    str = ""
    for (col = 1; col <= 4; col++) { // 1<=4 // 2<=4 //
        str = str + row + " " // # // ## / ####
    }
    console.log(str);
}
// -------------------------
console.log(`----------------------------`);
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
for (row = 1; row <= 4; row++) { // 1 //2 //3 // 4 //5
    str = ""
    for (col = 1; col <= 4; col++) { // 1<=4 // 2<=4 //
        str = str + col + " " // # // ## / ####
    }
    console.log(str);
}
console.log(`----------------------------`);
// *
// * *
// * * *
// * * * *
for (row = 1; row <= 4; row++) {
    str = ""
    for (col = 1; col <= row; col++) {
        str = str + "* "
    }
    console.log(str);

}
console.log(`----------------------------`);
// 1
// 2 2
// 3 3 3
// 4 4 4 4
for (row = 1; row <= 4; row++) {
    str = ""
    for (col = 1; col <= row; col++) {
        str = str + row + " "
    }
    console.log(str);

}
console.log(`----------------------------`);
// 1
// 1 2
// 1 2 3
// 1 2 3 4
for (row = 1; row <= 4; row++) {
    str = ""
    for (col = 1; col <= row; col++) {
        str = str + col + " "
    }
    console.log(str);

}
console.log(`----------------------------`);

// * * * *
// * * *
// * * 
// *
for (row = 4; row >= 1; row--) {
    str = ""
    for (col = 1; col <= row; col++) {
        str = str + "* "
    }
    console.log(str);
}
console.log(`----------------------------`);
//    *
//   * *
//  * * *
// * * * * 
for (row = 1; row <= 4; row++) {
    str = ""
    for(spa = 3; spa>=row; spa--){
        str = str + " "
    }
    for (col = 1; col <= row; col++) {
        str = str + "* "
    }
    console.log(str);
}

console.log(`----------------------------`);
// HW
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * * 
// *

for(row=1; row<=9;row++){
    if(row<=5){
        str=""
        for(col=1; col<=row; col++){
            str = str+"* "
        }
        console.log(str);
    }else{
        str=""
        for(col=1; col<= 10-row; col++){
             str = str+"* "
        }
        console.log(str);
    }
}
console.log(`----------------------------`);


//       * 
//     *   *
//   *       *
// * * * * * * *

for(row=1; row<=4; row++){
    str = ""
    for(col=1; col<=7; col++){
        if(row+col == 5 || col-row == 3 || row == 4){
            str = str+ "*"
        }else{
            str = str + " "
        }
    }
    console.log(str);
    
}
console.log(`----------------------------`);
// * * * * *
// *       *
// *       *
// *       *
// * * * * *
console.log(`----------------------------`);
// * * * * *
//   *   *
//     *
//   *   *
// * * * * *
console.log(`----------------------------`);
// 1
// 0 1
// 1 0 1
// 0 1 0 1
console.log(`-----------------------------`);

//             11
//          12 13 14
//       15 16 17 18 19
//    20 21 22 23 24 25 26w
// 27 28 29 30 31 32 33 34 35
console.log(`----------------------------`);

//         *
//       * *
//     * * *
//   * * * *
// * * * * *
//   * * * *
//     * * *
//       * * 
//         *
