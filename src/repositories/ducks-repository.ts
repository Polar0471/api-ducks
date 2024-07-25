import fs from "fs/promises";
import Duck from "../models/duck-model";

export const findAllDucks = async (): Promise<Duck[]> => {
  const data = await fs.readFile("src/data/ducks.json", "utf-8");
  const ducks: Duck[] = JSON.parse(data);
  return ducks;
};

export const findDuckById = async (id: number): Promise<Duck | undefined> => {
  const data = await fs.readFile("src/data/ducks.json", "utf-8");
  const ducks: Duck[] = JSON.parse(data);
  const duck = ducks.find((duck) => duck.id === id);
  return duck;
};

export const findDuckByName = async (name: string) => {
  const data = await fs.readFile("src/data/ducks.json", "utf-8")
  const ducks: Duck[] = JSON.parse(data)
  const duck = ducks.find(duck => duck.common_name = name)
  return duck
}

export const createDuck = async (newDuck: Duck) => {
  const data = await fs.readFile("src/data/ducks.json", "utf-8");
  const ducks: Duck[] = JSON.parse(data);
  ducks.push(newDuck);
  await fs.writeFile("src/data/ducks.json", JSON.stringify(ducks, null, 2));
};

export const deleteDuck = async (id: number) => {
  const data = await fs.readFile("src/data/ducks.json", "utf-8");
  const ducks: Duck[] = JSON.parse(data);

  const updatedDucks = ducks.filter((duck) => duck.id !== id);

  await fs.writeFile("src/data/ducks.json", JSON.stringify(updatedDucks, null, 2));
};

export const updateDuckRepository = async (id: number, duckToUpdate: Duck) => {
  const data = await fs.readFile("src/data/ducks.json", "utf-8");
  const ducks: Duck[] = JSON.parse(data);
  const duckIndex = ducks.findIndex(duck => duck.id === id);

  if (duckIndex !== -1) {
    ducks[duckIndex] = { ...ducks[duckIndex], ...duckToUpdate };
    await fs.writeFile("src/data/ducks.json", JSON.stringify(ducks, null, 2));
    return ducks[duckIndex];
  } else {
    return null;
  }
}
