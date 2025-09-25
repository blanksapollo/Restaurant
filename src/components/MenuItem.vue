<script setup>
const menuitem = {
    name: 'Butter Chicken',
    image: '/image/menu/Butter-chicken.jpg',
    price: 600,
    description: 'A creamy and flavorful chicken dish made with a rich tomato-based sauce, infused with butter and aromatic spices. Served with basmati rice or naan bread.',
    category: 'Main Course'

  
}
</script>

<template>
    <v-container fluid class="d-flex fill-height" align="center">
      <v-row>
        <v-col md="6">
          <v-card class="pa-6 rounded-lg" justify="center">
            <v-img :src="menuitem.image" cover height="500"></v-img>          
          </v-card>
        </v-col>
        <v-col md="6">
          <v-card class="pa-6 rounded-lg" justify="center">
            <v-card-title>{{ menuitem.name }}</v-card-title>
            <v-card-subtitle>{{ menuitem.price }}</v-card-subtitle>
            <v-card-text>{{ menuitem.description }}</v-card-text>
            <v-card-text>Quantitiy<v-text-field></v-text-field></v-card-text>
            <v-card-actions>
              <v-btn color="purple-darken-3">Order</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>