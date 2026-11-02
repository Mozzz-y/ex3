import { ProductList, type Product } from "@/components/product-list";

const products: Product[] = [
  { id: 1, title: "Cyberpunk 2077", genre: "RPG · Экшен", platform: "PC / PS5 / Xbox", price: 2499, oldPrice: 3999, image: "/games/cyberpunk.svg", tag: "Хит" },
  { id: 2, title: "The Witcher 3: Wild Hunt", genre: "RPG · Приключения", platform: "PC / PS5 / Xbox", price: 1499, oldPrice: 2499, image: "/games/witcher.svg", tag: "Скидка" },
  { id: 3, title: "Elden Ring", genre: "Action RPG", platform: "PC / PS5 / Xbox", price: 3299, image: "/games/elden-ring.svg", tag: "Популярное" },
  { id: 4, title: "Red Dead Redemption 2", genre: "Приключения · Экшен", platform: "PC / PS4 / Xbox", price: 1999, oldPrice: 2999, image: "/games/rdr2.svg" },
  { id: 5, title: "Baldur’s Gate 3", genre: "RPG · Фэнтези", platform: "PC / PS5 / Xbox", price: 3599, image: "/games/baldurs-gate.svg", tag: "Выбор игроков" },
  { id: 6, title: "Hogwarts Legacy", genre: "RPG · Приключения", platform: "PC / PS5 / Xbox", price: 2199, oldPrice: 3499, image: "/games/hogwarts.svg" },
  { id: 7, title: "God of War Ragnarök", genre: "Экшен · Приключения", platform: "PC / PS5", price: 3999, image: "/games/god-of-war.svg" },
  { id: 8, title: "Minecraft", genre: "Песочница", platform: "PC / PS5 / Xbox / Switch", price: 1299, image: "/games/minecraft.svg" },
  { id: 9, title: "Forza Horizon 5", genre: "Гонки · Симулятор", platform: "PC / Xbox", price: 2799, oldPrice: 3499, image: "/games/forza.svg" },
  { id: 10, title: "Hades", genre: "Roguelike · Экшен", platform: "PC / PS5 / Switch", price: 999, image: "/games/hades.svg", tag: "Выгодно" },
  { id: 11, title: "Resident Evil 4", genre: "Ужасы · Экшен", platform: "PC / PS5 / Xbox", price: 2399, image: "/games/resident-evil.svg" },
  { id: 12, title: "Stardew Valley", genre: "Симулятор · RPG", platform: "PC / PS5 / Xbox / Switch", price: 699, image: "/games/stardew.svg" },
];

export function Catalog() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 py-8 sm:px-8 lg:py-12">
      <header className="mb-12 flex flex-col gap-6 border-b border-white/10 pb-7 sm:flex-row sm:items-center sm:justify-between">
        <a href="#" className="text-2xl font-black tracking-[0.18em] text-white">
          PLAY<span className="text-violet-400">GROUND</span>
        </a>
        <nav className="flex gap-6 text-sm text-slate-400">
          <a href="#catalog" className="text-white">Каталог</a>
          <a href="#about" className="transition-colors hover:text-white">О магазине</a>
          <a href="#contacts" className="transition-colors hover:text-white">Контакты</a>
        </nav>
        <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
          Игры для твоего мира
        </div>
      </header>

      <section className="mb-12 grid gap-8 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1b2030] to-[#11141c] p-7 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-violet-300">Магазин видеоигр</p>
          <h1 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
            Найди свою следующую <span className="text-violet-400">игру</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
            Большие приключения, захватывающие истории и новые миры. Выбирай игру по вкусу и начинай играть.
          </p>
          <a href="#catalog" className="mt-7 inline-flex rounded-lg bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-400">
            Смотреть каталог
          </a>
        </div>
        <div className="hidden items-center justify-center lg:flex">
          <div className="w-56 rotate-[-5deg] rounded-xl border border-violet-300/30 bg-violet-500/10 p-3 shadow-2xl shadow-violet-950/40">
            <div className="flex aspect-[3/4] flex-col justify-between rounded-lg bg-gradient-to-br from-violet-500 via-indigo-700 to-slate-950 p-4">
              <span className="text-xs font-bold tracking-[0.2em]">PLAYGROUND</span>
              <span className="text-3xl font-black leading-none">GAME<br />ON.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-300">Подборка для тебя</p>
            <h2 className="text-3xl font-bold">Каталог игр</h2>
          </div>
          <p className="text-sm text-slate-500">12 игр в каталоге</p>
        </div>
        <ProductList products={products} />
      </section>

      <footer id="about" className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-bold tracking-widest text-slate-300">PLAYGROUND</p>
        <p id="contacts">© 2025 PLAYGROUND. Каталог видеоигр.</p>
      </footer>
    </main>
  );
}
