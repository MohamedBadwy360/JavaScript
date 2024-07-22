/*
    Console Methods: 
        1. console.log() => To print the output in the console.
        2. console.error() => To print the error in the console.
        3. console.table() => To print the data in the table format.

    Styling Console:
        - %c => To style the output in the console.

    Web API:
        - Web API is a collection of web platform based APIs that enable the development of web applications.
        - Web API is not a part of JavaScript, it's a part of the browser.
        - Web API is a collection of APIs that are provided by the browser.
        - Web API is used to interact with the browser.
        - Web API is used to interact with the DOM.
        - Web API is used to interact with the server.
        - Web API is used to interact with the database.
        - Web API is used to interact with the storage.
        - Web API is used to interact with the file system.
        - Web API is used to interact with the cache.
        - Web API is used to interact with the cookies.
        - ...etc.
*/

console.log("Hello World");
console.error("Error");
console.table(["Mohamed", "Elsaid", "Badwy"]);

// Styling Console Output
console.log("%cHello World", "color: green; font-size: 20px; font-weight: bold;");
console.log("%cHello %cWorld", "color: green; font-size: 20px; font-weight: bold;", "color: red; font-size: 20px; font-weight: bold;");