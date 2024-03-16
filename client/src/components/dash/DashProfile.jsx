

import React, { Component , useEffect, useState } from 'react';
import  toast from 'react-hot-toast';
import axios from 'axios';


import {useGetUserQuery, useUpdateUserMutation} from '../../store/api/userQuery';







const DashProfile = () => {
    const [updatedata , setupadtedata] = useState(false)
    const [user, setUser] = useState({
        username: '',
        image: '',
        email: '',
        phone:''
    });
    const [imagePath , setImagePath] = useState({})
    const { data, error, isLoading, refetch } = useGetUserQuery();
    const [updateUser, { error: updateError, isLoading: isUpdateLoading  }] = useUpdateUserMutation();

    //  console.log(data)
    useEffect(() => {
        if (data) {
            setUser(data);
        }
    }, [data]);

    useEffect(()=>{
        if(updatedata){
            refetch()
            setupadtedata(false)
        }
    }, [updatedata])

    const handleImageChange =(e) =>{
        setImagePath({...imagePath , [e.target.name] : e.target.files[0] });
        const fileUrl = URL.createObjectURL(e.target.files[0]);
        setUser({...user , image : fileUrl})

    }
    const handlechange = (e) => {
                
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    


    const InsertImageToCloudinary = async () => {
      const cloudinaryPreset = 'y2xzakhz'; // Replace with your preset name
      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/dbexsjmb3/image/upload`;
    
      // Create a FormData instance to package the file for sending
      const formData = new FormData();
      formData.append('file', imagePath.image);
      formData.append('upload_preset', cloudinaryPreset);
    
      // Send the POST request
      try {
        const response = await axios.post(cloudinaryUrl, formData);
        console.log(response.data.secure_url); // The URL of the uploaded image
        return response.data.secure_url
      } catch (error) {
        console.error(error);
      }
    };



    const handleUpdate = async () => {


        
        if(imagePath.image){
            const url =  await InsertImageToCloudinary();
        const obj = {
            ...user,
            image : url,
        }
        try {
            const update = await updateUser(obj).unwrap();
            if(update){
                setupadtedata(true)
                toast.success('Your Profile updated successfully')
            }             // if (updateUser){
            // }
            
        } catch (error) {
            console.log(error.message)
        }
        }else{
            try {

                const update = await updateUser(user).unwrap(); 
                console.log(update);  
                if(update.messageValid){
                    toast.error(update.messageValid)
                }if (update.message) {
                    setupadtedata(true)
                    toast.success('Your Profile updated successfully')
                } 

            } catch (error) {
                console.log(error.message);
            }
            }
    }

    const handleDeleteImage = () => {
        const deleteImage = updateUser({...user , image : ''})
        if(deleteImage){
            setupadtedata(true)
            toast.success('Your Image Deleted successfully')
        }
    }


    return (
        <>

       <main class="   min-h-screen py-1 md:w-2/3 lg:w-3/4 flex justify-center">
        <div class="p-2 md:p-4">
            <div class="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 class="pl-6 text-2xl font-bold sm:text-xl"> Profile</h2>

                <div class="grid max-w-2xl mx-auto mt-8">
                <div class="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <input
                    type="file"
                    id='imageUpload'
                    name="image"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}/>
                <img
                    class="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                    src={user.image ? user.image : 'https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'}
                    alt="Bordered avatar"
                    
                />
                <div class="flex flex-col space-y-5 sm:ml-8">
                    <button
                    onClick={() => document.getElementById('imageUpload').click()}
                    class="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                    >
                    Change picture
                    </button>
                    <button
                    onClick={handleDeleteImage}
                    type="button"
                    class="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                    >
                    Delete picture
                    </button>
                </div>
                </div>

                    <div class="items-center mt-8 sm:mt-14 text-[#202142]">

                        <div
                            class="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                            <div class="w-full">
                                <label for="first_name"
                                    class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                    first name</label>
                                <input 
                                onChange={handlechange}
                                type="text" name="username"
                                defaultValue={user.username}
                                    class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="Your first name" />
                            </div>



                        </div>

                        <div class="mb-2 sm:mb-6">
                            <label for="email"
                                class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                email</label>
                            <input
                            onChange={handlechange}
                            type="email" name="email"
                            defaultValue={user.email}
                                class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="your.email@mail.com" required/>
                        </div>

                        <div class="mb-2 sm:mb-6">
                            <label for="phone"
                                class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Profession</label>
                            <input
                            onChange={handlechange}
                            type="text" name="phone"
                            defaultValue={user.phone}
                                class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="your Number" required/>
                        </div>


                        <div class="flex justify-end">
                            <button type="button"
                                onClick={handleUpdate}
                                class="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Update</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>
        
        </>
    );
}

export default DashProfile;