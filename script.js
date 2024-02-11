"user strict";

const values = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(values)

//måler hvor hurtigt funktionen bliver udført
performance.mark("timer-start");
binarySearchRecursive(13, values);
performance.mark("timer-stop");

performance.mark("index-start");
values.indexOf(13);
performance.mark("index-stop");

//i koncollen brug performance.measure("binrec", "timer-start", "timer-stop");


function BinarySearch(value, values) {
    let start = 0;
    let end = values.length-1;
    let middle = (start + end) / 2;
    let found = false;

    while(found === false) {
        middle = (start + end) / 2;
        middle = Math.floor(middle);
        console.log(`Kigger mellem ${start} og ${end}`)

        if(value === values[middle]) {
            console.log(`Kigger på midten ${middle} - leder efter ${value}, fandt ${values[middle]}`)
            found = true;
        } else if(value>values[middle]) {
            console.log(`Kigger på midten ${middle} - leder efter ${value}, fandt ${values[middle]} `)
            start = middle + 1;
        } else if(value<values[middle]) {
            console.log(`Kigger på midten ${middle} - leder efter ${value}, fandt ${values[middle]} `)
            end = middle - 1;
        }
    }
    return middle;
}
















function binarySearchRecursive(value, values, start=0, end=values.length-1) {
    if(start > end) {
        return -1
    }

    let middle = start + Math.floor((end-start) / 2);
    const lookat = values[middle];

    if(value === lookat) {
        return middle;
    } else if(value > lookat) {
        return binarySearchRecursive(value, values, middle+1, end);
    } else if(values < lookat)  {
        return binarySearchRecursive(value, values, start, middle-1)
    }
}