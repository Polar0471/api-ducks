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

export default Duck;