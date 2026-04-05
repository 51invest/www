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
      id: "bonds",
      name: "债券",
      icon: "bond",
      description: "国债、企业债、可转债、信用评级"
    },
    {
      id: "fixed-income",
      name: "固收",
      icon: "fixed-income",
      description: "固定收益投资产品与服务"
    },
    {
      id: "futures",
      name: "期货",
      icon: "futures",
      description: "商品期货、金融期货"
    },
    {
      id: "index-futures",
      name: "期指",
      icon: "index-futures",
      description: "股指期货、指数衍生品"
    },
    {
      id: "energy",
      name: "能源",
      icon: "energy",
      description: "原油、天然气等能源投资"
    },
    {
      id: "precious-metals",
      name: "贵金属",
      icon: "precious-metals",
      description: "黄金、白银等贵金属投资"
    },
    {
      id: "base-metals",
      name: "基础金属",
      icon: "base-metals",
      description: "铜、铝等基础金属投资"
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
      id: "tools",
      name: "工具",
      icon: "tools",
      description: "交易平台、行情软件、金融终端"
    }
  ],

  links: [
    // ==================== 资讯 - news ====================
    {
      category: "news",
      name: "东方财富",
      url: "https://www.eastmoney.com",
      description: "中国领先财经门户，行情资讯社区",
      tags: ["财经门户", "行情", "社区"],
      region: "中国",
      recommended: true
    },
    {
      category: "news",
      name: "雪球",
      url: "https://xueqiu.com",
      description: "投资者社区，股票讨论组合投资",
      tags: ["社区", "讨论", "投资"],
      region: "中国",
      recommended: true
    },
    {
      category: "news",
      name: "新浪财经",
      url: "https://finance.sina.com.cn",
      description: "新浪财经频道",
      tags: ["财经新闻"],
      region: "中国",
      recommended: true
    },
    {
      category: "news",
      name: "华尔街见闻",
      url: "https://wallstreetcn.com",
      description: "全球财经资讯",
      tags: ["资讯", "全球"],
      region: "中国",
      recommended: true
    },
    {
      category: "news",
      name: "Bloomberg",
      url: "https://www.bloomberg.com",
      description: "全球财经媒体与专业终端",
      tags: ["财经媒体", "终端", "全球"],
      region: "美国",
      recommended: true
    },
    {
      category: "news",
      name: "路透社",
      url: "https://www.reuters.com",
      description: "路透社财经",
      tags: ["财经媒体", "全球"],
      region: "英国",
      recommended: true
    },
    {
      category: "news",
      name: "金融时报",
      url: "https://www.ft.com",
      description: "Financial Times",
      tags: ["财经媒体", "英国"],
      region: "英国",
      recommended: true
    },
    {
      category: "news",
      name: "华尔街日报",
      url: "https://www.wsj.com",
      description: "Wall Street Journal",
      tags: ["财经媒体", "美国"],
      region: "美国",
      recommended: true
    },
    {
      category: "news",
      name: "Seeking Alpha",
      url: "https://seekingalpha.com",
      description: "投资分析社区",
      tags: ["资讯", "分析", "美股"],
      region: "美国",
      recommended: true
    },
    {
      category: "news",
      name: "CNBC",
      url: "https://www.cnbc.com",
      description: "美国财经电视台",
      tags: ["资讯", "视频", "美股"],
      region: "美国",
      recommended: true
    },
    {
      category: "news",
      name: "CoinDesk",
      url: "https://www.coindesk.com",
      description: "加密货币新闻媒体",
      tags: ["资讯", "加密货币"],
      region: "全球",
      recommended: true
    },
    {
      category: "news",
      name: "CoinTelegraph",
      url: "https://cointelegraph.com",
      description: "加密货币新闻媒体",
      tags: ["资讯", "加密货币"],
      region: "全球",
      recommended: true
    },
    {
      category: "news",
      name: "证券时报",
      url: "https://www.stcn.com",
      description: "证券类专业媒体",
      tags: ["资讯", "证券"],
      region: "中国",
      recommended: true
    },
    {
      category: "news",
      name: "第一财经",
      url: "https://www.yicai.com",
      description: "财经全媒体",
      tags: ["资讯", "财经"],
      region: "中国",
      recommended: true
    },

    // ==================== A股 - stocks-cn ====================
    {
      category: "stocks-cn",
      name: "华泰证券",
      url: "https://www.htsc.com.cn",
      description: "头部券商，股票开户理财服务",
      tags: ["券商", "开户"],
      region: "中国",
      recommended: true
    },
    {
      category: "stocks-cn",
      name: "中信证券",
      url: "https://www.cs.ecitic.com",
      description: "国内最大券商，股票债券资产管理",
      tags: ["券商", "资产管理"],
      region: "中国",
      recommended: true
    },
    {
      category: "stocks-cn",
      name: "国泰君安",
      url: "https://www.gtja.com",
      description: "头部券商，股票期货融资融券",
      tags: ["券商", "期货"],
      region: "中国",
      recommended: true
    },
    {
      category: "stocks-cn",
      name: "中金公司",
      url: "https://www.cicc.com",
      description: "顶级投行，股票承销并购咨询",
      tags: ["投行", "并购"],
      region: "中国",
      recommended: true
    },
    {
      category: "stocks-cn",
      name: "招商证券",
      url: "https://www.newone.com.cn",
      description: "大型券商，股票期货基金",
      tags: ["券商"],
      region: "中国",
      recommended: false
    },
    {
      category: "stocks-cn",
      name: "上海证券交易所",
      url: "https://www.sse.com.cn",
      description: "A股上交所官网",
      tags: ["交易所"],
      region: "中国",
      recommended: true
    },
    {
      category: "stocks-cn",
      name: "深圳证券交易所",
      url: "https://www.szse.cn",
      description: "A股深交所官网",
      tags: ["交易所"],
      region: "中国",
      recommended: true
    },

    // ==================== 港股 - stocks-hk ====================
    {
      category: "stocks-hk",
      name: "富途证券",
      url: "https://www.futuhk.com",
      description: "港美股知名券商，0佣金中文界面",
      tags: ["券商", "美股", "0佣金"],
      region: "香港",
      recommended: true
    },
    {
      category: "stocks-hk",
      name: "老虎证券",
      url: "https://www.tigerbrokers.com",
      description: "港美股券商，中文界面0佣金",
      tags: ["券商", "美股", "中文"],
      region: "中国",
      recommended: true
    },
    {
      category: "stocks-hk",
      name: "长桥证券",
      url: "https://www.longbridge.com",
      description: "港美股券商，新兴券商",
      tags: ["券商", "美股"],
      region: "香港",
      recommended: true
    },
    {
      category: "stocks-hk",
      name: "香港交易所",
      url: "https://www.hkex.com.hk",
      description: "港交所官网，股票期货期权",
      tags: ["交易所", "期货"],
      region: "香港",
      recommended: true
    },

    // ==================== 美股 - stocks-us ====================
    {
      category: "stocks-us",
      name: "富达投资",
      url: "https://www.fidelity.com",
      description: "美国最大券商之一，股票基金债券退休账户",
      tags: ["券商", "基金", "退休账户"],
      region: "美国",
      recommended: true
    },
    {
      category: "stocks-us",
      name: "嘉信理财",
      url: "https://www.schwab.com",
      description: "美国知名券商，股票交易共同基金",
      tags: ["券商", "基金"],
      region: "美国",
      recommended: true
    },
    {
      category: "stocks-us",
      name: "Robinhood",
      url: "https://www.robinhood.com",
      description: "美国零佣金券商，股票期权加密货币",
      tags: ["券商", "0佣金", "期权"],
      region: "美国",
      recommended: true
    },
    {
      category: "stocks-us",
      name: "Interactive Brokers",
      url: "https://www.interactivebrokers.com",
      description: "专业交易者首选，低佣金全球市场",
      tags: ["券商", "专业", "低佣金", "全球"],
      region: "美国",
      recommended: true
    },
    {
      category: "stocks-us",
      name: "Vanguard",
      url: "https://investor.vanguard.com",
      description: "指数基金之王，低成本指数基金",
      tags: ["基金", "指数基金", "低费率"],
      region: "美国",
      recommended: true
    },
    {
      category: "stocks-us",
      name: "摩根士丹利",
      url: "https://www.morganstanley.com",
      description: "全球顶级投行，财富管理",
      tags: ["投行", "财富管理"],
      region: "美国",
      recommended: true
    },
    {
      category: "stocks-us",
      name: "高盛",
      url: "https://www.goldmansachs.com",
      description: "全球顶级投行，投资银行并购",
      tags: ["投行", "并购"],
      region: "美国",
      recommended: true
    },
    {
      category: "stocks-us",
      name: "纽约证券交易所",
      url: "https://www.nyse.com",
      description: "NYSE官网，全球最大股票交易所",
      tags: ["交易所"],
      region: "美国",
      recommended: true
    },
    {
      category: "stocks-us",
      name: "纳斯达克",
      url: "https://www.nasdaq.com",
      description: "NASDAQ官网，科技股为主",
      tags: ["交易所", "科技股"],
      region: "美国",
      recommended: true
    },

    // ==================== 基金 - funds ====================
    {
      category: "funds",
      name: "天天基金",
      url: "https://fund.eastmoney.com",
      description: "国内最大基金销售平台净值查询",
      tags: ["基金销售", "净值"],
      region: "中国",
      recommended: true
    },
    {
      category: "funds",
      name: "蚂蚁财富",
      url: "https://finance.antgroup.com",
      description: "支付宝基金频道数万只基金",
      tags: ["基金销售", "支付宝"],
      region: "中国",
      recommended: true
    },
    {
      category: "funds",
      name: "蛋卷基金",
      url: "https://danjuanfunds.com",
      description: "基金组合平台",
      tags: ["基金组合", "智能投顾"],
      region: "中国",
      recommended: true
    },
    {
      category: "funds",
      name: "私募排排网",
      url: "https://www.simuwang.com",
      description: "私募基金数据平台",
      tags: ["私募基金", "数据"],
      region: "中国",
      recommended: true
    },
    {
      category: "funds",
      name: "Morningstar晨星",
      url: "https://www.morningstar.com",
      description: "全球基金评级机构",
      tags: ["基金评级", "数据", "研究"],
      region: "美国",
      recommended: true
    },
    {
      category: "funds",
      name: "Vanguard",
      url: "https://investor.vanguard.com",
      description: "全球最大公募基金指数基金",
      tags: ["基金", "指数基金", "低费率"],
      region: "美国",
      recommended: true
    },
    {
      category: "funds",
      name: "Fidelity富达",
      url: "https://www.fidelity.com",
      description: "美国头部基金指数基金",
      tags: ["基金", "指数基金"],
      region: "美国",
      recommended: true
    },
    {
      category: "funds",
      name: "BlackRock贝莱德",
      url: "https://www.blackrock.com",
      description: "全球最大资管公司ETF",
      tags: ["资管", "基金", "ETF"],
      region: "美国",
      recommended: true
    },

    // ==================== ETF - etf ====================
    {
      category: "etf",
      name: "SPDR标普500 ETF",
      url: "https://www.sectorspdr.com",
      description: "SPDR标普500指数ETF，美国最大ETF",
      tags: ["美股", "指数", "标普500"],
      region: "美国",
      recommended: true
    },
    {
      category: "etf",
      name: "Invesco QQQ",
      url: "https://www.invesco.com",
      description: "追踪纳斯达克100指数",
      tags: ["美股", "纳斯达克", "科技"],
      region: "美国",
      recommended: true
    },
    {
      category: "etf",
      name: "Vanguard整体股市ETF",
      url: "https://investor.vanguard.com",
      description: "追踪整个美国股市",
      tags: ["美股", "全市场"],
      region: "美国",
      recommended: true
    },
    {
      category: "etf",
      name: "iShares安硕",
      url: "https://www.ishares.com",
      description: "全球最大ETF管理公司",
      tags: ["全球", "指数"],
      region: "美国",
      recommended: true
    },
    {
      category: "etf",
      name: "债券ETF专区",
      url: "https://www.ishares.com",
      description: "iShares债券ETF系列",
      tags: ["债券", "固收"],
      region: "美国",
      recommended: true
    },
    {
      category: "etf",
      name: "黄金ETF",
      url: "https://www.spdrgoldshares.com",
      description: "SPDR黄金信托，全球最大黄金ETF",
      tags: ["黄金", "贵金属"],
      region: "美国",
      recommended: true
    },

    // ==================== 债券 - bonds ====================
    {
      category: "bonds",
      name: "美国国债",
      url: "https://www.treasury.gov",
      description: "U.S. Treasury官网，美国国债信息",
      tags: ["国债", "美债"],
      region: "美国",
      recommended: true
    },
    {
      category: "bonds",
      name: "中国债券信息网",
      url: "https://www.chinabond.com.cn",
      description: "中国债券信息官方平台",
      tags: ["国债", "中国企业债"],
      region: "中国",
      recommended: true
    },
    {
      category: "bonds",
      name: "Investing债券",
      url: "https://www.investing.com",
      description: "全球债券行情",
      tags: ["行情", "全球"],
      region: "全球",
      recommended: true
    },
    {
      category: "bonds",
      name: "穆迪",
      url: "https://www.moodys.com",
      description: "信用评级机构",
      tags: ["信用评级"],
      region: "美国",
      recommended: true
    },
    {
      category: "bonds",
      name: "标普评级",
      url: "https://www.standardandpoors.com",
      description: "标普信用评级",
      tags: ["信用评级"],
      region: "美国",
      recommended: true
    },
    {
      category: "bonds",
      name: "惠誉评级",
      url: "https://www.fitchratings.com",
      description: "惠誉信用评级",
      tags: ["信用评级"],
      region: "美国",
      recommended: true
    },

    // ==================== 固收 - fixed-income ====================
    {
      category: "fixed-income",
      name: "PIMCO",
      url: "https://www.pimco.com",
      description: "全球最大债券基金",
      tags: ["债券基金", "固收"],
      region: "美国",
      recommended: true
    },
    {
      category: "fixed-income",
      name: "富达债券",
      url: "https://www.fidelity.com",
      description: "富达债券投资",
      tags: ["债券基金", "固收"],
      region: "美国",
      recommended: true
    },
    {
      category: "fixed-income",
      name: "债券大王",
      url: "https://www.bondsupermart.com",
      description: "香港债券投资平台",
      tags: ["债券", "固收"],
      region: "香港",
      recommended: false
    },

    // ==================== 期货 - futures ====================
    {
      category: "futures",
      name: "芝加哥期货交易所",
      url: "https://www.cmegroup.com",
      description: "农产品期货大豆玉米小麦",
      tags: ["农产品", "期货", "大豆", "玉米"],
      region: "美国",
      recommended: true
    },
    {
      category: "futures",
      name: "洲际交易所",
      url: "https://www.ice.com",
      description: "布伦特原油期货咖啡糖棉花",
      tags: ["原油", "期货", "农产品"],
      region: "全球",
      recommended: false
    },
    {
      category: "futures",
      name: "上海期货交易所",
      url: "https://www.shfe.com.cn",
      description: "国内期货交易所",
      tags: ["期货", "金属", "中国"],
      region: "中国",
      recommended: true
    },
    {
      category: "futures",
      name: "大连商品交易所",
      url: "https://www.dce.com.cn",
      description: "国内农产品期货",
      tags: ["期货", "农产品", "中国"],
      region: "中国",
      recommended: true
    },
    {
      category: "futures",
      name: "郑州商品交易所",
      url: "https://www.czce.com.cn",
      description: "国内农产品期货",
      tags: ["期货", "农产品", "中国"],
      region: "中国",
      recommended: true
    },

    // ==================== 期指 - index-futures ====================
    {
      category: "index-futures",
      name: "中金所",
      url: "https://www.cffex.com.cn",
      description: "中国金融期货交易所，股指期货",
      tags: ["期指", "股指期货", "中国"],
      region: "中国",
      recommended: true
    },
    {
      category: "index-futures",
      name: "CME标普500期货",
      url: "https://www.cmegroup.com",
      description: "芝加哥商品交易所标普500期货",
      tags: ["期指", "美股", "期货"],
      region: "美国",
      recommended: true
    },
    {
      category: "index-futures",
      name: "E-mini Nasdaq期货",
      url: "https://www.cmegroup.com",
      description: "纳斯达克100指数期货",
      tags: ["期指", "纳斯达克", "期货"],
      region: "美国",
      recommended: false
    },

    // ==================== 能源 - energy ====================
    {
      category: "energy",
      name: "OPEC",
      url: "https://www.opec.org",
      description: "石油输出国组织官网",
      tags: ["原油", "能源", "OPEC"],
      region: "全球",
      recommended: true
    },
    {
      category: "energy",
      name: "EIA美国能源信息署",
      url: "https://www.eia.gov",
      description: "美国能源信息官方数据",
      tags: ["原油", "天然气", "能源数据"],
      region: "美国",
      recommended: true
    },
    {
      category: "energy",
      name: "IEA国际能源署",
      url: "https://www.iea.org",
      description: "全球能源数据与政策",
      tags: ["能源", "原油", "全球"],
      region: "全球",
      recommended: true
    },
    {
      category: "energy",
      name: "布伦特原油",
      url: "https://www.ice.com",
      description: "洲际交易所布伦特原油期货",
      tags: ["原油", "期货", "能源"],
      region: "全球",
      recommended: false
    },

    // ==================== 贵金属 - precious-metals ====================
    {
      category: "precious-metals",
      name: "黄金价格",
      url: "https://goldprice.org",
      description: "黄金价格实时行情",
      tags: ["黄金", "贵金属", "价格"],
      region: "全球",
      recommended: true
    },
    {
      category: "precious-metals",
      name: "Kitco贵金属",
      url: "https://www.kitco.com",
      description: "贵金属行情新闻",
      tags: ["贵金属", "黄金", "白银"],
      region: "美国",
      recommended: true
    },
    {
      category: "precious-metals",
      name: "世界黄金协会",
      url: "https://www.gold.org",
      description: "全球黄金市场研究",
      tags: ["黄金", "贵金属", "研究"],
      region: "全球",
      recommended: true
    },
    {
      category: "precious-metals",
      name: "上海黄金交易所",
      url: "https://www.sge.com.cn",
      description: "国内黄金交易平台",
      tags: ["黄金", "中国", "交易所"],
      region: "中国",
      recommended: true
    },
    {
      category: "precious-metals",
      name: "白银协会",
      url: "https://www.silverinstitute.org",
      description: "全球白银协会",
      tags: ["白银", "贵金属"],
      region: "全球",
      recommended: false
    },

    // ==================== 基础金属 - base-metals ====================
    {
      category: "base-metals",
      name: "伦敦金属交易所",
      url: "https://www.lme.com",
      description: "LME全球最大金属交易所",
      tags: ["铜", "铝", "金属", "期货"],
      region: "英国",
      recommended: true
    },
    {
      category: "base-metals",
      name: "上海有色金属网",
      url: "https://www.smm.cn",
      description: "国内金属价格数据",
      tags: ["铜", "铝", "金属", "中国"],
      region: "中国",
      recommended: true
    },
    {
      category: "base-metals",
      name: "卓创资讯",
      url: "https://www.sci99.com",
      description: "大宗商品数据",
      tags: ["大宗商品", "数据", "中国"],
      region: "中国",
      recommended: true
    },

    // ==================== 农产品 - agriculture ====================
    {
      category: "agriculture",
      name: "芝加哥期货交易所",
      url: "https://www.cmegroup.com",
      description: "大豆玉米小麦期货",
      tags: ["农产品", "期货", "大豆", "玉米"],
      region: "美国",
      recommended: true
    },
    {
      category: "agriculture",
      name: "洲际交易所农产品",
      url: "https://www.ice.com",
      description: "咖啡糖棉花期货",
      tags: ["农产品", "咖啡", "糖", "棉花"],
      region: "美国",
      recommended: false
    },
    {
      category: "agriculture",
      name: "大连商品交易所",
      url: "https://www.dce.com.cn",
      description: "国内农产品期货",
      tags: ["农产品", "期货", "中国"],
      region: "中国",
      recommended: true
    },
    {
      category: "agriculture",
      name: "郑州商品交易所",
      url: "https://www.czce.com.cn",
      description: "国内农产品期货",
      tags: ["农产品", "期货", "中国"],
      region: "中国",
      recommended: true
    },

    // ==================== 外汇 - forex ====================
    {
      category: "forex",
      name: "IG",
      url: "https://www.ig.com",
      description: "英国最大外汇经纪商",
      tags: ["外汇经纪商", "英国", "CFD"],
      region: "英国",
      recommended: true
    },
    {
      category: "forex",
      name: "OANDA",
      url: "https://www.oanda.com",
      description: "美国外汇经纪商",
      tags: ["外汇经纪商", "美国"],
      region: "美国",
      recommended: true
    },
    {
      category: "forex",
      name: "Forex.com",
      url: "https://www.forex.com",
      description: "美国外汇经纪商",
      tags: ["外汇经纪商", "美国"],
      region: "美国",
      recommended: true
    },
    {
      category: "forex",
      name: "eToro",
      url: "https://www.etoro.com",
      description: "社交交易平台外汇股票",
      tags: ["外汇经纪商", "社交交易", "股票"],
      region: "全球",
      recommended: true
    },
    {
      category: "forex",
      name: "瑞讯银行",
      url: "https://www.swissquote.com",
      description: "瑞士线上银行外汇",
      tags: ["外汇经纪商", "瑞士", "银行"],
      region: "瑞士",
      recommended: true
    },
    {
      category: "forex",
      name: "美联储",
      url: "https://www.federalreserve.gov",
      description: "美联储官方网站",
      tags: ["央行", "美元"],
      region: "美国",
      recommended: true
    },
    {
      category: "forex",
      name: "欧洲央行",
      url: "https://www.ecb.europa.eu",
      description: "欧洲央行官网",
      tags: ["央行", "欧元"],
      region: "欧洲",
      recommended: true
    },
    {
      category: "forex",
      name: "日本央行",
      url: "https://www.boj.or.jp",
      description: "日本银行官网",
      tags: ["央行", "日元"],
      region: "日本",
      recommended: true
    },
    {
      category: "forex",
      name: "中国央行",
      url: "http://www.pbc.gov.cn",
      description: "中国人民银行",
      tags: ["央行", "人民币"],
      region: "中国",
      recommended: true
    },

    // ==================== 房产 - realestate ====================
    {
      category: "realestate",
      name: "贝壳找房",
      url: "https://www.ke.com",
      description: "国内房产平台",
      tags: ["房产", "中国", "平台"],
      region: "中国",
      recommended: true
    },
    {
      category: "realestate",
      name: "链家",
      url: "https://www.lianjia.com",
      description: "国内房产中介",
      tags: ["房产", "中国", "中介"],
      region: "中国",
      recommended: true
    },
    {
      category: "realestate",
      name: "安居客",
      url: "https://www.anjuke.com",
      description: "房产平台",
      tags: ["房产", "中国"],
      region: "中国",
      recommended: true
    },
    {
      category: "realestate",
      name: "Zillow",
      url: "https://www.zillow.com",
      description: "美国房产平台",
      tags: ["房产", "美国"],
      region: "美国",
      recommended: true
    },
    {
      category: "realestate",
      name: "Realtor.com",
      url: "https://www.realtor.com",
      description: "美国房产MLS平台",
      tags: ["房产", "美国", "MLS"],
      region: "美国",
      recommended: true
    },
    {
      category: "realestate",
      name: "Rightmove",
      url: "https://www.rightmove.co.uk",
      description: "英国房产门户",
      tags: ["房产", "英国", "欧洲"],
      region: "英国",
      recommended: true
    },

    // ==================== 保险 - insurance ====================
    {
      category: "insurance",
      name: "中国平安",
      url: "https://www.pingan.com",
      description: "中国平安保险",
      tags: ["保险公司", "中国"],
      region: "中国",
      recommended: true
    },
    {
      category: "insurance",
      name: "中国人寿",
      url: "https://www.chinalife.com.cn",
      description: "中国人寿保险",
      tags: ["保险公司", "中国"],
      region: "中国",
      recommended: true
    },
    {
      category: "insurance",
      name: "中国太平洋保险",
      url: "https://www.cpic.com.cn",
      description: "太平洋保险",
      tags: ["保险公司", "中国"],
      region: "中国",
      recommended: true
    },
    {
      category: "insurance",
      name: "泰康保险",
      url: "https://www.taikang.com",
      description: "泰康保险集团",
      tags: ["保险公司", "中国"],
      region: "中国",
      recommended: true
    },
    {
      category: "insurance",
      name: "MetLife大都会人寿",
      url: "https://www.metlife.com",
      description: "美国大都会人寿",
      tags: ["保险公司", "美国"],
      region: "美国",
      recommended: true
    },
    {
      category: "insurance",
      name: "AIA友邦保险",
      url: "https://www.aia.com",
      description: "友邦保险",
      tags: ["保险公司", "亚太"],
      region: "全球",
      recommended: true
    },
    {
      category: "insurance",
      name: "Allianz安联保险",
      url: "https://www.allianz.com",
      description: "德国安联保险",
      tags: ["保险公司", "德国", "欧洲"],
      region: "德国",
      recommended: true
    },

    // ==================== 银行 - banking ====================
    {
      category: "banking",
      name: "工商银行",
      url: "https://www.icbc.com.cn",
      description: "中国工商银行",
      tags: ["银行", "中国"],
      region: "中国",
      recommended: true
    },
    {
      category: "banking",
      name: "建设银行",
      url: "https://www.ccb.com",
      description: "中国建设银行",
      tags: ["银行", "中国"],
      region: "中国",
      recommended: true
    },
    {
      category: "banking",
      name: "中国银行",
      url: "https://www.boc.cn",
      description: "中国银行",
      tags: ["银行", "中国"],
      region: "中国",
      recommended: true
    },
    {
      category: "banking",
      name: "农业银行",
      url: "https://www.abchina.com",
      description: "中国农业银行",
      tags: ["银行", "中国"],
      region: "中国",
      recommended: true
    },
    {
      category: "banking",
      name: "招商银行",
      url: "https://www.cmbchina.com",
      description: "招商银行零售之王",
      tags: ["银行", "中国", "零售"],
      region: "中国",
      recommended: true
    },
    {
      category: "banking",
      name: "汇丰银行",
      url: "https://www.hsbc.com",
      description: "汇丰银行",
      tags: ["银行", "香港", "全球"],
      region: "香港",
      recommended: true
    },
    {
      category: "banking",
      name: "花旗银行",
      url: "https://www.citi.com",
      description: "花旗银行",
      tags: ["银行", "美国", "全球"],
      region: "美国",
      recommended: true
    },
    {
      category: "banking",
      name: "摩根大通",
      url: "https://www.jpmorgan.com",
      description: "全球最大银行财富管理",
      tags: ["银行", "美国", "财富管理"],
      region: "美国",
      recommended: true
    },
    {
      category: "banking",
      name: "瑞士银行UBS",
      url: "https://www.ubs.com",
      description: "瑞士银行",
      tags: ["银行", "瑞士", "财富管理"],
      region: "瑞士",
      recommended: true
    },

    // ==================== 加密货币 - crypto ====================
    {
      category: "crypto",
      name: "币安",
      url: "https://www.binance.com",
      description: "全球最大加密货币交易所",
      tags: ["交易所", "合约", "币币交易"],
      region: "全球",
      recommended: true
    },
    {
      category: "crypto",
      name: "Coinbase",
      url: "https://www.coinbase.com",
      description: "美国最大加密货币交易所合规运营",
      tags: ["交易所", "合规", "美国"],
      region: "美国",
      recommended: true
    },
    {
      category: "crypto",
      name: "OKX",
      url: "https://www.okx.com",
      description: "全球头部交易所合约交易",
      tags: ["交易所", "合约", "期权"],
      region: "全球",
      recommended: true
    },
    {
      category: "crypto",
      name: "火币",
      url: "https://www.huobi.com",
      description: "全球知名交易所",
      tags: ["交易所"],
      region: "全球",
      recommended: true
    },
    {
      category: "crypto",
      name: "Gate.io",
      url: "https://www.gate.io",
      description: "全球交易所合约交易",
      tags: ["交易所", "合约"],
      region: "全球",
      recommended: true
    },
    {
      category: "crypto",
      name: "Kraken",
      url: "https://www.kraken.com",
      description: "美国合规交易所",
      tags: ["交易所", "合规", "美国"],
      region: "美国",
      recommended: true
    },
    {
      category: "crypto",
      name: "Bybit",
      url: "https://www.bybit.com",
      description: "合约交易所永久合约",
      tags: ["交易所", "合约"],
      region: "全球",
      recommended: true
    },
    {
      category: "crypto",
      name: "CoinMarketCap",
      url: "https://coinmarketcap.com",
      description: "加密货币行情网站",
      tags: ["行情", "市值", "数据"],
      region: "全球",
      recommended: true
    },
    {
      category: "crypto",
      name: "CoinGecko",
      url: "https://www.coingecko.com",
      description: "加密货币数据平台",
      tags: ["行情", "数据"],
      region: "全球",
      recommended: true
    },

    // ==================== DeFi - defi ====================
    {
      category: "defi",
      name: "Uniswap",
      url: "https://uniswap.org",
      description: "以太坊DEX Swap交易",
      tags: ["DEX", "Swap", "以太坊"],
      region: "全球",
      recommended: true
    },
    {
      category: "defi",
      name: "PancakeSwap",
      url: "https://pancakeswap.finance",
      description: "BSC链DEX流动性挖矿",
      tags: ["DEX", "BSC", "流动性挖矿"],
      region: "全球",
      recommended: true
    },
    {
      category: "defi",
      name: "Curve",
      url: "https://curve.fi",
      description: "稳定币兑换DEX",
      tags: ["DEX", "稳定币"],
      region: "全球",
      recommended: true
    },
    {
      category: "defi",
      name: "Aave",
      url: "https://aave.com",
      description: "去中心化借贷协议",
      tags: ["借贷"],
      region: "全球",
      recommended: true
    },
    {
      category: "defi",
      name: "Compound",
      url: "https://compound.finance",
      description: "去中心化借贷协议",
      tags: ["借贷"],
      region: "全球",
      recommended: true
    },
    {
      category: "defi",
      name: "MakerDAO",
      url: "https://makerdao.com",
      description: "稳定币DAI发行协议",
      tags: ["稳定币"],
      region: "全球",
      recommended: true
    },
    {
      category: "defi",
      name: "Lido",
      url: "https://lido.fi",
      description: "流动性质押协议",
      tags: ["质押", "ETH2.0"],
      region: "全球",
      recommended: true
    },
    {
      category: "defi",
      name: "MetaMask",
      url: "https://metamask.io",
      description: "最流行的加密货币钱包",
      tags: ["钱包", "以太坊"],
      region: "全球",
      recommended: true
    },
    {
      category: "defi",
      name: "Trust Wallet",
      url: "https://trustwallet.com",
      description: "币安官方钱包",
      tags: ["钱包", "移动端"],
      region: "全球",
      recommended: true
    },
    {
      category: "defi",
      name: "Ledger",
      url: "https://www.ledger.com",
      description: "硬件钱包安全存储",
      tags: ["硬件钱包", "安全"],
      region: "全球",
      recommended: true
    },

    // ==================== NFT - nft ====================
    {
      category: "nft",
      name: "OpenSea",
      url: "https://opensea.io",
      description: "最大NFT交易平台",
      tags: ["NFT", "数字藏品"],
      region: "全球",
      recommended: true
    },
    {
      category: "nft",
      name: "Blur",
      url: "https://blur.io",
      description: "NFT交易平台",
      tags: ["NFT", "数字藏品"],
      region: "全球",
      recommended: false
    },
    {
      category: "nft",
      name: "Magic Eden",
      url: "https://magiceden.io",
      description: "Solana NFT平台",
      tags: ["NFT", "Solana"],
      region: "全球",
      recommended: false
    },

    // ==================== 工具 - tools ====================
    {
      category: "tools",
      name: "TradingView",
      url: "https://www.tradingview.com",
      description: "全球图表分析平台",
      tags: ["图表", "分析", "行情"],
      region: "全球",
      recommended: true
    },
    {
      category: "tools",
      name: "MetaTrader 5",
      url: "https://www.metatrader5.com",
      description: "MT5交易平台",
      tags: ["交易平台", "外汇", "MT5"],
      region: "全球",
      recommended: true
    },
    {
      category: "tools",
      name: "通达信",
      url: "https://www.tdx.com.cn",
      description: "国内股票行情软件",
      tags: ["行情软件", "A股"],
      region: "中国",
      recommended: true
    },
    {
      category: "tools",
      name: "Wind资讯",
      url: "https://www.wind.com.cn",
      description: "国内最专业金融终端",
      tags: ["金融终端", "数据", "专业"],
      region: "中国",
      recommended: true
    },
    {
      category: "tools",
      name: "东方财富Choice",
      url: "https://choice.eastmoney.com",
      description: "东方财富数据终端",
      tags: ["金融终端", "数据"],
      region: "中国",
      recommended: true
    },
    {
      category: "tools",
      name: "彭博终端",
      url: "https://www.bloomberg.com",
      description: "Bloomberg专业终端",
      tags: ["金融终端", "专业", "全球"],
      region: "美国",
      recommended: true
    },
    {
      category: "tools",
      name: "Finviz",
      url: "https://www.finviz.com",
      description: "美股筛选工具",
      tags: ["筛选工具", "美股", "选股"],
      region: "美国",
      recommended: true
    },
    {
      category: "tools",
      name: "Yahoo Finance",
      url: "https://finance.yahoo.com",
      description: "雅虎财经行情新闻",
      tags: ["行情", "新闻", "美股"],
      region: "美国",
      recommended: true
    }
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
