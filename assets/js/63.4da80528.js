(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{370:function(e,t,n){"use strict";n.r(t);var a=n(43),o=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h4",{attrs:{id:"underlying-software-in-azure-cloud-shell"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#underlying-software-in-azure-cloud-shell","aria-hidden":"true"}},[e._v("#")]),e._v(" Underlying Software in Azure Cloud Shell")]),e._v(" "),n("p",[e._v("When you spin up an Azure Cloud Shell, it create a container that contains things such the OS and other runtimes. By default you get Linux, Node.js and more (covered later). The storage account setup the first time you use Cloud Shell then persist data (like shell scripts, SSH keys, etc.) that you can use once you are connected to the container. It also persist things automatically such as your "),n("code",[e._v(".bash_history")]),e._v(" and stores your Azure authentication token in "),n("code",[e._v("./azure/accessTokens.json")]),e._v(".")]),e._v(" "),n("p",[e._v("With that information, let's see what is under the hood. Spin up your Azure Cloud Shell now!")]),e._v(" "),n("h4",{attrs:{id:"host-operating-system"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#host-operating-system","aria-hidden":"true"}},[e._v("#")]),e._v(" Host Operating System")]),e._v(" "),n("p",[e._v("The container that your Azure Cloud Shell instance is running in is Ubuntu Linux. You can gather additional information about the release with the following commands.")]),e._v(" "),n("p",[e._v("You can type "),n("code",[e._v("lsb_release -a")]),e._v(" to see print "),n("a",{attrs:{href:"https://refspecs.linuxfoundation.org/LSB_3.0.0/LSB-PDA/LSB-PDA/lsbrelease.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("OS level distribution information"),n("OutboundLink")],1),e._v(" that is being used.")]),e._v(" "),n("pre",[n("code",[e._v("michael@Azure:~$ lsb_release -a\nNo LSB modules are available.\nDistributor ID: Ubuntu\nDescription:    Ubuntu 16.04.2 LTS\nRelease:        16.04\nCodename:       xenial\n")])]),e._v(" "),n("p",[e._v("You can use "),n("code",[e._v("uname -a")]),e._v(" to "),n("a",{attrs:{href:"https://www.computerhope.com/unix/uuname.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("print information"),n("OutboundLink")],1),e._v(" about the current system.")]),e._v(" "),n("pre",[n("code",[e._v("michael@Azure:~$ uname -a\nLinux cc-72f9-63c154d-1351310522-4x9jr 4.4.0-93-generic #116-Ubuntu SMP Fri Aug 11 21:17:51 UTC 2017 x86_64 x86_64 x86_64 GNU/Linux\n")])]),e._v(" "),n("p",[e._v("Things like "),n("code",[e._v("arch")]),e._v(" gives you architecture information")]),e._v(" "),n("pre",[n("code",[e._v("michael@Azure:~$ arch\nx86_64\n")])]),e._v(" "),n("h4",{attrs:{id:"you-have-access-to-typical-linux-apps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#you-have-access-to-typical-linux-apps","aria-hidden":"true"}},[e._v("#")]),e._v(" You have access to typical Linux apps")]),e._v(" "),n("p",[e._v("You can type "),n("code",[e._v("man")]),e._v(" for access to the manual.")]),e._v(" "),n("pre",[n("code",[e._v("michael@Azure:~$ man\nWhat manual page do you want?\n")])]),e._v(" "),n("p",[e._v("You can pull up specific pages for help documentation such as "),n("code",[e._v("man ls")]),e._v(".")]),e._v(" "),n("p",[e._v("You have access to vim, nano and other editors.")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/azuretip15.gif")}}),e._v(" "),n("h4",{attrs:{id:"additional-software-installed-in-cloud-shell"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#additional-software-installed-in-cloud-shell","aria-hidden":"true"}},[e._v("#")]),e._v(" Additional Software Installed in Cloud Shell")]),e._v(" "),n("p",[e._v("The container also contains things like Git, Python, Node.js, .NET Core. You can test this by the following commands:")]),e._v(" "),n("pre",[n("code",[e._v("michael@Azure:~$ git --version\ngit version 2.7.4\n\nmichael@Azure:~$ python --version\nPython 3.5.2\n\nmichael@Azure:~$ nodejs -v\nv6.9.4\n\nmichael@Azure:~$ dotnet --version\n1.0.1\n")])])])},[],!1,null,null,null);t.default=o.exports}}]);