import React, { useState, useEffect } from 'react';
import Navbar from '../Elements/NavbarLog'
import Card from '../Fragments/CardProduct'
import Footer from '../Elements/Footer';
import axios from 'axios'

const Jelajah = () => {
  const [minPriceSelected, setMinPriceSelected] = useState(false);
  const [maxPriceSelected, setMaxPriceSelected] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [minCapacitySelected, setMinCapacitySelected] = useState(false);
  const [maxCapacitySelected, setMaxCapacitySelected] = useState(false);

  const handleMinCapacityChange = () => {
    if (!minCapacitySelected) {
      setMinCapacitySelected(true);
      setMaxCapacitySelected(false);
    }
  };

  const handleMaxCapacityChange = () => {
    if (!maxCapacitySelected) {
      setMaxCapacitySelected(true);
      setMinCapacitySelected(false);
    }
  };
  const handleMinPriceChange = () => {
    if (!minPriceSelected) {
      setMinPriceSelected(true);
      setMaxPriceSelected(false);
    }
  };

  const handleMaxPriceChange = () => {
    if (!maxPriceSelected) {
      setMaxPriceSelected(true);
      setMinPriceSelected(false);
    }
  };

  const handleLocationChange = (event) => {
    const { id } = event.target;
    const isSelected = selectedLocations.includes(id);

    if (isSelected) {
      const updatedLocations = selectedLocations.filter((loc) => loc !== id);
      setSelectedLocations(updatedLocations);
    } else {
      setSelectedLocations([...selectedLocations, id]);
    }
  };
  const applyFilters = async (event) => {
    event.preventDefault();

    try {
      let queryParams = '';
      
      if (minPriceSelected) {
        queryParams += 'order=asc';
      } else if (maxPriceSelected) {
        queryParams += 'order=desc';
      }

      if (selectedLocations.length > 0) {
        queryParams += `&place=${selectedLocations.join(',')}`;
      }

      if (minCapacitySelected) {
        queryParams += '&minCapacity=true';
      } else if (maxCapacitySelected) {
        queryParams += '&maxCapacity=true';
      }

      const response = await axios.get(`http://localhost:5000/productsByFilters?${queryParams}`);
      setProducts(response.data);

      setMinPriceSelected(false);
      setMaxPriceSelected(false);
      setSelectedLocations([]);
      setMinCapacitySelected(false);
      setMaxCapacitySelected(false);
    } catch (error) {
      console.error('Error applying filters:', error);
    }
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  return (
    <>
        <Navbar/>
       <div className="w-full flex h-[120vh]">
        <div className="w-1/6 h-full bg-gray-100 shadow-xl p-8">
          <div onSubmit={applyFilters} className="flex flex-col gap-2">
            <form action="" onSubmit={applyFilters}>
              <h4 className='text-black mb-2'>Filter</h4>
              <div className='h-[1px] bg-gray-300 mb-2'></div>
              <p className='body1-semibold'>Harga</p>
              <div className="flex">
                <Input id="hargaTerendah" checked={minPriceSelected} onChange={handleMinPriceChange}/>
                <Label id="hargaTerendah" text="Harga Terendah" onClick={handleMinPriceChange}/>
              </div>
              <div className="flex">
                <Input id="hargaTertinggi" checked={maxPriceSelected} onChange={handleMaxPriceChange}/>
                <Label id="hargaTertinggi" text="Harga Tertinggi" onClick={handleMaxPriceChange}/>
              </div>
              <p className='body1-semibold'>Lokasi</p>
              <div className="flex">
                <Input id="Tanjung Pinang Timur" checked={selectedLocations.includes('Tanjung Pinang Timur')} onChange={handleLocationChange}/>
                <Label id="Tanjung Pinang Timurr" text="Tanjung Pinang Timur" onClick={handleLocationChange}/>
              </div>
              <div className="flex">
                <Input id="Tanjung Pinang" checked={selectedLocations.includes('Tanjung Pinang')} onChange={handleLocationChange}/>
                <Label id="Tanjung Pinang" text="Tanjung Pinang" onClick={handleLocationChange}/>
              </div>
              <div className="flex">
                <Input id="Bintan Timur" checked={selectedLocations.includes('Bintan Timur')} onChange={handleLocationChange}/>
                <Label id="Bintan Timur" text="Bintan Timur" onClick={handleLocationChange}/>
              </div>
              <p className='body1-semibold'>Kapasitas</p>
              <div className="flex">
              <Input
                id="kapasitasTerendah"
                checked={minCapacitySelected}
                onChange={handleMinCapacityChange}
              />
              <Label
                id="kapasitasTerendah"
                text="Kapasitas Terendah"
                onClick={handleMinCapacityChange}
              />
            </div>
            <div className="flex">
              <Input
                id="kapasitasTertinggi"
                checked={maxCapacitySelected}
                onChange={handleMaxCapacityChange}
              />
              <Label
                id="kapasitasTertinggi"
                text="Kapasitas Tertinggi"
                onClick={handleMaxCapacityChange}
              />
            </div>
              <button type="submit" className='w-3/4 mt-3 bg-[#302768] rounded-md p-1 text-white body2-semibold'>Terapkan</button>
            </form>
          </div>
        </div>
        <div className="w-5/6 p-8">
        <div className="container mx-auto ">
          <div className="grid grid-cols-4 gap-4">
            {products.map((product) => (
              <Card key={product.id} className="w-full" type="small">
                <Card.Header image={product.url}></Card.Header>
                <Card.Body title={product.title} place={product.place} type="small"></Card.Body>
                <Card.Footer price={formatPrice(product.price)} navigate={`/product/${product.id}`} type="small"></Card.Footer>
              </Card>
            ))}
          </div>
        </div>
        </div>
       </div>
        {/* <div className="container mx-auto pt-24 pb-24 px-12 flex flex-wrap gap-4">
            <CardPlace/>
        </div> */}
        <Footer/>
    </>
  );
};

const Input = ({id, checked, onChange}) => {
  return(
    <input type="checkbox" id={id} checked={checked} onChange={onChange}/>
  )
}

const Label = ({id, text, onClick}) => {
  return(
    <label htmlFor={id} className='body2-regular ml-2' onClick={onClick}>{text}</label>
  )
}

export default Jelajah;