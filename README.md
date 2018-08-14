# SplitQueryStringJS

## Example
URI is http://example.com?hoge=aaa&fuge=bbb&piyo=cccc

```
SplitQueryString(location.search).toObj() // => {hoge: 'aaa', fuge: 'bbb', piyo: 'ccc'}
SplitQueryString(location.search).toArray() // => ['aaa', 'bbb', 'ccc']
SplitQueryString(location.search).toJson() // => {'hoge': 'aaa', 'fuge': 'bbb', 'piyo': 'ccc'}
```
