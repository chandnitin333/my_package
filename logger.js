const { createLogger, format, transports } = require("winston");
const { v4: uuidv4 } = require("uuid");

const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(({ timestamp, level, message, correlationId }) => {
      return `${timestamp} [${level}] ${
        correlationId ? `[Correlation ID: ${correlationId}]` : ""
      } ${message}`;
    })
  ),
  transports: [new transports.Console()],
});

const correlationIdMiddleware = (req, res, next) => {
  const correlationId = req.headers["x-correlation-id"] || uuidv4();
  req.correlationId = correlationId;
  res.setHeader("x-correlation-id", correlationId);
  next();
};

module.exports = { logger, correlationIdMiddleware };
