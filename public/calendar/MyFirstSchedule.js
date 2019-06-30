var p = MindFusion.Scheduling;

//create a new calendar instance
var calendar = new p.Calendar(document.getElementById("calendar"));

calendar.theme = "peach";




//visualize the calendar
calendar.render();//render the calendar control

//main calendar
function handleHeaderClick(sender, args)
{
	if(sender.currentView === p.CalendarView.Timetable)
	{
		sender.date = sender.timetableSettings.dates.items()[0];
		sender.currentView = p.CalendarView.SingleMonth;
	}
}

function handleSelection(sender, args)
{
	if(sender.currentView === p.CalendarView.SingleMonth)
	{
		//cancel the default behavior
		args.cancel = true;
		
		var start = args.startTime;
		var end = args.endTime;
		
		//clear all dates from the timetable
		sender.timetableSettings.dates.clear();
		
		while(start < end)
		{
			sender.timetableSettings.dates.add(start);
			start = p.DateTime.addDays(start, 1);
			
		}
		
		sender.currentView = p.CalendarView.Timetable;
	}
}

//이건 뭐지 the schedule 추가한거!
var date = p.DateTime.today();
// create a new item
var item = new p.Item();
item.subject = "Birthday Celebration";   
item.startTime = date;
item.endTime = p.DateTime.addDays(date.clone(),1);
item.allDayEvent = true;
item.location = getLocation(item.subject);

//showTooltips Property
Object.defineProperty(Calendar.prototype, "showTooltips", { value: Boolean });


//customize the appearance of items
calendar.itemSettings.showCues = true;
calendar.itemSettings.showContinuationArrows = true;
calendar.itemSettings.size = 100;

//event 반복될 경우에 반복하는 기능
var recurrence = new p.Recurrence();
recurrence.pattern = p.RecurrencePattern.Yearly;
recurrence.yearly = p.YearlyRecurrence.SpecificDate;
recurrence.startDate = date;
recurrence.recurrenceEnd = p.RecurrenceEnd.Never;
item.recurrence = recurrence;


//built-in
calendar.itemDoubleClick.addEventListener(handleItemDoubleClick);
function handleItemDoubleClick(sender, args)
{
 // create and show the custom form
 var form = new CustomForm(sender, args.item, "edit");
 form.showForm();
}
