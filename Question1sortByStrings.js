// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the 
// string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw",
//  the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should 
// be sortByString(s, t) = "oodg".


let sortByStrings = (s, t) => {
    // in case s is a falsy value 
    if (!s) return "argument 's' is not a string or contains no characters"

    let sortedString = []

    for (let i = 0; i < t.length; i++) {

        if (s.match(RegExp(t[i], 'g')))
            sortedString.push(...s.match(RegExp(t[i], 'g')))
    }

    // in cases where s has characters thats not present in t. 
    // will return at the end of the string in the order it appeared
    for (let j = 0; j < s.length; j++) {
        if (!t.includes(s[j])) {
            sortedString.push(s[j]);
        }
    }

    return sortedString.join('');


}




sortByStrings('weather', 'therapyw' )
sortByStrings("good", "odg")