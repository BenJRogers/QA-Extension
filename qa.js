function ready(fn) {
	if (document.readyState != 'loading') {
		fn();
	} else if (document.addEventListener) {
		document.addEventListener('DOMContentLoaded', fn);
	} else {
		document.attachEvent('onreadystatechange', function () {
			if (document.readyState != 'loading')
				fn();
		});
	}
}

ready(function () {
	function enterQA() {
		chrome.tabs.executeScript({
			file: 'enterQa.js'
		});
	}

	function exitQa() {
		chrome.tabs.executeScript({
			file: 'exitQa.js'
		});
	}

	document.querySelector(".qa-enter").addEventListener('click', enterQA);
	document.querySelector(".qa-exit").addEventListener('click', exitQa);
});