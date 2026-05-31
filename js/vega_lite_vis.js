// FIT2179 Data Visualisation 2 — Australia's Tourism Story
// Ishan — Monash University Semester 1 2026

var specAreaChart = "js/area_chart.vg.json";
vegaEmbed("#area_chart", specAreaChart, {actions: false})
    .then(function(result) {}).catch(console.error);

var specHeatmap = "js/heatmap.vg.json";
vegaEmbed("#heatmap", specHeatmap, {actions: false})
    .then(function(result) {}).catch(console.error);

var specChoropleth = "js/choropleth_map.vg.json";
vegaEmbed("#choropleth_map", specChoropleth, {actions: false})
    .then(function(result) {}).catch(console.error);

var specBarStates = "js/bar_states.vg.json";
vegaEmbed("#bar_states", specBarStates, {actions: false})
    .then(function(result) {}).catch(console.error);

var specSymbolMap = "js/symbol_map.vg.json";
vegaEmbed("#symbol_map", specSymbolMap, {actions: false})
    .then(function(result) {}).catch(console.error);

var specBarCountries = "js/bar_countries.vg.json";
vegaEmbed("#bar_countries", specBarCountries, {actions: false})
    .then(function(result) {}).catch(console.error);

var specOverviewDetail = "js/overview_detail.vg.json";
vegaEmbed("#overview_detail", specOverviewDetail, {actions: false})
    .then(function(result) {}).catch(console.error);

var specBubblePlot = "js/bubble_plot.vg.json";
vegaEmbed("#bubble_plot", specBubblePlot, {actions: false})
    .then(function(result) {}).catch(console.error);

var specStackedBar = "js/stacked_bar.vg.json";
vegaEmbed("#stacked_bar", specStackedBar, {actions: false})
    .then(function(result) {}).catch(console.error);

var specDotPlot = "js/dot_plot.vg.json";
vegaEmbed("#dot_plot", specDotPlot, {actions: false})
    .then(function(result) {}).catch(console.error);

var specSmallMultiples = "js/small_multiples.vg.json";
vegaEmbed("#small_multiples", specSmallMultiples, {actions: false})
    .then(function(result) {}).catch(console.error);
