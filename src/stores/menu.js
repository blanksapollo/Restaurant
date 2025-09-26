import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu',  {
    state: () => {
       const menu = {
  1:{
    name: 'Butter Chicken',
    image: '/image/menu/Butter-chicken.jpg',
    price: 600,
    description: 'A creamy and flavorful chicken dish made with a rich tomato-based sauce, infused with butter and aromatic spices. Served with basmati rice or naan bread.',
    category: 'Main Course'

  },
  2:{
    name:'Chicken alfredo',
    image:'/image/menu/chicken alfredo.jpg',
    price: 550,
    description: 'A classic Italian pasta dish featuring tender chicken breast cooked in a creamy Alfredo sauce, tossed with fettuccine noodles and garnished with Parmesan cheese and fresh parsley.',
    category: 'Main Course' 

  },
3:{
    name:'Chicken salad',
    image:'/image/menu/chicken-salad.jpg',
    price: 350,
    description: 'A refreshing salad made with crisp romaine lettuce, crunchy croutons, and shaved Parmesan cheese, all tossed in a tangy Caesar dressing. Option to add grilled chicken or shrimp for extra protein.',
    category: 'Appetizer'

  },
  4:{
    name:'Chocolate lava cake',
    image:'/image/menu/chocolate-lava-cake.jpg',
    price: 300,
    description: 'A decadent dessert featuring a rich chocolate cake with a gooey, molten chocolate center. Served warm with a scoop of vanilla ice cream and a drizzle of chocolate sauce.',
    category: 'Dessert'

  },
  5:{
    name:'Mutton Biryani',
    image:'/image/menu/mutton-biryani.jpg',
    price: 500,
    description: 'A fragrant and flavorful rice dish made with tender pieces of mutton, basmati rice, and a blend of aromatic spices. Served with raita and a side salad.',
    category: 'Main Course'

  },
  6:{
    name:'Kebab Platter',
    image:'/image/menu/kebab-platter.jpg',  
    price: 700,
    description: 'A delicious assortment of grilled kebabs, including chicken, beef, and lamb, served with naan bread, a side of salad, and a tangy dipping sauce.',
    category: 'Main Course'

  },
  7:{
    name:'Red Velvet Cake',
    image:'/image/menu/red-velvet.jpg',
    price: 400,
    description: 'A moist and fluffy red velvet cake layered with creamy cream cheese frosting. Perfect for celebrations or as a sweet treat.',
    category: 'Dessert'

  },
  8:{
    name:'Mango Lassi',
    image:'/image/menu/mango-lassi.jpg',
    price: 150,
    description: 'A refreshing and creamy yogurt-based drink blended with ripe mangoes and a hint of cardamom. Served chilled.',
    category: 'Beverage'

  },
  9:{
    name:'Pizza',
    image:'/image/menu/pizza.jpg',
    price: 800,
    description: 'A classic Italian dish featuring a thin and crispy crust topped with tomato sauce, mozzarella cheese, and a variety of toppings such as pepperoni, mushrooms, and bell peppers. Baked to perfection in a wood-fired oven.',
    category: 'Appetizer'

  },
  10:{
    name:'Tomato Soup',
    image:'/image/menu/tomato-soup.jpg',
    price: 250,
    description: 'A comforting and flavorful soup made with ripe tomatoes, onions, garlic, and herbs. Served hot with a side of crusty bread, garlic bread or grilled cheese sandwich.',
    category: 'Appetizer'
  
  },
  11:{
    name:'Indian sweets',
    image:'/image/menu/indian-sweets.jpg',
    price: 200,
    description: 'A delightful assortment of traditional Indian sweets, including gulab jamun, jalebi, rasgulla, and barfi. Perfect for satisfying your sweet tooth and celebrating special occasions.',
    category: 'Dessert'
  },
  12:{
    name:'Wines',
    image:'/image/menu/mental latancy.jpg.jpg',
    price: 1200,
    description: 'A curated selection of fine wines from around the world, including red, white, and sparkling varieties. Perfect for pairing with your meal or enjoying on its own.',
    category: 'Beverage'  
  },
  13:{
    name:'Samosa Platter',
    image:'/image/menu/samosa side view.jpg',
    price: 300,
    description: 'A delicious platter of crispy and golden samosas filled with a savory mixture of spiced potatoes, peas, and herbs. Served with tangy tamarind chutney and refreshing mint yogurt sauce.',
    category: 'Appetizer'
  },
  14:{
    name:'Black hole crepes',
    image:'/image/menu/Black-hole-crepes.jpg',
    price: 350,
    description: 'Swirling tamarind reduction, mushroom misir wot tucked into charcoal injera folds, and a spiral that looks like it could bend flavor and time.',
    category: 'appertizer'
  }

}
        const selectedMenuItem = ref(null)

        return { menu, selectedMenuItem }
    },
    actions:{
         updateSelectedMenuItem (menuItem) {
           this.selectedMenuItem = menuItem
       }
    }
})

  




  


