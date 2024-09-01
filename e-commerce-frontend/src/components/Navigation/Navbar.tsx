import { useAppContext } from '../../contexts/AppContext';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { getSearchInventory } from '../../services/http.service';
import { useEffect, useRef, useState } from 'react';
import { T_Product } from '../../@types/Types';

function Navbar() {
  const searchRef: React.LegacyRef<HTMLDivElement> | undefined = useRef(null);
  const { logout, cart } = useAppContext();
  const [keyword, setKeyword] = useState<string>('');
  const [searchResult, setSearchResult] = useState<T_Product[]>([]);

  const search = async (keyword: string) => {
    if (!keyword) return setSearchResult([]);
    const response = await getSearchInventory(keyword);
    setSearchResult(response?.data?.data);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event?.target as Node)
    ) {
      setSearchResult([]);
      setKeyword('');
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      search(keyword);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [keyword]);

  return (
    <nav className="sticky top-0 flex items-center justify-between border bg-[#e5e5e5] px-12 py-3">
      <div className="flex items-center gap-x-3">
        <img src={logo} className="h-6" />
        <div className="relative" ref={searchRef}>
          <input
            className="rounded-md border border-gray-300 bg-[#d7d7d7] px-2 py-1 text-[14px] outline-none placeholder:text-[14px]"
            placeholder="Search"
            value={keyword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setKeyword(e.target.value);
            }}
          />

          {searchResult?.length > 0 && (
            <div
              className="h-max-[400px] Search_Result absolute top-[2.5rem] w-[360px] overflow-y-auto rounded-md bg-white p-2 shadow-md"
              style={{
                maxHeight: '400px',
              }}
            >
              {searchResult.map((res) => (
                <div className="mb-1 flex cursor-pointer items-start gap-x-2 rounded-md p-2 hover:bg-[#d7d7d7]">
                  <img src={res.image} className="w-8" />
                  <h2 className="text-[10px]">
                    {res.title?.length > 60
                      ? `${res.title?.slice(0, 60)}...`
                      : res.title}
                  </h2>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-x-6">
        <NavLink
          to={'/home'}
          end
          className={({ isActive }) =>
            `${isActive ? 'border-b-2 border-[#141414]' : ''} pb-1 text-[14px] text-[#141414]`
          }
        >
          Shop
        </NavLink>
        <NavLink
          end
          to={'/wishlist'}
          className={({ isActive }) =>
            `${isActive ? 'border-b-2 border-[#141414]' : ''} pb-1 text-[14px] text-[#141414]`
          }
        >
          Collection
        </NavLink>
        <NavLink
          end
          to={'/cart'}
          className={({ isActive }) =>
            `${isActive ? 'border-b-2 border-[#141414]' : ''} pb-1 text-[14px] text-[#141414]`
          }
        >
          Explore
        </NavLink>
      </div>
      <div className="flex items-center gap-x-6">
        <button className="text-[#141414 text-[14px]">
          <span>
            <i className="fa-solid fa-cart-shopping mr-1"></i>
          </span>
          <span>Cart ({cart.length})</span>
        </button>

        <button className="text-[#141414 text-[14px]">
          <span>
            <i className="fa-solid fa-user mr-1"></i>
          </span>
          <span>My Account</span>
        </button>
      </div>

      {/* <button
        className="rounded-md bg-gray-700 px-3 py-1 text-[14px] text-white"
        onClick={logout}
      >
        Sign Out
      </button> */}
    </nav>
  );
}

export default Navbar;
