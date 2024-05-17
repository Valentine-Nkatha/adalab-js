const food="The";
const food1="quick fox jumped over the lazy dog";
const result=`${food} eat ${food1}`;
console.log(result)
 let word = "extravaganza";
 let extracted_word = word[8]+word[9]+ word[10]+word[11];
 console.log(extracted_word);
const githeri="The quick fox jumped over the lazy dog";
const githeri2="The"
const results=`${githeri}${githeri2}`;
console.log(result)

const story="The quick brown fox jumps over the lazy dog";
const countThe=(story.match(/\bThe\b/ig) || []).length;
console.log(countThe)

const string1="The quick brown fox jumps over the lazy dog";
const countThe2=(story.match(/\bbrown\b/ig)|| []).length;
console.log(countThe2)
