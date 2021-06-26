import { Request, Response, NextFunction } from "express";

export function ensureAdmin (req: Request, res: Response, nextFunction: NextFunction){

  const isAdmin = false;

  if(isAdmin){
    return nextFunction();
  }

  return res.status(401).json({
    error: "Unauthorized",
  })

}