"use strict";(self.webpackChunkdoc_server=self.webpackChunkdoc_server||[]).push([[1274],{9754:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"develop-guied/system-design/flowchart","title":"flowchart","description":"","source":"@site/docs/develop-guied/system-design/flowchart.md","sourceDirName":"develop-guied/system-design","slug":"/develop-guied/system-design/flowchart","permalink":"/thu-senior-project/zh-TW/docs/develop-guied/system-design/flowchart","draft":false,"unlisted":false,"editUrl":"https://github.com/kirbeee/thu-senior-project/docs/develop-guied/system-design/flowchart.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u5728 Django \u4e2d\u4f7f\u7528 HTTPS","permalink":"/thu-senior-project/zh-TW/docs/develop-guied/system-design/HTTPS"},"next":{"title":"functional-analysis","permalink":"/thu-senior-project/zh-TW/docs/develop-guied/system-design/functional-analysis"}}');var t=o(4848),r=o(8453);const l={},c=void 0,d={},i=[];function f(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mermaid",children:'    flowchart TD\n    A["\u958b\u59cb"] --\x3e B["\u767b\u5165\u7cfb\u7d71"]\n    B -- \u6210\u529f --\x3e C["\u8ab2\u7a0b\u67e5\u8a62"]\n    B -- \u5931\u6557 --\x3e D["\u63d0\u793a\u932f\u8aa4"]\n    D --\x3e B\n    C --\x3e n3["\u7cfb\u7d1a\u67e5\u8a62"]\n    E["\u9078\u64c7\u9078\u8ab2\u5206\u985e"] --\x3e F["\u4e3b\u4fee\u8ab2\u7a0b\u7be9\u9078"] & G["\u5fc5\u4fee\u8ab2\u7a0b\u7be9\u9078"] & H["\u901a\u8b58\u8ab2\u7a0b\u7be9\u9078"]\n    F --\x3e I["\u67e5\u770b\u8ab2\u7a0b\u6e05\u55ae"]\n    G --\x3e I\n    H --\x3e I\n    I <--\x3e K["\u8a0e\u8ad6\u5340\u8ad6\u58c7"]\n    K <--\x3e L["\u700f\u89bd\u8cbc\u6587"] & M["\u767c\u8868\u65b0\u5e16"]\n    L --\x3e n1["\u8cbc\u6587"]\n    M --\x3e n1\n    O["\u6642\u9593\u885d\u7a81\u6aa2\u67e5"] -- \u6709\u885d\u7a81 --\x3e Q["\u63d0\u793a\u932f\u8aa4"]\n    T["\u78ba\u8a8d\u9078\u8ab2"] --\x3e V["\u63d0\u4ea4\u9078\u8ab2"]\n    AA["\u986f\u793a\u9810\u9078\u8ab2\u8868"] --\x3e AB["\u7d50\u675f"]\n    n3 --\x3e E\n    O --\x3e U["\u52a0\u5165\u66ab\u5b58\u6e05\u55ae"]\n    U --\x3e T & n5["\u7e7c\u7e8c\u9078\u8ab2"]\n    V --\x3e AA\n    n4{"\u9001\u51fa\u8981\u6c42\u63d0\u4ea4\u5230\u66ab\u5b58\u6e05\u55ae"} --\x3e O\n    Q --\x3e I\n    I --\x3e n4\n    n5 --\x3e I\n\n    %% \u5b9a\u4e49\u989c\u8272\u6837\u5f0f\n    classDef blueNode fill:#2962FF,stroke:#2962FF,color:#ffffff;\n    classDef redNode fill:#D50000,stroke:#D50000,color:#ffffff;\n    classDef greenNode fill:#00C853,stroke:#00C853,color:#ffffff;\n    classDef purpleNode fill:#AA00FF,stroke:#AA00FF,color:#ffffff;\n    classDef yellowNode fill:#FFD600,stroke:#FFD600,color:#000000;\n    classDef orangeNode fill:#FF6D00,stroke:#FF6D00,color:#ffffff;\n    classDef pinkNode fill:#E1BEE7,stroke:#E1BEE7,color:#000000;\n\n    %% \u5e94\u7528\u989c\u8272\u6837\u5f0f\n    class B,C,D blueNode;\n    class n3,E,F,G,H redNode;\n    class I,O,n4 greenNode;\n    class K,L,M,n1 purpleNode;\n    class T,V,U,n5 yellowNode;\n    class Q pinkNode;\n    class AA orangeNode;\n\n    %% \u4e09\u89d2\u5f62\u5f62\u72b6\u7528\u83f1\u5f62\u4ee3\u66ff\n    classDef decisionNode fill:#FFD600,stroke:#FFD600,color:#000000,shape:diamond;\n\n    %% \u5c06\u83f1\u5f62\u5f62\u72b6\u5e94\u7528\u5230\u76f8\u5173\u8282\u70b9\n    class L,M,Q,V decisionNode;\n'})})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>c});var s=o(6540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);