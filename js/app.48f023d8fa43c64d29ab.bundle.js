(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const s=a(89),{lightningChart:o,AxisTickStrategies:r,emptyLine:d,LegendBoxBuilders:i,Themes:n}=s,m=o({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).Dashboard({numberOfColumns:1,numberOfRows:2,theme:n[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setRowHeight(0,1).setRowHeight(1,.2),l=m.createChartXY({columnIndex:0,rowIndex:0}).setTitle("Chart with data gaps"),u=(l.getDefaultAxisY().setTitle("Stock price (€)"),l.addLineSeries({dataPattern:{pattern:"ProgressiveX"}}).setName("Stock price (€)").setCursorInterpolationEnabled(!1).setCursorResultTableFormatter(((e,t,a,s,o)=>e.addRow(t.getName()).addRow(t.axisX.formatValue(o.x)).addRow(`${t.axisY.formatValue(o.y)} €`)))),h=l.addAxisY({opposite:!0}).setTitle("Volume (€)").setTickStrategy(r.Numeric,(e=>e.setMajorTickStyle((e=>e.setGridStrokeStyle(d))).setMinorTickStyle((e=>e.setGridStrokeStyle(d))))),c=l.addAreaSeries({yAxis:h}).setName("Volume (€)").setCursorInterpolationEnabled(!1).setCursorResultTableFormatter(((e,t,a,s,o)=>e.addRow(t.getName()).addRow(t.axisX.formatValue(a)).addRow(`${t.axisY.formatValue(s)} €`))),g=new Date("2021-01-01"),w=g.getTime(),x=(l.getDefaultAxisX().setTickStrategy(r.DateTime,(e=>e.setDateOrigin(g))).setInterval({start:new Date("2021-12-07 20:00:00").getTime()-w,end:new Date("2021-12-11 06:00:00").getTime()-w}),l.addLegendBox(i.HorizontalLegendBox).add(l),m.createZoomBandChart({columnIndex:0,rowIndex:1}).setTitle(""));x.add(u),x.add(c),fetch(new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"examples/assets/0053/data.json").then((e=>e.json())).then((e=>{const t=[],a=[];let s;for(let o=0;o<e.length;o+=1){const r=e[o];void 0!==s&&r.time-s>36e5&&(t.push({x:r.time-w,y:Number.NaN}),a.push({x:r.time-w,y:Number.NaN}),o+=1),t.push({x:r.time-w,y:r.close}),a.push({x:r.time-w,y:r.volume}),s=r.time}u.add(t),c.add(a)}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);