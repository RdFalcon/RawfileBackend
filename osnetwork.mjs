import os from "node:os";
let interface1=os.networkInterfaces();
console.log(interface1.Ethernet[3].address,interface1.Ethernet[3].mac);

