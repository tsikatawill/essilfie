import { storeAPI } from "../utils/constants";
import useSWR from "swr";

interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const Products = () => {
  const { data, isLoading } = useSWR<Product[]>(
    `${storeAPI}/products`,
    fetcher
  );

  return (
    <div className="p-4">
      {isLoading ? (
        <UIBlock />
      ) : (
        <ul className="grid grid-cols-4 gap-4">
          {data?.map((product) => (
            <li>
              <img
                className="size-[150px] object-contain mx-auto mb-3"
                src={product.image}
                width={200}
                height={200}
                alt={product.title}
              />
              <p className="text-sm">{product.title}</p>
              <small>${product.price}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

function UIBlock() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/70 grid place-content-center">
      <p className="text-white text-4xl">Loading...</p>
      {/* <img src={LoadingGif} width={40} /> */}
    </div>
  );
}
