import React, { useState } from "react";
import { ImageStorage, storeData } from "../../Firebase";
import { v4 } from 'uuid';
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const AddMayAlsoLike = () => {
  const [values, setValues] = useState({
    productName: "",
    sampleImage: "",
    category: "",
    quantity: "",
    description: "",
    price: "",
  });
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'sampleImage') {
      setValues({
        ...values,
        [name]: files[0], // Assuming only one file is selected
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const imageRef = ref(ImageStorage, `${v4()}_${values.sampleImage.name}`);
            await uploadBytes(imageRef, values.sampleImage);

           
            const imageURL = await getDownloadURL(imageRef);

           
            await addDoc(collection(storeData, "MayAlsoLikeProduct"), {
                productName:values.productName,
        imageURL,
        category:values.category,
        quantity: (values.quantity),
        description:values.description,
        price:(values.price),
            });
            window.alert('Product added Successfully');
            console.log("Product added successfully!");
      
      // Reset form values
      setValues({
        productName: "",
        sampleImage: "",
        category: "",
        quantity: "",
        description: "",
        price: "",
      });
  navigate('/manage/products')
   
         } catch (error) {
                console.error('Error publishing post:', error);
                // Display error message
                alert('Error publishing Product. Please try again later.');
            }
   

      
  };

  return (
    <div className="w-full mt-20 pb-10">
      <h2 className="text-[30px] text-center   font-bold mb-4">Add Your New choice</h2>
      <form onSubmit={handleSubmit} className="px-10 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="sampleImage"
            className="block text-sm font-medium text-gray-700"
          >
            Sample Image
          </label>
          <input
            type="file"
            id="sampleImage"
            name="sampleImage"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            onChange={handleChange}   >
            <option value="">Select Category</option>
            <option value="smartWatches">Smart Watches</option>
            <option value="phones">Phones</option>
            <option value="speakers">Bluetooth Speakers</option>
            <option value="earbuds">Earbuds</option>
            <option value="headphones">Headphones</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700"
          >
            Available Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            onChange={handleChange}   ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            onChange={handleChange}   />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Add Product
          </button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default AddMayAlsoLike;
