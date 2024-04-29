import React,{useState} from 'react'
import SubMenuCategory from './SubMenuCategory';
import ProductList from './ProductList';

const Products = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (i) => {
      setIndex(i);
  };
  return (
    <div className='w-full py-5'>
    <div className='max-w-[1140px] mx-auto'>
       <div>
        <h1 className='font-bold  py-2 border-b border-gray-400 text-[30px] text-center'>Bestsellers Products</h1>
       </div>
       <div>
       <div className='w-full py-5'>
            <div className='max-w-[1140px] mx-auto'>
                <div className='flex flex-wrap justify-center items-center gap-2'>
                    <div
                        className={`${index === 0 ? 'p-1 text-white px-6 bg-green-600 text-[18px] cursor-pointer border border-gray-500 rounded-3xl flex justify-center items-center' : 'p-1 px-6 text-[18px] cursor-pointer border border-gray-500 rounded-3xl flex justify-center items-center'}`}
                        onClick={() => handleClick(0)}
                    >
                        <p>All</p>
                    </div>

                    <div
                        className={`${index === 1 ? 'p-1 text-white px-6 bg-green-600 text-[18px] cursor-pointer border border-gray-500 rounded-3xl flex justify-center items-center' : 'p-1 px-6 text-[18px] cursor-pointer border border-gray-500 rounded-3xl flex justify-center items-center'}`}
                        onClick={() => handleClick(1)}
                    >
                        <p>Phones</p>
                    </div>
                    <div
                        className={`${index === 2 ? 'p-1 text-white px-6 bg-green-600 text-[18px] cursor-pointer border border-gray-500 rounded-3xl flex justify-center items-center' : 'p-1 px-6 text-[18px] cursor-pointer border border-gray-500 rounded-3xl flex justify-center items-center'}`}
                        onClick={() => handleClick(2)}
                    >
                        <p>Headphones</p>
                    </div>
                    <div
                        className={`${index === 3 ? 'p-1 text-white px-6 bg-green-600 text-[18px] cursor-pointer border border-gray-500 rounded-3xl flex justify-center items-center' : 'p-1 px-6 text-[18px] cursor-pointer border border-gray-500 rounded-3xl flex justify-center items-center'}`}
                        onClick={() => handleClick(3)}
                    >
                        <p>Bluetooth Speakers</p>
                    </div>

                    <div
                        className={`${index === 4 ? 'p-1 text-white px-6 bg-green-600 text-[18px] cursor-pointer border border-gray-500 rounded-3xl flex justify-center items-center' : 'p-1 px-6 text-[18px] cursor-pointer border border-gray-500 rounded-3xl flex justify-center items-center'}`}
                        onClick={() => handleClick(4)}
                    >
                        <p>Earbuds</p>
                    </div>
                    <div
                        className={`${index === 5 ? 'p-1 text-white px-6 bg-green-600 text-[18px] cursor-pointer border border-gray-500 rounded-3xl flex justify-center items-center' : 'p-1 px-6 text-[18px] cursor-pointer border border-gray-500 rounded-3xl flex justify-center items-center'}`}
                        onClick={() => handleClick(5)}
                    >
                        <p>Smart Watches</p>
                    </div>              
                </div>
            </div>
        </div>
       </div>
       <div>
       <ProductList category={index === 0 ? 'All' : ['phones', 'headphones', 'speakers','earbuds','smartWatches'][index - 1]} />
       </div>
    </div>
      
    </div>
  )
}

export default Products;
