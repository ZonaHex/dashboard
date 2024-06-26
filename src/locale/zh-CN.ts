import localeDashboard from '@/views/dashboard/locale/zh-CN'
import localeSetting from '@/components/global-setting/locale/zh-CN'

export default {
  'menu.dashboard': '仪表盘',
  'menu.dashboard.query': '查询',
  'menu.dashboard.tables': '表',
  'menu.dashboard.scripts': '脚本',
  'menu.dashboard.playground': '沙盒',
  'menu.dashboard.status': '状态',
  'menu.dashboard.ingest': '摄取',
  'menu.dashboard.influxdb': 'InfluxDB 行协议',
  'menu.dashboard.write': '写入',
  'menu.dashboard.upload': '上传',
  'menu.dashboard.input': '输入',
  'menu.server.dashboard': '仪表盘-服务端',
  'menu.server.workplace': '工作台-服务端',
  'menu.server.monitor': '实时监控-服务端',
  'menu.list': '列表页',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.form': '表单页',
  'menu.profile': '详情页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'menu.faq': '常见问题',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
  'guide.welcome': 'Welcome!',
  'guide.confirm': 'Confirm',
  'playground.create': 'OK',
  'playground.refreshTitle': 'Warning',
  'playground.refreshNote': 'The Playground has been reclaimed due to timeout. Click OK to re-create the playground',
  'playground.import': 'Import {lines} lines in {time}ms',
  'copied': 'Copied',
  ...localeDashboard,
  ...localeSetting,
}
