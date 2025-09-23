<script setup>

</script>

<template>
  <!-- Carousel -->
  <v-container class="text-center">
    <v-row>
      <v-carousel>
        <v-carousel-item src="/image/chakula.jpg"></v-carousel-item>
        <v-carousel-item src="/image/eats.jpg"></v-carousel-item>
        <v-carousel-item src="/image/food.jpg"></v-carousel-item>
        <v-carousel-item src="/image/mental latancy.jpg.jpg"></v-carousel-item>
</v-carousel>
<!-- About -->
      </v-row>
      </v-container>
      <v-card align="center">
      <p class="text-h4">Welcome to Cosmic Kitchen</p>
      <p class="text-h6"> Welcome to Cosmic Kitchen, where culinary delights meet cosmic inspiration. Our restaurant offers a unique dining experience that combines exquisite flavors with a celestial ambiance. Whether you're craving intergalactic dishes or classic favorites, our menu is designed to satisfy every palate. Join us for an unforgettable journey through taste and space!
      </p>,<br>
      <p class="text-h6"> At Cosmic Kitchen, we believe that dining is not just about food; it's about creating memories. Our team of skilled chefs crafts each dish with passion and creativity, using the finest ingredients to ensure a burst of flavor in every bite. From our signature cosmic cocktails to our delectable desserts, every item on our menu is a testament to our commitment to quality and innovation.
      </p><br>
      <p class="text-h6"> Whether you're celebrating a special occasion or simply looking for a place to unwind, Cosmic Kitchen is the perfect destination. Our inviting atmosphere, attentive service, and out-of-this-world cuisine make us a favorite among locals and visitors alike. Come and experience the magic of Cosmic Kitchen  where every meal is a journey to the stars!
      </p>
    </v-card>
      <v-container class="text-center">
    <v-row>
      
      </v-row>
      </v-container>
      <!-- News -->
      <v-container class="text-center">
    <v-row>
      <v-col md="4">
        <v-card>
          <v-img src="/image/taylor-kiser-2.jpg" 
          class="align-end text white"
          height="200px"
          cover></v-img>
          <v-card-title>New Menu Item: Muncharinos</v-card-title>
          <v-card-subtitle>Butter chicken and Naan</v-card-subtitle>
        <v-card-actions>
          <v-btn>Read More</v-btn>
        </v-card-actions>

        </v-card>
         
      </v-col>
      <v-col md="4">
                <v-card>
                    <v-img 
                    src="/images/Red-Velvet-stopper.jpg" 
                    class="align-end text-white" 
                    height="200" 
                    cover>
                    <v-card-title>A new heart stopping dessert</v-card-title>
                </v-img>
                <v-card-subtitle>A red velvet chocolate cake with chery jam in the middle covered with milk chocolate</v-card-subtitle>
                <v-card-actions>
                    <v-btn> Read More</v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
      <v-col md="4">
        <v-card>
          <v-img src="/image/victoria-shes.jpg" 
          class="align-end text white"
          height="200px"
          cover></v-img>
          <v-card-title>New Menu Item: Kebab platter</v-card-title>
          <v-card-subtitle>The kebaba platter comes with mutton beef and lamb kebabs with 
          naan and a side of salad
          </v-card-subtitle>
        <v-card-actions>
          <v-btn>Read More</v-btn>
        </v-card-actions>

        </v-card>
         
      </v-col>
      
    </v-row>
    </v-container> 
    <!-- footer -->
    <v-container class="text-center">
    <v-row>
      <v-col>
      <v-card color="deep-purple-darken-4" dark>
        <v-footer class="text-center d-flex flex-column ga-2 py-4" color="deep-purple-lighten-1">
                <div class="d-flex ga-3">
                <v-btn icon="'mdi-facebook'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-twitter'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-linkedin'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-instagram'" density="comfortable" variant="text" ></v-btn>
                </div>

                <v-divider class="my-2" thickness="2" width="50"></v-divider>

                <div class="text-caption font-weight-regular opacity-60">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </div>

                <v-divider></v-divider>

                <div>
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </div>
            </v-footer>
            </v-card>
        </v-col>
      
      </v-row>
      </v-container>
  </template>
  