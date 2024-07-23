import Duck from "../models/duck-model";
import {
  createDuck,
  deleteDuck,
  findAllDucks,
  findDuckById,
  updateDuckRepository,
} from "../repositories/ducks-repository";
import { badRequest, created, noContent, ok } from "../utils/http-helper";

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
  const data = await findDuckById(id);
  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = noContent();
  }

  return response;
};

export const createDuckService = async (newDuck: Duck) => {
  let response = null;

  if (Object.keys(newDuck).length !== 0) {
    await createDuck(newDuck);
    response = await created();
  } else {
    response = await badRequest();
  }

  return response;
};

export const deleteDuckService = async (id: number) => {
  let response = null 
  await deleteDuck(id)
  response = await ok({message: "deleted"})
  return response
}

export const updateDucksService = async (id: number, duckToUpdate: Duck) => {
  const data = await updateDuckRepository(id, duckToUpdate)
  let response = null

  if (data) {
    response = await ok(data)
  } else {
    response = await badRequest()
  }

  return response
}
