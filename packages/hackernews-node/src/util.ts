import { IncomingMessage } from 'http';
import * as jwt from 'jsonwebtoken';

export const APP_SECRET = 'GraphQL-is-aw3some';

function getTokenPayload(token: string): jwt.JwtPayload {
  return jwt.verify(token, APP_SECRET) as jwt.JwtPayload;
}

export function getUserId(req: IncomingMessage, authToken?: string) {
  if (req) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      if (!token) {
        throw new Error('No token found');
      }
      const { userId } = getTokenPayload(token);
      return userId;
    }
  } else if (authToken) {
    const { userId } = getTokenPayload(authToken);
    return userId;
  }

  throw new Error('Not authenticated');
}
