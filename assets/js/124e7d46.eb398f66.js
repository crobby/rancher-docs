"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[34296],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return h}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return t?n.createElement(m,s(s({ref:r},u),{},{components:t})):n.createElement(m,s({ref:r},u))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83291:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),s=["components"],i={title:"Role-Based Access Control (RBAC)",weight:1120,aliases:["/rancher/v2.5/en/concepts/global-configuration/users-permissions-roles/","/rancher/v2.x/en/admin-settings/rbac/"]},c=void 0,l={unversionedId:"pages-for-subheaders/manage-role-based-access-control-rbac",id:"version-2.5/pages-for-subheaders/manage-role-based-access-control-rbac",title:"Role-Based Access Control (RBAC)",description:"Within Rancher, each person authenticates as a user, which is a login that grants you access to Rancher. As mentioned in Authentication, users can either be local or external.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/manage-role-based-access-control-rbac.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/manage-role-based-access-control-rbac",permalink:"/v2.5/pages-for-subheaders/manage-role-based-access-control-rbac",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/manage-role-based-access-control-rbac.md",tags:[],version:"2.5",lastUpdatedAt:1662795105,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Role-Based Access Control (RBAC)",weight:1120,aliases:["/rancher/v2.5/en/concepts/global-configuration/users-permissions-roles/","/rancher/v2.x/en/admin-settings/rbac/"]},sidebar:"tutorialSidebar",previous:{title:"Group Permissions with Shibboleth and OpenLDAP",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions"},next:{title:"Global Permissions",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"}},u={},p=[{value:"Users and Roles",id:"users-and-roles",level:2}],d={toc:p};function h(e){var r=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Within Rancher, each person authenticates as a ",(0,o.kt)("em",{parentName:"p"},"user"),", which is a login that grants you access to Rancher. As mentioned in ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/about-authentication"},"Authentication"),", users can either be local or external."),(0,o.kt)("p",null,"After you configure external authentication, the users that display on the ",(0,o.kt)("strong",{parentName:"p"},"Users")," page changes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you are logged in as a local user, only local users display.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you are logged in as an external user, both external and local users display."))),(0,o.kt)("h2",{id:"users-and-roles"},"Users and Roles"),(0,o.kt)("p",null,"Once the user logs in to Rancher, their ",(0,o.kt)("em",{parentName:"p"},"authorization"),", or their access rights within the system, is determined by ",(0,o.kt)("em",{parentName:"p"},"global permissions"),", and ",(0,o.kt)("em",{parentName:"p"},"cluster and project roles"),".  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Global Permissions"),":"),(0,o.kt)("p",{parentName:"li"},"  Define user authorization outside the scope of any particular cluster.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"Cluster and Project Roles"),":"),(0,o.kt)("p",{parentName:"li"},"  Define user authorization inside the specific cluster or project where they are assigned the role."))),(0,o.kt)("p",null,"Both global permissions and cluster and project roles are implemented on top of ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"Kubernetes RBAC"),". Therefore, enforcement of permissions and roles is performed by Kubernetes."))}h.isMDXComponent=!0}}]);