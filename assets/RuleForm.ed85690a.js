import{b as m}from"./formData.aeb521f1.js";import{B as c}from"./BasicForm.ea101237.js";import{P as n}from"./PageWrapper.1edc03a2.js";import{_ as u}from"./index.554bc004.js";import{r as a,o as p,j as d,w as f,b as _}from"./vendor.0028b10d.js";import"./BasicUpload.4c9216d9.js";const b={name:"RuleForm",components:{BasicForm:c,PageWrapper:n},data(){return{cardTitle:this.$route.meta.title,schemas:m(),form:{input:"",input_number:12321,select:"value1",time_picker:"16:40:33",date_picker:"2021-06-18",cascader:["value2","value1"],slider:17,radio_group:"value2",checkbox_group:["value1","value2"],checkbox_button_group:["value1"],radio_button_group:"value2",date_time_picker:"2021-06-17 00:00:00",time_select:"11:00"}}},methods:{handleReset(){this.$refs.formRef.resetFields()},handleSubmit(){this.$refs.formRef.validate(t=>{console.log("e",t)})}}};function h(t,o,g,v,e,r){const s=a("BasicForm"),l=a("PageWrapper");return p(),d(l,{title:e.cardTitle,"sub-title":e.cardTitle,"content-background":"","content-full-height":""},{default:f(()=>[_(s,{class:"p10",ref:"formRef",modelValue:e.form,"onUpdate:modelValue":o[0]||(o[0]=i=>e.form=i),schemas:e.schemas,onReset:r.handleReset,onSubmit:r.handleSubmit,size:"small","auto-width":"","label-width":"150px","label-position":"right"},null,8,["modelValue","schemas","onReset","onSubmit"])]),_:1},8,["title","sub-title"])}var P=u(b,[["render",h]]);export{P as default};
