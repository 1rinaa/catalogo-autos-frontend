// src/store/index.js
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    autos: [],
    fabricantes: [],
    categorias: [],
    loading: false,
  },
  mutations: {
    SET_AUTOS(state, autos) {
      state.autos = autos;
    },
    SET_FABRICANTES(state, fabricantes) {
      state.fabricantes = fabricantes;
    },
    SET_CATEGORIAS(state, categorias) {
      state.categorias = categorias;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    ADD_AUTO(state, auto) {
      state.autos.push(auto);
    },
    UPDATE_AUTO(state, auto) {
      const index = state.autos.findIndex((a) => a.id === auto.id);
      if (index !== -1) {
        Vue.set(state.autos, index, auto);
      }
    },
    DELETE_AUTO(state, id) {
      state.autos = state.autos.filter((a) => a.id !== id);
    },
  },
  actions: {
    async fetchAutos({ commit }) {
      commit("SET_LOADING", true);
      try {
        const response = await axios.get("/api/autos");
        commit("SET_AUTOS", response.data);
      } catch (error) {
        console.error("Error fetching autos:", error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async fetchFabricantes({ commit }) {
      try {
        const response = await axios.get("/api/fabricantes");
        commit("SET_FABRICANTES", response.data);
      } catch (error) {
        console.error("Error fetching fabricantes:", error);
      }
    },
    async fetchCategorias({ commit }) {
      try {
        const response = await axios.get("/api/categorias");
        commit("SET_CATEGORIAS", response.data);
      } catch (error) {
        console.error("Error fetching categorias:", error);
      }
    },
    async createAuto({ dispatch }, auto) {
      // ← commit eliminado
      try {
        const response = await axios.post("/api/autos", auto);
        await dispatch("fetchAutos");
        return response.data;
      } catch (error) {
        console.error("Error creating auto:", error);
        throw error;
      }
    },
    async updateAuto({ dispatch }, { id, auto }) {
      // ← commit eliminado
      try {
        const response = await axios.put(`/api/autos/${id}`, auto);
        await dispatch("fetchAutos");
        return response.data;
      } catch (error) {
        console.error("Error updating auto:", error);
        throw error;
      }
    },
    async deleteAuto({ dispatch }, id) {
      // ← commit eliminado
      try {
        await axios.delete(`/api/autos/${id}`);
        await dispatch("fetchAutos");
      } catch (error) {
        console.error("Error deleting auto:", error);
        throw error;
      }
    },
    async createFabricante({ dispatch }, fabricante) {
      try {
        await axios.post("/api/fabricantes", fabricante);
        await dispatch("fetchFabricantes");
      } catch (error) {
        console.error("Error creating fabricante:", error);
        throw error;
      }
    },
    async deleteFabricante({ dispatch }, id) {
      try {
        await axios.delete(`/api/fabricantes/${id}`);
        await dispatch("fetchFabricantes");
      } catch (error) {
        console.error("Error deleting fabricante:", error);
        throw error;
      }
    },
    async createCategoria({ dispatch }, categoria) {
      try {
        await axios.post("/api/categorias", categoria);
        await dispatch("fetchCategorias");
      } catch (error) {
        console.error("Error creating categoria:", error);
        throw error;
      }
    },
    async deleteCategoria({ dispatch }, id) {
      try {
        await axios.delete(`/api/categorias/${id}`);
        await dispatch("fetchCategorias");
      } catch (error) {
        console.error("Error deleting categoria:", error);
        throw error;
      }
    },
  },
  getters: {
    getAutoById: (state) => (id) => {
      return state.autos.find((auto) => auto.id === id);
    },
  },
});
