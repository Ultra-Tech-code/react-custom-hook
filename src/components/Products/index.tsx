import {Fragment} from 'react'

const Product =(props:any)=>{
    const {data} = props;
    return (
      <>
      {data.map((item:any, index:number)=> (
    <Fragment key={index} > 
  <div  className='text-center border border-blue-300 my-6 p-3 rounded-md max-w-sm mx-auto'>
    <img src={item.image} alt={item.title} className="block mx-auto w-36 h-36 mb-1" />
  {item.title}
  
  </div>
  
  </Fragment> 
  
  )


) 
}
      </>
    )
}

export default Product