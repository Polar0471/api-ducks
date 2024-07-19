import { findAllDucks, findDuckById } from "../repositories/ducks-repository";
import { noContent, ok } from "../utils/http-helper";

export const getDucksService = async () => {
  const data = await findAllDucks();
  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};

export const getDuckByIdService = async (id: number) => {
  const data = await findDuckById(id)
  let response = null

  if (data) {
    response = await ok(data)
  } else {
    response = noContent()
  }

  return response
}