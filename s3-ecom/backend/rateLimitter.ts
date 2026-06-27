import type { NextFunction, Request, Response } from "express";

const windowSize = 3600;
const maxRequest = 20;

const reteLimitter = (req: Request, res: Response, next: NextFunction) => {
    try {
        const key = req.ip;
        const currentTime = new Date()/1000;
        const windowTime = currentTime - windowSize;
    } catch (error) {
        
    }
}