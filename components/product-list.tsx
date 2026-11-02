"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export type Product = {
  id: number;
  title: string;
  genre: string;
  platform: string;
  price: number;
  oldPrice?: number;
  image: string;
  tag?: string;
};

type ProductListProps = {
  products: Product[];
};

const rubles = new Intl.NumberFormat("ru-RU");

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden transition-colors hover:border-violet-400/50">
          <div className="relative">
            <Image
              src={product.image}
              alt={`Обложка игры ${product.title}`}
              width={600}
              height={800}
              className="aspect-[3/4] w-full object-cover"
            />
            {product.tag && (
              <span className="absolute left-3 top-3 rounded-md bg-violet-500 px-2.5 py-1 text-xs font-semibold text-white">
                {product.tag}
              </span>
            )}
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="min-h-11 text-base">{product.title}</CardTitle>
            <p className="text-xs text-slate-400">{product.genre}</p>
          </CardHeader>
          <CardContent className="pb-4">
            <p className="text-xs text-slate-500">{product.platform}</p>
          </CardContent>
          <CardFooter className="flex items-center justify-between gap-2">
            <div>
              <p className="font-bold">{rubles.format(product.price)} ₽</p>
              {product.oldPrice && (
                <p className="text-xs text-slate-500 line-through">{rubles.format(product.oldPrice)} ₽</p>
              )}
            </div>
            <button
              type="button"
              className="rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-violet-500"
            >
              Подробнее
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
