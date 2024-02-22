const products = [
    { id: 1, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
    { id: 2, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] },
    { id: 3, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] },
    // More products...
];

// Get references to HTML elements
const categoryFilter = document.getElementById('categoryFilter');
const tagFilters = document.querySelectorAll('.tagFilter');
const productListings = document.getElementById('productListings');
const noResults = document.getElementById('noResults');

// Function to render product listings
function renderProducts(products) {
    productListings.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('main')
        productElement.innerHTML = `

      <div class="productName">${product.name}</></div>
      <div class="productCategory">Category: ${product.category}</div>
      <div class="productPrice">Price: ${product.price}</div>
      <div class="productTags">Tags: ${product.tags.join(', ')}</div>
    `;
        productListings.appendChild(productElement);
    });
}

// Function to filter products 
function filterProducts() {
    const category = categoryFilter.value;
    const selectedTags = Array.from(tagFilters).filter(tag => tag.checked).map(tag => tag.value);

    let filteredProducts = products;

    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    if (selectedTags.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            return selectedTags.every(tag => product.tags.includes(tag));
        });
    }

    renderProducts(filteredProducts);

    if (filteredProducts.length === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
}

categoryFilter.addEventListener('change', filterProducts);
tagFilters.forEach(tagFilter => {
    tagFilter.addEventListener('change', filterProducts);
});

renderProducts(products);