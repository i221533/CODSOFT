import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { collection, getDoc, updateDoc, addDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storeData, ImageStorage } from '../../FireBase';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [Val, setVal] = useState({});
    const [values, setValues] = useState({
        title: "",
        img: "",
        description: "",
        authorName: "",
        publishedDate: "",
        category: ""
    });
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const docRef = doc(storeData, 'posts', id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setVal({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error('Error getting document:', error);
            }
        };

        getData();
    }, [id]);

    useEffect(() => {
        if (Val.title) {
            setValues({
                title: Val.title,
                description: Val.description,
                img: Val.image,
                authorName: Val.authorName,
                publishedDate: Val.publishedDate,
                category: Val.category
            });
           
        }
    }, [Val]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "img") {
            setImageFile(e.target.files[0]);
        } else {
            setValues(prevValues => ({
                ...prevValues,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let imageURL = Val.image;

            if (imageFile) {
                const imageRef = ref(ImageStorage, `${v4()}_${imageFile.name}`);
                await uploadBytes(imageRef, imageFile);
                imageURL = await getDownloadURL(imageRef);
            }

            await updateDoc(doc(storeData, 'posts', id), {
                title: values.title,
                image: imageURL,
                description: values.description,
                authorName: values.authorName,
                publishedDate: values.publishedDate,
                category: values.category
            });

            setValues({
                title: "",
                img: "",
                description: "",
                authorName: "",
                publishedDate: "",
                category: ""
            });

            alert('Post updated successfully');
            navigate("/home");
        } catch (error) {
            console.error('Error updating post:', error);
            alert('Error updating post. Please try again later.');
        }
    };

    return (
        <div className="p-10 min-h-screen flex items-center justify-center bg-[#F0F3F4]">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
                <h1 className='font-bold text-center'>Edit Post Here</h1>
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
                        value={imageFile}
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
                        className="bg-blue-500 w-[150px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Update Post
                    </button>
                    <Link to="/manage" className="bg-blue-500 w-[150px] text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Back</Link>
                </div>
            </form>
        </div>
    );
};

export default EditPost;
