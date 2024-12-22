import { useContext } from 'react';
import { ItemsContext } from './ItemContextProvider';

export function useItemsContext() {
  const context = useContext(ItemsContext);
  return context;
}
