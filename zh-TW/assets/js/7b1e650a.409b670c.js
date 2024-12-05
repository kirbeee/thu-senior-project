"use strict";(self.webpackChunkdoc_server=self.webpackChunkdoc_server||[]).push([[4444],{8756:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});const d=JSON.parse('{"id":"backend/IAM/ACL","title":"ACL","description":"\u5728 Django \u4e2d\uff0c\u4f60\u53ef\u4ee5\u5229\u7528\u5176\u5167\u5efa\u7684\u8a8d\u8b49\u7cfb\u7d71\u3001\u6a21\u578b\u7ba1\u7406\u548c\u4e2d\u4ecb\u8868\u4f86\u5be6\u73fe ACL\uff08\u5b58\u53d6\u63a7\u5236\u5217\u8868\uff09\u548c\u8cc7\u6599\u7684\u8edf\u522a\u9664\u529f\u80fd\u3002\u4ee5\u4e0b\u662f\u5982\u4f55\u5229\u7528 Django \u5167\u5efa\u529f\u80fd\u5be6\u73fe\u9019\u4e9b\u529f\u80fd\u7684\u5177\u9ad4\u6b65\u9a5f\uff1a","source":"@site/docs/backend/IAM/ACL.md","sourceDirName":"backend/IAM","slug":"/backend/IAM/ACL","permalink":"/thu-senior-project/zh-TW/docs/backend/IAM/ACL","draft":false,"unlisted":false,"editUrl":"https://github.com/kirbeee/thu-senior-project/docs/backend/IAM/ACL.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"DjangoNote","permalink":"/thu-senior-project/zh-TW/docs/backend/DjangoNote"},"next":{"title":"\u5177\u9ad4\u5be6\u73fe\u7d30\u7bc0","permalink":"/thu-senior-project/zh-TW/docs/backend/IAM/OAuth"}}');var r=s(4848),o=s(8453);const i={},l=void 0,t={},a=[{value:"1. \u4f7f\u7528 Django \u7684\u8a8d\u8b49\u8207\u6388\u6b0a\u7cfb\u7d71",id:"1-\u4f7f\u7528-django-\u7684\u8a8d\u8b49\u8207\u6388\u6b0a\u7cfb\u7d71",level:3},{value:"(1) \u4f7f\u7528\u8005\u8207\u89d2\u8272\uff08\u7fa4\u7d44\uff09\u7ba1\u7406",id:"1-\u4f7f\u7528\u8005\u8207\u89d2\u8272\u7fa4\u7d44\u7ba1\u7406",level:4},{value:"(2) \u70ba\u4f7f\u7528\u8005\u5206\u914d\u89d2\u8272",id:"2-\u70ba\u4f7f\u7528\u8005\u5206\u914d\u89d2\u8272",level:4},{value:"2. \u8a2d\u8a08\u8cc7\u6e90\u8207\u6b0a\u9650\u6a21\u578b",id:"2-\u8a2d\u8a08\u8cc7\u6e90\u8207\u6b0a\u9650\u6a21\u578b",level:3},{value:"(1) \u8cc7\u6e90\u6a21\u578b",id:"1-\u8cc7\u6e90\u6a21\u578b",level:4},{value:"(2) \u6b0a\u9650\u6aa2\u67e5",id:"2-\u6b0a\u9650\u6aa2\u67e5",level:4},{value:"3. \u8edf\u522a\u9664\u529f\u80fd\u7684\u5be6\u73fe",id:"3-\u8edf\u522a\u9664\u529f\u80fd\u7684\u5be6\u73fe",level:3},{value:"(1) \u64f4\u5c55\u6a21\u578b",id:"1-\u64f4\u5c55\u6a21\u578b",level:4},{value:"(2) \u7be9\u9078\u672a\u522a\u9664\u7684\u8cc7\u6599",id:"2-\u7be9\u9078\u672a\u522a\u9664\u7684\u8cc7\u6599",level:4},{value:"(3) \u522a\u9664\u8207\u6062\u5fa9\u64cd\u4f5c",id:"3-\u522a\u9664\u8207\u6062\u5fa9\u64cd\u4f5c",level:4},{value:"4. Django \u7684\u4fe1\u865f\u7cfb\u7d71\u8207\u5be9\u8a08\u7d00\u9304",id:"4-django-\u7684\u4fe1\u865f\u7cfb\u7d71\u8207\u5be9\u8a08\u7d00\u9304",level:3},{value:"(1) \u5efa\u7acb\u5be9\u8a08\u7d00\u9304\u6a21\u578b",id:"1-\u5efa\u7acb\u5be9\u8a08\u7d00\u9304\u6a21\u578b",level:4},{value:"(2) \u4f7f\u7528 <code>post_save</code> \u4fe1\u865f\u8a18\u9304\u522a\u9664\u64cd\u4f5c",id:"2-\u4f7f\u7528-post_save-\u4fe1\u865f\u8a18\u9304\u522a\u9664\u64cd\u4f5c",level:4},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:3}];function c(e){const n={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u5728 Django \u4e2d\uff0c\u4f60\u53ef\u4ee5\u5229\u7528\u5176\u5167\u5efa\u7684\u8a8d\u8b49\u7cfb\u7d71\u3001\u6a21\u578b\u7ba1\u7406\u548c\u4e2d\u4ecb\u8868\u4f86\u5be6\u73fe ACL\uff08\u5b58\u53d6\u63a7\u5236\u5217\u8868\uff09\u548c\u8cc7\u6599\u7684\u8edf\u522a\u9664\u529f\u80fd\u3002\u4ee5\u4e0b\u662f\u5982\u4f55\u5229\u7528 Django \u5167\u5efa\u529f\u80fd\u5be6\u73fe\u9019\u4e9b\u529f\u80fd\u7684\u5177\u9ad4\u6b65\u9a5f\uff1a"}),"\n",(0,r.jsx)(n.h3,{id:"1-\u4f7f\u7528-django-\u7684\u8a8d\u8b49\u8207\u6388\u6b0a\u7cfb\u7d71",children:"1. \u4f7f\u7528 Django \u7684\u8a8d\u8b49\u8207\u6388\u6b0a\u7cfb\u7d71"}),"\n",(0,r.jsxs)(n.p,{children:["Django \u5167\u5efa\u7684 ",(0,r.jsx)(n.code,{children:"auth"})," \u61c9\u7528\u7a0b\u5f0f\u5df2\u7d93\u5305\u542b\u4e86\u5c0d\u4f7f\u7528\u8005\u548c\u6b0a\u9650\u7684\u57fa\u672c\u652f\u63f4\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u5167\u5efa\u7684 ",(0,r.jsx)(n.strong,{children:"Groups"}),"\uff08\u7fa4\u7d44\uff09\u548c ",(0,r.jsx)(n.strong,{children:"Permissions"}),"\uff08\u6b0a\u9650\uff09\u4f86\u5be6\u73fe ACL\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"1-\u4f7f\u7528\u8005\u8207\u89d2\u8272\u7fa4\u7d44\u7ba1\u7406",children:"(1) \u4f7f\u7528\u8005\u8207\u89d2\u8272\uff08\u7fa4\u7d44\uff09\u7ba1\u7406"}),"\n",(0,r.jsxs)(n.p,{children:["Django \u5167\u5efa\u7684 ",(0,r.jsx)(n.code,{children:"User"})," \u6a21\u578b\u5df2\u7d93\u5305\u542b\u4e86\u4f7f\u7528\u8005\u8cc7\u8a0a\uff0c\u4f60\u53ef\u4ee5\u901a\u904e ",(0,r.jsx)(n.strong,{children:"\u7fa4\u7d44"})," \u4f86\u7ba1\u7406\u89d2\u8272\u3002Django \u5167\u5efa\u7684 ",(0,r.jsx)(n.strong,{children:"Permissions"})," \u53ef\u4ee5\u76f4\u63a5\u8207\u6a21\u578b\u7d81\u5b9a\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5efa\u7acb\u7fa4\u7d44\uff08\u89d2\u8272\uff09\u4e26\u5206\u914d\u6b0a\u9650\uff1a"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from django.contrib.auth.models import Group, Permission\n\n# \u5efa\u7acb\u89d2\u8272\nadmin_group = Group.objects.create(name='admin')\neditor_group = Group.objects.create(name='editor')\nviewer_group = Group.objects.create(name='viewer')\n\n# \u5206\u914d\u6b0a\u9650\ndelete_permission = Permission.objects.get(codename='delete_article')\nedit_permission = Permission.objects.get(codename='change_article')\nview_permission = Permission.objects.get(codename='view_article')\n\n# \u5c07\u6b0a\u9650\u8ce6\u4e88\u89d2\u8272\nadmin_group.permissions.add(delete_permission, edit_permission, view_permission)\neditor_group.permissions.add(edit_permission, view_permission)\nviewer_group.permissions.add(view_permission)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"2-\u70ba\u4f7f\u7528\u8005\u5206\u914d\u89d2\u8272",children:"(2) \u70ba\u4f7f\u7528\u8005\u5206\u914d\u89d2\u8272"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"add"})," \u65b9\u6cd5\u4f86\u5c07\u4f7f\u7528\u8005\u5206\u914d\u5230\u4e0d\u540c\u7684\u89d2\u8272\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from django.contrib.auth.models import User\n\n# \u67e5\u627e\u4f7f\u7528\u8005\nalice = User.objects.get(username='Alice')\nbob = User.objects.get(username='Bob')\ncharlie = User.objects.get(username='Charlie')\n\n# \u70ba\u4f7f\u7528\u8005\u5206\u914d\u89d2\u8272\nalice.groups.add(admin_group)\nbob.groups.add(editor_group)\ncharlie.groups.add(viewer_group)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2-\u8a2d\u8a08\u8cc7\u6e90\u8207\u6b0a\u9650\u6a21\u578b",children:"2. \u8a2d\u8a08\u8cc7\u6e90\u8207\u6b0a\u9650\u6a21\u578b"}),"\n",(0,r.jsx)(n.p,{children:"Django \u53ef\u4ee5\u81ea\u5b9a\u7fa9\u6a21\u578b\u4f86\u8868\u793a\u8cc7\u6e90\u8207\u5176\u6b0a\u9650\u3002\u4f60\u53ef\u4ee5\u64f4\u5c55\u6a21\u578b\u4e26\u4f7f\u7528\u81ea\u8a02\u908f\u8f2f\u9032\u884c\u5b58\u53d6\u63a7\u5236\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"1-\u8cc7\u6e90\u6a21\u578b",children:"(1) \u8cc7\u6e90\u6a21\u578b"}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u5728 Django \u4e2d\u5b9a\u7fa9 ",(0,r.jsx)(n.code,{children:"Resource"})," \u6a21\u578b\u4f86\u8868\u793a\u8cc7\u6e90\uff08\u5982\u7db2\u9801\u3001API \u7b49\uff09\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from django.db import models\n\nclass Resource(models.Model):\n    name = models.CharField(max_length=255)\n    resource_type = models.CharField(max_length=255)  # e.g., 'page', 'api'\n"})}),"\n",(0,r.jsx)(n.h4,{id:"2-\u6b0a\u9650\u6aa2\u67e5",children:"(2) \u6b0a\u9650\u6aa2\u67e5"}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528 Django \u7684 ",(0,r.jsx)(n.code,{children:"has_perm"})," \u65b9\u6cd5\u4f86\u6aa2\u67e5\u67d0\u500b\u4f7f\u7528\u8005\u662f\u5426\u6709\u6b0a\u9650\u9032\u884c\u64cd\u4f5c\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"user = request.user\nif user.has_perm('app.delete_article'):\n    # \u4f7f\u7528\u8005\u6709\u6b0a\u9650\u522a\u9664\u6587\u7ae0\n    pass\nelse:\n    # \u6c92\u6709\u6b0a\u9650\n    pass\n"})}),"\n",(0,r.jsx)(n.h3,{id:"3-\u8edf\u522a\u9664\u529f\u80fd\u7684\u5be6\u73fe",children:"3. \u8edf\u522a\u9664\u529f\u80fd\u7684\u5be6\u73fe"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 Django \u4e2d\uff0c\u53ef\u4ee5\u900f\u904e\u81ea\u8a02\u7684 ",(0,r.jsx)(n.code,{children:"deleted_at"})," \u6b04\u4f4d\u4f86\u5be6\u73fe\u8edf\u522a\u9664\u529f\u80fd\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"1-\u64f4\u5c55\u6a21\u578b",children:"(1) \u64f4\u5c55\u6a21\u578b"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u6a21\u578b\u4e2d\u65b0\u589e ",(0,r.jsx)(n.code,{children:"deleted_at"})," \u6b04\u4f4d\uff0c\u4e26\u8a2d\u7f6e\u8edf\u522a\u9664\u908f\u8f2f\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from django.db import models\nfrom django.utils import timezone\n\nclass Article(models.Model):\n    title = models.CharField(max_length=255)\n    content = models.TextField()\n    created_at = models.DateTimeField(auto_now_add=True)\n    updated_at = models.DateTimeField(auto_now=True)\n    deleted_at = models.DateTimeField(null=True, blank=True)\n\n    def soft_delete(self):\n        self.deleted_at = timezone.now()\n        self.save()\n\n    def restore(self):\n        self.deleted_at = None\n        self.save()\n"})}),"\n",(0,r.jsx)(n.h4,{id:"2-\u7be9\u9078\u672a\u522a\u9664\u7684\u8cc7\u6599",children:"(2) \u7be9\u9078\u672a\u522a\u9664\u7684\u8cc7\u6599"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u67e5\u8a62\u4e2d\u7be9\u9078 ",(0,r.jsx)(n.code,{children:"deleted_at"})," \u6b04\u4f4d\u70ba ",(0,r.jsx)(n.code,{children:"None"})," \u7684\u8cc7\u6599\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# \u67e5\u8a62\u672a\u88ab\u522a\u9664\u7684\u6587\u7ae0\narticles = Article.objects.filter(deleted_at__isnull=True)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"3-\u522a\u9664\u8207\u6062\u5fa9\u64cd\u4f5c",children:"(3) \u522a\u9664\u8207\u6062\u5fa9\u64cd\u4f5c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"article = Article.objects.get(id=1)\narticle.soft_delete()  # \u8edf\u522a\u9664\u6587\u7ae0\narticle.restore()  # \u6062\u5fa9\u5df2\u522a\u9664\u6587\u7ae0\n"})}),"\n",(0,r.jsx)(n.h3,{id:"4-django-\u7684\u4fe1\u865f\u7cfb\u7d71\u8207\u5be9\u8a08\u7d00\u9304",children:"4. Django \u7684\u4fe1\u865f\u7cfb\u7d71\u8207\u5be9\u8a08\u7d00\u9304"}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528 Django \u7684\u4fe1\u865f\uff08signals\uff09\u4f86\u81ea\u52d5\u8a18\u9304\u522a\u9664\u884c\u70ba\u3002\u4f8b\u5982\uff0c\u7576\u4e00\u500b\u6587\u7ae0\u88ab\u522a\u9664\u6642\uff0c\u8a18\u9304\u64cd\u4f5c\u5230 ",(0,r.jsx)(n.code,{children:"logs"})," \u8868\u4e2d\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"1-\u5efa\u7acb\u5be9\u8a08\u7d00\u9304\u6a21\u578b",children:"(1) \u5efa\u7acb\u5be9\u8a08\u7d00\u9304\u6a21\u578b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class DeleteLog(models.Model):\n    user = models.ForeignKey(User, on_delete=models.CASCADE)\n    article = models.ForeignKey(Article, on_delete=models.CASCADE)\n    reason = models.TextField()\n    deleted_at = models.DateTimeField(auto_now_add=True)\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"2-\u4f7f\u7528-post_save-\u4fe1\u865f\u8a18\u9304\u522a\u9664\u64cd\u4f5c",children:["(2) \u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"post_save"})," \u4fe1\u865f\u8a18\u9304\u522a\u9664\u64cd\u4f5c"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from django.db.models.signals import post_save\nfrom django.dispatch import receiver\n\n@receiver(post_save, sender=Article)\ndef log_delete(sender, instance, **kwargs):\n    if instance.deleted_at:  # \u5982\u679c\u6587\u7ae0\u88ab\u8edf\u522a\u9664\n        DeleteLog.objects.create(user=instance.deleted_by, article=instance, reason='Deleted by user')\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u7e3d\u7d50",children:"\u7e3d\u7d50"}),"\n",(0,r.jsxs)(n.p,{children:["Django \u63d0\u4f9b\u4e86\u8c50\u5bcc\u7684\u5167\u5efa\u529f\u80fd\uff0c\u80fd\u5920\u5feb\u901f\u69cb\u5efa ACL \u548c\u8edf\u522a\u9664\u7cfb\u7d71\u3002\u4f60\u53ef\u4ee5\u5229\u7528 Django \u7684\u8a8d\u8b49\u8207\u6388\u6b0a\u7cfb\u7d71\u9032\u884c\u6b0a\u9650\u63a7\u5236\uff0c\u901a\u904e ",(0,r.jsx)(n.code,{children:"deleted_at"})," \u6b04\u4f4d\u5be6\u73fe\u8edf\u522a\u9664\uff0c\u4e26\u4f7f\u7528\u4fe1\u865f\u7cfb\u7d71\u9032\u884c\u64cd\u4f5c\u5be9\u8a08\u3002\u9019\u4e9b\u529f\u80fd\u53ef\u4ee5\u6709\u6548\u5730\u4fdd\u8b77\u8cc7\u6599\u4e26\u63a7\u5236\u5b58\u53d6\u6b0a\u9650\uff0c\u6eff\u8db3\u5927\u591a\u6578\u5546\u7528\u7db2\u7ad9\u7684\u9700\u6c42\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var d=s(6540);const r={},o=d.createContext(r);function i(e){const n=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);