import { Request, Response } from "express";

export const getDucks = (request: Request, response: Response) => {
    response.status(200).json({duck: "Mellard"})
}