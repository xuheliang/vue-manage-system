import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    component: () => import('@/layout/index'),
    meta: {title: '自述文件'},
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/Dashboard'),
        meta: {title: '系统首页'}
      },
      {
        path: '/icon',
        component: () => import('@/views/Icon'),
        meta: {title: '自定义图标'}
      },
      {
        path: '/table',
        component: () => import('@/views/BaseTable'),
        meta: {title: '基础表格'}
      },
      {
        path: '/tabs',
        component: () => import('@/views/Tabs'),
        meta: {title: 'tab选项卡'}
      },
      {
        path: '/form',
        component: () => import('@/views/BaseForm'),
        meta: {title: '基本表单'}
      },
      {
        path: '/editor',
        component: () => import('@/views/VueEditor'),
        meta: {title: '富文本编辑器'}
      },
      {
        path: '/markdown',
        component: () => import('@/views/Markdown'),
        meta: {title: 'markdown编辑器'}
      },
      {
        path: '/upload',
        component: () => import('@/views/Upload'),
        meta: {title: '文件上传'}
      },
      {
        path: '/charts',
        component: () => import('@/views/BaseCharts'),
        meta: {title: 'scharts图表'}
      },
      {
        path: '/drag',
        component: () => import('@/views/Draglist'),
        meta: {title: '拖拽列表'}
      },
      {
        path: '/dialog',
        component: () => import('@/views/DragDialog'),
        meta: {title: '拖拽弹框'}
      },
      {
        path: '/i18n',
        componet: () => import('@/views/I18n'),
        meta: {title: '国际化'}
      },
      {
        path: '/permission',
        component: () => import('@/views/Permission'),
        meta: {title: '权限测试',permission: true}
      },
      {
        path: '/404',
        component: () => import('@/views/404'),
        meta: {title: '404'}
      },
      {
        path: '/403',
        component: () => import('@/views/403'),
        meta: {title: '403'}
      }
    ]
  },
  {
    path: 'login',
    component: () => import('@/views/login'),
    meta: {title: '登陆'}
  },
  {
    path: '*',
    redirect: '/404'
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
