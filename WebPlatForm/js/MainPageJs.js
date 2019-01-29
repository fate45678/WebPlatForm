//getCountIssue();
$(document).ready(function () {
    getCountIssue();
    
    $(".tc").click(function () {
        $(this).toggleClass("active")
    });
    $(".ticketAGVG").hover(function () {
        $(this).siblings(".gameList").addClass("active");
    }, function () {
        $(".gameList").removeClass("active");
    });
    $(".gameList").hover(function () {
        $(this).addClass("active");
    }, function () {
        $(this).removeClass("active");
    });
    $(".nav-link").click(function () {
        $(this).parent(".gameList").toggleClass("active")
    });
    $(".totalBtn").click(function () {
        $(this).find("a").toggleClass("active")
    });
    $(".tigerBg div").click(function () {
        $(this).toggleClass("active")
    });
    $(".dateBtn").click(function () {
        $(".dateBtn a").removeClass("active")
        $(this).find("a").toggleClass("active");
    });
    $(".lotteryClass").click(function () {
        $(this).siblings().removeClass("active")
        $(this).toggleClass("active");
    });
    $(".changeNameIcon").click(function (event) {
        event.preventDefault();
        $(this).parent(".second").toggleClass('disappear')
        $(this).parent().next(".changeName").toggleClass('active')
    });
    $(".changeNameBtn").click(function (event) {
        event.preventDefault();
        $(this).parent(".changeName").toggleClass('active')
        $(this).parent().siblings(".second").toggleClass('disappear')
    });
    $(".getTextContent .content").hover(function(event){
        var el = this;
        var text = el.textContent; 
        var ci = document.querySelectorAll('.completeInfo');
        var ciLen = ci.length;
        $('.completeInfo').css("display","block");
        ci.textContent = text ;
        for(var i = 0; i < ciLen; i++){
                ci[i].textContent = text;
            }
        },function(){
            var el = document.querySelector('.info .getTextContent .content');
            var text = el.textContent;
            var ci = document.querySelectorAll('.completeInfo');
            var ciLen = ci.length;
            $('.completeInfo').css("display","none");
            for(var i = 0; i < ciLen; i++){
                ci[i].textContent = "";
            }
    });
    $('.completeInfo').hover(function(event){
        $(this).css("display","block");
        },function(){
        $(this).css("display","none");
    });
    $(".sup-wid").hover(function(event){
        $(this).siblings('.Allinfo').addClass("AllinfoAppear")
        var el = this;
        var text = el.textContent;
        var ci = document.querySelectorAll('.Allinfo');
        var ciLen = ci.length; 
        ci.textContent = text ;
        for(var i = 0; i < ciLen; i++){
                ci[i].textContent = text;
            }
        },function(){
        $(this).siblings('.Allinfo').removeClass("AllinfoAppear")
            var el = document.querySelectorAll('.sup-wid');
            var elLen =el.length;
            var text = el.textContent;
            var ci = document.querySelectorAll('.Allinfo');
            var ciLen = ci.length;    
    });
    $(".hoverAppear").hover(function () {
        $(".gameInstructions").toggleClass("openModal");
    });
    $(".gameList a").hover(function () {
        $(this).toggleClass("hoverbtn");
    });
    $(".Top .Up").hover(function () {
        $(this).siblings(".history").addClass("OpAppear");
    }, function () {
        $(".history").removeClass("OpAppear");
    });
    $(".history").hover(function () {
        $(this).addClass("OpAppear");
    }, function () {
        $(this).removeClass("OpAppear");
    });
    $(".download").hover(function () {
       $(this).parent(".ht37").siblings("#div_Download").toggleClass("downloadActive");
    });
    $("#div_Download").hover(function () {
        $(this).toggleClass("downloadActive");
    });
    $(".gamelist2Active").click(function () {
        $(this).parent(".personallogin").siblings(".gameList2").toggleClass("active");
    });
    $("#Div_gameList .nav-link").click(function () {
        $(this).parent().removeClass("active");
    });
    $("#Div_gameList .nav-link").click(function () {
        $(this).parent().removeClass("active");
    });
    $(".LotteryTime").click(function () {
        if ($(this).val() == "设置" && $("#hd_Delete").val() != "D") {
            $(".gameList2").addClass("active");
            $(".gameList2CloseBtn").remove("active");
        }
        else if ($(this).val() == "修改" && $("#hd_Delete").val() != "D") {
            $(".gameList2").addClass("active");
            $(".gameList2CloseBtn").remove("active");
        }
        else if ($(this).val() == "删除") {
        }
        else {
            $("#hd_Delete").val("");
        }     
    });
    $(".MyFocus").click(function () {
        $(".MyFocus1").css("display", "block");
        $(".Myticket1").css("display", "none");
        $(".TodayProfit1").css("display", "none");
        $(".TodayChange1").css("display", "none");
    });
    $(".MyTicket").click(function () {
        $(".MyFocus1").css("display", "none");
        $(".TodayProfit1").css("display", "none");
        $(".Myticket1").css("display", "block");
        $(".TodayChange1").css("display", "none");
    });
    $(".TodayProfit").click(function () {
        $(".MyFocus1").css("display", "none");
        $(".TodayProfit1").css("display", "block");
        $(".Myticket1").css("display", "none");
        $(".TodayChange1").css("display", "none");
    });
    $(".TodayChange").click(function () {
        $(".MyFocus1").css("display", "none");
        $(".TodayChange1").css("display", "block");
        $(".Myticket1").css("display", "none");
        $(".TodayProfit1").css("display", "none");
    });
    $(".navTitle").click(function () {
        event.preventDefault();
        $(".spanJsSetting").removeClass('chosed');
        $(this).find('span').addClass('chosed');
    });
    $(".clickEvent").click(function () {
        var numtxt = document.getElementById("txt");
        var num = numtxt.value;

        $(".amount").val(num);
    });
    $(".clickEventII").click(function () {
        var numtxt = document.getElementById("txt1");
        var num = numtxt.value;

        $(".amountII").val(num);
    });
    $(".clickEventIII").click(function () {
        var numtxt = document.getElementById("txt2");
        var num = numtxt.value;

        $(".amountIII").val(num);
    });
    $(".clickEventIIII").click(function () {
        var numtxt = document.getElementById("txt3");
        var num = numtxt.value;

        $(".amountIIII").val(num);
    });
    $(".gameList2closeBtn").click(function () {
        $(".gameList2").toggleClass("active");
        $(".gamelist2Active .ticketAGVGspan").text("更改");
    });
    $("#Div_gameList .nav-link").click(function () {
        $(".gameList2").remove("active");
    });
    $(".lookfor:not(.teamProfitSuper)").click(function () {
        $(this).parent().siblings('.listWrap').css("display", "block");
    });
    $(".changeReport").click(function () {
        $(".commonReport").toggleClass("reportChange");
        $(".dailyReport").toggleClass("reportChange");
    });
    $("#toggleBtn").click(function () {
        var btn = this.text;
        if (btn == '关闭') {
            $("#toggleBtn").text("启用");
            $("#statusNow").text("关闭");
        }
        else {
            $("#toggleBtn").text("关闭");
            $("#statusNow").text("启用");
        }
    });
    $(".openBtn").click(function () {
        var btn = this.text;
        if (btn == '启用') {
            $(".openBtn").text("关闭");
        }
        else {
            $(".openBtn").text("启用");
        }
    });
    $(".changeDailyReport").click(function () {
        var btn = this.text;
        if (btn == '切換成日报表') {
            $(".changeDailyReport").text("返回");
        }
        else {
            $(".changeDailyReport").text("切換成日报表");
        }
    });
    $(".gamelist2Active .ticketAGVGspan").click(function () {
        var el = this;
        var text = el.textContent;
        if (text == '更改') {
            $(".gamelist2Active .ticketAGVGspan").text("取消");
        }
        else {
            $(".gamelist2Active .ticketAGVGspan").text("更改");
        }
    });
    $(".gamelist2 a").click(function () {
        $(".gamelist2Active .ticketAGVGspan").text("更改");
    });
    $(".dropdown-item").click(function () {
        var el = this.text;
        var ci = document.getElementById('userAccID');

        $("#userAccID").val(el);

    });
    $(".itemII").click(function () {
        var el = this.text;

        $(this).parent().parent().siblings(".Moneyinput").val(el);

    });
    $(".itemIII").click(function () {
        var el = this.text;
        var ci = document.getElementById('CheckMoneySetting');

        $("#CheckMoneySetting").val(el);

    });
    $(".gameList .nav-link").click(function () {
        var el = this.text;
        $('.ChangeLogoName').text(el);
    });
    $(".gameList2 .nav-link").click(function () {
        var el = this.text;
        $("#CheckTicket").text("您已將登錄頁面改成" + el + ",下次登錄將直接進到" + el + "投注畫面！");
    });
    $(".allBtn").click(function () {
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.fl').removeClass('active');
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.fl').addClass('active');
    });
    $(".bigBtn").click(function () {
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.fl').removeClass('active');
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.fl:gt(4)').addClass('active');
    });
    $(".smallBtn").click(function () {
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.fl').removeClass('active');
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.fl:lt(5)').addClass('active');
    });
    $(".oddBtn").click(function () {
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.fl').removeClass('active');
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.fl:odd').addClass('active');
    });
    $(".evenBtn").click(function () {
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.fl').removeClass('active');
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.fl:even').addClass('active');
    });
    $(".clearBtn").click(function () {
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.fl').removeClass('active');
    });
    $(".pk10main .oddBtn").click(function () {
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.fl').removeClass('active');
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.fl:even').addClass('active');
    });
    $(".pk10main .evenBtn").click(function () {
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.fl').removeClass('active');
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.fl:odd').addClass('active');
    });
    $(".Guangdong .oddBtn").click(function () {
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.fl').removeClass('active');
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.fl:even').addClass('active');
    });
    $(".Guangdong .evenBtn").click(function () {
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.fl').removeClass('active');
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.fl:odd').addClass('active');
    });
    $(".Jiangsu .allBtn").click(function () {
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.totalUl').find('.totalBtn').find('a').removeClass('active');
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.totalUl').find('.totalBtn').find('a').addClass('active');
    });
    $(".Jiangsu .bigBtn").click(function () {
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.totalUl').find('.totalBtn').find('a').removeClass('active');
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.totalUl').find('.totalBtn:gt(2)').find('a').addClass('active');
    });
    $(".Jiangsu .smallBtn").click(function () {
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.totalUl').find('.totalBtn').find('a').removeClass('active');
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.totalUl').find('.totalBtn:lt(3)').find('a').addClass('active');
    });
    $(".Jiangsu .oddBtn").click(function () {
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.totalUl').find('.totalBtn').find('a').removeClass('active');
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.totalUl').find('.totalBtn:even').find('a').addClass('active');
    });
    $(".Jiangsu .evenBtn").click(function () {
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.totalUl').find('.totalBtn').find('a').removeClass('active');
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.totalUl').find('.totalBtn:odd').find('a').addClass('active');
    });
    $(".Jiangsu .clearBtn").click(function () {
        $(this).parent(".divbor").parent(".Type4").siblings('.Ball').find('.totalUl').find('.totalBtn').find('a').removeClass('active');
    });
    $(".CusBtn").click(function () {
        window.open('CustomerService.html', '_blank', config = 'height=602,width=658,top=100,left=100', 'toolbar=false,resizable=yes,scrollbars=no');
        return false;
    });
    $(".AppearTitle").click(function () {
        $(".TalkRoom").toggleClass('hoverActive');
        $(".fa-minus").toggleClass('active');
    });
    $(".multipleAddBtn").click(function () {
        var el = document.querySelectorAll('.multiple');
        var elLen = el.length; 
        for(var i = 0; i < elLen; i++){
                el[i].value++;
            }
    });
    $(".multipleSubBtn").click(function () {
        var el = document.querySelectorAll('.multiple');
        var elLen = el.length;
        for(var i = 0; i < elLen; i++){
                el[i].value--;
                if (el[i].value < 1) {
                el[i].value = 1;
        }
        }
    });
    $(".CustomerBtn").click(function () {
        window.open('CustomerService.html', '_blank', config = 'height=602,width=658,top=100,left=100', 'toolbar=false,resizable=yes,scrollbars=no');
        return false;
    });
    $(".Customer").click(function () {
       $(this).siblings('.CustomerBtn').toggleClass('peopleAppear');
    });
    $(".SubordinateBtn").click(function () {
        $(".topWrap").addClass('Subordinate');
        $('.SublistWrap').removeClass('Subordinate');
    });
    $(".SubordinateBtn").click(function () {
        var txt1 = "<span class='SecondSpan'>bb778899</span>"
        $(".Superior").append(txt1);
        $(".topAc").addClass('backToSuper');
        $(".backToSuper").click(function () {
            $(".listWrap").removeClass('Subordinate');
            $(".SublistWrap").addClass('Subordinate');
            $(".SublistWrapII").addClass('Subordinate');
            $(".Superior span").remove();
        });
    });
    $(".SubordinateBtnII").click(function () {
        $('.SublistWrap').addClass('Subordinate');
        $('.SublistWrapII').removeClass('Subordinate');
        var txt1 = "<a href='#' class = 'backToSuper secondAc'>bb778899</a>"
        var txt2 = "<span class= 'thirdAc'><span>&gt;&gt;</span>cc778899</span>"
        $(".SecondSpan").before(txt1);
        $(".SecondSpan").remove();
        $(".topAc").removeClass('backToSuper');
        $(".secondAc").after(txt2);
        $(".backToSuper").click(function () {
            var txt3 = "<span class= 'secondSpan'>bb778899</span>"
            $(".SublistWrap").removeClass('Subordinate');
            $(".SublistWrapII").addClass('Subordinate');
            $(".thirdAc").remove();
            $(".secondAc").after(txt3);
            $(".secondAc").remove();
        });
    });
    $(".topAc").click(function () {
       $(".secondAc").remove();
        $(".thirdAc").remove();
        $(".SublistWrap").addClass('Subordinate');
        $(".SublistWrapII").addClass('Subordinate');
        $(".listWrap").removeClass('Subordinate');
   });
     $(".LotteryTime").mouseover(function () {
        if ($(this).val() == "修改" || $(this).val() == "删除" || $(this).val() == "设置") {
            $(this).css("cursor", "pointer");
        }
        else {
            $(this).css("cursor", "default");
        }
    });
    $("#superProxy").click(function () {
        window.open('superProxyBack.html', '_blank', config = 'height=800,width=1260,top=100,left=100', 'toolbar=false,resizable=yes,scrollbars=no');
        return false;
    });
    $(".voiceCloseBtn").click(function () {
        var el = this;
        var text = el.textContent;
        console.log(text);
        if (text == '关闭声音') {
            $(this).html("开启声音<i class='fa fa-volume-up' aria-hidden='true'></i>");
        }
        else {
            $(this).html("关闭声音<i class='fa fa-volume-off' aria-hidden='true'></i>");
        }
    });
    $(".AnCloseBtn").click(function () {
        var el = this;
        var text = el.textContent;
        console.log(text);
        if (text == '关闭动画') {
            $(this).html("开启动画<i class='fa fa-play' aria-hidden='true'></i>");
        }
        else {
            $(this).html("关闭动画<i class='fa fa-times' aria-hidden='true'></i>");
        }
    });
    $(".Voice span").click(function () {
        var el = this;
        var text = el.textContent;
        console.log(text);
        if (text == '关闭声音') {
            $(this).html("开启声音<img src='images/sound1.png' id='Image24'>");
        }
        else {
            $(this).html("关闭声音<img src='images/sound2.png' id='Image24'>");
        }
    });
    $(".inputButton").click(function () {
       $(this).siblings('.dropMenu').toggleClass("active");
    });
    $("#nav-A-FBank a").click(function () {
        var img = this.name;
        var el = document.getElementById('selected-text');
        el.value = img;
        $('.dropMenu').toggleClass("active");
     });
     $("#nav-G-IBank a").click(function () {
        var img = this.name;
        var el = document.getElementById('selected-text');
        el.value = img;
        $('.dropMenu').toggleClass("active");
     });
     $("#nav-J-NBank a").click(function () {
        var img = this.name;
        var el = document.getElementById('selected-text');
        el.value = img;
        $('.dropMenu').toggleClass("active");
     });
     $("#nav-O-TBank a").click(function () {
        var img = this.name;
        var el = document.getElementById('selected-text');
        el.value = img;
        $('.dropMenu').toggleClass("active");
     });
     $("#nav-U-ZBank a").click(function () {
        var img = this.name;
        var el = document.getElementById('selected-text');
        el.value = img;
        $('.dropMenu').toggleClass("active");
     });
     $("#nav-hotBank img").click(function () {
        var img = this.name;
        var el = document.getElementById('selected-text');
        el.value = img;
        $('.dropMenu').toggleClass("active");
     });
     $(".BettingMoney li a").click(function (event) {
        event.preventDefault();
        $(this).addClass('active')
        $(this).parent("li").siblings().find("a").removeClass('active')
    });
     $(".AcPeopleDetail").hover(function (event) {
        $(this).find('.Allinfo').toggleClass('AllinfoAppear')
    });
    $("#riskMange-tab").click(function (event) {
        var main = document.querySelectorAll(".profitRatio");
        var bt = document.querySelectorAll(".BettingMoney");
        var di = document.querySelectorAll(".DistributeMoney");
        var mainLen = main.length;
        var btLen = bt.length; 
        var diLen = di.length; 
        for(var i = 0; i < mainLen; i++){
                var btVal = bt[i].textContent;
                var diVal = di[i].textContent;
                var ccccc =  diVal / btVal ;
                main[i].textContent = ccccc;
            }
    });
    $(".clickEvent").click(function (event) {
        var inVal = document.querySelector(".amount");
        var LotteryVal = document.querySelectorAll(".amount");
        var LotteryValLen = LotteryVal.length;
        if( inVal.value < 0 ){
            inVal.value = 0;
            LotteryVal  .value = 0;
            for(var i = 0; i < LotteryValLen; i++){
                LotteryVal[i].value = 0;
            }
        } 
       
    });
        $(".clickEventIIII").click(function (event) {
        var inVal = document.querySelector(".amountIIII");
        var LotteryVal = document.querySelectorAll(".amountIIII");
        var LotteryValLen = LotteryVal.length;
        if( inVal.value < 0 ){
            inVal.value = 0;
            LotteryVal  .value = 0.1;
            for(var i = 0; i < LotteryValLen; i++){
                LotteryVal[i].value = 0;
            }
        } 
       
    });
        $(".clickEventII").click(function (event) {
        var inVal = document.querySelector(".amountII");
        var LotteryVal = document.querySelectorAll(".amountII");
        var LotteryValLen = LotteryVal.length;
        if( inVal.value < 0 ){
            inVal.value = 0;
            LotteryVal  .value = 0;
            for(var i = 0; i < LotteryValLen; i++){
                LotteryVal[i].value = 0;
            }
        } 
       
    });
        $(".clickEventIII").click(function (event) {
        var inVal = document.querySelector(".amountIII");
        var LotteryVal = document.querySelectorAll(".amountIII");
        var LotteryValLen = LotteryVal.length;
        if( inVal.value < 0 ){
            inVal.value = 0;
            LotteryVal  .value = 0;
            for(var i = 0; i < LotteryValLen; i++){
                LotteryVal[i].value = 0;
            }
        } 
       
    });
    $("#inlineRadio1").click(function (event) {
        $(".CycleSales").text("周期销量");
    });
    $("#inlineRadio2").click(function (event) {
        $(".CycleSales").text("周期亏损量");
    });
    $(".confirmDividendsContract1").click(function (event) {
        $(".ChangeTitleII").text("日工资契约");
        $(".ChangeContentII").text("日工资契约");
    });
    $(".DividendsContractFin").click(function (event) {
        $(".ChangeTitleII").text("分红契约");
        $(".ChangeContentII").text("分红契约");
    });
    $(".changeContractBtn").click(function () {
        var txt = document.getElementById("dataSetingII")
        var txt2 = document.getElementById("dataSetingIII")
        var txt3 = document.getElementById("dataSetingIIII")
        var txt4 = document.getElementById("dataSetingIIIII")
        $(".changeContractBtn").addClass("disappearBtn");
        $(".restartContractBtn").addClass("disappearBtn");
        $(".removeContractBtn").addClass("disappearBtn");
        $(".CancleChange").removeClass("dailyWageFinChangeBtn");
        $(".saveChange").removeClass("dailyWageFinChangeBtn");
        txt.removeAttribute("disabled");
        txt2.removeAttribute("disabled");
        txt3.removeAttribute("disabled");
        $("#dataSetingIIII").css("display","block");
        txt4.removeAttribute("disabled");
    });
    $(".CancleChange").click(function () {
        var txt = document.getElementById("dataSetingII")
        var txt2 = document.getElementById("dataSetingIII")
        var txt3 = document.getElementById("dataSetingIIII")
        var txt4 = document.getElementById("dataSetingIIIII")
        $(".changeContractBtn").removeClass("disappearBtn");
        $(".restartContractBtn").removeClass("disappearBtn");
        $(".removeContractBtn").removeClass("disappearBtn");
        $(".CancleChange").addClass("dailyWageFinChangeBtn");
        $(".saveChange").addClass("dailyWageFinChangeBtn");
        txt.setAttribute("disabled","disabled");
        txt2.setAttribute("disabled","disabled");
        txt3.setAttribute("disabled","disabled");
        $("#dataSetingIIII").css("display","none");
        txt4.setAttribute("disabled","disabled");
        txt.value = "2000000";
        txt2.value = "100";
        txt3.value = "100000";
        txt4.value = "1500";
    });
    $(".saveChange").click(function () {
        var txt = document.getElementById("dataSetingII")
        var txt2 = document.getElementById("dataSetingIII")
        var txt3 = document.getElementById("dataSetingIIII")
        var txt4 = document.getElementById("dataSetingIIIII")
        $(".changeContractBtn").removeClass("disappearBtn");
        $(".restartContractBtn").removeClass("disappearBtn");
        $(".removeContractBtn").removeClass("disappearBtn");
        $(".CancleChange").addClass("dailyWageFinChangeBtn");
        $(".saveChange").addClass("dailyWageFinChangeBtn");
        txt.setAttribute("disabled","disabled");
        txt2.setAttribute("disabled","disabled");
        txt3.setAttribute("disabled","disabled");
        $("#dataSetingIIII").css("display","none");
        txt4.setAttribute("disabled","disabled");
        $(".dailyWageFin .finnalTd .wageRange").text("");
    });
    $(".restartContractBtn").click(function () {
        var txt = document.querySelector(".ChangeTitleII");
        var txt1 = document.querySelector(".restartContractBtn");
        var txtVal = txt.textContent;
        if( txtVal == "日工资契约" ){
            txt1.removeAttribute("data-toggle");
            txt1.removeAttribute("data-target");
            txt1.removeAttribute("data-dismiss");
            txt1.setAttribute("data-toggle","modal");
            txt1.setAttribute("data-target",".dailyWage");
            txt1.setAttribute("data-dismiss","modal");
            }else if( txtVal == "分红契约" ){
            txt1.removeAttribute("data-toggle");
            txt1.removeAttribute("data-target");
            txt1.removeAttribute("data-dismiss");
            txt1.setAttribute("data-toggle","modal");
            txt1.setAttribute("data-target",".DividendsContract");
            txt1.setAttribute("data-dismiss","modal");
            }
    });
    $(".removeContractBtn").click(function () {
        var txt = document.querySelector(".ChangeTitleII");
        var txt1 = document.querySelector(".confirmDividendsContract1");
        var txt2 = document.querySelector(".DividendsContractFin");
        var txtVal = txt.textContent;
        var txt1Val = txt1.textContent;
        var txt2Val = txt2.textContent;
        if( txtVal == "日工资契约" ){
            txt1.textContent = "未签定";
            txt1.removeAttribute("data-toggle");
            txt1.removeAttribute("data-target");
            txt1.setAttribute("data-toggle","modal");
            txt1.setAttribute("data-target",".dailyWage");
            }else if( txtVal == "分红契约" ){
            txt2.textContent = "未签定";
            txt2.removeAttribute("data-toggle");
            txt2.removeAttribute("data-target");
            txt2.setAttribute("data-toggle","modal");
            txt2.setAttribute("data-target",".DividendsContract");
            }
    });
    $(".clearDivBtn").click(function () {
        for(var i=0;i<10;i++){
            $("#div"+i).remove();
        }
    });
    $(".removeCheckBox").click(function () {
        $(this).addClass('beenClick');
    });
    $(".delBeenClick").click(function (event) {
        event.preventDefault();
        $(".beenClick").addClass('beenClickDisAppear');
        $(".beenClick").parent().siblings('.T11').addClass('disabled');
        $(".beenClick").parent().siblings('.T11').find('a').addClass('beenRemove');
    });
    $(".AllDelBeenClick").click(function (event) {
        event.preventDefault();
        $(".removeCheckBox").css("display","none");
        $(".removeCheckBox").parent().siblings('.T11').addClass('disabled');
        $(".removeCheckBox").parent().siblings('.T11').find('a').addClass('beenRemove');
    });
    $(".DivbackTo").click(function (event) {
        event.preventDefault();
        $(".proporRange").val("");
        $(".proRange").text("");
    });
    $(".DowCopyBtn").click(function (event) {
        alert("已成功复制网址！")
    });
    $("#FocusRecord-tab").click(function (event) {
        $(".FocusRecordNone").css("display","none");
        $(".BettingRecordSmallAppear").css("display","none");
        $(".FocusRecordAppear").css("display","inline-block");
    });
    $("#BettingRecordSmall-tab").click(function (event) {
        $(".FocusRecordNone").css("display","inline-block");
        $(".BettingRecordSmallAppear").css("display","inline-block");
        $(".FocusRecordAppear").css("display","none");
    });
    $("#Proxywechat").hover(function (event) {
        $(".ProxywechatBlock .Proxywechat").addClass('ProxyBLockNone');
        },function(){
        $('.ProxywechatBlock .Proxywechat').removeClass('ProxyBLockNone');
    });
    $("#ProxyQQ").hover(function (event) {
        $(".ProxyQQBlock .Proxywechat").addClass('ProxyBLockNone');
        },function(){
        $('.ProxyQQBlock .Proxywechat').removeClass('ProxyBLockNone');
    });
    //$(".QQID").hover(function(event){
    //    var el = this;
    //    var text = el.textContent;
    //    $(this).siblings('.QQDetailBlock').css("display","block");
    //    $(this).siblings('.QQDetailBlock').text(text);
    //    },function(){
    //        $(this).siblings('.QQDetailBlock').css("display","none");
    //});
    $(".WeChatID").hover(function(event){
        var el = this;
        var text = el.textContent;
        $(this).siblings('.WechatDetailBlock').css("display","block");
        $(this).siblings('.WechatDetailBlock').text(text);
        },function(){
            $(this).siblings('.WechatDetailBlock').css("display","none");
    });
    $(".AllConnect").click(function (event) {
        $(".middleBlock").css("display","none");
        $(".AllConnectMiddleBlock").css("display","block");
        $(".ConnectGroupMiddleBlock").css("display","none");
        $(".HistroyConnectChat").css("display","none");
        $(".rightBlock").css("display","block");
        $(".GroupAchat").css("display","none");
        $(".GroupBchat").css("display","none");
        $(".HistroyConnectChat").css("display","none");
    });
    $(".PersonBtn").click(function (event) {
        $(".HihgUser").toggleClass('PersonToggleClass');
    });
    $(".PersonBtnII").click(function (event) {
        $(".LowUser").toggleClass('PersonToggleClass');
    });
    $(".PersonBtnGA").click(function (event) {
        $(".GroupA").toggleClass('PersonToggleClass');
        $(".GroupInnerControl").toggleClass('PersonToggleClass');
        $(".rightBlock").css("display","none");
        $(".GroupAchat").css("display","block");
        $(".GroupBchat").css("display","none");
        $(".HistroyConnectChat").css("display","none");
    });
    $(".PersonBtnGB").click(function (event) {
        $(".GroupB").toggleClass('PersonToggleClass');
        $(".GroupInnerControlII").toggleClass('PersonToggleClass');
        $(".rightBlock").css("display","none");
        $(".GroupBchat").css("display","block");
        $(".GroupAchat").css("display","none");
        $(".HistroyConnectChat").css("display","none");
    });
    $(".ConnectGroup").click(function (event) {
        $(".middleBlock").css("display","none");
        $(".AllConnectMiddleBlock").css("display","none");
        $(".ConnectGroupMiddleBlock").css("display","block");
        $(".HistroyConnectMiddleBlock").css("display","none");
    });
    $(".RecentlyConnect").click(function (event) {
        $(".middleBlock").css("display","block");
        $(".AllConnectMiddleBlock").css("display","none");
        $(".ConnectGroupMiddleBlock").css("display","none");
        $(".HistroyConnectMiddleBlock").css("display","none");
        $(".rightBlock").css("display","block");
        $(".GroupAchat").css("display","none");
        $(".GroupBchat").css("display","none");
        $(".HistroyConnectChat").css("display","none");
    });
    $(".HistroyConnect").click(function (event) {
        $(".middleBlock").css("display","none");
        $(".AllConnectMiddleBlock").css("display","none");
        $(".ConnectGroupMiddleBlock").css("display","none");
        $(".HistroyConnectMiddleBlock").css("display","block");
        $(".rightBlock").css("display","none");
        $(".GroupAchat").css("display","none");
        $(".GroupBchat").css("display","none");
        $(".HistroyConnectChat").css("display","block");
    });
    $(".DelGroupPeople").click(function (event) {
        var el = document.querySelector(".DelGroupPeople");
        var elText = el.text;
        if ( elText == "编辑" ) {
            el.text = "取消";
            $(".CusDelBtnII").css("display","block");
        } else{
            el.text = "编辑";
            $(".CusDelBtnII").css("display","none");
        }
    });
    $(".DelGroupPeopleII").click(function (event) {
        var el = document.querySelector(".DelGroupPeopleII");
        var elText = el.text;
        if ( elText == "编辑" ) {
            el.text = "取消";
            $(".CusDelBtnIII").css("display","block");
        } else{
            el.text = "编辑";
            $(".CusDelBtnIII").css("display","none");
        }
    });
    $(".copyContentBtn").click(function (event) {
        alert("已成功复制！")
    });
    $(".linkMangeBtn").click(function (event) {
        $(".promotionLinkTitle").text("推广链接详情");
    });
    $(".wechatLinkBtn").click(function (event) {
        $(".promotionLinkTitle").text("微信推广详情");
    });
    $(".SearchFriend").click(function (event) {
        $(".SearchBlock").toggleClass('SearchBlockAppear');
    });
    $(".HistroyInput").blur(function (event) {
        $(".SearchResult").css("display","block");
    });
    $(".SearchResult").click(function (event) {
        var el = this.childNodes[1].textContent;
        
        $(".HistroyChatBLock").css("opacity","1");
        $(".HistroyBoxUser").text(el);
        $(".HistroyChatId").css("opacity","1");
    });
    $(".IconList").click(function (event) {
        $(this).parent().parent(".toolList").siblings('.iConMenu').toggleClass('active');
    });
    $(".Group").click(function (event) {
        $(this).addClass('active');
        $(this).parent().siblings().find('i').removeClass('active');
        $(".List").css("display","none");
        $(".groupList").css("display","block");
    });
    $(".User").click(function (event) {
        $(this).addClass('active');
        $(this).parent().siblings().find('i').removeClass('active');
        $(".List").css("display","block");
        $(".groupList").css("display","none");
    });
    $(".TrendBtn").click(function () {
        window.open('TrendII.html', '_blank', config = 'height=702,width=1500,top=100,left=100', 'toolbar=false,resizable=yes,scrollbars=yes');
        return false;
    });
    $(".PassQuestionTips").hover(function (event) {
        $(".PassQuestionTipsBlock").toggleClass("active");
    });
    $(".dateSelect li").click(function (event) {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
});

function txt_onclick(num2) {
    var num1 = parseFloat($("#txt").val()).toFixed(1); //轉成【有小數點1位】的值

    var r1, r2, m;
    try {
    r1 = num1.toString().split(".")[1].length;
} catch (e) {
    r1 = 0;
}
    try {
    r2 = num2.toString().split(".")[1].length;
} catch (e) {
    r2 = 0;
}
    m = Math.pow(10, Math.max(r1, r2))

    $("#txt").val(Math.round((num1 * m + num2 * m)) / m);
}

function txt_onclick1(num2) {
    var num1 = parseFloat($("#txt1").val()).toFixed(1); //轉成【有小數點1位】的值

    var r1, r2, m;
    try {
    r1 = num1.toString().split(".")[1].length;
} catch (e) {
    r1 = 0;
}
    try {
    r2 = num2.toString().split(".")[1].length;
} catch (e) {
    r2 = 0;
}
    m = Math.pow(10, Math.max(r1, r2))

    $("#txt1").val(Math.round((num1 * m + num2 * m)) / m);
}

function txt_onclick2(num2) {
    var num1 = parseFloat($("#txt2").val()).toFixed(1); //轉成【有小數點1位】的值

    var r1, r2, m;
    try {
    r1 = num1.toString().split(".")[1].length;
} catch (e) {
    r1 = 0;
}
    try {
    r2 = num2.toString().split(".")[1].length;
} catch (e) {
    r2 = 0;
}
    m = Math.pow(10, Math.max(r1, r2))

    $("#txt2").val(Math.round((num1 * m + num2 * m)) / m);
}
function txt_onclick3(num2) {
    var num1 = parseFloat($("#txt3").val()).toFixed(1); //轉成【有小數點1位】的值

    var r1, r2, m;
    try {
    r1 = num1.toString().split(".")[1].length;
} catch (e) {
    r1 = 0;
}
    try {
    r2 = num2.toString().split(".")[1].length;
} catch (e) {
    r2 = 0;
}
    m = Math.pow(10, Math.max(r1, r2))

    $("#txt3").val(Math.round((num1 * m + num2 * m)) / m);
}
    $(function() {
        $("#MyMoney").click(function () {
            window.open('MyMoney.html', 'testWin1', config = 'height=550,width=850,top=100,left=100', 'toolbar=false,resizable=yes,scrollbars=no');
            return false;
        });
    $("#closeBtn").click(function() {
        $(".modal-backdrop").remove();
    });
});

    $(function() {
        $("#MyMoney").click(function () {
            window.open('MyMoney.html', 'testWin1', config = 'height=550,width=850,top=100,left=100', 'toolbar=false,resizable=yes,scrollbars=no');
            return false;
        });
    $("#closeBtn").click(function() {
        $(".modal-backdrop").remove();
    });
    $(document).tooltip(); //安1212
});
//安
function radiobutton_onclick(id) {
    if (id == "radio_name1" && $("#radio_icon1").css("background-image").indexOf("radio_y.png") == -1) {
        $("#radio_icon1").css("background-image", "url(~/images/IntelligentChase/radio_y.png)");
        $("#radio_icon2").css("background-image", "url(~/images/IntelligentChase/radio_n.png)");
        $("#radio_icon3").css("background-image", "url(~/images/IntelligentChase/radio_n.png)");
        $("#div_chaseType1").css("display", "block");
        $("#div_chaseType2").css("display", "none");
        $("#div_chaseType3").css("display", "none");
        $("#div_chaseType4").css("display", "none");
    }
    if (id == "radio_name2" && $("#radio_icon2").css("background-image").indexOf("radio_y.png") == -1) {
        $("#radio_icon1").css("background-image", "url(~/images/IntelligentChase/radio_n.png)");
        $("#radio_icon2").css("background-image", "url(~/images/IntelligentChase/radio_y.png)");
        $("#radio_icon3").css("background-image", "url(~/images/IntelligentChase/radio_n.png)");
        $("#div_chaseType2").css("display", "block");
        $("#div_chaseType4").css("display", "block");
        $("#div_chaseType3").css("display", "none");
        $("#div_chaseType1").css("display", "none");
    }
    if (id == "radio_name3" && $("#radio_icon3").css("background-image").indexOf("radio_y.png") == -1) {
        $("#radio_icon1").css("background-image", "url(~/images/IntelligentChase/radio_n.png)");
        $("#radio_icon2").css("background-image", "url(~/images/IntelligentChase/radio_n.png)");
        $("#radio_icon3").css("background-image", "url(~/images/IntelligentChase/radio_y.png)");
        $("#div_chaseType2").css("display", "none");
        $("#div_chaseType3").css("display", "block");
        $("#div_chaseType1").css("display", "block");
        $("#div_chaseType4").css("display", "none");
    }
}
//安1204
function chooseLottery_onclick(name) { //選擇
    if ($("#hd_CustomLogin").val() == "N") { //Y:改自訂登錄頁面 N:更改删除常用彩類
        $("#" + $("#hd_oftenLottery").val().replace("Ti", "Na")).val(name);
    for (var i = 1; i <= 6; i++) {
            if ($("#hd_oftenLottery").val().replace("LotteryTime", "") != i)
                $("#LotteryTime" + i).val($("#hd_LotteryTime" + i).val());
        }
        $("#" + $("#hd_oftenLottery").val()).val("8:30");
    } else {
        $("#txt_CustomLogin").val(name);
    }
    $(".toggleSpan").text("更改");
    $(".toggleSpan1").text("删除");
}

function SetOftenLottery(id) { //按下 設置/修改/删除        
        $("#hd_CustomLogin").val("N");
    if ($("#" + id).val() == "设置") {
        $("#hd_oftenLottery").val(id);
    for (var i = 1; i <= 6; i++) {
        $("#hd_LotteryTime" + i).val($("#LotteryTime" + i).val());
    }
    }
    if ($("#" + id).val() == "修改") {
        $(".toggleSpan").text("修改中");
    $("#hd_oftenLottery").val(id);
    }
    if ($("#" + id).val() == "删除") {
        for (var i = 1; i <= 6; i++) {
            if (id.replace("LotteryTime", "") != i) {
        $("#LotteryTime" + i).val($("#hd_LotteryTime" + i).val());
    } else {
        $("#LotteryName" + i).val("常用彩种设置");
    $("#LotteryTime" + i).val("设置");
                $("#hd_LotteryTime" + i).val("设置");
            }
        }
        alert("天津时时彩之常用彩种设置已成功删除，有需要请重新设置，谢谢");
        $(".toggleSpan1").text("删除");
        $("#hd_Delete").val("D");
    }
}

function ChangeOftenLottery() { //更改
        $("#hd_CustomLogin").val("N");
    //if ($("#LotteryTime1").val() != "修改" && $("#LotteryTime1").val() != "删除") {
    //    for (var i = 1; i <= 6; i++) {
    //        $("#hd_LotteryTime" + i).val($("#LotteryTime" + i).val());
    //        $("#LotteryTime" + i).val("修改");
    //    }
    //}
    if ($(".toggleSpan").text() == "更改") {
        if ($(".toggleSpan1").text() == "取消") {
        alert("請先取消删除功能");
    }
        else {
        $(".toggleSpan").text("取消");
    for (var i = 1; i <= 6; i++) {
        $("#hd_LotteryTime" + i).val($("#LotteryTime" + i).val());
    $("#LotteryTime" + i).val("修改");
            }
        }
    }
    else if ($(".toggleSpan").text() == "取消") {
        $(".toggleSpan").text("更改");
    //alert($("#LotteryTime1").val());
    for (var i = 1; i <= 6; i++) {
        $("#LotteryTime" + i).val($("#hd_LotteryTime" + i).val());
    }
    }
    else if ($(".toggleSpan").text() == "修改中") {
        alert("請關閉選擇視窗再操作");
    }
}

function DeleteOftenLottery() { //删除
        $("#hd_CustomLogin").val("N");
    if ($(".toggleSpan1").text() == "删除") {
        if ($(".toggleSpan").text() == "取消" || $(".toggleSpan").text() == "修改中") {
        alert("請先取消修改功能");
    }
        else {
            for (var i = 1; i <= 6; i++) {
        $("#hd_LotteryTime" + i).val($("#LotteryTime" + i).val());
    if ($("#LotteryTime" + i).val() != "设置")
                    $("#LotteryTime" + i).val("删除");
                else
                    $("#LotteryTime" + i).val("");
            }
            $(".toggleSpan1").text("取消");
        }


    }
    else if ($(".toggleSpan1").text() == "取消") {            
        for (var i = 1; i <= 6; i++) {
        $("#LotteryTime" + i).val($("#hd_LotteryTime" + i).val());
    }
        $(".toggleSpan1").text("删除");
    }

//        for (var i = 1; i <= 6; i++) {
        //            if ($("#LotteryTime" + i).val() == "修改" || $("#LotteryTime" + i).val() == "删除")
        //                return;
        //        }
        //        for (var i = 1; i <= 6; i++) {
        //            $("#hd_LotteryTime" + i).val($("#LotteryTime" + i).val());
        //            if ($("#LotteryTime" + i).val() != "设置")
        //                $("#LotteryTime" + i).val("删除");
        //            else
        //                $("#LotteryTime" + i).val("");
        //        }
    }

    function closeWindow() {
    for (var i = 1; i <= 6; i++) {
        $("#LotteryTime" + i).val($("#hd_LotteryTime" + i).val());
    }
    $(".toggleSpan").text("更改");
    $(".toggleSpan1").text("删除");
}
function CustomLogin_onclick() { //自訂登陸
        $("#hd_CustomLogin").val("Y");
    }

function StartDownload(name) {
        alert(name + "已完成");
    $("#div_Download").css("display", "none");
}

function cal_realtime_onkeyup() {
    var num1 = parseFloat($("#txt_Balance1").val()).toFixed(2);
    var num2 = parseFloat($("#txt_Balance2").val()).toFixed(2);
    var num = parseFloat($("#txt_changeMoney1").val()).toFixed(2);
    if ($("#account1").val() == "平台" && $("#account2").val() == "ＡＧ") {
        $("#txt_Result1").val(parseFloat(num1 * 1 - num * 1).toFixed(2));
    $("#txt_Result2").val(parseFloat(num2 * 1 + num * 1).toFixed(2));
    } else if ($("#account1").val() == "ＡＧ" && $("#account2").val() == "平台") {
        $("#txt_Result1").val(parseFloat(num1 * 1 + num * 1).toFixed(2));
    $("#txt_Result2").val(parseFloat(num2 * 1 - num * 1).toFixed(2));
    } else {
        $("#txt_Result1").val(num1);
    $("#txt_Result2").val(num2);
    }
}

function cal_realtime2_onkeyup() {
    var num1 = parseFloat($("#txt_Balance3").val()).toFixed(2);
    var num = parseFloat($("#txt_changeMoney2").val()).toFixed(2);
    $("#txt_Result3").val(parseFloat(num1 * 1 - num * 1).toFixed(2));
}

function cal1_onclick() {
        $("#txt_BalanceResult1").val($("#txt_Result1").val());
    $("#txt_BalanceResult2").val($("#txt_Result2").val());
}

function cal2_onclick() {
        $("#txt_BalanceResult3").val($("#txt_Result3").val());
    $("#txt_ChangeMoney").val($("#txt_changeMoney2").val());
    $("#txt_ChangeToWho").val($("#account3").val());
}

function checkbox_onclick(id) {
    if ($("#check_icon1").css("background-image").indexOf("check_n.png") > -1) {
        $("#check_icon1").css("background-image", "url(~/images/IntelligentChase/check_y.png)");
    } else {
        $("#check_icon1").css("background-image", "url(~/images/IntelligentChase/check_n.png)");
    }
}

function gv_checkbox_onclick(id) {
    if ($("#" + id).css("background-image").indexOf("check_y.png") > -1) {
        $("#" + id).css("background-image", "url(~/images/IntelligentChase/check_n.png)");
    } else {
        $("#" + id).css("background-image", "url(~/images/IntelligentChase/check_y.png)");
    }
}

function generate_onclick() {
        $(".txt").val(""); //clear
    for (var i = 1; i <= 11; i++) { $("#check_gv_icon" + i).css("background-image", "url(~/images/IntelligentChase/check_n.png)"); }
    var number1 = $("#chaseOption1").val() * 1;
    var multiple1 = $("#chaseOption2").val() * 1;
    var number2 = $("#chaseOption3").val() * 1;
    var multiple2 = $("#chaseOption4").val() * 1;
    var rate = $("#chaseOption5").val() * 1;

    if ($("#radio_icon1").css("background-image").indexOf("radio_y.png") > -1) //1
    {
        for (var i = 1; i <= number1; i++) {
            $("#check_gv_icon" + i).css("background-image", "url(~/images/IntelligentChase/check_y.png)");
    $("#txt_multiple" + i).val(multiple1);
        }
    }
    if ($("#radio_icon2").css("background-image").indexOf("radio_y.png") > -1) //2
    {
        var ori_number = multiple1;
        var count = 1;
        for (var i = 1; i <= number1; i++) {
            $("#check_gv_icon" + i).css("background-image", "url(~/images/IntelligentChase/check_y.png)");
    if ((count + 1) <= number2) {
        $("#txt_multiple" + i).val(ori_number);
            count++;
            } else {
        $("#txt_multiple" + i).val(ori_number);
                ori_number = $("#txt_multiple" + i).val() * multiple2;
                count = 1;
            }
        }
    }
    if ($("#radio_icon3").css("background-image").indexOf("radio_y.png") > -1) //3
    {
        for (var i = 1; i <= number1; i++) {
            $("#check_gv_icon" + i).css("background-image", "url(~/images/IntelligentChase/check_y.png)");
            $("#txt_multiple" + i).val(multiple1);
        }
    }

    //安1212

}


//登入時候倒數計時
function getCountIssue() {
    $.ajax({
        'url': 'Home/GetApiNextIssue',
        'type': 'GET',
        'dataType': 'json',
        'success': function (response) {
            var obj = JSON.parse(response.data);
            //下一期期號
            var SerialNumber = obj["SerialNumber"].toString();
            $("#NextIssue").empty().append(SerialNumber);
            //console.log(obj["CloseTime"]);
            var date1 = new Date();  //开始时间
            var date2 = new Date(obj["CloseTime"]);  //结束时间
            var date3 = date2.getTime() - new Date(date1).getTime();   //时间差的毫秒数      
            //计算出相差天数
            var days = Math.floor(date3 / (24 * 3600 * 1000))
            //计算出小时数
            var leave1 = date3 % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数
            var hours = Math.floor(leave1 / (3600 * 1000))
            //计算相差分钟数
            var leave2 = leave1 % (3600 * 1000)        //计算小时数后剩余的毫秒数
            var minutes = Math.floor(leave2 / (60 * 1000))
            //计算相差秒数
            var leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
            var seconds = Math.round(leave3 / 1000)
            $("#MainDigitsMin").empty().append(minutes);
            if (seconds.toString().length > 1) {
                $("#MainTenSec").empty().append(seconds.toString().substring(0, 1));
                $("#MainDigitsSec").empty().append(seconds.toString().substring(1));
            }
            else if (seconds > 0)
            {
                $("#MainTenSec").empty().append(0);
                $("#MainDigitsSec").empty().append(0);
            }
            else {
                $("#MainTenSec").empty().append(0);
                $("#MainDigitsSec").empty().append(seconds);
            }
            //console.log(" 相差 " + minutes + " 分钟" + seconds + " 秒")
            setInterval(getCountIssue(), 1000);
        }
    });
}

//登出
function Logout() {
    $.ajax({
        'url': 'Login/Logout',
        'type': 'GET',
        'dataType': 'json',
        'success': function (response) {
            if (response.Success == true) {
                //window.location.href = '@Url.Action("Login", "Login")';
            }
            else {

            }
        }
    });
}

//下注
function betInsert() {
    var tableInfo = "";
    $.ajax({
        'url': 'Home/betInsert',
        'type': 'GET',
        'dataType': 'json',
        'data': tableInfo,
        'success': function (response) {

        }
    });
}

//讀取現在的

