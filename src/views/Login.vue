<template>
  <div class="w-2/4 m-auto">
    <div class="card-body">
      <h3 class="text-3xl font-bold text-center text-gray-800">Sign In</h3>

      <form @submit="onSubmit">
        <!-- Input--------------------->
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            type="email"
            class="form-control block w-full px-4 py-2 mt-2 bg-color-secondary border rounded-md focus:outline-none"
            v-model.trim="form.email"
            @input="setTouched('email')"
            :class="v$.form.email.$error ? 'is-invalid' : ''"
          />
          <div
            v-for="error of v$.form.email.$errors"
            class="invalid-feedback text-danger"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
        </div>

        <!-- Input--------------------->
        <div class="mb-3 ">
          <label class="form-label">Password</label>
          
            
                

           <div class="flex">
             <input
          v-bind:type="[showPassword ? 'text' : 'password']"

            class="form-control block w-full px-4 py-2 mt-2 bg-color-secondary border rounded-md focus:outline-none"
            v-model.trim="form.password"
            @input="setTouched('password')"
            :class="v$.form.password.$error ? 'is-invalid' : ''"
           
          />
           
      <div class="input-group-append mt-5 -ml-6 ">
      <span class="input-group-text" @click="showPassword = !showPassword">
            <i class="fa" :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']" aria-hidden="true"></i>
      </span>
    </div>
           </div>
          
          
          <div
            v-for="error of v$.form.password.$errors"
            class="invalid-feedback text-danger"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
        </div>

        <div class="mb-3 text-center">
          <button
            class="w-full mt-6 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-color-primary rounded-md focus:outline-none"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
      <p class="mt-8 text-xs font-light text-center text-color-primary">
        Don't have an account?
        <router-link :to="{ name: 'Register' }">
          <a href="#" class="font-medium text-color-primary hover:underline"
            >Sign up</a
          >
        </router-link>
      </p>
    </div>
  </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";

export default {
  name: "Registration",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
     showPassword: false,
    };
  },
  validations() {
    return {
      form: {
        email: {
          required,
          email,
        },
        password: {
          required,
          minLength: minLength(6),
          containsPasswordRequirement: helpers.withMessage(
            () =>
              `The password requires an uppercase, lowercase, number and special character`,
            (value) =>
              /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(value)
          ),
        },
      },
    };
  },
  methods: {
    setTouched(theModel) {
      if (theModel == "email" || theModel == "all") {
        this.v$.form.email.$touch();
      }
      if (theModel == "password" || theModel == "all") {
        this.v$.form.password.$touch();
      }
    },
    async onSubmit(event) {
      event.preventDefault();
      this.setTouched("all");
      if (!this.v$.$invalid) {
        alert("all Good");
      }
    },
     switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    }
  },
    
  
};
</script>
