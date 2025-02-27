import Layout from "@/layouts/index.vue";

export default [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    meta: {title: '权限', icon: 'el-icon-s-cooperation', menu: true},
    children: [
      {
        path: 'page',
        name: 'permission-page',
        meta: {title: '页面权限', menu: true, affix: false},
        component: () => import('@/views/demo/permission/page'),
      },
      {
        path: 'button',
        name: 'permission-button',
        meta: {title: '按钮权限', menu: true, affix: false},
        component: () => import('@/views/demo/permission/button'),
      },
    ]
  },
];