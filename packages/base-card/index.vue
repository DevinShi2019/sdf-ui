<template>
  <div :class="['sdf-ui',cardThemeClass,cardSideClass]">
    <div class="sdf-ui__title" v-if="title">{{title}}</div>
    <div class="sdf-ui__content">
      <slot name="content"></slot>
    </div>
    <div class="sdf-ui__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
import create from '../utils/create-basic'
import VcLoading from '../loading/index.vue'
import VcChatIcon from '../icon/index.vue'
export default create({
  name: 'base',
  props: {
    title: String,
    themeType: {
      type: String,
      default: 'default'
    },
    sideType: {
      type: String,
      default: 'right'
    }
  },
  computed: {
    cardThemeClass () {
      return 'sdf-ui--' + this.themeType
    },
    cardSideClass () {
      return 'sdf-ui--' + this.sideType
    }
  },
  components: {
    VcLoading,
    VcChatIcon
  }
})
</script>
