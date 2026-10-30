import {Worker} from "node:worker_threads";
console.log("main thread worker");
const worker=new Worker(new URL("./worker.js",import.meta.url));
console.log("Main thread is continue to work ");