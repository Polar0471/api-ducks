import fs from "fs/promises"
import Duck from "../models/duck-model";

export const findAllDucks = async (): Promise<Duck[]> => {
  const data = await fs.readFile("src/data/ducks.json", "utf-8")
  const ducks: Duck[] = JSON.parse(data)
  return ducks
};

export const findDuckById = async (id: number): Promise<Duck | undefined> => {
  const data = await fs.readFile("src/data/ducks.json", "utf-8")
  const ducks: Duck[] = JSON.parse(data)
  const duck = ducks.find(duck => duck.id === id)
  return duck
};
