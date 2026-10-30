
import { isMainThread,threadId } from "node:worker_threads";
console.log("worker thread started i labour working ");
console.log(" Is this the main thread?",isMainThread);
console.log("Worker thread ID",threadId);