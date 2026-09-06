import { useState, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowUpRight, Check, ChevronDown, Instagram, Mail, Menu, Minus, Plus, Search, ShoppingBag, Trash2, X } from 'lucide-react';
import type { Product, Size } from '@/data';
import { products } from '@/data';
import { useCart } from '@/hooks/use-cart';

export function Logo() {
  return <Link href="/" data-testid="link-logo" className="group inline-flex items-start gap-1 leading-[.78]"><span className="font-display text-[20px] font-extrabold tracking-[-.08em]">chatpate<br/><span className="text-secondary">kapray</span></span><span className="mt-0.5 h-2 w-2 rounded-full bg-accent transition-transform group-hover:rotate-45"/></Link>;
}

export function Header() {
  const [location, setLocation] = useLocation();
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const links = [['shop','Shop'], ['about','Our story'], ['contact','Say hi']];
  return <header className="sticky top-0 z-40 border-b border-foreground/15 bg-background/92 backdrop-blur-md">
    <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-10">
      <Logo/>
      <nav className="hidden items-center gap-8 md:flex">{links.map(([href, label]) => <Link key={href} href={`/${href}`} data-testid={`link-nav-${href}`} className={`font-mono-ui text-[11px] uppercase tracking-[.14em] transition-colors hover:text-secondary ${location === `/${href}` ? 'text-secondary' : ''}`}>{label}</Link>)}</nav>
      <div className="flex items-center gap-2">
        <Link href="/shop" data-testid="link-search" className="grid h-10 w-10 place-items-center hover:bg-accent"><Search size={17} strokeWidth={1.7}/></Link>
        <Link href="/cart" data-testid="link-cart" className="relative grid h-10 w-10 place-items-center hover:bg-accent"><ShoppingBag size={18} strokeWidth={1.7}/>{count > 0 && <span data-testid="text-cart-count" className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-secondary px-1 font-mono-ui text-[9px]">{count}</span>}</Link>
        <button type="button" data-testid="button-mobile-menu" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center md:hidden">{open ? <X size={19}/> : <Menu size={19}/>}</button>
      </div>
    </div>
    {open && <nav className="border-t border-foreground/15 bg-background px-5 py-4 md:hidden">{links.map(([href, label]) => <Link onClick={() => setOpen(false)} key={href} href={`/${href}`} data-testid={`link-mobile-${href}`} className="block border-b border-foreground/10 py-3 font-mono-ui text-xs uppercase tracking-[.14em]">{label}</Link>)}</nav>}
  </header>;
}

export function Footer() {
  return <footer className="mt-24 border-t border-foreground/15 bg-primary px-5 py-12 text-primary-foreground md:px-10">
    <div className="mx-auto max-w-[1440px]">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div><p className="font-display text-4xl font-extrabold leading-[.88] tracking-[-.06em]">dress like<br/>the chat<br/><span className="text-accent">has rules.</span></p><p className="mt-6 max-w-xs font-mono-ui text-[10px] uppercase leading-5 tracking-[.12em] text-primary-foreground/65">Independent streetwear from Lahore, for people who treat getting dressed as a personality trait.</p></div>
        <div><p className="mb-4 font-mono-ui text-[10px] uppercase tracking-[.18em] text-accent">Navigate</p><div className="grid gap-2 text-sm"><Link href="/shop" data-testid="link-footer-shop">Shop everything</Link><Link href="/about" data-testid="link-footer-about">Our story</Link><Link href="/contact" data-testid="link-footer-contact">Contact us</Link><a href="mailto:hello@chatpatekapray.pk?subject=Delivery%20and%20returns" data-testid="link-footer-delivery">Delivery + returns</a><a href="mailto:hello@chatpatekapray.pk?subject=Privacy%20question" data-testid="link-footer-privacy">Privacy, apparently</a></div></div>
        <div><p className="mb-4 font-mono-ui text-[10px] uppercase tracking-[.18em] text-accent">Find us</p><div className="grid gap-2 text-sm"><a href="mailto:hello@chatpatekapray.pk" data-testid="link-footer-email">hello@chatpatekapray.pk</a><a href="https://instagram.com" target="_blank" rel="noreferrer" data-testid="link-footer-instagram" className="inline-flex items-center gap-2">Instagram <ArrowUpRight size={14}/></a><a href="mailto:hello@chatpatekapray.pk?subject=Wholesale" data-testid="link-footer-wholesale">Wholesale inquiries</a></div></div>
        <div><p className="mb-4 font-mono-ui text-[10px] uppercase tracking-[.18em] text-accent">Small print</p><p className="text-sm leading-6 text-primary-foreground/70">Free delivery over Rs. 8,000. Lahore made. Mildly obsessed with good proportions.</p></div>
      </div>
      <div className="mt-16 flex flex-col justify-between gap-3 border-t border-primary-foreground/20 pt-5 font-mono-ui text-[9px] uppercase tracking-[.12em] text-primary-foreground/55 md:flex-row"><span>© 2024 Chatpate Kapray. All rights reserved.</span><span>cooked by Abdul Moeed + Zain ul Abaideen</span></div>
    </div>
  </footer>;
}

export function Shell({ children }: { children: ReactNode }) { return <div className="grain min-h-[100dvh] bg-background"><Header/><main>{children}</main><Footer/></div>; }

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const addQuick = () => { add(product, product.sizes[0]); setAdded(true); setTimeout(() => setAdded(false), 1400); };
  return <article className={`product-card group reveal-${Math.min(index + 1, 3)} relative`} data-testid={`card-product-${product.slug}`}>
    <Link href={`/product/${product.slug}`} data-testid={`link-product-${product.slug}`} className="block">
      <div className="relative aspect-[.82] overflow-hidden bg-muted"><img src={product.image} alt={product.name} className="h-full w-full object-cover"/>{product.badge && <span className="absolute left-3 top-3 bg-accent px-2 py-1 font-mono-ui text-[9px] uppercase tracking-[.1em]">{product.badge}</span>}<span className="absolute bottom-3 right-3 grid h-9 w-9 translate-y-3 place-items-center bg-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"><ArrowUpRight size={16}/></span></div>
      <div className="flex items-start justify-between gap-3 pt-3"><div><h3 className="font-display text-lg font-bold tracking-[-.04em]">{product.name}</h3><p className="font-mono-ui text-[10px] uppercase tracking-[.08em] text-muted-foreground">{product.color}</p></div><p className="font-mono-ui text-xs">Rs. {product.price.toLocaleString()}</p></div>
    </Link>
    <button type="button" onClick={addQuick} data-testid={`button-quick-add-${product.slug}`} className="mt-3 flex w-full items-center justify-center gap-2 border border-foreground/20 py-2 font-mono-ui text-[10px] uppercase tracking-[.12em] transition-colors hover:border-foreground hover:bg-foreground hover:text-background">{added ? <><Check size={13}/> added to bag</> : <>quick add <Plus size={13}/></>}</button>
  </article>;
}

export function Marquee() { return <div className="overflow-hidden border-y border-foreground/15 py-3"><div className="marquee-track flex w-max gap-8 whitespace-nowrap font-mono-ui text-[10px] uppercase tracking-[.18em]"><span>made for overthinking outfits</span><span className="text-secondary">•</span><span>free delivery over rs. 8,000</span><span className="text-accent">•</span><span>no boring basics</span><span className="text-secondary">•</span><span>made for overthinking outfits</span><span className="text-secondary">•</span><span>free delivery over rs. 8,000</span><span className="text-accent">•</span><span>no boring basics</span></div></div>; }

export function CartPanel({ onClose }: { onClose?: () => void }) {
  const { items, subtotal, update, remove } = useCart();
  return <section className="mx-auto max-w-[1440px] px-5 py-12 md:px-10">
    <div className="mb-8 flex items-end justify-between border-b border-foreground/15 pb-5"><div><p className="font-mono-ui text-[10px] uppercase tracking-[.18em] text-secondary">your current situation</p><h1 className="mt-2 font-display text-5xl font-extrabold tracking-[-.08em] md:text-7xl">The bag.</h1></div>{onClose && <button onClick={onClose} type="button" data-testid="button-close-cart"><X/></button>}</div>
    {items.length === 0 ? <div className="border border-dashed border-foreground/25 py-24 text-center"><ShoppingBag className="mx-auto mb-4 text-secondary" size={30}/><h2 className="font-display text-3xl font-bold">Nothing is happening here yet.</h2><p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">Your bag is giving empty group chat. Fix that?</p><Link href="/shop" data-testid="link-empty-shop" className="mt-6 inline-flex bg-secondary px-5 py-3 font-mono-ui text-[10px] uppercase tracking-[.12em]">go shopping</Link></div> : <div className="grid gap-10 lg:grid-cols-[1.5fr_.8fr]"><div className="divide-y divide-foreground/15">{items.map((line) => <div key={`${line.product.slug}-${line.size}`} className="flex gap-4 py-5" data-testid={`row-cart-${line.product.slug}`}><img src={line.product.image} alt={line.product.name} className="h-28 w-24 object-cover md:h-36 md:w-28"/><div className="flex min-w-0 flex-1 flex-col justify-between"><div className="flex justify-between gap-3"><div><h3 className="font-display text-xl font-bold tracking-[-.04em]">{line.product.name}</h3><p className="font-mono-ui text-[10px] uppercase text-muted-foreground">size {line.size} / {line.product.color}</p></div><button type="button" onClick={() => remove(line.product.slug, line.size)} data-testid={`button-remove-${line.product.slug}`}><Trash2 size={16} className="text-muted-foreground hover:text-destructive"/></button></div><div className="flex items-center justify-between"><div className="flex items-center border border-foreground/20"><button type="button" onClick={() => update(line.product.slug,line.size,line.quantity-1)} data-testid={`button-decrease-${line.product.slug}`} className="grid h-8 w-8 place-items-center"><Minus size={13}/></button><span className="w-8 text-center font-mono-ui text-xs">{line.quantity}</span><button type="button" onClick={() => update(line.product.slug,line.size,line.quantity+1)} data-testid={`button-increase-${line.product.slug}`} className="grid h-8 w-8 place-items-center"><Plus size={13}/></button></div><p className="font-mono-ui text-sm">Rs. {(line.product.price * line.quantity).toLocaleString()}</p></div></div></div>)}</div><aside className="h-fit border border-foreground/15 bg-card p-6"><p className="font-mono-ui text-[10px] uppercase tracking-[.18em] text-secondary">the numbers bit</p><div className="mt-6 flex justify-between text-sm"><span>Subtotal</span><span className="font-mono-ui">Rs. {subtotal.toLocaleString()}</span></div><p className="mt-3 text-xs leading-5 text-muted-foreground">Shipping calculated at checkout. Free delivery when your cart hits Rs. 8,000.</p><div className="my-6 border-t border-foreground/15 pt-5"><button type="button" onClick={() => alert('Checkout is coming soon. Your bag is saved.')} data-testid="button-checkout" className="flex w-full items-center justify-center gap-2 bg-primary py-4 font-mono-ui text-[10px] uppercase tracking-[.14em] text-primary-foreground transition-transform hover:-translate-y-0.5">checkout placeholder <ArrowUpRight size={14}/></button></div></aside></div>}
  </section>;
}

export function SizePicker({ value, onChange }: { value: Size; onChange: (size: Size) => void }) { return <div className="flex gap-2">{(['S','M','L','XL'] as Size[]).map((size) => <button type="button" key={size} onClick={() => onChange(size)} data-testid={`button-size-${size}`} className={`grid h-11 w-12 place-items-center border font-mono-ui text-xs transition-colors ${value === size ? 'border-primary bg-primary text-primary-foreground' : 'border-foreground/20 hover:border-foreground'}`}>{size}</button>)}</div>; }