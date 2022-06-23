import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [
      { name: "First product", id: 1 },
      { name: "second product", id: 3 },
      { name: "third product", id: 2 }
    ],
    count: 1,
    blogs: [],
    blogDetails: {}
  },
  getters: {
    getProductId(state) {
      return state.products[1].id;
    },

  },
  mutations: {

    increment(state, n) {
      state.count += n;
    },

    async getAllBlogs(state) {

      const config = {
        headers: {
          Accept: "application/json"
        }
      };

      try {

        const res = await axios.get(`https://agile-dusk-49935.herokuapp.com/cycles`, config);
        state.blogs = res.data.products;

      } catch (err) {
        console.error(err.message);
      };

    },

    async blogDetails(state, id) {

      const config = {
        headers: {
          Accept: "application/json"
        }
      };

      try {

        const res = await axios.get(`https://agile-dusk-49935.herokuapp.com/blog/${id}`, config);
        state.blogDetails = res.data;

      } catch (err) {
        console.error(err.message);
      };

    }

  },
  actions: {
  },
  modules: {
  }
})


// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// export const store = new Vuex.Store({
//   state: {
//     products: [
//       { name: "First product", id: 1 },
//       { name: "second product", id: 3 },
//       { name: "third product", id: 2 }
//     ]
//   }
// })