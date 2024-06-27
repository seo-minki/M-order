import { atom } from "recoil";
import { ProductOptions } from "@/types/menu";

interface OrderOption extends ProductOptions {
  quantity: number
}

export const OrderListState = atom<OrderOption[]>({
  key: "orderList",
  default: []
})