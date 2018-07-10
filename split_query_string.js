var SplitQueryString = (function(){
  var queryString = location.search,
      resultsObj,
      resultsArray;
  
  function isEmpty　() {
    return queryString.length <= 0;
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
      var countor, queries, i, query, key, val, results = {};
      
      if　(isEmpty()) return null;
      if　(resultsObj) return resultsObj;
      
      queries = queryString.slice(1).split('&');
      countor = queries.length;
      for(i = 0; i < countor; i++) {
        query = queries[i].split('=');
        key = query[0];
        val = query[1];
        results[key] = val;
      }
      
      return resultsObj = results;
    },
    toArray: function() {
      var countor, queries, i, query, results = [];
      
      if(isEmpty()) return null;
      if(resultsArray) return resultsArray;
      
      queries = queryString.slice(1).split('&');
      countor = queries.length;
      for(i = 0; i < countor; i++) {
        query = queries[i].split('=');
        results.push(query[1]);
      }
      
      return resultsArray = results;
    }
  }
}());