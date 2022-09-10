"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[48771],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8021:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Restore Configuration",shortTitle:"Restore",weight:2},c=void 0,s={unversionedId:"reference-guides/backup-restore-configuration/restore-configuration",id:"reference-guides/backup-restore-configuration/restore-configuration",title:"Restore Configuration",description:"The Restore Create page lets you provide details of the backup to restore from",source:"@site/docs/reference-guides/backup-restore-configuration/restore-configuration.md",sourceDirName:"reference-guides/backup-restore-configuration",slug:"/reference-guides/backup-restore-configuration/restore-configuration",permalink:"/reference-guides/backup-restore-configuration/restore-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/backup-restore-configuration/restore-configuration.md",tags:[],version:"current",lastUpdatedAt:1662795105,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Restore Configuration",shortTitle:"Restore",weight:2},sidebar:"tutorialSidebar",previous:{title:"Backup Configuration",permalink:"/reference-guides/backup-restore-configuration/backup-configuration"},next:{title:"Backup Storage Location Configuration",permalink:"/reference-guides/backup-restore-configuration/storage-configuration"}},u={},p=[{value:"Backup Source",id:"backup-source",level:2},{value:"An existing backup config",id:"an-existing-backup-config",level:3},{value:"The default storage target",id:"the-default-storage-target",level:3},{value:"An S3-compatible object store",id:"an-s3-compatible-object-store",level:3},{value:"Encryption",id:"encryption",level:2},{value:"Prune During Restore",id:"prune-during-restore",level:2},{value:"Getting the Backup Filename from S3",id:"getting-the-backup-filename-from-s3",level:2}],d={toc:p};function f(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Restore Create page lets you provide details of the backup to restore from"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(41399).Z,width:"2870",height:"1074"})),(0,i.kt)("h2",{id:"backup-source"},"Backup Source"),(0,i.kt)("p",null,"Provide details of the backup file and its storage location, which the operator will then use to perform the restore. Select from the following options to provide these details"),(0,i.kt)("h3",{id:"an-existing-backup-config"},"An existing backup config"),(0,i.kt)("p",null,"Selecting this option will populate the ",(0,i.kt)("strong",{parentName:"p"},"Target Backup")," dropdown with the Backups available in this cluster. Select the Backup from the dropdown, and that will fill out the ",(0,i.kt)("strong",{parentName:"p"},"Backup Filename")," field for you, and will also pass the backup source information from the selected Backup to the operator."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(23553).Z,width:"2358",height:"1030"})),(0,i.kt)("p",null,"If the Backup custom resource does not exist in the cluster, you need to get the exact filename and provide the backup source details with the default storage target or an S3-compatible object store."),(0,i.kt)("h3",{id:"the-default-storage-target"},"The default storage target"),(0,i.kt)("p",null,"Select this option if you are restoring from a backup file that exists in the default storage location configured at the operator-level. The operator-level configuration is the storage location that was configured when the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator was installed or upgraded. Provide the exact filename in the ",(0,i.kt)("strong",{parentName:"p"},"Backup Filename")," field."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(61272).Z,width:"2366",height:"878"})),(0,i.kt)("h3",{id:"an-s3-compatible-object-store"},"An S3-compatible object store"),(0,i.kt)("p",null,"Select this option if no default storage location is configured at the operator-level, OR if the backup file exists in a different S3 bucket than the one configured as the default storage location. Provide the exact filename in the ",(0,i.kt)("strong",{parentName:"p"},"Backup Filename")," field. Refer to ",(0,i.kt)("a",{parentName:"p",href:"#getting-the-backup-filename-from-s3"},"this section")," for exact steps on getting the backup filename from s3. Fill in all the details for the S3 compatible object store. Its fields are exactly same as ones for the ",(0,i.kt)("inlineCode",{parentName:"p"},"backup.StorageLocation")," configuration in the ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/backup-restore-configuration/backup-configuration#storage-location"},"Backup custom resource.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(17357).Z,width:"2344",height:"1332"})," "),(0,i.kt)("h2",{id:"encryption"},"Encryption"),(0,i.kt)("p",null,"If the backup was created with encryption enabled, its file will have ",(0,i.kt)("inlineCode",{parentName:"p"},".enc")," suffix. Choosing such a Backup, or providing a backup filename with ",(0,i.kt)("inlineCode",{parentName:"p"},".enc")," suffix will display another dropdown named ",(0,i.kt)("strong",{parentName:"p"},"Encryption Config Secret"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(11896).Z,width:"2362",height:"338"})," "),(0,i.kt)("p",null,"The Secret selected from this dropdown must have the same contents as the one used for the Backup custom resource while performing the backup. If the encryption configuration doesn't match, the restore will fail"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Encryption Config Secret")," dropdown will filter out and list only those Secrets that have this exact key"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"YAML Directive Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"encryptionConfigSecretName")),(0,i.kt)("td",{parentName:"tr",align:null},"Provide the name of the Secret from ",(0,i.kt)("inlineCode",{parentName:"td"},"cattle-resources-system")," namespace, that contains the encryption config file.")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This field should only be set if the backup was created with encryption enabled. Providing the incorrect encryption config will cause the restore to fail."))),(0,i.kt)("h2",{id:"prune-during-restore"},"Prune During Restore"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Prune"),":  In order to fully restore Rancher from a backup, and to go back to the exact state it was at when the backup was performed, we need to delete any additional resources that were created by Rancher after the backup was taken. The operator does so if the ",(0,i.kt)("strong",{parentName:"li"},"Prune")," flag is enabled. Prune is enabled by default and it is recommended to keep it enabled."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete Timeout"),": This is the amount of time the operator will wait while deleting a resource before editing the resource to remove finalizers and attempt deletion again.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"YAML Directive Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"prune")),(0,i.kt)("td",{parentName:"tr",align:null},"Delete the resources managed by Rancher that are not present in the backup (Recommended).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"deleteTimeoutSeconds")),(0,i.kt)("td",{parentName:"tr",align:null},"Amount of time the operator will wait while deleting a resource before editing the resource to remove finalizers and attempt deletion again.")))),(0,i.kt)("h2",{id:"getting-the-backup-filename-from-s3"},"Getting the Backup Filename from S3"),(0,i.kt)("p",null,"This is the name of the backup file that the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator will use to perform the restore."),(0,i.kt)("p",null,"To obtain this file name from S3, go to your S3 bucket (and folder if it was specified while performing backup)."),(0,i.kt)("p",null,"Copy the filename and store it in your Restore custom resource. So assuming the name of your backup file is ",(0,i.kt)("inlineCode",{parentName:"p"},"backupfile"),","),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If your bucket name is ",(0,i.kt)("inlineCode",{parentName:"li"},"s3bucket")," and no folder was specified, then the ",(0,i.kt)("inlineCode",{parentName:"li"},"backupFilename")," to use will be ",(0,i.kt)("inlineCode",{parentName:"li"},"backupfile"),"."),(0,i.kt)("li",{parentName:"ul"},"If your bucket name is ",(0,i.kt)("inlineCode",{parentName:"li"},"s3bucket")," and the base folder is",(0,i.kt)("inlineCode",{parentName:"li"},"s3folder"),", the ",(0,i.kt)("inlineCode",{parentName:"li"},"backupFilename")," to use is only ",(0,i.kt)("inlineCode",{parentName:"li"},"backupfile")," ."),(0,i.kt)("li",{parentName:"ul"},"If there is a subfolder inside ",(0,i.kt)("inlineCode",{parentName:"li"},"s3Folder")," called ",(0,i.kt)("inlineCode",{parentName:"li"},"s3sub"),", and that has your backup file, then the ",(0,i.kt)("inlineCode",{parentName:"li"},"backupFilename")," to use is ",(0,i.kt)("inlineCode",{parentName:"li"},"s3sub/backupfile"),".")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"YAML Directive Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"backupFilename")),(0,i.kt)("td",{parentName:"tr",align:null},"This is the name of the backup file that the ",(0,i.kt)("inlineCode",{parentName:"td"},"rancher-backup")," operator will use to perform the restore.")))))}f.isMDXComponent=!0},61272:function(e,t,n){t.Z=n.p+"assets/images/default-95cca92f765567228a78287139a2c1a0.png"},11896:function(e,t,n){t.Z=n.p+"assets/images/encryption-8dfdf6319173018658b2e21a06664814.png"},23553:function(e,t,n){t.Z=n.p+"assets/images/existing-109a6b8a8171763189d2bf81535eb275.png"},41399:function(e,t,n){t.Z=n.p+"assets/images/restore-e471e6f7f7070cbd282958fb299e04d2.png"},17357:function(e,t,n){t.Z=n.p+"assets/images/s3store-35e51e0c0b4d58a3cf9c79a1014be661.png"}}]);