  // PADRE
      Vue.component('padre',{
          template: //html
          `
          <div class="p-5 bg-success text-white">
            <button @click="getLengujes" >Carga Lenguajes</button>
            <ul>
                <li v-for="leguaje of leguajes" >{{leguaje.nombre}}</li>
            </ul>
          </div>
          `,
          computed:{
              ...Vuex.mapState(['leguajes'])
          }
          ,
          methods:{
              ...Vuex.mapActions(['getLengujes'])
          }
      });
      const store=new Vuex.Store({
          state:{
            leguajes:[]
          },
          mutations:{
            cargaLenguajes(state,leguajes){
                state.leguajes=leguajes;
            }
          },
          actions:{
            getLengujes: async function({commit}){
                const datos = await fetch("js/vuex/datos.js");
                const leguajes= await datos.json();
                commit('cargaLenguajes',leguajes);
            }
          }
      });
    const con=new Vue({
      el:"#elemento",
      store:store
    });