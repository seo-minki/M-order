import {atom} from 'jotai';
import {fetchMenu} from '@/utils/api';
import {CategoryOptions} from '@/types/menu';


export const menuAtom = atom(async (): Promise<CategoryOptions[]> => {
  const res = await fetchMenu();
  return res.result;
});