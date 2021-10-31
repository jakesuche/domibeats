<template>
  <div class="card card-body mt-4 container">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Song Name</label>
        <input v-model="form.songName" class="form-control" required />
      </div>
      <div class="form-group">
        <label>Artist Name</label>
        <input v-model="form.artistName" class="form-control" required />
      </div>
      <div class="form-group">
        <label>Upload sample audio</label>
        <input
          @change="uploadAudion($event)"
          type="file"
          class="form-control"
          required
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
        <input type="file" class="form-control" required />

        <!-- <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div> -->
      </div>
      <div class="form-group">
        <label>Link</label>
        <input v-model="form.link" class="form-control" required />
      </div>

      <button type="submit" class="btn" @click="createBeats()">
        Create User
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
        createdAt:new Date(),
        data:process.env.VUE_APP_SECRET_CODE
      },
      loading: false,
      imageData: null,
      progress: 0,
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
      docRef({ ...this.form })
        .then((res) => {
          console.log(res);
          this.loading = false;
        })
        .catch((err) => {
          console(err.response);
          this.loading = false;
        });
    },
    uploadAudion(event) {
      console.log(event.target.files[0]);
      this.imageData = event.target.files[0];

      const storageRef = ref(storage, "images/" + this.imageData.name);
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
            this.form.songLive = downloadURL;
          });
        }
      );
    },
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
