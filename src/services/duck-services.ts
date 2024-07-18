import { noContent, ok } from "../utils/http-helper"

export const getDucksService = async () => {
    const data = {duck: "Mellard"}
    let response = null

    if (data) {
        response = await ok(data)
    } else {
        response = await noContent()
    }

    return response
}