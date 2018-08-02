import { OrderDetail, OrderStatus, OrderTrace } from './index';

export interface Order {
  href: string;
  orderId: number;
  billNumber: string;
  shipper: string;
  shipperName: string;
  shipperAddr1: string;
  shipperAddr2: string;
  shipperCity: string;
  shipperState: string;
  shipperPc: string;
  shipperZone: string;
  shipperZoneDescription: string;
  shipperContact: string;
  shipperPhone: string;
  pickupAt: string;
  pickupAtName: string;
  pickupAtAddr1: string;
  pickupAtAddr2: string;
  pickupAtCity: string;
  pickupAtState: string;
  pickupAtPc: string;
  pickupAtZone: string;
  pickupAtZoneDescription: string;
  pickupAtContact: string;
  pickupAtPhone: string;
  consignee: string;
  consigneeName: string;
  consigneeAddr1: string;
  consigneeAddr2: string;
  consigneeCity: string;
  consigneeState: string;
  consigneePc: string;
  consigneeZone: string;
  consigneeZoneDescription: string;
  consigneeContact: string;
  consigneePhone: string;
  careOf: string;
  careOfName: string;
  careOfAddr1: string;
  careOfAddr2: string;
  careOfCity: string;
  careOfState: string;
  careOfPc: string;
  careOfZone: string;
  careOfZoneDescription: string;
  careOfContact: string;
  careOfPhone: string;
  statusDescription: string;
  currentStatusBeh: string;
  currentZone: string;
  currentZoneDescription: string;
  pallets: number;
  weight: number;
  dangerousGoods: boolean;
  highValue: boolean;
  serviceLevel: string;
  commodity: string;
  pickUpBy: string;
  pickUpByEnd: string;
  deliverBy: string;
  deliverByEnd: string;
  deliveryApptReq: boolean;
  deliveryApptMade: boolean;
  user1: string;
  user2: string;
  user3: string;
  user4: string;
  user5: string;
  user6: string;
  user7: string;
  user8: string;
  user9: string;
  user10: string;
  pickupDone: boolean;
  status: OrderStatus[];
  details: OrderDetail[];
  trace: OrderTrace[];
}
