/*                 */
/*    Constants    */
/*                 */

const time = document.getElementById('time')
const day = document.getElementById('day')


/*                 */
/*    Functions    */
/*                 */

const init_clock = async () => {
	let
		date = new Date(),
		time_hour = date.getHours(),
		time_minute = date.getMinutes(),
		time_second = date.getSeconds(),

		t = setInterval(init_clock, 1000)


	time.innerHTML = `${(time_hour < 10) ? ('0' + time_hour) : (time_hour)}`
	+ `:${(time_minute < 10) ? ('0' + time_minute) : (time_minute)}`
	+ `:${(time_second < 10) ? ('0' + time_second) : (time_second)} `
	+ `${(time_hour >= 12) ? ('PM') : ('AM')}`
}

const init_day = async () => {
	let date = new Date()

	switch (date.getDay())
	{
		case 1:
			day.innerHTML = 'Monday'
			break

		case 2:
			day.innerHTML = 'Tuesday'
			break

		case 3:
			day.innerHTML = 'Wednesday'
			break

		case 4:
			day.innerHTML = 'Thursday'
			break

		case 5:
			day.innerHTML = 'Friday'
			break

		case 6:
			day.innerHTML = 'Saturday'
			break

		default:
			day.innerHTML = 'Sunday'
			break
	}
}

init_clock()
init_day()
