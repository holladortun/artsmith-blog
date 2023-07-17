const errorHandler = (error, req, res) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case 400:
      res.status(400).json({
        title: "Bad request: Validation Failed",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case 401:
      res.status(401).json({
        title: "Unauthorized",
        message: "You are not authorized to access this resource.",
        stackTrace: error.stack,
      });
      break;
    case 403:
      res.status(403).json({
        title: "Forbidden",
        message: "You don't have permission to access this resource.",
        stackTrace: error.stack,
      });
      break;
    case 404:
      res.status(404).json({
        title: "Resource not found",
        message: "The requested resource was not found.",
        stackTrace: error.stack,
      });
      break;
    default:
      res.status(statusCode).json({
        message: error.message,
        stackTrace: error.stack,
      });
      break;
  }
};

module.exports = errorHandler;
