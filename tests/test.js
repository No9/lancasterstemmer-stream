var test = require('tape');
var through = require('through')
var stemmer = require('../')();

test('Simple validation', function(t){
   stemmer.write("waking up in the waks");
//   stemmer.pipe(process.stdout)	
   stemmer.pipe(through(function(data) { 
   		
		t.plan(2);
		var parsed = JSON.parse(data.toString())
		console.log(parsed)
   		t.equal('wak', parsed[0]);
   		t.equal(2, parsed.length);
	}))

})
