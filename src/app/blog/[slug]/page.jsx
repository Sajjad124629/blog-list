import Link from 'next/link';
import React from 'react';
import blogData from '../../data/blogData.json';
import Image from 'next/image';
const Post = ({params}) => {
    const ID  = params.slug;
    // console.log(ID);
    const postDetails = blogData.find(item =>item.id === parseInt(ID))
    // console.log(postDetails);
    return (
        <div>
            <div className='flex justify-center mt-16'>
                <h1 className='text-4xl'>{postDetails.title}</h1>
            </div>
            <div className="container flex justify-center mt-10 mb-10">
                <Image width={600} height={600} src={postDetails.img} alt={postDetails.title} />
            </div>
            <div className='container text-center'>
                <p>Date: <span className="text-gray-200">{postDetails.date}</span></p>
                <p>{postDetails.content}</p>
                <button className="mt-5 pl-8 pr-8 pt-4 pb-4 rounded-full bg-orange-400 cursor-pointer">
            <Link href="/blog">Go to Blog</Link>
          </button>
            </div>
        </div>
    );
};

export default Post;