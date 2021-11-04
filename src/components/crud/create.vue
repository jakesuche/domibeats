<template>
  <div class="card card-body mt-4 container">
    <form >
      <div class="form-group">
        <label>Song Name</label>
        <input v-model="form.songName" class="form-control"  />
      </div>
      <div class="form-group">
        <label>Artist Name</label>
        <input v-model="form.artistName" class="form-control"  />
      </div>
      <div class="form-group">
        <select @change="handleSelect($event)" class="form-control">
          <option selected disabled>Select genre</option>
          <option value="afrobeat">Afrobeat</option>
          <option value="dance hall">Dance hall</option>
           <option value="hip hop">Hip hop</option>
            <option value="gospel">Gospel</option>
            <option value="R and B">R and B</option>
        </select>
      </div>
    
      <div class="form-group">
        <label>Upload sample audio</label>
        <input
          @change="uploadAudion($event)"
          type="file"
          class="form-control"
          
        />
        <b-progress
          v-if="progress !== 100 && progress > 0"
          style="height:13px"
          class="mt-2"
          :value="progress"
          :max="100"
          show-progress
          animated
        ></b-progress>
      </div>
      <div class="form-group">
        <label>Upload sample image</label>
        <input @change="uploadImage($event)" type="file" class="form-control"  />
        <b-progress
          v-if="progress1 !== 100 && progress1 > 0"
          style="height:13px"
          class="mt-2"
          :value="progress1"
          :max="100"
          show-progress
          animated
        ></b-progress>

      
      </div>
      <div class="form-group">
        <label>Link</label>
        <input v-model="form.link" class="form-control"  />
      </div>

      <button type="button" class="btn" @click="createBeats()">
      {{ loading ? 'Creating' :'Create User'}}
      </button>
    </form>
  </div>
</template>

<script>
import {
  firebaseApp,
  docRef,
  ref,
  storage,
  uploadBytesResumable,
  getDownloadURL,
  getDocs,
  db,
  collection,
  auth,
} from "@/firebase.js";
export default {
  data() {
    return {
      form: {
        songName: "",
        artistName: "",
        songImg: "",
        songLive: "",
        link: "",
        genre:'',
        createdAt:new Date(),
       
      },
      loading: false,
      imageData: null,
      progress: 0,
      progress1:0
    };
  },
  created(){
    this.getAllBeats()
  },
  methods: {
   async getAllBeats () {
     const array = []
     const querySnapshot = await getDocs(collection(db, "beat_samples"));
     console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
 
  console.log(doc.data())
  
  const data = {id:doc.id, ...doc.data()};
  array.push(data)
  console.log(data)

});

console.log(array)
    },
    createBeats() {
       this.loading = true;
        const { songName , songLive,link, songImg, artistName } = this.form
      if(!songName || !songLive|| !artistName || !link  ||!songImg){
        this.$toasted.error('You need to complete this fields', {
          duration:4000
        })
        this.loading = false
       return 
      }
   
      docRef({ ...this.form })
        .then((res) => {
          console.log(res);
          this.loading = false;
          this.$toasted.error('Creating successfully', {duration:4000})
        })
        .catch((err) => {
          console.log(err);
          this.$toasted.error('An error occurred while creating ', {duration:4000})
          this.loading = false;
        });
    },
    uploadAudion(event) {
      console.log(event.target.files[0]);
      this.imageData = event.target.files[0];

      const storageRef = ref(storage, "audios/" + this.imageData.name);
      const uploadTask = uploadBytesResumable(storageRef, this.imageData);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          this.progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("this is a download link", downloadURL);
            this.$toasted.success('audio uploaded successfully')
            this.form.songLive = downloadURL;
          });
        }
      );
    },


    handleSelect(event){
      console.log(event.target.value)
      this.form.genre= event.target.value
    }, 
    uploadImage(event){
         console.log(event.target.files[0]);
      this.imageData = event.target.files[0];

      const storageRef = ref(storage, "images/" + this.imageData.name);
      const uploadTask = uploadBytesResumable(storageRef, this.imageData);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          this.progress1 =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("this is a download link", downloadURL);
            this.$toasted.success('Image uploaded successfully')
            this.form.songImg = downloadURL;
          });
        }
      );
    }
  },
};
</script>

<style scoped>
label {
  color: var(--humber-light);
}
.form-control {
  color: var(--humber-light);
  background-color: var(--humber-dark);
  border: 1px solid var(--humber-golden);
}
.card {
  background-color: var(--humber-dark);
  border: 1px solid var(--humber-golden);
  border-radius: 10px;
}
.btn {
  background: var(--gradient-primary);
}
</style>
: if request.auth == null