javascript: (function fireMbox(mboxname, parameters) {
	var d = document.getElementById(mboxname);
	if (!d) {
		d = document.createElement('div');
		d.id = mboxname;
		document.body.appendChild(d);
	}
	mboxDefine(mboxname, mboxname);
	var mboxParameters = [mboxname];
	if (parameters && Object.keys(parameters).length) mboxParameters = mboxParameters.concat(Object.keys(parameters).map(function (k) {
		return k + '=' + parameters[k]
	}));
	mboxUpdate.apply(null, mboxParameters);
})('acc-qacam', {
	'qa-mode': true
});