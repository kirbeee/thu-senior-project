"use strict";(self.webpackChunkdoc_server=self.webpackChunkdoc_server||[]).push([[6307],{4578:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"develop-guied/TODO/local-storage-security","title":"local-storage-security","description":"\u5c07\u654f\u611f\u4fe1\u606f\uff08\u5982\u8eab\u4efd\u9a57\u8b49 Token\uff09\u5b58\u5132\u5728 Local Storage \u4e2d\u6642\uff0c\u5fc5\u9808\u63a1\u53d6\u4e00\u4e9b\u63aa\u65bd\u4f86\u78ba\u4fdd\u5b89\u5168\u6027\u3002\u96d6\u7136 Local Storage \u672c\u8eab\u4e0d\u6703\u81ea\u52d5\u52a0\u5bc6\u6578\u64da\uff0c\u4f46\u4ee5\u4e0b\u662f\u4e00\u4e9b\u53ef\u4ee5\u63d0\u9ad8\u5b89\u5168\u6027\u7684\u65b9\u6cd5\uff1a","source":"@site/docs/develop-guied/TODO/local-storage-security.md","sourceDirName":"develop-guied/TODO","slug":"/develop-guied/TODO/local-storage-security","permalink":"/thu-senior-project/docs/develop-guied/TODO/local-storage-security","draft":false,"unlisted":false,"editUrl":"https://github.com/kirbeee/thu-senior-project/docs/develop-guied/TODO/local-storage-security.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Database Design","permalink":"/thu-senior-project/docs/database/table"},"next":{"title":"module","permalink":"/thu-senior-project/docs/develop-guied/UI/module"}}');var l=s(4848),r=s(8453);const t={},i=void 0,c={},d=[{value:"1. <strong>\u4f7f\u7528 HTTPS</strong>",id:"1-\u4f7f\u7528-https",level:3},{value:"2. <strong>Token \u77ed\u671f\u6709\u6548\u6027</strong>",id:"2-token-\u77ed\u671f\u6709\u6548\u6027",level:3},{value:"3. <strong>\u907f\u514d\u654f\u611f\u6578\u64da</strong>",id:"3-\u907f\u514d\u654f\u611f\u6578\u64da",level:3},{value:"4. <strong>XSS \u9632\u8b77</strong>",id:"4-xss-\u9632\u8b77",level:3},{value:"5. <strong>\u5b89\u5168\u5730\u8655\u7406 Token</strong>",id:"5-\u5b89\u5168\u5730\u8655\u7406-token",level:3},{value:"6. <strong>\u9000\u51fa\u767b\u9304\u6642\u6e05\u9664 Token</strong>",id:"6-\u9000\u51fa\u767b\u9304\u6642\u6e05\u9664-token",level:3},{value:"7. <strong>\u4f7f\u7528 HttpOnly Cookies</strong>",id:"7-\u4f7f\u7528-httponly-cookies",level:3},{value:"8. <strong>\u9632\u6b62 CSRF \u653b\u64ca</strong>",id:"8-\u9632\u6b62-csrf-\u653b\u64ca",level:3},{value:"9. <strong>\u5b9a\u671f\u6aa2\u67e5\u548c\u8a55\u4f30\u5b89\u5168\u6027</strong>",id:"9-\u5b9a\u671f\u6aa2\u67e5\u548c\u8a55\u4f30\u5b89\u5168\u6027",level:3},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:3}];function a(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u5c07\u654f\u611f\u4fe1\u606f\uff08\u5982\u8eab\u4efd\u9a57\u8b49 Token\uff09\u5b58\u5132\u5728 Local Storage \u4e2d\u6642\uff0c\u5fc5\u9808\u63a1\u53d6\u4e00\u4e9b\u63aa\u65bd\u4f86\u78ba\u4fdd\u5b89\u5168\u6027\u3002\u96d6\u7136 Local Storage \u672c\u8eab\u4e0d\u6703\u81ea\u52d5\u52a0\u5bc6\u6578\u64da\uff0c\u4f46\u4ee5\u4e0b\u662f\u4e00\u4e9b\u53ef\u4ee5\u63d0\u9ad8\u5b89\u5168\u6027\u7684\u65b9\u6cd5\uff1a"}),"\n",(0,l.jsxs)(n.h3,{id:"1-\u4f7f\u7528-https",children:["1. ",(0,l.jsx)(n.strong,{children:"\u4f7f\u7528 HTTPS"})]}),"\n",(0,l.jsx)(n.p,{children:"\u78ba\u4fdd\u4f60\u7684\u61c9\u7528\u7a0b\u5e8f\u901a\u904e HTTPS \u63d0\u4f9b\uff0c\u9019\u6a23\u5728\u50b3\u8f38\u904e\u7a0b\u4e2d\u53ef\u4ee5\u52a0\u5bc6\u6578\u64da\uff0c\u9632\u6b62\u4e2d\u9593\u4eba\u653b\u64ca\uff08MITM\uff09\u3002"}),"\n",(0,l.jsxs)(n.h3,{id:"2-token-\u77ed\u671f\u6709\u6548\u6027",children:["2. ",(0,l.jsx)(n.strong,{children:"Token \u77ed\u671f\u6709\u6548\u6027"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8a2d\u7f6e Token \u7684\u6709\u6548\u671f\uff0c\u4f8b\u5982\u4f7f\u7528\u77ed\u6548\u7684 JWT\uff08JSON Web Token\uff09\u3002\u9019\u6a23\u5373\u4f7f Token \u88ab\u76dc\u53d6\uff0c\u4e5f\u53ea\u80fd\u5728\u77ed\u6642\u9593\u5167\u88ab\u6feb\u7528\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5728 Token \u5feb\u904e\u671f\u6642\u63d0\u4f9b\u5237\u65b0 Token \u7684\u6a5f\u5236\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"3-\u907f\u514d\u654f\u611f\u6578\u64da",children:["3. ",(0,l.jsx)(n.strong,{children:"\u907f\u514d\u654f\u611f\u6578\u64da"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u9664\u975e\u5fc5\u8981\uff0c\u5426\u5247\u907f\u514d\u5728 Local Storage \u4e2d\u5b58\u5132\u654f\u611f\u4fe1\u606f\uff0c\u5982\u5bc6\u78bc\u6216\u5176\u4ed6\u500b\u4eba\u8b58\u5225\u4fe1\u606f\uff08PII\uff09\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5118\u91cf\u50c5\u5b58\u5132\u5fc5\u8981\u7684 Token \u6216\u8b58\u5225\u7b26\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"4-xss-\u9632\u8b77",children:["4. ",(0,l.jsx)(n.strong,{children:"XSS \u9632\u8b77"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u907f\u514d\u8de8\u7ad9\u8173\u672c\uff08XSS\uff09\u653b\u64ca\uff0c\u56e0\u70ba XSS \u653b\u64ca\u8005\u53ef\u4ee5\u8a2a\u554f Local Storage \u4e2d\u7684\u6578\u64da\u3002\u63a1\u53d6\u4ee5\u4e0b\u63aa\u65bd\u4f86\u9632\u8b77 XSS\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6aa2\u67e5\u4e26\u6e05\u7406\u7528\u6236\u8f38\u5165\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u4f7f\u7528\u5167\u5bb9\u5b89\u5168\u7b56\u7565\uff08CSP\uff09\u4f86\u9650\u5236\u54ea\u4e9b\u8cc7\u6e90\u53ef\u4ee5\u52a0\u8f09\u548c\u57f7\u884c\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u4f7f Web \u61c9\u7528\u7a0b\u5e8f\u7684\u6846\u67b6\u548c\u5eab\u4fdd\u6301\u66f4\u65b0\uff0c\u4ee5\u907f\u514d\u5df2\u77e5\u7684\u5b89\u5168\u6f0f\u6d1e\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"5-\u5b89\u5168\u5730\u8655\u7406-token",children:["5. ",(0,l.jsx)(n.strong,{children:"\u5b89\u5168\u5730\u8655\u7406 Token"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5728\u5b58\u5132 Token \u524d\uff0c\u8003\u616e\u5c0d\u5176\u9032\u884c\u7c21\u55ae\u7684\u52a0\u5bc6\uff0c\u5118\u7ba1\u9019\u9700\u8981\u4f60\u5728\u61c9\u7528\u7a0b\u5e8f\u4e2d\u8655\u7406\u52a0\u5bc6\u548c\u89e3\u5bc6\u908f\u8f2f\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u4f8b\u5982\uff0c\u53ef\u4ee5\u4f7f\u7528\u700f\u89bd\u5668\u7684 Web Crypto API \u9032\u884c\u52a0\u5bc6\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"6-\u9000\u51fa\u767b\u9304\u6642\u6e05\u9664-token",children:["6. ",(0,l.jsx)(n.strong,{children:"\u9000\u51fa\u767b\u9304\u6642\u6e05\u9664 Token"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u78ba\u4fdd\u5728\u7528\u6236\u767b\u51fa\u6642\u6e05\u9664 Local Storage \u4e2d\u7684 Token\uff0c\u9019\u6a23\u53ef\u4ee5\u9632\u6b62\u672a\u7d93\u6388\u6b0a\u7684\u8a2a\u554f\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"// \u767b\u51fa\u6642\u6e05\u9664 Token\nlocalStorage.removeItem('authToken');\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"7-\u4f7f\u7528-httponly-cookies",children:["7. ",(0,l.jsx)(n.strong,{children:"\u4f7f\u7528 HttpOnly Cookies"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5982\u679c\u4f60\u64d4\u5fc3 JavaScript \u7684 XSS \u653b\u64ca\uff0c\u8003\u616e\u4f7f\u7528 HttpOnly Cookies \u5132\u5b58 Token\u3002\u9019\u6a23\uff0cToken \u5c07\u7121\u6cd5\u901a\u904e JavaScript \u8a2a\u554f\uff0c\u50c5\u80fd\u901a\u904e\u700f\u89bd\u5668\u81ea\u52d5\u9644\u52a0\u5230\u8acb\u6c42\u4e2d\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"8-\u9632\u6b62-csrf-\u653b\u64ca",children:["8. ",(0,l.jsx)(n.strong,{children:"\u9632\u6b62 CSRF \u653b\u64ca"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5982\u679c\u4f7f\u7528 Cookies \u5b58\u5132 Token\uff0c\u78ba\u4fdd\u9632\u7bc4\u8de8\u7ad9\u8acb\u6c42\u507d\u9020\uff08CSRF\uff09\u653b\u64ca\u3002\u53ef\u4ee5\u4f7f\u7528 CSRF Token \u6a5f\u5236\u4f86\u4fdd\u8b77\u61c9\u7528\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"9-\u5b9a\u671f\u6aa2\u67e5\u548c\u8a55\u4f30\u5b89\u5168\u6027",children:["9. ",(0,l.jsx)(n.strong,{children:"\u5b9a\u671f\u6aa2\u67e5\u548c\u8a55\u4f30\u5b89\u5168\u6027"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5b9a\u671f\u9032\u884c\u5b89\u5168\u6027\u8a55\u4f30\u548c\u4ee3\u78bc\u5be9\u67e5\uff0c\u4ee5\u8b58\u5225\u548c\u4fee\u5fa9\u6f5b\u5728\u7684\u5b89\u5168\u6f0f\u6d1e\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u7e3d\u7d50",children:"\u7e3d\u7d50"}),"\n",(0,l.jsx)(n.p,{children:"\u96d6\u7136 Local Storage \u65b9\u4fbf\uff0c\u4f46\u4ecd\u7136\u8981\u8b39\u614e\u4f7f\u7528\uff0c\u7279\u5225\u662f\u5728\u6d89\u53ca\u8eab\u4efd\u9a57\u8b49\u548c\u654f\u611f\u6578\u64da\u7684\u60c5\u6cc1\u4e0b\u3002\u901a\u904e\u7d9c\u5408\u4f7f\u7528\u4e0a\u8ff0\u65b9\u6cd5\uff0c\u53ef\u4ee5\u63d0\u9ad8\u5b58\u5132\u5728 Local Storage \u4e2d Token \u7684\u5b89\u5168\u6027\u3002\u5982\u679c\u4f60\u6709\u5176\u4ed6\u554f\u984c\u6216\u9700\u8981\u9032\u4e00\u6b65\u7684\u5e6b\u52a9\uff0c\u96a8\u6642\u544a\u8a34\u6211\uff01"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>i});var o=s(6540);const l={},r=o.createContext(l);function t(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);