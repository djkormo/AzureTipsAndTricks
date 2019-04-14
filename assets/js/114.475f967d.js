(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{418:function(t,e,a){"use strict";a.r(e);var s=a(43),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h4",{attrs:{id:"intro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intro","aria-hidden":"true"}},[t._v("#")]),t._v(" Intro")]),t._v(" "),a("p",[t._v("We've recently created a "),a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks19/",target:"_blank",rel:"noopener noreferrer"}},[t._v("web app"),a("OutboundLink")],1),t._v(" and uploaded it to Azure App Service. We also took a look at "),a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks20/",target:"_blank",rel:"noopener noreferrer"}},[t._v("multiple ways"),a("OutboundLink")],1),t._v(" to examine those files through the Azure portal interface and how we'd add "),a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks21/",target:"_blank",rel:"noopener noreferrer"}},[t._v("extensions"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks22/",target:"_blank",rel:"noopener noreferrer"}},[t._v("deployment slots"),a("OutboundLink")],1),t._v(" for our web app. We also took a look at a feature called "),a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks23/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Testing in Production"),a("OutboundLink")],1),t._v(" which allows us to distribute traffic between our production and other slots. In this post, we'll look at adding additional logic by using PowerShell to automatically distribute the load between your Production and deployment slot sites with the Testing in Production feature.")]),t._v(" "),a("h4",{attrs:{id:"install-the-powershell-azure-cli-first"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-powershell-azure-cli-first","aria-hidden":"true"}},[t._v("#")]),t._v(" Install the PowerShell Azure CLI first")]),t._v(" "),a("p",[a("strong",[t._v("Hold up!")]),t._v(" You'll want to take a look at the "),a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks22/",target:"_blank",rel:"noopener noreferrer"}},[t._v("deployment slots"),a("OutboundLink")],1),t._v(" and the "),a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks23/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Testing in Production"),a("OutboundLink")],1),t._v(" post to have context on what we're going to do here.")]),t._v(" "),a("p",[t._v("Go to the "),a("a",{attrs:{href:"https://azure.github.io/projects/clis/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure CLI Projects page"),a("OutboundLink")],1),t._v(" and select select the WebPI Installer  or use the PowerShell gallery to bring together the power of Windows PowerShell and Azure.")]),t._v(" "),a("p",[t._v("Once it has been setup, type "),a("code",[t._v("az")]),t._v(" from your PowerShell Window to see the shiny new way to interact with Azure.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/powershellcli1.png")}}),t._v(" "),a("h4",{attrs:{id:"powershell-azure-app-service-your-web-app-win"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#powershell-azure-app-service-your-web-app-win","aria-hidden":"true"}},[t._v("#")]),t._v(" PowerShell + Azure App Service + Your Web App = Win")]),t._v(" "),a("p",[t._v("Keep in mine that we "),a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks23/",target:"_blank",rel:"noopener noreferrer"}},[t._v("left off"),a("OutboundLink")],1),t._v(" with  two versions of our site. One that is "),a("code",[t._v("production")]),t._v(" and "),a("code",[t._v("staging")]),t._v(". They are identical except for the staging site has a large font that says "),a("code",[t._v("jsQuizEngine version 2")]),t._v(". We just "),a("strong",[t._v("distributed")]),t._v(" traffic manually between the two sites by going into the Azure Portal and changing this value from the Testing in Production blade.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/testinprodazure7.png")}}),t._v(" "),a("p",[t._v("But what if we would like to generate rules to do this automatically where someone doesn't have to be inside the Portal manually changing this number?")]),t._v(" "),a("p",[t._v("That is where PowerShell and the Azure CLI comes to the rescue. The CLI is great for automation of tasks such as this one. Begin by opening PowerShell and logging in with "),a("code",[t._v("Add-AzureAccount")]),t._v(". It will ask to authenticate you.  After authenticated, then set the proper subscription by using "),a("code",[t._v('Select-AzureSubscription -Default -SubscriptionName "whatsubscriptionnameyouwanttouse"')]),t._v(". Now run the following script editing only the "),a("code",[t._v("siteName")]),t._v(" parameter to match whatever you called your app.")]),t._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$siteName")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyQuizApplication"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rulesList")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("TypeName System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Generic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("List"),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[Microsoft.WindowsAzure.Commands.Utilities.Websites.Services.WebEntities.RampUpRule]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("TypeName Microsoft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WindowsAzure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Commands"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Utilities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Websites"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebEntities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RampUpRule\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stage"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ActionHostName = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$siteName")]),t._v('-staging.azurewebsites.net"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReroutePercentage = 90\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rulesList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzureWebsite "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RoutingRules "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rulesList")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Name "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$siteName")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Slot production\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("If you open the Azure Portal and navigate to your site page and then "),a("code",[t._v("Testing in Production")]),t._v(" then you'll see the percentage is automatically updated to 90% after the command runs.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/powershellcli2.gif")}}),t._v(" "),a("p",[a("strong",[t._v("What did the script do again?")]),t._v(" This script added a rule for our staging environment that set the "),a("code",[t._v("staging")]),t._v(" route to a hard coded value of "),a("code",[t._v("90%")]),t._v(".")]),t._v(" "),a("p",[t._v("If you wanted to scale this number up, for instance, start at 5% for 60 minutes and then increase the value by 5% until the traffic reaches 50% for that slot. You could do so with this script.")]),t._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$siteName")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyQuizApplication"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule1")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-Object")]),t._v(" Microsoft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WindowsAzure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Commands"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Utilities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Websites"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebEntities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RampUpRule\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ActionHostName = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$siteName")]),t._v('-staging.azurewebsites.net"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReroutePercentage = 5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stage"')]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChangeIntervalInMinutes = 60"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChangeStep = 5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MinReroutePercentage = 5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MaxReroutePercentage = 50"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChangeDecisionCallbackUrl = "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$null")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzureWebsite "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$siteName")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Slot Production "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RoutingRules "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule1")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[t._v("Notice that we only changed 5 lines here to get that functionality.")])])},[],!1,null,null,null);e.default=n.exports}}]);