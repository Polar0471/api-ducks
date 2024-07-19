import { Request, Response } from "express";
import { getDucksService } from "../services/duck-services";

export const getDucks = async (req: Request, res: Response) => {
  const httpResponse = await getDucksService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
