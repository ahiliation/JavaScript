var sentence = "the quick brown fox jumped over the lazy dog";
console.log("sentence var type is:",typeof sentence,"type");
var words = sentence.split(" ");
for (var i = 0; i < words.length; ++i) {
   console.log("word " + i + ": " + words[i]);
}
