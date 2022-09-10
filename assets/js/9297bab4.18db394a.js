"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[26989],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var g=o.createContext({}),s=function(e){var t=o.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(g.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,g=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=i,d=u["".concat(g,".").concat(h)]||u[h]||p[h]||r;return n?o.createElement(d,a(a({ref:t},c),{},{components:n})):o.createElement(d,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7309:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return g},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],l={title:"Rancher Integration with Logging Services",shortTitle:"Logging",description:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",metaDescription:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",weight:15},g=void 0,s={unversionedId:"pages-for-subheaders/logging",id:"pages-for-subheaders/logging",title:"Rancher Integration with Logging Services",description:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",source:"@site/docs/pages-for-subheaders/logging.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/logging",permalink:"/pages-for-subheaders/logging",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/logging.md",tags:[],version:"current",lastUpdatedAt:1662795105,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Rancher Integration with Logging Services",shortTitle:"Logging",description:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",metaDescription:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",weight:15},sidebar:"tutorialSidebar",previous:{title:"Longhorn - Cloud native distributed block storage for Kubernetes",permalink:"/explanations/integrations-in-rancher/longhorn"},next:{title:"Architecture",permalink:"/explanations/integrations-in-rancher/logging/logging-architecture"}},c={},p=[{value:"Enabling Logging",id:"enabling-logging",level:2},{value:"Uninstall Logging",id:"uninstall-logging",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Role-based Access Control",id:"role-based-access-control",level:2},{value:"Configuring Logging Custom Resources",id:"configuring-logging-custom-resources",level:2},{value:"Flows and ClusterFlows",id:"flows-and-clusterflows",level:3},{value:"Outputs and ClusterOutputs",id:"outputs-and-clusteroutputs",level:3},{value:"Configuring the Logging Helm Chart",id:"configuring-the-logging-helm-chart",level:2},{value:"Windows Support",id:"windows-support",level:3},{value:"Working with a Custom Docker Root Directory",id:"working-with-a-custom-docker-root-directory",level:3},{value:"Working with Taints and Tolerations",id:"working-with-taints-and-tolerations",level:3},{value:"Logging V2 with SELinux",id:"logging-v2-with-selinux",level:3},{value:"Additional Logging Sources",id:"additional-logging-sources",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"The <code>cattle-logging</code> Namespace Being Recreated",id:"the-cattle-logging-namespace-being-recreated",level:3}],u={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/"},"Banzai Cloud Logging operator")," now powers Rancher's logging solution in place of the former, in-house solution."),(0,r.kt)("p",null,"For an overview of the changes in v2.5, see ",(0,r.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/logging/logging-architecture#changes-in-rancher-v2-5"},"this section.")," For information about migrating from Logging V1, see ",(0,r.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging"},"this page.")),(0,r.kt)("h2",{id:"enabling-logging"},"Enabling Logging"),(0,r.kt)("p",null,"You can enable the logging for a Rancher managed cluster by going to the Apps page and installing the logging app."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the cluster where you want to install logging and click ",(0,r.kt)("strong",{parentName:"li"},"Apps & Marketplace"),"."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Logging")," app."),(0,r.kt)("li",{parentName:"ol"},"Scroll to the bottom of the Helm chart README and click ",(0,r.kt)("strong",{parentName:"li"},"Install"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The logging app is deployed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-logging-system")," namespace."),(0,r.kt)("h2",{id:"uninstall-logging"},"Uninstall Logging"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the cluster where you want to install logging and click ",(0,r.kt)("strong",{parentName:"li"},"Apps & Marketplace"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Installed Apps"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"cattle-logging-system")," namespace and check the boxes for ",(0,r.kt)("inlineCode",{parentName:"li"},"rancher-logging")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"rancher-logging-crd"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Delete"),"."),(0,r.kt)("li",{parentName:"ol"},"Confirm ",(0,r.kt)("strong",{parentName:"li"},"Delete"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result")," ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-logging")," is uninstalled."),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"For more information about how the logging application works, see ",(0,r.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/logging/logging-architecture"},"this section.")),(0,r.kt)("h2",{id:"role-based-access-control"},"Role-based Access Control"),(0,r.kt)("p",null,"Rancher logging has two roles, ",(0,r.kt)("inlineCode",{parentName:"p"},"logging-admin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"logging-view"),". For more information on how and when to use these roles, see ",(0,r.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/logging/rbac-for-logging"},"this page.")),(0,r.kt)("h2",{id:"configuring-logging-custom-resources"},"Configuring Logging Custom Resources"),(0,r.kt)("p",null,"To manage ",(0,r.kt)("inlineCode",{parentName:"p"},"Flows,")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlows"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Outputs"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutputs"),","),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to configure logging custom resources and click ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"li"},"Logging"),".")),(0,r.kt)("h3",{id:"flows-and-clusterflows"},"Flows and ClusterFlows"),(0,r.kt)("p",null,"For help with configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"Flows")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlows"),", see ",(0,r.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows"},"this page.")),(0,r.kt)("h3",{id:"outputs-and-clusteroutputs"},"Outputs and ClusterOutputs"),(0,r.kt)("p",null,"For help with configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"Outputs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutputs"),", see ",(0,r.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs"},"this page.")),(0,r.kt)("h2",{id:"configuring-the-logging-helm-chart"},"Configuring the Logging Helm Chart"),(0,r.kt)("p",null,"For a list of options that can be configured when the logging application is installed or upgraded, see ",(0,r.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/logging/logging-helm-chart-options"},"this page.")),(0,r.kt)("h3",{id:"windows-support"},"Windows Support"),(0,r.kt)("p",null,"Logging support for Windows clusters is available and logs can be collected from Windows nodes."),(0,r.kt)("p",null,"For details on how to enable or disable Windows node logging, see ",(0,r.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/logging/logging-helm-chart-options#enable-disable-windows-node-logging"},"this section.")),(0,r.kt)("h3",{id:"working-with-a-custom-docker-root-directory"},"Working with a Custom Docker Root Directory"),(0,r.kt)("p",null,"For details on using a custom Docker root directory, see ",(0,r.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/logging/logging-helm-chart-options#working-with-a-custom-docker-root-directory"},"this section.")),(0,r.kt)("h3",{id:"working-with-taints-and-tolerations"},"Working with Taints and Tolerations"),(0,r.kt)("p",null,"For information on how to use taints and tolerations with the logging application, see ",(0,r.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/logging/taints-and-tolerations"},"this page.")),(0,r.kt)("h3",{id:"logging-v2-with-selinux"},"Logging V2 with SELinux"),(0,r.kt)("p",null,"For information on enabling the logging application for SELinux-enabled nodes, see ",(0,r.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/logging/logging-helm-chart-options#enabling-the-logging-application-to-work-with-selinux"},"this section.")),(0,r.kt)("h3",{id:"additional-logging-sources"},"Additional Logging Sources"),(0,r.kt)("p",null,"By default, Rancher collects logs for control plane components and node components for all cluster types. In some cases additional logs can be collected. For details, see ",(0,r.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/logging/logging-helm-chart-options#additional-logging-sources"},"this section.")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"the-cattle-logging-namespace-being-recreated"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"cattle-logging")," Namespace Being Recreated"),(0,r.kt)("p",null,"If your cluster previously deployed logging from the global view in the legacy Rancher UI, you may encounter an issue where its ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-logging")," namespace is continually being recreated."),(0,r.kt)("p",null,"The solution is to delete all ",(0,r.kt)("inlineCode",{parentName:"p"},"clusterloggings.management.cattle.io")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"projectloggings.management.cattle.io")," custom resources from the cluster specific namespace in the management cluster.\nThe existence of these custom resources causes Rancher to create the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-logging")," namespace in the downstream cluster if it does not exist."),(0,r.kt)("p",null,"The cluster namespace matches the cluster ID, so we need to find the cluster ID for each cluster."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster you want to get the ID of and click ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"."),(0,r.kt)("li",{parentName:"ol"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"<cluster-id>")," portion from one of the URLs below. The ",(0,r.kt)("inlineCode",{parentName:"li"},"<cluster-id>")," portion is the cluster namespace name.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Cluster Management UI\nhttps://<your-url>/c/<cluster-id>/\n\n# Cluster Dashboard\nhttps://<your-url>/dashboard/c/<cluster-id>/\n")),(0,r.kt)("p",null,"Now that we have the ",(0,r.kt)("inlineCode",{parentName:"p"},"<cluster-id>")," namespace, we can delete the CRs that cause ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-logging")," to be continually recreated.\n",(0,r.kt)("em",{parentName:"p"},"Warning:")," ensure that logging, the version installed from the global view in the legacy Rancher UI, is not currently in use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete clusterloggings.management.cattle.io -n <cluster-id>\nkubectl delete projectloggings.management.cattle.io -n <cluster-id>\n")))}h.isMDXComponent=!0}}]);