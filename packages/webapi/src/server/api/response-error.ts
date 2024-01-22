interface InvalidReason {
  field: string; // Which field goes wrong.
  code: 'missing' | 'missing_field' | 'invalid' | 'already_exists';
}

export class ResponseError extends Error{
  statusCode: number = 404;
  message: string;
  private invalid: InvalidReason;

  constructor(code: number, msg: string) {
    super();
    this.statusCode = code;
    this.message = msg;
  }

  toJSON() {
    return {
      message: this.message,
    };
  }

  static badRequest(msg: string): ResponseError {
    return new ResponseError(400, msg);
  }

  static unauthorized(msg: string): ResponseError {
    return new ResponseError(401, msg);
  }

  // 404 Not Found
  static notFound(msg: string): ResponseError {
    return new ResponseError(404, msg);
  }

  // 403 Fobidden.
  static fobidden(msg: string): ResponseError {
    return new ResponseError(403, msg);
  }

  static tooManyRequests(msg: string): ResponseError {
    return new ResponseError(429, msg);
  }
}
