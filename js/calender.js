var TodayDate = persianDate();
var DayS = "Day";
var MonthS = "Month";
var TrueM = "TrueM";

var SelectedYear = TodayDate.pDate.year;
var SelectedMonth = TodayDate.pDate.month;
var CalendarStatus = "Day";
var Monthtitle = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
function StartDayOfMonth(Year, Month) {
    var ThisDate = persianDate([Year, Month, 1, 08, 00]);
    return ThisDate.pDate.day;
}
function ChangePosition(DatePosition, VStatus, Variable) {
    $("#CalendarData").empty();
    if (DatePosition == "Day") {
        if (VStatus == "false") {
            $("#DayTitle").empty();
            var $element1 =
                "<div class='pull-right text-center tableDataTh'>شنبه</div>" +
                "<div class='pull-right text-center tableDataTh'>یکشنبه</div>" +
                "<div class='pull-right text-center tableDataTh'>دوشنبه</div>" +
                "<div class='pull-right text-center tableDataTh'>سه شنبه</div>" +
                "<div class='pull-right text-center tableDataTh'>چهار شنبه</div>" +
                "<div class='pull-right text-center tableDataTh'>پنج شنبه</div>" +
                "<div class='pull-right text-center tableDataTh'>جمعه</div>";
            $("#DayTitle").append($element1);
            DateGenerator();
        }
        else {
            var DateS = $(Variable);
            var Name = DateS.attr("id").toString();
            var s = Name.split("-");
            SelectedMonth = parseInt(s[1]);
            SelectedYear = parseInt(s[2]);
            ChangePosition("Day", "false");
        }
    }
    else if (DatePosition == "Month") {
        if (VStatus == "TrueM") {
            var DateS = $(Variable);
            var Name = DateS.attr("id").toString();
            var s = Name.split("-");
            SelectedYear = parseInt(s[1]);
        }
        $("#DayTitle").empty();
        MonthGenerator();
    }
    else if (DatePosition == "Year") {
        $("#DayTitle").empty();
        YearGenerator();
    }
    else if (DatePosition == "Today") {
        DatePosition = "Day";
        SelectedYear = TodayDate.pDate.year;
        SelectedMonth = TodayDate.pDate.month;
        ChangePosition("Day", "false", "");
    }
    CalendarStatus = DatePosition;
}

function DateGenerator() {
    $("#CalendarData").empty();
    var MonthLenght = 30;
    var YearStatus = false;
    var kabise = ((SelectedYear + 38) * 31) % 128;
    if (kabise < 31) {
        YearStatus = true;
    }
    if (SelectedMonth >= 1 && SelectedMonth < 7) {
        MonthLenght = 31;
    }
    else if (SelectedMonth >= 7 && SelectedMonth < 12) {
        MonthLenght = 30;
    }
    else if (SelectedMonth == 12) {
        if (YearStatus) {
            MonthLenght = 30;
        }
        else {
            MonthLenght = 29;
        }
    }
    var StartDay = StartDayOfMonth(SelectedYear, SelectedMonth);
    var TodayDate = persianDate();
    var TodayYear = TodayDate.pDate.year;
    var TodayMonth = TodayDate.pDate.month;
    var TodayDay = TodayDate.pDate.date;

    for (var i = 1; i < StartDay; i++) {
        var $element1 =
            "<div class='pull-right text-center tableDataTd'>" +
            "<span class='SecondaryColor text-center bold pull-left' style='padding-left: 10px'></span></div>";
        $("#CalendarData").append($element1);
    }
    for (var i = 1; i <= MonthLenght; i++) {
        if (i < 10) {
            if (TodayYear == SelectedYear && TodayMonth == SelectedMonth && TodayDay == i) {
                var $element1 =
                    "<div " +
                    'id=Date-' + i.toString() + '-' + SelectedMonth.toString() + '-' + SelectedYear.toString() +

                    " class='pull-right TodayStyle text-center tableDataTd'>" +
                    "<i onclick='CreateNewEvent(this)' class='fa fa-plus-circle SecondaryColor' style='font-size: 22px;cursor: pointer' aria-hidden='true'></i>" +
                    "<span class='SecondaryColor text-center bold pull-left' style='padding-left: 10px'> 0" +
                    i +
                    "</span>" +
                    "<div " +
                    'id=DateDetail-' + i.toString() + '-' + SelectedMonth.toString() + '-' + SelectedYear.toString() +

                    " class='DateDetail pull-left'></div>" +
                    "</div>";
            }
            else {
                var $element1 =
                    "<div " +
                    'id=Date-' + i.toString() + '-' + SelectedMonth.toString() + '-' + SelectedYear.toString() +

                    " class='pull-right text-center tableDataTd'>" +
                    "<i onclick='CreateNewEvent(this)' class='fa fa-plus-circle SecondaryColor' style='font-size: 22px;cursor: pointer' aria-hidden='true'></i>" +
                    "<span class='SecondaryColor text-center bold pull-left' style='padding-left: 10px'> 0" +
                    i +
                    "</span>" +
                    "<div " +
                    'id=DateDetail-' + i.toString() + '-' + SelectedMonth.toString() + '-' + SelectedYear.toString() +

                    " class='DateDetail pull-left'></div>" +
                    "</div>";

            }
        }
        else {
            if (TodayYear == SelectedYear && TodayMonth == SelectedMonth && TodayDay == i) {
                var $element1 =
                    "<div " +
                    'id=Date-' + i.toString() + '-' + SelectedMonth.toString() + '-' + SelectedYear.toString() +

                    " class='pull-right TodayStyle text-center tableDataTd'>" +
                    "<i onclick='CreateNewEvent(this)' class='fa fa-plus-circle SecondaryColor' style='font-size: 22px;cursor: pointer' aria-hidden='true'></i>" +
                    "<span class='SecondaryColor text-center bold pull-left' style='padding-left: 10px'>" +
                    i +
                    "</span>" +
                    "<div " +
                    'id=DateDetail-' + i.toString() + '-' + SelectedMonth.toString() + '-' + SelectedYear.toString() +

                    " class='DateDetail pull-left'></div>" +
                    "</div>";
            }
            else {
                var $element1 =
                    "<div " +
                    'id=Date-' + i.toString() + '-' + SelectedMonth.toString() + '-' + SelectedYear.toString() +

                    " class='pull-right text-center tableDataTd'>" +
                    "<i onclick='CreateNewEvent(this)' class='fa fa-plus-circle SecondaryColor' style='font-size: 22px;cursor: pointer' aria-hidden='true'></i>" +
                    "<span class='SecondaryColor text-center bold pull-left' style='padding-left: 10px'>" +
                    i +
                    "</span>" +
                    "<div " +
                    'id=DateDetail-' + i.toString() + '-' + SelectedMonth.toString() + '-' + SelectedYear.toString() +

                    " class='DateDetail pull-left'></div>" +
                    "</div>";
            }
        }
        $("#CalendarData").append($element1);
    }
    GenerateTitle();
    importMonthData();
}
function MonthGenerator() {
    var TodayDate = persianDate();
    var TodayYear = TodayDate.pDate.year;
    var TodayMonth = TodayDate.pDate.month;
    $("#CalendarTitle").html("سال " + SelectedYear);
    $("#CalendarData").empty();
    for (var i = 0; i < 12; i++) {
        if (TodayYear == SelectedYear && TodayMonth == i + 1) {
            var $element1 =
                "<div " +
                'id=Month-' + (i + 1).toString() + '-' + SelectedYear +
                " onclick='ChangePosition(DayS,TrueM,this)' class='pull-right text-center TodayStyle tableDataTd TableMonth pointer'>" +
                "<span class='SecondaryColor text-center bold pull-right' style='padding-left: 10px'>" +
                Monthtitle[i] +
                "</span>" +
                "<i class='fa fa-plus-circle SecondaryColor pull-left' style='font-size: 22px;cursor: pointer' aria-hidden='true'></i>" +
                "</div>";
        }
        else {
            var $element1 =
                "<div " +
                'id=Month-' + (i + 1).toString() + '-' + SelectedYear +
                " onclick='ChangePosition(DayS,TrueM,this)' class='pull-right text-center tableDataTd TableMonth pointer'>" +
                "<span class='SecondaryColor text-center bold pull-right' style='padding-left: 10px'>" +
                Monthtitle[i] +
                "</span>" +
                "<i class='fa fa-plus-circle SecondaryColor pull-left' style='font-size: 22px;cursor: pointer' aria-hidden='true'></i>" +
                "</div>";
        }

        $("#CalendarData").append($element1);
    }
}
function YearGenerator() {
    var TodayDate = persianDate();
    var TodayYear = TodayDate.pDate.year;
    $("#CalendarTitle").html((SelectedYear + 27) + "-" + (SelectedYear));
    $("#CalendarData").empty();
    for (var i = 0; i < 28; i++) {
        if (TodayYear == SelectedYear + i) {
            var $element1 =
                "<div " +
                'id=Year-' + (SelectedYear + i).toString() +
                " onclick='ChangePosition(MonthS,TrueM,this);' class='pull-right TodayStyle text-center tableDataTd pointer'>" +
                "<i class='fa fa-plus-circle SecondaryColor' style='font-size: 22px;cursor: pointer' aria-hidden='true'></i>" +
                "<span class='SecondaryColor text-center bold pull-left' style='padding-left: 10px'>" +
                (SelectedYear + i).toString() +
                "</span>" +
                "</div>";
        }
        else {
            var $element1 =
                "<div " +
                'id=Year-' + (SelectedYear + i).toString() +
                " onclick='ChangePosition(MonthS,TrueM,this);' class='pull-right text-center tableDataTd pointer'>" +
                "<i class='fa fa-plus-circle SecondaryColor' style='font-size: 22px;cursor: pointer' aria-hidden='true'></i>" +
                "<span class='SecondaryColor text-center bold pull-left' style='padding-left: 10px'>" +
                (SelectedYear + i).toString() +
                "</span>" +
                "</div>";
        }
        $("#CalendarData").append($element1);
    }
}

function NextCalendar() {
    $("#CalendarData").empty();
    if (CalendarStatus == "Day") {
        if (SelectedMonth == 12) {
            SelectedMonth = 1;
            SelectedYear += 1;
        }
        else {
            SelectedMonth += 1;
        }
        DateGenerator();
    }
    else if (CalendarStatus == "Month") {
        SelectedYear += 1;
        MonthGenerator();
    }
    else if (CalendarStatus == "Year") {
        SelectedYear += 27;
        YearGenerator();
    }
}
function BackCalendar() {
    $("#CalendarData").empty();
    if (CalendarStatus == "Day") {
        if (SelectedMonth == 1) {
            SelectedMonth = 12;
            SelectedYear -= 1;
        }
        else {
            SelectedMonth -= 1;
        }
        DateGenerator();
    }
    else if (CalendarStatus == "Month") {
        SelectedYear -= 1;
        MonthGenerator();
    }
    else if (CalendarStatus == "Year") {
        SelectedYear -= 27;
        YearGenerator();
    }
}
function GenerateTitle() {
    switch (SelectedMonth) {
        case 1:
            $("#CalendarTitle").html("فروردین " + SelectedYear);
            break;
        case 2:
            $("#CalendarTitle").html("اردیبهشت " + SelectedYear);
            break;
        case 3:
            $("#CalendarTitle").html("خرداد " + SelectedYear);
            break;
        case 4:
            $("#CalendarTitle").html("تیر " + SelectedYear);
            break;
        case 5:
            $("#CalendarTitle").html("مرداد " + SelectedYear);
            break;
        case 6:
            $("#CalendarTitle").html("شهریور " + SelectedYear);
            break;
        case 7:
            $("#CalendarTitle").html("مهر " + SelectedYear);
            break;
        case 8:
            $("#CalendarTitle").html("آبان " + SelectedYear);
            break;
        case 9:
            $("#CalendarTitle").html("آذر " + SelectedYear);
            break;
        case 10:
            $("#CalendarTitle").html("دی " + SelectedYear);
            break;
        case 11:
            $("#CalendarTitle").html("بهمن " + SelectedYear);
            break;
        case 12:
            $("#CalendarTitle").html("اسفند " + SelectedYear);
            break;

    }
}
function importMonthData() {
    var FData = fetchData(SelectedMonth, SelectedYear);
    var NumberOfMonthData = FData.length;
    for (var i = 0; i < NumberOfMonthData; i++) {
        var NumberOfDayData = FData[i].length;
        var id = "DateDetail-" + FData[i][0];
        var j = 1;
        while (j < NumberOfDayData) {
            var $element1 = "<div onclick='importDayData(this)' id='Event-" + ((NumberOfDayData - 1) / 2) + "-" + i.toString() + "-" + +j.toString() + "' data-type='" +
                FData[i][j].toString() +
                "' data-value='" +
                FData[i][j + 1].toString() +
                "' class='EventView' style='background-color: #" +
                hashCode(FData[i][j].toString()) +
                "'></div>";
            $("#" + id).append($element1);
            j += 2;
        }
    }
}
function hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash.toString().substring(2, 8);
}
function importDayData(element) {
    $("#DateContent").remove();
    var $element = "<div id='DateContent' class='bold DataDetailValue'>" +
        "<h5 class='bold text-center' style='color: #" +
        hashCode($(element).data("type").toString()) +
        "'>" +
        $(element).data("type") +
        "</h5>"+
    $(element).data("value");
    "</div>"
    var elm = $(element).parent();
    elm.append($element);
}
$(function () {
    ChangePosition("Day", "false", "");
})

function fetchData(SMonth, SYear) {
    var Data = [['1-9-1395', 'قند خون', 'قرص قند راس ساعت 5 بعد از ظهر خورده شود.', 'فشار خون', 'Value2', 'تست ورزش', 'Value3'], ['10-9-1395', 'قند خون', 'Value1'], ['15-9-1395', 'کتاب', 'Value1', 'فشار خون', 'Value2', 'ورزش', 'Value3']];
    return Data;
}

function CreateNewEvent(elm) {
    var element1=$(elm);
    var element2= element1.parent().attr("id");
    var Date=element2.split("-");
    $(".Selected_Date").val(Date[3]+"-"+Date[2]+"-"+Date[1]);
    $("#CalendarPopup").fadeIn(400)

}