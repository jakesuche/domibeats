<template>
  <div class="container margin">
    <div class="text-center text-light mb-3 mb-3 text-uppercase title">
      Application form for {{ form.level }} level
    </div>
    <div class="row wrapper " :class="shake ? 'shakes' : null">
      <div class="col-md-12 d-flex justify-content-center text-danger mt-3 mb-4">
        {{error}}
      </div>
      <div class="col-md-6 ">
        <div class="form-group">
          <label for="exampleInputEmail1">First Name</label>
          <span class="text-danger">*</span>
          <input
          @input="handleChange()"
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
           @input="handleChange()"
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
             @input="handleChange()"
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
             @input="handleChange()"
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
           @input="handleChange()"
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
           @input="handleChange()"
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
           @input="handleChange()"
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
          <select  @change="handleChange()" v-model="form.level" class="form-control">
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
          <textarea  @input="handleChange()" v-model="form.reason" class="form-control" />
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
          <label for="exampleInputEmail1"> If yes, describe</label> <span class="text-danger">*</span>
          <textarea  @input="handleChange()" v-model="form.describe" class="form-control" />
        </div>
        
      </div>
      <div class="col-md-12 d-flex justify-content-center  ">
        <button @click="register()" class="btn position-relative"><span v-if="loading" class="position-absolute btn_overlay"><div class="spinner"></div>
</span>Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import { AcedamyRef} from '@/firebase'
export default {
  data() {
    return {
      form: {
        lastname: "",
        firstname: "",
        email: "",
        state: "",
        phoneNumber: "",
        address: '',
        level: "",
        reason: "",
        isExperience: "",
        describe:'',
        confirmed:false
        
      },
      error:'',
      shake:false,
      loading:false
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
      console.log(event)
      this.error = ''
      this.shake = false
      if(event){
      const { value, name } = event.target;
      this.form = { ...this.form, [name]: value };
      }
      
    },
    register(){
        this.loading = true
        const { lastname , firstname, email, state, phoneNumber, address, level, reason, isExperience, describe} = this.form
        if(!lastname || !firstname || !email || !state || !phoneNumber || !address || !level || !isExperience || !reason){
          this.error = 'Required fields must be completed'
          this.shake = true
          this.$toasted.error('Required fields must be completed',{duration:4000})
          this.loading = false
        }else if(isExperience === 'YES' && !describe ){
            this.error = 'Required fields must be completed'
            this.shake = true
            this.$toasted.error('Required fields must be completed',{duration:4000})
             this.loading = false
        }else {

        this.form = { ...this.form, createdAt:Date.now() }
        console.log(this.form)
        AcedamyRef({ ...this.form })
        .then((res) => {
          console.log(res);
          this.loading = false;
          this.$toasted.sucess('Created successfully', {duration:4000})
          this.form = {}
        })
        .catch((err) => {
          console.log(err);
          this.$toasted.error('An error occurred while creating ', {duration:4000})
          this.loading = false;
        });
        }

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
/* .title{
      position: sticky;
    top: 0px;
    height: 48px;
    background: #000;
    z-index: 99;
    display: flex;
 
    justify-content: center;
    align-items: center;
    width: 100%;
} */
.spinner {
     border: 7px solid #f3f3f3;
    border-radius: 60%;
    border-top: 7px solid #dc3545;
    width: 39px;
    height: 39px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

.btn_overlay{
  width: 100%;
    background-color: #000!important;
   
    height: 55px;
  
    left: 0;
    top: 0;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
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

.shakes {
 
  animation: shake 0.5s;


  
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

</style>
