<template>
  <PageWrapper
    :title="$route['meta']['title']"
    :sub-title="$route['meta']['title']"
    content-background>
    <el-card shadow="none">
      <BasicTable :data="tableData" :columns="tableColumns" row-key="id" size="small">
        <template #action>
          <el-button type="text" size="mini">编辑</el-button>
          <el-button type="text" size="mini" style="color: red">删除</el-button>
        </template>
      </BasicTable>
    </el-card>
  </PageWrapper>
</template>

<script>
import {BasicTable} from "@/components/Table";
import {PageWrapper} from '@/components/Page';

import {getBasicColumns, getTreeData} from './tableData.js';
import {reactive, toRefs} from "vue";

export default {
  name: 'TreeTable',
  components: {BasicTable, PageWrapper},
  setup() {
    const state = reactive({
      tableColumns: getBasicColumns(),
      tableData: getTreeData(),
    });

    return {
      ...toRefs(state),
    }
  }
}
</script>
