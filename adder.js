const add = (x, y) => { return x + y }


const calculateFarenheit = (x) => { return x * 9.00/5.0 + 32.0 }

const adder = new Vue({
  el: '#adder',
  data: {
    firstNumber: 5,
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber)

      return `${this.guest}, your sum is ${calculateFarenheit(i)}.`
    }
  }
})