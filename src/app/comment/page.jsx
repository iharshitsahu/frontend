'use client';
import React, { useState } from 'react'

const CommentPage = () => {

    const[commentArray, setCommentArray]=useState([])
    

    const addNewComment =(e)=>{
        console.log(e.code);
        if(e.code==='Enter'){
            console.log(e.target.value);
            const newComment={text:e.target.value, completed:false}
            setCommentArray([...commentArray,newComment])
            e.target.value='';
        }
    }

    const deleteComment=(index)=>{
        console.log(index);
        const temp=commentArray;
        temp.splice(index,1)
        setCommentArray([...temp])
    }
  return (
    <div>
        <div className="vh-100 bg-success-subtle" >
            <div className="container py-5">
                <h1 className="display-3 fw-bold text-center " style={{color:'#198754'}}>Comment Page</h1>
                <div className="card show">
                    <div className="card-body">
                        {
                            commentArray.map((comment,index)=>{
                                return <div key={index} className="d-flex mb-3 justify-content-between">
                                    <h4> <img src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-1024.png" alt="" style={{height:'25px', width:'25px'}} /> Harshit Sahu <br />{comment.text}</h4>
                                    <button onClick={()=>{deleteComment(index)}} className="btn btn-success">Delete Comment</button>
                                </div>
                            })
                        }
                    </div>
                    <div className="card-header">
                        <input type="text" 
                        className='form-control border-success border-3'
                        placeholder='Press Enter to add comment'
                        onKeyDown={addNewComment}
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommentPage