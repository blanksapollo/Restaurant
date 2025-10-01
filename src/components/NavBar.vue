<script setup>
const isLoggedIn = localStorage.getItem( "isLoggedIn") 
const isAdmin =true
</script>

<template>
    
    <v-app-bar color="purple-darken-3"dark>
      <v-app-bar-title>Cosmic Kitchen</v-app-bar-title>
      <v-btn to="/">Home</v-btn>
      <v-btn to ="/menu">Menu</v-btn>
      <v-btn to ="/Reservations">Reservations</v-btn>
       <v-btn to ="/ContactUs">Contact</v-btn>
      <v-btn to ='/orders' v-if="isLoggedIn">My Orders</v-btn>
      <v-avatar to="/userprofile" v-if="isLoggedIn" class="ml-3">
        <span class="text-h5 text-white" >A</span>
      </v-avatar>
      <v-btn to ="/Login" v-else>Login</v-btn>
      <v-btn to ="Admin" v-if="isLoggedIn && isAdmin">Admin</v-btn>
    </v-app-bar>
  </template>