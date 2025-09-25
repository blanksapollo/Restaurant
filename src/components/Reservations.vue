<script setup>
// imports
import { ref } from 'vue'

const showMenu = ref(false)

// models
const Name = ref(null)
const Phone = ref(null)   
const NoOfPeople = ref(null)
const reservationDate = ref(null)
const reservationTime = ref(null)
const Location = ref(null)
// make reservations add reservation details to local store
function makeReservation(){
    const reservationDetails = {
        Name: Name.value,
        Phone: Phone.value,
        NoOfPeople: NoOfPeople.value,
        reservationDate: reservationDate.value,
        reservationTime: reservationTime.value,
        Location: Location.value
    }
    try{
        // save data on browser
        localStorage.setItem('reservationDetails', JSON.stringify(reservationDetails))

        // to do :send data to back end

    }
    catch(err){
    console.error('reservation process failed', err)
}
   }


</script>

<template>
    <h1>Reservations</h1>
    <v-container fluid class="d-flex fill-height" align="center">
        <v-btn color="purple-darken-3"  @click="makeReservation()">Make Reservation</v-btn>
        <v-row>
            <v-col>
                <v-card max-width="800" class="pa-6 rounded-lg" justify="center">
                    <v-row>
                        <p class="text-h5">Make a Reservation</p>
                    </v-row>
                    <v-row>
                        <v-col md="4">Name</v-col>
                        <v-col md="8">
                            <v-text-field label="Name" v-model ="Name"></v-text-field>
                        </v-col>
                    </v-row>
                   <v-row>
                        <v-col md="4">Phone</v-col>
                        <v-col md="8">
                            <v-text-field label="2541234456" type="number" v-model="Phone"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="4">No. of People</v-col>
                        <v-col md="8">
                            <v-text-field v-model="NoOfPeople"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="4">Date</v-col>
                        <v-col md="8">
                            <v-date-input v-model="reservationDate"></v-date-input>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="4">Time</v-col>
                        <v-col md="8">
                            <v-text-field :model-value="reservationTime" label="Picker in menu" prepend-icon="mdi-clock-time-four-outline" readonly >
    <v-menu v-model="showMenu" :close-on-content-click="false" activator="parent" min-width="0" >
        <v-time-picker v-model="reservationTime"></v-time-picker>
    </v-menu>
</v-text-field>
                        </v-col>
                        <v-row>
                        <v-col md="4">Location</v-col>
                        <v-col md="8">
                            <v-radio-group v-model = "Location" inline>
                                    <v-radio label="Madaraka" value="Madaraka"></v-radio>
                                    <v-radio label="CBD" value="CBD"></v-radio>
                                    <v-radio label="Your Home" value="Your Home"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
  </template>