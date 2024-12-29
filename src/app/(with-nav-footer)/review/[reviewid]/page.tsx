import { notFound } from 'next/navigation';
import React from 'react'

const Review = ({params}: {params:{reviewId:String}}) => {
    if(Number(params.reviewId)>100){
        notFound();
    }
  return (
    <div>Review</div>
  )
}

export default Review;