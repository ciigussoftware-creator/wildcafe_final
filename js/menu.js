// =======================================
// Complete Menu Data
// =======================================
const fullMenuData = {
    breakfast: [
        { id: 110,name: "Hoppers",description: "",image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800",tags: ["popular"],isVeg: false,redirectCategory: "hoppers"},
        { id: 1,name: "Hoppers",description: "",image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800",tags: [""],isVeg: false,redirectCategory: "kottu"},
        { id: 2, name: "Milk Rice", description: "", image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800", tags: [], isVeg: false ,redirectCategory: ""},
        { id: 3, name: "SL Omelette", description: "4 eggs, bacon, sausage, 2 slices of bread", price: "Rs. 850", image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800", tags: [], isVeg: false },
        { id: 4, name: "Cheese Omelette", description: "4 eggs, veggies and cheese, 2 slices of bread", price: "Rs. 750", image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800", tags: ["veg"], isVeg: true },
        { id: 5, name: "Breakfast Kottu Omelette", description: "4 eggs, veggies, 2 slices of bread", price: "Rs. 700", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800", tags: ["veg"], isVeg: true },
        { id: 6, name: "Breakfast Burger", description: "Coconut roti bun, egg, bacon, sausage & cheese", price: "Rs. 950", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800", tags: [], isVeg: false },
        { id: 7, name: "Chocolate & Banana Pancake", description: "Fresh chocolate and banana with maple syrup", price: "Rs. 750", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800", tags: ["veg"], isVeg: true },
        { id: 8, name: "Mango & Honey Pancake", description: "Fresh mango and honey", price: "Rs. 750", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800", tags: ["veg"], isVeg: true }
    ],
    kottu: [
        // ===== Jungle Kottu =====
        { id: 101, name: "Jungle Chicken Kottu", group: "Jungle Kottu", description: "Roti, oil, garlic, ginger, soya sauce, onion, veggies, and chicken", tags: ["popular"], isVeg: false },
        { id: 102, name: "Jungle Egg Kottu", group: "Jungle Kottu", description: "Classic kottu with eggs and vegetables", tags: [], isVeg: false },
        { id: 103, name: "Jungle Veg Kottu", group: "Jungle Kottu", description: "Vegetarian kottu packed with fresh vegetables", tags: [], isVeg: true },

        // ===== Thai Kottu =====
        { id: 104, name: "Thai Chicken Kottu", group: "Thai Kottu", description: "Thai-inspired kottu with chicken", tags: [], isVeg: false },
        { id: 105, name: "Thai Egg Kottu", group: "Thai Kottu", description: "Thai-style kottu with eggs", tags: [], isVeg: false },
        { id: 106, name: "Thai Veg Kottu", group: "Thai Kottu", description: "Thai-style vegetarian kottu", tags: [], isVeg: true },

        // ===== Go Wild Cheese =====
        { id: 107, name: "Go Wild Cheese Chicken Kottu", group: "Go Wild Cheese", description: "Signature kottu loaded with cheese and chicken", tags: ["popular"], isVeg: false },
        { id: 108, name: "Go Wild Cheese Egg Kottu", group: "Go Wild Cheese", description: "Cheese-loaded egg kottu", tags: [], isVeg: false },
        { id: 109, name: "Go Wild Cheese Veg Kottu", group: "Go Wild Cheese", description: "Cheesy vegetarian kottu", tags: [], isVeg: true }
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
        { id: 747, name: "Egg Burger(SL Omlette)", description: "fries on the side",modalDescription: "Coconut roti burger with SL styled omlette and fries on the side. Request to add more cheese",image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800", tags: [], isVeg: false },
        { id: 748, name: "Veg Burger", description: "fries on the side",modalDescription: "full vegetarian Coconut roti burger with fries on the side. Request to add more cheese ", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800", tags: [], isVeg: true },
        { id: 749, name: "Chicken Burger", description: "fries on the side",modalDescription: " Coconut roti burger with chicken patty and fries on the side. Request to add more cheese", image: "images/menu/coconut_roti_burger/coconut_roti_burger_chicken.png", tags: ["veg"], isVeg: false }
    ],
    sandwich: [
        { id: 750, name: "Cheese Melt Sandwich", description: "fries on the side ", modalDescription: "Toasted bread with cheese and vegetables",  image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800", tags: ["veg"], isVeg: true },
        { id: 751, name: "Egg Sandwich", description: "fries on the side", modalDescription: "Egg Sandwich with fries on the side", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800", tags: [], isVeg: false },
        { id: 752, name: "Chicken Sandwich", description: "fries on the side", modalDescription: "Toasted bread with chicken and fries", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800", tags: [], isVeg: false },
        { id: 753, name: "Veg Sandwich", description: "fries on the side", modalDescription: "Toasted bread with vegetables and fries", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800", tags: ["veg"], isVeg: true },
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
    ]
};


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}


const tabBtns = document.querySelectorAll('.tab-btn');
const menuItemsContainer = document.getElementById('menuItemsFull');
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


function displayMenuItems(category) {
    const items = fullMenuData[category] || [];
    menuItemsContainer.innerHTML = '';

    
    if (category === "kottu") {

        const grouped = {};
        items.forEach(item => {
            const group = item.group || "Others";
            if (!grouped[group]) grouped[group] = [];
            grouped[group].push(item);
        });

        Object.keys(grouped).forEach(groupName => {

            const groupId = groupName.replace(/\s+/g,'-').toLowerCase();

            menuItemsContainer.innerHTML += `
                <div class="menu-group-title">${groupName}</div>
                <div class="menu-group-grid" id="${groupId}"></div>
            `;

            const grid = document.getElementById(groupId);

            grouped[groupName].forEach(item => {
                grid.innerHTML += `
                    <div class="menu-item" data-id="${item.id}" data-category="${category}">
                        <div class="menu-item-header">
                            <h3 class="menu-item-title">${item.name}</h3>
                            <div class="menu-item-badges">
                                ${item.tags.includes('popular') ? '<span class="badge popular">Popular</span>' : ''}
                                ${item.isVeg ? '<span class="badge veg">Veg</span>' : ''}
                            </div>
                        </div>
                        ${item.description ? `<p class="menu-item-description">${item.description}</p>` : ""}
                    </div>
                `;
            });
        });

    } else {
       
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
            </div>
        `).join('');
    }

    
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const itemId = parseInt(item.getAttribute('data-id'));
            const itemCategory = item.getAttribute('data-category');
            const clickedItem = fullMenuData[itemCategory].find(i => i.id === itemId);

            // Redirect logic
            if (clickedItem.redirectCategory) {
                activeCategory = clickedItem.redirectCategory;

                tabBtns.forEach(b => b.classList.remove('active'));
                document
                    .querySelector(`.tab-btn[data-category="${clickedItem.redirectCategory}"]`)
                    .classList.add('active');

                displayMenuItems(clickedItem.redirectCategory);

                document.querySelector('.menu-section').scrollIntoView({
                    behavior: 'smooth'
                });

                return;
            }

            openModal(itemId, itemCategory);
        });
    });
}


const modal = document.getElementById('menuModal');
const closeBtn = document.getElementById('closeModal');

function openModal(itemId, category) {
    const item = fullMenuData[category].find(i => i.id === itemId);
    if (!item) return;

    document.getElementById('modalTitle').textContent = item.name;
    document.getElementById('modalDescription').textContent = item.description || "";
    if (document.getElementById('modalImage')) {
        document.getElementById('modalImage').src = item.image || "";
    }

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

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
