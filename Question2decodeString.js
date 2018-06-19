// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets 
// is repeated exactly k times. Note: k is guaranteed to be a positive integer.

// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"


function decodeString(s) {
    // in case encoded string patterns was heavily nested
    let encodedPatterns = s.split(/(\d+\[\w+)?(\d+\[\w+)\]+/ig)
    let ps
    let decoded = ''
    // start decoding from the last encoded string pattern
    for (let i = encodedPatterns.length - 1; i >= 0; i--) {
        // in cases where there are elements with empty strings
        if (encodedPatterns[i]) {
            ps = encodedPatterns[i].split('[')

            decoded = ps[1] + decoded;
            // in case k is not present at s[0]
            if(ps[0] ) {
            decoded = decoded.repeat(Number(ps[0]))
            }
        }
    }
    return decoded;
}
// Code needs to be refactored for cases when encoded_string = '' or k is not present
decodeString("4[ab]")
decodeString("2[b3[a]]")