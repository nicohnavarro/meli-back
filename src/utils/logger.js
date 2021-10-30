"use strict";
exports.__esModule = true;
var pino_1 = require("pino");
var dayjs_1 = require("dayjs");
var log = (0, pino_1["default"])({
    base: {
        pid: false
    },
    timestamp: function () { return ",\"time\":\"" + (0, dayjs_1["default"])().format() + "\""; }
});
exports["default"] = log;
