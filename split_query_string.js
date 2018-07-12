var SplitQueryString = (function(queryString){
  var resultsObj,
      resultsArray;
  
  function isEmpty　() {
    return queryString.length <= 0;
  }

  function typeStrOf(val) {
    return Object.prototype.toString.call(val)
  }

  function insertRsults (results) {
    var countor, queries, i, query, key, val,;
    if　(isEmpty()) return null;
      
    queries = queryString.slice(1).split('&');
    countor = queries.length;
    switch(typeStrOf(results)) {
      case '[object Array]':
        for(i = 0; i < countor; i++) {
          query = queries[i].split('=');
          results.push(query[1]);
        }
        break;
      case '[object Object]':
        for(i = 0; i < countor; i++) {
          query = queries[i].split('=');
          key = query[0];
          val = query[1];
          results[key] = val;
        }
        break;
      default:
        results = null;
    }

    return results
  }

  return {
    num: function　() {
      if　(isEmpty()) return 0;
      return queryString.slice(1).split('&').length;
    },
    toJson: function　() {
      if　(isEmpty()) return null;
      return JSON.stringify(this.toObj());
    },
    toObj: function　() {
      if　(resultsObj) return resultsObj;
      resultsObj = insertRsults({});
      
      return resultsObj = results;
    },
    toArray: function() { 
      if(resultsArray) return resultsArray;
      resultsArray = insertRsults([]);

      return resultsArray = results;
    }
  }
}());

console.dir(SplitQueryString(location.search).toObj);
console.dir(SplitQueryString(location.search).toArray);
console.dir(SplitQueryString(location.search).toJson);