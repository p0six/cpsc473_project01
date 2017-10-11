// "this" object has properties of a given row. "query" object can pull query parameters. 
var queryStart = query.from; var queryEnd = query.to;
if (queryStart !== undefined && queryEnd !== undefined) {
    console.log('Calendar Entries Start: ' + new Date(queryStart).toLocaleString());
    console.log('Calendar Entries End: ' + new Date(queryEnd).toLocaleString());
    if ( !(((this.end + this.start)/2) >= queryStart && ((this.end + this.start)/2) <= queryEnd) ) {
        console.log('Event ID ' + this.id + ' falls outside our date range.');
        cancel();
    }
} else {
    console.log('Date parameters are NOT set. Displaying all events.');
}