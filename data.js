const siteData = {
  categories: [
    {
      id: "tags",
      name: "标签",
      icon: "tag",
      description: "按标签浏览所有外链"
    },
    {
      id: "news",
      name: "资讯",
      icon: "newspaper",
      description: "财经新闻媒体、研究报告、市场数据"
    },
    {
      id: "stocks-cn",
      name: "A股",
      icon: "stocks-cn",
      description: "中国大陆股票市场：券商、交易所等"
    },
    {
      id: "stocks-hk",
      name: "港股",
      icon: "stocks-hk",
      description: "香港股票市场：券商、交易所等"
    },
    {
      id: "stocks-us",
      name: "美股",
      icon: "stocks-us",
      description: "美国股票市场：券商、交易所、投行等"
    },
    {
      id: "funds",
      name: "基金",
      icon: "fund",
      description: "公募基金、私募基金、基金销售平台"
    },
    {
      id: "etf",
      name: "ETF",
      icon: "etf",
      description: "交易所交易基金：指数ETF、行业ETF、债券ETF等"
    },
    {
      id: "options",
      name: "期权",
      icon: "tools",
      description: "股票期权、指数期权、期权策略工具"
    },
    {
      id: "bonds",
      name: "债券",
      icon: "bond",
      description: "国债、企业债、可转债、信用评级、固定收益投资"
    },
    {
      id: "reits",
      name: "REITs",
      icon: "realestate",
      description: "房地产投资信托基金"
    },
    {
      id: "index-futures",
      name: "期指",
      icon: "index-futures",
      description: "股指期货、指数衍生品"
    },
    {
      id: "commodities",
      name: "大宗商品",
      icon: "base-metals",
      description: "大宗商品综合：能源、金属、农产品"
    },
    {
      id: "energy",
      name: "能源",
      icon: "energy",
      description: "原油、天然气等能源投资与期货"
    },
    {
      id: "precious-metals",
      name: "贵金属",
      icon: "precious-metals",
      description: "黄金、白银等贵金属投资与期货"
    },
    {
      id: "base-metals",
      name: "基础金属",
      icon: "base-metals",
      description: "铜、铝等基础金属投资与期货"
    },
    {
      id: "agriculture",
      name: "农产品",
      icon: "agriculture",
      description: "大豆、玉米、小麦等农产品期货"
    },
    {
      id: "forex",
      name: "外汇",
      icon: "forex",
      description: "外汇交易：货币对、外汇经纪商、央行"
    },
    {
      id: "realestate",
      name: "房产",
      icon: "realestate",
      description: "房产投资平台、房产服务"
    },
    {
      id: "insurance",
      name: "保险",
      icon: "insurance",
      description: "国内外保险公司、保险产品"
    },
    {
      id: "banking",
      name: "银行",
      icon: "banking",
      description: "国内外银行、线上银行"
    },
    {
      id: "crypto",
      name: "加密货币",
      icon: "crypto",
      description: "加密货币交易所、主流币种"
    },
    {
      id: "defi",
      name: "DeFi",
      icon: "defi",
      description: "去中心化金融：DEX、借贷、流动性协议"
    },
    {
      id: "nft",
      name: "NFT",
      icon: "nft",
      description: "NFT交易平台、数字藏品"
    },
    {
      id: "pe-vc",
      name: "PE/VC",
      icon: "default",
      description: "私募股权、风险投资、创业投资"
    },
    {
      id: "retirement",
      name: "退休养老",
      icon: "insurance",
      description: "养老金、401K、IRA、社保养老规划"
    },
    {
      id: "personal-finance",
      name: "个人理财",
      icon: "fund",
      description: "记账工具、财务规划、税务优化、理财社区"
    },
    {
      id: "payment",
      name: "支付/金融科技",
      icon: "crypto",
      description: "支付平台、金融科技、数字钱包"
    },
    {
      id: "trust",
      name: "信托服务",
      icon: "banking",
      description: "家族信托、慈善信托、资产托管"
    },
    {
      id: "accounting",
      name: "会计/审计",
      icon: "tools",
      description: "会计师事务所、审计机构、财务咨询"
    },
    {
      id: "credit",
      name: "征信/信用",
      icon: "bond",
      description: "征信机构、信用查询、信用报告"
    },
    {
      id: "alternative",
      name: "另类投资",
      icon: "default",
      description: "对冲基金、艺术品、收藏品、大宗商品"
    },
    {
      id: "education",
      name: "学习社区",
      icon: "newspaper",
      description: "投资教育、在线课程、投资者社区"
    },
    {
      id: "regulators",
      name: "监管机构",
      icon: "insurance",
      description: "各国金融监管机构"
    },
    {
      id: "tools",
      name: "工具",
      icon: "tools",
      description: "交易平台、行情软件、金融终端"
    }
  ],

  links: [
    // ==================== 资讯 - news (25个) ====================
    { category: "news", name: "东方财富", url: "https://www.eastmoney.com", description: "中国领先财经门户，行情资讯社区", tags: ["财经门户", "行情", "社区"], region: "中国", recommended: true },
    { category: "news", name: "雪球", url: "https://xueqiu.com", description: "投资者社区，股票讨论组合投资", tags: ["社区", "讨论", "投资"], region: "中国", recommended: true },
    { category: "news", name: "新浪财经", url: "https://finance.sina.com.cn", description: "新浪财经频道", tags: ["财经新闻"], region: "中国", recommended: true },
    { category: "news", name: "华尔街见闻", url: "https://wallstreetcn.com", description: "全球财经资讯", tags: ["资讯", "全球"], region: "中国", recommended: true },
    { category: "news", name: "Bloomberg彭博", url: "https://www.bloomberg.com", description: "全球财经媒体与专业终端", tags: ["财经媒体", "终端", "全球"], region: "美国", recommended: true },
    { category: "news", name: "路透社Reuters", url: "https://www.reuters.com", description: "路透社财经新闻", tags: ["财经媒体", "全球"], region: "英国", recommended: true },
    { category: "news", name: "金融时报FT", url: "https://www.ft.com", description: "Financial Times英国金融时报", tags: ["财经媒体", "英国"], region: "英国", recommended: true },
    { category: "news", name: "华尔街日报WSJ", url: "https://www.wsj.com", description: "Wall Street Journal华尔街日报", tags: ["财经媒体", "美国"], region: "美国", recommended: true },
    { category: "news", name: "Seeking Alpha", url: "https://seekingalpha.com", description: "投资分析社区和股票研究", tags: ["资讯", "分析", "美股"], region: "美国", recommended: true },
    { category: "news", name: "CNBC", url: "https://www.cnbc.com", description: "美国财经电视台CNBC", tags: ["资讯", "视频", "美股"], region: "美国", recommended: true },
    { category: "news", name: "CoinDesk", url: "https://www.coindesk.com", description: "加密货币新闻媒体", tags: ["资讯", "加密货币"], region: "全球", recommended: true },
    { category: "news", name: "CoinTelegraph", url: "https://cointelegraph.com", description: "加密货币新闻媒体", tags: ["资讯", "加密货币"], region: "全球", recommended: true },
    { category: "news", name: "证券时报", url: "https://www.stcn.com", description: "证券类专业媒体", tags: ["资讯", "证券"], region: "中国", recommended: true },
    { category: "news", name: "第一财经", url: "https://www.yicai.com", description: "第一财经全媒体", tags: ["资讯", "财经"], region: "中国", recommended: true },
    { category: "news", name: "财新网", url: "https://www.caixin.com", description: "财经新闻深度报道", tags: ["资讯", "深度报道"], region: "中国", recommended: false },
    { category: "news", name: "21世纪经济报道", url: "https://www.21jingji.com", description: "21世纪经济报道", tags: ["资讯", "财经"], region: "中国", recommended: false },
    { category: "news", name: "MarketWatch", url: "https://www.marketwatch.com", description: "道琼斯旗下财经媒体", tags: ["资讯", "美股", "数据"], region: "美国", recommended: true },
    { category: "news", name: "Yahoo Finance", url: "https://finance.yahoo.com", description: "雅虎财经行情新闻", tags: ["行情", "新闻", "美股"], region: "美国", recommended: true },
    { category: "news", name: "Investopedia", url: "https://www.investopedia.com", description: "投资知识百科教育平台", tags: ["教育", "知识", "百科"], region: "美国", recommended: true },
    { category: "news", name: "The Economist经济学人", url: "https://www.economist.com", description: "The Economist经济学人杂志", tags: ["杂志", "经济", "全球"], region: "英国", recommended: false },
    { category: "news", name: "财联社", url: "https://www.cls.cn", description: "财联社快讯7x24小时", tags: ["快讯", "实时"], region: "中国", recommended: true },
    { category: "news", name: "界面新闻", url: "https://www.jiemian.com", description: "界面新闻财经频道", tags: ["资讯", "商业"], region: "中国", recommended: false },
    { category: "news", name: "每日经济新闻", url: "https://www.nbd.com.cn", description: "每经网财经新闻", tags: ["资讯", "财经"], region: "中国", recommended: false },
    { category: "news", name: "Fox Business", url: "https://www.foxbusiness.com", description: "福克斯商业新闻", tags: ["资讯", "商业", "美国"], region: "美国", recommended: false },
    { category: "news", name: "Business Insider", url: "https://www.businessinsider.com", description: "商业内幕科技商业新闻", tags: ["资讯", "商业", "科技"], region: "美国", recommended: false },

    // ==================== A股 - stocks-cn (18个) ====================
    { category: "stocks-cn", name: "华泰证券", url: "https://www.htsc.com.cn", description: "头部券商股票开户理财服务", tags: ["券商", "开户"], region: "中国", recommended: true },
    { category: "stocks-cn", name: "中信证券", url: "https://www.cs.ecitic.com", description: "国内最大券商股票债券资产管理", tags: ["券商", "资产管理"], region: "中国", recommended: true },
    { category: "stocks-cn", name: "国泰君安", url: "https://www.gtja.com", description: "头部券商股票期货融资融券", tags: ["券商", "期货"], region: "中国", recommended: true },
    { category: "stocks-cn", name: "中金公司CICC", url: "https://www.cicc.com", description: "顶级投行股票承销并购咨询", tags: ["投行", "并购"], region: "中国", recommended: true },
    { category: "stocks-cn", name: "招商证券", url: "https://www.newone.com.cn", description: "大型券商股票期货基金", tags: ["券商"], region: "中国", recommended: false },
    { category: "stocks-cn", name: "海通证券", url: "https://www.htsec.com", description: "大型综合券商", tags: ["券商", "综合"], region: "中国", recommended: false },
    { category: "stocks-cn", name: "广发证券", url: "https://www.gf.com.cn", description: "大型券商财富管理", tags: ["券商", "财富管理"], region: "中国", recommended: false },
    { category: "stocks-cn", name: "申万宏源", url: "https://www.swhysc.com", description: "大型券商研究实力强", tags: ["券商", "研究"], region: "中国", recommended: false },
    { category: "stocks-cn", name: "银河证券", url: "https://www.chinastock.com.cn", description: "大型券商零售业务强", tags: ["券商", "零售"], region: "中国", recommended: false },
    { category: "stocks-cn", name: "国信证券", url: "https://www.guosen.com.cn", description: "大型券商创新业务领先", tags: ["券商", "创新"], region: "中国", recommended: false },
    { category: "stocks-cn", name: "中信建投", url: "https://www.csc.com.cn", description: "大型券商投行优势明显", tags: ["券商", "投行"], region: "中国", recommended: false },
    { category: "stocks-cn", name: "光大证券", url: "https://www.ebscn.com", description: "光大集团旗下券商", tags: ["券商"], region: "中国", recommended: false },
    { category: "stocks-cn", name: "上海证券交易所SSE", url: "https://www.sse.com.cn", description: "A股上交所官网", tags: ["交易所"], region: "中国", recommended: true },
    { category: "stocks-cn", name: "深圳证券交易所SZSE", url: "https://www.szse.cn", description: "A股深交所官网", tags: ["交易所"], region: "中国", recommended: true },
    { category: "stocks-cn", name: "北京证券交易所BSE", url: "https://www.bse.cn", description: "北交所官网新三板", tags: ["交易所", "新三板"], region: "中国", recommended: true },
    { category: "stocks-cn", name: "中国结算CSDCC", url: "https://www.chinaclear.cn", description: "中国证券登记结算公司", tags: ["结算", "登记"], region: "中国", recommended: false },
    { category: "stocks-cn", name: "中国证券业协会", url: "https://www.sac.net.cn", description: "证券行业自律组织", tags: ["协会", "自律"], region: "中国", recommended: false },
    { category: "stocks-cn", name: "全国中小企业股份转让系统", url: "https://www.neeq.com.cn", description: "新三板官方平台", tags: ["新三板", "挂牌"], region: "中国", recommended: false },

    // ==================== 港股 - stocks-hk (12个) ====================
    { category: "stocks-hk", name: "富途证券Futu", url: "https://www.futuhk.com", description: "港美股知名券商0佣金中文界面", tags: ["券商", "美股", "0佣金"], region: "香港", recommended: true },
    { category: "stocks-hk", name: "老虎证券Tiger", url: "https://www.tigerbrokers.com", description: "港美股券商中文界面0佣金", tags: ["券商", "美股", "中文"], region: "中国", recommended: true },
    { category: "stocks-hk", name: "长桥证券Longbridge", url: "https://www.longbridge.com", description: "港美股券商新兴券商", tags: ["券商", "美股"], region: "香港", recommended: true },
    { category: "stocks-hk", name: "艾德证券EDDID", url: "https://www.eddid.com.hk", description: "港美股券商", tags: ["券商", "港股"], region: "香港", recommended: false },
    { category: "stocks-hk", name: "华盛证券HST", url: "https://www.hstong.com", description: "港美股券商", tags: ["券商", "港股"], region: "香港", recommended: false },
    { category: "stocks-hk", name: "尊嘉证券ZJJF", url: "https://www.zjjf.com", description: "港美股券商低佣金", tags: ["券商", "低佣金"], region: "香港", recommended: false },
    { category: "stocks-hk", name: "盈透证券IBKR港股", url: "https://www.interactivebrokers.com.hk", description: "盈透证券港股开户", tags: ["券商", "专业"], region: "香港", recommended: false },
    { category: "stocks-hk", name: "香港交易所HKEX", url: "https://www.hkex.com.hk", description: "港交所官网股票期货期权", tags: ["交易所", "期货"], region: "香港", recommended: true },
    { category: "stocks-hk", name: "披露易HKEXnews", url: "https://www.hkexnews.hk", description: "港交所信息披露平台", tags: ["信息披露", "公告"], region: "香港", recommended: false },
    { category: "stocks-hk", name: "智通财经", url: "https://www.zhitongcaijing.com", description: "港股资讯平台", tags: ["资讯", "港股"], region: "中国", recommended: false },
    { category: "stocks-hk", name: "阿斯达克AASTOCKS", url: "https://www.aastocks.com", description: "港股数据行情平台", tags: ["行情", "数据", "港股"], region: "香港", recommended: true },
    { category: "stocks-hk", name: "经济通ETNET", url: "https://www.etnet.com.hk", description: "香港财经资讯平台", tags: ["资讯", "港股"], region: "香港", recommended: false },

    // ==================== 美股 - stocks-us (20个) ====================
    { category: "stocks-us", name: "富达投资Fidelity", url: "https://www.fidelity.com", description: "美国最大券商之一股票基金债券退休账户", tags: ["券商", "基金", "退休账户"], region: "美国", recommended: true },
    { category: "stocks-us", name: "嘉信理财Schwab", url: "https://www.schwab.com", description: "美国知名券商股票交易共同基金", tags: ["券商", "基金"], region: "美国", recommended: true },
    { category: "stocks-us", name: "Robinhood", url: "https://www.robinhood.com", description: "美国零佣金券商股票期权加密货币", tags: ["券商", "0佣金", "期权"], region: "美国", recommended: true },
    { category: "stocks-us", name: "Interactive Brokers盈透", url: "https://www.interactivebrokers.com", description: "专业交易者首选低佣金全球市场", tags: ["券商", "专业", "低佣金", "全球"], region: "美国", recommended: true },
    { category: "stocks-us", name: "Vanguard", url: "https://investor.vanguard.com", description: "指数基金之王低成本指数基金", tags: ["基金", "指数基金", "低费率"], region: "美国", recommended: true },
    { category: "stocks-us", name: "摩根士丹利Morgan Stanley", url: "https://www.morganstanley.com", description: "全球顶级投行财富管理", tags: ["投行", "财富管理"], region: "美国", recommended: true },
    { category: "stocks-us", name: "高盛Goldman Sachs", url: "https://www.goldmansachs.com", description: "全球顶级投行投资银行并购", tags: ["投行", "并购"], region: "美国", recommended: true },
    { category: "stocks-us", name: "纽约证券交易所NYSE", url: "https://www.nyse.com", description: "NYSE官网全球最大股票交易所", tags: ["交易所"], region: "美国", recommended: true },
    { category: "stocks-us", name: "纳斯达克NASDAQ", url: "https://www.nasdaq.com", description: "NASDAQ官网科技股为主", tags: ["交易所", "科技股"], region: "美国", recommended: true },
    { category: "stocks-us", name: "E*TRADE", url: "https://www.etrade.com", description: "美国知名在线券商已被摩根大通收购", tags: ["券商", "在线"], region: "美国", recommended: false },
    { category: "stocks-us", name: "TD Ameritrade德美利", url: "https://www.tdameritrade.com", description: "美国券商已被嘉信收购", tags: ["券商", "研究工具"], region: "美国", recommended: false },
    { category: "stocks-us", name: "Ally Invest", url: "https://www.ally.com/invest", description: "美国低价券商", tags: ["券商", "低价"], region: "美国", recommended: false },
    { category: "stocks-us", name: "Webull微牛证券", url: "https://www.webull.com", description: "美国零佣金券商中文友好", tags: ["券商", "0佣金", "中文"], region: "美国", recommended: true },
    { category: "stocks-us", name: "Public.com", url: "https://public.com", description: "社交投资平台零佣金", tags: ["券商", "社交", "0佣金"], region: "美国", recommended: false },
    { category: "stocks-us", name: "SoFi Invest", url: "https://www.sofi.com/invest", description: "SoFi旗下投资平台", tags: ["券商", "金融科技"], region: "美国", recommended: false },
    { category: "stocks-us", name: "M1 Finance", url: "https://www.m1finance.com", description: "自动化投资组合平台", tags: ["券商", "自动投资"], region: "美国", recommended: false },
    { category: "stocks-us", name: "Firstrade第一证券", url: "https://www.firstrade.com", description: "华人友好的美股券商", tags: ["券商", "中文", "华人"], region: "美国", recommended: false },
    { category: "stocks-us", name: "TradeStation", url: "https://www.tradestation.com", description: "专业交易者平台", tags: ["券商", "专业", "技术分析"], region: "美国", recommended: false },
    { category: "stocks-us", name: "Charles Schwab嘉信理财", url: "https://www.schwab.com", description: "美国最大券商之一", tags: ["券商", "基金", "退休账户"], region: "美国", recommended: true },
    { category: "stocks-us", name: "Merrill Edge美林证券", url: "https://www.merrilledge.com", description: "美国银行旗下券商", tags: ["券商", "研究"], region: "美国", recommended: false },

    // ==================== 基金 - funds (22个) ====================
    { category: "funds", name: "天天基金", url: "https://fund.eastmoney.com", description: "国内最大基金销售平台净值查询", tags: ["基金销售", "净值"], region: "中国", recommended: "true" },
    { category: "funds", name: "蚂蚁财富支付宝", url: "https://finance.antgroup.com", description: "支付宝基金频道数万只基金", tags: ["基金销售", "支付宝"], region: "中国", recommended: true },
    { category: "funds", name: "蛋卷基金", url: "https://danjuanfunds.com", description: "基金组合平台智能投顾", tags: ["基金组合", "智能投顾"], region: "中国", recommended: true },
    { category: "funds", name: "私募排排网Simuwang", url: "https://www.simuwang.com", description: "私募基金数据平台", tags: ["私募基金", "数据"], region: "中国", recommended: true },
    { category: "funds", name: "好买基金Howbuy", url: "https://www.howbuy.com", description: "第三方基金销售平台研究", tags: ["基金销售", "研究"], region: "中国", recommended: false },
    { category: "funds", name: "晨星中国Morningstar CN", url: "https://cn.morningstar.com", description: "晨星中国基金评级研究", tags: ["基金评级", "研究"], region: "中国", recommended: true },
    { category: "funds", name: "Morningstar晨星全球", url: "https://www.morningstar.com", description: "全球基金评级机构数据研究", tags: ["基金评级", "数据", "研究"], region: "美国", recommended: true },
    { category: "funds", name: "State Street道富SSGA", url: "https://www.ssga.com", description: "全球第二大资管公司SPDR ETF", tags: ["资管", "ETF"], region: "美国", recommended: false },
    { category: "funds", name: "Invesco景顺", url: "https://www.invesco.com", description: "全球资管公司QQQ ETF", tags: ["资管", "ETF"], region: "美国", recommended: false },
    { category: "funds", name: "贝莱德BlackRock", url: "https://www.blackrock.com", description: "全球最大资管公司iShares ETF", tags: ["资管", "ETF", "最大"], region: "美国", recommended: true },
    { category: "funds", name: "先锋Vanguard集团", url: "https://investor.vanguard.com", description: "全球最大公募基金指数基金", tags: ["基金", "指数基金", "低费率"], region: "美国", recommended: true },
    { category: "funds", name: "富达Fidelity基金", url: "https://www.fidelity.com/mutual-funds", description: "富达共同基金产品", tags: ["基金", "共同基金"], region: "美国", recommended: false },
    { category: "funds", name: "天弘基金", url: "https://www.tianhongcj.com.cn", description: "余额宝基金公司", tags: ["基金公司", "货币基金"], region: "中国", recommended: false },
    { category: "funds", name: "易方达基金", url: "https://www.efunds.com.cn", description: "国内领先公募基金", tags: ["基金公司"], region: "中国", recommended: false },
    { category: "funds", name: "华夏基金", url: "https://www.chinaamc.com.cn", description: "国内老牌公募基金", tags: ["基金公司"], region: "中国", recommended: false },
    { category: "funds", name: "南方基金", url: "https://www.nffund.com", description: "南方基金管理有限公司", tags: ["基金公司"], region: "中国", recommended: false },
    { category: "funds", name: "广发基金", url: "https://www.gffunds.com.cn", description: "广发基金管理有限公司", tags: ["基金公司"], region: "中国", recommended: false },
    { category: "funds", name: "汇添富基金", url: "https://www.htffund.com", description: "汇添富基金管理有限公司", tags: ["基金公司"], region: "中国", recommended: false },
    { category: "funds", name: "嘉实基金", url: "https://www.jsfund.cn", description: "嘉实基金管理有限公司", tags: ["基金公司"], region: "中国", recommended: false },
    { category: "funds", name: "中欧基金", url: "https://www.zofund.com", description: "中欧基金管理有限公司", tags: ["基金公司"], region: "中国", recommended: false },
    { category: "funds", name: "招商基金", url: "https://www.cmfdchina.com", description: "招商基金管理有限公司", tags: ["基金公司"], region: "中国", recommended: false },
    { category: "funds", name: "博时基金", url: "https://www.bosera.com", description: "博时基金管理有限公司", tags: ["基金公司"], region: "中国", recommended: false },

    // ==================== ETF - etf (15个) ====================
    { category: "etf", name: "SPDR标普500 ETF", url: "https://www.sectorspdr.com", description: "SPDR标普500指数ETF美国最大ETF", tags: ["美股", "指数", "标普500"], region: "美国", recommended: true },
    { category: "etf", name: "Invesco QQQ", url: "https://www.invesco.com/qqq", description: "追踪纳斯达克100指数", tags: ["美股", "纳斯达克", "科技"], region: "美国", recommended: true },
    { category: "etf", name: "Vanguard VTI", url: "https://investor.vanguard.com/investment-products/list-etfs", description: "Vanguard整体股市ETF全市场", tags: ["美股", "全市场"], region: "美国", recommended: true },
    { category: "etf", name: "iShares安硕", url: "https://www.ishares.com", description: "全球最大ETF管理公司BlackRock旗下", tags: ["全球", "指数"], region: "美国", recommended: true },
    { category: "etf", name: "iShares Core ETF核心系列", url: "https://www.ishares.com/us/products/core-etfs", description: "iShares核心ETF系列低成本", tags: ["核心", "指数", "低成本"], region: "美国", recommended: false },
    { category: "etf", name: "SPDR黄金ETF GLD", url: "https://www.spdrgoldshares.com", description: "SPDR黄金信托全球最大黄金ETF", tags: ["黄金", "贵金属"], region: "美国", recommended: true },
    { category: "etf", name: "iShares债券ETF", url: "https://www.ishares.com/us/products/bond-etfs", description: "iShares债券ETF系列固定收益", tags: ["债券", "固收"], region: "美国", recommended: true },
    { category: "etf", name: "Vanguard BND", url: "https://investor.vanguard.com/investment-products/list-etfs", description: "Vanguard整体债券市场ETF", tags: ["债券", "固收"], region: "美国", recommended: false },
    { category: "etf", name: "ProShares杠杆ETF", url: "https://www.proshares.com", description: "杠杆和反向ETF专家", tags: ["杠杆", "反向"], region: "美国", recommended: false },
    { category: "etf", name: "WisdomTree ETF", url: "https://www.wisdomtree.com", description: "智能Beta和基本面加权ETF", tags: ["智能Beta", "基本面"], region: "美国", recommended: false },
    { category: "etf", name: "First Trust ETF", url: "https://www.firsttrust.com", description: "First Trust ETF提供商", tags: ["ETF", "行业"], region: "美国", recommended: false },
    { category: "etf", name: "VanEck ETF", url: "https://www.vaneck.com", description: "VanEck ETF比特币黄金等", tags: ["ETF", "另类"], region: "美国", recommended: false },
    { category: "etf", name: "Global X ETF", url: "https://globalxetfs.com", description: "主题投资ETF人工智能清洁能源", tags: ["主题投资", "AI", "新能源"], region: "美国", recommended: false },
    { category: "etf", name: "中国ETF网", url: "https://www.etf.cn", description: "国内ETF数据和资讯", tags: ["ETF", "中国", "数据"], region: "中国", recommended: true },
    { category: "etf", name: "沪深交易所ETF", url: "https://www.sse.com.cn/etf", description: "上交所ETF专区", tags: ["ETF", "A股"], region: "中国", recommended: false },

    // ==================== 期权 - options (10个) ====================
    { category: "options", name: "CBOE芝加哥期权交易所", url: "https://www.cboe.com", description: "全球最大期权交易所VIX指数", tags: ["期权交易所", "VIX"], region: "美国", recommended: true },
    { category: "options", name: "Option Alpha", url: "https://optionalpha.com", description: "期权教育和策略平台", tags: ["教育", "策略"], region: "美国", recommended: true },
    { category: "options", name: "Tastytrade", url: "https://tastytrade.com", description: "期权交易平台和教育内容", tags: ["交易平台", "教育"], region: "美国", recommended: true },
    { category: "options", name: "Thinkorswim TOS", url: "https://www.tdameritrade.com/tools/platforms/thinkorswim", description: "专业期权交易平台图表分析", tags: ["交易平台", "专业"], region: "美国", recommended: false },
    { category: "options", name: "OptionsPlay", url: "https://optionsplay.com", description: "期权策略可视化工具", tags: ["工具", "可视化"], region: "美国", recommended: false },
    { category: "options", name: "IVolatility", url: "https://www.ivolatility.com", description: "期权隐含波动率数据分析", tags: ["数据", "波动率"], region: "美国", recommended: false },
    { category: "options", name: "OptionStrat", url: "https://optionstrat.com", description: "期权策略构建和分析工具", tags: ["工具", "策略"], region: "美国", recommended: false },
    { category: "options", name: "Unusual Whales", url: "https://unusualwhales.com", description: "异常期权活动监测", tags: ["数据", "监测"], region: "美国", recommended: false },
    { category: "options", name: "Barchart Options", url: "https://www.barchart.com/options", description: "期权链和波动率数据", tags: ["数据", "期权链"], region: "美国", recommended: false },
    { category: "options", name: "Options AI", url: "https://optionsai.com", description: "AI驱动的期权策略建议", tags: ["AI", "策略"], region: "美国", recommended: false },

    // ==================== 债券 - bonds (16个) ====================
    { category: "bonds", name: "美国财政部Treasury", url: "https://www.treasury.gov", description: "U.S. Treasury官网美国国债信息", tags: ["国债", "美债"], region: "美国", recommended: true },
    { category: "bonds", name: "中国债券信息网Chinabond", url: "https://www.chinabond.com.cn", description: "中国债券信息官方平台", tags: ["国债", "中国企业债"], region: "中国", recommended: true },
    { category: "bonds", name: "Investing债券", url: "https://www.investing.com/bonds", description: "全球债券行情数据", tags: ["行情", "全球"], region: "全球", recommended: true },
    { category: "bonds", name: "穆迪Moody's", url: "https://www.moodys.com", description: "信用评级机构穆迪", tags: ["信用评级"], region: "美国", recommended: true },
    { category: "bonds", name: "标普评级S&P", url: "https://www.standardandpoors.com", description: "标普全球评级信用评级", tags: ["信用评级"], region: "美国", recommended: true },
    { category: "bonds", name: "惠誉评级Fitch", url: "https://www.fitchratings.com", description: "惠誉信用评级机构", tags: ["信用评级"], region: "美国", recommended: true },
    { category: "bonds", name: "中诚信国际CCXI", url: "https://www.ccxi.com.cn", description: "中国信用评级机构", tags: ["信用评级", "中国"], region: "中国", recommended: false },
    { category: "bonds", name: "联合资信LHRatings", url: "https://www.lhratings.com", description: "中国信用评级机构联合资信", tags: ["信用评级", "中国"], region: "中国", recommended: false },
    { category: "bonds", name: "PIMCO", url: "https://www.pimco.com", description: "全球最大债券基金管理人专注固收", tags: ["债券基金", "固收", "专业"], region: "美国", recommended: true },
    { category: "bonds", name: "富达固定收益Fidelity Bonds", url: "https://www.fidelity.com/fixed-income-bonds", description: "富达债券和固定收益投资产品", tags: ["债券基金", "固收", "产品"], region: "美国", recommended: true },
    { category: "bonds", name: "BondSuperMart BSM", url: "https://www.bondsupermart.com", description: "香港债券投资平台", tags: ["债券", "固收", "平台"], region: "香港", recommended: false },
    { category: "bonds", name: "Vanguard固定收益", url: "https://investor.vanguard.com/investment-products/list-etfs#view=tab/Fixed%20Income", description: "Vanguard债券ETF和固定收益基金", tags: ["债券基金", "ETF", "固收"], region: "美国", recommended: false },
    { category: "bonds", name: "中国债券登记结算公司", url: "https://www.chinabond.com.cn", description: "中央国债登记结算公司", tags: ["结算", "登记"], region: "中国", recommended: false },
    { category: "bonds", name: "Bloomberg Barclays指数", url: "https://www.bloomberg.com/professional/product/barclays-indices", description: "巴克莱债券指数基准", tags: ["指数", "基准"], region: "美国", recommended: false },
    { category: "bonds", name: "TradingView债券", url: "https://www.tradingview.com/markets/bonds/", description: "TradingView债券图表分析", tags: ["图表", "分析"], region: "全球", recommended: false },
    { category: "bonds", name: "BondOnline", url: "https://www.bondonline.co.uk", description: "英国债券交易平台", tags: ["债券", "交易平台"], region: "英国", recommended: false },

    // ==================== REITs - reits (12个) ====================
    { category: "reits", name: "NAREIT美国REIT协会", url: "https://www.reit.com", description: "美国REIT协会官方信息", tags: ["REIT协会", "美国"], region: "美国", recommended: true },
    { category: "reits", name: "REIT.com", url: "https://www.reit.com", description: "REIT投资信息平台", tags: ["REIT信息", "投资"], region: "美国", recommended: true },
    { category: "reits", name: "Simon Property Group", url: "https://www.simon.com", description: "美国最大购物中心REIT", tags: ["商业地产REIT"], region: "美国", recommended: false },
    { category: "reits", name: "Prologis普洛斯", url: "https://www.prologis.com", description: "全球最大物流地产REIT", tags: ["物流地产REIT"], region: "美国", recommended: false },
    { category: "reits", name: "Digital Realty", url: "https://www.digitalrealty.com", description: "数据中心REIT", tags: ["数据中心REIT"], region: "美国", recommended: false },
    { category: "reits", name: "Equity Residential", url: "https://www.equityapartments.com", description: "公寓REIT住宅", tags: ["住宅REIT"], region: "美国", recommended: false },
    { category: "reits", name: "越秀房产基金", url: "https://www.yuexiutr.com", description: "香港上市内地物业REIT", tags: ["REIT", "中国"], region: "中国", recommended: false },
    { category: "reits", name: "招商局商业房托CMCREIT", url: "https://www.cmcreit.com", description: "新加坡上市中国商业REIT", tags: ["REIT", "中国"], region: "新加坡", recommended: false },
    { category: "reits", name: "领展房产基金Link REIT", url: "https://www.linkreit.com", description: "亚洲最大REIT香港上市", tags: ["REIT", "亚洲", "零售"], region: "香港", recommended: true },
    { category: "reits", name: "凯德商用信托CLCT", url: "https://www.capitalandmalltrust.com", description: "新加坡购物中心REIT", tags: ["REIT", "购物中心"], region: "新加坡", recommended: false },
    { category: "reits", name: "中国REITs联盟", url: "http://www.chinareits.org.cn", description: "中国REITs行业组织", tags: ["REIT", "中国", "协会"], region: "中国", recommended: false },
    { category: "reits", name: "REITs.com.cn中国REITs", url: "https://www.reits.com.cn", description: "中国公募REITs信息平台", tags: ["REIT", "中国", "公募"], region: "中国", recommended: true },

    // ==================== 期指 - index-futures (8个) ====================
    { category: "index-futures", name: "中金所CFFEX股指期货", url: "https://www.cffex.com.cn", description: "沪深300中证500上证50期货", tags: ["期指", "股指期货", "中国"], region: "中国", recommended: true },
    { category: "index-futures", name: "CME E-mini S&P 500", url: "https://www.cmegroup.com/trading/equity-index/us-index/e-mini-sandp500.html", description: "电子迷你标普500期货ES", tags: ["期指", "美股", "期货"], region: "美国", recommended: true },
    { category: "index-futures", name: "CME E-mini Nasdaq-100", url: "https://www.cmegroup.com/trading/equity-index/us-index/e-mini-nasdaq-100.html", description: "纳斯达克100指数期货NQ", tags: ["期指", "纳斯达克", "期货"], region: "美国", recommended: true },
    { category: "index-futures", name: "CME Dow Jones道琼斯", url: "https://www.cmegroup.com/trading/equity-index/us-index/dow-jones.html", description: "道琼斯指数期货YM", tags: ["期指", "道琼斯"], region: "美国", recommended: false },
    { category: "index-futures", name: "EUREX欧洲期货交易所", url: "https://www.eurexchange.com", description: "欧洲期货交易所DAX斯托克等", tags: ["期指", "欧洲", "DAX"], region: "德国", recommended: false },
    { category: "index-futures", name: "HKEX恒生指数期货HSI", url: "https://www.hkex.com.hk/Products/Listed-Derivatives/Equity-Index", description: "恒生指数期货和国企指数", tags: ["期指", "恒指", "港股"], region: "香港", recommended: true },
    { category: "index-futures", name: "SGX新华富时A50", url: "https://www.sgx.com/derivatives/products/a50_futures", description: "新加坡A50股指期货追踪A股", tags: ["期指", "A股", "新加坡"], region: "新加坡", recommended: false },
    { category: "index-futures", name: "日本大阪交易所OSE", url: "https://www.osaka.co.jp/en", description: "日经225指数期货NKY", tags: ["期指", "日本", "日经"], region: "日本", recommended: false },

    // ==================== 大宗商品 - commodities (10个) ====================
    { category: "commodities", name: "Investing大宗商品", url: "https://www.investing.com/commodities", description: "全球大宗商品行情数据", tags: ["行情", "全球"], region: "全球", recommended: true },
    { category: "commodities", name: "TradingView商品", url: "https://www.tradingview.com/markets/commodities/", description: "大宗商品图表分析平台", tags: ["图表", "分析"], region: "全球", recommended: true },
    { category: "commodities", name: "Kitco贵金属和大宗商品", url: "https://www.kitco.com", description: "贵金属和大宗商品新闻价格", tags: ["新闻", "贵金属"], region: "美国", recommended: true },
    { category: "commodities", name: "卓创资讯SCI99", url: "https://www.sci99.com", description: "中国大宗商品数据服务平台", tags: ["数据", "中国"], region: "中国", recommended: true },
    { category: "commodities", name: "我的钢铁网Mysteel", url: "https://www.mysteel.com", description: "钢铁行业数据平台", tags: ["钢铁", "数据"], region: "中国", recommended: false },
    { category: "commodities", name: "生意社100ppi", url: "https://www.100ppi.com", description: "大宗商品价格数据供应链", tags: ["价格", "数据"], region: "中国", recommended: false },
    { category: "commodities", name: "金十数据Jin10", url: "https://www.jin10.com", description: "大宗商品和外汇实时数据", tags: ["数据", "实时"], region: "中国", recommended: true },
    { category: "commodities", name: "Fastmarkets", url: "https://www.fastmarkets.com", description: "大宗商品价格新闻分析", tags: ["价格", "新闻", "分析"], region: "全球", recommended: false },
    { category: "commodities", name: "Platts普氏能源", url: "https://www.platts.com", description: "能源和大宗商品信息和基准价", tags: ["能源", "基准价"], region: "美国", recommended: false },
    { category: "commodities", name: "Argus阿格斯", url: "https://www.argusmedia.com", description: "能源大宗商品价格评估", tags: ["价格评估", "能源"], region: "英国", recommended: false },

    // ==================== 能源 - energy (12个) ====================
    { category: "energy", name: "OPEC石油输出国组织", url: "https://www.opec.org", description: "OPEC官网石油市场报告", tags: ["原油", "能源", "OPEC"], region: "全球", recommended: true },
    { category: "energy", name: "EIA美国能源信息署", url: "https://www.eia.gov", description: "美国能源信息官方数据统计", tags: ["原油", "天然气", "能源数据"], region: "美国", recommended: true },
    { category: "energy", name: "IEA国际能源署", url: "https://www.iea.org", description: "全球能源数据政策分析", tags: ["能源", "原油", "全球"], region: "全球", recommended: true },
    { category: "energy", name: "ICE布伦特原油Brent", url: "https://www.ice.com/products/219/Brent-Crude-Futures", description: "布伦特原油期货国际基准", tags: ["原油", "期货", "能源"], region: "全球", recommended: true },
    { category: "energy", name: "NYMEX WTI原油", url: "https://www.cmegroup.com/trading/energy/crude-oil/light-sweet-crude.html", description: "WTI原油期货美国基准", tags: ["原油", "期货"], region: "美国", recommended: true },
    { category: "energy", name: "Henry Hub天然气HH", url: "https://www.cmegroup.com/trading/energy/natural-gas/henry-hub-natural-gas.html", description: "天然气期货基准价格", tags: ["天然气", "期货"], region: "美国", recommended: false },
    { category: "energy", name: "上海能源交易中心INE", url: "https://www.ine.cn", description: "中国原油期货INE", tags: ["原油", "中国"], region: "中国", recommended: true },
    { category: "energy", name: "Rystad Energy睿咨得", url: "https://www.rystadenergy.com", description: "能源研究和咨询服务", tags: ["研究", "咨询"], region: "挪威", recommended: false },
    { category: "energy", name: "Wood Mackenzie伍德麦肯兹", url: "https://www.woodmac.com", description: "能源矿产研究和咨询", tags: ["研究", "咨询", "矿产"], region: "英国", recommended: false },
    { category: "energy", name: "IHS Markit能源", url: "https://ihsmarkit.com/products/energy", description: "能源市场数据和分析", tags: ["数据", "分析"], region: "美国", recommended: false },
    { category: "energy", name: "BP世界能源统计", url: "https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy.html", description: "BP年度世界能源统计回顾", tags: ["统计", "年报"], region: "英国", recommended: false },
    { category: "energy", name: "壳牌Shell", url: "https://www.shell.com", description: "国际石油巨头壳牌公司", tags: ["石油公司", "能源"], region: "荷兰", recommended: false },

    // ==================== 贵金属 - precious-metals (10个) ====================
    { category: "precious-metals", name: "GoldPrice.org", url: "https://goldprice.org", description: "黄金价格实时行情数据", tags: ["黄金", "贵金属", "价格"], region: "全球", recommended: true },
    { category: "precious-metals", name: "世界黄金协会WGC", url: "https://www.gold.org", description: "全球黄金市场研究和数据", tags: ["黄金", "贵金属", "研究"], region: "全球", recommended: true },
    { category: "precious-metals", name: "上海黄金交易所SGE", url: "https://www.sge.com.cn", description: "国内黄金交易平台现货期货", tags: ["黄金", "中国", "交易所"], region: "中国", recommended: true },
    { category: "precious-metals", name: "白银协会Silver Institute", url: "https://www.silverinstitute.org", description: "全球白银协会研究数据", tags: ["白银", "贵金属"], region: "全球", recommended: false },
    { category: "precious-metals", name: "铂钯价格Kitco", url: "https://www.kitco.com/platinum-palladium", description: "铂金钯金价格和新闻", tags: ["铂金", "钯金"], region: "全球", recommended: false },
    { category: "precious-metals", name: "COMEX黄金期货GC", url: "https://www.cmegroup.com/trading/metals/precious/gold.html", description: "COMEX黄金期货合约", tags: ["黄金", "期货"], region: "美国", recommended: false },
    { category: "precious-metals", name: "伦敦金银市场LBMA", url: "https://www.lbma.org.uk", description: "伦敦金银市场协会定价", tags: ["定价", "伦敦"], region: "英国", recommended: false },
    { category: "precious-metals", name: "中国黄金网", url: "https://www.gold.org.cn", description: "中国黄金资讯和数据", tags: ["黄金", "中国", "资讯"], region: "中国", recommended: true },
    { category: "precious-metals", name: "紫金矿业", url: "https://www.zjky.cn", description: "中国最大黄金矿业公司", tags: ["矿业公司", "黄金", "中国"], region: "中国", recommended: false },
    { category: "precious-metals", name: "山东黄金", url: "https://www.sdgold.com.cn", description: "山东黄金矿业股份有限公司", tags: ["矿业公司", "黄金", "中国"], region: "中国", recommended: false },

    // ==================== 基础金属 - base-metals (8个) ====================
    { category: "base-metals", name: "伦敦金属交易所LME", url: "https://www.lme.com", description: "LME全球最大金属交易所铜铝锌镍", tags: ["铜", "铝", "金属", "期货"], region: "英国", recommended: true },
    { category: "base-metals", name: "上海有色金属网SMM", url: "https://www.smm.cn", description: "国内有色金属价格数据", tags: ["铜", "铝", "金属", "中国"], region: "中国", recommended: true },
    { category: "base-metals", name: "COMEX铜期货HG", url: "https://www.cmegroup.com/trading/metals/base/copper.html", description: "COMEX高等级铜期货", tags: ["铜", "期货"], region: "美国", recommended: false },
    { category: "base-metals", name: "SHFE铜期货", url: "https://www.shfe.com.cn", description: "上期所铜铝锌铅镍锡期货", tags: ["铜", "期货", "中国"], region: "中国", recommended: false },
    { category: "base-metals", name: "五矿资源MMG", url: "https://www.mmg.com", description: "国际矿业公司铜锌资源", tags: ["矿业", "铜", "锌"], region: "中国", recommended: false },
    { category: "base-metals", name: "江西铜业", url: "https://www.jxcc.com", description: "中国最大铜业公司", tags: ["铜业", "中国"], region: "中国", recommended: false },
    { category: "base-metals", name: "必和必拓BHP", url: "https://www.bhp.com", description: "全球最大矿业公司铁矿石铜", tags: ["矿业", "铁矿石", "铜"], region: "澳大利亚", recommended: false },
    { category: "base-metals", name: "力拓Rio Tinto", url: "https://www.riotinto.com", description: "全球第二大矿业公司铁矿石铝", tags: ["矿业", "铁矿石", "铝"], region: "英国", recommended: false },

    // ==================== 农产品 - agriculture (10个) ====================
    { category: "agriculture", name: "CBOT芝加哥期货交易所", url: "https://www.cmegroup.com/trading/agricultural", description: "CBOT大豆玉米小麦期货CME集团", tags: ["农产品", "期货", "大豆", "玉米"], region: "美国", recommended: true },
    { category: "agriculture", name: "ICE农产品洲际交易所", url: "https://www.ice.com/products/agricultural-commodities", description: "ICE咖啡糖棉花橙汁期货", tags: ["农产品", "咖啡", "糖", "棉花"], region: "全球", recommended: true },
    { category: "agriculture", name: "大连商品交易所DCE", url: "https://www.dce.com.cn", description: "DCE豆粕玉米棕榈油生猪期货", tags: ["农产品", "期货", "中国"], region: "中国", recommended: true },
    { category: "agriculture", name: "郑州商品交易所CZCE", url: "https://www.czce.com.cn", description: "CZCE棉花白糖菜油PTA苹果期货", tags: ["农产品", "期货", "中国"], region: "中国", recommended: true },
    { category: "agriculture", name: "USDA美国农业部", url: "https://www.usda.gov", description: "美国农业数据和报告供需", tags: ["农产品", "数据", "美国"], region: "美国", recommended: false },
    { category: "agriculture", name: "天下粮仓Cofeed", url: "https://www.cofeed.com", description: "中国农产品信息网粮油饲料", tags: ["农产品", "中国"], region: "中国", recommended: false },
    { category: "agriculture", name: "我的农产品Myagric", url: "https://www.myagric.com", description: "卓创旗下农产品数据平台", tags: ["农产品", "数据", "中国"], region: "中国", recommended: false },
    { category: "agriculture", name: "邦吉Bunge", url: "https://www.bunge.com", description: "国际粮商大豆压榨贸易", tags: ["粮商", "大豆"], region: "美国", recommended: false },
    { category: "agriculture", name: "ADM Archer Daniels Midland", url: "https://www.adm.com", description: "国际粮商农产品加工贸易", tags: ["粮商", "加工"], region: "美国", recommended: false },
    { category: "agriculture", name: "嘉能可Glencore农业", url: "https://www.glencore.com/agriculture", description: "嘉能可农业部门谷物棉花糖", tags: ["大宗商品", "农业"], region: "瑞士", recommended: false },

    // ==================== 外汇 - forex (20个) ====================
    { category: "forex", name: "IG外汇", url: "https://www.ig.com", description: "英国最大外汇经纪商CFD", tags: ["外汇经纪商", "英国", "CFD"], region: "英国", recommended: true },
    { category: "forex", name: "OANDA安达", url: "https://www.oanda.com", description: "美国外汇经纪商多国监管", tags: ["外汇经纪商", "美国"], region: "美国", recommended: true },
    { category: "forex", name: "Forex.com嘉盛外汇", url: "https://www.forex.com", description: "美国外汇经纪商Gain Capital", tags: ["外汇经纪商", "美国"], region: "美国", recommended: true },
    { category: "forex", name: "eToro e投e融", url: "https://www.etoro.com", description: "社交交易平台外汇股票加密货币", tags: ["外汇经纪商", "社交交易", "股票"], region: "全球", recommended: true },
    { category: "forex", name: "瑞讯银行Swissquote", url: "https://www.swissquote.com", description: "瑞士线上银行外汇交易", tags: ["外汇经纪商", "瑞士", "银行"], region: "瑞士", recommended: true },
    { category: "forex", name: "XM Trading", url: "https://www.xm.com", description: "全球外汇经纪商塞浦路斯", tags: ["外汇经纪商"], region: "塞浦路斯", recommended: false },
    { category: "forex", name: "FXCM福汇", url: "https://www.fxcm.com", description: "美国外汇经纪商Leucadia", tags: ["外汇经纪商", "美国"], region: "美国", recommended: false },
    { category: "forex", name: "IC Markets", url: "https://www.icmarkets.com", description: "澳大利亚ECN外汇经纪商", tags: ["外汇经纪商", "澳大利亚"], region: "澳大利亚", recommended: false },
    { category: "forex", name: "FP Markets", url: "https://fpmarkets.com", description: "澳大利亚外汇经纪商ECN", tags: ["外汇经纪商", "澳大利亚"], region: "澳大利亚", recommended: false },
    { category: "forex", name: " Pepperstone激石", url: "https://www.pepperstone.com", description: "澳大利亚外汇经纪商ECN", tags: ["外汇经纪商", "澳大利亚"], region: "澳大利亚", recommended: false },
    { category: "forex", name: "美联储Federal Reserve", url: "https://www.federalreserve.gov", description: "美联储官方网站货币政策", tags: ["央行", "美元"], region: "美国", recommended: true },
    { category: "forex", name: "欧洲央行ECB", url: "https://www.ecb.europa.eu", description: "欧洲央行官网欧元货币政策", tags: ["央行", "欧元"], region: "欧洲", recommended: true },
    { category: "forex", name: "日本央行BOJ", url: "https://www.boj.or.jp", description: "日本银行官网日元货币政策", tags: ["央行", "日元"], region: "日本", recommended: true },
    { category: "forex", name: "中国人民银行PBOC", url: "http://www.pbc.gov.cn", description: "中国人民银行人民币货币政策", tags: ["央行", "人民币"], region: "中国", recommended: true },
    { category: "forex", name: "英格兰银行BoE", url: "https://www.bankofengland.co.uk", description: "英国央行英镑货币政策", tags: ["央行", "英镑"], region: "英国", recommended: false },
    { category: "forex", name: "Investing外汇", url: "https://www.investing.com/currencies", description: "全球外汇行情汇率数据", tags: ["行情", "汇率"], region: "全球", recommended: true },
    { category: "forex", name: "XE汇率转换", url: "https://www.xe.com", description: "实时汇率转换工具历史数据", tags: ["汇率", "转换"], region: "全球", recommended: true },
    { category: "forex", name: "TradingView外汇", url: "https://www.tradingview.com/markets/currencies/", description: "外汇图表和技术分析", tags: ["图表", "分析"], region: "全球", recommended: false },
    { category: "forex", name: "DailyFX", url: "https://www.dailyfx.com", description: "FXCM旗下外汇分析和教育", tags: ["分析", "教育"], region: "美国", recommended: false },
    { category: "forex", name: "BabyPips", url: "https://www.babypips.com", description: "外汇学习学校免费教程", tags: ["教育", "学习", "外汇"], region: "美国", recommended: true },

    // ==================== 房产 - realestate (14个) ====================
    { category: "realestate", name: "贝壳找房Ke", url: "https://www.ke.com", description: "贝壳找房国内房产平台", tags: ["房产", "中国", "平台"], region: "中国", recommended: true },
    { category: "realestate", name: "链家Lianjia", url: "https://www.lianjia.com", description: "链家国内房产中介真房源", tags: ["房产", "中国", "中介"], region: "中国", recommended: true },
    { category: "realestate", name: "安居客Anjuke", url: "https://www.anjuke.com", description: "安居客房产平台58同城旗下", tags: ["房产", "中国"], region: "中国", recommended: true },
    { category: "realestate", name: "Zillow", url: "https://www.zillow.com", description: "美国房产平台估值租房", tags: ["房产", "美国"], region: "美国", recommended: true },
    { category: "realestate", name: "Realtor.com", url: "https://www.realtor.com", description: "美国房产MLS平台NAR旗下", tags: ["房产", "美国", "MLS"], region: "美国", recommended: true },
    { category: "realestate", name: "Rightmove", url: "https://www.rightmove.co.uk", description: "英国房产门户最大", tags: ["房产", "英国", "欧洲"], region: "英国", recommended: true },
    { category: "realestate", name: "Redfin", url: "https://www.redfin.com", description: "美国房产科技平台折扣经纪", tags: ["房产", "美国", "科技"], region: "美国", recommended: false },
    { category: "realestate", name: "58同城", url: "https://www.58.com", description: "生活服务平台含房产招聘二手", tags: ["房产", "生活服务"], region: "中国", recommended: false },
    { category: "realestate", name: "房天下Fang.com", url: "https://www.fang.com", description: "搜房网房产信息平台", tags: ["房产", "中国", "信息"], region: "中国", recommended: false },
    { category: "realestate", name: "安居客海外", url: "https://anjuke.com/oversea", description: "海外房产投资平台", tags: ["房产", "海外", "投资"], region: "中国", recommended: false },
    { category: "realestate", name: "Zoopla英国", url: "https://www.zoopla.co.uk", description: "英国房产搜索估价平台", tags: ["房产", "英国"], region: "英国", recommended: false },
    { category: "realestate", name: "Trulia", url: "https://www.trulia.com", description: "美国房产邻里信息社区数据", tags: ["房产", "美国", "社区"], region: "美国", recommended: false },
    { category: "realestate", name: "居外Juwai", url: "https://www.juwai.com", description: "中国投资者海外房产平台", tags: ["房产", "海外", "中国买家"], region: "中国", recommended: false },
    { category: "realestate", name: "有路Uoolu", url: "https://www.uoolu.com", description: "海外房产投资平台泰国日本等", tags: ["房产", "海外", "投资"], region: "中国", recommended: false },

    // ==================== 保险 - insurance (16个) ====================
    { category: "insurance", name: "中国平安Ping An", url: "https://www.pingan.com", description: "中国平安保险集团综合金融", tags: ["保险公司", "中国"], region: "中国", recommended: true },
    { category: "insurance", name: "中国人寿China Life", url: "https://www.chinalife.com.cn", description: "中国人寿保险股份有限公司", tags: ["保险公司", "中国"], region: "中国", recommended: true },
    { category: "insurance", name: "中国太保CPIC", url: "https://www.cpic.com.cn", description: "太平洋保险集团产险寿险", tags: ["保险公司", "中国"], region: "中国", recommended: true },
    { category: "insurance", name: "泰康保险Taikang", url: "https://www.taikang.com", description: "泰康保险集团养老社区", tags: ["保险公司", "中国"], region: "中国", recommended: true },
    { category: "insurance", name: "新华保险NCI", url: "https://www.nci.com.cn", description: "新华人寿保险股份有限公司", tags: ["保险公司", "中国"], region: "中国", recommended: false },
    { category: "insurance", name: "人保寿险PICC Life", url: "https://www.picclife.com", description: "中国人民人寿保险", tags: ["保险公司", "中国"], region: "中国", recommended: false },
    { category: "insurance", name: "MetLife大都会人寿", url: "https://www.metlife.com", description: "美国大都会人寿MetLife全球", tags: ["保险公司", "美国"], region: "美国", recommended: true },
    { category: "insurance", name: "AIA友邦保险", url: "https://www.aia.com", description: "友邦保险亚太地区寿险", tags: ["保险公司", "亚太"], region: "全球", recommended: true },
    { category: "insurance", name: "Allianz安联保险", url: "https://www.allianz.com", description: "德国安联保险全球最大保险", tags: ["保险公司", "德国", "欧洲"], region: "德国", recommended: true },
    { category: "insurance", name: "AXA安盛保险", url: "https://www.axa.com", description: "法国安盛保险资产管理", tags: ["保险公司", "法国", "欧洲"], region: "法国", recommended: false },
    { category: "insurance", name: "Prudential保诚", url: "https://www.prudential.com", description: "英国保诚保险英美市场", tags: ["保险公司", "英国"], region: "英国", recommended: false },
    { category: "insurance", name: "慕尼黑再保险Munich Re", url: "https://www.munichre.com", description: "全球最大再保险公司", tags: ["再保险", "德国"], region: "德国", recommended: false },
    { category: "insurance", name: "瑞士再保险Swiss Re", url: "https://www.swissre.com", description: "瑞士再保险公司风险研究", tags: ["再保险", "瑞士"], region: "瑞士", recommended: false },
    { category: "insurance", name: "中国再保险集团", url: "https://www.chinare.com.cn", description: "中国再保险集团", tags: ["再保险", "中国"], region: "中国", recommended: false },
    { category: "insurance", name: "慧择保险网", url: "https://www.huize.com", description: "互联网保险平台比价购买", tags: ["保险平台", "互联网"], region: "中国", recommended: false },
    { category: "insurance", name: "众安保险", url: "https://www.zhongan.com", description: "互联网保险公司三马同槽", tags: ["保险公司", "互联网"], region: "中国", recommended: false },

    // ==================== 银行 - banking (24个) ====================
    { category: "banking", name: "工商银行ICBC", url: "https://www.icbc.com.cn", description: "中国工商银行宇宙行最大", tags: ["银行", "中国"], region: "中国", recommended: true },
    { category: "banking", name: "建设银行CCB", url: "https://www.ccb.com", description: "中国建设银行基建房贷强", tags: ["银行", "中国"], region: "中国", recommended: true },
    { category: "banking", name: "中国银行BOC", url: "https://www.boc.cn", description: "中国银行国际化最强", tags: ["银行", "中国"], region: "中国", recommended: true },
    { category: "banking", name: "农业银行ABC", url: "https://www.abchina.com", description: "中国农业银行县域网点多", tags: ["银行", "中国"], region: "中国", recommended: true },
    { category: "banking", name: "招商银行CMB", url: "https://www.cmbchina.com", description: "招商银行零售之王私人银行", tags: ["银行", "中国", "零售"], region: "中国", recommended: true },
    { category: "banking", name: "交通银行BCM", url: "https://www.bankcomm.com", description: "交通银行国有大行", tags: ["银行", "中国"], region: "中国", recommended: false },
    { category: "banking", name: "浦发银行SPDB", url: "https://www.spdb.com.cn", description: "浦发银行上海国资", tags: ["银行", "中国"], region: "中国", recommended: false },
    { category: "banking", name: "民生银行CMBC", url: "https://www.cmbc.com.cn", description: "民生银行民营银行", tags: ["银行", "中国"], region: "中国", recommended: false },
    { category: "banking", name: "兴业银行CIB", url: "https://www.cib.com.cn", description: "兴业银行绿色金融同业", tags: ["银行", "中国"], region: "中国", recommended: false },
    { category: "banking", name: "汇丰银行HSBC", url: "https://www.hsbc.com", description: "汇丰银行亚洲欧洲全球", tags: ["银行", "香港", "全球"], region: "香港", recommended: true },
    { category: "banking", name: "花旗银行Citibank", url: "https://www.citi.com", description: "花旗银行信用卡全球网络", tags: ["银行", "美国", "全球"], region: "美国", recommended: true },
    { category: "banking", name: "摩根大通JPMorgan Chase", url: "https://www.jpmorgan.com", description: "全球最大银行财富管理投行", tags: ["银行", "美国", "财富管理"], region: "美国", recommended: true },
    { category: "banking", name: "瑞银UBS", url: "https://www.ubs.com", description: "瑞士银行财富管理私行", tags: ["银行", "瑞士", "财富管理"], region: "瑞士", recommended: true },
    { category: "banking", name: "渣打银行Standard Chartered", url: "https://www.sc.com", description: "渣打银行新兴市场亚洲非洲", tags: ["银行", "英国", "新兴市场"], region: "英国", recommended: false },
    { category: "banking", name: "星展银行DBS", url: "https://www.dbs.com", description: "星展银行东南亚最大最安全", tags: ["银行", "新加坡", "东南亚"], region: "新加坡", recommended: false },
    { category: "banking", name: "美国银行Bank of America", url: "https://www.bankofamerica.com", description: "美国第二大银行 Merrill Lynch", tags: ["银行", "美国"], region: "美国", recommended: false },
    { category: "banking", name: "富国银行Wells Fargo", url: "https://www.wellsfargo.com", description: "美国第四大银行零售银行", tags: ["银行", "美国"], region: "美国", recommended: false },
    { category: "banking", name: "三菱日联MUFG", url: "https://www.mufg.jp/english", description: "日本最大银行集团", tags: ["银行", "日本"], region: "日本", recommended: false },
    { category: "banking", name: "网上银行ING", url: "https://www.ing.com", description: "欧洲最大线上银行", tags: ["银行", "线上", "欧洲"], region: "荷兰", recommended: false },
    { category: "banking", name: "微众银行WeBank", url: "https://webank.com", description: "腾讯旗下互联网银行微粒贷", tags: ["银行", "互联网", "中国"], region: "中国", recommended: false },
    { category: "banking", name: "网商银行MYbank", url: "https://www.mybank.cn", description: "蚂蚁集团旗下互联网银行", tags: ["银行", "互联网", "中国"], region: "中国", recommended: false },
    { category: "banking", name: "新网银行", url: "https://www.xwangbank.com", description: "小米新希望红旗连锁互联网银行", tags: ["银行", "互联网", "中国"], region: "中国", recommended: false },
    { category: "banking", name: "百信银行", url: "https://www.aibank.com.cn", description: "中信百度合资直销银行", tags: ["银行", "互联网", "中国"], region: "中国", recommended: false },

    // ==================== 加密货币 - crypto (20个) ====================
    { category: "crypto", name: "币安Binance", url: "https://www.binance.com", description: "全球最大加密货币交易所", tags: ["交易所", "合约", "币币交易"], region: "全球", recommended: true },
    { category: "crypto", name: "Coinbase", url: "https://www.coinbase.com", description: "美国最大加密货币交易所合规IPO", tags: ["交易所", "合规", "美国"], region: "美国", recommended: true },
    { category: "crypto", name: "OKX", url: "https://www.okx.com", description: "全球头部交易所合约期权Web3", tags: ["交易所", "合约", "期权"], region: "全球", recommended: true },
    { category: "crypto", name: "火币HTX", url: "https://www.htx.com", description: "HTX火币全球知名交易所", tags: ["交易所"], region: "全球", recommended: true },
    { category: "crypto", name: "Gate.io芝麻开门", url: "https://www.gate.io", description: "Gate.io全球交易所合约IEO", tags: ["交易所", "合约"], region: "全球", recommended: true },
    { category: "crypto", name: "Kraken", url: "https://www.kraken.com", description: "Kraken美国合规交易所机构级", tags: ["交易所", "合规", "美国"], region: "美国", recommended: true },
    { category: "crypto", name: "Bybit", url: "https://www.bybit.com", description: "Bybit合约交易所永久合约衍生品", tags: ["交易所", "合约"], region: "全球", recommended: true },
    { category: "crypto", name: "Bitget", url: "https://www.bitget.com", description: "Bitget合约跟单交易所Copy trading", tags: ["交易所", "合约", "跟单"], region: "全球", recommended: false },
    { category: "crypto", name: "KuCoin库币", url: "https://www.kucoin.com", description: "KuCoin全球加密货币交易所", tags: ["交易所"], region: "全球", recommended: false },
    { category: "crypto", name: "Bitstamp", url: "https://www.bitstamp.net", description: "欧盟最早合规交易所", tags: ["交易所", "合规", "欧盟"], region: "卢森堡", recommended: false },
    { category: "crypto", name: "Gemini双子星", url: "https://www.gemini.com", description: "Winklevoss兄弟创立纽约合规", tags: ["交易所", "合规", "美国"], region: "美国", recommended: false },
    { category: "crypto", name: "CoinMarketCap CMC", url: "https://coinmarketcap.com", description: "加密货币行情市值排名数据", tags: ["行情", "市值", "数据"], region: "全球", recommended: true },
    { category: "crypto", name: "CoinGecko", url: "https://www.coingecko.com", description: "加密货币数据平台信任评分", tags: ["行情", "数据"], region: "全球", recommended: true },
    { category: "crypto", name: "Messari", url: "https://messari.io", description: "加密货币研究和数据专业级", tags: ["研究", "数据"], region: "美国", recommended: false },
    { category: "crypto", name: "Glassnode", url: "https://glassnode.com", description: "链上数据分析on-chain analytics", tags: ["数据", "链上分析"], region: "全球", recommended: false },
    { category: "crypto", name: "CryptoCompare", url: "https://www.cryptocompare.com", description: "加密货币价格新闻分析", tags: ["价格", "新闻"], region: "英国", recommended: false },
    { category: "crypto", name: "CoinDesk Indices", url: "https://www.coindesk.com/markets", description: "CoinDesk加密货币指数", tags: ["指数", "基准"], region: "美国", recommended: false },
    { category: "crypto", name: "Bitcoin.org", url: "https://bitcoin.org", description: "比特币官方网站白皮书钱包", tags: ["BTC", "官网"], region: "全球", recommended: true },
    { category: "crypto", name: "Ethereum以太坊", url: "https://ethereum.org", description: "以太坊官网智能合约DeFi", tags: ["ETH", "官网"], region: "全球", recommended: true },
    { category: "crypto", name: "币聪BTC123", url: "https://www.btc123.com", description: "中文区块链导航网站", tags: ["导航", "中文"], region: "中国", recommended: false },

    // ==================== DeFi - defi (18个) ====================
    { category: "defi", name: "Uniswap UNI", url: "https://uniswap.org", description: "以太坊DEX Swap交易AMM龙头", tags: ["DEX", "Swap", "以太坊"], region: "全球", recommended: true },
    { category: "defi", name: "PancakeSwap CAKE", url: "https://pancakeswap.finance", description: "BSC链DEX流动性挖矿", tags: ["DEX", "BSC", "流动性挖矿"], region: "全球", recommended: true },
    { category: "defi", name: "Curve CRV", url: "https://curve.fi", description: "稳定币兑换DEX低滑点", tags: ["DEX", "稳定币"], region: "全球", recommended: true },
    { category: "defi", name: "Aave AAVE", url: "https://aave.com", description: "去中心化借贷协议龙头", tags: ["借贷"], region: "全球", recommended: true },
    { category: "defi", name: "Compound COMP", url: "https://compound.finance", description: "去中心化借贷协议算法利率", tags: ["借贷"], region: "全球", recommended: true },
    { category: "defi", name: "MakerDAO MKR DAI", url: "https://makerdao.com", description: "稳定币DAI发行协议抵押生成", tags: ["稳定币"], region: "全球", recommended: true },
    { category: "defi", name: "Lido LDO", url: "https://lido.fi", description: "流动性质押协议ETH2.0 staking", tags: ["质押", "ETH2.0"], region: "全球", recommended: true },
    { category: "defi", name: "MetaMask小狐狸钱包", url: "https://metamask.io", description: "最流行加密货币钱包浏览器插件", tags: ["钱包", "以太坊"], region: "全球", recommended: true },
    { category: "defi", name: "Trust Wallet", url: "https://trustwallet.com", description: "币安官方钱包移动端多链", tags: ["钱包", "移动端"], region: "全球", recommended: true },
    { category: "defi", name: "Ledger Nano", url: "https://www.ledger.com", description: "Ledger硬件钱包安全存储冷钱包", tags: ["硬件钱包", "安全"], region: "法国", recommended: true },
    { category: "defi", name: "Trezor", url: "https://trezor.io", description: "Trezor硬件钱包安全存储开源", tags: ["硬件钱包", "安全"], region: "捷克", recommended: false },
    { category: "defi", name: "DeFi Llama", url: "https://defillama.com", description: "DeFi TVL数据聚合排名", tags: ["数据", "TVL"], region: "全球", recommended: true },
    { category: "defi", name: "1inch", url: "https://1inch.io", description: "DEX聚合器最优价格路由", tags: ["DEX", "聚合器"], region: "全球", recommended: false },
    { category: "defi", name: "Balancer BAL", url: "https://balancer.fi", description: "自动做市商AMM自定义权重", tags: ["AMM", "DEX"], region: "全球", recommended: false },
    { category: "defi", name: "Yearn YFI", url: "https://yearn.finance", description: "DeFi收益聚合器yield optimizer", tags: ["收益聚合器", "Yield"], region: "全球", recommended: false },
    { category: "defi", name: "Synthetix SNX", url: "https://synthetix.io", description: "合成资产协议股票外汇大宗商品", tags: ["合成资产"], region: "全球", recommended: false },
    { category: "defi", name: "dYdX", url: "https://dydx.exchange", description: "去中心化永续合约订单簿", tags: ["DEX", "永续合约"], region: "全球", recommended: false },
    { category: "defi", name: "OpenSea钱包连接", url: "https://opensea.io", description: "虽然主要是NFT但也支持DeFi", tags: ["NFT", "钱包"], region: "全球", recommended: false },

    // ==================== NFT - nft (12个) ====================
    { category: "nft", name: "OpenSea", url: "https://opensea.io", description: "最大NFT交易平台以太坊Polygon", tags: ["NFT", "数字藏品"], region: "全球", recommended: true },
    { category: "nft", name: "Blur", url: "https://blur.io", description: "NFT交易平台代币激励交易者", tags: ["NFT", "数字藏品"], region: "全球", recommended: false },
    { category: "nft", name: "Magic Eden", url: "https://magiceden.io", description: "Solana NFT平台多链支持", tags: ["NFT", "Solana"], region: "全球", recommended: false },
    { category: "nft", name: "LooksRare", url: "https://looksrare.org", description: "NFT交易平台LOOKS代币奖励", tags: ["NFT", "代币激励"], region: "全球", recommended: false },
    { category: "nft", name: "Rarible", url: "https://rarible.com", description: "NFT创作和交易平台治理代币", tags: ["NFT", "创作"], region: "全球", recommended: false },
    { category: "nft", name: "Foundation", url: "https://foundation.app", description: "高端艺术NFT平台策展模式", tags: ["NFT", "艺术"], region: "全球", recommended: false },
    { category: "nft", name: "腾讯幻核", url: "https://nft.qq.com", description: "腾讯数字藏品平台已关停", tags: ["NFT", "数字藏品", "中国"], region: "中国", recommended: false },
    { category: "nft", name: "鲸探", url: "https://h5.nft Whale.com", description: "支付宝蚂蚁集团数字藏品", tags: ["NFT", "数字藏品", "中国"], region: "中国", recommended: false },
    { category: "nft", name: "iBox", url: "https://www.ibox.art", description: "国内NFT交易平台数藏", tags: ["NFT", "数字藏品", "中国"], region: "中国", recommended: false },
    { category: "nft", name: "唯一艺术", url: "https://www.1-art.com", description: "国内数字艺术NFT平台", tags: ["NFT", "艺术", "中国"], region: "中国", recommended: false },
    { category: "nft", name: "NFTScan", url: "https://nftscan.com", description: "NFT区块链浏览器数据", tags: ["数据", "浏览器"], region: "全球", recommended: false },
    { category: "nft", name: "CryptoSlam NFT数据", url: "https://cryptoslam.io", description: "NFT销量数据排行榜", tags: ["数据", "销量"], region: "全球", recommended: false },

    // ==================== PE/VC私募股权/风投 - pe-vc (15个) ====================
    { category: "pe-vc", name: "黑石集团Blackstone", url: "https://www.blackstone.com", description: "全球最大另类投资管理公司PE RE", tags: ["私募股权", "不动产"], region: "美国", recommended: true },
    { category: "pe-vc", name: "KKR", url: "https://www.kkr.com", description: "全球私募股权巨头基础设施能源", tags: ["私募股权"], region: "美国", recommended: true },
    { category: "pe-vc", name: "凯雷Carlyle Group", url: "https://www.carlyle.com", description: "全球私募股权投资三大PE之一", tags: ["私募股权"], region: "美国", recommended: false },
    { category: "pe-vc", name: "红杉资本Sequoia", url: "https://www.sequoiacap.com", description: "全球顶级VC硅谷风投之王", tags: ["风险投资", "VC"], region: "美国", recommended: true },
    { category: "pe-vc", name: "软银愿景基金SoftBank Vision Fund", url: "https://visionfund.softbank.com", description: "软银千亿级科技投资基金", tags: ["VC", "科技"], region: "日本", recommended: false },
    { category: "pe-vc", name: "腾讯投资", url: "https://www.tencent.com/investments.html", description: "腾讯战略投资部门", tags: ["VC", "战略投资", "中国"], region: "中国", recommended: true },
    { category: "pe-vc", name: "高瓴资本Hillhouse", url: "https://www.hillhouseinvestment.com", description: "中国顶级PE VC长期价值投资", tags: ["PE", "VC", "中国"], region: "中国", recommended: true },
    { category: "pe-vc", name: "红杉中国Sequoia China", url: "https://www.sequoiacap.cn", description: "红杉中国基金消费科技医疗", tags: ["VC", "中国"], region: "中国", recommended: true },
    { category: "pe-vc", name: "IDG资本", url: "https://www.idgcapital.com", description: "IDG资本最早进入中国的VC", tags: ["VC", "中国"], region: "中国", recommended: false },
    { category: "pe-vc", name: "经纬中国Matrix Partners China", url: "https://www.matrixpartners.com.cn", description: "经纬中国早期成长期投资", tags: ["VC", "早期", "中国"], region: "中国", recommended: false },
    { category: "pe-vc", name: "今日资本Capital Today", url: "https://www.capitaltoday.com", description: "徐新今日资本京东美团投资", tags: ["VC", "中国"], region: "中国", recommended: false },
    { category: "pe-vc", name: "PitchBook", url: "https://pitchbook.com", description: "PE VC M&A数据和平台", tags: ["数据", "PE", "VC"], region: "美国", recommended: true },
    { category: "pe-vc", name: "Crunchbase", url: "https://www.crunchbase.com", description: "初创公司融资数据库投资人信息", tags: ["数据", "初创公司", "融资"], region: "美国", recommended: true },
    { category: "pe-vc", name: "清科研究中心Zero2IPO", url: "https://www.pedata.cn", description: "中国股权投资数据研究", tags: ["数据", "PE", "VC", "中国"], region: "中国", recommended: true },
    { category: "pe-vc", name: "投中网ChinaVenture", url: "https://www.chinaventure.com.cn", description: "中国股权投资资讯数据", tags: ["资讯", "PE", "VC", "中国"], region: "中国", recommended: false },

    // ==================== 退休养老 - retirement (12个) ====================
    { category: "retirement", name: "Social Security美国社保", url: "https://www.ssa.gov", description: "美国社会保障管理局养老金", tags: ["社保", "养老金", "美国"], region: "美国", recommended: true },
    { category: "retirement", name: "Fidelity 401k", url: "https://www.fidelity.com/retirement-ira/401k", description: "富达401k退休计划管理", tags: ["401k", "退休计划"], region: "美国", recommended: true },
    { category: "retirement", name: "Vanguard IRA", url: "https://investor.vanguard.com/retirement", description: "Vanguard IRA个人退休账户", tags: ["IRA", "退休账户"], region: "美国", recommended: true },
    { category: "retirement", name: "Schwab退休规划", url: "https://www.schwab.com/retirement-planning", description: "嘉信理财退休规划和401k rollover", tags: ["退休规划", "401k"], region: "美国", recommended: false },
    { category: "retirement", name: "中国社会保��障卡", url: "http://si.12333.gov.cn", description: "中国社会保险公共服务平台", tags: ["社保", "养老金", "中国"], region: "中国", recommended: true },
    { category: "retirement", name: "全国住房公积金", url: "https://www.gjj.beijing.gov.cn", description: "北京公积金其他城市类似", tags: ["公积金", "住房", "中国"], region: "中国", recommended: false },
    { category: "retirement", name: "TIAA教师退休基金", url: "https://www.tiaa.org", description: "TIAA学术和研究机构退休基金", tags: ["退休基金", "学术"], region: "美国", recommended: false },
    { category: "retirement", name: "CalPERS加州公务员退休", url: "https://www.calpers.ca.gov", description: "加州公共雇员退休系统最大养老基金", tags: ["养老基金", "公务员"], region: "美国", recommended: false },
    { category: "retirement", name: "全国社会保障基金理事会", url: "http://www.sfpc.org.cn", description: "中国主权养老基金", tags: ["社保基金", "主权基金", "中国"], region: "中国", recommended: false },
    { category: "retirement", name: "IRA.com个人退休账户指南", url: "https://ira.com", description: "IRA Roth Traditional SEP SIMPLE指南", tags: ["IRA", "指南"], region: "美国", recommended: false },
    { category: "retirement", name: "NerdWallet退休计算器", url: "https://www.nerdwallet.com/article/investing/retirement-calculator", description: "退休储蓄计算器和规划工具", tags: ["计算器", "规划"], region: "美国", recommended: false },
    { category: "retirement", name: "SmartAsset退休规划", url: "https://smartasset.com/retirement", description: "退休规划工具401k匹配计算", tags: ["规划工具", "401k"], region: "美国", recommended: false },

    // ==================== 个人理财 - personal-finance (15个) ====================
    { category: "personal-finance", name: "随手记", url: "https://www.suishouji.com", description: "随手记记账理财APP", tags: ["记账", "APP", "中国"], region: "中国", recommended: true },
    { category: "personal-finance", name: "挖财记账", url: "https://www.wacai.com", description: "挖财记账理财社区", tags: ["记账", "社区", "中国"], region: "中国", recommended: false },
    { category: "personal-finance", name: "Mint记账", url: "https://mint.intuit.com", description: "Intuit Mint个人财务管理免费", tags: ["记账", "预算", "美国"], region: "美国", recommended: true },
    { category: "personal-finance", name: "YNAB You Need A Budget", url: "https://www.ynab.com", description: "YNAB零基预算法记账软件", tags: ["预算", "记账方法"], region: "美国", recommended: true },
    { category: "personal-finance", name: "Personal Capital", url: "https://www.personalcapital.com", description: "Personal Capital财富管理和投资", tags: ["财富管理", "投资跟踪"], region: "美国", recommended: false },
    { category: "personal-finance", name: "NerdWallet", url: "https://www.nerdwallet.com", description: "NerdWallet金融产品比较信用卡贷款", tags: ["比较", "信用卡", "贷款"], region: "美国", recommended: true },
    { category: "personal-finance", name: "Credit Karma", url: "https://www.creditkarma.com", description: "Credit Karma免费信用分数监控", tags: ["信用分数", "监控"], region: "美国", recommended: true },
    { category: "personal-finance", name: "雪球理财", url: "https://xueqiu.com", description: "雪球投资社区组合基金", tags: ["社区", "投资", "基金"], region: "中国", recommended: true },
    { category: "personal-finance", name: "且慢基金组合", url: "https://qieman.com", description: "蛋卷旗下基金组合定投平台", tags: ["基金组合", "定投"], region: "中国", recommended: false },
    { category: "personal-finance", name: "支付宝理财", url: "https://www.alipay.com", description: "支付宝余额宝基金理财保险", tags: ["余额宝", "基金", "支付"], region: "中国", recommended: true },
    { category: "personal-finance", name: "微信理财通", url: "https://finance.weixin.qq.com", description: "微信理财通基金理财产品", tags: ["基金", "理财"], region: "中国", recommended: true },
    { category: "personal-finance", name: "Dave Ramsey", url: "https://www.daveramsey.com", description: "Dave Ramsey个人理财专家债务管理", tags: ["理财专家", "债务"], region: "美国", recommended: false },
    { category: "personal-finance", name: "The Simple Dollar", url: "https://www.thesimpledollar.com", description: "The Simple Dollar个人理财博客", tags: ["博客", "理财"], region: "美国", recommended: false },
    { category: "personal-finance", name: "MoneySavingExpert MSE", url: "https://www.moneysavingexpert.com", description: "英国省钱专家理财省钱技巧", tags: ["省钱", "理财", "英国"], region: "英国", recommended: false },
    { category: "personal-finance", name: "理杏仁", url: "https://lixinger.com", description: "基金数据分析平台估值指标", tags: ["基金", "数据", "分析"], region: "中国", recommended: true },

    // ==================== 支付/金融科技 - payment (15个) ====================
    { category: "payment", name: "支付宝Alipay", url: "https://www.alipay.com", description: "支付宝蚂蚁集团支付理财生活", tags: ["支付", "中国"], region: "中国", recommended: true },
    { category: "payment", name: "微信支付WeChat Pay", url: "https://pay.weixin.qq.com", description: "微信支付腾讯旗下", tags: ["支付", "中国"], region: "中国", recommended: true },
    { category: "payment", name: "PayPal", url: "https://www.paypal.com", description: "PayPal全球在线支付平台", tags: ["支付", "全球"], region: "美国", recommended: true },
    { category: "payment", name: "Stripe", url: "https://stripe.com", description: "Stripe在线支付处理开发者友好", tags: ["支付", "开发者"], region: "美国", recommended: true },
    { category: "payment", name: "Visa", url: "https://www.visa.com", description: "Visa信用卡支付网络", tags: ["信用卡", "支付网络"], region: "美国", recommended: false },
    { category: "payment", name: "Mastercard万事达", url: "https://www.mastercard.com", description: "Mastercard信用卡支付网络", tags: ["信用卡", "支付网络"], region: "美国", recommended: false },
    { category: "payment", name: "银联UnionPay", url: "https://www.unionpay.com", description: "银联国际支付网络中国", tags: ["支付", "中国", "银行卡"], region: "中国", recommended: true },
    { category: "payment", name: "Square Block", url: "https://www.squareup.com", description: "Square商家支付解决方案", tags: ["商户支付", "POS"], region: "美国", recommended: false },
    { category: "payment", name: "Apple Pay苹果支付", url: "https://www.apple.com/apple-pay", description: "Apple Pay移动支付NFC", tags: ["移动支付", "NFC"], region: "美国", recommended: false },
    { category: "payment", name: "Google Pay谷歌支付", url: "https://pay.google.com/intl/en_us/about", description: "Google Pay移动支付", tags: ["移动支付"], region: "美国", recommended: false },
    { category: "payment", name: "Payoneer派安盈", url: "https://www.payoneer.com", description: "Payoneer跨境支付收款", tags: ["跨境支付", "收款"], region: "美国", recommended: false },
    { category: "payment", name: "Airwallex空中云汇", url: "https://www.airwallex.com", description: "Airwallex跨境支付金融科技", tags: ["跨境支付", "金融科技"], region: "全球", recommended: false },
    { category: "payment", name: "连连支付Lianlian", url: "https://www.lianlianpay.com", description: "连连支付跨境支付牌照", tags: ["跨境支付", "中国"], region: "中国", recommended: false },
    { category: "payment", name: "Ping++", url: "https://www.pingxx.com", description: "Ping++聚合支付SDK", tags: ["聚合支付", "开发者"], region: "中国", recommended: false },
    { category: "payment", name: "汇付天下Chinapay", url: "https://www.chinapay.com", description: "汇付天下支付和金融科技", tags: ["支付", "金融科技", "中国"], region: "中国", recommended: false },

    // ==================== 信托服务 - trust (10个) ====================
    { category: "trust", name: "中信信托", url: "https://www.ecitic.com/trust", description: "中信信托有限责任公司", tags: ["信托", "中国"], region: "中国", recommended: true },
    { category: "trust", name: "平安信托", url: "https://trust.pingan.com", description: "平安信托家族信托服务", tags: ["信托", "家族信托", "中国"], region: "中国", recommended: true },
    { category: "trust", name: "华润信托CRTrust", url: "https://www.crctrust.com", description: "华润深国投信托有限公司", tags: ["信托", "中国"], region: "中国", recommended: false },
    { category: "trust", name: "外贸信托FOCM", url: "https://www.fotic.com.cn", description: "中国对外经济贸易信托", tags: ["信托", "中国"], region: "中国", recommended: false },
    { category: "trust", name: "五矿信托", url: "https://www.minmetals trust.com.cn", description: "五矿国际信托有限公司", tags: ["信托", "中国"], region: "中国", recommended: false },
    { category: "trust", name: "瑞士信托UBS Trust", url: "https://www.ubs.com/global/en/wealth-management/trusts.html", description: "UBS瑞士银行信托服务", tags: ["信托", "家族办公室", "瑞士"], region: "瑞士", recommended: false },
    { category: "trust", name: "Northern Trust北方信托", url: "https://www.northerntrust.com", description: "美国北方信托资产服务和托管", tags: ["资产托管", "信托"], region: "美国", recommended: true },
    { category: "trust", name: "BNY Mellon梅隆银行", url: "https://www.bnymellon.com", description: "纽约梅隆银行资产托管服务", tags: ["资产托管", "托管银行"], region: "美国", recommended: true },
    { category: "trust", name: "State Street State Street Global Advisors", url: "https://www.statestreet.com", description: "道富环球投资资产服务商", tags: ["资产服务", "ETF"], region: "美国", recommended: false },
    { category: "trust", name: "中国信托业协会", url: "https://www.xtxh.net", description: "中国信托业协会行业自律", tags: ["协会", "信托", "中国"], region: "中国", recommended: false },

    // ==================== 会计/审计 - accounting (10个) ====================
    { category: "accounting", name: "普华永道PwC", url: "https://www.pwc.com", description: "PricewaterhouseCoopers四大会计师事务所", tags: ["四大", "会计师事务所"], region: "全球", recommended: true },
    { category: "accounting", name: "德勤Deloitte", url: "https://www.deloitte.com", description: "Deloitte Touche Tohmatsu四大会计师事务所", tags: ["四大", "会计师事务所"], region: "全球", recommended: true },
    { category: "accounting", name: "安永EY", url: "https://www.ey.com", description: "Ernst & Young四大会计师事务所", tags: ["四大", "会计师事务所"], region: "全球", recommended: true },
    { category: "accounting", name: "毕马威KPMG", url: "https://home.kpmg", description: "Klynveld Peat Marwick Goerdeler四大会计师事务所", tags: ["四大", "会计师事务所"], region: "全球", recommended: true },
    { category: "accounting", name: "立信会计师事务所", url: "https://www.bdo.com.cn", description: "中国本土最大会计师事务所", tags: ["会计师事务所", "中国"], region: "中国", recommended: true },
    { category: "accounting", name: "瑞华会计师事务所", url: "https://www.rhcpa.com.cn", description: "瑞华会计师事务所", tags: ["会计师事务所", "中国"], region: "中国", recommended: false },
    { category: "accounting", name: "天健会计师事务所", url: "https://www.pccpa.com.cn", description: "天健会计师事务所", tags: ["会计师事务所", "中国"], region: "中国", recommended: false },
    { category: "accounting", name: "致同会计师事务所Grant Thornton", url: "https://www.grantthornton.global", description: "Grant Thornton全球第六大会计师事务所", tags: ["会计师事务所", "全球"], region: "全球", recommended: false },
    { category: "accounting", name: "BDO立信国际", url: "https://www.bdo.com", description: "BDO全球第五大会计师事务所网络", tags: ["会计师事务所", "全球"], region: "全球", recommended: false },
    { category: "accounting", name: "中国注册会计师协会CICPA", url: "https://www.cicpa.org.cn", description: "中国注册会计师协会", tags: ["协会", "注册会计师", "中国"], region: "中国", recommended: false },

    // ==================== 征信/信用 - credit (8个) ====================
    { category: "credit", name: "中国人民银行征信中心", url: "https://www.pbccrc.org.cn", description: "央行征信中心个人企业信用报告", tags: ["征信", "信用报告", "中国"], region: "中国", recommended: true },
    { category: "credit", name: "芝麻信用Zhima Credit", url: "https://zhiyuan.antcloud.com/zhima", description: "蚂蚁集团芝麻信用分", tags: ["信用分", "中国"], region: "中国", recommended: true },
    { category: "credit", name: " Experian益博睿", url: "https://www.experian.com", description: "Experian全球征信机构信用报告", tags: ["征信", "信用报告", "全球"], region: "爱尔兰", recommended: true },
    { category: "credit", name: "Equifax艾奎法克斯", url: "https://www.equifax.com", description: "Equifax美国三大征信局之一", tags: ["征信", "信用报告", "美国"], region: "美国", recommended: true },
    { category: "credit", name: "TransUnion环联", url: "https://www.transunion.com", description: "TransUnion全球征信局信用数据", tags: ["征信", "信用数据", "全球"], region: "美国", recommended: true },
    { category: "credit", name: "百行征信", url: "https://www.baihangcredit.com", description: "百行征信个人征信机构", tags: ["征信", "中国"], region: "中国", recommended: false },
    { category: "credit", name: "前海征信", url: "https://www.qianhai.xyz", description: "前海征信平安旗下", tags: ["征信", "中国"], region: "中国", recommended: false },
    { category: "credit", name: "FICO信用评分", url: "https://www.fico.com", description: "FICO信用评分模型标准", tags: ["信用评分", "模型"], region: "美国", recommended: false },

    // ==================== 另类投资 - alternative (12个) ====================
    { category: "alternative", name: "桥水基金Bridgewater Associates", url: "https://www.bridgewater.com", description: "Ray Dalio桥水全球最大对冲基金", tags: ["对冲基金", "宏观"], region: "美国", recommended: true },
    { category: "alternative", name: "Two Sigma", url: "https://www.twosigma.com", description: "Two Sigma量化对冲基金科学驱动", tags: ["对冲基金", "量化"], region: "美国", recommended: false },
    { category: "alternative", name: "文艺复兴科技Renaissance Technologies", url: "https://www.rentec.com", description: "Jim Simons大奖章基金量化传奇", tags: ["对冲基金", "量化"], region: "美国", recommended: false },
    { category: "alternative", name: "苏富比Sotheby's", url: "https://www.sothebys.com", description: "苏富比拍卖行艺术品收藏品珠宝", tags: ["艺术品", "拍卖"], region: "全球", recommended: false },
    { category: "alternative", name: "佳士得Christie's", url: "https://www.christies.com", description: "佳士得拍卖行艺术品名酒珠宝", tags: ["艺术品", "拍卖"], region: "全球", recommended: false },
    { category: "alternative", name: "Masterworks", url: "https://masterworks.com", description: "Masterworks艺术品投资平台 fractional", tags: ["艺术品", "投资", "碎片化"], region: "美国", recommended: false },
    { category: "alternative", name: "Yieldstreet", url: "https://yieldstreet.com", description: "Yieldstreet另类投资平台房地产法律", tags: ["另类投资", "平台"], region: "美国", recommended: false },
    { category: "alternative", name: "Fundrise房地产众筹", url: "https://fundrise.com", description: "Fundrise房地产投资信托REITs众筹", tags: ["房地产", "众筹", "REIT"], region: "美国", recommended: false },
    { category: "alternative", name: "Collectors Universe收藏品鉴定", url: "https://www.collectorsuniverse.com", description: "PCGS NGC钱币邮票收藏品评级", tags: ["收藏品", "评级"], region: "美国", recommended: false },
    { category: "alternative", name: "Heritage Auctions", url: "https://www.ha.com", description: "Heritage Auctions收藏品拍卖", tags: ["收藏品", "拍卖"], region: "美国", recommended: false },
    { category: "alternative", name: "葡萄酒投资Liv-ex", url: "https://www.liv-ex.com", description: "Liv-ex葡萄酒交易平台Fine Wine", tags: ["葡萄酒", "投资"], region: "英国", recommended: false },
    { category: "alternative", name: "钻石投资RAPAPORT", url: "https://www.rapaport.com", description: "Rapaport钻石报价表Diamond", tags: ["钻石", "报价"], region: "美国", recommended: false },

    // ==================== 学习社区 - education (18个) ====================
    { category: "education", name: "Coursera金融课程", url: "https://www.coursera.org/browse/finance", description: "Coursera在线金融课程耶鲁斯坦福MIT", tags: ["在线课程", "大学"], region: "全球", recommended: true },
    { category: "education", name: "edX金融课程", url: "https://www.edx.org/subject/finance", description: "edX MIT哈佛伯克利名校金融课程免费", tags: ["在线课程", "名校"], region: "全球", recommended: false },
    { category: "education", name: "Khan Academy可汗学院", url: "https://www.khanacademy.org/economics-finance-domain", description: "Khan Academy免费金融经济学课程", tags: ["免费课程", "基础"], region: "美国", recommended: true },
    { category: "education", name: "知乎投资话题", url: "https://www.zhihu.com/topic/19550901/hot", description: "知乎投资理财话题讨论社区", tags: ["社区", "讨论"], region: "中国", recommended: true },
    { category: "education", name: "豆瓣理财小组", url: "https://www.douban.com/group/money", description: "豆瓣理财讨论小组", tags: ["社区", "讨论"], region: "中国", recommended: false },
    { category: "education", name: "Reddit r/investing", url: "https://www.reddit.com/r/investing", description: "Reddit r/investing投资社区英文", tags: ["社区", "讨论", "英文"], region: "美国", recommended: true },
    { category: "education", name: "Reddit r/wallstreetbets WSB", url: "https://www.reddit.com/r/wallstreetbets", description: "WSB WallStreetBets散户聚集地meme stock", tags: ["社区", "散户", "meme"], region: "美国", recommended: false },
    { category: "education", name: "Bilibili投资UP主", url: "https://search.bilibili.com/all?keyword=投资理财", description: "B站投资理财视频UP主教程", tags: ["视频", "教程"], region: "中国", recommended: false },
    { category: "education", name: "YouTube投资频道", url: "https://www.youtube.com/results?search_query=investing+for+beginners", description: "YouTube投资教学视频英文", tags: ["视频", "教程", "英文"], region: "全球", recommended: false },
    { category: "education", name: "CFA Institute特许金融分析师", url: "https://www.cfainstitute.org", description: "CFA特许金融分析师考试认证", tags: ["CFA", "考试", "认证"], region: "美国", recommended: true },
    { category: "education", name: "CFA Level 1备考", url: "https://analystprep.com/cfa-level-1-exam-prep", description: "AnalystPrep CFA备考资料题库", tags: ["CFA", "备考"], region: "美国", recommended: false },
    { category: "education", name: "FRM金融风险管理师", url: "https://www.garp.org", description: "GARP FRM金融风险管理师认证", tags: ["FRM", "风险管理", "认证"], region: "美国", recommended: true },
    { category: "education", name: "CIMA特许资产管理师", url: "https://www.cima global.com", description: "CIMA特许国际资产管理师", tags: ["CIMA", "资产管理", "认证"], region: "英国", recommended: false },
    { category: "education", name: "中国证券业协会考试", url: "https://www.sac.net.cn/cyry/kspt/kstz", description: "中国证券从业资格考试", tags: ["从业资格", "考试", "中国"], region: "中国", recommended: true },
    { category: "education", name: "基金从业资格考试", url: "https://www.amac.org.cn", description: "基金从业人员资格考试", tags: ["从业资格", "基金", "中国"], region: "中国", recommended: false },
    { category: "education", name: "期货从业资格考试", url: "https://www.cfachina.org", description: "期货从业人员资格考试", tags: ["从业资格", "期货", "中国"], region: "中国", recommended: false },
    { category: "education", name: "得到App投资课", url: "https://www.dedao.cn", description: "得到App知识付费投资理财课程", tags: ["知识付费", "课程", "中国"], region: "中国", recommended: false },
    { category: "education", name: "极客时间", url: "https://geektime.geekbang.org", description: "极客时间技术商业课程", tags: ["知识付费", "课程", "中国"], region: "中国", recommended: false },

    // ==================== 监管机构 - regulators (12个) ====================
    { category: "regulators", name: "中国证监会CSRC", url: "http://www.csrc.gov.cn", description: "中国证券监督管理委员会证监会", tags: ["监管", "证券", "中国"], region: "中国", recommended: true },
    { category: "regulators", name: "美国SEC证券交易委员会", url: "https://www.sec.gov", description: "SEC Securities and Exchange Commission", tags: ["监管", "证券", "美国"], region: "美国", recommended: true },
    { category: "regulators", name: "英国FCA金融行为监管局", url: "https://www.fca.org.uk", description: "FCA Financial Conduct Authority UK", tags: ["监管", "金融", "英国"], region: "英国", recommended: true },
    { category: "regulators", name: "香港证监会SFC", url: "https://www.sfc.hk", description: "SFC Securities and Futures Commission HK", tags: ["监管", "证券", "香港"], region: "香港", recommended: true },
    { category: "regulators", name: "日本FSA金融厅", url: "https://www.fsa.go.jp", description: "日本金融服务厅Financial Services Agency", tags: ["监管", "金融", "日本"], region: "日本", recommended: false },
    { category: "regulators", name: "新加坡MAS金融管理局", url: "https://www.mas.gov.sg", description: "MAS Monetary Authority of Singapore", tags: ["监管", "金融", "新加坡"], region: "新加坡", recommended: false },
    { category: "regulators", name: "欧盟ESMA欧洲证券和市场管理局", url: "https://www.esma.europa.eu", description: "ESMA European Securities and Markets Authority", tags: ["监管", "证券", "欧盟"], region: "欧盟", recommended: false },
    { category: "regulators", name: "国际清算银行BIS", url: "https://www.bis.org", description: "BIS Bank for International Settlements央行", tags: ["国际", "央行", "监管"], region: "全球", recommended: false },
    { category: "regulators", name: "中国国家金融监督管理总局NFRA", url: "https://www.nfra.gov.cn", description: "国家金融监督管理总局原银保监会", tags: ["监管", "金融", "中国"], region: "中国", recommended: true },
    { category: "regulators", name: "美国CFTC商品期货交易委员会", url: "https://www.cftc.gov", description: "CFTC Commodity Futures Trading Commission", tags: ["监管", "期货", "美国"], region: "美国", recommended: false },
    { category: "regulators", name: "美国FDIC联邦存款保险公司", url: "https://www.fdic.gov", description: "FDIC Federal Deposit Insurance Corporation", tags: ["存款保险", "银行", "美国"], region: "美国", recommended: false },
    { category: "regulators", name: "IOSCO国际证监会组织", url: "https://www.iosco.org", description: "IOSCO International Organization of Securities Commissions", tags: ["国际", "证券监管"], region: "全球", recommended: false },

    // ==================== 工具 - tools (20个) ====================
    { category: "tools", name: "TradingView", url: "https://www.tradingview.com", description: "TradingView全球图表分析平台最佳", tags: ["图表", "分析", "行情"], region: "全球", recommended: true },
    { category: "tools", name: "MetaTrader 4/5 MT4 MT5", url: "https://www.metatrader4.com", description: "MT4 MT5外汇交易平台EA", tags: ["交易平台", "外汇", "MT4"], region: "全球", recommended: true },
    { category: "tools", name: "通达信TDX", url: "https://www.tdx.com.cn", description: "通达信国内股票行情软件券商版", tags: ["行情软件", "A股"], region: "中国", recommended: true },
    { category: "tools", name: "同花顺10jqka", url: "https://www.10jqka.com.cn", description: "同花顺国内股票行情软件iFinD", tags: ["行情软件", "A股"], region: "中国", recommended: true },
    { category: "tools", name: "Wind万得Wind终端", url: "https://www.wind.com.cn", description: "Wind万得国内最专业金融终端机构", tags: ["金融终端", "数据", "专业"], region: "中国", recommended: true },
    { category: "tools", name: "东方财富Choice", url: "https://choice.eastmoney.com", description: "Choice东方财富数据终端", tags: ["金融终端", "数据"], region: "中国", recommended: true },
    { category: "tools", name: "Bloomberg Terminal彭博终端", url: "https://www.bloomberg.com/professional", description: "Bloomberg彭博专业终端金融数据", tags: ["金融终端", "专业", "全球"], region: "美国", recommended: true },
    { category: "tools", name: "Reuters Refinitiv路孚特", url: "https://www.refinitiv.com", description: "Refinitiv路透金融终端数据Eikon", tags: ["金融终端", "数据"], region: "全球", recommended: false },
    { category: "tools", name: "Finviz", url: "https://www.finviz.com", description: "Finviz美股筛选工具 screener map", tags: ["筛选工具", "美股", "选股"], region: "美国", recommended: true },
    { category: "tools", name: "Yahoo Stock Screener", url: "https://finance.yahoo.com/screener", description: "Yahoo Finance股票筛选器", tags: ["筛选工具", "美股"], region: "美国", recommended: false },
    { category: "tools", name: "Portfolio Visualizer", url: "https://portfoliovisualizer.com", description: "Portfolio Visualizer投资组合回测分析", tags: ["回测", "分析"], region: "美国", recommended: false },
    { category: "tools", name: "Simply Wall St", url: "https://simplywall.st", description: "Simply Wall St股票基本面分析可视化", tags: ["基本面", "分析"], region: "全球", recommended: false },
    { category: "tools", name: "MacroTrends", url: "https://www.macrotrends.net", description: "MacroTrends宏观经济历史数据长期", tags: ["宏观", "数据", "历史"], region: "美国", recommended: true },
    { category: "tools", name: "FRED圣路易斯联储经济数据库", url: "https://fred.stlouisfed.org", description: "FRED Federal Reserve Economic Data", tags: ["经济数据", "美国"], region: "美国", recommended: true },
    { category: "tools", name: "StockAnalysis", url: "https://stockanalysis.com", description: "StockAnalysis股票分析财务数据估值", tags: ["分析", "财务数据"], region: "美国", recommended: false },
    { category: "tools", name: "Seeking Alpha Quant", url: "https://seekingalpha.com/stock-ideas", description: "Seeking Alpha量化评分系统", tags: ["量化", "评分"], region: "美国", recommended: false },
    { category: "tools", name: "S&P Global Market Intelligence", url: "https://www.spglobal.com/marketintelligence", description: "标普全球市场情报数据和研究", tags: ["数据", "研究", "标普"], region: "美国", recommended: false },
    { category: "tools", name: "Capital IQ S&P", url: "https://www.capitaliq.com", description: "S&P Capital IQ企业财务数据平台", tags: ["企业数据", "财务"], region: "美国", recommended: false },
    { category: "tools", name: "大智慧DZH", url: "https://www.gwzh.com.cn", description: "大智慧365国内股票行情软件", tags: ["行情软件", "A股"], region: "中国", recommended: false },
    { category: "tools", name: "萝卜投研", url: "https://luobosit.com", description: "萝卜投研基金数据分析工具", tags: ["基金", "数据", "分析"], region: "中国", recommended: false }
  ]
};

function getLinksByCategory(categoryId) {
  if (categoryId === 'tags') return [];
  return siteData.links.filter(link => link.category === categoryId);
}

function getPrimaryCategories() {
  return siteData.categories;
}

function searchLinks(keyword) {
  const lowerKeyword = keyword.toLowerCase();
  return siteData.links.filter(link =>
    link.name.toLowerCase().includes(lowerKeyword) ||
    link.description.toLowerCase().includes(lowerKeyword) ||
    link.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
  );
}

function getTotalLinkCount() {
  return siteData.links.length;
}

function getCategoryLinkCount(categoryId) {
  if (categoryId === 'tags') return getAllTags().length;
  return siteData.links.filter(link => link.category === categoryId).length;
}

function getAllTags() {
  const tagCounts = {};
  siteData.links.forEach(link => {
    link.tags.forEach(tag => {
      if (!tagCounts[tag]) {
        tagCounts[tag] = 0;
      }
      tagCounts[tag]++;
    });
  });
  return Object.entries(tagCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

function getLinksByTag(tagName) {
  return siteData.links.filter(link => link.tags.includes(tagName));
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    siteData,
    getLinksByCategory,
    getPrimaryCategories,
    searchLinks,
    getTotalLinkCount,
    getCategoryLinkCount,
    getAllTags,
    getLinksByTag
  };
}
