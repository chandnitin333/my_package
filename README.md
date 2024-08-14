## how much exprience in node js 


## what is differance between async await and promises
## what are the generator functions in javascript
##  what are the prototype chaning 
## Remove dublicate value in array

## what are the  main concept of async and await.

## What is a higher order function
A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.
There are several different types of higher order functions like map and reduce. We will discuss these later in this tutorial. But before that let's first dive deep into what higher order functions are.

// Callback function, passed as a parameter in the higher order function
function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

## what is the difference between  filter and map &  reduce function in javascript 



## What is the Temporal Dead Zone
The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone.
Let's see this behavior with an example,
function somemethod() {
  console.log(counter1); // undefined
  console.log(counter2); // ReferenceError
  var counter1 = 1;
  let counter2 = 2;
}















## What are closures ?

A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains
* Own scope where variables defined between its curly brackets
* Outer function’s variables
* Global variables
Let's take an example of closure concept,
function Welcome(name) {
  var greetingInfo = function (message) {
    console.log(message + " " + name);
  };
  return greetingInfo;
}
var myFunction = Welcome("John");
myFunction("Welcome "); //Output: Welcome John
myFunction("Hello Mr."); //output: Hello Mr.John




## What is a promise
 A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending. The syntax of Promise creation looks like below, const promise = new Promise(function (resolve, reject) {
1.   // promise description
2. });   The usage of a promise would be as below, 
const promise = new Promise(
3.   (resolve) => {
4.     setTimeout(() => {
5.       resolve("I'm a Promise!");
6.     }, 5000);
7.   },
8.   (reject) => {}
9. );

1. promise.then((value) => console.log(value));   The action flow of a promise will be as below,



## What is promise.all  & promise chaning 
Promise.all is a promise that takes an array of promises as an input (an iterable), and it gets resolved when all the promises get resolved or any one of them gets rejected. For example, the syntax of promise.all method is below,
Promise.all([Promise1, Promise2, Promise3]) .then(result) => {   console.log(result) }) .catch(error => console.log(`Error in promises ${error}`))

## What is the purpose of the race method in promise

Promise.race() method will return the promise instance which is firstly resolved or rejected. Let's take an example of race() method where promise2 is resolved first
var promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then(function (value) {
  console.log(value); // "two" // Both promises will resolve, but promise2 is faster
});



## What is the difference between Call, Apply and Bind

## What is Hoisting
Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution. 
Remember that JavaScript only hoists declarations, not initialisation. Let's take a simple example of variable hoisting,


#Node Js

## What is authorization and authentication 

## what is middleware   use any  milddlware function in  your  application 

## for secure api How to secure the Api's

## What is JWT token 

## What is rest API

## Create Server run on 3000 port use express

## Difference between package.json and package-lock.json files

## any database like mysql and mongoDB  how to connect database.

## difference between var let and const

## Differece between GET and POST , PUT and PATCH

## do you know  http status code 
## When to use  200, 202 204 vs 502?

## What are differance between call, bind and appy ?

## what is spread operator in javascript and differance between spread and rest operator

## Differace between deep copy and shallo capy in java script.

# MongoDB
What are indexes in MongoDB?

Addvantages of MongoDb


Differance between relation and Non relation DB 




## What do you mean by Asynchronous API? ☆☆
Answer: All APIs of Node.js library are aynchronous that is non-blocking. It essentially means a Node.js based server never waits for a API to return data. 
Server moves to next API after calling it and a notification mechanism of Events of Node.js helps server to get response from the previous API call.



## Is Node a single threaded application? 
Answer: Yes! Node uses a single threaded model with event looping.

## What is Event Emmitter? ☆☆☆
Answer: All objects that emit events are members of EventEmitter class. These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object.

When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously.

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');

## What are streams? ☆☆☆
Answer: Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four types of streams.

Readable - Stream which is used for read operation.
Writable - Stream which is used for write operation.
Duplex - Stream which can be used for both read and write operation.
Transform - A type of duplex stream where the output is computed based on input.

## How to avoid callback hell in Node.js

# What is event loop 

## How Does the Event Loop Work?
Initialization: When Node.js starts, it initializes the event loop to watch for I/O operations and other asynchronous tasks.

Queueing: Any task or I/O operation is added to a queue, which can be either the microtask queue or the macrotask/Callback queue.

Polling: The event loop iteratively checks for tasks in the queue while also waiting for I/O and timers.

Execution Phases: When the event loop detects tasks in the queue, it executes them in specific phases, ensuring order efficiency.

Task Scheduler Zones: microtask and Callback Queue
Microtask Queue: This is a highly prioritized queue, usually acting over tasks in the Callback Queue. Useful for tasks that require immediate attention.
Callback Queue (Macrotask Queue): Also known as the 'Task Queue,' it manages events and I/O operations.

## Event Loop Phases
**Timers**: Manages timer events for scheduled tasks.
**Pending callbacks:** Handles system events such as I/O, which are typically queued by the kernel.
**Idle / prepare:** Ensures internal actions are managed before I/O events handling.
**Poll**: Retrieves New I/O events.
**Check**: Executes 'setImmediate' functions.
**Close**: Handles close events, such as 'socket.close'.
**Task Scheduling**: microtasks and macrotasks
**Microtasks** (process.nextTick and Promises): Executed after each task.
**Macrotasks**: Executed after the poll phase when the event loop is not behind any file I/O or scheduled time. This includes timers, setImmediate, and I/O events.
Code Example: Timers and Task Queues
Here is the JavaScript code:

Node.js

// Code Example
console.log('Start');

setTimeout(() => {  
  console.log('Set Timeout - 1');
  
  Promise.resolve().then(() => {
    console.log('Promise - 1');
  }).then(() => {
    console.log('Promise - 2');
  });

}, 0);

setImmediate(() => {
  console.log('Set Immediate');
});

process.nextTick(() => {
  console.log('Next Tick');
  // It's like an infinite loop point for microtask queue
  process.nextTick(() => console.log('Next Tick - nested'));
});

fs.readFile(file, 'utf-8', (err, data) => {
  if (err) throw err;
  console.log('File Read');
});

console.log('End');

## What is the difference between process.nextTick() and setImmediate() ? ☆☆☆☆☆
**Answer:** The difference between process.nextTick() and setImmediate() 
is that process.nextTick() defers the execution of an action till the next pass around 
the event loop or it simply calls the callback function  once the ongoing execution of the event loop is finished whereas 
setImmediate() executes a callback on the next cycle of the event loop and it gives back to the event loop for executing any I/O operations.


## How does the cluster module work? What’s the difference between it and a load balancer? ☆☆☆☆
Answer: The cluster module performs fork from your server (at that moment it is already an OS process), thus creating several slave processes. The cluster module supports two methods of distributing incoming connections.

The first one (and the default one on all platforms except Windows), is the round-robin approach, where the master process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion, with some built-in smarts to avoid overloading a worker process.

The second approach is where the master process creates the listen socket and sends it to interested workers. The workers then accept incoming connections directly.

The difference between a cluster module and a load balancer is that instead of distributing load between processes, the balancer distributes requests.

# ouput 

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
-----------------------------
outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar

-------------------------------

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  }
  setTimeout(log, 100);
}

## how resolve this problem with out using let keyword 


====================
setTimeout(() => console.log(2), 0)

Promise.resolve().then(() => console.log(3))

Promise.resolve().then(() => setTimeout(() => console.log(4), 0))

Promise.resolve().then(() => console.log(5))

setTimeout(() => console.log(6), 0)

console.log(7)

---------------------
7
3
5
2
6
4
--------------
=========================================
## write program for falt array 
### input let intputArr = [1,2,[3,5],[3,8,9,[2,5]]]
### output [1,2,3,5,3,8,9,2,5]
//Falt Array Program
  let outArr = [];
function FaltArr(arr){
    for(let i =0 ; i < arr.length ;  i++){
        if(Array.isArray(arr[i])){
            FaltArr(arr[i]);
        }else{
            outArr.push(arr[i])
        }

    }
}

let intputArr = [1,2,[3,5],[3,8,9,[2,5]]]
FaltArr(intputArr);
console.log(outArr)

===========================================
### OUTPUT like this  a2b1c3d4e2
### let input = ['a','a','b','c','c','c','d','d','d','d','e','e']


let occrObj = {}

for(let chr of input){
    occrObj[chr] = (occrObj[chr] ) ?  occrObj[chr] + 1 : 1
    
}
let outStr = ''
for(let key  in occrObj){
    outStr += key +occrObj[key]  
}

 console.log(outStr)




# AWS 


## What is AWS 
## Can you explain the execution process of a Lambda function?
A15: The execution process of a Lambda function involves the following steps:
* Trigger: First, an event source triggers the Lambda function. This could be a manual invocation, an AWS service like S3 or DynamoDB, or an API call via AWS API Gateway.
* Load and Run: AWS Lambda service will then load your function and execute it using the input event data and configuration information you provided, such as memory allocation and timeout settings.
* Response: The function does its processing and returns a response, which can be handled by the calling service or application.
* Scaling: If multiple events are triggering the function simultaneously, AWS Lambda scales automatically to run the function for each trigger.
* Monitoring: Throughout this process, AWS CloudWatch monitors the function execution and logs performance metrics.


## Q16: How can performance in AWS Lambda be improved?
A16: Improving performance in AWS Lambda can be achieved through a number of strategies:
* Increase Memory Allocation: Since CPU and network capacity are proportional to the memory allocated to the function, increasing memory can lead to increased performance for compute-intensive functions.
* Minimize the Deployment Package: Reducing the size of your deployment package can decrease the time it takes for your deployment package to be downloaded and unpacked ahead of invocation.
* Use Connection Pooling: For functions that communicate with databases, use connection pooling to reduce the overhead of establishing a connection.
* Optimize Your Code: Use efficient algorithms and data structures, and minimize the use of blocking calls.
* Avoid Cold Starts: Use provisioned concurrency to keep a set number of function instances initialized and ready to respond to invocations.



## Q17: In how many ways can AWS Lambda be used?
A17: AWS Lambda is highly versatile and can be used in many ways. Here are some common use cases:
* Real-Time File Processing: AWS Lambda can automatically process new files added to Amazon S3 buckets.
* Data Transformation: Lambda can transform data on the fly and load it into the destination of choice, making it ideal for Extract, Transform, Load (ETL) operations.
* Real-Time Stream Processing: Lambda can process data in real-time as it comes into Kinesis Streams, e.g., for application activity tracking or transaction order processing.
* Backends: AWS Lambda can be used to develop serverless backends for web applications or mobile applications.
* Automation and Administration: Lambda can also automate certain AWS operations, such as taking backups, monitoring, and responding to certain events in the AWS environment.


## Q18: What are the restrictions applied to the AWS Lambda function code?
A18: There are several restrictions that apply to the code running in AWS Lambda:
* Languages: AWS Lambda function code must be written in a supported language. As of 2021, these include Python, Java, Go, PowerShell, Node.js, C#, and Ruby.
* Execution Time: The maximum allowed execution time for a Lambda function is 15 minutes.
* Temporary Disk Capacity: Lambda functions only have access to 512 MB of non-persistent disk capacity in the /tmp directory.
* Environment Variables: The total size of all environment variables cannot exceed 4 KB.
* File Descriptors: AWS Lambda functions are limited to 1024 file descriptors.
* Processes/Threads: Lambda functions are also limited to 1024 processes and threads combined.
* Deployment Package Size: The size of the deployment package has limitations. As of 2021, the limits were 50 MB for zipped packages and 250 MB for unzipped ones.
* Concurrency: There is also a limit to the number of simultaneous function executions, although this is a soft limit that can be increased upon request.


## What is load balancer & type of load balancer

Application Load Balancers are used to route HTTP/HTTPS (or Layer 7) traffic. 
Network Load Balancers and 
Classic Load Balancers are used to route TCP (or Layer 4) traffic












