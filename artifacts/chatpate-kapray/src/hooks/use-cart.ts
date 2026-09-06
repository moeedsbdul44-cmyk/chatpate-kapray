import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Product, Size } from '@/data';

export type CartLine = { product: Product; size: Size; quantity: number };
const KEY = 'chatpate-kapray-cart';

export function useCart() {
  const [items, setItems] = useState<CartLine[]>(() => {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]') as CartLine[]; } catch { return []; }
  });
  useEffect(() => localStorage.setItem(KEY, JSON.stringify(items)), [items]);
  useEffect(() => {
    const sync = () => {
      try { setItems(JSON.parse(localStorage.getItem(KEY) || '[]') as CartLine[]); } catch { /* keep current cart */ }
    };
    window.addEventListener(KEY, sync);
    window.addEventListener('storage', sync);
    return () => { window.removeEventListener(KEY, sync); window.removeEventListener('storage', sync); };
  }, []);
  const add = useCallback((product: Product, size: Size, quantity = 1) => {
    setItems((current) => {
      const found = current.find((line) => line.product.slug === product.slug && line.size === size);
      return found ? current.map((line) => line === found ? { ...line, quantity: line.quantity + quantity } : line) : [...current, { product, size, quantity }];
    });
    window.setTimeout(() => window.dispatchEvent(new Event(KEY)), 0);
  }, []);
  const update = useCallback((slug: string, size: Size, quantity: number) => {
    setItems((current) => quantity < 1 ? current.filter((line) => !(line.product.slug === slug && line.size === size)) : current.map((line) => line.product.slug === slug && line.size === size ? { ...line, quantity } : line));
    window.setTimeout(() => window.dispatchEvent(new Event(KEY)), 0);
  }, []);
  const remove = useCallback((slug: string, size: Size) => update(slug, size, 0), [update]);
  const count = useMemo(() => items.reduce((sum, line) => sum + line.quantity, 0), [items]);
  const subtotal = useMemo(() => items.reduce((sum, line) => sum + line.product.price * line.quantity, 0), [items]);
  return { items, add, update, remove, count, subtotal };
}