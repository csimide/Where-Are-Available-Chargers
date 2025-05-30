import { campusConfig } from '@/types/campus-config';

const config = {
  /********** 公告栏内容 **********/
  announcementBoard: {
    enabled: true, // 是否启用公告栏
    title: '维护提醒', // 标题（支持 HTML）
    content:
      '由于充电设施提供方变动，网站近期可能进入维护状态，届时将暂时下线九龙湖校区查询功能', // 内容（支持 HTML）

    color: 'orange', // 颜色
    variant: 'tonal' as
      | 'text'
      | 'flat'
      | 'elevated'
      | 'tonal'
      | 'outlined'
      | 'plain', // 样式（只修改 as 前的内容，as 后为可选值）
    border: 'start' as boolean | 'top' | 'end' | 'bottom' | 'start', // 边框位置（只修改 as 前的内容，as 后为可选值）
  },

  /********** 状态查询、显示相关 **********/
  campuses: [
    {
      id: 'jiulonghu',
      name: '九龙湖',
      weatherApiPath: '/weather/jiulonghu',
      statusApiPath: '/get_status/jiulonghu',
      autoUpdateMaxTimes: 6, // 自动更新最大次数
      autoUpdateInterval: 30 * 1000, // 前端自动拉取数据间隔
      backendUpdateInterval: 20 * 1000, // 后端数据更新间隔（要与后端同步）// TODO：改为从后端获取
      dataExpirationTime: 1.5 * 60 * 1000, // 提示数据过期时间
      stationThresholdPercentage: 0.25, // 充电站余量紧张的阈值
      statusRequestTimeout: 10 * 1000, // 状态请求超时时间
    } as campusConfig,
    {
      id: 'dingjiaqiao',
      name: '丁家桥',
      weatherApiPath: '/weather/dingjiaqiao',
      statusApiPath: '/get_status/dingjiaqiao',
      autoUpdateMaxTimes: 6, // 自动更新最大次数
      autoUpdateInterval: 70 * 1000, // 前端自动拉取数据间隔
      backendUpdateInterval: 60 * 1000, // 后端数据更新间隔（要与后端同步）// TODO：改为从后端获取
      dataExpirationTime: 1.5 * 60 * 1000, // 提示数据过期时间
      stationThresholdPercentage: 0.25, // 充电站余量紧张的阈值
      statusRequestTimeout: 15 * 1000, // 状态请求超时时间
    } as campusConfig,
    {
      id: 'wuxi',
      name: '无锡',
      weatherApiPath: '/weather/wuxi',
      statusApiPath: '/get_status/wuxi',
      autoUpdateMaxTimes: 6, // 自动更新最大次数
      autoUpdateInterval: 70 * 1000, // 前端自动拉取数据间隔
      backendUpdateInterval: 60 * 1000, // 后端数据更新间隔（要与后端同步）// TODO：改为从后端获取
      dataExpirationTime: 1.5 * 60 * 1000, // 提示数据过期时间
      stationThresholdPercentage: 0.25, // 充电站余量紧张的阈值
      statusRequestTimeout: 15 * 1000, // 状态请求超时时间
    } as campusConfig,
  ],

  /********** 组件显示相关 **********/
  // 底栏
  bottomBarUpdateInterval: 1000, // 底栏定时器更新间隔
  bottomBarInitDelay: 0.5 * 1000, // 底栏初始弹出的延迟时间
  bottomBarReshowDelay: 1.5 * 1000, // 底栏隐藏后再次弹出的延迟时间
  // 进度条
  progressBarHideDelay: 0.5 * 1000, // 页面跳转完成后进度条隐藏的延迟时间
  progressBarMinUpdateTimes: 5, // 进度条最小更新次数（不完全是最小，会被路由守卫打断）
  progressBarUpdateIntervalRange: [100, 500], // 进度条更新间隔范围
  progressBarValues: [0, 70, 100], // 进度条在 `beforeEach`、`beforeResolve`、`afterEach` 时的值
  // 叠层
  zIndex: {
    appTopBar: 1500,
    shareMenu: 1400,
    appSideDrawer: 1300,
    bottomInfoBar: 1200,
    statusDetailDrawer: 1100,
    overlay: 1000,
  },

  // 用于控制用户浏览器保存校区信息的 LocalStorage Key
  CAMPUS_INDEX_STORAGE_KEY: 'selectedCampusIndex',

  /********** 链接 **********/
  tencentMapKey: import.meta.env.VITE_TENCENT_MAP_KEY, // 腾讯地图 API Key
  tencentMapAppName: import.meta.env.VITE_TENCENT_MAP_APP_NAME, // 腾讯地图 API AppName
  tencentMapUrl:
    'https://apis.map.qq.com/tools/poimarker?' +
    'type=0' +
    '&marker=coord:{lat},{lng};title:{title};addr:{addr}' +
    `&key=${import.meta.env.VITE_TENCENT_MAP_KEY}` +
    `&referer=${import.meta.env.VITE_TENCENT_MAP_APP_NAME}`, // 腾讯地图标记点地址，花括号内为待填充参数（用于`地图页面`）

  // 以下变量可以被环境变量覆盖，以 `VITE_` 开头的是对应的环境变量
  apiBaseUrl: '/api', // API 的 baseURL | `VITE_API_URL`
  challengeUrl: '/api/challenge', // 用于网页验证质询 | `VITE_CHALLENGE_URL`
  classicVersionUrl: 'https://milky-way.injs.eu/classical', // 旧版页面地址（用于`侧栏-回到旧版`） | `VITE_CLASSIC_VER_URL`
  surveyUrl: 'https://example.com', // 反馈问卷地址（用于`反馈页面`） | `VITE_SURVEY_URL`
  thisSiteUrl: 'https://chargers.injs.eu', // 当前本站地址（用于`分享菜单`） | `VITE_SITE_URL`
  contactEmail: 'example@example.com', // 联系邮箱 | `VITE_CONTACT_EMAIL`
  apiDocUrl: 'https://milky-way.injs.eu/doc/ver4_pub/api/get_status/', // API 文档链接（用于`页脚`） | `VITE_API_DOC_URL`
  projectDocUrl: 'https://milky-way.injs.eu/doc/', // 项目文档链接（`页脚`和`侧栏-项目文档`） | `VITE_PROJ_DOC_URL`
};

// 开发环境：
if (import.meta.env.DEV) {
  for (const campus of config.campuses) {
    campus.autoUpdateMaxTimes = 3;
    campus.autoUpdateInterval = 5 * 1000;
    campus.backendUpdateInterval = 2 * 1000;
    campus.dataExpirationTime = 10 * 1000;
    // config.statusRequestTimeout = 1.3 * 1000;
  }
}

// 环境变量覆盖部分设置：
config.apiBaseUrl = import.meta.env.VITE_API_URL || config.apiBaseUrl;
config.challengeUrl = import.meta.env.VITE_CHALLENGE_URL || config.challengeUrl;
config.classicVersionUrl =
  import.meta.env.VITE_CLASSIC_VER_URL || config.classicVersionUrl;
config.surveyUrl = import.meta.env.VITE_SURVEY_URL || config.surveyUrl;
config.thisSiteUrl = import.meta.env.VITE_SITE_URL || config.thisSiteUrl;
config.contactEmail = import.meta.env.VITE_CONTACT_EMAIL || config.contactEmail;
config.apiDocUrl = import.meta.env.VITE_API_DOC_URL || config.apiDocUrl;
config.projectDocUrl =
  import.meta.env.VITE_PROJ_DOC_URL || config.projectDocUrl;

export default config;
