const a="jt-popup-channel",e=typeof BroadcastChannel<"u"?new BroadcastChannel(a):null;function o(n){e?e.postMessage(n):console.warn("BroadcastChannel is not supported in this environment.")}function r(n){const s=t=>{n(t.data)};return e?(e.addEventListener("message",s),()=>{e.removeEventListener("message",s)}):()=>{}}export{r as l,o as p};
//# sourceMappingURL=popup-bus-D6rWwgNZ.js.map
