import { useContext, useState } from "react";
import { DataContext } from "../../Providers/DataProviders";
import { VscSettings } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";


const SearchForm = ({ estates, scrollToEstateData }) => {
  const { setData } = useContext(DataContext);

  const [searchInput, setSearchInput] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredEstates = estates?.filter((estate) => {
      const price = parseInt(estate.price.replace(/,/g, ""));
      const minPrice = priceRange.split("-")[0]
        ? parseInt(priceRange.split("-")[0])
        : 0;
      const maxPrice = priceRange.split("-")[1]
        ? parseInt(priceRange.split("-")[1])
        : Number.MAX_SAFE_INTEGER;

      return (
        estate.estate_title.toLowerCase().includes(searchInput.toLowerCase()) ||
        estate.description.includes(propertyType) ||
        (price >= minPrice && price <= maxPrice)
      );
    });

    setData({ estates: filteredEstates });
    scrollToEstateData();

    setSearchInput("");
    setPropertyType("");
    setPriceRange("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-2xl rounded-3xl py-8 lg:w-1/3 relative lg:mt-0 mt-12"
    >
      <div className="flex justify-between border-b border-[#aaaaaa] h-12 lg:px-8 px-3">
        <button className="btn btn-ghost w-1/2 border-b-2 focus:text-[#0ca39a] focus:border-[#0ca39a] cursor-pointer text-[#808080]">
          For Sale
        </button>
        <button className="btn btn-ghost w-1/2 border-b-2 focus:text-[#0ca39a] focus:border-[#0ca39a] cursor-pointer text-[#808080]">
          For Rent
        </button>
      </div>
      <div className="py-12 flex flex-col gap-8 lg:px-12 px-4">
        <input
          type="text"
          placeholder="New York, San Francisco, etc"
          className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5] px-6"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <select
          className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5] px-6"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option>Select Property Type</option>
          <option>Residential</option>
          <option>Commercial</option>
          <option>Land</option>
        </select>
        <select
          className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5] px-6"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option>Price Range</option>
          <option value="0-500000">Under $500,000</option>
          <option value="500000-1000000">$500,000 to $1,000,000</option>
          <option value="1000000-">Over $1,000,000</option>
        </select>
        <span className="flex items-center text-[#0ca39a] gap-x-2">
          <VscSettings className="text-2xl" />
          <p>Advance Search</p>
        </span>
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-x-2 rounded-full h-14 text-white bg-[#0ca39a]"
        >
          <IoSearch />
          Search
        </button>
      </div>
      <button className="bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-12 w-12 cursor-auto absolute -top-2 -right-2"></button>
    </form>
  );
};

export default SearchForm;
