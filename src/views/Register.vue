<template>
  <div class="w-2/4 m-auto">
    <div class="card-body">
      <h3 class="text-3xl font-bold text-center text-gray-800">Sign Up</h3>

      <form @submit="onSubmit">
        <!-- Input--------------------->
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            type="email"
            class="form-control block w-full px-4 py-2 mt-2 bg-color-secondary border rounded-md focus:outline-none"
          />
        </div>

        <!-- Input--------------------->
        <div class="mb-3">
          <label class="form-label">Password</label>
          <div class="flex">
            <input
              v-bind:type="[showPassword ? 'text' : 'password']"
              class="form-control block w-full px-4 py-2 mt-2 bg-color-secondary border rounded-md focus:outline-none"
            />

            <div class="input-group-append mt-5 -ml-6">
              <span
                class="input-group-text"
                @click="showPassword = !showPassword"
              >
                <i
                  class="fa"
                  :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']"
                  aria-hidden="true"
                ></i>
              </span>
            </div>
          </div>
        </div>
        <!-- Input--------------------->
        <div class="mb-3">
          <label class="form-label">Confirm password</label>
          <div class="flex">
            <input
              v-bind:type="[showConfirmPassword ? 'text' : 'password']"
              class="form-control block w-full px-4 py-2 mt-2 bg-color-secondary border rounded-md focus:outline-none"
            />
            <div class="input-group-append mt-5 -ml-6">
              <span
                class="input-group-text"
                @click="showConfirmPassword = !showConfirmPassword"
              >
                <i
                  class="fa"
                  :class="[showConfirmPassword ? 'fa-eye' : 'fa-eye-slash']"
                  aria-hidden="true"
                ></i>
              </span>
            </div>
          </div>
        </div>

        <div class="mb-3 text-center">
          <button
            class="w-full mt-6 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-color-primary rounded-md focus:outline-none"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <p class="mt-8 text-xs font-light text-center text-color-primary">
        Already have an account?
        <a href="#" class="font-medium text-color-primary hover:underline"
          ><router-link :to="{ name: 'Login' }">Sign In</router-link></a
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Registration",

  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
    };
  },
};
</script>
