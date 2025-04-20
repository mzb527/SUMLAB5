// Mock backend for products
let productData = [
    {
      id: 1,
      name: 'Sample Product',
      price: 100,
      description: 'This is a sample product.',
      image: 'https://via.placeholder.com/150',
    },
  ];
  
  // Function to get all products
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...productData]); // Return a copy of the data
      }, 500); // Simulate network delay
    });
  };
  
  // Function to add a new product
  export const addProduct = (newProduct) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newProductWithId = { ...newProduct, id: Date.now() }; // Assign a unique ID
        productData.push(newProductWithId);
        resolve(newProductWithId);
      }, 500); // Simulate network delay
    });
  };
  
  // Function to update a product
  export const updateProduct = (updatedProduct) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = productData.findIndex((product) => product.id === updatedProduct.id);
        if (index !== -1) {
          productData[index] = updatedProduct;
          resolve(updatedProduct);
        } else {
          reject(new Error('Product not found'));
        }
      }, 500); // Simulate network delay
    });
  };
  
  // Function to delete a product
  export const deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = productData.findIndex((product) => product.id === id);
        if (index !== -1) {
          productData.splice(index, 1);
          resolve(id);
        } else {
          reject(new Error('Product not found'));
        }
      }, 500); // Simulate network delay
    });
  };