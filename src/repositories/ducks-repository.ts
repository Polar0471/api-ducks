import fs from "fs/promises"

interface Habitat {
  type: string;
  description: string;
  preferences: string[];
}

interface Characteristics {
  size: string;
  plumage: string;
  behavior: string;
}

interface ConservationStatus {
  level: string;
  global_status: string;
  regional_status: string;
}

interface Reference {
  title: string;
  author?: string;
  year?: number;
  publisher?: string;
  link?: string;
  access_date?: string;
}

interface Duck {
  id: number;
  common_name: string;
  scientific_name: string;
  family: string;
  habitat: Habitat;
  characteristics: Characteristics;
  description: string;
  conservation_status: ConservationStatus;
  image_url: string;
  references: Reference[];
}

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
