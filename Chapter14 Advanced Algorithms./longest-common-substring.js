function longestCommonSubstring(str1, str2) {
    // Lengths of the strings
    const len1 = str1.length;
    const len2 = str2.length;
    // Create a 2D array (dp table) to store lengths of common suffixes
    // Initialized with zeros.
    const dp = Array(len1 + 1).fill(0).map(() => Array(len2 + 1).fill(0));
    let maxLength = 0;
    let endIndex = 0;

    // Fill the dp table in a bottom-up fashion
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            // If characters match, extend the common substring length		
            if (str1[i - 1] === str2[j - 1]) {
	//	console.log(str1[i - 1]);                                                      //               console.log(str2[j - 1]);
                dp[i][j] = dp[i - 1][j - 1] + 1;
                console.log(dp[i][j]);
                // Update the maximum length and the ending index if a longer substring is found
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endIndex = i; // Store the ending index in str1
                }
            } else {
                // If characters do not match, the common substring length is zero at this point
                dp[i][j] = 0;
            }
        }
    }

    // If no common substring is found
    if (maxLength === 0) {
        return "";
    }

    // Extract the longest common substring using the recorded length and end index
    const startIndex = endIndex - maxLength;
   //  console.log(startIndex,endIndex);
    return str1.substring(startIndex, endIndex);
}

// Driver code examples:
const X = "abcjklp";
const Y = "acjkp";
console.log(`The longest common substring between "${X}" and "${Y}" is: "${longestCommonSubstring(X, Y)}"`); // Output: "cjk"

const X2 = "qdef";
const Y2 = "defq";
console.log(`The longest common substring between "${X2}" and "${Y2}" is: "${longestCommonSubstring(X2, Y2)}"`); // Output: "def"

const X3 = "thisisatest";
const Y3 = "testing123testing";
console.log(`The longest common substring between "${X3}" and "${Y3}" is: "${longestCommonSubstring(X3, Y3)}"`);// Output: "test"
