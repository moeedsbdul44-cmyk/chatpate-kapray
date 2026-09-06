import cobaltDenim from '../attached_assets/generated_images/cobalt-baggy-denim.jpg';
import charcoalDenim from '../attached_assets/generated_images/charcoal-wide-denim.jpg';
import stonewashJorts from '../attached_assets/generated_images/stonewash-jorts.jpg';
import oliveCargos from '../attached_assets/generated_images/olive-cargos.jpg';
import sandParachute from '../attached_assets/generated_images/sand-parachute.jpg';
import oxbloodSweatshirt from '../attached_assets/generated_images/oxblood-sweatshirt.jpg';
import plumHoodie from '../attached_assets/generated_images/plum-hoodie.jpg';
import rustBomber from '../attached_assets/generated_images/rust-bomber.jpg';
import creamTee from '../attached_assets/generated_images/cream-graphic-tee.jpg';
import slateTee from '../attached_assets/generated_images/slate-tee.jpg';
import navyTrack from '../attached_assets/generated_images/navy-track.jpg';
import blackCarpenter from '../attached_assets/generated_images/black-carpenter.jpg';
import fadedRedZip from '../attached_assets/generated_images/faded-red-ziphood.jpg';
import butterOvershirt from '../attached_assets/generated_images/butter-overshirt.jpg';
import forestPolo from '../attached_assets/generated_images/forest-polo.jpg';
import blackCap from '../attached_assets/generated_images/black-five-panel.jpg';
import shoulderBag from '../attached_assets/generated_images/cherry-shoulder-bag.jpg';
import beanie from '../attached_assets/generated_images/cream-beanie.jpg';
import socks from '../attached_assets/generated_images/stripe-socks.jpg';
import noContextTee from '../attached_assets/generated_images/no-context-tee.jpg';

export type Category = 'Denim' | 'Bottoms' | 'Tops' | 'Outerwear' | 'Accessories';
export type Size = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  slug: string; name: string; category: Category; price: number; image: string;
  color: string; fit: string; description: string; sizes: Size[]; badge?: string;
};

export const products: Product[] = [
  { slug: 'blue-screen-baggy', name: 'Blue Screen Baggy', category: 'Denim', price: 6490, image: cobaltDenim, color: 'Cobalt wash', fit: 'Extra wide, stack-friendly', description: 'The pair that makes every old tee look like a considered outfit. Heavy cotton denim, dropped seat, and a clean five-pocket finish.', sizes: ['S','M','L','XL'], badge: 'new' },
  { slug: 'offline-wide-leg', name: 'Offline Wide Leg', category: 'Denim', price: 6290, image: charcoalDenim, color: 'Charcoal rinse', fit: 'Wide from hip to hem', description: 'A dark, easy wide-leg with enough room for long walks and late chai runs. Raw hem for your own edits.', sizes: ['S','M','L','XL'] },
  { slug: 'half-day-jorts', name: 'Half Day Jorts', category: 'Bottoms', price: 4490, image: stonewashJorts, color: 'Stonewash blue', fit: 'Relaxed knee length', description: 'Not shorts. Not trousers. Exactly the correct amount of indecisive.', sizes: ['S','M','L','XL'], badge: 'restock' },
  { slug: 'green-room-cargos', name: 'Green Room Cargos', category: 'Bottoms', price: 5790, image: oliveCargos, color: 'Olive utility', fit: 'Relaxed with volume', description: 'Six pockets, one agenda: carry everything except the emotional baggage.', sizes: ['S','M','L','XL'] },
  { slug: 'sandstorm-parachute', name: 'Sandstorm Parachute', category: 'Bottoms', price: 5990, image: sandParachute, color: 'Desert sand', fit: 'Balloon leg, adjustable hem', description: 'Lightweight parachute nylon with a generous leg and toggles to change the silhouette on a whim.', sizes: ['S','M','L','XL'] },
  { slug: 'redacted-sweatshirt', name: 'Redacted Sweatshirt', category: 'Tops', price: 3890, image: oxbloodSweatshirt, color: 'Oxblood', fit: 'Boxy, heavyweight', description: 'A dense fleece sweatshirt with a tiny front graphic and a big personality problem.', sizes: ['S','M','L','XL'] },
  { slug: 'main-character-hoodie', name: 'Main Character Hoodie', category: 'Tops', price: 4890, image: plumHoodie, color: 'Faded plum', fit: 'Oversized, dropped shoulder', description: 'Brushed-back fleece, oversized hood, and a silhouette built for disappearing into the good part of the song.', sizes: ['S','M','L','XL'], badge: 'best seller' },
  { slug: 'hot-take-bomber', name: 'Hot Take Bomber', category: 'Outerwear', price: 6990, image: rustBomber, color: 'Rust orange', fit: 'Cropped and roomy', description: 'A cropped nylon layer with a smooth zip and just enough volume for a hoodie underneath.', sizes: ['S','M','L','XL'], badge: 'new' },
  { slug: 'reply-all-tee', name: 'Reply All Tee', category: 'Tops', price: 2490, image: creamTee, color: 'Cream / tomato print', fit: 'Relaxed everyday fit', description: 'Soft cotton jersey, a hand-drawn graphic, and no fear of being perceived.', sizes: ['S','M','L','XL'] },
  { slug: 'low-battery-tee', name: 'Low Battery Tee', category: 'Tops', price: 2290, image: slateTee, color: 'Slate / lemon mark', fit: 'Oversized and easy', description: 'The tee for plans you might attend. Clean cotton, low-key chest mark, very high rewear value.', sizes: ['S','M','L','XL'] },
  { slug: 'night-shift-track', name: 'Night Shift Track', category: 'Outerwear', price: 5590, image: navyTrack, color: 'Navy / chalk', fit: 'Relaxed track silhouette', description: 'Sport references without the commitment. Contrast piping, elastic hem, and a tidy high collar.', sizes: ['S','M','L','XL'] },
  { slug: 'load-bearing-carpenter', name: 'Load-Bearing Carpenter', category: 'Denim', price: 6790, image: blackCarpenter, color: 'Washed black', fit: 'Relaxed carpenter cut', description: 'Washed black denim with a hammer loop, utility pocket, and a leg that refuses to taper.', sizes: ['S','M','L','XL'] },
  { slug: 'missed-call-ziphood', name: 'Missed Call Ziphood', category: 'Tops', price: 4690, image: fadedRedZip, color: 'Faded tomato', fit: 'Relaxed zip-up', description: 'A familiar layer with an excellent hood and a wash that gets better with more questionable decisions.', sizes: ['S','M','L','XL'] },
  { slug: 'soft-launch-overshirt', name: 'Soft Launch Overshirt', category: 'Outerwear', price: 5490, image: butterOvershirt, color: 'Butter yellow', fit: 'Cropped utility fit', description: 'Lightweight twill, two practical pockets, and a color that does the talking before you do.', sizes: ['S','M','L','XL'] },
  { slug: 'green-flag-polo', name: 'Green Flag Polo', category: 'Tops', price: 3290, image: forestPolo, color: 'Forest / cream', fit: 'Relaxed knit feel', description: 'A soft polo with a contrast collar for days when a tee feels too emotionally available.', sizes: ['S','M','L','XL'] },
  { slug: 'five-panel-proof', name: 'Five Panel Proof', category: 'Accessories', price: 1890, image: blackCap, color: 'Ink black', fit: 'Adjustable five-panel', description: 'A low-profile cap for hiding from the sun, the group chat, or both.', sizes: ['S','M','L','XL'] },
  { slug: 'carry-on-chaos', name: 'Carry On Chaos', category: 'Accessories', price: 2490, image: shoulderBag, color: 'Cherry red', fit: 'Adjustable crossbody', description: 'Canvas shoulder bag with room for keys, receipts, and one extremely specific lip balm.', sizes: ['S','M','L','XL'], badge: 'new' },
  { slug: 'soft-reset-beanie', name: 'Soft Reset Beanie', category: 'Accessories', price: 1690, image: beanie, color: 'Cream / cobalt', fit: 'Stretch rib knit', description: 'A soft ribbed beanie with a tiny contrast stitch and main-character warmth.', sizes: ['S','M','L','XL'] },
  { slug: 'after-hours-stripes', name: 'After Hours Stripes', category: 'Accessories', price: 990, image: socks, color: 'Purple / lime', fit: 'Cushioned crew', description: 'A pair of graphic cotton socks to rescue the outfit from the ankles down.', sizes: ['S','M','L','XL'] },
  { slug: 'no-context-tee', name: 'No Context Tee', category: 'Tops', price: 2390, image: noContextTee, color: 'Sky blue / cobalt', fit: 'Loose and cropped', description: 'A sky-blue jersey tee with an abstract graphic for statements that need no further explanation.', sizes: ['S','M','L','XL'] },
];

export const categories = ['All', 'Denim', 'Bottoms', 'Tops', 'Outerwear', 'Accessories'] as const;