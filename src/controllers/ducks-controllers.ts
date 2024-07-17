import { Request, Response } from "express"
import { getDucksService } from "../services/duck-services"

export const getDucks = async (request: Request, response: Response) => {
    const data = await getDucksService()
    response.status(200).json(data)
}