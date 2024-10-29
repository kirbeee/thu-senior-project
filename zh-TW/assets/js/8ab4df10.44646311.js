"use strict";(self.webpackChunkdoc_server=self.webpackChunkdoc_server||[]).push([[969],{3911:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var r=s(4848),l=s(8453);const c={},t=void 0,i={id:"develop-guied/system/IAM/plugin",title:"plugin",description:"\u5728\u4f7f\u7528 Express \u4f5c\u70ba\u5f8c\u7aef\u6846\u67b6\u6642\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u73fe\u6709\u7684\u63d2\u4ef6\u548c\u5de5\u5177\u4f86\u5be6\u73fe IAM\uff08Identity and Access Management\uff09\u3002\u9019\u4e9b\u5de5\u5177\u6703\u5e6b\u52a9\u4f60\u7ba1\u7406\u8eab\u4efd\u9a57\u8b49\u3001\u6388\u6b0a\uff0c\u4ee5\u53ca\u7528\u6236\u7684\u8a2a\u554f\u63a7\u5236\u6b0a\u9650\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u7528\u7684\u63d2\u4ef6\u548c\u65b9\u6cd5\u4f86\u5be6\u73fe IAM\uff1a",source:"@site/docs/develop-guied/system/IAM/plugin.md",sourceDirName:"develop-guied/system/IAM",slug:"/develop-guied/system/IAM/plugin",permalink:"/thu-senior-project/zh-TW/docs/develop-guied/system/IAM/plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/kirbeee/thu-senior-project/docs/develop-guied/system/IAM/plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ACL",permalink:"/thu-senior-project/zh-TW/docs/develop-guied/system/IAM/ACL"},next:{title:"\u7cfb\u7d71\u67b6\u69cb\u8a2d\u8a08",permalink:"/thu-senior-project/zh-TW/docs/develop-guied/system-design/"}},o={},a=[{value:"1. <strong>\u8eab\u4efd\u9a57\u8b49\uff08Authentication\uff09\u63d2\u4ef6</strong>",id:"1-\u8eab\u4efd\u9a57\u8b49authentication\u63d2\u4ef6",level:3},{value:"2. <strong>\u6388\u6b0a\uff08Authorization\uff09\u63d2\u4ef6</strong>",id:"2-\u6388\u6b0aauthorization\u63d2\u4ef6",level:3},{value:"3. <strong>\u81ea\u52d5\u5316\u7528\u6236\u7ba1\u7406\uff08User Management\uff09</strong>",id:"3-\u81ea\u52d5\u5316\u7528\u6236\u7ba1\u7406user-management",level:3},{value:"4. <strong>\u5be9\u8a08\u8207\u65e5\u8a8c\u7ba1\u7406</strong>",id:"4-\u5be9\u8a08\u8207\u65e5\u8a8c\u7ba1\u7406",level:3},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u5728\u4f7f\u7528 ",(0,r.jsx)(n.strong,{children:"Express"})," \u4f5c\u70ba\u5f8c\u7aef\u6846\u67b6\u6642\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u73fe\u6709\u7684\u63d2\u4ef6\u548c\u5de5\u5177\u4f86\u5be6\u73fe ",(0,r.jsx)(n.strong,{children:"IAM\uff08Identity and Access Management\uff09"}),"\u3002\u9019\u4e9b\u5de5\u5177\u6703\u5e6b\u52a9\u4f60\u7ba1\u7406\u8eab\u4efd\u9a57\u8b49\u3001\u6388\u6b0a\uff0c\u4ee5\u53ca\u7528\u6236\u7684\u8a2a\u554f\u63a7\u5236\u6b0a\u9650\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u7528\u7684\u63d2\u4ef6\u548c\u65b9\u6cd5\u4f86\u5be6\u73fe IAM\uff1a"]}),"\n",(0,r.jsxs)(n.h3,{id:"1-\u8eab\u4efd\u9a57\u8b49authentication\u63d2\u4ef6",children:["1. ",(0,r.jsx)(n.strong,{children:"\u8eab\u4efd\u9a57\u8b49\uff08Authentication\uff09\u63d2\u4ef6"})]}),"\n",(0,r.jsx)(n.p,{children:"\u9019\u90e8\u5206\u5c08\u6ce8\u65bc\u78ba\u8a8d\u4f7f\u7528\u8005\u8eab\u4efd\u7684\u771f\u5be6\u6027\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Passport.js"}),"\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6700\u5e38\u7528\u7684 Node.js \u8eab\u4efd\u9a57\u8b49\u4e2d\u4ecb\u8edf\u4ef6\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u591a\u7a2e\u8eab\u4efd\u9a57\u8b49\u7b56\u7565\uff0c\u5305\u62ec\u672c\u5730\u7b56\u7565\uff08Local\uff09\u3001OAuth\u3001JWT\u3001Google\u3001Facebook \u7b49\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u53ef\u4ee5\u4f7f\u7528\u591a\u7a2e\u7b56\u7565\u4f86\u8655\u7406\u4e0d\u540c\u7684\u767b\u9304\u65b9\u5f0f\uff0c\u4e26\u4e14\u6613\u65bc\u96c6\u6210\u5230 Express \u61c9\u7528\u7a0b\u5e8f\u4e2d\u3002"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"http://www.passportjs.org/",children:"\u5b98\u65b9\u6587\u6a94"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5b89\u88dd\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install passport passport-local\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u7bc4\u4f8b\u4ee3\u78bc"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const passport = require('passport');\nconst LocalStrategy = require('passport-local').Strategy;\n\npassport.use(new LocalStrategy((username, password, done) => {\n  // \u5728\u6b64\u9a57\u8b49\u7528\u6236\u540d\u8207\u5bc6\u78bc\n  User.findOne({ username: username }, (err, user) => {\n    if (err) return done(err);\n    if (!user) return done(null, false, { message: 'Incorrect username.' });\n    if (!user.verifyPassword(password)) return done(null, false, { message: 'Incorrect password.' });\n    return done(null, user);\n  });\n}));\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"JSON Web Token (JWT)"}),"\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528 JSON Web Tokens \u4f86\u5be6\u73fe\u7121\u72c0\u614b\u7684\u8eab\u4efd\u9a57\u8b49\uff08Stateless Authentication\uff09\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u53ef\u4ee5\u5728\u5ba2\u6236\u7aef\u5b58\u5132 token\uff0c\u4e26\u5728\u6bcf\u6b21\u8acb\u6c42\u6642\u901a\u904e Authorization \u6a19\u982d\u50b3\u905e token\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u5e38\u7528\u7684\u63d2\u4ef6\u662f ",(0,r.jsx)(n.strong,{children:"jsonwebtoken"})," \u548c ",(0,r.jsx)(n.strong,{children:"express-jwt"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5b89\u88dd\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install jsonwebtoken express-jwt\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u7bc4\u4f8b\u4ee3\u78bc"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const jwt = require('jsonwebtoken');\nconst secretKey = 'your-secret-key';\n\n// \u767b\u9304\u5f8c\u7c3d\u767c token\napp.post('/login', (req, res) => {\n  const token = jwt.sign({ userId: req.user.id }, secretKey, { expiresIn: '1h' });\n  res.json({ token });\n});\n\n// \u9a57\u8b49 token\nconst { expressjwt: jwtMiddleware } = require('express-jwt');\napp.use(jwtMiddleware({ secret: secretKey, algorithms: ['HS256'] }));\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"2-\u6388\u6b0aauthorization\u63d2\u4ef6",children:["2. ",(0,r.jsx)(n.strong,{children:"\u6388\u6b0a\uff08Authorization\uff09\u63d2\u4ef6"})]}),"\n",(0,r.jsx)(n.p,{children:"\u6388\u6b0a\u6d89\u53ca\u4f7f\u7528\u8005\u8a2a\u554f\u7cfb\u7d71\u8cc7\u6e90\u7684\u6b0a\u9650\u63a7\u5236\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RBAC (Role-Based Access Control)"}),"\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"express-rbac"}),"\uff1a\u4e00\u500b\u7c21\u55ae\u7684\u57fa\u65bc\u89d2\u8272\u7684\u8a2a\u554f\u63a7\u5236\u4e2d\u4ecb\u8edf\u4ef6\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u4f60\u53ef\u4ee5\u70ba\u4f7f\u7528\u8005\u5b9a\u7fa9\u4e0d\u540c\u7684\u89d2\u8272\uff08\u5982 admin, user, guest\uff09\uff0c\u4e26\u57fa\u65bc\u9019\u4e9b\u89d2\u8272\u5206\u914d\u4e0d\u540c\u7684\u6b0a\u9650\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5b89\u88dd\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install express-rbac\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u7bc4\u4f8b\u4ee3\u78bc"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const rbac = require('express-rbac');\n\nconst rules = {\n  admin: { can: ['create', 'update', 'delete', 'read'] },\n  user: { can: ['read'] },\n};\n\napp.use(rbac.init(rules));\n\n// \u4f7f\u7528\u89d2\u8272\u4f86\u63a7\u5236\u8def\u7531\u8a2a\u554f\napp.post('/resource', rbac.can('create'), (req, res) => {\n  res.send('Resource created');\n});\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ACL (Access Control List)"}),"\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"acl"}),"\uff1a\u4e00\u500b\u652f\u6301 ACL \u7684\u4e2d\u4ecb\u8edf\u4ef6\uff0c\u5141\u8a31\u57fa\u65bc\u4f7f\u7528\u8005\u3001\u89d2\u8272\u548c\u8cc7\u6e90\u7684\u8a2a\u554f\u6b0a\u9650\u63a7\u5236\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u57fa\u65bc MongoDB\u3001Redis\u3001Memory \u4f86\u5132\u5b58 ACL \u898f\u5247\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5b89\u88dd\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install acl\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u7bc4\u4f8b\u4ee3\u78bc"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const Acl = require('acl');\nconst acl = new Acl(new Acl.memoryBackend());\n\n// \u5b9a\u7fa9\u89d2\u8272\u8207\u6b0a\u9650\nacl.allow([\n  {\n    roles: 'admin',\n    allows: [{ resources: '/api/resource', permissions: '*' }],\n  },\n  {\n    roles: 'user',\n    allows: [{ resources: '/api/resource', permissions: 'get' }],\n  },\n]);\n\n// \u6aa2\u67e5\u6b0a\u9650\napp.get('/api/resource', acl.middleware(), (req, res) => {\n  res.send('Resource accessed');\n});\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"3-\u81ea\u52d5\u5316\u7528\u6236\u7ba1\u7406user-management",children:["3. ",(0,r.jsx)(n.strong,{children:"\u81ea\u52d5\u5316\u7528\u6236\u7ba1\u7406\uff08User Management\uff09"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Keycloak"}),"\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e00\u500b\u958b\u6e90\u7684 IAM \u89e3\u6c7a\u65b9\u6848\uff0c\u53ef\u4ee5\u7528\u4f86\u96c6\u4e2d\u7ba1\u7406\u8eab\u4efd\u9a57\u8b49\u548c\u6388\u6b0a\u3002Keycloak \u652f\u6301 SSO\u3001LDAP\u3001\u793e\u4ea4\u767b\u5165\u3001OAuth2 \u548c OIDC\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u901a\u904e Keycloak Node.js \u9023\u63a5\u5668\uff0c\u4f60\u53ef\u4ee5\u5f88\u5bb9\u6613\u5c07 Keycloak \u8207 Express \u61c9\u7528\u96c6\u6210\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Keycloak-Connect"})," \u5b89\u88dd\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install keycloak-connect\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u7bc4\u4f8b\u4ee3\u78bc"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const session = require('express-session');\nconst Keycloak = require('keycloak-connect');\n\nconst memoryStore = new session.MemoryStore();\nconst keycloak = new Keycloak({ store: memoryStore });\n\napp.use(session({ secret: 'secret', resave: false, saveUninitialized: true, store: memoryStore }));\napp.use(keycloak.middleware());\n\napp.get('/protected', keycloak.protect(), (req, res) => {\n  res.send('This is a protected resource');\n});\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"4-\u5be9\u8a08\u8207\u65e5\u8a8c\u7ba1\u7406",children:["4. ",(0,r.jsx)(n.strong,{children:"\u5be9\u8a08\u8207\u65e5\u8a8c\u7ba1\u7406"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Winston"}),"\uff1a\u7528\u4f86\u8a18\u9304\u5b89\u5168\u76f8\u95dc\u7684\u4e8b\u4ef6\uff0c\u5982\u767b\u5165\u5931\u6557\u3001\u6b0a\u9650\u62d2\u7d55\u7b49\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Morgan"}),"\uff1a\u7528\u4f86\u8a18\u9304 HTTP \u8acb\u6c42\uff0c\u65b9\u4fbf\u5be9\u8a08\u4f7f\u7528\u8005\u7684\u64cd\u4f5c\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5b89\u88dd\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install winston morgan\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u7bc4\u4f8b\u4ee3\u78bc"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const winston = require('winston');\nconst morgan = require('morgan');\n\n// \u8a2d\u7f6e winston \u65e5\u8a8c\nconst logger = winston.createLogger({\n  transports: [new winston.transports.Console()],\n});\n\n// \u4f7f\u7528 morgan \u8a18\u9304 HTTP \u8acb\u6c42\napp.use(morgan('combined', { stream: logger.stream }));\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"\u5c0f\u7d50",children:"\u5c0f\u7d50"}),"\n",(0,r.jsxs)(n.p,{children:["\u70ba\u4e86\u5be6\u73fe ",(0,r.jsx)(n.strong,{children:"IAM"}),"\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.strong,{children:"Passport.js"})," \u548c ",(0,r.jsx)(n.strong,{children:"JWT"})," \u4f86\u7ba1\u7406\u8eab\u4efd\u9a57\u8b49\uff0c\u4f7f\u7528 ",(0,r.jsx)(n.strong,{children:"express-rbac"})," \u6216 ",(0,r.jsx)(n.strong,{children:"acl"})," \u4f86\u9032\u884c\u6388\u6b0a\u63a7\u5236\uff0c\u4e26\u6574\u5408 ",(0,r.jsx)(n.strong,{children:"Keycloak"})," \u4f86\u63d0\u4f9b\u5168\u9762\u7684\u8eab\u4efd\u7ba1\u7406\u89e3\u6c7a\u65b9\u6848\u3002\u9019\u4e9b\u5de5\u5177\u7d44\u5408\u8d77\u4f86\uff0c\u80fd\u5920\u5728 Express \u61c9\u7528\u4e2d\u69cb\u5efa\u51fa\u4e00\u500b\u5b8c\u6574\u7684 IAM \u7cfb\u7d71\uff0c\u78ba\u4fdd\u5b89\u5168\u6027\u548c\u53ef\u64f4\u5c55\u6027\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>i});var r=s(6540);const l={},c=r.createContext(l);function t(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);