"use strict";(self.webpackChunkdoc_server=self.webpackChunkdoc_server||[]).push([[867],{4003:(e,t,s)=>{s.r(t),s.d(t,{default:()=>b});s(6540);var a=s(4164),r=s(1082),n=s(204),o=s(1926),l=s(6289),i=s(3750),c=s(569),d=s(7448),u=s(7220),h=s(4005),m=s(5921),g=s(4848);function p(e){let{author:t}=e;const s=(0,o.wI)(t);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.be,{title:s}),(0,g.jsx)(u.A,{tag:"blog_authors_posts"})]})}function x(){const{authorsListPath:e}=(0,i.x)();return(0,g.jsx)(l.A,{href:e,children:(0,g.jsx)(o.np,{})})}function j(e){let{author:t,items:s,sidebar:a,listMetadata:r}=e;return(0,g.jsxs)(c.A,{sidebar:a,children:[(0,g.jsxs)("header",{className:"margin-bottom--xl",children:[(0,g.jsx)(m.A,{as:"h1",author:t}),t.description&&(0,g.jsx)("p",{children:t.description}),(0,g.jsx)(x,{})]}),0===s.length?(0,g.jsx)("p",{children:(0,g.jsx)(o.Y4,{})}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("hr",{}),(0,g.jsx)(h.A,{items:s}),(0,g.jsx)(d.A,{metadata:r})]})]})}function b(e){return(0,g.jsxs)(r.e3,{className:(0,a.A)(n.G.wrapper.blogPages,n.G.page.blogAuthorsPostsPage),children:[(0,g.jsx)(p,{...e}),(0,g.jsx)(j,{...e})]})}},7448:(e,t,s)=>{s.d(t,{A:()=>o});s(6540);var a=s(539),r=s(1865),n=s(4848);function o(e){const{metadata:t}=e,{previousPage:s,nextPage:o}=t;return(0,n.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[s&&(0,n.jsx)(r.A,{permalink:s,title:(0,n.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),o&&(0,n.jsx)(r.A,{permalink:o,title:(0,n.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},8189:(e,t,s)=>{s.d(t,{A:()=>O});s(6540);var a=s(4164),r=s(3750),n=s(4848);function o(e){let{children:t,className:s}=e;return(0,n.jsx)("article",{className:s,children:t})}var l=s(6289);const i={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:s,isBlogPostPage:o}=(0,r.e7)(),{permalink:c,title:d}=s,u=o?"h1":"h2";return(0,n.jsx)(u,{className:(0,a.A)(i.title,t),children:o?d:(0,n.jsx)(l.A,{to:c,children:d})})}var d=s(539),u=s(1430),h=s(8569);const m={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=(0,u.W)();return t=>{const s=Math.ceil(t);return e(s,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,n.jsx)(n.Fragment,{children:s(t)})}function p(e){let{date:t,formattedDate:s}=e;return(0,n.jsx)("time",{dateTime:t,children:s})}function x(){return(0,n.jsx)(n.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:s}=(0,r.e7)(),{date:o,readingTime:l}=s,i=(0,h.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,n.jsxs)("div",{className:(0,a.A)(m.container,"margin-vert--md",t),children:[(0,n.jsx)(p,{date:o,formattedDate:(c=o,i.format(new Date(c)))}),void 0!==l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{}),(0,n.jsx)(g,{readingTime:l})]})]});var c}var b=s(5921);const f={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:s},assets:o}=(0,r.e7)();if(0===s.length)return null;const l=s.every((e=>{let{name:t}=e;return!t})),i=1===s.length;return(0,n.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",l?f.imageOnlyAuthorRow:"row",t),children:s.map(((e,t)=>(0,n.jsx)("div",{className:(0,a.A)(!l&&(i?"col col--12":"col col--6"),l?f.imageOnlyAuthorCol:f.authorCol),children:(0,n.jsx)(b.A,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(c,{}),(0,n.jsx)(j,{}),(0,n.jsx)(A,{})]})}var T=s(99),w=s(4522);function N(e){let{children:t,className:s}=e;const{isBlogPostPage:o}=(0,r.e7)();return(0,n.jsx)("div",{id:o?T.LU:void 0,className:(0,a.A)("markdown",s),children:(0,n.jsx)(w.A,{children:t})})}var P=s(204),y=s(5783),k=s(6547);function _(){return(0,n.jsx)("b",{children:(0,n.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function U(e){const{blogPostTitle:t,...s}=e;return(0,n.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...s,children:(0,n.jsx)(_,{})})}function R(){const{metadata:e,isBlogPostPage:t}=(0,r.e7)(),{tags:s,title:o,editUrl:l,hasTruncateMarker:i,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&i,h=s.length>0;if(!(h||u||l))return null;if(t){const e=!!(l||d||c);return(0,n.jsxs)("footer",{className:"docusaurus-mt-lg",children:[h&&(0,n.jsx)("div",{className:(0,a.A)("row","margin-top--sm",P.G.blog.blogFooterEditMetaRow),children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(k.A,{tags:s})})}),e&&(0,n.jsx)(y.A,{className:(0,a.A)("margin-top--sm",P.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,n.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[h&&(0,n.jsx)("div",{className:(0,a.A)("col",{"col--9":u}),children:(0,n.jsx)(k.A,{tags:s})}),u&&(0,n.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":h}),children:(0,n.jsx)(U,{blogPostTitle:o,to:e.permalink})})]})}function O(e){let{children:t,className:s}=e;const l=function(){const{isBlogPostPage:e}=(0,r.e7)();return e?void 0:"margin-bottom--xl"}();return(0,n.jsxs)(o,{className:(0,a.A)(l,s),children:[(0,n.jsx)(v,{}),(0,n.jsx)(N,{children:t}),(0,n.jsx)(R,{})]})}},4005:(e,t,s)=>{s.d(t,{A:()=>o});s(6540);var a=s(3750),r=s(8189),n=s(4848);function o(e){let{items:t,component:s=r.A}=e;return(0,n.jsx)(n.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,n.jsx)(a.in,{content:t,children:(0,n.jsx)(s,{children:(0,n.jsx)(t,{})})},t.metadata.permalink)}))})}},1926:(e,t,s)=>{s.d(t,{Y4:()=>d,np:()=>c,uz:()=>i,wI:()=>l});s(6540);var a=s(539),r=s(1430),n=s(4848);function o(){const{selectMessage:e}=(0,r.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function l(e){const t=o();return(0,a.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const i=()=>(0,a.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function c(){return(0,n.jsx)(a.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function d(){return(0,n.jsx)(a.A,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}}}]);