"use strict";(self["webpackChunkrouter"]=self["webpackChunkrouter"]||[]).push([[919],{1919:function(t,s,r){r.r(s),r.d(s,{default:function(){return k}});var c=r(6252),o=r(3577);const i={class:"container mb-5"},e=(0,c._)("h2",{class:"my-4"},[(0,c.Uk)("產品列表"),(0,c._)("i",{class:"bi bi-bag-heart ms-2"})],-1),a={class:"row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4"},d={class:"card h-100"},l={style:{height:"10rem",overflow:"hidden"}},n=["src","alt"],u={class:"card-body"},h={class:"card-title"},g={class:"card-text"},p={class:"card-footer border-top-0"},v=(0,c.Uk)("了解更多");function w(t,s,r,w,b,m){const _=(0,c.up)("loading"),k=(0,c.up)("router-link");return(0,c.wg)(),(0,c.iD)("div",i,[(0,c.Wm)(_,{active:b.isLoading},null,8,["active"]),e,(0,c._)("div",a,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(b.products,(s=>((0,c.wg)(),(0,c.iD)("div",{class:"col",key:s.id},[(0,c._)("div",d,[(0,c._)("div",l,[(0,c._)("img",{src:s.imageUrl,class:"card-img-top",alt:s.title,style:(0,o.j5)({backgroundSize:t.cover,backgroundPosition:t.center,center:t.center})},null,12,n)]),(0,c._)("div",u,[(0,c._)("h5",h,(0,o.zw)(s.title),1),(0,c._)("p",g,(0,o.zw)(s.description),1)]),(0,c._)("div",p,[(0,c.Wm)(k,{to:`/product/${s.id}`,class:"btn btn-primary w-100"},{default:(0,c.w5)((()=>[v])),_:2},1032,["to"])])])])))),128))])])}var b={data(){return{products:[],isLoading:!1}},methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/v2/api/erinhuang-lab/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{this.isLoading=!1,this.products=t.data.products})).catch((t=>{console.dir(t)}))}},mounted(){this.getProducts()}},m=r(3744);const _=(0,m.Z)(b,[["render",w]]);var k=_}}]);
//# sourceMappingURL=919.5e20e90f.js.map