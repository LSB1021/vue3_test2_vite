<template>
  <div class="person">
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    <button @click="changeFullName">将全名改为li-si</button><br>
    全名：<span>{{fullName}}</span>
  </div>
</template>

<script lang="ts" setup>
    defineOptions({name:'Person'})
    import {computed, ref} from 'vue'
    let firstName = ref('zhang')
    let lastName = ref('san')

    //这么定义的计算属性是不可以修改的（只读）
    /* let fullName = computed(()=>{
        return firstName.value.slice(0,1).toUpperCase()+ firstName.value.slice(1) + '-' + lastName.value
    }) */

    //这么定义的计算属性修改（可读可写）
    let fullName = computed({
        get(){
            return firstName.value.slice(0,1).toUpperCase()+ firstName.value.slice(1) + '-' + lastName.value
        },
        set(value){
            const [str1,str2] = value.split('-')
            firstName.value = str1
            lastName.value = str2
        }
    })



    function changeFullName(){
        fullName.value = 'li-si'
    }

</script>


<style scoped>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        margin:0 5px;
    }
</style>