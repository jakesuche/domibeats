<template>
  <input
    @input="EmitValue($event)"
    v-model="fValue"
    class="form-control"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
    :placeholder="placeholder"
    :name="name"
  />
</template>

<script>
export default {
  props: ["type", "name", "placeholder", "show", "value1"],
  data() {
    return {
      value: "",
    };
  },

  created() {
  
  },
  computed: {
    fValue: {
      // getter
      get: function() {
       if(this.value1?.length > 0){
        return this.formatUSD(this.value1)
       }else if(this.value !== ""){
            
        return this.formatUSD(this.value);
        
       }
      },
      // setter
      set: function(newValue) {
        this.value = this.parseUSD(newValue);
      },
    },
  },
  methods: {
    seeChange(event) {
      const { name } = event.target;
      console.log(this.value, name);
    },
    formatUSD(num) {
      if (this.show) {
        return (
          "₦" +
          " " +
          Number(num)
            .toString()
            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        );
      } else {
        return Number(num)
          .toString()
          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      }
    },
    parseUSD(text) {
      return Number(text.replace("₦", "").replace(/,/g, ""));
    },
    EmitValue(event) {
      this.$emit("input", { event, value: this.value });
    },
  },
};
</script>

<style></style>
