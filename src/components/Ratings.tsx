import React from 'react'

const Ratings = () => {
    const ratings = [
        {amount: "50+", label: "CITIES"},
        {amount: "50,000+", label: "TRANSACTIONS"},
        {amount: "3M+", label: "USERS"},
        {amount: "5", label: "USER RATINGS"},
    ]

  return (
    <div className='universal-margin flex justify-between pt-6'>
        {ratings.map((rating, i)=>{
            return (
                <div className='flex flex-col gap-3 items-center' key={i}>
                    <h1 className='text-xl font-semibold md:text-5xl'>{rating.amount}</h1>
                    <p className='text-xs text-muted-foreground md:text-lg'>{rating.label}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Ratings