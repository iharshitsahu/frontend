'use client'
import toast from "react-hot-toast";
import React, { useEffect, useState } from 'react'

const feed = () => {

    const[postList, setPostList]=useState([]);


    const fetchPostData = ()=>{
        fetch('http://localhost:5000/post/getall')
        .then((response) => {
            console.log(response.status);
            return response.json();

        })
        .then((data)=>{
            console.log(data);
            setPostList(data)
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchPostData();
    }, [])

    const deletePost =(id)=>{
        fetch('http://localhost:5000/post/delete/'+id,{method: 'DELETE'})
        
        .then((response) => {
            if(response.status === 200){
                toast.success('Post Deleted')
                fetchPostData();

            }else{
                toast.error('Some Error Occured')
            }
        }).catch((err) => {
            console.log(err);
            toast.error('Some Error Occured');
        });
    }
    

  return (
    <div>
        <div className="container">
            <h1>Post Feed</h1>
            <hr />
            {
                postList.map((post)=>{
                    return <div key={post._id} className='card mb-4'>
                        <div className='card-header'>
                            <button className="btn btn-danger" onClick={()=>{deletePost(post._id)} }>Delete</button>
                            <h4 className='m-0'>Posted By:{post.username}</h4>
                            <p className='m-3 mb-4'>Posted On: {new Date(post.postedOn).toLocaleDateString}</p>
                        </div>
                        <img className='card=img-top' src={post.image} alt="" />
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default feed
