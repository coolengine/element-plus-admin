import{b as m}from"./formData.aeb521f1.js";import{B as n}from"./BasicForm.930b206a.js";import{P as c}from"./PageWrapper.72b87a06.js";import{_ as u}from"./index.680a61ef.js";import{r,o as p,j as d,w as f,b as _}from"./vendor.b8da4354.js";import"./BasicUpload.14ee1cba.js";const b={name:"RuleForm",components:{BasicForm:n,PageWrapper:c},data(){return{cardTitle:this.$route.meta.title,schemas:m(),form:{input:"",input_number:12321,select:"value1",time_picker:"16:40:33",date_picker:"2021-06-18",cascader:["value2","value1"],slider:17,radio_group:"value2",checkbox_group:["value1","value2"],checkbox_button_group:["value1"],radio_button_group:"value2",date_time_picker:"2021-06-17 00:00:00",time_select:"11:00"}}},methods:{handleReset(){this.$refs.formRef.resetFields()},handleSubmit(){this.$refs.formRef.validate(t=>{console.log("e",t)})}}};function h(t,o,g,v,e,a){const s=r("BasicForm"),l=r("PageWrapper");return p(),d(l,{title:e.cardTitle,"sub-title":e.cardTitle,"content-background":"","content-full-height":""},{default:f(()=>[_(s,{class:"p10",ref:"formRef",modelValue:e.form,"onUpdate:modelValue":o[0]||(o[0]=i=>e.form=i),schemas:e.schemas,onReset:a.handleReset,onSubmit:a.handleSubmit,size:"small","auto-width":"","label-width":"150px","label-position":"right"},null,8,["modelValue","schemas","onReset","onSubmit"])]),_:1},8,["title","sub-title"])}var P=u(b,[["render",h]]);export{P as default};
