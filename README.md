# SplitQueryString.js

ex. URI is http://example.com?hoge=aaa&fuge=bbb&piyo=cccc

```
SplitQueryString.toObj() // => {hoge: 'aaa', fuge: 'bbb', piyo: 'ccc'}
SplitQueryString.toArray() // => ['aaa', 'bbb', 'ccc']
SplitQueryString.toJson() // => {'hoge': 'aaa', 'fuge': 'bbb', 'piyo': 'ccc'}
```
