<template>
  <Card v-for="(item,ind) in applicationList" :key="ind" shadow="hover" :header="header">
    <template #text-custom>
      <div class="card-application">
        <div class="card-application-top">
          <el-avatar :src="item.url" size="small" class="card-application-icon"></el-avatar>
          <span class="card-application-title">{{ item.title }}</span>
        </div>
        <div class="card-application-main">
          <p>
            <span>活跃用户</span>
            <span>{{ item.active }}<span style="color: #000000d9;font-size: 14px;font-weight: 400">万</span></span>
          </p>
          <p>
            <span>新增用户</span>
            <span>{{ item.new }}</span>
          </p>
        </div>
        <div class="card-application-divider">
          <Divider
            direction="vertical"
            :iconName="item.icon"
            :disabled='disabled'
            :tipContent="item.text"
            :color="item.color"
            v-for="(item,ind) in applicationActions" :key="ind"
          />
          <el-dropdown>
            <span class="el-dropdown-link">
                <i class="el-icon-more-outline"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item icon="el-icon-plus">1st menu item</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">2nd menu item</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus-outline">3ird item</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </template>
  </Card>
</template>
<script>
import {defineComponent, ref} from 'vue';
import {Card} from '@/components/Card';
import {applicationList, applicationActions} from './data.js';
import {Divider} from '@/components/Divider';

export default defineComponent({
  components: {Card, Divider},
  setup() {
    return {
      applicationList,
      applicationActions,
      header: ref(false),
      disabled: ref(false)
    }
  }
})
</script>
<style lang="scss" scoped>
.card-application {
  text-align: center;

  .card-application-divider {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #f0f0f0;
    padding: 10px 0;
    box-sizing: border-box;
    overflow: auto;
    :deep(.el-dropdown) {
      padding: 0 23px;
    }
    :deep(.basic-divider) {
      .divider-content {
        padding: 0 20px;
      }
      &:last-child {
        padding-right: 0;
        .el-divider--vertical {
          width: inherit;
        }
      }
    }
  }

  .card-application-top {
    text-align: left;
    margin: 12px 0 0px 23px;

    .card-application-icon {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }

    .card-application-title {
      overflow: hidden;
      color: rgba(0, 0, 0, .85);
      font-weight: 500;
      font-size: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
      vertical-align: super;
    }
  }

  .card-application-main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 57px;
    box-sizing: border-box;
    align-items: center;

    p {
      display: grid;

      span {
        &:first-child {
          color: rgba(0, 0, 0, .45);
          font-size: 12px;
          line-height: 20px;
          margin-bottom: 5px;
        }

        &:last-child {
          font-size: 22px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>