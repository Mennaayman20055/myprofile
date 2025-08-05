
    function showMore() {
      document.getElementById('part2').style.display = 'block';
    }
    function validateForm() {
            let name = document.getElementById('name').value.trim();
            let email = document.getElementById('email').value.trim();

            if (name === '' || email === '') {
                alert('Please fill all fields');
                return;
            }

            if (!email.includes('@')) {
                alert('Email must contain "@"');
                return;
            }

            alert('Message sent successfully!');
          
        }
       
/*function filterMackup() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toLowerCase();
  const items = document.querySelectorAll('.menu-item');
  
  items.forEach(item => {
    const coffeeName = item.getAttribute('data-name');
    if (coffeeName.startsWith(filter)) {
      item.style.display = 'flex'; 
    } else {
      item.style.display = 'none';
    }
  });
    document.querySelectorAll('.menu-items-left, .menu-items-right').forEach(section => {
    const hasVisibleItems = Array.from(section.querySelectorAll('.menu-item'))
      .some(item => item.style.display !== 'none');
    
    section.style.display = hasVisibleItems ? 'block' : 'none';
  });
}
  */
 /*document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            const menuContainer = document.getElementById('menu-items');

            const makeupProducts = data.products.filter(product => 
                product.category.toLowerCase().includes('skincare') ||
                product.category.toLowerCase().includes('fragrances') ||
                product.title.toLowerCase().includes('makeup') ||
                product.description.toLowerCase().includes('makeup')
            );

            makeupProducts.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('menu-item');
                productDiv.setAttribute('data-name', product.title.toLowerCase());

                productDiv.innerHTML = `
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <div>
                        <h3>${product.title} <span class="primary-text">$${product.price}</span></h3>
                        <input type="checkbox">
                    </div>
                `;

                menuContainer.appendChild(productDiv);
            });
        })
        .catch(err => console.error('Failed to fetch makeup products from API', err));
})
  */
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            const menuContainer = document.getElementById('menu-items');

            const foodProducts = data.products.filter(product => 
                product.category.toLowerCase().includes('groceries') ||
                product.title.toLowerCase().includes('food') ||
                product.description.toLowerCase().includes('food') ||
                product.title.toLowerCase().includes('meal') ||
                product.description.toLowerCase().includes('meal') ||
                product.title.toLowerCase().includes('snack') ||
                product.description.toLowerCase().includes('snack')
            );

            foodProducts.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('menu-item');
                productDiv.setAttribute('data-name', product.title.toLowerCase());

                productDiv.innerHTML = `
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <div>
                        <h3>${product.title} <span class="primary-text">$${product.price}</span></h3>
                        <p>${product.description}</p>
                        <input type="checkbox">
                    </div>
                `;

                menuContainer.appendChild(productDiv);
            });
        })
        .catch(err => console.error('Failed to fetch food products from API', err));
});



