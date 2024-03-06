export interface Country {
  name: CountryName;
  flags: CountryFlags;
  population: number;
  cca3: string;
  borders?: string[];
  maps?: CountryMaps;
}

export interface CountryName {
  common: string;
  official: string;
  nativeName: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
}

export interface CountryFlags {
  png: string;
  svg: string;
  alt: string;
}

export interface CountryMaps {
  googleMaps: string;
  openStreetMaps: string;
}
