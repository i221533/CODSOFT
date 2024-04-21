import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {v4} from 'uuid';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storeData,ImageStorage } from '../../FireBase';
import {useNavigate} from 'react-router-dom'
const AddPostForm = () => {
    const [values, setValues] = useState({
        title: "",
        img: "",
        description: "",
        authorName: "",
        publishedDate: "",
        category: "" 
    });
    const navigate=useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name === "img") {
            // Update img property with the selected file
            setValues(prevValues => ({
                ...prevValues,
                img: e.target.files[0] // Access the selected file
            }));
        } else {
            // Update other properties as usual
            setValues(prevValues => ({
                ...prevValues,
                [name]: value
            }));
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            const imageRef = ref(ImageStorage, `${v4()}_${values.img.name}`);
            await uploadBytes(imageRef, values.img);

           
            const imageURL = await getDownloadURL(imageRef);

           
            await addDoc(collection(storeData, "posts"), {
                title: values.title,
                image: imageURL,
                description: values.description,
                authorName: values.authorName,
                publishedDate: values.publishedDate,
                category: values.category
            });

            // Reset form values
            setValues({
                title: "",
                img: "",
                description: "",
                authorName: "",
                publishedDate: "",
                category: ""
            });

            // Display success message
            alert('Post published successfully');
            navigate("/home");
        } catch (error) {
            console.error('Error publishing post:', error);
            // Display error message
            alert('Error publishing post. Please try again later.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F0F3F4]">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
                <h1 className='font-bold text-center'>Add New Post Here</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Enter title"
                        value={values.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                        Choose Image
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="file"
                        name="img"
                        accept="image/*"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        name="description"
                        placeholder="Enter description"
                        rows="4"
                        value={values.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
                        Author Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="author"
                        name="authorName"
                        type="text"
                        placeholder="Enter author name"
                        value={values.authorName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="publishedDate">
                        Published Date
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="publishedDate"
                        name="publishedDate"
                        type="date"
                        value={values.publishedDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Select Category
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="category"
                        name="category"
                        value={values.category}
                        onChange={handleChange}
                    >
                        <option value="">Select category</option>
                        <option value="AI">AI</option>
                        <option value="Web Dev">Web Dev</option>
                        <option value="App Dev">App Dev</option>
                        <option value="Web Design">Web Design</option>
                    </select>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Publish Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPostForm;
