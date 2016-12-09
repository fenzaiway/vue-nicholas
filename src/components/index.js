import Vue from 'vue'

import NiIndex from './NiIndex'
import NiNav from './NiNav'
import NiIndexTop from './NiIndexTop'
import NiFooter from './NiFooter'
import NiSideBar from './NiSideBar'


const NiBlog = {
  install:function(Vue, options){
    Vue.mixin({
      components:{
        NiIndex,
        NiNav,
        NiIndexTop,
        NiFooter,
        NiSideBar
      }
    })
  }
}

export default NiBlog