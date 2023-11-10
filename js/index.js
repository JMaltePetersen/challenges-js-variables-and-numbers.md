console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

const postTitle = "Post";
const socialFeedEntry = "text";
let viewCounter = 0;
const userName = "name";
let isReported = false;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

console.log("postTitle " + postTitle);
console.log("socialFeedEntry " + socialFeedEntry);
console.log("viewCounter " + viewCounter);
console.log("userName " + userName);
console.log("isReported " + isReported);

viewCounter++;
console.log("likes increased " + viewCounter);
// --^-- write your code here --^--
