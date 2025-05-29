// import type { NextFunction, Request, Response } from "express";

// export function authMiddleware(req: Request, res: Response, next: NextFunction) {
//     const authHeader = req.headers['authorization'];

//     req.userId = "8";
//     next();
// }




import { jwtVerify } from 'jose';
import type { NextFunction, Request, Response } from "express";

// Extend Express Request to add userId
declare module "express-serve-static-core" {
  interface Request {
    userId?: string;
  }
}

// Middleware function
export async function authMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

  console.log("Token received:", token ? `${token.substring(0, 15)}...` : "No token");

  if (!token) {
    res.status(401).json({ message: 'Unauthorized: No token provided' });
    return;
  }

  try {
    // Decode JWT header to inspect algorithm/type (optional step)
    // const [headerBase64] = token.split('.');JWT_PUBLIC_KEY 
    // const headerString = Buffer.from(headerBase64, 'base64').toString();
    // const header = JSON.parse(headerString);
    const parts = token.split('.');
const headerBase64 = parts[0];

if (!headerBase64) {
  res.status(400).json({ message: 'Invalid token: missing header' });
  return;
}

const headerString = Buffer.from(headerBase64, 'base64').toString();
const header = JSON.parse(headerString);


    console.log("Token header:", header);

    // Import jose key set handler
    const { createRemoteJWKSet } = await import('jose');

    // Your Clerk Issuer domain (replace this with actual domain from Clerk Dashboard)
    const CLERK_ISSUER = 'https://ideal-tetra-15.clerk.accounts.dev'; // Replace this
    const JWKS = createRemoteJWKSet(new URL(`${CLERK_ISSUER}/.well-known/jwks.json`));

    // Verify the token
    const { payload } = await jwtVerify(token, JWKS, {
      issuer: CLERK_ISSUER,
    });

    console.log("Token verified successfully!");

    if (!payload.sub) {
      res.status(401).json({ message: 'Unauthorized: Missing user ID in token' });
      return;
    }

    req.userId = payload.sub as string;
    console.log("User ID extracted from token:", req.userId);
    next();
  } catch (error: any) {
    console.error("Token verification failed:", error.message);
    res.status(401).json({ message: `Authentication failed: ${error.message}` });
    return;
  }
}
