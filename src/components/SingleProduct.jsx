import React from 'react'
import { Card,CardTitle,CardBody,CardSubtitle,CardText} from 'reactstrap';

export const SingleProduct = ({id,title,category,description,price,thumbnail}) => {
    //console.log(title);
  return (
    <div>
  <Card style={{width: '18rem',height:'100%'}}>
  <img className='img'  alt={title} src={thumbnail} style={{width: 'auto', height: '200px'}}/>
  <CardBody style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
    <CardTitle tag="h5">
      {title}
    </CardTitle>
    <CardSubtitle className=" mb-2 " tag="h6">
      {category}
    </CardSubtitle>
    <CardText>
      {description}
    </CardText>
    <CardText>
      Price: {price}€
    </CardText>
    <button className="btn btn-primary m-1 ">
         Add to cart
    </button> 
  </CardBody>
</Card>
    </div>
  )
}