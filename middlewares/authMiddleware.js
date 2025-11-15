import jwt from "jsonwebtoken";

import { sendError } from "@utils/response.js";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return sendError(res, {
      code: "NO_TOKEN",
      message: "Authorization token missing",
      statusCode: 401,
    });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return sendError(res, {
      code: "INVALID_TOKEN",
      message: "Invalid or expired token",
      statusCode: 401,
    });
  }
};
