function lengthOfLongestSubstring(s) {
    const charSet = new Set();
  //  console.log(charSet);
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    // If the character is already in the set, remove characters from the left
    // until the duplicate is gone from the window.
      while (charSet.has(s[right])) {
	  console.log("delete");
	  console.log(charSet);
      charSet.delete(s[left]);
	left++;
	//  console.log("Deleted" + charSet);
    }
    // Add the new character to the set and update max length
    charSet.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
      console.log("add");
      console.log(charSet);
  }

  return maxLength;
}

const testString = "abcabcbb";
console.log(`Length of longest substring for "${testString}":`, lengthOfLongestSubstring(testString)); 
// Output: Length of longest substring for "abcabcbb": 3 (for "abc")
