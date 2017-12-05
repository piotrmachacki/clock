function setTime() {
	const now = new Date();

	const GMT = 2;

	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getUTCHours() + GMT;

	const secondsDegrees = 360 / 60 * seconds;
	const minutesDegrees = 360 / 60 * minutes + 360 / 60 / 60 * seconds;
	const hoursDegrees = 360 / 12 * hours + 360 / 12 / 60 * minutes;

	var secondsHand = document.querySelector('.seconds-hand');
	secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

	var minutesHand = document.querySelector('.minutes-hand');
	minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
	
	var hoursHand = document.querySelector('.hours-hand');
	hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setTime, 1000);