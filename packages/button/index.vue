<template>
  <div
    @click="$emit('click')"
    class="sdf-ui-button"
    :class="[
      type ? 'sdf-ui-button--' + type : '',
      size ? 'sdf-ui-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-plain': plain,
        'is-square': square,
        'is-shadow':shadow,
        'is-opacity':opacity
      }
    ]"
  >
    <slot></slot>
  </div>
</template>
<script>
import create from '../utils/create-basic'
export default create({
  name: 'button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    shadow: Boolean,
    disabled: Boolean,
    square: Boolean,
    plain: Boolean,
    opacity: Boolean
  }
})
</script>
