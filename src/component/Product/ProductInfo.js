function ProductInfo(props){
    const product=props.product;
    return (
         <div className="right">
    <h2>{product.title}</h2>
    <h3>{product.price}</h3>
    <p>{product.description}</p>
    <button>Add to Cart</button>
  </div>
    )
}

export default ProductInfo;