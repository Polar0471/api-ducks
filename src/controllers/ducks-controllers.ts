import { Request, Response } from "express";
import { getDuckByIdService, getDucksService } from "../services/duck-services";

export const getDucks = async (req: Request, res: Response) => {
  const httpResponse = await getDucksService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getDuckById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const httpResponse = await getDuckByIdService(id)
  res.status(httpResponse.statusCode).json(httpResponse.body)
}