import { Request, Response } from "express";
import {
  createDuckService,
  deleteDuckService,
  getDuckByIdService,
  getDuckNameService,
  getDucksService,
  updateDucksService
} from "../services/duck-services";
import { noContent } from "../utils/http-helper";

export const getDucks = async (req: Request, res: Response) => {
  const httpResponse = await getDucksService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getDuckById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await getDuckByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getDuckName = async (req: Request, res: Response) => {
  const name = req.params.common_name;
  const httpResponse = await getDuckNameService(name);
  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postDuck = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await createDuckService(bodyValue);

  if (httpResponse) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  } else {
    const response = await noContent();
    res.status(response.statusCode).json(response.body);
  }
};

export const deleteDuck = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await deleteDuckService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updateDuck = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const bodyValue = req.body
  const httpResponse = await updateDucksService(id, bodyValue)
  res.status(httpResponse.statusCode).json(httpResponse.body)
}