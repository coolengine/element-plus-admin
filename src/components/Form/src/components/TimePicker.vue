<template>
  <el-time-picker v-model="VModel" v-bind="{...$props,...$attrs}" value-format="HH:mm:ss"></el-time-picker>
</template>

<script>
import {toRefs, watch} from 'vue'

export default {
  name: "BasicSelect",
  props: {
    modelValue: {
      type: [Number, String, Array, Object],
    }
  },
  setup(props, {emit}) {
    const {modelValue} = toRefs(props);
    const VModel = modelValue;

    watch(() => VModel.value, (newVal) => {
      emit('update:modelValue', newVal);
    })
    return {
      VModel,
    }
  },
}
</script>

<style scoped>

</style>