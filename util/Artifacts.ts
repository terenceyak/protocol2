
export class Artifacts {
  public RingSubmitter: any;
  public OrderCanceller: any;
  public TradeDelegate: any;
  public TradeHistory: any;
  public BrokerRegistry: any;
  public OrderRegistry: any;
  public DummyBrokerInterceptor: any;
  public DummyExchange: any;
  public DummyBurnManager: any;
  public FeeHolder: any;
  public OrderBook: any;
  public BurnRateTable: any;
  public BurnManager: any;
  public DummyToken: any;
  public LRCToken: any;
  public GTOToken: any;
  public RDNToken: any;
  public REPToken: any;
  public WETHToken: any;
  public TESTToken: any;
  public DummyERC1400Token: any;
  public STAToken: any;
  public STBToken: any;
  public SECTESTToken: any;
  public DeserializerTest: any;
  constructor(artifacts: any) {
    this.RingSubmitter = artifacts.require("impl/RingSubmitter");
    this.OrderCanceller = artifacts.require("impl/OrderCanceller");
    this.TradeDelegate = artifacts.require("impl/TradeDelegate");
    this.TradeHistory = artifacts.require("impl/TradeHistory");
    this.BrokerRegistry = artifacts.require("impl/BrokerRegistry");
    this.OrderRegistry = artifacts.require("impl/OrderRegistry");
    this.DummyBrokerInterceptor = artifacts.require("test/DummyBrokerInterceptor");
    this.DummyExchange = artifacts.require("test/DummyExchange");
    this.DummyBurnManager = artifacts.require("test/DummyBurnManager");
    this.FeeHolder = artifacts.require("impl/FeeHolder");
    this.OrderBook = artifacts.require("impl/OrderBook");
    this.BurnRateTable = artifacts.require("impl/BurnRateTable");
    this.BurnManager = artifacts.require("impl/BurnManager");
    this.DummyToken = artifacts.require("test/DummyToken");
    this.LRCToken = artifacts.require("test/tokens/ERC20/LRC");
    this.GTOToken = artifacts.require("test/tokens/ERC20/GTO");
    this.RDNToken = artifacts.require("test/tokens/ERC20/RDN");
    this.REPToken = artifacts.require("test/tokens/ERC20/REP");
    this.WETHToken = artifacts.require("test/tokens/ERC20/WETH");
    this.TESTToken = artifacts.require("test/tokens/ERC20/TEST");
    this.DummyERC1400Token = artifacts.require("test/DummyERC1400Token");
    this.STAToken = artifacts.require("test/tokens/ERC1400/STA");
    this.STBToken = artifacts.require("test/tokens/ERC1400/STB");
    this.SECTESTToken = artifacts.require("test/tokens/ERC1400/SECTEST");
    this.DeserializerTest = artifacts.require("test/DeserializerTest");
  }
}
