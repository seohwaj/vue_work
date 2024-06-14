const template = /*html*/`
  <select class="form-control mb-3" v-model="selValue" v-on:change="changeSelect">
    <option value="">도시 선택</option>
    <option v-for="city in cities" :value="city.value">{{city.text}}</option>
  </select>
  <input @keyup.enter="doSomething" v-model="firstName">
  <input @click.ctrl="doSomething" v-model="lastName">
  <div>watch : {{fullName}}</div>
  <div>computed : {{computedFullName}}</div>
`;

export default {
  template,
  data() {
    return {
      selValue: '21',
      cities: [
        {value: '02', text: '서울'},
        {value: '21', text: '부산'},
        {value: '064', text: '제주'}
      ],
      firstName: '길동',
      lastName: '홍',
      fullName: ''
    }
  },
  watch: {
    firstName() { this.fullName = this.firstName + ' ' + this.lastName },
    lastName() { this.fullName = this.firstName + ' ' + this.lastName}
  },
  computed: {
    computedFullName() { return this.firstName + ' ' + this.lastName }
  },
  methods: {
    changeSelect() {
      let result = this.cities.find(city => city.value == this.selValue);
      alert(result.text);
    },
    doSomething() {
      alert('엔터');
    }
  }
}