// this is the code which will be injected into a given page...
var actualCode = `javascript: (function fireMbox(mboxname, parameters) { var d = document.getElementById(mboxname); if (!d) { d = document.createElement('div'); d.id = mboxname; document.body.appendChild(d); } mboxDefine(mboxname, mboxname); var mboxParameters = [mboxname]; if(parameters && Object.keys(parameters).length) mboxParameters = mboxParameters.concat(Object.keys(parameters) .map(function (k) { return k + '=' + parameters[k] })); mboxUpdate.apply(null, mboxParameters); })('acc-qacam', { 'qa-mode': false });location.reload();`;

var script = document.createElement('script');
script.textContent = actualCode;
(document.head || document.documentElement).appendChild(script);
script.remove();