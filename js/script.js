// Menu Data
const menuData = {
    breakfast: [
        {
            id: 1,
            name: "English Breakfast Hopper Special",
            description: "Plain Hopper, sausage & bacon with egg hopper, Fruit Hopper, tea/coffee or juice",
            price: "Rs. 1,450",
            image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800",
            tags: ["popular"],
            isVeg: false
        },
        {
            id: 2,
            name: "Wild Breakfast Bowl",
            description: "Scrambled eggs, avocado, grilled tomatoes, mushrooms, beans, and sourdough toast",
            price: "Rs. 1,200",
            image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800",
            tags: [],
            isVeg: false
        },
        {
            id: 3,
            name: "Banana Pancakes",
            description: "Fluffy pancakes with caramelized bananas, maple syrup, and whipped cream",
            price: "Rs. 780",
            image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800",
            tags: ["veg"],
            isVeg: true
        },
        {
            id: 4,
            name: "Chocolate & Banana Hopper",
            description: "Sweet hopper filled with chocolate and fresh banana slices",
            price: "Rs. 450",
            image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800",
            tags: ["veg"],
            isVeg: true
        }
    ],
    hoppers: [
        {
            id: 5,
            name: "Egg Hopper",
            description: "Traditional Sri Lankan rice flour hopper with a perfectly cooked egg in the center",
            price: "Rs. 350",
            image: "https://images.unsplash.com/photo-1562158147-f8b5a7d0e1fc?w=800",
            tags: [],
            isVeg: false
        },
        {
            id: 6,
            name: "Egg & Cheese Hopper",
            description: "Classic egg hopper topped with melted cheese",
            price: "Rs. 450",
            image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800",
            tags: ["popular"],
            isVeg: false
        },
        {
            id: 7,
            name: "Plain Hopper",
            description: "Traditional crispy bowl-shaped pancake",
            price: "Rs. 150",
            image: "https://images.unsplash.com/photo-1562158147-f8b5a7d0e1fc?w=800",
            tags: ["veg"],
            isVeg: true
        },
        {
            id: 8,
            name: "Chocolate & Banana Hopper",
            description: "Sweet hopper filled with chocolate and fresh banana slices",
            price: "Rs. 450",
            image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800",
            tags: ["veg"],
            isVeg: true
        }
    ],
    kottu: [
        {
            id: 9,
            name: "Jungle Chicken Kottu",
            description: "Roti, oil, garlic, ginger, soya sauce, onion, veggies, and chicken - a true Sri Lankan street-food icon",
            price: "Rs. 950",
            image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800",
            tags: ["popular"],
            isVeg: false
        },
        {
            id: 10,
            name: "Go Wild Cheese Chicken Kottu",
            description: "Our signature kottu loaded with melted cheese and juicy chicken pieces",
            price: "Rs. 1,150",
            image: "https://images.unsplash.com/photo-1603894584373-5ac82b2fb6c3?w=800",
            tags: ["popular"],
            isVeg: false
        },
        {
            id: 11,
            name: "Thai Chicken Kottu",
            description: "Kottu with Thai-inspired flavors, packed with vegetables and tender chicken",
            price: "Rs. 1,050",
            image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=800",
            tags: [],
            isVeg: false
        },
        {
            id: 12,
            name: "Jungle Veg Kottu",
            description: "Vegetarian kottu packed with fresh vegetables and aromatic spices",
            price: "Rs. 750",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
            tags: ["veg"],
            isVeg: true
        }
    ],
    rice: [
        {
            id: 13,
            name: "Chicken Rice & Curry",
            description: "Authentic Sri Lankan rice and curry with chicken and assorted vegetables",
            price: "Rs. 950",
            image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800",
            tags: ["popular"],
            isVeg: false
        },
        {
            id: 14,
            name: "Egg Rice & Curry",
            description: "Traditional rice and curry with hard-boiled egg and vegetables",
            price: "Rs. 750",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
            tags: [],
            isVeg: false
        },
        {
            id: 15,
            name: "Veg Rice & Curry",
            description: "Authentic vegetarian rice and curry with assorted fresh vegetables",
            price: "Rs. 650",
            image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=800",
            tags: ["veg"],
            isVeg: true
        },
        {
            id: 16,
            name: "Wild Chicken Fried Rice",
            description: "Rice, veggies, garlic, ginger, soya sauce, butter, and chicken",
            price: "Rs. 900",
            image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
            tags: [],
            isVeg: false
        }
    ]
};

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
if (navMenu) {
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
    }
});

// Menu Tab Functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const menuItems = document.getElementById('menuItems');

if (tabBtns.length > 0 && menuItems) {
    // Set default active category
    let activeCategory = 'breakfast';
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get category
            activeCategory = btn.getAttribute('data-category');
            
            // Display menu items
            displayMenuItems(activeCategory);
        });
    });
    
    // Initial display
    displayMenuItems(activeCategory);
}

function displayMenuItems(category) {
    if (!menuItems) return;
    
    const items = menuData[category] || [];
    
    if (items.length === 0) {
        menuItems.innerHTML = '<p style="text-align: center; color: var(--text-gray);">No items available in this category.</p>';
        return;
    }
    
    menuItems.innerHTML = items.map(item => `
        <div class="menu-item" data-id="${item.id}">
            <div class="menu-item-header">
                <h3 class="menu-item-title">${item.name}</h3>
                <div class="menu-item-badges">
                    ${item.tags.includes('popular') ? '<span class="badge popular">Popular</span>' : ''}
                    ${item.isVeg ? '<span class="badge veg">Veg</span>' : ''}
                </div>
            </div>
            <p class="menu-item-description">${item.description}</p>
            <div class="menu-item-price">${item.price}</div>
        </div>
    `).join('');
    
    // Add click event listeners to menu items
    const menuItemElements = document.querySelectorAll('.menu-item');
    menuItemElements.forEach(item => {
        item.addEventListener('click', () => {
            const itemId = parseInt(item.getAttribute('data-id'));
            openModal(itemId, category);
        });
    });
}

// Modal Functionality
const modal = document.getElementById('menuModal');
const closeBtn = document.getElementById('closeModal');

function openModal(itemId, category) {
    const item = menuData[category].find(i => i.id === itemId);
    if (!item || !modal) return;
    
    document.getElementById('modalTitle').textContent = item.name;
    document.getElementById('modalDescription').textContent = item.description;
    document.getElementById('modalPrice').textContent = item.price;
    document.getElementById('modalImage').src = item.image;
    
    // Add tags
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = '';
    
    if (item.tags.includes('popular')) {
        tagsContainer.innerHTML += '<span class="modal-tag badge popular">Popular</span>';
    }
    if (item.isVeg) {
        tagsContainer.innerHTML += '<span class="modal-tag badge veg">Vegetarian</span>';
    }
    
    modal.style.display = 'block';
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

if (modal) {
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
