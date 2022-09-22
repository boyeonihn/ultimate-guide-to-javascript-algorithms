/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    const vowels = 'aeiou';

    return text.toLowerCase().split('').filter(n => vowels.includes(n)).length; 
}



module.exports = vowelsCounter;
