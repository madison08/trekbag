import { create } from 'zustand';
import { initialItem } from '../lib/constants';
import { persist } from 'zustand/middleware';

export const useItemStore = create(
  persist(
    (set) => ({
      items: initialItem,
      addItem: (newText) => {
        const newItem = {
          id: new Date().getTime(),
          name: newText,
          packed: false,
        };
        set((state) => ({
          items: [...state.items, newItem],
        }));
      },
      removeItem: (id) => {
        set((state) => ({
          items: [...state.items].filter((item) => item.id != id),
        }));
      },
      toggleItem: (id) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  packed: !item.packed,
                }
              : item
          ),
        }));
      },
      removeAllItems: () => {
        set(() => ({
          items: [],
        }));
      },
      resetToInitial: () => {
        set(() => ({
          items: initialItem,
        }));
      },
      markAllIncompleted: () => {
        set((state) => ({
          items: state.items.map((item) => ({
            ...item,
            packed: false,
          })),
        }));
      },
      markAllCompleted: () => {
        set((state) => ({
          items: state.items.map((item) => ({
            ...item,
            packed: true,
          })),
        }));
      },
    }),
    {
      name: 'items',
    }
  )
);
