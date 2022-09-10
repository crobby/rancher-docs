"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[51599],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70782:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Vagrant Quick Start",weight:200},s=void 0,p={unversionedId:"getting-started/quick-start-guides/deploy-rancher-manager/vagrant",id:"version-2.0-2.4/getting-started/quick-start-guides/deploy-rancher-manager/vagrant",title:"Vagrant Quick Start",description:"The following steps quickly deploy a Rancher Server with a single node cluster attached.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/quick-start-guides/deploy-rancher-manager/vagrant.md",sourceDirName:"getting-started/quick-start-guides/deploy-rancher-manager",slug:"/getting-started/quick-start-guides/deploy-rancher-manager/vagrant",permalink:"/v2.0-v2.4/getting-started/quick-start-guides/deploy-rancher-manager/vagrant",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/quick-start-guides/deploy-rancher-manager/vagrant.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662795105,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Vagrant Quick Start",weight:200},sidebar:"tutorialSidebar",previous:{title:"Rancher GCP Quick Start Guide",permalink:"/v2.0-v2.4/getting-started/quick-start-guides/deploy-rancher-manager/gcp"},next:{title:"Manual Quick Start",permalink:"/v2.0-v2.4/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Note",id:"note",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"What&#39;s Next?",id:"whats-next",level:3},{value:"Destroying the Environment",id:"destroying-the-environment",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following steps quickly deploy a Rancher Server with a single node cluster attached."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," The intent of these guides is to quickly launch a sandbox that you can use to evaluate Rancher. These guides are not intended for production environments. For comprehensive setup instructions, see ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/installation-and-upgrade"},"Installation"),".")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.vagrantup.com"},"Vagrant"),": Vagrant is required as this is used to provision the machine based on the Vagrantfile."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.virtualbox.org"},"Virtualbox"),": The virtual machines that Vagrant provisions need to be provisioned to VirtualBox."),(0,i.kt)("li",{parentName:"ul"},"At least 4GB of free RAM.")),(0,i.kt)("h3",{id:"note"},"Note"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Vagrant will require plugins to create VirtualBox VMs. Install them with the following commands:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"vagrant plugin install vagrant-vboxmanage")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"vagrant plugin install vagrant-vbguest")))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Rancher Quickstart")," to a folder using ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/rancher/quickstart"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go into the folder containing the Vagrantfile by executing ",(0,i.kt)("inlineCode",{parentName:"p"},"cd quickstart/vagrant"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Optional:")," Edit ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," to:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Change the number of nodes and the memory allocations, if required. (",(0,i.kt)("inlineCode",{parentName:"li"},"node.count"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"node.cpus"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"node.memory"),")"),(0,i.kt)("li",{parentName:"ul"},"Change the password of the ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")," user for logging into Rancher. (",(0,i.kt)("inlineCode",{parentName:"li"},"admin_password"),")"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To initiate the creation of the environment run, ",(0,i.kt)("inlineCode",{parentName:"p"},"vagrant up --provider=virtualbox"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once provisioning finishes, go to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://172.22.101.101")," in the browser. The default user/password is ",(0,i.kt)("inlineCode",{parentName:"p"},"admin/admin"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Rancher Server and your Kubernetes cluster is installed on VirtualBox."),(0,i.kt)("h3",{id:"whats-next"},"What's Next?"),(0,i.kt)("p",null,"Use Rancher to create a deployment. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/deploy-rancher-workloads"},"Creating Deployments"),"."),(0,i.kt)("h2",{id:"destroying-the-environment"},"Destroying the Environment"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart/vagrant")," folder execute ",(0,i.kt)("inlineCode",{parentName:"p"},"vagrant destroy -f"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Wait for the confirmation that all resources have been destroyed."))))}m.isMDXComponent=!0}}]);