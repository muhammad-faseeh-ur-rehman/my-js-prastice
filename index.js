const numequallto = (a,b) => a === 100 || b === 100 || (a + b) === 100;
console.log(numequallto(50,50));
2 //
const filetype = (str) =>  str.slice(str.lastIndexOf('.'))
console.log(filetype('index.css'));
console.log(filetype('webpack.config.js'));
 3 //
const AlignChar = (str) => str.split('').map(char => String.fromCharCode(char.charCodeAt(0)));
console.log(AlignChar('z'));
4 //
const date = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1 ;
    const years = date.getFullYear();
    return `${months}/${days}/${years}`;
}
console.log(date());
5 //
const NewString = (str) => `${str}`;
console.log(NewString("NEW! offers"));
 2.1  //
const makestr = (str) => 
    str.length < 3 ? str : str.slice(0,3) + str.slice(-3);
console.log(makestr('ab'));
console.log(makestr('abcdefg'));
 2.2 //
const firstHalf = (str) => str.slice(0, str.length / 2);
console.log( firstHalf ('faseeh'));
 2.3 //
const concatenate  = (str1, str2 ) => 
    str1.slice(1) + str2.slice(1);
console.log(concatenate('abc', "def"));
 2.4 //
const closestto100 = (a, b) => (100 - a) < (100 - b) ? a : b;
console.log(closestto100(99, 1));
 2.5 //
const countchars = (str, char) =>
    str.split('').filter(ch => ch === char).length;
const contains = (str, char) =>
    countchars(str, char) >= 2 && countchars(str, char) <= 4;
console.log(contains('oooh', 'o'));
 3.1 //
const coutnEvennumbers = (arr) => arr.filter(num => num % 2 === 0).length;

const countarrynumber = (num) => {
    const returnArray = [];
    for(let i = 1; i <= num; i+=1){
        returnArray.push(i);
    }
    return returnArray;
};
console.log(coutnEvennumbers([1,2,3,4,5,6]));
console.log(countarrynumber(countarrynumber(9)));
 3.2 //
const isAscending = (arr) => {
    for(let i = 0; i < arr.length; i += 1 ){
        if(arr[i+1] < arr[i]) return false;
    }
    return true;
}

console.log(isAscending([1,2,3,4,5,6]));
 3.3 //
const largestEvennumber = (arr) => Math.max(...arr.filter(num => num % 2 === 0));
console.log(largestEvennumber([1,2,3,4,5,6,16]));
3.4 //
const replacedigit = (str) => str.replace(/[0-9]/,'$');
console.log(replacedigit('Abcd1fghijk'));
