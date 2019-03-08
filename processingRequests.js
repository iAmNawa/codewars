// Simple Fun #212: Processing Requests

/*
Task
There are n servers numbered from 1 to n. The ith server can process requests with numbers from 1 to 2 * i inclusive. However, each server can process only one request at a time.

Given the number of servers n and the requests that should be processed, return the maximum number of requests that can be processed simultaneously, assuming that processing each request takes the same amount of time.

Input/Output
[input] integer servers

The number of servers.

0 ≤ servers ≤ 1000

[input] integer array requests

Array of distinct positive integers, where each integer represents a request.

1 ≤ requests.length ≤ 1005

[output] an integer

The maximum number of requests that can be processed simultaneously.

Example
For servers = 2, requests = [1,5,6], the output should be 1.

Each server can process request 1, but neither can process requests 5 or 6, so only request with number 1 can be processed.

For servers = 3, requests = [1,2,3,4,5,6,7,8,9,10], the output should be 3.

The first server can process requests from 1 to 2, the second one can process requests from 1 to 4, and the last one can process requests from 1 to 6, so they can easily start with processing 3 requests at a time.

For servers = 3, requests = [10,5,6], the output should be 1.

Only 3th server can process request 5 or request 6.
*/

function processingRequests(servers, requests) {
  requests.sort(function(a,b){return a - b});
  console.log(requests.sort(function(a,b){return a - b}))
  if (!servers) {
    return 0;
  }
  let number = 0;
  let j = 0;
  for (var i = 1; i < servers+1; i++) {
    if (i*2 >= requests[j]) {
      number++;
      j++;
    }
  }
  return number;
}
