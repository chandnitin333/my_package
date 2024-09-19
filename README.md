![image](https://github.com/user-attachments/assets/77a2e9f1-b2e2-4432-a69c-b0626011d7af)## how much exprience in node js 


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
## Tell me list of ES6 feature ?

## what is TYPESCRIPT and benifit of typescript 

## why use typescript in node project 

## What is the difference between TypeScript and a statically typed language?
    TypeScript is optionally statically typed, which means you can tell the compiler to ignore a variable's type. We can assign any type of value to the variable using any data type. During compilation, TypeScript will not perform any error checking.


## How to secure youR NODE  application in node js

    
    To secure your API application in Node.js, follow these best practices:
    
    Use HTTPS: Ensure all communications between the client and server are encrypted by using HTTPS.
    Implement Authentication and Authorization: Use robust authentication mechanisms such as OAuth, JWT (JSON Web Tokens), or API keys, and implement role-based access control (RBAC) to manage permissions.
    Input Validation and Sanitization: Validate and sanitize user input to prevent injection attacks such as SQL injection, XSS (Cross-Site Scripting), and command injection.
    Use Rate Limiting: Implement rate limiting to prevent abuse or denial of service (DoS) attacks by limiting the number of requests a user can make within a certain period.
    Enable CORS (Cross-Origin Resource Sharing): Configure CORS to restrict which domains can access your API.
    Use Helmet for Security Headers: Utilize the helmet middleware to set various HTTP headers that protect against common vulnerabilities like clickjacking and XSS.
    Protect Against Brute Force Attacks: Implement account lockouts, CAPTCHAs, or IP blocking to prevent brute-force attacks on authentication endpoints.
    Keep Dependencies Updated: Regularly update your Node.js modules and dependencies to patch known vulnerabilities.
    Avoid Exposing Sensitive Information: Ensure that sensitive data like API keys, tokens, and passwords are stored securely, never logged, and not exposed in error messages or stack traces.
    Use Environment Variables: Store sensitive configuration data such as database credentials and API keys in environment variables instead of hardcoding them into the application
## How do the extensions .ts and .tsx differ in TypeScript?

ts TypeScript                                    tsx TypeScript

It is used for pure TypeScript files                It is used for JSX files

This file is used when you have to create classes,  This file is used when you have to use JSX syntax and elements and create a React component.
functions, reducers, etc., 
that don't require the use of JSX syntax and elements.

## Explain Decorators in TypeScript.

    Decorators in TypeScript are a special kind of declarative syntax used to add metadata or modify the behavior of classes, methods, properties, or parameters. They provide a convenient way to apply reusable logic or behavior across multiple parts of your code without having to manually modify each target element. Decorators are built using higher-order functions, which receive the target element (such as a class or property) as an argument and return a modified version of it or perform specific actions on it.
    

const person = {
    name:"John",
    greet:function () {
        console.log("Name",this.name)
    },
    show:()=>{
        console.log("Name",this.name)
    }
    
}

person.greet();
person.show();



# MongoDB
What are indexes in MongoDB?

Addvantages of MongoDb


Differance between relation and Non relation DB 

## What is auto-scaling?
    Auto-scaling monitors your applications and automatically adjusts capacity to maintain a steady, predictable performance at the lowest possible cost. It makes scaling simple with recommendations that allow you to optimize performance, cost, or balance between them.
    
    Here’s another opportunity to mention an example from your past experience. If you successfully used auto-scaling to balance cost and performance, discuss that project after you provide the definition to highlight not just your knowledge but your ability to apply it effectively.

## how many type of load balancer in aws
    AWS provides four types of load balancers through Elastic Load Balancing (ELB):

    Application Load Balancer (ALB): Best suited for HTTP/HTTPS traffic at Layer 7 of the OSI model, offering advanced routing features like host-based and path-based routing.
    
    Network Load Balancer (NLB): Operates at Layer 4 for ultra-low-latency TCP/UDP traffic, capable of handling millions of requests per second.
    
    Gateway Load Balancer (GWLB): Designed for integrating and scaling third-party virtual appliances (like firewalls or intrusion detection systems). It operates at Layer 3 and is used for specialized traffic     handling.
    
    Classic Load Balancer (CLB): The original load balancer that supports both Layer 4 (TCP) and Layer 7 (HTTP/HTTPS), mostly used for legacy applications.
    
    Each type has unique use cases based on traffic type, performance needs, and routing complexity.

## What is the difference between a Security Group and a Network ACL in AWS?

    The main differences between Security Groups and Network ACLs in AWS are as follows:
    
    1. Stateful vs. Stateless:
    Security Groups: Stateful. This means if you allow incoming traffic, the response traffic is automatically allowed, regardless of any outbound rules.
    Network ACLs: Stateless. You must explicitly allow both incoming and outgoing traffic. If you allow incoming traffic, you must also allow the corresponding outgoing traffic.
    2. Scope of Application:
    Security Groups: Applied at the instance level. They are attached directly to EC2 instances or resources such as load balancers.
    Network ACLs: Applied at the subnet level. They control traffic entering and exiting entire subnets within a VPC.
    3. Default Behavior:
    Security Groups: By default, all inbound traffic is denied, and all outbound traffic is allowed.
    Network ACLs: By default, it allows all inbound and outbound traffic unless configured otherwise.
    4. Rules Evaluation:
    Security Groups: Evaluate rules allow-only. You can only specify rules to allow traffic; there are no "deny" rules.
    Network ACLs: Evaluate both allow and deny rules. You can explicitly allow or deny traffic based on rules.
    5. Number of Rules:
    Security Groups: Supports more rules per security group, but only allows up to 5 security groups per instance.
    Network ACLs: Has a limit on the number of rules (20 inbound and 20 outbound rules) per ACL but allows complex configurations with allow and deny options.
    6. Use Case:
    Security Groups: Used primarily for instance-level security, controlling access to EC2 instances.
    Network ACLs: Used for subnet-level security, often as an additional layer of security, especially for restricting access between different parts of a VPC.

## What are the key advantages of using AWS Lambda?
    AWS Lambda offers several key advantages, particularly for building serverless applications. Here are the main benefits:
    
    1. No Server Management
    AWS Lambda abstracts away infrastructure management. You don’t need to provision, manage, or scale servers; AWS handles the infrastructure automatically.
    2. Automatic Scaling
    Lambda automatically scales your application by running the code in response to triggers. The service scales horizontally as the number of incoming requests increases, handling thousands of concurrent executions seamlessly.
    3. Pay-as-You-Go Pricing
    You are charged only for the compute time used. Billing is based on the number of requests and the time it takes to execute the code (measured in milliseconds), making it highly cost-effective for applications with variable workloads.
    4. Event-Driven Execution
    Lambda integrates with many AWS services (such as S3, DynamoDB, Kinesis, SNS) and can be triggered by various events, making it ideal for event-driven architectures like real-time data processing, file uploads, or HTTP requests.
    5. Reduced Operational Overhead
    With no need to manage the underlying infrastructure, you can focus on writing and optimizing code rather than handling patching, scaling, and server maintenance.
    6. High Availability and Fault Tolerance
    Lambda automatically runs your function across multiple Availability Zones within a region to ensure fault tolerance and high availability without any extra configuration.
    7. Language and Runtime Flexibility
    Lambda supports multiple programming languages, including Node.js, Python, Java, Go, and Ruby. It also allows custom runtimes, giving developers flexibility to use other languages.
    8. Microservices and Modular Architecture
    Lambda is perfect for building microservices, where different functions handle different tasks, enabling modular development and easier scaling. You can decouple services and have different teams work independently.
    9. Tight Integration with AWS Services
    Lambda integrates well with a wide array of AWS services, including API Gateway, S3, DynamoDB, Kinesis, and CloudWatch, which simplifies building complex workflows and serverless architectures.
    10. Improved Security
    AWS manages the security and patching of the underlying infrastructure. You only need to secure your function and its access through IAM roles, significantly reducing the attack surface.
    11. Quick Development and Deployment
    Lambda supports rapid prototyping and development since you can deploy code in small, functional units. It allows quick iteration and testing without setting up infrastructure.


## SQS vs SNS differences?


    Amazon SQS (Simple Queue Service) and Amazon SNS (Simple Notification Service) serve different purposes in AWS's messaging ecosystem. Here are the key differences between them:
    
    1. Purpose
    SQS (Simple Queue Service):
    A message queuing service designed for decoupling components of a distributed application. It allows you to store messages until they are processed by consumers.
    SNS (Simple Notification Service):
    A pub/sub messaging service that enables you to send messages to multiple subscribers at once. It’s designed for broadcasting messages to a large number of subscribers (e.g., emails, SMS, or other services).
    2. Message Delivery
    SQS:
    Messages are delivered to a single consumer or a group of consumers.
    Messages can be processed at least once (in standard queues) or exactly once (in FIFO queues).
    SNS:
    Messages are published to all subscribers simultaneously.
    Each subscriber receives a copy of the message, enabling real-time notifications to multiple endpoints.
    3. Message Retention
    SQS:
    Messages can be retained in the queue for up to 14 days, allowing consumers to process them at their own pace.
    SNS:
    SNS does not retain messages. Once a message is published, it is delivered to subscribers immediately, and there is no message storage.
    4. Use Cases
    SQS:
    
    Suitable for scenarios where you need to decouple services, such as processing tasks in a background job or distributing workloads across multiple consumers.
    SNS:
    
    Ideal for sending alerts, notifications, or updates to multiple subscribers, such as fan-out messaging patterns, where you want to notify multiple systems or users about an event.
    5. Communication Pattern
    SQS:
    Follows a point-to-point communication pattern. Messages are consumed by one or more consumers but not broadcasted.
    SNS:
    Follows a publish/subscribe pattern. Publishers send messages to topics, and subscribers receive messages from those topics.
    6. Integration with Other Services
    SQS:
    Can be triggered by AWS Lambda or used as a destination for messages from other services.
    SNS:
    Can trigger AWS Lambda functions, SQS queues, HTTP/S endpoints, email, and SMS.

## what is DLQ

     A dead-letter queue (DLQ) is a specialized queue in messaging systems, including Amazon SQS, that is used to handle messages that cannot be processed successfully. When a message fails to be processed a predefined number of times, it is moved to the dead-letter queue for further inspection and troubleshooting. Here are some key points about dead-letter queues:
    
    1. Purpose
    DLQs help isolate problematic messages that cannot be processed, preventing them from blocking the processing of other messages in the main queue.
    2. Common Use Cases
    Error Handling: If a message repeatedly fails processing (e.g., due to application errors or data issues), it can be sent to the DLQ for later analysis.
    Message Inspection: Allows developers or operators to examine failed messages to understand why they were not processed and to take corrective actions.
    Retries and Recovery: You can implement custom logic to retry processing the messages from the DLQ after addressing the underlying issues.
    3. Configuration
    In Amazon SQS, you can configure DLQs for standard and FIFO queues by specifying a DLQ as a target for messages that exceed the maximum receive count (the number of times a message is received without being deleted).
    4. Monitoring and Alerts
    DLQs can be monitored, and alerts can be set up based on the number of messages in the DLQ, allowing teams to respond promptly to processing issues.
    5. Benefits
    Improved Reliability: By separating failed messages, the overall system remains functional and responsive.
    Enhanced Debugging: Facilitates debugging and problem resolution by providing a dedicated space for failed messages.
    Flexibility: Allows for different handling strategies for failed messages, such as logging, manual review, or reprocessing after fixes.
    Overall, dead-letter queues are a crucial component in designing robust, fault-tolerant messaging systems, ensuring that failures are handled gracefully without impacting overall system performance.


# MONGO DB

## What types of indexes does MongoDB support?
##How do you create a compound index, and when would you use one?
##What are the benefits and drawbacks of using indexes in MongoDB?
##How can you analyze query performance in MongoDB?
##What is the role of the explain() method?

## How does MongoDB handle transactions?


    MongoDB provides support for transactions to allow multi-document ACID (Atomicity, Consistency, Isolation, Durability) operations, enabling developers to execute a series of operations across multiple documents and collections with the assurance that they either all succeed or none do. Here’s how MongoDB handles transactions:
    
    1. Multi-Document Transactions
    MongoDB supports multi-document transactions in replica sets and sharded clusters starting from version 4.0. This allows you to execute multiple operations as a single transaction.
    
    2. ACID Properties
    Atomicity: Transactions ensure that all operations within the transaction are treated as a single unit. If any operation fails, the entire transaction is aborted, and no changes are applied.
    Consistency: Transactions maintain data consistency by ensuring that the database transitions from one valid state to another valid state. All documents involved in the transaction adhere to defined data integrity rules.
    Isolation: Transactions provide isolation, meaning that the operations in a transaction are not visible to other transactions until the transaction is committed.
    Durability: Once a transaction is committed, the changes are permanent, even in the event of a system failure.
    3. Starting and Managing Transactions
    To work with transactions in MongoDB, you typically follow these steps:
    
    Start a Transaction: Use session.startTransaction() to begin a transaction.
    Perform Operations: Execute multiple read and write operations within the transaction.
    Commit the Transaction: Use session.commitTransaction() to apply all changes if all operations succeed.
    Abort the Transaction: Use session.abortTransaction() to rollback all changes if any operation fails or if you need to cancel the transaction.
    4. Using Sessions
    Transactions are scoped within a session. You need to create a session before starting a transaction:
    
    javascript
    Copy code
    const session = client.startSession();
    
    session.startTransaction();
    
    try {
        // Perform operations using the session
        await collection1.insertOne(doc1, { session });
        await collection2.updateOne(query, update, { session });
    
        // Commit the transaction
        await session.commitTransaction();
    } catch (error) {
        // Abort the transaction on error
        await session.abortTransaction();
    } finally {
        session.endSession();
    }
    5. Error Handling
    When dealing with transactions, it's important to handle potential errors. If a transaction fails (due to network issues, write conflicts, or other reasons), you may need to retry the transaction or handle the error gracefully.
    
    6. Performance Considerations
    Performance Overhead: Transactions can introduce some performance overhead compared to single-document operations due to additional coordination required.
    Write Conflicts: Transactions may encounter write conflicts if multiple transactions try to modify the same document simultaneously. MongoDB handles this through retryable writes, which allows you to retry transactions automatically in case of conflicts.
    7. Sharded Clusters
    In sharded clusters, MongoDB transactions can span multiple shards, allowing for coordinated operations across different shards. However, this can introduce additional latency due to the need for distributed coordination.
    
    8. Use Cases for Transactions
    Financial Systems: Where accuracy and data integrity are critical.
    E-commerce Applications: Managing inventory and orders where multiple documents need to be updated together.
    Data Migration: Ensuring that data remains consistent during complex data migrations.
    
## Describe a situation where you optimized the performance of a MongoDB query. What steps did you take?




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



## Find two nuber sum of target number


let arr = [1, 2, 9, 3, 5, 17];
let target = 26; //like  [2,5]  8=  [ 3, 4 ]

let result = findTwoNumbers(arr, target);

if (result) {
  console.log("Output is", result);
} else {
  console.log("No such pair found.");
}
function findTwoNumbers(arr, target) {
  const numIndices = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (numIndices.has(complement)) {
      return [numIndices.get(complement), i];
    }

    numIndices.set(arr[i], i);
  }

  return null; // If no such pair is found
}




console.log(1)


setTimeout(() => console.log(2), 0)

Promise.resolve().then(() => console.log(3))

Promise.resolve().then(() => setTimeout(() => console.log(4), 0))

Promise.resolve().then(() => console.log(5))

setTimeout(() => console.log(6), 0)

console.log(7)



op//
1
7
3
5
2
6
4




