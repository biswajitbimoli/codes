<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="red--text ma-5" style="font-weight:400">Create a new Meetup</h1>
      </v-flex>
    </v-layout>
    <v-form @submit.prevent="onCreateMeetup">
      <v-layout row class="ma-5">
        <v-flex xs12 sm6 offset-sm3>
          <v-text-field
            :rules="titleFieldRule"
            outlined
            color="purple"
            shaped
            counter="25"
            v-model="title"
            name="title"
            label="Title"
            id="title"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row class="ma-5">
        <v-flex xs12 sm6 offset-sm3>
          <v-text-field
            :rules="textFieldRule"
            outlined
            color="purple"
            shaped
            counter="30"
            v-model="location"
            name="Location"
            label="Location"
            id="location"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row class="ma-5">
        <v-flex xs12 sm6 offset-sm3>
          <v-file-input
            :rules="rules"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick a Picture"
            prepend-icon="mdi-camera"
            v-model="image"
            label="Upload Image"
            color="purple"
            @change="onFileChange"
          ></v-file-input>
        </v-flex>
      </v-layout>
      <v-layout row class="ma-5">
        <v-flex xs12 sm6 offset-sm3>
          <img v-if="url!= null" class="preview-image" :src="url" />
        </v-flex>
      </v-layout>

      <v-layout row class="ma-5">
        <v-flex xs12 sm6 offset-sm3>
          <v-textarea
            :rules="textAreaRule"
            outlined
            filled
            shaped
            counter="200"
            color="purple"
            name="input-7-1"
            v-model="description"
            label="Description"
            value="Enter the text here"
            hint="Describe about your meetup plans"
          ></v-textarea>
        </v-flex>
      </v-layout>
      <v-layout row class="ma-5">
        <v-flex xs12 sm3 offset-sm3>
          <v-text-field label="Pick Date" readonly 
          prepend-icon="mdi-calendar" color="purple"
          :value="date"
          @click="dialog = !dialog"
          >
          </v-text-field>
          <v-text-field label="Pick Time" readonly 
          prepend-icon="mdi-calendar" color="purple"
          :value="time"
          @click="dialogTime = !dialogTime"
          >
          </v-text-field>
          <v-flex xs12 sm3 offset-sm3>
          <v-dialog width="300" v-model="dialog"> 
              <v-date-picker v-model="date"></v-date-picker>
              <v-btn @click="dialog = !dialog" color="primary">ok</v-btn>
          </v-dialog>
          </v-flex>
          <v-flex xs12 sm3 offset-sm3>
          <v-dialog width="300" v-model="dialogTime"> 
              <v-time-picker v-model="time"></v-time-picker>
              <v-btn @click="dialogTime = !dialogTime" color="primary">ok</v-btn>
          </v-dialog>
          </v-flex>
        </v-flex>
      </v-layout>
      <v-layout row class="ma-5">
        <v-flex xs12 sm3 offset-sm3>
          <v-btn type="submit" :dark="formValid" :disabled="!formValid" class="red">Create Meetup</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "CreateMeetup",
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      time: new Date().toISOString().substr(11, 5),
      dialogTime: false,
      dialog: false,
      url: null,
      title: "",
      location: "",
      image: [],
      description: "",
      rules: [
        value =>
          !value ||
          value.size < 2000000 ||
          "Picture size should be less than 2 MB!"
      ],
      textFieldRule: [
        value => {
          if (value.length < 3) {
            return "Provide a valid input";
          } else {
            return true;
          }
        }
      ],
      titleFieldRule: [
        value => {
          if (value.length < 10) {
            return "Provide a descriptive title";
          } else {
            return true;
          }
        }
      ],
      textAreaRule: [
        value => {
          if (value.length < 100) {
            return "Provide a handfull description";
          } else {
            return true;
          }
        }
      ]
    };
  },
  computed: {
    formValid() {
      return (
        this.title.length > 9 &&
        this.location.length > 2 &&
        this.description.length > 99 &&
        this.image.value !== null > 3
      );
    },
    submitableDateTime () {
      const date =new Date(this.date)
      const hours = this.time.match(/^(\d+)/)[1]
      const minutes = this.time.match(/:(\d+)/)[1]
      date.setHours(hours)
      date.setMinutes(minutes)
      return date;
    }
  },
  methods: {
    onFileChange() {
      this.url = URL.createObjectURL(this.image);
    },
    onCreateMeetup() {
      if (this.formValid) {
        const meetup = {
          title: this.title,
          location: this.location,
          description: this.description,
          url: this.url,
          date: this.submitableDateTime
        };
        this.$store.dispatch("createMeetup", meetup);
        this.$router.push("/meetups");
      }
    }
  },
  created() {
    
  },
  updated() {
    
  }
};
</script>

<style scoped>
.preview-image {
  width: 200px;
  height: 200px;
}
</style>
