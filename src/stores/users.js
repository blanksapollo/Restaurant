import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('Users',  {
    state: () => {
        const users ={
            0:{
                name:'John Doe',
                email:'john@example.com',
                phone:25737968011,
                deliveryAddress:'123, Madaraka',
                password:'qwertyuio',
                userType:'Customer',
                activeAccount:true
            },
            1:{
                name:'Jane Doe',
                email:'jane@example.com',
                phone:25737968021,
                deliveryAddress:'321, Madaraka',
                password:'123456789',
                userType:'Customer',
                activeAccount:true
            },
            2:{
                name:'Jonathan doe',
                email:'jonathan@example.com',
                phone:25737968011,
                deliveryAddress:'132, Madaraka',
                password:'qwertyuiop',
                userType:'Customer',
                activeAccount:true
            },
            3:{
                name:'judith Doe',
                email:'judith@example.com',
                phone:25737968011,
                deliveryAddress:'213, Madaraka',
                password:'qwertyuiop123',
                userType:'Admin',
                activeAccount:true
            },
            4:{
                name:'betty Doe',
                email:'betty@example.com',
                phone:25737968011,
                deliveryAddress:'331, Madaraka',
                password:'qwerty123',
                userType:'Customer',
                activeAccount:true
            }
        }

        

        return { users}
    },
    actions:{
         
    }
})

  




  

