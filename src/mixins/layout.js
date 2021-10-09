import config from '../config';
import Fuse from 'fuse.js'
import { mapState } from 'vuex'
export default {
    data: () => {
        return {
            appConfig: config.app,
            optionsFilter: {
              // isCaseSensitive: false,
              // includeScore: false,
              // shouldSort: true,
              // includeMatches: false,
              // findAllMatches: true,
              // minMatchCharLength: 1,
              // location: 0,
              // threshold: 0.6,
              // distance: 100,
              // useExtendedSearch: false,
              // ignoreLocation: false,
              // ignoreFieldNorm: false,
              keys: ["name", "username", "gender", "id"],
            }
        }
    },
    computed: {
      // ...mapState({
        
      //   staffs: (state) => state.staff.staffs,
      // }),
    },
  methods: {
    decodeHtml(html) {
      let txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    },
    deleteTag(list){
      let index = this.searchCriterialList.findIndex(index=>index == list)
      console.log(index)
      if(index > -1){
        this.searchCriterialList.splice(index,1)
      }
  
    },
    // searchStaff(event) {
    
    //   const fuse = new Fuse(this.players, this.optionsFilter);
    //   console.log(fuse);
    //   const result = fuse.search(this.staffpattern);
    //   // this.$store.dispatch('players/filterPlayer', result)
    //   console.log(result);
    //   return result;
    // },
  }, 
  
};
