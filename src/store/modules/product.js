import { axiosInstance } from "../axios";
import { applyFilters } from "../filterhelper";

export default {
  namespaced: true,
  state: {
    products: [],
    productCount: null,
    product: {},
  },
  getters: {},
  actions: {
    updateproduct({ commit }, payload) {
      console.log(payload);
      return axiosInstance
        .patch(`/api/v1/products/${payload._id}`, payload)
        .then((res) => {
          const product = res.data;
          console.log(product);
          commit("setproductbyid", product);
        });
    },
    deleteproduct({ commit }, id) {
      
      return axiosInstance.delete(`/api/v1/products/${id}`)
      .then((res)=>{
        commit("removeproduct", id);
      })
      
    },
    createproduct({ commit }, payload) {
      return axiosInstance.post("/api/v1/products/add", payload).then((res) => {
        console.log(res);
        console.log(res.data);
        commit("setproduct", res.data);
      });
    },
    getproductbyid({ commit }, id) {
      console.log(id);
      return axiosInstance.get(`/api/v1/products/${id}`).then((res) => {
        console.log(res);
        commit("setproductbyid", res.data);
      });
    },

    getallproducts({ commit }, pageNum) {
      let URL = applyFilters("/api/v1/products", { ...pageNum });

      return axiosInstance.get(URL).then((res) => {
        const { products, productCount } = res.data;
        commit("setproducts", { products, productCount });
      });
    },
  },
  mutations: {
    setproducts(state, { products, productCount }) {
      state.products = products;
      state.productCount = productCount;
    },
    setproduct(state, payload) {
      console.log(payload);
      state.productCount += 1;
      state.products.unshift(payload);
    },
    setproductbyid(state, payload) {
      state.product = payload;
    },
    removeproduct(state, id) {
      const isId = (element) => element._id == id;
      const index = state.products.findIndex(isId);
      console.log(index);
        if (index > -1) {
          state.products.splice(index, 1);
          state.productCount -= 1
        }
    },
  },
};
