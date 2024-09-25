"use strict";(self.webpackChunkdoc_server=self.webpackChunkdoc_server||[]).push([[5052],{3028:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>c,contentTitle:()=>n,default:()=>j,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var t=s(4848),r=s(8453);const i={},n="Database Design",l={id:"develop-guied/database/table",title:"Database Design",description:"using",source:"@site/docs/develop-guied/database/table.md",sourceDirName:"develop-guied/database",slug:"/develop-guied/database/table",permalink:"/thu-senior-project/docs/develop-guied/database/table",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/develop-guied/database/table.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"reference",permalink:"/thu-senior-project/docs/develop-guied/database/reference"},next:{title:"frontend-design",permalink:"/thu-senior-project/docs/develop-guied/frontend-design"}},c={},h=[{value:"using",id:"using",level:2},{value:"User",id:"user",level:3},{value:"User information",id:"user-information",level:3},{value:"department",id:"department",level:3},{value:"Course",id:"course",level:3},{value:"\u8003\u53e4\u984c\u8868 (exam table) [not finish]",id:"\u8003\u53e4\u984c\u8868-exam-table-not-finish",level:3},{value:"\u5b78\u5e74\u8868 (year table) [deprecate]",id:"\u5b78\u5e74\u8868-year-table-deprecate",level:3},{value:"\u7562\u696d\u9580\u6abb (graduation_requirement table) [deprecate]",id:"\u7562\u696d\u9580\u6abb-graduation_requirement-table-deprecate",level:3},{value:"\u8a0e\u8ad6\u8868 (discuss board table) [\u8a0e\u8ad6\u5340]",id:"\u8a0e\u8ad6\u8868-discuss-board-table-\u8a0e\u8ad6\u5340",level:3},{value:"\u5716\u7247\u8868 (image table) [\u8a0e\u8ad6\u7248]",id:"\u5716\u7247\u8868-image-table-\u8a0e\u8ad6\u7248",level:3},{value:"\u8a0e\u8ad6\u4e32\u8868 (thread table) [\u8a0e\u8ad6\u7248]",id:"\u8a0e\u8ad6\u4e32\u8868-thread-table-\u8a0e\u8ad6\u7248",level:3},{value:"\u7559\u8a00\u8868 (comment table) [deprecate]",id:"\u7559\u8a00\u8868-comment-table-deprecate",level:3}];function x(e){const d={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.header,{children:(0,t.jsx)(d.h1,{id:"database-design",children:"Database Design"})}),"\n",(0,t.jsx)(d.h2,{id:"using",children:"using"}),"\n",(0,t.jsx)(d.p,{children:"System : PostgreSQL\nnode-module:"}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsx)(d.li,{children:"pg"}),"\n",(0,t.jsx)(d.li,{children:"sequelize : ORM"}),"\n"]}),"\n",(0,t.jsx)(d.h3,{id:"user",children:"User"}),"\n",(0,t.jsx)(d.p,{children:"\u56e0\u70ba\u7d93\u5e38\u505aINSERT\u4e0d\u505adatabase index"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"key"}),(0,t.jsx)(d.th,{children:"data type"}),(0,t.jsx)(d.th,{children:"description"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"user_id"}),(0,t.jsx)(d.td,{children:"SERIAL INT"}),(0,t.jsx)(d.td,{children:"PK"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"student_id"}),(0,t.jsx)(d.td,{children:"VARCHAR(15)"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"password"}),(0,t.jsx)(d.td,{children:"VARCHAR(100)"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"user_name"}),(0,t.jsx)(d.td,{children:"VARCHAR(50)"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Google Oauth\u2013id"}),(0,t.jsx)(d.td,{children:"VARCHAR(100)"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"department"}),(0,t.jsx)(d.td,{children:"INT"}),(0,t.jsx)(d.td,{children:"FK"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"identity"}),(0,t.jsx)(d.td,{children:"INT"}),(0,t.jsx)(d.td,{children:"FK"})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"user-information",children:"User information"}),"\n",(0,t.jsx)(d.h3,{id:"department",children:"department"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"key"}),(0,t.jsx)(d.th,{children:"data type"}),(0,t.jsx)(d.th,{children:"description"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"department_id"}),(0,t.jsx)(d.td,{children:"SERIAL INT"}),(0,t.jsx)(d.td,{children:"PK"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"department_name"}),(0,t.jsx)(d.td,{children:"VARCHAR(50)"}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"course",children:"Course"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"name"}),(0,t.jsx)(d.th,{children:"data type"}),(0,t.jsx)(d.th,{children:"description"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"course_id"}),(0,t.jsx)(d.td,{children:"SERIAL INT"}),(0,t.jsx)(d.td,{children:"PK"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"course_name"}),(0,t.jsx)(d.td,{children:"VARCHAR(50)"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"course_teacher"}),(0,t.jsx)(d.td,{children:"VARCHAR(50)"}),(0,t.jsx)(d.td,{children:"\u53ef\u642d\u914d user(user_id)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"course_content"}),(0,t.jsx)(d.td,{children:"VARCHAR(50)"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"course_time"}),(0,t.jsx)(d.td,{children:"VARCHAR(50)"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"credit"}),(0,t.jsx)(d.td,{children:"INT"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u8ab2\u7a0b\u5c6c\u6027 (course_type)"}),(0,t.jsx)(d.td,{children:"VARCHAR(50)"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u8a0e\u8ad6\u7248 (course_discuss)"}),(0,t.jsx)(d.td,{children:"INT"}),(0,t.jsx)(d.td,{children:"\u5916\u9375\uff0c\u9023\u63a5\u8a0e\u8ad6\u5340(\u8a0e\u8ad6\u8ab2\u7a0b\u7de8\u865f)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u8003\u53e4\u984c (course_examination)"}),(0,t.jsx)(d.td,{children:"VARCHAR(50)"}),(0,t.jsx)(d.td,{children:"\u5916\u9375\uff0c\u9023\u63a5\u8003\u53e4\u984c"})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"\u8003\u53e4\u984c\u8868-exam-table-not-finish",children:"\u8003\u53e4\u984c\u8868 (exam table) [not finish]"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"name"}),(0,t.jsx)(d.th,{children:"data type"}),(0,t.jsx)(d.th,{children:"description"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"exam_id"}),(0,t.jsx)(d.td,{children:"INT"}),(0,t.jsx)(d.td,{children:"PK course(course_id)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"description"}),(0,t.jsx)(d.td,{children:"VARCHAR(200)"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"file"}),(0,t.jsx)(d.td,{children:"ARRAY"}),(0,t.jsx)(d.td,{children:"FK"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"img"}),(0,t.jsx)(d.td,{children:"ARRAY"}),(0,t.jsx)(d.td,{children:"FK"})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"\u5b78\u5e74\u8868-year-table-deprecate",children:"\u5b78\u5e74\u8868 (year table) [deprecate]"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\u540d\u7a31"}),(0,t.jsx)(d.th,{children:"\u8cc7\u6599\u578b\u614b"}),(0,t.jsx)(d.th,{children:"\u8aaa\u660e"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Id (year_department)"}),(0,t.jsx)(d.td,{children:"SERIAL INT"}),(0,t.jsx)(d.td,{children:"\u4e3b\u9375"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u5b78\u5e74 (year_year)"}),(0,t.jsx)(d.td,{children:"SMALLINT"}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"\u7562\u696d\u9580\u6abb-graduation_requirement-table-deprecate",children:"\u7562\u696d\u9580\u6abb (graduation_requirement table) [deprecate]"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\u540d\u7a31"}),(0,t.jsx)(d.th,{children:"\u8cc7\u6599\u578b\u614b"}),(0,t.jsx)(d.th,{children:"\u8aaa\u660e"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"id \u7cfb\u7d1a"}),(0,t.jsx)(d.td,{children:"SERIAL INT"}),(0,t.jsx)(d.td,{children:"\u4e3b\u9375"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u5fc5\u4fee"}),(0,t.jsx)(d.td,{children:"SMALLINT"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u672c\u7cfb\u9078\u4fee"}),(0,t.jsx)(d.td,{children:"SMALLINT"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u5916\u7cfb\u9078\u4fee"}),(0,t.jsx)(d.td,{children:"SMALLINT"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u5b78\u5e74"}),(0,t.jsx)(d.td,{children:"INT"}),(0,t.jsx)(d.td,{children:"\u5916\u9375\uff0c\u9023\u63a5 year(year_department)"})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"\u8a0e\u8ad6\u8868-discuss-board-table-\u8a0e\u8ad6\u5340",children:"\u8a0e\u8ad6\u8868 (discuss board table) [\u8a0e\u8ad6\u5340]"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\u540d\u7a31"}),(0,t.jsx)(d.th,{children:"\u8cc7\u6599\u578b\u614b"}),(0,t.jsx)(d.th,{children:"\u8aaa\u660e"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u8a0e\u8ad6\u8ab2\u7a0b\u7de8\u865f (id)"}),(0,t.jsx)(d.td,{children:"SERIAL INT"}),(0,t.jsx)(d.td,{children:"\u4e3b\u9375"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u4f5c\u8005(author)"}),(0,t.jsx)(d.td,{children:"INT"}),(0,t.jsx)(d.td,{children:"\u5916\u9375 user(user_id)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u8a0e\u8ad6\u6a19\u984c (topic)"}),(0,t.jsx)(d.td,{children:"VARCHAR(50)"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u8a0e\u8ad6\u5167\u5bb9 (text_content)"}),(0,t.jsx)(d.td,{children:"VARCHAR(50)"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u5716\u7247\u7db2\u5740"}),(0,t.jsx)(d.td,{children:"TEXT[]"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u8a55\u5206\u5206\u6578 (rate)"}),(0,t.jsx)(d.td,{children:"INT"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u767c\u5e03\u6642\u9593 (post_time)"}),(0,t.jsx)(d.td,{children:"TIMESTAMP"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u7559\u8a00\u4f7f\u7528\u8005 (discuss_user)"}),(0,t.jsx)(d.td,{children:"INT"}),(0,t.jsx)(d.td,{children:"\u5916\u9375\uff0c\u9023\u63a5 user(user_id)"})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"\u5716\u7247\u8868-image-table-\u8a0e\u8ad6\u7248",children:"\u5716\u7247\u8868 (image table) [\u8a0e\u8ad6\u7248]"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\u540d\u7a31"}),(0,t.jsx)(d.th,{children:"\u8cc7\u6599\u578b\u614b"}),(0,t.jsx)(d.th,{children:"\u8aaa\u660e"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u5716\u7247\u7de8\u865f (image_id)"}),(0,t.jsx)(d.td,{children:"SERIAL INT"}),(0,t.jsx)(d.td,{children:"\u4e3b\u9375"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u5716\u7247\u7db2\u5740 (image_url)"}),(0,t.jsx)(d.td,{children:"VARCHAR(255)"}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"\u8a0e\u8ad6\u4e32\u8868-thread-table-\u8a0e\u8ad6\u7248",children:"\u8a0e\u8ad6\u4e32\u8868 (thread table) [\u8a0e\u8ad6\u7248]"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\u540d\u7a31"}),(0,t.jsx)(d.th,{children:"\u8cc7\u6599\u578b\u614b"}),(0,t.jsx)(d.th,{children:"\u8aaa\u660e"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u8a0e\u8ad6\u4e32\u7de8\u865f (thread_id)"}),(0,t.jsx)(d.td,{children:"SERIAL INT"}),(0,t.jsx)(d.td,{children:"\u4e3b\u9375"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u8a0e\u8ad6\u8ab2\u7a0b\u7de8\u865f (discuss_id)"}),(0,t.jsx)(d.td,{children:"INT"}),(0,t.jsx)(d.td,{children:"\u5916\u9375\uff0c\u9023\u63a5 discuss(discuss_id)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u8a0e\u8ad6\u5167\u5bb9 (thread_text)"}),(0,t.jsx)(d.td,{children:"VARCHAR(255)"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u8b9a\u6578 (likes)"}),(0,t.jsx)(d.td,{children:"INT"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u7de8\u8f2f\u6642\u9593 (edit_time)"}),(0,t.jsx)(d.td,{children:"TIMESTAMP"}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"\u7559\u8a00\u8868-comment-table-deprecate",children:"\u7559\u8a00\u8868 (comment table) [deprecate]"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\u540d\u7a31"}),(0,t.jsx)(d.th,{children:"\u8cc7\u6599\u578b\u614b"}),(0,t.jsx)(d.th,{children:"\u8aaa\u660e"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u7559\u8a00\u7de8\u865f (comment_id)"}),(0,t.jsx)(d.td,{children:"SERIAL INT"}),(0,t.jsx)(d.td,{children:"\u4e3b\u9375"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u8a0e\u8ad6\u8ab2\u7a0b\u7de8\u865f (discuss_id)"}),(0,t.jsx)(d.td,{children:"INT"}),(0,t.jsx)(d.td,{children:"\u5916\u9375\uff0c\u9023\u63a5 discuss(discuss_id)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u7559\u8a00\u5167\u5bb9 (comment_text)"}),(0,t.jsx)(d.td,{children:"VARCHAR(255)"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u7559\u8a00\u4f7f\u7528\u8005 (comment_user)"}),(0,t.jsx)(d.td,{children:"INT"}),(0,t.jsx)(d.td,{children:"\u5916\u9375\uff0c\u9023\u63a5 user(user_id)"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"\u7559\u8a00\u6642\u9593 (comment_time)"}),(0,t.jsx)(d.td,{children:"TIMESTAMP"}),(0,t.jsx)(d.td,{})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},8453:(e,d,s)=>{s.d(d,{R:()=>n,x:()=>l});var t=s(6540);const r={},i=t.createContext(r);function n(e){const d=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),t.createElement(i.Provider,{value:d},e.children)}}}]);