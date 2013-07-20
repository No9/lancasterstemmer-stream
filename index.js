/**
* @module lancasterstemmer-stream
*/

/** A module that takes a stream of string data and converts it to an array of stemmed strings.
* @return {Transform} - A readable and writable stream that emits arrays of stemmed strings
*/

module.exports = function () {
   var natural = require('natural');
   var Transform = require('stream').Transform;

   var stream = new Transform({decodeStrings:false});
   
   stream._transform = function (chunk, enc, done) {
	done(null, JSON.stringify(natural.LancasterStemmer.tokenizeAndStem(chunk.toString())));
	stream.emit("data", JSON.stringify(natural.LancasterStemmer.tokenizeAndStem(chunk.toString())))
   };
  return stream;
}
