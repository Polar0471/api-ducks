import { Request, Response } from "express"
import { getDucksService } from "../services/duck-services"
import { ok } from "../utils/http-helper"

export const getDucks = async (req: Request, res: Response) => {
    const data = await getDucksService()
    const response = await ok(data)
    res.status(response.statusCode).json(response.body)
}