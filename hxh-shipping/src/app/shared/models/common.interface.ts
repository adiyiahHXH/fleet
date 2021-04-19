

export interface ILabel {
  color: string;
  text: string;
}

export interface IMapPosition {
  lat: number;
  lng: number;
}

export interface IVechicle {
  id: string;
  title: string,
  description: string;
  label: ILabel;
  position: IMapPosition;
  options: any;
  name: string;
  year: string;
  image: string;
}