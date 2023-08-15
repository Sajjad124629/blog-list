import React from 'react';
import blogData from '../data/blogData.json';
import Cart from '../component/cart/Cart';
const Blog = () => {
   
    return (
        <>
            <div className='flex justify-center mt-16'>
                <h1 className='text-4xl'> Blog List!!😒😒</h1>
            </div>
            <div className='container'>

                <div className='grid grid-cols-3 gap-3 mt-3 mb-3'>
                    {
                    blogData.map(post => (<Cart key={post.id} post={post}/>))
                    }
                </div>
            </div>

        </>
    );
};

export default Blog;