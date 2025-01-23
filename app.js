const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();
const port = 8000;
const upload = multer();

let chartLayouts = [
  {
    id: 760480,
    name: "test",
    timestamp: 1737602528,
    content:
      '{"resolution":"60","symbol_type":"forex","exchange":"Test Exchange","listed_exchange":"USD_CHF Exchange","symbol":"USD_CHF","short_name":"USD_CHF","legs":"[{\\"symbol\\":\\"USD_CHF\\",\\"pro_symbol\\":\\"USD_CHF\\"}]","id":760480,"name":"test","description":"","charts_symbols":"{\\"1\\":{\\"symbol\\":\\"USD_CHF\\"}}","is_realtime":"1","content":"{\\"name\\":\\"test\\",\\"layout\\":\\"s\\",\\"charts\\":[{\\"panes\\":[{\\"sources\\":[{\\"type\\":\\"MainSeries\\",\\"id\\":\\"_seriesId\\",\\"zorder\\":0,\\"haStyle\\":{\\"studyId\\":\\"BarSetHeikenAshi@tv-basicstudies-60\\"},\\"renkoStyle\\":{\\"studyId\\":\\"BarSetRenko@tv-prostudies-73\\"},\\"pbStyle\\":{\\"studyId\\":\\"BarSetPriceBreak@tv-prostudies-34\\"},\\"kagiStyle\\":{\\"studyId\\":\\"BarSetKagi@tv-prostudies-73\\"},\\"pnfStyle\\":{\\"studyId\\":\\"BarSetPnF@tv-prostudies-73\\"},\\"rangeStyle\\":{\\"studyId\\":\\"BarSetRange@tv-basicstudies-72\\"},\\"volFootprintStyle\\":{\\"studyId\\":\\"Footprint@tv-volumebyprice-104\\"},\\"tpoStyle\\":{\\"studyId\\":\\"TPOPeriodic@tv-volumebyprice-104\\"},\\"svpStyle\\":{\\"studyId\\":\\"VbPSessions@tv-volumebyprice-126\\"},\\"formattingDeps\\":{\\"format\\":\\"price\\",\\"pricescale\\":100000,\\"minmov\\":1},\\"state\\":{\\"style\\":1,\\"esdShowDividends\\":true,\\"esdShowSplits\\":true,\\"esdShowEarnings\\":true,\\"esdShowBreaks\\":false,\\"esdFlagSize\\":2,\\"showContinuousContractSwitches\\":true,\\"showContinuousContractSwitchesBreaks\\":false,\\"showFuturesContractExpiration\\":true,\\"showLastNews\\":true,\\"showCountdown\\":false,\\"bidAsk\\":{\\"visible\\":false,\\"lineStyle\\":1,\\"lineWidth\\":1,\\"bidLineColor\\":\\"#2962FF\\",\\"askLineColor\\":\\"#F7525F\\"},\\"prePostMarket\\":{\\"visible\\":true,\\"lineStyle\\":1,\\"lineWidth\\":1,\\"preMarketColor\\":\\"#FB8C00\\",\\"postMarketColor\\":\\"#2962FF\\"},\\"highLowAvgPrice\\":{\\"highLowPriceLinesVisible\\":false,\\"highLowPriceLabelsVisible\\":false,\\"averageClosePriceLineVisible\\":false,\\"averageClosePriceLabelVisible\\":false,\\"highLowPriceLinesColor\\":\\"\\",\\"highLowPriceLinesWidth\\":1,\\"averagePriceLineColor\\":\\"\\",\\"averagePriceLineWidth\\":1},\\"visible\\":true,\\"showPriceLine\\":true,\\"priceLineWidth\\":1,\\"priceLineColor\\":\\"\\",\\"baseLineColor\\":\\"#B2B5BE\\",\\"showPrevClosePriceLine\\":false,\\"prevClosePriceLineWidth\\":1,\\"prevClosePriceLineColor\\":\\"#555555\\",\\"minTick\\":\\"default\\",\\"dividendsAdjustment\\":{},\\"backAdjustment\\":false,\\"settlementAsClose\\":true,\\"sessionId\\":\\"regular\\",\\"sessVis\\":false,\\"statusViewStyle\\":{\\"fontSize\\":16,\\"showExchange\\":true,\\"showInterval\\":true,\\"symbolTextSource\\":\\"description\\"},\\"candleStyle\\":{\\"upColor\\":\\"#089981\\",\\"downColor\\":\\"#F23645\\",\\"drawWick\\":true,\\"drawBorder\\":true,\\"borderColor\\":\\"#378658\\",\\"borderUpColor\\":\\"#089981\\",\\"borderDownColor\\":\\"#F23645\\",\\"wickColor\\":\\"#737375\\",\\"wickUpColor\\":\\"#089981\\",\\"wickDownColor\\":\\"#F23645\\",\\"barColorsOnPrevClose\\":false,\\"drawBody\\":true},\\"volCandlesStyle\\":{\\"upColor\\":\\"#089981\\",\\"downColor\\":\\"#F23645\\",\\"drawWick\\":true,\\"drawBorder\\":true,\\"borderColor\\":\\"#378658\\",\\"borderUpColor\\":\\"#089981\\",\\"borderDownColor\\":\\"#F23645\\",\\"wickColor\\":\\"#737375\\",\\"wickUpColor\\":\\"#089981\\",\\"wickDownColor\\":\\"#F23645\\",\\"barColorsOnPrevClose\\":false,\\"drawBody\\":true},\\"hollowCandleStyle\\":{\\"upColor\\":\\"#089981\\",\\"downColor\\":\\"#F23645\\",\\"drawWick\\":true,\\"drawBorder\\":true,\\"borderColor\\":\\"#378658\\",\\"borderUpColor\\":\\"#089981\\",\\"borderDownColor\\":\\"#F23645\\",\\"wickColor\\":\\"#737375\\",\\"wickUpColor\\":\\"#089981\\",\\"wickDownColor\\":\\"#F23645\\",\\"drawBody\\":true},\\"haStyle\\":{\\"upColor\\":\\"#089981\\",\\"downColor\\":\\"#F23645\\",\\"drawWick\\":true,\\"drawBorder\\":true,\\"borderColor\\":\\"#378658\\",\\"borderUpColor\\":\\"#089981\\",\\"borderDownColor\\":\\"#F23645\\",\\"wickColor\\":\\"#737375\\",\\"wickUpColor\\":\\"#089981\\",\\"wickDownColor\\":\\"#F23645\\",\\"showRealLastPrice\\":false,\\"barColorsOnPrevClose\\":false,\\"inputs\\":{},\\"inputInfo\\":{},\\"drawBody\\":true},\\"barStyle\\":{\\"upColor\\":\\"#089981\\",\\"downColor\\":\\"#F23645\\",\\"barColorsOnPrevClose\\":false,\\"dontDrawOpen\\":false,\\"thinBars\\":true},\\"hiloStyle\\":{\\"color\\":\\"#2962FF\\",\\"showBorders\\":true,\\"borderColor\\":\\"#2962FF\\",\\"showLabels\\":true,\\"labelColor\\":\\"#2962FF\\",\\"drawBody\\":true},\\"columnStyle\\":{\\"upColor\\":\\"rgba(8, 153, 129, 0.5)\\",\\"downColor\\":\\"rgba(242, 54, 69, 0.5)\\",\\"barColorsOnPrevClose\\":true,\\"priceSource\\":\\"close\\",\\"baselinePosition\\":\\"bottom\\"},\\"lineStyle\\":{\\"color\\":\\"#2962FF\\",\\"linestyle\\":0,\\"linewidth\\":2,\\"priceSource\\":\\"close\\"},\\"tpoStyle\\":{\\"inputs\\":{}},\\"svpStyle\\":{\\"inputs\\":{}},\\"lineWithMarkersStyle\\":{\\"color\\":\\"#2962FF\\",\\"linestyle\\":0,\\"linewidth\\":2,\\"priceSource\\":\\"close\\"},\\"steplineStyle\\":{\\"color\\":\\"#2962FF\\",\\"linestyle\\":0,\\"linewidth\\":2,\\"priceSource\\":\\"close\\"},\\"areaStyle\\":{\\"color1\\":\\"rgba(41, 98, 255, 0.28)\\",\\"color2\\":\\"#2962FF\\",\\"linecolor\\":\\"#2962FF\\",\\"linestyle\\":0,\\"linewidth\\":2,\\"priceSource\\":\\"close\\",\\"transparency\\":100},\\"hlcAreaStyle\\":{\\"highLineColor\\":\\"#089981\\",\\"highLineStyle\\":0,\\"highLineWidth\\":2,\\"lowLineColor\\":\\"#F23645\\",\\"lowLineStyle\\":0,\\"lowLineWidth\\":2,\\"closeLineColor\\":\\"#868993\\",\\"closeLineStyle\\":0,\\"closeLineWidth\\":2,\\"highCloseFillColor\\":\\"rgba(8, 153, 129, 0.2)\\",\\"closeLowFillColor\\":\\"rgba(242, 54, 69, 0.2)\\"},\\"renkoStyle\\":{\\"upColor\\":\\"#089981\\",\\"downColor\\":\\"#F23645\\",\\"borderUpColor\\":\\"#089981\\",\\"borderDownColor\\":\\"#F23645\\",\\"upColorProjection\\":\\"#a9dcc3\\",\\"downColorProjection\\":\\"#f5a6ae\\",\\"borderUpColorProjection\\":\\"#a9dcc3\\",\\"borderDownColorProjection\\":\\"#f5a6ae\\",\\"wickUpColor\\":\\"#089981\\",\\"wickDownColor\\":\\"#F23645\\",\\"inputs\\":{\\"source\\":\\"close\\",\\"sources\\":\\"Close\\",\\"boxSize\\":3,\\"style\\":\\"ATR\\",\\"atrLength\\":14,\\"percentageLTP\\":1,\\"wicks\\":true},\\"inputInfo\\":{\\"source\\":{\\"name\\":\\"Source\\"},\\"sources\\":{\\"name\\":\\"Source\\"},\\"boxSize\\":{\\"name\\":\\"Box size\\"},\\"style\\":{\\"name\\":\\"Style\\"},\\"atrLength\\":{\\"name\\":\\"ATR length\\"},\\"percentageLTP\\":{\\"name\\":\\"Percentage\\"},\\"wicks\\":{\\"name\\":\\"Wicks\\"}}},\\"pbStyle\\":{\\"upColor\\":\\"#089981\\",\\"downColor\\":\\"#F23645\\",\\"borderUpColor\\":\\"#089981\\",\\"borderDownColor\\":\\"#F23645\\",\\"upColorProjection\\":\\"#a9dcc3\\",\\"downColorProjection\\":\\"#f5a6ae\\",\\"borderUpColorProjection\\":\\"#a9dcc3\\",\\"borderDownColorProjection\\":\\"#f5a6ae\\",\\"inputs\\":{\\"source\\":\\"close\\",\\"lb\\":3},\\"inputInfo\\":{\\"source\\":{\\"name\\":\\"Source\\"},\\"lb\\":{\\"name\\":\\"Number of line\\"}}},\\"kagiStyle\\":{\\"upColor\\":\\"#089981\\",\\"downColor\\":\\"#F23645\\",\\"upColorProjection\\":\\"#a9dcc3\\",\\"downColorProjection\\":\\"#f5a6ae\\",\\"inputs\\":{\\"source\\":\\"close\\",\\"style\\":\\"ATR\\",\\"atrLength\\":14,\\"percentageLTP\\":1,\\"reversalAmount\\":1},\\"inputInfo\\":{\\"source\\":{\\"name\\":\\"Source\\"},\\"style\\":{\\"name\\":\\"Style\\"},\\"atrLength\\":{\\"name\\":\\"ATR length\\"},\\"percentageLTP\\":{\\"name\\":\\"Percentage\\"},\\"reversalAmount\\":{\\"name\\":\\"Reversal amount\\"}}},\\"pnfStyle\\":{\\"upColor\\":\\"#089981\\",\\"downColor\\":\\"#F23645\\",\\"upColorProjection\\":\\"#a9dcc3\\",\\"downColorProjection\\":\\"#f5a6ae\\",\\"inputs\\":{\\"sources\\":\\"Close\\",\\"reversalAmount\\":3,\\"boxSize\\":1,\\"style\\":\\"ATR\\",\\"atrLength\\":14,\\"percentageLTP\\":1,\\"oneStepBackBuilding\\":false},\\"inputInfo\\":{\\"sources\\":{\\"name\\":\\"Source\\"},\\"boxSize\\":{\\"name\\":\\"Box size\\"},\\"reversalAmount\\":{\\"name\\":\\"Reversal amount\\"},\\"style\\":{\\"name\\":\\"Style\\"},\\"atrLength\\":{\\"name\\":\\"ATR length\\"},\\"percentageLTP\\":{\\"name\\":\\"Percentage\\"},\\"oneStepBackBuilding\\":{\\"name\\":\\"One step back building\\"}}},\\"baselineStyle\\":{\\"baselineColor\\":\\"#758696\\",\\"topFillColor1\\":\\"rgba(8, 153, 129, 0.28)\\",\\"topFillColor2\\":\\"rgba(8, 153, 129, 0.05)\\",\\"bottomFillColor1\\":\\"rgba(242, 54, 69, 0.05)\\",\\"bottomFillColor2\\":\\"rgba(242, 54, 69, 0.28)\\",\\"topLineColor\\":\\"#089981\\",\\"bottomLineColor\\":\\"#F23645\\",\\"topLineWidth\\":2,\\"bottomLineWidth\\":2,\\"priceSource\\":\\"close\\",\\"transparency\\":50,\\"baseLevelPercentage\\":50},\\"rangeStyle\\":{\\"barStyle\\":0,\\"upColor\\":\\"#089981\\",\\"downColor\\":\\"#F23645\\",\\"upColorProjection\\":\\"#a9dcc3\\",\\"downColorProjection\\":\\"#f5a6ae\\",\\"thinBars\\":true,\\"candlesUpColor\\":\\"#089981\\",\\"candlesDownColor\\":\\"#F23645\\",\\"candlesBorderUpColor\\":\\"#089981\\",\\"candlesBorderDownColor\\":\\"#F23645\\",\\"candlesWickUpColor\\":\\"#089981\\",\\"candlesWickDownColor\\":\\"#F23645\\",\\"inputs\\":{\\"range\\":10,\\"phantomBars\\":false},\\"inputInfo\\":{\\"range\\":{\\"name\\":\\"Range\\"},\\"phantomBars\\":{\\"name\\":\\"Phantom bars\\"}}},\\"volFootprintStyle\\":{\\"inputs\\":{}},\\"symbol\\":\\"USD_CHF\\",\\"shortName\\":\\"USD_CHF\\",\\"timeframe\\":\\"\\",\\"onWidget\\":false,\\"interval\\":\\"60\\",\\"unitId\\":null,\\"currencyId\\":null,\\"showSessions\\":false,\\"priceAxisProperties\\":{\\"autoScale\\":true,\\"autoScaleDisabled\\":false,\\"lockScale\\":false,\\"percentage\\":false,\\"percentageDisabled\\":false,\\"log\\":false,\\"logDisabled\\":false,\\"alignLabels\\":true,\\"isInverted\\":false,\\"indexedTo100\\":false}}},{\\"type\\":\\"LineToolDateRange\\",\\"id\\":\\"pO8iuQ\\",\\"state\\":{\\"textcolor\\":\\"#000000\\",\\"labelBackgroundColor\\":\\"#ffffff\\",\\"linecolor\\":\\"#2962FF\\",\\"backgroundColor\\":\\"rgba(41, 98, 255, 0.15)\\",\\"shadow\\":\\"rgba(0, 0, 0, 0.2)\\",\\"customText\\":{\\"color\\":\\"#2962FF\\",\\"visible\\":false,\\"fontsize\\":12,\\"bold\\":false,\\"italic\\":false,\\"text\\":\\"\\"},\\"linewidth\\":2,\\"fontsize\\":12,\\"fillLabelBackground\\":true,\\"fillBackground\\":true,\\"backgroundTransparency\\":60,\\"intervalsVisibilities\\":{\\"ticks\\":true,\\"seconds\\":true,\\"secondsFrom\\":1,\\"secondsTo\\":59,\\"minutes\\":true,\\"minutesFrom\\":1,\\"minutesTo\\":59,\\"hours\\":true,\\"hoursFrom\\":1,\\"hoursTo\\":24,\\"days\\":true,\\"daysFrom\\":1,\\"daysTo\\":366,\\"weeks\\":true,\\"weeksFrom\\":1,\\"weeksTo\\":52,\\"months\\":true,\\"monthsFrom\\":1,\\"monthsTo\\":12,\\"ranges\\":true},\\"extendTop\\":true,\\"extendBottom\\":true,\\"symbolStateVersion\\":2,\\"zOrderVersion\\":2,\\"frozen\\":false,\\"title\\":\\"\\",\\"interval\\":\\"60\\",\\"symbol\\":\\"USD_CHF\\",\\"currencyId\\":null,\\"unitId\\":null,\\"visible\\":true},\\"points\\":[{\\"time_t\\":1734512400,\\"offset\\":0,\\"price\\":0.89354},{\\"time_t\\":1734548400,\\"offset\\":0,\\"price\\":0.89213}],\\"zorder\\":-5000,\\"ownerSource\\":\\"_seriesId\\",\\"isSelectionEnabled\\":true,\\"userEditEnabled\\":true,\\"linkKey\\":\\"ekUEO5JVD3gX\\"}],\\"mainSourceId\\":\\"_seriesId\\",\\"stretchFactor\\":2000,\\"leftAxisesState\\":[],\\"rightAxisesState\\":[{\\"state\\":{\\"id\\":\\"Dn9Q1oYNMhWD\\",\\"m_priceRange\\":null,\\"m_isAutoScale\\":true,\\"m_isPercentage\\":false,\\"m_isIndexedTo100\\":false,\\"m_isLog\\":false,\\"m_isLockScale\\":false,\\"m_isInverted\\":false,\\"m_topMargin\\":0.1,\\"m_bottomMargin\\":0.08,\\"alignLabels\\":true,\\"logFormula\\":{\\"logicalOffset\\":9,\\"coordOffset\\":1e-9},\\"hasCalculatedPriceRange\\":true},\\"sources\\":[\\"_seriesId\\",\\"pO8iuQ\\"]}],\\"overlayPriceScales\\":{},\\"priceScaleRatio\\":null,\\"isCollapsed\\":false}],\\"timeScale\\":{\\"m_barSpacing\\":6,\\"m_rightOffset\\":10,\\"rightOffsetPercentage\\":5,\\"usePercentageRightOffset\\":false},\\"chartProperties\\":{\\"paneProperties\\":{\\"backgroundType\\":\\"solid\\",\\"background\\":\\"#ffffff\\",\\"backgroundGradientStartColor\\":\\"#ffffff\\",\\"backgroundGradientEndColor\\":\\"#ffffff\\",\\"gridLinesMode\\":\\"both\\",\\"vertGridProperties\\":{\\"color\\":\\"rgba(42, 46, 57, 0.06)\\"},\\"horzGridProperties\\":{\\"color\\":\\"rgba(42, 46, 57, 0.06)\\"},\\"crossHairProperties\\":{\\"color\\":\\"#9598A1\\",\\"style\\":2,\\"transparency\\":0,\\"width\\":1},\\"topMargin\\":10,\\"bottomMargin\\":8,\\"axisProperties\\":{\\"autoScale\\":true,\\"autoScaleDisabled\\":false,\\"lockScale\\":false,\\"percentage\\":false,\\"percentageDisabled\\":false,\\"indexedTo100\\":false,\\"log\\":false,\\"logDisabled\\":false,\\"alignLabels\\":true,\\"isInverted\\":false},\\"legendProperties\\":{\\"showStudyArguments\\":true,\\"showStudyTitles\\":true,\\"showStudyValues\\":true,\\"showSeriesTitle\\":true,\\"showSeriesOHLC\\":true,\\"showLegend\\":true,\\"showLastDayChange\\":false,\\"showBarChange\\":true,\\"showVolume\\":false,\\"showBackground\\":true,\\"showPriceSource\\":true,\\"backgroundTransparency\\":50,\\"showLogo\\":true},\\"separatorColor\\":\\"#E0E3EB\\"},\\"scalesProperties\\":{\\"backgroundColor\\":\\"#ffffff\\",\\"lineColor\\":\\"rgba(42, 46, 57, 0)\\",\\"textColor\\":\\"#131722\\",\\"fontSize\\":12,\\"scaleSeriesOnly\\":false,\\"showSeriesLastValue\\":true,\\"seriesLastValueMode\\":1,\\"showSeriesPrevCloseValue\\":false,\\"showStudyLastValue\\":true,\\"showSymbolLabels\\":false,\\"showStudyPlotLabels\\":false,\\"showBidAskLabels\\":false,\\"showPrePostMarketPriceLabel\\":true,\\"showFundamentalNameLabel\\":false,\\"showFundamentalLastValue\\":true,\\"barSpacing\\":6,\\"axisHighlightColor\\":\\"rgba(41, 98, 255, 0.25)\\",\\"axisLineToolLabelBackgroundColorCommon\\":\\"#2962FF\\",\\"axisLineToolLabelBackgroundColorActive\\":\\"#143EB3\\",\\"showPriceScaleCrosshairLabel\\":true,\\"showTimeScaleCrosshairLabel\\":true,\\"crosshairLabelBgColorLight\\":\\"#131722\\",\\"crosshairLabelBgColorDark\\":\\"#363A45\\"},\\"chartEventsSourceProperties\\":{\\"visible\\":true,\\"futureOnly\\":true,\\"breaks\\":{\\"color\\":\\"#555555\\",\\"visible\\":false,\\"style\\":2,\\"width\\":1}},\\"tradingProperties\\":{\\"showPositions\\":true,\\"positionPL\\":{\\"visibility\\":true,\\"display\\":0},\\"bracketsPL\\":{\\"visibility\\":true,\\"display\\":0},\\"showOrders\\":true,\\"showExecutions\\":true,\\"showExecutionsLabels\\":false,\\"showReverse\\":true,\\"horizontalAlignment\\":2,\\"extendLeft\\":true,\\"lineLength\\":5,\\"lineWidth\\":1,\\"lineStyle\\":0},\\"priceScaleSelectionStrategyName\\":\\"auto\\"},\\"sessions\\":{\\"properties\\":{\\"graphics\\":{\\"backgrounds\\":{\\"outOfSession\\":{\\"color\\":\\"#2962FF\\",\\"transparency\\":92,\\"visible\\":false},\\"preMarket\\":{\\"color\\":\\"#FF9800\\",\\"transparency\\":92,\\"visible\\":false},\\"postMarket\\":{\\"color\\":\\"#2962FF\\",\\"transparency\\":92,\\"visible\\":false}},\\"vertlines\\":{\\"sessBreaks\\":{\\"color\\":\\"#4985e7\\",\\"style\\":2,\\"visible\\":false,\\"width\\":1}}}}},\\"version\\":3,\\"timezone\\":\\"Etc/UTC\\",\\"shouldBeSavedEvenIfHidden\\":true,\\"linkingGroup\\":null,\\"lineToolsGroups\\":{\\"groups\\":[]},\\"chartId\\":\\"1\\"}],\\"symbolLock\\":0,\\"intervalLock\\":0,\\"trackTimeLock\\":0,\\"dateRangeLock\\":0,\\"crosshairLock\\":1,\\"layoutsSizes\\":{\\"s\\":[{\\"percent\\":1}]}}"}',
  },
];

const list = [
  {
    id: 760480,
    name: "test",
    resolution: "60",
    symbol: "USD_CHF",
    timestamp: 1632380382,
  },
];

app.use(cors());
app.use(express.json());

app.post("/1.1/charts", upload.none(), (req, res) => {
  console.log(req.query);
  console.log(req.body);

  res.json({ status: "ok", data: req.body });
});

app.get("/1.1/charts", (req, res) => {
  console.log(req.query);
  const { chart, client, user } = req.query;
  if (chart) {
    res.json({
      status: "ok",
      data: chartLayouts.find((el) => el.id === Number(chart)),
    });
  } else if (client && user) {
    res.json({ status: "ok", data: list });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
