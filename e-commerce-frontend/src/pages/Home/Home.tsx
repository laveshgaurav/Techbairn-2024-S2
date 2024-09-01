import { useEffect, useState } from 'react';
import Navbar from '../../components/Navigation/Navbar';
import { getInventory } from '../../services/http.service';
import { T_Product } from '../../@types/Types';
import { useAppContext } from '../../contexts/AppContext';

function Home() {
  const { setCart } = useAppContext();
  const [inventory, setInventory] = useState<T_Product[]>([]);

  const fetchData = async () => {
    try {
      const resp = await getInventory();
      if (resp?.status === 200) {
        setInventory(resp?.data?.data);
      }
    } catch (e: unknown) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <section className="px-12 pt-16">
        <h1 className="mb-3 text-[54px] font-semibold text-[#141414]">
          Get Inspired
        </h1>
        <p className="mb-12 text-[18px] font-medium text-[#141414]">
          Browsing for your next long-haul trip, everyday journey, or just fancy
          a look at what's
          <br />
          new? From community favourites to about-to-sell out items, see then
          all here.
        </p>

        <div className="grid grid-cols-4 gap-6 gap-y-16">
          {inventory?.map((item) => (
            <div className="">
              <div className="mb-1 flex aspect-square w-full items-center justify-center rounded-md bg-white">
                <img src={item.image} className="w-1/2" />
              </div>
              <h2 className="text-[16px] font-normal">
                {item.title?.split(' ')[0]} {item.title?.split(' ')[1]}
              </h2>
              <h3 className="text-[14px] font-light">{item.category}</h3>
              <h3 className="text-[14px] font-semibold">₹ {item.price}</h3>
              <button
                className="mt-2 w-full rounded-md bg-white p-2 text-[14px]"
                onClick={() => setCart((prev) => [...prev, item])}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
