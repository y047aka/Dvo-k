(function(Aa){function L(a,b,c){c.a=a;c.f=b;return c}function l(a){return L(2,a,function(b){return function(c){return a(b,c)}})}function w(a){return L(3,a,function(b){return function(c){return function(d){return a(b,c,d)}}})}function H(a){return L(4,a,function(b){return function(c){return function(d){return function(e){return a(b,c,d,e)}}}})}function ba(a){return L(5,a,function(b){return function(c){return function(d){return function(e){return function(f){return a(b,c,d,e,f)}}}}})}function ja(a){return L(6,
a,function(b){return function(c){return function(d){return function(e){return function(f){return function(g){return a(b,c,d,e,f,g)}}}}}})}function bb(a){return L(7,a,function(b){return function(c){return function(d){return function(e){return function(f){return function(g){return function(m){return a(b,c,d,e,f,g,m)}}}}}}})}function cb(a){return L(8,a,function(b){return function(c){return function(d){return function(e){return function(f){return function(g){return function(m){return function(p){return a(b,
c,d,e,f,g,m,p)}}}}}}}})}function db(a){return L(9,a,function(b){return function(c){return function(d){return function(e){return function(f){return function(g){return function(m){return function(p){return function(n){return a(b,c,d,e,f,g,m,p,n)}}}}}}}}})}function k(a,b,c){return 2===a.a?a.f(b,c):a(b)(c)}function u(a,b,c,d){return 3===a.a?a.f(b,c,d):a(b)(c)(d)}function I(a,b,c,d,e){return 4===a.a?a.f(b,c,d,e):a(b)(c)(d)(e)}function ca(a,b,c,d,e,f){return 5===a.a?a.f(b,c,d,e,f):a(b)(c)(d)(e)(f)}function Ba(a,
b,c,d,e,f,g){return 6===a.a?a.f(b,c,d,e,f,g):a(b)(c)(d)(e)(f)(g)}function ka(a,b){var c,d=[];for(a=Ca(a,b,0,d);a&&(c=d.pop());a=Ca(c.a,c.b,0,d));return a}function Ca(a,b,c,d){if(100<c)return d.push(h(a,b)),!0;if(a===b)return!0;if("object"!==typeof a||null===a||null===b)return"function"===typeof a&&da(5),!1;0>a.$&&(a=eb(a),b=eb(b));for(var e in a)if(!Ca(a[e],b[e],c+1,d))return!1;return!0}function C(a,b,c){if("object"!==typeof a)return a===b?0:a<b?-1:1;if("undefined"===typeof a.$)return(c=C(a.a,b.a))?
c:(c=C(a.b,b.b))?c:C(a.c,b.c);for(;a.b&&b.b&&!(c=C(a.a,b.a));a=a.b,b=b.b);return c||(a.b?1:b.b?-1:0)}function h(a,b){return{a,b}}function J(a,b){return{$:1,a,b}}function t(a){for(var b=v,c=a.length;c--;)b=J(a[c],b);return b}function Da(a){for(var b=[];a.b;a=a.b)b.push(a.a);return b}function da(a){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+a+".md");}function M(a,b){return{$:9,f:a,g:b}}function D(a,b){switch(a.$){case 2:return a.b(b);case 5:return null===b?{$:0,a:a.c}:N("null",b);case 3:return la(b)?
fb(a.b,b,t):N("a LIST",b);case 4:return la(b)?fb(a.b,b,Tb):N("an ARRAY",b);case 6:var c=a.d;if("object"!==typeof b||null===b||!(c in b))return N("an OBJECT with a field named `"+c+"`",b);var d=D(a.b,b[c]);return d.$?{$:1,a:k(gb,c,d.a)}:d;case 7:c=a.e;if(!la(b))return N("an ARRAY",b);if(c>=b.length)return N("a LONGER array. Need index "+c+" but only see "+b.length+" entries",b);d=D(a.b,b[c]);return d.$?{$:1,a:k(hb,c,d.a)}:d;case 8:if("object"!==typeof b||null===b||la(b))return N("an OBJECT",b);c=v;
for(var e in b)if(b.hasOwnProperty(e)){d=D(a.b,b[e]);if(d.$)return{$:1,a:k(gb,e,d.a)};c=J(h(e,d.a),c)}return{$:0,a:O(c)};case 9:c=a.f;a=a.g;for(e=0;e<a.length;e++){d=D(a[e],b);if(d.$)return d;c=c(d.a)}return{$:0,a:c};case 10:return d=D(a.b,b),d.$?d:D(a.h(d.a),b);case 11:c=v;for(a=a.g;a.b;a=a.b){d=D(a.a,b);if(!d.$)return d;c=J(d.a,c)}return{$:1,a:{$:2,a:O(c)}};case 1:return{$:1,a:k(Ea,a.a,b)};case 0:return{$:0,a:a.a}}}function fb(a,b,c){for(var d=b.length,e=Array(d),f=0;f<d;f++){var g=D(a,b[f]);if(g.$)return{$:1,
a:k(hb,f,g.a)};e[f]=g.a}return{$:0,a:c(e)}}function la(a){return Array.isArray(a)||"undefined"!==typeof FileList&&a instanceof FileList}function Tb(a){return k(Ub,a.length,function(b){return a[b]})}function N(a,b){return{$:1,a:k(Ea,"Expecting "+a,b)}}function V(a,b){if(a===b)return!0;if(a.$!==b.$)return!1;switch(a.$){case 0:case 1:return a.a===b.a;case 2:return a.b===b.b;case 5:return a.c===b.c;case 3:case 4:case 8:return V(a.b,b.b);case 6:return a.d===b.d&&V(a.b,b.b);case 7:return a.e===b.e&&V(a.b,
b.b);case 9:return a.f===b.f&&ib(a.g,b.g);case 10:return a.h===b.h&&V(a.b,b.b);case 11:return ib(a.g,b.g)}}function ib(a,b){var c=a.length;if(c!==b.length)return!1;for(var d=0;d<c;d++)if(!V(a[d],b[d]))return!1;return!0}function K(a){return{$:2,b:a,c:null}}function Fa(a){a={$:0,e:Vb++,f:a,g:null,h:[]};ma(a);return a}function jb(a){return K(function(b){b({$:0,a:Fa(a)})})}function ma(a){kb.push(a);if(!Ga){for(Ga=!0;a=kb.shift();)Wb(a);Ga=!1}}function Wb(a){for(;a.f;){var b=a.f.$;if(0===b||1===b){for(;a.g&&
a.g.$!==b;)a.g=a.g.i;if(!a.g)break;a.f=a.g.b(a.f.a);a.g=a.g.i}else if(2===b){a.f.c=a.f.b(function(c){a.f=c;ma(a)});break}else if(5===b){if(0===a.h.length)break;a.f=a.f.b(a.h.shift())}else a.g={$:3===b?0:1,b:a.f.b,i:a.g},a.f=a.f.d}}function Ha(a,b,c,d,e,f){function g(r,x){m=k(d,r,n);q(n=m.a,x);lb(p,m.b,e(n))}var m=k(Xb,a,b?b.flags:void 0);!m.$||da(2);var p={};m=c(m.a);var n=m.a,q=f(g,n);a=Yb(p,g);lb(p,m.b,e(n));return a?{ports:a}:{}}function Yb(a,b){var c;for(c in ea){var d=ea[c];if(d.a){var e=e||
{};e[c]=d.a(c,b)}a[c]=Zb(d,b)}return e}function Zb(a,b){function c(p){return k(Ia,c,{$:5,b:function(n){var q=n.a;return 0===n.$?u(f,d,q,p):g&&m?I(e,d,q.i,q.j,p):u(e,d,g?q.i:q.j,p)}})}var d={g:b,h:void 0},e=a.c,f=a.d,g=a.e,m=a.f;return d.h=Fa(k(Ia,c,a.b))}function lb(a,b,c){var d={};na(!0,b,d,null);na(!1,c,d,null);for(var e in a)b=a[e],b.h.push({$:"fx",a:d[e]||{i:v,j:v}}),ma(b)}function na(a,b,c,d){switch(b.$){case 1:var e=b.k;d=$b(a,e,d,b.l);b=(b=c[e])||{i:v,j:v};a?b.i=J(d,b.i):b.j=J(d,b.j);c[e]=
b;break;case 2:for(e=b.m;e.b;e=e.b)na(a,e.a,c,d);break;case 3:na(a,b.o,c,{p:b.n,q:d})}}function $b(a,b,c,d){return k(a?ea[b].e:ea[b].f,function(e){for(var f=c;f;f=f.q)e=f.p(e);return e},d)}function mb(a,b){for(var c in b)c in a?"init"==c?da(6):mb(a[c],b[c]):a[c]=b[c]}function P(a,b){return{$:5,l:a,m:b,k:void 0}}function nb(a){for(var b={};a.b;a=a.b){var c=a.a,d=c.$,e=c.n;c=c.o;if("a2"===d)"className"===e?(d=b[e],b[e]=d?d+" "+c:c):b[e]=c;else{var f=b[d]||(b[d]={});"a3"===d&&"class"===e?(d=f[e],f[e]=
d?d+" "+c:c):f[e]=c}}return b}function Q(a,b){var c=a.$;if(5===c)return Q(a.k||(a.k=a.m()),b);if(0===c)return R.createTextNode(a.a);if(4===c){var d=a.k;for(c=a.j;4===d.$;)"object"!==typeof c?c=[c,d.j]:c.push(d.j),d=d.k;b={j:c,p:b};d=Q(d,b);d.elm_event_node_ref=b;return d}if(3===c)return d=a.h(a.g),Ja(d,b,a.d),d;d=a.f?R.createElementNS(a.f,a.c):R.createElement(a.c);oa&&"a"==a.c&&d.addEventListener("click",oa(d));Ja(d,b,a.d);a=a.e;for(var e=0;e<a.length;e++){var f=Q(1===c?a[e]:a[e].b,b);d.appendChild(f)}return d}
function Ja(a,b,c){for(var d in c){var e=c[d];if("a1"===d){var f=void 0,g=a.style;for(f in e)g[f]=e[f]}else if("a0"===d){f=void 0;g=a;var m=b,p=g.elmFs||(g.elmFs={});for(f in e){var n=e[f],q=p[f];if(n){if(q){if(q.q.$===n.$){q.q=n;continue}g.removeEventListener(f,q)}q=ac(m,n);g.addEventListener(f,q,Ka&&{passive:2>La(n)});p[f]=q}else g.removeEventListener(f,q),p[f]=void 0}}else if("a3"===d)for(f in f=void 0,g=a,e)m=e[f],"undefined"!==typeof m?g.setAttribute(f,m):g.removeAttribute(f);else if("a4"===
d)for(f in f=void 0,g=a,e)p=e[f],m=p.f,p=p.o,"undefined"!==typeof p?g.setAttributeNS(m,f,p):g.removeAttributeNS(m,f);else("value"!==d&&"checked"!==d||a[d]!==e)&&(a[d]=e)}}function ac(a,b){function c(d){var e=c.q,f=D(e.a,d);if(!f.$){var g=La(e),m=f.a;f=g?3>g?m.a:m.r:m;e=1==g?m.b:3==g&&m.ab;for(d=(e&&d.stopPropagation(),(2==g?m.b:3==g&&m.Z)&&d.preventDefault(),a);g=d.j;){if("function"==typeof g)f=g(f);else for(m=g.length;m--;)f=g[m](f);d=d.p}d(f,e)}}c.q=b;return c}function ob(a,b){var c=[];E(a,b,c,
0);return c}function y(a,b,c,d){b={$:b,r:c,s:d,t:void 0,u:void 0};a.push(b);return b}function E(a,b,c,d){if(a!==b){var e=a.$,f=b.$;if(e!==f)if(1===e&&2===f){e=b.e;f=e.length;for(var g=Array(f),m=0;m<f;m++)g[m]=e[m].b;b={$:1,c:b.c,d:b.d,e:g,f:b.f,b:b.b};f=1}else{y(c,0,d,b);return}switch(f){case 5:e=a.l;f=b.l;g=e.length;for(m=g===f.length;m&&g--;)m=e[g]===f[g];if(m){b.k=a.k;break}b.k=b.m();e=[];E(a.k,b.k,e,0);0<e.length&&y(c,1,d,e);break;case 4:g=a.j;e=b.j;m=!1;for(a=a.k;4===a.$;)m=!0,"object"!==typeof g?
g=[g,a.j]:g.push(a.j),a=a.k;for(f=b.k;4===f.$;)m=!0,"object"!==typeof e?e=[e,f.j]:e.push(f.j),f=f.k;if(m&&g.length!==e.length){y(c,0,d,b);break}if(m){a:{for(b=0;b<g.length;b++)if(g[b]!==e[b]){b=!1;break a}b=!0}b=!b}else b=g!==e;b&&y(c,2,d,e);E(a,f,c,d+1);break;case 0:a.a!==b.a&&y(c,3,d,b.a);break;case 1:pb(a,b,c,d,bc);break;case 2:pb(a,b,c,d,cc);break;case 3:a.h!==b.h?y(c,0,d,b):((e=Ma(a.d,b.d))&&y(c,4,d,e),(a=b.i(a.g,b.g))&&y(c,5,d,a))}}}function pb(a,b,c,d,e){if(a.c!==b.c||a.f!==b.f)y(c,0,d,b);
else{var f=Ma(a.d,b.d);f&&y(c,4,d,f);e(a,b,c,d)}}function Ma(a,b,c){var d;for(d in a)if("a1"===d||"a0"===d||"a3"===d||"a4"===d){var e=Ma(a[d],b[d]||{},d);if(e){var f=f||{};f[d]=e}}else if(d in b){e=a[d];var g=b[d];e===g&&"value"!==d&&"checked"!==d||"a0"===c&&e.$==g.$&&V(e.a,g.a)||(f=f||{},f[d]=g)}else f=f||{},f[d]=c?"a1"===c?"":"a0"===c||"a3"===c?void 0:{f:a[d].f,o:void 0}:"string"===typeof a[d]?"":null;for(var m in b)m in a||(f=f||{},f[m]=b[m]);return f}function bc(a,b,c,d){a=a.e;b=b.e;var e=a.length,
f=b.length;e>f?y(c,6,d,{v:f,i:e-f}):e<f&&y(c,7,d,{v:e,e:b});e=e<f?e:f;for(f=0;f<e;f++){var g=a[f];E(g,b[f],c,++d);d+=g.b||0}}function cc(a,b,c,d){var e=[],f={},g=[];a=a.e;b=b.e;for(var m=a.length,p=b.length,n=0,q=0,r=d;n<m&&q<p;){var x=a[n],F=b[q],W=x.a,pa=F.a,B=x.b;x=F.b;var Na=F=void 0;if(W===pa)r++,E(B,x,e,r),r+=B.b||0,n++,q++;else{var qa=a[n+1],Oa=b[q+1];if(qa){var qb=qa.a,X=qa.b;Na=pa===qb}if(Oa){var rb=Oa.a,Pa=Oa.b;F=W===rb}if(F&&Na)r++,E(B,Pa,e,r),fa(f,e,W,x,q,g),r+=B.b||0,r++,ha(f,e,W,X,r),
r+=X.b||0,n+=2,q+=2;else if(F)r++,fa(f,e,pa,x,q,g),E(B,Pa,e,r),r+=B.b||0,n+=1,q+=2;else if(Na)r++,ha(f,e,W,B,r),r+=B.b||0,r++,E(X,x,e,r),r+=X.b||0,n+=2,q+=1;else if(qa&&qb===rb)r++,ha(f,e,W,B,r),fa(f,e,pa,x,q,g),r+=B.b||0,r++,E(X,Pa,e,r),r+=X.b||0,n+=2,q+=2;else break}}for(;n<m;)r++,x=a[n],B=x.b,ha(f,e,x.a,B,r),r+=B.b||0,n++;for(;q<p;){var ra=ra||[];F=b[q];fa(f,e,F.a,F.b,void 0,ra);q++}(0<e.length||0<g.length||ra)&&y(c,8,d,{w:e,x:g,y:ra})}function fa(a,b,c,d,e,f){var g=a[c];g?1===g.c?(f.push({r:e,
A:g}),g.c=2,a=[],E(g.z,d,a,g.r),g.r=e,g.s.s={w:a,A:g}):fa(a,b,c+sb,d,e,f):(g={c:0,z:d,r:e,s:void 0},f.push({r:e,A:g}),a[c]=g)}function ha(a,b,c,d,e){var f=a[c];f?0===f.c?(f.c=2,a=[],E(d,f.z,a,e),y(b,9,e,{w:a,A:f})):ha(a,b,c+sb,d,e):(b=y(b,9,e,void 0),a[c]={c:1,z:d,r:e,s:b})}function Y(a,b,c,d,e,f,g){for(var m=c[d],p=m.r;p===e;){var n=m.$;if(1===n)n=b.k,Y(a,n,m.s,0,0,n.b,g);else if(8===n)m.t=a,m.u=g,n=m.s.w,0<n.length&&Y(a,b,n,0,e,f,g);else if(9===n){if(m.t=a,m.u=g,n=m.s)n.A.s=a,n=n.w,0<n.length&&
Y(a,b,n,0,e,f,g)}else m.t=a,m.u=g;d++;if(!(m=c[d])||(p=m.r)>f)return d}n=b.$;if(4===n){for(g=b.k;4===g.$;)g=g.k;return Y(a,g,c,d,e+1,f,a.elm_event_node_ref)}b=b.e;a=a.childNodes;for(var q=0;q<b.length;q++){e++;var r=1===n?b[q]:b[q].b,x=e+(r.b||0);if(e<=p&&p<=x&&(d=Y(a[q],r,c,d,e,x,g),!(m=c[d])||(p=m.r)>f))break;e=x}return d}function tb(a,b,c,d){if(0===c.length)return a;Y(a,b,c,0,0,b.b,d);return sa(a,c)}function sa(a,b){for(var c=0;c<b.length;c++){var d=b[c],e=d.t;d=dc(e,d);e===a&&(a=d)}return a}function dc(a,
b){switch(b.$){case 0:var c=a.parentNode;b=Q(b.s,b.u);b.elm_event_node_ref||(b.elm_event_node_ref=a.elm_event_node_ref);c&&b!==a&&c.replaceChild(b,a);return b;case 4:return Ja(a,b.u,b.s),a;case 3:return a.replaceData(0,a.length,b.s),a;case 1:return sa(a,b.s);case 2:return a.elm_event_node_ref?a.elm_event_node_ref.j=b.s:a.elm_event_node_ref={j:b.s,p:b.u},a;case 6:c=b.s;for(var d=0;d<c.i;d++)a.removeChild(a.childNodes[c.v]);return a;case 7:c=b.s;var e=c.e;d=c.v;for(c=a.childNodes[d];d<e.length;d++)a.insertBefore(Q(e[d],
b.u),c);return a;case 9:c=b.s;if(!c)return a.parentNode.removeChild(a),a;b=c.A;"undefined"!==typeof b.r&&a.parentNode.removeChild(a);b.s=sa(a,c.w);return a;case 8:c=b.s;if(d=c.y){e=R.createDocumentFragment();for(var f=0;f<d.length;f++){var g=d[f].A;g=2===g.c?g.s:Q(g.z,b.u);e.appendChild(g)}d=e}else d=void 0;a=sa(a,c.w);c=c.x;for(e=0;e<c.length;e++)f=c[e],g=f.A,g=2===g.c?g.s:Q(g.z,b.u),a.insertBefore(g,a.childNodes[f.r]);d&&a.appendChild(d);return a;case 5:return b.s(a);default:da(10)}}function Qa(a){if(3===
a.nodeType)return{$:0,a:a.textContent};if(1!==a.nodeType)return{$:0,a:""};for(var b=v,c=a.attributes,d=c.length;d--;){var e=c[d];b=J(k(ub,e.name,e.value),b)}c=a.tagName.toLowerCase();e=v;a=a.childNodes;for(d=a.length;d--;)e=J(Qa(a[d]),e);return u(S,c,b,e)}function vb(a,b){function c(){d=1===d?0:(ta(c),b(a),1)}b(a);var d=0;return function(e,f){a=e;f?(b(a),2===d&&(d=1)):(0===d&&ta(c),d=2)}}function wb(a,b){return K(function(c){ta(function(){var d=document.getElementById(a);c(d?{$:0,a:b(d)}:{$:1,a})})})}
function ec(a){return K(function(b){ta(function(){b({$:0,a:a()})})})}l(ka);l(function(a,b){return!ka(a,b)});l(function(a,b){return 0>C(a,b)});l(function(a,b){return 1>C(a,b)});l(function(a,b){return 0<C(a,b)});l(function(a,b){return 0<=C(a,b)});l(function(a,b){a=C(a,b);return 0>a?xb:a?fc:yb});l(function(a,b){if("string"===typeof a)return a+b;if(!a.b)return b;var c=J(a.a,b);a=a.b;for(var d=c;a.b;a=a.b)d=d.b=J(a.a,b);return c});var v={$:0},G=l(J),gc=w(function(a,b,c){for(var d=[];b.b&&c.b;b=b.b,c=c.b)d.push(k(a,
b.a,c.a));return t(d)});H(function(a,b,c,d){for(var e=[];b.b&&c.b&&d.b;b=b.b,c=c.b,d=d.b)e.push(u(a,b.a,c.a,d.a));return t(e)});ba(function(a,b,c,d,e){for(var f=[];b.b&&c.b&&d.b&&e.b;b=b.b,c=c.b,d=d.b,e=e.b)f.push(I(a,b.a,c.a,d.a,e.a));return t(f)});ja(function(a,b,c,d,e,f){for(var g=[];b.b&&c.b&&d.b&&e.b&&f.b;b=b.b,c=c.b,d=d.b,e=e.b,f=f.b)g.push(ca(a,b.a,c.a,d.a,e.a,f.a));return t(g)});l(function(a,b){return t(Da(b).sort(function(c,d){return C(a(c),a(d))}))});l(function(a,b){return t(Da(b).sort(function(c,
d){c=k(a,c,d);return c===yb?0:c===xb?-1:1}))});var zb=w(function(a,b,c){for(var d=Array(a),e=0;e<a;e++)d[e]=c(b+e);return d}),Ab=l(function(a,b){for(var c=Array(a),d=0;d<a&&b.b;d++)c[d]=b.a,b=b.b;c.length=d;return h(c,b)});l(function(a,b){return b[a]});w(function(a,b,c){for(var d=c.length,e=Array(d),f=0;f<d;f++)e[f]=c[f];e[a]=b;return e});l(function(a,b){for(var c=b.length,d=Array(c+1),e=0;e<c;e++)d[e]=b[e];d[c]=a;return d});w(function(a,b,c){for(var d=c.length,e=0;e<d;e++)b=k(a,c[e],b);return b});
var ua=w(function(a,b,c){for(var d=c.length-1;0<=d;d--)b=k(a,c[d],b);return b});l(function(a,b){for(var c=b.length,d=Array(c),e=0;e<c;e++)d[e]=a(b[e]);return d});w(function(a,b,c){for(var d=c.length,e=Array(d),f=0;f<d;f++)e[f]=k(a,b+f,c[f]);return e});w(function(a,b,c){return c.slice(a,b)});w(function(a,b,c){var d=b.length;a-=d;a>c.length&&(a=c.length);for(var e=Array(d+a),f=0;f<d;f++)e[f]=b[f];for(f=0;f<a;f++)e[f+d]=c[f];return e});l(function(a,b){return b});l(function(a,b){console.log(a+": <internals>");
return b});l(function(a,b){return a+b});l(function(a,b){return a-b});l(function(a,b){return a*b});l(function(a,b){return a/b});l(function(a,b){return a/b|0});l(Math.pow);l(function(a,b){return b%a});l(function(a,b){b%=a;return 0===a?da(11):0<b&&0>a||0>b&&0<a?b+a:b});l(Math.atan2);var Bb=Math.ceil,hc=Math.floor,Cb=Math.log;l(function(a,b){return a&&b});l(function(a,b){return a||b});l(function(a,b){return a!==b});l(function(a,b){return a+b});l(function(a,b){return a+b});l(function(a,b){for(var c=b.length,
d=Array(c),e=0;e<c;){var f=b.charCodeAt(e);55296<=f&&56319>=f?(d[e]=a(b[e]+b[e+1]),e+=2):(d[e]=a(b[e]),e++)}return d.join("")});l(function(a,b){for(var c=[],d=b.length,e=0;e<d;){var f=b[e],g=b.charCodeAt(e);e++;55296<=g&&56319>=g&&(f+=b[e],e++);a(f)&&c.push(f)}return c.join("")});w(function(a,b,c){for(var d=c.length,e=0;e<d;){var f=c[e],g=c.charCodeAt(e);e++;55296<=g&&56319>=g&&(f+=c[e],e++);b=k(a,f,b)}return b});w(function(a,b,c){for(var d=c.length;d--;){var e=c[d],f=c.charCodeAt(d);56320<=f&&57343>=
f&&(d--,e=c[d]+e);b=k(a,e,b)}return b});var ic=l(function(a,b){return b.split(a)}),jc=l(function(a,b){return b.join(a)}),Ra=w(function(a,b,c){return c.slice(a,b)});l(function(a,b){for(var c=b.length;c--;){var d=b[c],e=b.charCodeAt(c);56320<=e&&57343>=e&&(c--,d=b[c]+d);if(a(d))return!0}return!1});var kc=l(function(a,b){for(var c=b.length;c--;){var d=b[c],e=b.charCodeAt(c);56320<=e&&57343>=e&&(c--,d=b[c]+d);if(!a(d))return!1}return!0}),lc=l(function(a,b){return-1<b.indexOf(a)});l(function(a,b){return 0===
b.indexOf(a)});l(function(a,b){return b.length>=a.length&&b.lastIndexOf(a)===b.length-a.length});var va=l(function(a,b){var c=a.length;if(1>c)return v;for(var d=0,e=[];-1<(d=b.indexOf(a,d));)e.push(d),d+=c;return t(e)}),mc=l(function(a,b){return{$:6,d:a,b}});l(function(a,b){return{$:7,e:a,b}});l(function(a,b){return{$:10,b,h:a}});var nc=l(function(a,b){return M(a,[b])}),oc=w(function(a,b,c){return M(a,[b,c])});H(function(a,b,c,d){return M(a,[b,c,d])});ba(function(a,b,c,d,e){return M(a,[b,c,d,e])});
ja(function(a,b,c,d,e,f){return M(a,[b,c,d,e,f])});bb(function(a,b,c,d,e,f,g){return M(a,[b,c,d,e,f,g])});cb(function(a,b,c,d,e,f,g,m){return M(a,[b,c,d,e,f,g,m])});db(function(a,b,c,d,e,f,g,m,p){return M(a,[b,c,d,e,f,g,m,p])});l(function(a,b){try{var c=JSON.parse(b);return D(a,c)}catch(d){return{$:1,a:k(Ea,"This is not valid JSON! "+d.message,b)}}});var Xb=l(function(a,b){return D(a,b)}),pc=l(function(a,b){return JSON.stringify(b,null,a)+""});w(function(a,b,c){c[a]=b;return c});var Ia=l(function(a,
b){return{$:3,b:a,d:b}});l(function(a,b){return{$:4,b:a,d:b}});var Vb=0,qc=l(function(a,b){return K(function(c){a.h.push(b);ma(a);c({$:0,a:0})})}),Ga=!1,kb=[];H(function(a,b,c,d){return Ha(b,d,a.a2,a.bn,a.bj,function(){return function(){}})});var ea={},rc=l(function(a,b){return K(function(c){a.g(b);c({$:0,a:0})})});l(function(a,b){return k(qc,a.h,{$:0,a:b})});l(function(a,b){return{$:3,n:a,o:b}});l(function(a,b){return b});l(function(a,b){return function(c){return a(b(c))}});var oa,R="undefined"!==
typeof document?document:{};H(function(a,b,c,d){b=d.node;b.parentNode.replaceChild(Q(a,function(){}),b);return{}});var S=l(function(a,b){return l(function(c,d){for(var e=[],f=0;d.b;d=d.b){var g=d.a;f+=g.b||0;e.push(g)}f+=e.length;return{$:1,c:b,d:nb(c),e,f:a,b:f}})})(void 0);l(function(a,b){return l(function(c,d){for(var e=[],f=0;d.b;d=d.b){var g=d.a;f+=g.b.b||0;e.push(g)}f+=e.length;return{$:2,c:b,d:nb(c),e,f:a,b:f}})})(void 0);l(function(a,b){return{$:4,j:a,k:b,b:1+(b.b||0)}});l(function(a,b){return P([a,
b],function(){return a(b)})});w(function(a,b,c){return P([a,b,c],function(){return k(a,b,c)})});H(function(a,b,c,d){return P([a,b,c,d],function(){return u(a,b,c,d)})});ba(function(a,b,c,d,e){return P([a,b,c,d,e],function(){return I(a,b,c,d,e)})});ja(function(a,b,c,d,e,f){return P([a,b,c,d,e,f],function(){return ca(a,b,c,d,e,f)})});bb(function(a,b,c,d,e,f,g){return P([a,b,c,d,e,f,g],function(){return Ba(a,b,c,d,e,f,g)})});cb(function(a,b,c,d,e,f,g,m){return P([a,b,c,d,e,f,g,m],function(){return 7===
a.a?a.f(b,c,d,e,f,g,m):a(b)(c)(d)(e)(f)(g)(m)})});db(function(a,b,c,d,e,f,g,m,p){return P([a,b,c,d,e,f,g,m,p],function(){return 8===a.a?a.f(b,c,d,e,f,g,m,p):a(b)(c)(d)(e)(f)(g)(m)(p)})});var Db=l(function(a,b){return{$:"a0",n:a,o:b}});l(function(a,b){return{$:"a1",n:a,o:b}});var sc=l(function(a,b){return{$:"a2",n:a,o:b}}),ub=l(function(a,b){return{$:"a3",n:a,o:b}});w(function(a,b,c){return{$:"a4",n:b,o:{f:a,o:c}}});l(function(a,b){if("a0"===b.$){var c=b.n;b=b.o;var d=La(b);a={$:b.$,a:d?u(tc,3>d?uc:
vc,{$:0,a},b.a):k(Sa,a,b.a)};c=k(Db,c,a)}else c=b;return c});var uc=l(function(a,b){return h(a(b.a),b.b)}),vc=l(function(a,b){return{r:a(b.r),ab:b.ab,Z:b.Z}}),Ka;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Ka=!0}}))}catch(a){}var sb="_elmW6BL",wc=H(function(a,b,c,d){return Ha(b,d,a.a2,a.bn,a.bj,function(e,f){var g=a.bp,m=d.node,p=Qa(m);return vb(f,function(n){n=g(n);var q=ob(p,n);m=tb(m,p,q,e);p=n})})});H(function(a,b,c,d){return Ha(b,d,a.a2,a.bn,a.bj,function(e,
f){var g=a._&&a._(e),m=a.bp,p=R.title,n=R.body,q=Qa(n);return vb(f,function(r){oa=g;r=m(r);var x=S("body")(v)(r.aR),F=ob(q,x);n=tb(n,q,F,e);q=x;oa=0;p!==r.bm&&(R.title=p=r.bm)})})});var ta="undefined"!==typeof requestAnimationFrame?requestAnimationFrame:function(a){return setTimeout(a,1E3/60)};l(function(a,b){return k(Ta,Ua,K(function(){b&&history.go(b);a()}))});l(function(a,b){return k(Ta,Ua,K(function(){history.pushState({},"",b);a()}))});l(function(a,b){return k(Ta,Ua,K(function(){history.replaceState({},
"",b);a()}))});var xc={addEventListener:function(){},removeEventListener:function(){}},yc="undefined"!==typeof window?window:xc;w(function(a,b,c){return jb(K(function(d){function e(f){Fa(c(f))}a.addEventListener(b,e,Ka&&{passive:!0});return function(){a.removeEventListener(b,e)}}))});l(function(a,b){a=D(a,b);return a.$?z:{$:0,a:a.a}});l(function(a,b){return wb(b,function(c){c[a]();return 0})});l(function(a,b){return ec(function(){yc.scroll(a,b);return 0})});w(function(a,b,c){return wb(a,function(d){d.scrollLeft=
b;d.scrollTop=c;return 0})});var yb=1,fc=2,xb=0,Eb=w(function(a,b,c){for(;;){if(-2===c.$)return b;var d=c.d,e=a;b=u(a,c.b,c.c,u(Eb,a,b,c.e));a=e;c=d}}),eb=function(a){return u(Eb,w(function(b,c,d){return k(G,h(b,c),d)}),v,a)};w(function(a,b,c){var d=c.c;c=c.d;var e=l(function(f,g){return f.$?u(ua,a,g,f.a):u(ua,e,g,f.a)});return u(ua,e,u(ua,a,b,c),d)});var Ea=l(function(a,b){return{$:3,a,b}}),gb=l(function(a,b){return{$:0,a,b}}),hb=l(function(a,b){return{$:1,a,b}}),z={$:1},T=l(function(a,b){return k(jc,
a,Da(b))}),Fb=l(function(a,b){return t(k(ic,a,b))}),Va=w(function(a,b,c){for(;;)if(c.b){var d=c.b,e=a;b=k(a,c.a,b);a=e;c=d}else return b}),Gb=function(a){return u(Va,l(function(b,c){return c+1}),0,a)},zc=w(function(a,b,c){for(;;)if(1>C(a,b)){var d=b-1;c=k(G,b,c);b=d}else return c}),Ac=l(function(a,b){return u(zc,a,b,v)}),Bc=l(function(a,b){return u(gc,a,k(Ac,0,Gb(b)-1),b)}),Wa=function(a){var b=a.charCodeAt(0);return 55296<=b&&56319>=b?1024*(b-55296)+a.charCodeAt(1)-56320+65536:b},Hb=function(a){a=
Wa(a);return 97<=a&&122>=a},Ib=function(a){a=Wa(a);return 90>=a&&65<=a},Cc=function(a){var b;(b=Hb(a))||(b=Ib(a))||(a=Wa(a),b=57>=a&&48<=a);return b},O=function(a){return u(Va,G,v,a)},Ec=l(function(a,b){return"\n\n("+(a+1+") "+k(T,"\n    ",k(Fb,"\n",k(Dc,b,v))))}),Dc=l(function(a,b){a:for(;;)switch(a.$){case 0:var c=a.a;a=a.b;var d;var e=c;e=(d=e.charCodeAt(0))?{$:0,a:55296<=d&&56319>=d?h(e[0]+e[1],e.slice(2)):h(e[0],e.slice(1))}:z;1===e.$?e=!1:(d=e.a,e=d.b,d=d.a,e=(d=Hb(d)||Ib(d))&&k(kc,Cc,e));b=
k(G,e?"."+c:"['"+(c+"']"),b);continue a;case 1:c=a.a;a=a.b;c="["+(c+"]");b=k(G,c,b);continue a;case 2:if(c=a.a,c.b){if(c.b.b)return b=b.b?"The Json.Decode.oneOf at json"+k(T,"",O(b)):"Json.Decode.oneOf",b+=" failed in the following "+(Gb(c)+" ways:"),k(T,"\n\n",k(G,b,k(Bc,Ec,c)));a=c.a;continue a}else return b=b.b?" at json"+k(T,"",O(b)):"!","Ran into a Json.Decode.oneOf with no possibilities"+b;default:return c=a.a,a=a.b,b=b.b?"Problem with the value at json"+(k(T,"",O(b))+":\n\n    "):"Problem with the given value:\n\n",
b+(k(T,"\n    ",k(Fb,"\n",k(pc,4,a)))+("\n\n"+c))}}),Xa=H(function(a,b,c,d){return{$:0,a,b,c,d}}),Ya=[],Jb=l(function(a,b){return Cb(b)/Cb(a)}),Za=Bb(k(Jb,2,32)),Fc=I(Xa,0,Za,Ya,Ya);l(function(a,b){return a(b)});l(function(a,b){return b(a)});var Gc=l(function(a,b){return 0<C(a,b)?a:b}),Hc=l(function(a,b){for(;;){var c=k(Ab,32,a);a=c.b;b=k(G,{$:0,a:c.a},b);if(!a.b)return O(b)}}),Ic=function(a){return a.a},Jc=l(function(a,b){for(;;){b=Bb(b/32);if(1===b)return k(Ab,32,a).a;a=k(Hc,a,v)}}),Kc=l(function(a,
b){if(b.b){var c=32*b.b,d=hc(k(Jb,32,c-1));a=a?O(b.e):b.e;a=k(Jc,a,b.b);return I(Xa,b.d.length+c,k(Gc,5,d*Za),a,b.d)}return I(Xa,b.d.length,Za,Ya,b.d)}),Lc=ba(function(a,b,c,d,e){for(;;){if(0>b)return k(Kc,!1,{e:d,b:c/32|0,d:e});var f={$:1,a:u(zb,32,b,a)};b-=32;d=k(G,f,d)}}),Ub=l(function(a,b){if(0>=a)return Fc;var c=a%32,d=u(zb,c,a-c,b);return ca(Lc,b,a-c-32,a,v,d)}),Sa=nc,tc=oc,La=function(a){switch(a.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Kb=ja(function(a,b,c,d,e,
f){return{am:f,ap:b,aw:d,ay:c,aB:a,aC:e}}),wa=l(function(a,b){return 1>a?b:u(Ra,a,b.length,b)}),xa=l(function(a,b){return 1>a?"":u(Ra,0,a,b)}),Lb=ba(function(a,b,c,d,e){if(""===e||k(lc,"@",e))return z;var f=k(va,":",e);if(f.b){if(f.b.b)return z;f=f.a;a:{var g=k(wa,f+1,e);for(var m=0,p=g.charCodeAt(0),n=43==p||45==p?1:0,q=n;q<g.length;++q){var r=g.charCodeAt(q);if(48>r||57<r){g=z;break a}m=10*m+r-48}g=q==n?z:{$:0,a:45==p?-m:m}}return 1===g.$?z:{$:0,a:Ba(Kb,a,k(xa,f,e),g,b,c,d)}}return{$:0,a:Ba(Kb,
a,e,z,b,c,d)}}),Mb=H(function(a,b,c,d){if(""===d)return z;var e=k(va,"/",d);return e.b?(e=e.a,ca(Lb,a,k(wa,e,d),b,c,k(xa,e,d))):ca(Lb,a,"/",b,c,d)}),Nb=w(function(a,b,c){if(""===c)return z;var d=k(va,"?",c);return d.b?(d=d.a,I(Mb,a,{$:0,a:k(wa,d+1,c)},b,k(xa,d,c))):I(Mb,a,z,b,c)});l(function(a,b){if(""===b)return z;var c=k(va,"#",b);return c.b?(c=c.a,u(Nb,a,{$:0,a:k(wa,c+1,b)},k(xa,c,b))):u(Nb,a,z,b)});var Ua=function(a){for(;;);},Ob=H(function(a,b,c,d){if(d.b){var e=d.a,f=d.b;if(f.b){d=f.a;var g=
f.b;if(g.b){f=g.a;var m=g.b;return m.b?(g=m.a,m=m.b,b=500<c?u(Va,a,b,O(m)):I(Ob,a,b,c+1,m),k(a,e,k(a,d,k(a,f,k(a,g,b))))):k(a,e,k(a,d,k(a,f,b)))}return k(a,e,k(a,d,b))}return k(a,e,b)}return b}),ya=w(function(a,b,c){return I(Ob,a,b,0,c)}),U=l(function(a,b){return u(ya,l(function(c,d){return k(G,a(c),d)}),v,b)}),za=Ia,$a=l(function(a,b){return k(za,function(c){return{$:0,a:a(c)}},b)}),Mc=w(function(a,b,c){return k(za,function(d){return k(za,function(e){return{$:0,a:k(a,d,e)}},c)},b)}),Nc=function(a){return u(ya,
Mc(G),{$:0,a:v},a)},Oc=l(function(a,b){return jb(k(za,rc(a),b))}),Pc=w(function(a,b,c){return k($a,function(d){return 0},Nc(k(U,Oc(a),b)))}),Qc=w(function(a,b,c){return{$:0,a:0}}),Rc=l(function(a,b){return k($a,a,b)});ea.Task={b:{$:0,a:0},c:Pc,d:Qc,e:Rc,f:void 0};var Sc=function(a){return function(b){return{$:1,k:a,l:b}}}("Task"),Ta=l(function(a,b){return Sc(k($a,a,b))}),Tc=l(function(a,b){return{N:b,bo:a}}),ab={$:2,m:v},Uc={$:2,m:v},Vc=l(function(a,b){return h(a,b)}),Wc=l(function(a,b){if(a.$){a=
{N:a.a};var c={},d;for(d in b)c[d]=b[d];for(d in a)c[d]=a[d];return k(Vc,c,ab)}return h(b,ab)}),Xc=function(a){return{$:1,a}},Pb=l(function(a,b){return k(sc,a,b)}),A=Pb("className"),Yc=l(function(a,b){return 1>a?"":u(Ra,-a,b.length,b)}),Zc=t([h("\uff21","A"),h("\uff22","B"),h("\uff23","C"),h("\uff24","D"),h("\uff25","E"),h("\uff26","F"),h("\uff27","G"),h("\uff28","H"),h("\uff29","I"),h("\uff2a","J"),h("\uff2b","K"),h("\uff2c","L"),h("\uff2d","M"),h("\uff2e","N"),h("\uff2f","O"),h("\uff30","P"),h("\uff31",
"Q"),h("\uff32","R"),h("\uff33","S"),h("\uff34","T"),h("\uff35","U"),h("\uff36","V"),h("\uff37","W"),h("\uff38","X"),h("\uff39","Y"),h("\uff3a","Z"),h("\uff11","1"),h("\uff12","2"),h("\uff13","3"),h("\uff14","4"),h("\uff15","5"),h("\uff16","6"),h("\uff17","7"),h("\uff18","8"),h("\uff19","9"),h("\uff10","0"),h("\u3041","A"),h("\u3042","A"),h("\u3043","I"),h("\u3044","I"),h("\u3045","U"),h("\u3046","U"),h("\u3047","E"),h("\u3048","E"),h("\u3049","O"),h("\u304a","O"),h("\u304b","A"),h("\u304c","A"),
h("\u304d","I"),h("\u304e","I"),h("\u304f","U"),h("\u3050","U"),h("\u3051","E"),h("\u3052","E"),h("\u3053","O"),h("\u3054","O"),h("\u3055","A"),h("\u3056","A"),h("\u3057","I"),h("\u3058","I"),h("\u3059","U"),h("\u305a","U"),h("\u305b","E"),h("\u305c","E"),h("\u305d","O"),h("\u305e","O"),h("\u305f","A"),h("\u3060","A"),h("\u3061","I"),h("\u3062","I"),h("\u3063","U"),h("\u3064","U"),h("\u3065","U"),h("\u3066","E"),h("\u3067","E"),h("\u3068","O"),h("\u3069","O"),h("\u306a","A"),h("\u306b","I"),h("\u306c",
"U"),h("\u306d","E"),h("\u306e","O"),h("\u306f","A"),h("\u3070","A"),h("\u3071","A"),h("\u3072","I"),h("\u3073","I"),h("\u3074","I"),h("\u3075","U"),h("\u3076","U"),h("\u3077","U"),h("\u3078","E"),h("\u3079","E"),h("\u307a","E"),h("\u307b","O"),h("\u307c","O"),h("\u307d","O"),h("\u307e","A"),h("\u307f","I"),h("\u3080","U"),h("\u3081","E"),h("\u3082","O"),h("\u3083","A"),h("\u3084","A"),h("\u3085","U"),h("\u3086","U"),h("\u3087","O"),h("\u3088","O"),h("\u3089","A"),h("\u308a","I"),h("\u308b","U"),
h("\u308c","E"),h("\u308d","O"),h("\u308e","A"),h("\u308f","A"),h("\u3090","I"),h("\u3091","E"),h("\u3092","O"),h("\u3093","N"),h("\uff1b",";"),h("\u2019","'"),h("\u3001",","),h("\u3002","."),h("\u30fb","/"),h("\u2018","`"),h("\u30fc","-"),h("\uff0f","/"),h("\uff1d","="),h("\uff3c","\\"),h("\u300c","["),h("\u300d","]")]),Qb=l(function(a,b){return u(ya,l(function(c,d){return a(c)?k(G,c,d):d}),v,b)}),$c=l(function(a,b){return ka(b.a,a)}),ad=l(function(a,b){return b.$?z:{$:0,a:a(b.a)}}),Rb=function(a){return a.b},
bd=l(function(a,b){return b.$?a:b.a}),Z=S("li"),cd=l(function(a,b){return A(k(T," ",k(U,Ic,k(Qb,Rb,t([h("active",ka(b,a))])))))}),ia=l(function(a,b){return k(Z,t([k(cd,b,a)]),t([{$:0,a:b}]))}),aa=S("ul"),dd=S("main"),ed=function(a){return h(a,!0)},fd=l(function(a,b){return k(Db,a,{$:1,a:b})}),gd=l(function(a,b){return u(ya,mc,b,a)}),hd=k(gd,t(["target","value"]),{$:2,b:function(a){return"string"===typeof a?{$:0,a}:a instanceof String?{$:0,a:a+""}:N("a STRING",a)}}),Sb=S("section"),id=S("textarea"),
jd=Pb("value");(function(a){Aa.Elm?mb(Aa.Elm,a):Aa.Elm=a})({Main:{init:wc({a2:function(a){return h(k(Tc,"",""),ab)},bj:function(a){return Uc},bn:Wc,bp:function(a){var b=k(Sb,t([A("preview")]),t([k(id,t([k(ub,"rows","4"),k(fd,"input",k(Sa,ed,k(Sa,Xc,hd))),jd(a.N)]),v)])),c=t([A("keyboard")]);a=k(Yc,1,a.N).toUpperCase();var d=k(Qb,$c(a),Zc);d=k(bd,a,k(ad,Rb,d.b?{$:0,a:d.a}:z));a=t([A("rows")]);var e=t("` 1 2 3 4 5 6 7 8 9 0 [ ] delete".split(" "));var f=ia(d);e=k(aa,t([A("keys"),A("row-1")]),k(U,f,
e));e=k(Z,v,t([e]));f=t("tab ' , . P Y F G C R L / = \\".split(" "));var g=ia(d);f=k(aa,t([A("keys"),A("row-2")]),k(U,g,f));f=k(Z,v,t([f]));g=t("caps lock;A;O;E;U;I;D;H;T;N;S;-;return".split(";"));var m=ia(d);g=k(aa,t([A("keys"),A("row-3")]),k(U,m,g));g=k(Z,v,t([g]));m=t("shift ; Q J K X B M W V Z shift".split(" "));var p=ia(d);m=k(aa,t([A("keys"),A("row-4")]),k(U,p,m));m=k(Z,v,t([m]));p=t("fn;control;option;command; ;command;option;<;\u25c7;>".split(";"));d=ia(d);d=k(aa,t([A("keys"),A("row-5")]),
k(U,d,p));a=k(aa,a,t([e,f,g,m,k(Z,v,t([d]))]));return k(dd,v,t([b,k(Sb,c,t([a]))]))}})({$:0,a:0})(0)}})})(this);
