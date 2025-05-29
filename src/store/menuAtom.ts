import {atom} from 'jotai';
import {fetchMenu} from '@/utils/api';
import {CategoryOptions} from '@/types/menu';

const menuFetcherAtom = atom(async (): Promise<CategoryOptions[]> => {
  const res = await fetchMenu();
  return res.result;
});

export const menuAtom = atom((get) => get(menuFetcherAtom));