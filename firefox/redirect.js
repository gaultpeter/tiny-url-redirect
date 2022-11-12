const scriptElements = document.getElementsByTagName("script");

let redirectRegex = /window.location.href =/;
let urlRegex =
	/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

for (let script of scriptElements) {
	let isRedirectPresent = redirectRegex.test(script.innerHTML);

	if (isRedirectPresent) {
		const urls = script.innerHTML.match(urlRegex);
		const redirectUrl = urls[0];
		window.location.href = redirectUrl;
	}
}
