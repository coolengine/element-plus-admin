<template>
  <el-row>
    <el-col>
      <BasicCard title="渐变堆叠面积图">
        <div ref="elRef" style="height: 380px;width: 100%;"></div>
      </BasicCard>
    </el-col>
  </el-row>
</template>

<script>
import {BasicCard} from '@/components/Card'
import {useECharts} from "@/composables/useECharts";
import {getGradientStackedData} from '../data'
import {onMounted} from "vue";

export default {
  name: "AreaStackGradientChart",
  components: {BasicCard},
  setup() {
    const {elRef, setOptions,echarts} = useECharts();

    onMounted(() => {
      setOptions(getGradientStackedData(echarts))
    })

    return {
      elRef,
    }
  }
}
</script>

<style scoped>

</style>