/**
 * Examples of working with Date and Time in JavaScript
 */

// Create a new Date object for the current date and time
const now = new Date();
console.log('Current Date and Time:', now.toString())

// Get individual components
console.log('Year:', now.getFullYear());
console.log('Month (0-based):', now.getMonth());
console.log('Date:', now.getDate());
console.log('Hours:', now.getHours());
console.log('Minutes:', now.getMinutes());
console.log('Seconds:', now.getSeconds());

// Format date as a string
console.log('Date String:', now.toDateString());
console.log('Time String:', now.toTimeString());

// Create a specific date
const birthday = new Date('2000-01-01T12:00:00');
console.log('Birthday:', birthday);

// Get timestamp (milliseconds since Jan 1, 1970)
console.log('Timestamp:', now.getTime());

// Add 7 days to current date
const future = new Date(now);
future.setDate(now.getDate() + 7);
console.log('Date after 7 days:', future);

// Compare two dates
if (now > birthday) {
    console.log('Current date is after birthday');
} else {
    console.log('Birthday is after current date');
}
console.log(now.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));