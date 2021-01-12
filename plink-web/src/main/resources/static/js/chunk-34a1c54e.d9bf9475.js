(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34a1c54e","chunk-2d0d7a0b","chunk-2d2093fb"],{"782f":function(t,e,a){"use strict";a.r(e),a.d(e,"getInstStatusList",(function(){return n})),a.d(e,"getJobTypeList",(function(){return s})),a.d(e,"getJobClientVersionList",(function(){return o})),a.d(e,"getDefaultFlinkConfs",(function(){return l}));var i=a("b775");function n(){return Object(i["default"])({url:"/mng/enum/jobInstanceStatus",method:"get"})}function s(){return Object(i["default"])({url:"/mng/enum/jobType",method:"get"})}function o(){return Object(i["default"])({url:"/mng/enum/jobClientVersion",method:"get"})}function l(){return Object(i["default"])({url:"/mng/util/defaultFlinkConfs",method:"get"})}},a7f5:function(t,e,a){"use strict";a.r(e),a.d(e,"getInstPageList",(function(){return n})),a.d(e,"getInstLog",(function(){return s}));var i=a("b775");function n(t){return Object(i["default"])({url:"/mng/jobInstance/queryJobInstances",method:"get",params:t})}function s(t){return Object(i["default"])({url:"/mng/jobInstance/startLog/"+t,method:"get"})}},b355:function(t,e,a){},bf3b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{"margin-bottom":"10px",padding:"5px","background-image":"linear-gradient(100deg, rgba(60, 213, 255, 0.5), rgba(60, 213, 255, 0.3))"}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{staticClass:"gutter-row",staticStyle:{"padding-left":"20px"},attrs:{span:14}},[a("div",{staticClass:"gutter-box"},[a("span",[t._v("ID : "),a("a-input",{staticStyle:{width:"100px"},attrs:{placeholder:"eg. 1001",size:"small",allowClear:""},model:{value:t.dataFilter.id,callback:function(e){t.$set(t.dataFilter,"id",e)},expression:"dataFilter.id"}})],1),a("span",{staticStyle:{"margin-left":"10px"}},[t._v("状态 : "),a("a-select",{staticStyle:{width:"100px"},attrs:{size:"small",allowClear:""},on:{change:t.getDataList},model:{value:t.dataFilter.status,callback:function(e){t.$set(t.dataFilter,"status",e)},expression:"dataFilter.status"}},t._l(t.helper.instStatusList,(function(e,i){return a("a-select-option",{key:i,attrs:{value:e.value}},[t._v(" "+t._s(e.desc)+" ")])})),1)],1)])]),a("a-col",{staticClass:"gutter-row",attrs:{span:10,align:"right"}},[a("div",{staticClass:"gutter-box"},[a("a-tooltip",{attrs:{title:"周期刷新"}},[a("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关"},on:{change:t.handleDataListFlush},model:{value:t.helper.isAutoFlush,callback:function(e){t.$set(t.helper,"isAutoFlush",e)},expression:"helper.isAutoFlush"}})],1),a("a-button",{staticClass:"filter-tool",attrs:{type:"primary",size:"small"},on:{click:t.onQuery}},[t._v("查询")]),a("a-button",{staticClass:"filter-tool",attrs:{type:"primary",size:"small"},on:{click:t.onGoBack}},[t._v("返回")])],1)])],1)],1),a("div",[a("a-table",{attrs:{columns:t.dataColumnList,"data-source":t.dataList,rowKey:function(t){return t.id},loading:t.isLoading,pagination:!1,scroll:{x:1920}},scopedSlots:t._u([{key:"jobName",fn:function(e,i){return a("span",{},[t._v(" "+t._s(i.job.name)+" ")])}},{key:"jobType",fn:function(e,i){return a("span",{},[t._v(" "+t._s(i.job.typeDesc)+" ")])}},{key:"appId",fn:function(e,i){return a("span",{},[a("a",{attrs:{href:i.uiAddress,target:"_blank"}},[t._v(t._s(e))])])}},{key:"statusDesc",fn:function(e,i){return a("span",{},[a("span",{style:{color:[3,4,-1].includes(i.status)?"red":"green"}},[t._v(t._s(e))])])}},{key:"action",fn:function(e){return a("span",{},[a("a",{on:{click:function(a){return t.onLog(e)}}},[t._v("日志")]),a("a-divider",{attrs:{type:"vertical"}}),a("router-link",{attrs:{to:{path:"inst/instDetail",query:{instId:e.id}},disabled:""}},[t._v("详情")])],1)}}])})],1),a("div",{staticStyle:{"margin-top":"10px",padding:"5px","background-image":"linear-gradient(100deg, rgba(60,213,255,0.30), rgba(60,213,255,0.20))"}},[a("row",[a("a-row",{attrs:{gutter:16}},[a("a-col",{staticClass:"gutter-row",attrs:{span:12}},[a("div",{staticClass:"gutter-box"},[a("span",{staticStyle:{"font-size":"16px"}},[t._v("周期刷新 : ")]),a("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关"},on:{change:t.handleDataListFlush},model:{value:t.helper.isAutoFlush,callback:function(e){t.$set(t.helper,"isAutoFlush",e)},expression:"helper.isAutoFlush"}})],1)]),a("a-col",{staticClass:"gutter-row",attrs:{span:12,align:"right"}},[a("div",{staticClass:"gutter-box"},[a("a-pagination",{attrs:{size:"small",pageSizeOptions:["1","2","10","20","30","40","50","100","500","1000"],total:t.page.total,"show-total":function(e,a){return"第 "+a[0]+" ~ "+a[1]+" 项，共 "+t.page.total+" 项"},"show-size-changer":"","show-quick-jumper":""},on:{change:t.onPageNumChange,showSizeChange:t.onPageSizeChange}})],1)])],1)],1)],1),a("a-modal",{attrs:{title:"实例日志",width:.8*t.helper.clientWidth},on:{ok:t.handleInstLogModalOk,cancel:t.handleInstLogModalCancel},model:{value:t.instLog.isVisible,callback:function(e){t.$set(t.instLog,"isVisible",e)},expression:"instLog.isVisible"}},[a("SqlCMEditor",{attrs:{"read-only":!0,"auto-scroll-to-bottom-on-changes":!0},model:{value:t.instLog.data,callback:function(e){t.$set(t.instLog,"data",e)},expression:"instLog.data"}})],1)],1)},n=[],s=(a("caad"),a("a7f5")),o=a("782f"),l=a("fa7d"),r=a("1a8a"),u={components:{SqlCMEditor:r["default"]},name:"InstList",props:{jobId:{default:null},isAutoFlush:{default:!1}},data:function(){return{dataFilter:{id:null,jobId:this.jobId,status:"",pageNum:1,pageSize:10},dataColumnList:[{title:"ID",dataIndex:"id",width:80},{title:"名称",width:200,scopedSlots:{customRender:"jobName"}},{title:"类型",width:100,scopedSlots:{customRender:"jobType"}},{title:"创建时间",dataIndex:"createTime",width:170},{title:"开始时间",dataIndex:"startTime",width:170},{title:"结束时间",dataIndex:"stopTime",width:170},{title:"Flink UI",dataIndex:"appId",width:280,scopedSlots:{customRender:"appId"}},{title:"状态",dataIndex:"statusDesc",width:100,align:"center",fixed:"right",scopedSlots:{customRender:"statusDesc"}},{title:"操作",width:130,align:"center",fixed:"right",scopedSlots:{customRender:"action"}}],dataList:[],dataTableSelectedRowKeys:[],isLoading:!1,instLog:{isVisible:!1,data:"",timer:null},page:{total:0},dataListTimer:null,helper:{jobTypeList:[],instStatusList:[],isAutoFlush:this.isAutoFlush,clientWidth:document.documentElement.clientWidth}}},methods:{onQuery:function(){this.getDataList()},onEdit:function(){},onGoBack:function(){this.$router.go(-1)},onDataTableSelectedChange:function(t){this.dataTableSelectedRowKeys=t},onPageNumChange:function(t,e){this.dataFilter.pageNum=t,this.getDataList()},onPageSizeChange:function(t,e){this.dataFilter.pageNum=t,this.dataFilter.pageSize=e,this.getDataList()},getDataList:function(){var t=this;this.isLoading=!0,s["getInstPageList"](l["objectDeleteBlankVK"](this.dataFilter)).then((function(e){t.isLoading=!1,t.dataList=e.data.list,t.page.total=e.data.total;var a=t.dataList[0];a&&([3,4,5,6].includes(a.status)?t.handleDataListFlush(!1):(t.helper.isAutoFlush=!0,t.handleDataListFlush(!0)))}))},handleInstLogModalOk:function(){this.instLog.isVisible=!1,this.clearInstLogTimer()},handleInstLogModalCancel:function(){this.clearInstLogTimer()},handleDataListFlush:function(t){t?this.dataListTimer||(this.dataListTimer=this.getDataListTimer()):this.clearDataListTimer()},getDataListTimer:function(){var t=this;return setInterval((function(){t.getDataList()}),1e3)},clearDataListTimer:function(){clearInterval(this.dataListTimer),this.dataListTimer=null,this.helper.isAutoFlush=!1},handleInstLogFlush:function(t,e){t?this.instLog.timer||(this.instLog.timer=this.getInstLogTimer(e)):this.clearInstLogTimer()},getInstLogTimer:function(t){var e=this;return setInterval((function(){e.getInstLog(t)}),1e3)},clearInstLogTimer:function(){clearInterval(this.instLog.timer),this.instLog.timer=null},getInstLog:function(t){var e=this;s["getInstLog"](t.id).then((function(t){e.instLog.data=t.data}))},initHelper:function(){var t=this;o["getJobTypeList"]().then((function(e){t.helper.jobTypeList=e.data})),o["getInstStatusList"]().then((function(e){t.helper.instStatusList=e.data}))},onLog:function(t){this.instLog.data="",this.instLog.isVisible=!0,this.handleInstLogFlush(!0,t)}},beforeDestroy:function(){this.clearDataListTimer(),this.clearInstLogTimer()},created:function(){this.initHelper(),this.getDataList()}},c=u,d=(a("c0f7"),a("2877")),h=Object(d["a"])(c,i,n,!1,null,"b1d374c4",null);e["default"]=h.exports},c0f7:function(t,e,a){"use strict";var i=a("b355"),n=a.n(i);n.a}}]);
//# sourceMappingURL=chunk-34a1c54e.d9bf9475.js.map