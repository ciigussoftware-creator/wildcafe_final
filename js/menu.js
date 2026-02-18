// =======================================
// Complete Menu Data
// =======================================
const fullMenuData = {
    breakfast: [
        { id: 110,name: "Hoppers",description: "",image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800",tags: ["popular"],isVeg: false,redirectCategory: "hoppers"},
        { id: 1,name: "Hoppers",description: "",image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800",tags: [""],isVeg: false,redirectCategory: "kottu"},
        { id: 2, name: "Milk Rice", description: "", image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800", tags: [], isVeg: false ,redirectCategory: ""},
        { id: 3, name: "SL Omelette", description: "4 eggs, bacon, sausage, 2 slices of bread", price: "", image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800", tags: [], isVeg: false },
        { id: 4, name: "Cheese Omelette", description: "4 eggs, veggies and cheese, 2 slices of bread", price: "", image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800", tags: ["veg"], isVeg: true },
        { id: 5, name: "Breakfast Kottu Omelette", description: "4 eggs, veggies, 2 slices of bread", price: "", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800", tags: ["veg"], isVeg: true },
        { id: 6, name: "Breakfast Burger", description: "Coconut roti bun, egg, bacon, sausage & cheese", price: "", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800", tags: [], isVeg: false },
        { id: 7, name: "Chocolate & Banana Pancake", description: "Fresh chocolate and banana with maple syrup", price: "", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800", tags: ["veg"], isVeg: true },
        { id: 8, name: "Mango & Honey Pancake", description: "Fresh mango and honey", price: "", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800", tags: ["veg"], isVeg: true }
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
        { id: 9, name: "All You Can Eat Hoppers Special", description: "Unlimited hoppers - traditional Sri Lankan comfort food", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800", tags: ["popular"], isVeg: false },
        { id: 10, name: "Plain Hopper", description: "Rice flour, coconut milk, salt",  image: "https://images.unsplash.com/photo-1562158147-f8b5a7d0e1fc?w=800", tags: ["veg"], isVeg: true },
        { id: 11, name: "Egg Hopper", description: "Classic hopper with egg", image: "https://images.unsplash.com/photo-1562158147-f8b5a7d0e1fc?w=800", tags: [], isVeg: false },
        { id: 12, name: "Egg & Chicken Hopper", description: "Hopper with egg and chicken", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800", tags: [], isVeg: false },
        { id: 13, name: "Egg & Cheese Hopper", description: "Hopper with egg and melted cheese",  image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800", tags: ["popular"], isVeg: false },
        { id: 14, name: "Egg, Chicken & Cheese Hopper", description: "Ultimate hopper with egg, chicken and cheese", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800", tags: [], isVeg: false },
        { id: 15, name: "Egg, Bacon & Sausage Hopper", description: "Hopper with bacon, sausage and egg",  image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800", tags: [], isVeg: false },
        { id: 17, name: "Mixed Fruit Hopper", description: "Sweet hopper with fresh fruits", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800", tags: ["veg"], isVeg: true },
        { id: 18, name: "Chocolate & Banana Hopper", description: "Sweet hopper with chocolate and banana", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800", tags: ["veg"], isVeg: true }
    ],
    rice: [
        { id: 401, name: "All You Can Eat Rice & Curry from Sigiriya", description: "", price: "", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800", tags: ["popular"], isVeg: false },
        { id: 402, name: "Chicken Rice & Curry from sigiriya", description: "", price: "", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800", tags: [], isVeg: false },
        { id: 403, name: "Egg Rice & Curry from Sigiriya", description: "", price: "", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800", tags: [], isVeg: false },
        { id: 404, name: "Veg Rice & Curry from Sigiriya", description: "", price: "", image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=800", tags: ["veg"], isVeg: true },
       
    ],
     milkrice: [
        { id: 405, name: "Milk Rice with Onion Curry ", description: "", price: "", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800", tags: ["popular"], isVeg: false },
        { id: 406, name: "Milk Rice with Chicken Curry ", description: "", price: "", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800", tags: [], isVeg: false },
        { id: 407, name: "Milk Rice with Sweet Coconut and Honey (14 oz)", description: "", price: "", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800", tags: [], isVeg: false },
       
    ],
    roti: [
        { id: 35, name: "Coconut Roti with dhal curry & coconut sambal", description: "",modalDescription: "Flour, fresh coconut, saltchoice of protein  Egg or chicken", price: "", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800", tags: [], isVeg: false },
        { id: 36, name: "Coconut Roti with chicken curry ", description: "", modalDescription: "Traditional coconut roti with dhal curry", price: "", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800", tags: ["veg"], isVeg: true },
        { id: 37, name: "Chocolate Roti", description: "", modalDescription: "Sweet roti with chocolate", price: "", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800", tags: ["veg"], isVeg: true },
        { id: 38, name: "Chocolate & Banana Roti", description: "", modalDescription: "Sweet roti with chocolate and banana", price: "", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800", tags: ["veg"], isVeg: true },
        { id: 39, name: "Chocolate & Honey Roti", description: "", modalDescription: "Sweet roti with chocolate and banana", price: "", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800", tags: ["veg"], isVeg: true },
        { id: 40, name: "Mango & Honey Roti", description: "", modalDescription: "Sweet roti with mango and honey", price:"", image:"https://images.unsplash.com/photo-1622244222444-2c3c3c3c3c3c?w=8" , tags:["veg"], isVeg:true},
        { id : 41, name : "Coconut & Honey Roti" , description : "" , modalDescription : "Sweet roti with coconut and honey" , price : "" , image : "https://images.unsplash.com/photo-1622244222444-2c3c3c3c3c3c?w=8" , tags : ["veg"] , isVeg : true }
    ],
    pasta: [
        { id: 42, name: "All You Can Eat Pasta", description: "Unlimited pasta buffet", price: "", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800", tags: ["popular"], isVeg: false },
        { id: 43, name: "Chicken Curry Pasta", description: "Pasta with chicken curry, vegetables, coconut milk", price: "", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800", tags: [], isVeg: false },
        { id: 44, name: "Egg Curry Pasta", description: "Pasta with egg curry and vegetables", price: "", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800", tags: [], isVeg: false },
        { id: 45, name: "Kiri Hodi Pasta", description: "Pasta with traditional kiri hodi (coconut gravy)", price: "", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800", tags: ["veg"], isVeg: true },
        { id: 46, name: "English Pasta", description: "Bacon, sausage, egg, fresh milk, garlic & cheese", price: "", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800", tags: [], isVeg: false }
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
        // HOT DRINKS
        { id: 53, name: "Black Coffee", description: "Strong black coffee", price: "", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800", tags: [], drinkType: "hot" },
        { id: 54, name: "Milk Coffee", description: "Coffee with milk", price: "", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800", tags: [], drinkType: "hot" },
        { id: 55, name: "Chai Tea", description: "Traditional Sri Lankan chai tea", price: "", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800", tags: [], drinkType: "hot" },
        { id: 56, name: "Black Tea", description: "Strong black tea", price: "", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800", tags: [], drinkType: "hot" },
        { id: 57, name: "Milk Tea", description: "Tea with milk and sugar", price: "", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800", tags: [], drinkType: "hot" },
        { id: 58, name: "Herbal Tea (Samahan)", description:"Traditional herbal tea made from local herbs and spices", price:"", image:"https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800", tags:[], drinkType:"hot"},
        { id: 59, name: "Green Tea", description: "Fresh green tea", price: "", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800", tags: [], drinkType: "hot" },
        { id: 60, name: "Honey Lemon Tea", description: "Honey and lemon tea blend", price: "", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800", tags: [], drinkType: "hot" },
        { id: 61, name: "Hibiscus Tea", description: "Sour hibiscus tea with natural sweetness", price: "", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800", tags: [], drinkType: "hot" },
        { id: 62, name: "Blue Pea Tea", description: "Blue pea flower tea with natural blue color", price: "", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800", tags: [], drinkType: "hot" },

        // COOL DRINKS
        { id: 63, name: "Iced Coffee", description: "Cold brew coffee served over ice", price: "", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800", tags: [], drinkType: "cool" },
        { id: 64, name: "Iced Tea", description: "Chilled tea served over ice", price: "", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800", tags: [], drinkType: "cool" },

        { id: 65, name: "Pineapple", description: "Fresh pineapple juice", price: "", image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=800", tags: ["veg"], drinkType: "cool" },
        { id: 66, name: "Mango", description: "Fresh mango juice", price: "", image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=800", tags: ["veg"], drinkType: "cool" },
        { id: 67, name: "Passion Fruit", description: "Fresh passion fruit juice", price: "", image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=800", tags: ["veg"], drinkType: "cool" },
        { id: 68, name: "Watermelon", description: "Fresh watermelon juice", price: "", image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=800", tags: ["veg"], drinkType: "cool" },
        { id: 69, name: "Banana", description: "Fresh banana juice", price: "", image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=800", tags: ["veg"], drinkType: "cool" },
        { id: 70, name: "Papaya", description: "Fresh papaya juice", price: "", image:"https://images.unsplash.com/photo-1546548970-71785318a17b?w=800", tags:["veg"], drinkType:"cool"},
        { id: 71, name: "Lime", description: "Fresh lime juice", price: "", image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=800", tags: ["veg"], drinkType: "cool" },
        { id: 72, name: "Mixed Fruit", description: "Mixed fruit juice", price: "", image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=800", tags: ["veg"], drinkType: "cool" },
        { id: 73, name: "Carrot", description: "Fresh carrot juice", price: "", image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=800", tags: ["veg"], drinkType:"cool"},
        { id: 74, name:"Banana & Carrot", description:"Banana and carrot juice mix", price:"", image:"https://images.unsplash.com/photo-1546548970-71785318a17b?w=800", tags:["veg"], drinkType:"cool"},
        { id: 75, name:"Mango & Carrot" , description:"Mango and carrot juice mix" , price:"", image:"https://images.unsplash.com/photo-1546548970-71785318a17b?w=800" , tags:["veg"] , drinkType:"cool"},
        { id: 76, name:"SL Lemonade" , description:"Sri Lankan style lemonade with local ingredients" , price:"", image:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800" , tags:["veg"] , drinkType:"cool"},

        { id: 77, name: "Coca-Cola", description: "Classic Coca-Cola", price: "", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800", tags: [], drinkType: "cool" },
        { id: 78, name: "Sprite", description: "Refreshing Sprite", price: "", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800", tags: [], drinkType: "cool" },
        { id: 79, name: "Ginger Beer", description: "Spicy ginger beer", price: "", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800", tags: [], drinkType: "cool" },
        { id: 80, name: "Ginger Ale", description: "Mild ginger ale", price: "", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800", tags: [], drinkType: "cool" },
        { id: 81, name: "Soda", description: "Refreshing soda", price: "", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800", tags: [], drinkType: "cool" },
        { id: 82, name: "Water (500ml)", description:"Bottled water in 500ml size", price:"", image:"https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=800", tags:[], drinkType:"cool"},
        { id: 83, name: "Water (1000ml)", description: "Bottled water in 1000ml size", price: "", image: "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=800", tags: [], drinkType: "cool" },
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
    ],
    smoothie: [
        { id: 901, name: "Wild CocoDream", description: "Rich Sri Lankan coffee with creamy milk", price: "", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800", tags: [], isVeg: true },
        { id: 902, name: "Go Wild", description: "Pure Ceylon coffee", price: "", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800", tags: [], isVeg: true },
        { id: 903, name: "Come Wild", description: "Traditional Sri Lankan tea with milk", price: "", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800", tags: [], isVeg: true }
    ],
    desserts: [
        { id: 904, name: "Creme Brulee", description: "Rich Sri Lankan coffee with creamy milk", price: "", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800", tags: [], isVeg: true },
        { id: 905, name: "Chocolate & Banana Hoppers", description: "Pure Ceylon coffee", price: "", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800", tags: [], isVeg: true },
        { id: 906, name: "Fruits Hoppers", description: "Traditional Sri Lankan tea with milk", price: "", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800", tags: [], isVeg: true },
        { id: 907, name: "Fruit Salad", description: "Rich Sri Lankan coffee with creamy milk", price: "", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800", tags: [], isVeg: true },
        { id: 908, name: "Caramel Pudding", description: "Pure Ceylon coffee", price: "", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800", tags: [], isVeg: true },
        { id: 909, name: "Sweet Coconut Honey Pancake", description: "Traditional Sri Lankan tea with milk", price: "", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800", tags: [], isVeg: true },
        { id: 910, name: "Sweet Coconut Honey Milk Rice (70z)", description: "Rich Sri Lankan coffee with creamy milk", price: "", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800", tags: [], isVeg: true },
        { id: 911, name: "Chocolate Roti", description: "Pure Ceylon coffee", price:"", image:"https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800" , tags:[], isVeg:true},
        { id :  912, name :  "Chocolate & Banana Roti" , description :  "Traditional Sri Lankan tea with milk" , price : "" , image :  "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800" , tags : [] , isVeg : true },
        { id :  913, name :  "Mango & Honey Roti" , description :  "Rich Sri Lankan coffee with creamy milk" , price : "" , image :  "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800" , tags : [] , isVeg : true },
        { id :  914, name :  "Sweet Coconut Honey Roti" , description :  "Pure Ceylon coffee" , price : "" , image :  "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800" , tags : [] , isVeg : true },
        { id: 915, name: "Pudding", description: "Traditional Sri Lankan tea with milk", price: "", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800", tags: [], isVeg: true }
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

// =======================================
// Tabs + Drink Filters
// =======================================
const mainTabBtns = document.querySelectorAll('.tab-btn[data-category]');
const drinkFilterWrap = document.getElementById('drinkFilters');
const drinkBtns = document.querySelectorAll('.drink-btn');
const menuItemsContainer = document.getElementById('menuItemsFull');

let activeCategory = 'breakfast';
let activeDrinkFilter = 'all';


// MAIN CATEGORY TAB CLICK
mainTabBtns.forEach(btn => {
btn.addEventListener('click', () => {
    mainTabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    activeCategory = btn.getAttribute('data-category');

    // Show/hide drink filter row
    if (activeCategory === 'drinks') {
    if (drinkFilterWrap) drinkFilterWrap.style.display = 'flex';
      // reset to ALL whenever entering drinks
        setActiveDrinkFilter('hot');
    } else {
    if (drinkFilterWrap) drinkFilterWrap.style.display = 'none';
        activeDrinkFilter = 'all';
    }

    displayMenuItems(activeCategory);
});
});

// DRINK FILTER CLICK
drinkBtns.forEach(btn => {
btn.addEventListener('click', () => {
    const type = btn.getAttribute('data-drink');
    setActiveDrinkFilter(type);
    displayMenuItems('drinks');
});
});

function setActiveDrinkFilter(type) {
    activeDrinkFilter = type;
    drinkBtns.forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector(`.drink-btn[data-drink="${type}"]`);
if (activeBtn) activeBtn.classList.add('active');
}


displayMenuItems(activeCategory);

// =======================================
// Render Items (keeps same card format)
// =======================================
function displayMenuItems(category) {
  if (!menuItemsContainer) return;

  let items = fullMenuData[category] || [];

  // Apply drink filter only for drinks
  if (category === 'drinks' && activeDrinkFilter !== 'all') {
    items = items.filter(i => i.drinkType === activeDrinkFilter);
  }

  // Empty
  if (items.length === 0) {
    menuItemsContainer.innerHTML =
      '<p style="text-align:center; color: var(--text-gray);">No items available in this category.</p>';
    return;
  }

  menuItemsContainer.innerHTML = '';

  // Special grouping for kottu (your existing logic)
  if (category === "kottu") {
    const grouped = {};
    items.forEach(item => {
      const group = item.group || "Others";
      if (!grouped[group]) grouped[group] = [];
      grouped[group].push(item);
    });

    Object.keys(grouped).forEach(groupName => {
      const groupId = groupName.replace(/\s+/g, "-").toLowerCase();

      menuItemsContainer.innerHTML += `
        <div class="menu-group-title">${groupName}</div>
        <div class="menu-group-grid" id="${groupId}"></div>
      `;

      const grid = document.getElementById(groupId);

      grouped[groupName].forEach(item => {
        grid.innerHTML += menuCardTemplate(item, category);
      });
    });
  } else {
    // Normal grid (same format)
    menuItemsContainer.innerHTML = items.map(item => menuCardTemplate(item, category)).join('');
  }

  // Click handlers
  document.querySelectorAll('.menu-item').forEach(card => {
    card.addEventListener('click', () => {
      const itemId = parseInt(card.getAttribute('data-id'));
      const itemCategory = card.getAttribute('data-category');
      const clickedItem = (fullMenuData[itemCategory] || []).find(i => i.id === itemId);

      // Redirect logic (your breakfast cards)
      if (clickedItem && clickedItem.redirectCategory) {
        activeCategory = clickedItem.redirectCategory;

        mainTabBtns.forEach(b => b.classList.remove('active'));
        const tabToActivate = document.querySelector(`.tab-btn[data-category="${clickedItem.redirectCategory}"]`);
        if (tabToActivate) tabToActivate.classList.add('active');

        if (activeCategory === 'drinks') {
          if (drinkFilterWrap) drinkFilterWrap.style.display = 'flex';
          setActiveDrinkFilter('all');
        } else {
          if (drinkFilterWrap) drinkFilterWrap.style.display = 'none';
        }

        displayMenuItems(clickedItem.redirectCategory);

        document.querySelector('.menu-section')?.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      openModal(itemId, itemCategory);
    });
  });
}

function menuCardTemplate(item, category) {
    const price = item.price ? item.price : "";
  return `
    <div class="menu-item" data-id="${item.id}" data-category="${category}">
        <div class="menu-item-header">
        <h3 class="menu-item-title">${item.name}</h3>
        <div class="menu-item-badges">
          ${item.tags?.includes("popular") ? '<span class="badge popular">Popular</span>' : ""}
          ${item.isVeg ? '<span class="badge veg">Veg</span>' : ""}
        </div>
      </div>
      ${item.description ? `<p class="menu-item-description">${item.description}</p>` : ""}
      <div class="menu-item-price">${price}</div>
    </div>
  `;
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
