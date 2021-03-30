"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDate = exports.formatDate = void 0;
const formatDate = (date) => {
    const [day, month, year] = date.split("/");
    return `${year}-${month}-${day}`;
};
exports.formatDate = formatDate;
const checkDate = (date) => {
    const useBar = date.includes("/");
    if (useBar) {
        return true;
    }
    else {
        return false;
    }
};
exports.checkDate = checkDate;
//# sourceMappingURL=verifiers.js.map