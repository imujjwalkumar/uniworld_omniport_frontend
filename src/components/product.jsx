import React from 'react'
import CheckoutComponent from './cart';
const Products = (props) => {
    const {cart,selectedCategory,setSelectedCategory,handleAddToCart,handleRemoveFromCart}=props
    let arr = [{
        "id": 1,
        "name": "Lounge Chair",
        "price": 2000,
        "category": "Chairs"
    }, {
        "id": 2,

        "name": "Dining Chair",
        "price": 1800,
        "category": "Chairs"
    }, {
        "id": 3,
        "name": "Table1",
        "price": 3000,
        "category": "Table"
    }, {
        "id": 4,
        "name": "Table2",
        "price": 3200,
        "category": "Table"
    }, {
        "id": 5,
        "name": "Table3",
        "price": 3100,
        "category": "Table"
    }, {
        "id": 6,
        "name": "Dining Top",
        "price": 900,
        "category": "Top"
    }]
    console.log('selecihlltedCategory',selectedCategory);

    // Group products by category
    const groupedProducts = arr.reduce((acc, product) => {
        const category = product.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {});

    // // Function to handle category change
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    }
    
    

    return (
        <div className="container-fluid">
        <div className="row pt-1">
            <div className="col pr-2 border-end border-1 border-dark">
                <div>
                    {/* Dropdown menu for categories */}
                    <select className="form-select  mb-3 w-25 border border-1 border-dark" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="All">Products</option>
                        {Object.keys(groupedProducts).map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>

                    {/* Display products based on selected category */}
                    <div className='d-flex '>
                        {Object.entries(groupedProducts).map(([category, products]) => (
                            (selectedCategory === 'All' || selectedCategory === category) && (
                                <div className="card mx-5" style={{ width: '18rem' }} key={category}>
                                    <h2 className='text-center'>{category}</h2>
                                    <ul className="list-group">
                                        {products.map((product) => (
                                            <li className="list-group-item w-100 d-block" key={product.id}>
                                                <div className='d-flex justify-space-between'>
                                                    <div className='w-100'> {product.name} </div>
                                                    <div>${product.price}</div>
                                                </div>
                                                <div className='d-flex justify-content-center mt-3'>
                                                    {cart[product.id]? (
                                                        <button className="btn btn-danger" onClick={() => handleRemoveFromCart({id:product.id})}>Remove</button>
                                                    ) : (
                                                        <button className="btn btn-primary" onClick={() => handleAddToCart({id:product.id, price:product.price ,name:product.name,category:product.category})}>Add to Cart</button>
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>

            <div className="col">
                    <CheckoutComponent cart={cart}  />
            </div>
        </div>
        </div>

    );
}

export default Products
