<template>
  <RouterLink to="/empForm">사원등록</RouterLink>
  <div>
    <span>employeeId</span><span>firstName</span><span>lastName</span>
  </div>
  <div v-for="emp in employees">
    <span>{{ emp.employee_id }}</span><span @click="goToUpdateForm">{{ emp.first_name }}</span><span>{{ emp.last_name }}</span>
  </div>
</template>
<script>
  import axios from "axios";
  export default {
    data() { 
      return {
        employees: []
      }; 
    },
    created() {
      const url = '/empSelect';
      axios.get(url)
        .then(json => this.employees = json.data)
    },
    methods: {
      goToUpdateForm() {
        this.$router.push('/empUpdateForm')
      }
    },
  }
</script>
<style>
  span {
    display: inline-block;
    width: 20%;
  }
</style>