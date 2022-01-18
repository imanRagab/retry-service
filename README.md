##  Unreliable service

We have a third-party web API that sometimes goes down and doesn't return the data we're requesting.
Our function retries the asynchronous function call until it succeeds.

#### The function receives the following parameters:

- async function that should be recalled in case of error
- the limit for the function call attempts
- generator that generates next delay value in case of error on function
call
#### We also have 2 generators that can be used with this function:

-  First one - implements arithmetic progression
-  Second - implements geometric progression

#### Setup Steps:
#####  Install dependencies
```
$ npm i
```
#####  Run tests
```
$ npm test
```