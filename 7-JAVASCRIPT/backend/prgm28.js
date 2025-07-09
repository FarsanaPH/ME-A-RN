a = [11, 10, 12, 3, 2, 4]
// // Ascending Order
// newArray = a.sort((x, y) => x - y)
// console.log(newArray);

// // Decending Order
// newArray = a.sort((x, y) =>  y - x)
// console.log(newArray);

// find 2 is present in this array.

// Algorithm

// 1. Start
// 2. The given array should be in accesding order.
a.sort((a, b) => a - b)
searchItem = 2
low = 0
up = a.length - 1 // 6-1 = 5
mid = 0
isPresent = false
// 5. Repeat step 3 untill low and up concides.

while (low <= up) { // 0<=5  // 0<=1
    // 3. find the mid of the given arrat by using the formula mid = Math.floor(low+up / 2) - inorder to remove decimal points.
    mid = Math.floor((low + up) / 2) // 0+5/2 = 2.5 = 2 // 
    // 4. Compare the value stored in mid with the search value
    //     a) mid value == search value
    //                    print search item is present
    if (a[mid] == searchItem) { //a[2]=4 == 2
        isPresent = true
        break
    }
    //     b) mid value < search value
    //                    low = mid + 1
    else if (a[mid] < searchItem) { //4<2
        low = mid + 1
    }
    //     c) mid value > search value
    //                    up = mid - 1
    else { // 
        up = mid - 1//2-1=1
    }
}
console.log(isPresent ? `Present` : `Not Present`);




// 6. End