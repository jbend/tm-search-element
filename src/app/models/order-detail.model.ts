export interface OrderDetail {
  orderId: number;
  detailId: number;
  commodity: string;
  description: string;
  pallets: number;
  pieces: number;
  piecesUnits: string;
  weight: number;
  weightUnits: string;
  cube: number;
  cubeUnits: string;
  length: number;
  lengthUnits: string;
  height: number;
  heightUnits: string;
  width: number;
  widthUnits: string;
  items: number;
  unId: number;
  unNumber: string;
  tempControlled: boolean;
  requestedEquipment: string;
  dangerousGoods: boolean;
}
