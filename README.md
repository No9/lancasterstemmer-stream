# lancasterstemmer-stream

A stream for taking strings and creating an array of stem words. 
Also removes common pithy words such as 'the'

[![build status](https://secure.travis-ci.org/No9/lancasterstemmer-stream.png)](http://travis-ci.org/No9/lancasterstemmer-stream)

## Usage

```
   var stemmer = require('lancasterstemmer-stream')();
   stemmer.write("waking up in the waks");
   stemmer.pipe(process.stdout);
```

*Outputs*

```
["wak", "wak"] 
```

## License

(The MIT License)

Copyright (c) 2013 Anthony Whalley

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.




