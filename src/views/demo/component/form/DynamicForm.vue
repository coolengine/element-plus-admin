<template>
  <PageWrapper
    :title="cardTitle"
    :sub-title="cardTitle"
    content-background>
    <div style="padding: 30px;">
      <el-button size="mini" @click="changFieldLabel(0)">更改字段1Label</el-button>
      <el-button size="mini" @click="changFieldValue(0)">更改字段1Value</el-button>
      <el-button size="mini" @click="appendSchema">向最后追加一个字段</el-button>
      <el-button size="mini" @click="deleteLastSchema">删除最后一个字段</el-button>
      <el-button size="mini" @click="autoWidth=!autoWidth">自动宽度{{ autoWidth }}</el-button>
    </div>
    <BasicForm class="m10" v-model="form"
               :schemas="schemas"
               @reset="handleReset"
               @submit="handleSubmit"
               size="small"
               :auto-width="autoWidth"
               label-width="150px"
               label-position="right"></BasicForm>
  </PageWrapper>
</template>

<script>
import {getDynamicFormData} from "@/views/demo/component/form/formData.js";
import {BasicForm} from "@/components/Form";
import {PageWrapper} from '@/components/Page';

export default {
  name: 'DynamicForm',
  components: {BasicForm, PageWrapper},
  data() {
    return {
      cardTitle: this.$route.meta.title,
      schemas: getDynamicFormData(),
      autoWidth: false,
      form: {
        input: "wqewqfdas",
        input_number: 12321,
        select: "value1",
        time_picker: "16:40:33",
        date_picker: "2021-06-18",
        cascader: ["value2", "value1"],
        slider: 17,
        radio_group: "value2",
        checkbox_group: ["value1", "value2"],
        checkbox_button_group: ["value1"],
        radio_button_group: "value2",
        date_time_picker: "2021-06-17 00:00:00",
        time_select: "11:00"
      },
    }
  },
  methods: {
    changFieldLabel(index) {
      this.schemas[index]['label'] = 'Label';
    },
    changFieldValue(index) {
      const field = this.schemas[index]['field'];
      this.form[field] = 'newValue'
    },
    appendSchema() {
      const schema = {
        field: 'newField',
        label: '新字段',
        component: 'Input',
        colProps: {
          span: 8,
        }
      }
      this.schemas.push(schema);
    },
    deleteLastSchema() {
      this.schemas.splice(this.schemas.length - 1, 1);
    },
    handleReset() {
      console.log('reset-1111')
    },
    handleSubmit() {
      console.log('submit-2222')
    },
  }
}
</script>
