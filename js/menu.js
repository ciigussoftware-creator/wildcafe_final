// Complete Menu Data
const fullMenuData = {
    breakfast: [
        { id: 1, name: "English Breakfast Hopper Special", description: "Plain Hopper, sausage & bacon with egg hopper, Fruit Hopper, tea/coffee or juice", price: "Rs. 1,450", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800", tags: ["popular"], isVeg: false },
        { id: 2, name: "English Breakfast Sandwich", description: "Roasted bread, egg, bacon, sausage with fries on the side", price: "Rs. 1,200", image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800", tags: [], isVeg: false },
        { id: 3, name: "SL Omelette", description: "4 eggs, bacon, sausage, 2 slices of bread", price: "Rs. 850", image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800", tags: [], isVeg: false },
        { id: 4, name: "Cheese Omelette", description: "4 eggs, veggies and cheese, 2 slices of bread", price: "Rs. 750", image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800", tags: ["veg"], isVeg: true },
        { id: 5, name: "Breakfast Kottu Omelette", description: "4 eggs, veggies, 2 slices of bread", price: "Rs. 700", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800", tags: ["veg"], isVeg: true },
        { id: 6, name: "Breakfast Burger", description: "Coconut roti bun, egg, bacon, sausage & cheese", price: "Rs. 950", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800", tags: [], isVeg: false },
        { id: 7, name: "Chocolate & Banana Pancake", description: "Fresh chocolate and banana with maple syrup", price: "Rs. 750", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800", tags: ["veg"], isVeg: true },
        { id: 8, name: "Mango & Honey Pancake", description: "Fresh mango and honey", price: "Rs. 750", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800", tags: ["veg"], isVeg: true }
    ],
    hoppers: [
        { id: 9, name: "All You Can Eat Hoppers Special", description: "Unlimited hoppers - traditional Sri Lankan comfort food", price: "Rs. 1,500", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800", tags: ["popular"], isVeg: false },
        { id: 10, name: "Plain Hopper", description: "Rice flour, coconut milk, salt", price: "Rs. 150", image: "https://images.unsplash.com/photo-1562158147-f8b5a7d0e1fc?w=800", tags: ["veg"], isVeg: true },
        { id: 11, name: "Egg Hopper", description: "Classic hopper with egg", price: "Rs. 350", image: "https://images.unsplash.com/photo-1562158147-f8b5a7d0e1fc?w=800", tags: [], isVeg: false },
        { id: 12, name: "Egg & Chicken Hopper", description: "Hopper with egg and chicken", price: "Rs. 550", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800", tags: [], isVeg: false },
        { id: 13, name: "Egg & Cheese Hopper", description: "Hopper with egg and melted cheese", price: "Rs. 450", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800", tags: ["popular"], isVeg: false },
        { id: 14, name: "Egg, Chicken & Cheese Hopper", description: "Ultimate hopper with egg, chicken and cheese", price: "Rs. 650", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800", tags: [], isVeg: false },
        { id: 15, name: "English Breakfast Hopper", description: "Hopper with bacon, sausage and egg", price: "Rs. 800", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800", tags: [], isVeg: false },
        { id: 16, name: "Bacon & Sausage Hopper", description: "With egg hopper", price: "Rs. 750", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800", tags: [], isVeg: false },
        { id: 17, name: "Fruit Hopper", description: "Sweet hopper with fresh fruits", price: "Rs. 600", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800", tags: ["veg"], isVeg: true },
        { id: 18, name: "Chocolate & Banana Hopper", description: "Sweet hopper with chocolate and banana", price: "Rs. 450", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800", tags: ["veg"], isVeg: true }
    ],
    kottu: [
        { id: 19, name: "Jungle Chicken Kottu", description: "Roti, oil, garlic, ginger, soya sauce, onion, veggies, and chicken", price: "Rs. 950", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800", tags: ["popular"], isVeg: false },
        { id: 20, name: "Jungle Egg Kottu", description: "Classic kottu with eggs and vegetables", price: "Rs. 750", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800", tags: [], isVeg: false },
        { id: 21, name: "Jungle Veg Kottu", description: "Vegetarian kottu packed with fresh vegetables", price: "Rs. 650", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800", tags: ["veg"], isVeg: true },
        { id: 22, name: "Thai Chicken Kottu", description: "Thai-inspired kottu with chicken", price: "Rs. 1,050", image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=800", tags: [], isVeg: false },
        { id: 23, name: "Thai Egg Kottu", description: "Thai-style kottu with eggs", price: "Rs. 850", image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=800", tags: [], isVeg: false },
        { id: 24, name: "Thai Veg Kottu", description: "Thai-style vegetarian kottu", price: "Rs. 750", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800", tags: ["veg"], isVeg: true },
        { id: 25, name: "Go Wild Cheese Chicken Kottu", description: "Signature kottu loaded with cheese and chicken", price: "Rs. 1,150", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2fb6c3?w=800", tags: ["popular"], isVeg: false },
        { id: 26, name: "Cheese & Egg Kottu", description: "Kottu with cheese and eggs", price: "Rs. 950", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2fb6c3?w=800", tags: [], isVeg: false },
        { id: 27, name: "Cheese & Veg Kottu", description: "Vegetarian kottu with melted cheese", price: "Rs. 850", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800", tags: ["veg"], isVeg: true }
    ],
    rice: [
        { id: 28, name: "All You Can Eat Rice & Curry", description: "Unlimited rice and curry buffet", price: "Rs. 1,500", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800", tags: ["popular"], isVeg: false },
        { id: 29, name: "Chicken Rice & Curry", description: "Authentic Sri Lankan rice and curry with chicken", price: "Rs. 950", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800", tags: [], isVeg: false },
        { id: 30, name: "Egg Rice & Curry", description: "Traditional rice and curry with egg", price: "Rs. 750", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800", tags: [], isVeg: false },
        { id: 31, name: "Veg Rice & Curry", description: "Vegetarian rice and curry", price: "Rs. 650", image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=800", tags: ["veg"], isVeg: true },
        { id: 32, name: "Wild Chicken Fried Rice", description: "Rice, veggies, garlic, ginger, soya sauce, butter, and chicken", price: "Rs. 900", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800", tags: [], isVeg: false },
        { id: 33, name: "Egg Fried Rice", description: "Classic egg fried rice", price: "Rs. 700", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800", tags: [], isVeg: false },
        { id: 34, name: "Veg Fried Rice", description: "Vegetarian fried rice", price: "Rs. 600", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800", tags: ["veg"], isVeg: true }
    ],
    roti: [
        { id: 35, name: "Coconut Roti with dhal curry & coconut sambal", description: "",modalDescription: "Flour, fresh coconut, saltchoice of protein  Egg or chicken", price: "Rs. 800", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800", tags: [], isVeg: false },
        { id: 36, name: "Coconut Roti with chicken curry ", description: "", modalDescription: "Traditional coconut roti with dhal curry", price: "Rs. 600", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800", tags: ["veg"], isVeg: true },
        { id: 37, name: "Chocolate Roti", description: "", modalDescription: "Sweet roti with chocolate", price: "Rs. 550", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800", tags: ["veg"], isVeg: true },
        { id: 38, name: "Chocolate & Banana Roti", description: "", modalDescription: "Sweet roti with chocolate and banana", price: "Rs. 650", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800", tags: ["veg"], isVeg: true },
        { id: 39, name: "Chocolate & Honey Roti", description: "", modalDescription: "Sweet roti with chocolate and banana", price: "Rs. 650", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800", tags: ["veg"], isVeg: true },
        { id: 40, name: "Mango & Honey Roti", description: "", modalDescription: "Sweet roti with mango and honey", price: "Rs. 650", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800", tags: ["veg"], isVeg: true },
        { id: 41, name: "Coconut & Honey Roti", description: "", modalDescription: "Sweet roti with coconut and honey", price: "Rs. 600", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800", tags: ["veg"], isVeg: true }
    ],
    pasta: [
        { id: 42, name: "All You Can Eat Pasta", description: "Unlimited pasta buffet", price: "Rs. 1,500", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800", tags: ["popular"], isVeg: false },
        { id: 43, name: "Chicken Curry Pasta", description: "Pasta with chicken curry, vegetables, coconut milk", price: "Rs. 1,100", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800", tags: [], isVeg: false },
        { id: 44, name: "Egg Curry Pasta", description: "Pasta with egg curry and vegetables", price: "Rs. 900", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800", tags: [], isVeg: false },
        { id: 45, name: "Kiri Hodi Pasta", description: "Pasta with traditional kiri hodi (coconut gravy)", price: "Rs. 850", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800", tags: ["veg"], isVeg: true },
        { id: 46, name: "English Pasta", description: "Bacon, sausage, egg, fresh milk, garlic & cheese", price: "Rs. 1,200", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800", tags: [], isVeg: false }
    ],
    burgers: [
        { id: 47, name: "Chicken Burger", description: "Coconut roti bun, grilled chicken, veggies, mayo, ketchup - fries on the side", price: "Rs. 900", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800", tags: [], isVeg: false },
        { id: 48, name: "Egg Burger", description: "Coconut roti bun, eggs, veggies, mayo, ketchup - fries on the side", price: "Rs. 750", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800", tags: [], isVeg: false },
        { id: 49, name: "Veg Burger", description: "Coconut roti bun, fresh veggies, mayo, ketchup - fries on the side", price: "Rs. 650", image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800", tags: ["veg"], isVeg: true },
        { id: 50, name: "Chicken Sandwich", description: "Roasted bread, grilled chicken, veggies, mayo", price: "Rs. 850", image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800", tags: [], isVeg: false },
        { id: 51, name: "Egg Sandwich", description: "Roasted bread, eggs, veggies, mayo", price: "Rs. 700", image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800", tags: [], isVeg: false },
        { id: 52, name: "Veg Sandwich", description: "Roasted bread, fresh veggies, mayo", price: "Rs. 600", image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800", tags: ["veg"], isVeg: true }
    ],
    drinks: [
        { id: 53, name: "Milk Coffee", description: "Rich Sri Lankan coffee with creamy milk", price: "Rs. 350", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800", tags: [], isVeg: true },
        { id: 54, name: "Black Coffee", description: "Pure Ceylon coffee", price: "Rs. 300", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800", tags: [], isVeg: true },
        { id: 55, name: "Milk Tea", description: "Traditional Sri Lankan tea with milk", price: "Rs. 300", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800", tags: [], isVeg: true },
        { id: 56, name: "Black Tea", description: "Pure Ceylon black tea", price: "Rs. 250", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800", tags: [], isVeg: true },
        { id: 57, name: "Fresh Juice", description: "Seasonal fresh fruit juice", price: "Rs. 450", image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=800", tags: ["veg"], isVeg: true },
        { id: 58, name: "Wild Cocodream", description: "Special coconut-based drink", price: "Rs. 600", image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=800", tags: ["popular", "veg"], isVeg: true },
        { id: 59, name: "Go Wild", description: "Signature energy drink", price: "Rs. 550", image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=800", tags: ["veg"], isVeg: true },
        { id: 60, name: "Come Wild", description: "Refreshing tropical drink", price: "Rs. 550", image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=800", tags: ["veg"], isVeg: true }
    ],
    pancake: [
        { id: 601, name: "Pancake with honey", description: "Rice flour, coconut, palm honey", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800", tags: ["veg"], isVeg: true },
        { id: 602, name: "Sweet Coconut Honey Pancake", description: "Rice flour, coconut, palm honey", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800", tags: ["veg"], isVeg: true },
        { id: 603, name: "Chocolate Pancake", description: "Rice flour, coconut, chocolate", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800", tags: ["veg"], isVeg: true },
        { id: 604, name: "Chocolate & Banana Pancake", description: "Rice flour, coconut, chocolate, banana", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800", tags: ["veg"], isVeg: true },
        { id: 605, name: "Mango & Honey Pancake", description: "Rice flour, coconut, mango, honey", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800", tags: ["veg"], isVeg: true }
    ],
    friedrice: [
        { id: 606, name: "Wild House Veg Fried Rice", description: "Rice, veggies, garlic, ginger, soya sauce, butter", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800", tags: ["veg"], isVeg: true },
        { id: 607, name: "Wild House Egg Fried Rice", description: "Rice, veggies, garlic, ginger, soya sauce, butter, choice of protein Egg or chicken", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800", tags: [], isVeg: false },
        { id: 608, name: "Wild House Chicken Fried Rice", description: "Rice, veggies, garlic, ginger, soya sauce, butter, choice of protein Egg or chicken", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800", tags: [], isVeg: false }
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
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Menu Tab Functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const menuItemsContainer = document.getElementById('menuItemsFull');

if (tabBtns.length > 0 && menuItemsContainer) {
    let activeCategory = 'breakfast';
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.getAttribute('data-category');
            displayMenuItems(activeCategory);
        });
    });
    
    displayMenuItems(activeCategory);
}

function displayMenuItems(category) {
    if (!menuItemsContainer) return;
    
    const items = fullMenuData[category] || [];
    
    if (items.length === 0) {
        menuItemsContainer.innerHTML = '<p style="text-align: center; color: var(--text-gray);">No items available in this category.</p>';
        return;
    }
    
    menuItemsContainer.innerHTML = items.map(item => `
        <div class="menu-item" data-id="${item.id}" data-category="${category}">
            <div class="menu-item-header">
                <h3 class="menu-item-title">${item.name}</h3>
                <div class="menu-item-badges">
                    ${item.tags.includes('popular') ? '<span class="badge popular">Popular</span>' : ''}
                    ${item.isVeg ? '<span class="badge veg">Veg</span>' : ''}
                </div>
            </div>
            ${item.description ? `<p class="menu-item-description">${item.description}</p>` : ""}
            <div class="menu-item-price">${item.price}</div>
        </div>
    `).join('');
    
    // Add click event listeners to menu items
    const menuItemElements = document.querySelectorAll('.menu-item');
    menuItemElements.forEach(item => {
        item.addEventListener('click', () => {
            const itemId = parseInt(item.getAttribute('data-id'));
            const itemCategory = item.getAttribute('data-category');
            openModal(itemId, itemCategory);
        });
    });
}

// Modal Functionality
const modal = document.getElementById('menuModal');
const closeBtn = document.getElementById('closeModal');

function openModal(itemId, category) {
    const item = fullMenuData[category].find(i => i.id === itemId);
    if (!item || !modal) return;
    
    document.getElementById('modalTitle').textContent = item.name;
    document.getElementById('modalDescription').textContent =
    item.modalDescription || item.description;
    document.getElementById('modalPrice').textContent = item.price;
    document.getElementById('modalImage').src = item.image;
    
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
