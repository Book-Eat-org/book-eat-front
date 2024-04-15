export enum OrderStatus {
  NEW = "NEW",
  ACCEPTED = "ACCEPTED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELLED_BY_CLIENT = "CANCELLED_BY_CLIENT",
  CANCELLED_BY_PROVIDER = "CANCELLED_BY_PROVIDER",
  UNPAID = "UNPAID",
}

export enum OrdersIssuingMode {
  IN_PLACE = "onPlace",
  DELIVERY = "delivery",
  TO_GO = "toOutside",
  WITH_SELF = "toOutsideAvailable",
}
