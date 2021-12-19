<template>
  <div class="container margin">
    <div class="text-center text-light mb-3 mb-3 text-uppercase">
      Application form for {{ form.level }} level
    </div>
    <div class="row wrapper">
      <div class="col-md-6">
        <div class="form-group">
          <label for="exampleInputEmail1">First Name</label>
          <span class="text-danger">*</span>
          <input
            type="text"
            v-model="form.firstname"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter firstname"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="exampleInputEmail1">Last name</label>
          <span class="text-danger">*</span>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter lastname"
            v-model="form.lastname"
          />
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="exampleInputEmail1">Address</label>
          <span class="text-danger">*</span>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter address"
            v-model="form.address"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="exampleInputEmail1">City</label>
          <span class="text-danger">*</span>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter city"
            v-model="form.city"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="exampleInputEmail1">Province/State</label>
          <span class="text-danger">*</span>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter state"
            v-model="form.state"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <span class="text-danger">*</span>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            v-model="form.email"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="exampleInputEmail1">Phone Number</label>
          <span class="text-danger">*</span>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Phone"
            v-model="form.phoneNumber"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="exampleInputEmail1"> Select Level</label>
          <span class="text-danger">*</span>
          <select v-model="form.level" class="form-control">
            <option>
              Basic
            </option>
            <option>
              Professionals
            </option>
            <option>
              Experts
            </option>
          </select>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="exampleInputEmail1"> Why do you want to apply ?</label>
          <span class="text-danger">*</span>
          <textarea v-model="form.reason" class="form-control" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="exampleInputEmail1">
            Do you have Previous period intrument exprience ?
            <span class="text-danger">*</span></label
          >
          <select
            name="isExperience"
            @change="handleChange($event)"
            class="form-control"
            value="ss"
          >
            <option disabled selected>
              Select option
            </option>
            <option>
              NO
            </option>
            <option>
              YES
            </option>
          </select>
        </div>
        <div class="form-group" v-if="form.isExperience === 'YES'">
          <label for="exampleInputEmail1"> If yes, describe</label>
          <textarea v-model="form.reason" class="form-control" />
        </div>
      </div>
      <div class="col-md-12 d-flex justify-content-center ">
        <button class="btn">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        lastname: "",
        firstname: "",
        email: "",
        state: "",
        phoneNumber: "",
        address: this.$route.params.title,
        level: "",
        reason: "",
        isExperience: "",
      },
    };
  },
  created() {
    this.addLevels();
  },
  methods: {
    addLevels() {
      let word = this.$route.params.title;
      let firstChar = word.charAt(0).toUpperCase();
      console.log(firstChar);
      let restChar = word.substring(1);
      this.form.level = firstChar + restChar;
    },
    handleChange(event) {
      const { value, name } = event.target;
      this.form = { ...this.form, [name]: value };
    },
  },
};
</script>

<style scoped>
.margin {
  margin-top: 140px;
  margin-bottom: 200px;
  max-width: 741px;
}
label {
  color: gray;
}

.wrapper {
  background: var(--humber-dark);
  padding: 14px;
  border-radius: 16px;
}

.btn {
 
  background: #000;
    color: #fff;
    width: 81%;
    height: 55px;
    border-radius: 12px;
    margin-top: 13px;
}

@media (max-width:667px){
  .btn {
 

    width: 100%;
    
}
}

</style>
