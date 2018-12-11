const winston = require("winston");
const moment = require("moment");
const winstonDailyRotateFile = require("winston-daily-rotate-file");
const stringify = require("json-stringify-safe");

//로그 출력 현태 조정하는 객체
const { format } = winston;
const { combine, printf, timestamp, label, splat } = format;

const fillBlank = (str, length) => {
  return " ".repeat(length - str.length) + str;
};

//로그 찍는 형식 설정
const myFormat = printf(log => {
  const dateForm = moment(log.timestamp).format("HH:mm:ss");
  return `[${dateForm}]${fillBlank(log.level, 7)}: ${stringify(log.message)} ${
    log.label
  }`;
});

const fileConfig = {
  filename: "[%DATE%]_log.log",
  datePattern: "YYYY-MM-DD",
  maxSize: "20m"
};

//로그 객체 생성
const logger = winston.createLogger({
  //로그를 보여줄 단계 설정
  //error, warn, info, verbose, debug, silly
  level: "debug",
  exitOnError: false,
  //로그를 기록할 매체 설정
  transports: [
    
    //콘솔에다 찍겠다
    new winston.transports.Console(),
    new winstonDailyRotateFile({
      ...fileConfig,
      level: "info",
      dirname: "./server/logs/info",
    }),
    new winstonDailyRotateFile({
      ...fileConfig,
      level: "error",
      dirname: "./server/logs/error",
    }),
    new winstonDailyRotateFile({
      ...fileConfig,
      level: "debug",
      dirname: "./server/logs/debug",
    }),
  ],
  format: combine(splat(), label({ label: "" }), timestamp(), myFormat)
});

module.exports = logger