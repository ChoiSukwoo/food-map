type Lat = number;
type Lng = number;
export type LatLng = [Lat, Lng];
export type Coordinates = { lat: number; lng: number };
export type Menu = { name: string; price: string };
export type Img = { url: string };

export type StoreDto = {
  id: number;
  name: string;
  description: string;
  season: number;
  coordinates: Coordinates;
  images: Img[];
  characteristic: string;
  foodKind: string;
  address: string;
  phone: string;
  menus: Menu[];
};

export type Store = {
  id: number;
  name: string;
  description: string;
  season: number;
  coordinates: LatLng;
  images: string[];
  characteristic: string;
  foodKind: string;
  address: string;
  phone: string;
  menus: Menu[];
};

export const storeDtoToStore = (Dto: StoreDto): Store => {
  return {
    ...Dto,
    images: Dto.images
      ? Dto.images.map((img) => {
          return img.url;
        })
      : [],
    coordinates: [
      Dto.coordinates ? Dto.coordinates.lat / 1000000 : 0,
      Dto.coordinates ? Dto.coordinates.lng / 1000000 : 0,
    ],
  };
};
