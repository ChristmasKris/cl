let cl={log:function(o,e,r,l,t,n){o=o||"Default message",l=l||"0",t=t||"10",n=n||"0";var c=[e=e||"#ffffff",r=r||"#000000"];for(let o=0;o<c.length;o++)if("#"==c[o].charAt(0)){if(!this.checkColorHex(c[o]))return!1}else if("#"!=c[o].charAt(0)&&!this.checkColorName(c[o]))return!1;let f=["background: "+e,"color: "+r,"border-radius: "+l,"font-size: "+t,"padding: "+n].join(";");console.log("%c"+o,f)},checkColorHex:function(o){if((o=o.substr(1)).length<3||5==o.length||o.length>6)return this.error('The color you entered: "'+o+'" is not a valid color.'),!1;for(let e=0;e<o.length;e++)if(-1=="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".indexOf(o.charAt(e)))return this.error('The color you entered: "'+o+'" is not a valid color.'),!1;return!0},checkColorName:function(o){let e=(new Option).style;return e.color=o,e.color==o||(this.error('The color you entered: "'+o+'" is not a valid color'),!1)},error:function(o){console.error(o)}};cl.log("CL loaded successfully","#46a049","#ffffff","4px","14px","0 7px");