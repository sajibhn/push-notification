self.addEventListener('push', e => {
	const data = e.data.json();
	self.registration.showNotification(data.title, {
		body: 'Notified by Web Push',
		icon: 'http://image.ibb.co/frYOFd/tmlogo.png'
	});
});