"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const server = _1.app.listen(3333, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
//# sourceMappingURL=server.js.map