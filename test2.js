(function(){$(function(){var o,t,i;return t=$("#logOnForm").attr("action"),$("#loginWithTwitter").click(function(){return o("/ui/oauth/socialProviderLogin",700,800)}),$("#loginWithFacebook").click(function(){return o("/ui/oauth/socialProviderLogin?network=FACEBOOK",900,600)}),$("#loginWithLinkedIn").click(function(){return o("/ui/oauth/socialProviderLogin?network=LINKEDIN",450,550)}),$("#loginWithGoogle").click(function(){return o("/ui/oauth/socialProviderLogin?network=GOOGLE",870,600)}),$("#loginWithApple").click(function(){return o("/ui/oauth/socialProviderLogin?network=APPLE",870,600)}),o=function(o,t,n){return $("#logOnForm").attr("action",o),window.name||(window.name=document.URL),window.open("about:blank","twitterWindow","toolbar=0, scrollbars=0, location=0, statusbar=0, menubar=0, resizable=1, width="+t+", height="+n+", left=40, top=40"),$("#logOnForm").attr("target","twitterWindow"),$("#logOnForm").submit(),window.setTimeout(i,500)},i=function(){return $("#logOnForm").attr("action",t),$("#logOnForm").removeAttr("target")}})}).call(this);