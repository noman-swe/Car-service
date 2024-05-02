import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        alert('service added', data);
        // adding fetch add POST method to send data to Backend
        const url = 'http://localhost:5000/service';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    };
    return (
        <div className='w-50 mx-auto'>
            <h3>Please Add A Service.</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column'>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register('price')} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register('img')} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;