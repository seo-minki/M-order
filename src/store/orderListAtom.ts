import {atom} from 'jotai';
import { ProductOptions } from "@/types/menu";

interface OrderOption extends ProductOptions {
  quantity: number;
}

export const OrderListAtom = atom<OrderOption[]>([]);
