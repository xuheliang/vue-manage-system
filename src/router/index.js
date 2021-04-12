import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: '系统首页',
    component: () => import('@/views/home/index')
  },
  {
    path: '/table',
    name: '基础表格',
    component: () => import('@/views/table/index')
  },
  {
    path: '/tab',
    name: 'tab选项卡',
    component: () => import('@/views/tab/index')
  },
  {
    path: '/form',
    name: '表单相关',
    component: () => import('@/views/form/index'),
    children: [
      {
        path: 'baseForm',
        name: '基本表单',
        component: () => import('@/views/form/baseForm/index')
      },
      {
        path: 'threeForm',
        name: '三级菜单',
        component: () => import('@/views/form/threeForm/index'),
        children: [
          {
            path: 'richText',
            name: '富文本编辑器',
            component: () => import('@/views/form/threeForm/richText/index')
          },
          {
            path: 'markDown',
            name: 'markDown编辑器',
            component: () => import('@/views/form/threeForm/markDown/index')
          }
        ]
      },
      {
        path: 'fileUpload',
        name: '文件上传',
        component: () => import('@/views/form/fileUpload/index')
      }
    ]
  },
  {
    path: '/icon',
    name: '自定义图标',
    component: () => import('@/views/icon/index')
  },
  {
    path: '/chart',
    name: 'schart图标',
    component: () => import('@/views/chart/index')
  },
  {
    path: '/drag',
    name: '拖拽组件',
    component: () => import('@/views/drag/index'),
    children: [
      {
        path: 'list',
        name: '拖拽列表',
        component: () => import('@/views/drag/list/index')
      },
      {
        path: 'box',
        name: '拖拽弹框',
        component: () => import('@/views/drag/box/index')
      }
    ]
  },
  {
    path: '/i18n',
    name: '国际化功能',
    component: () => import('@/views/i18n/index')
  },
  {
    path: '/err',
    name: '错误处理',
    component: () => import('@/views/err/index'),
    children: [
      {
        path: 'accessTest',
        name: '权限测试',
        component: () => import('@/views/err/accessTest')
      },
      {
        path: '404',
        name: '404页面',
        component: () => import('@/views/err/404')
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
