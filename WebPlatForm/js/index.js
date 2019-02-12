 function check_all(obj,cName) 
    { 
        var checkboxs = document.getElementsByName(cName); 
        for(var i=0;i<checkboxs.length;i++){checkboxs[i].checked = obj.checked;} 
    } 
    var niuniu_word=new Array(); //先宣告一維 
        for(var i=0;i<10;i++){  //一維長度為2
        niuniu_word[i]=new Array(); //再宣告二維 
    }
    var play_type1="五星";
    var play_type2="复式";  
    var bet_money="2元";

    var five_star = new Array();
     for(var i=0;i<10;i++){  //一維長度為2
        five_star[i]=new Array(); //再宣告二維 
    }
    var four_star = new Array();
     for(var i=0;i<10;i++){  //一維長度為2
        four_star[i]=new Array(); //再宣告二維 
    }
    var f_three = new Array();
     for(var i=0;i<10;i++){  //一維長度為2
        f_three[i]=new Array(); //再宣告二維 
    }
    var mid_three = new Array();
     for(var i=0;i<10;i++){  //一維長度為2
        mid_three[i]=new Array(); //再宣告二維 
    }
    var b_three = new Array();
     for(var i=0;i<10;i++){  //一維長度為2
        b_three[i]=new Array(); //再宣告二維 
    }
    var f_two = new Array();
     for(var i=0;i<10;i++){  //一維長度為2
        f_two[i]=new Array(); //再宣告二維 
    }
    var b_two = new Array();
     for(var i=0;i<10;i++){  //一維長度為2
        b_two[i]=new Array(); //再宣告二維 
    }
    var local_num = new Array();
     for(var i=0;i<10;i++){  //一維長度為2
        local_num[i]=new Array(); //再宣告二維 
    }
    var no_local = new Array();
     for(var i=0;i<10;i++){  //一維長度為2
        no_local[i]=new Array(); //再宣告二維 
    }
    var bsoe_num = new Array();
     for(var i=0;i<10;i++){  //一維長度為2
        bsoe_num[i]=new Array(); //再宣告二維 
    }
    var mix_two = new Array();
     for(var i=0;i<10;i++){  //一維長度為2
        mix_two[i]=new Array(); //再宣告二維 
    }
    var mix_three = new Array();
     for(var i=0;i<10;i++){  //一維長度為2
        mix_two[i]=new Array(); //再宣告二維 
    }
    var mix_four = new Array();
     for(var i=0;i<10;i++){  //一維長度為2
        mix_four[i]=new Array(); //再宣告二維 
    }
    var longhu_num = new Array();
     for(var i=0;i<10;i++){  //一維長度為2
        longhu_num[i]=new Array(); //再宣告二維 
    }
             // reset all of the button color.
        if ($(".fl").hasClass("active")) {
            $("nav-item").hasClass("active");
            $(".fl").removeClass("active");
        }
    function clicknum(obj,obj2) 
    { 

        if(niuniu_word[obj][obj2] != "1"){
            niuniu_word[obj][obj2] = "1";
        }else{
            niuniu_word[obj][obj2] = "0";
        }
    } 


     function fsgame(obj,obj2) 
    { 
        if(five_star[obj][obj2] != "1"){
            five_star[obj][obj2] = "1";
        }else{
           five_star[obj][obj2] = "0";
        } 
    }
    function foursgame(obj,obj2) 
    { 
        if(four_star[obj][obj2] != "1"){
            four_star[obj][obj2] = "1";
        }else{
           four_star[obj][obj2] = "0";
        } 
    }
    function fthree(obj,obj2) 
    { 
        if(f_three[obj][obj2] != "1"){
            f_three[obj][obj2] = "1";
        }else{
           f_three[obj][obj2] = "0";
        } 
    }
    function midthree(obj,obj2) 
    { 
        if(mid_three[obj][obj2] != "1"){
            mid_three[obj][obj2] = "1";
        }else{
           mid_three[obj][obj2] = "0";
        } 
    }
    function bthree(obj,obj2) 
    { 
        if(b_three[obj][obj2] != "1"){
            b_three[obj][obj2] = "1";
        }else{
           b_three[obj][obj2] = "0";
        } 
    }
    function ftwo(obj,obj2) 
    { 
        if(f_two[obj][obj2] != "1"){
            f_two[obj][obj2] = "1";
        }else{
           f_two[obj][obj2] = "0";
        } 
    }
    function btwo(obj,obj2) 
    { 
        if(b_two[obj][obj2] != "1"){
            b_two[obj][obj2] = "1";
        }else{
           b_two[obj][obj2] = "0";
        } 
    }
    function local(obj,obj2) 
    { 
        if(local_num[obj][obj2] != "1"){
            local_num[obj][obj2] = "1";
        }else{
           local_num[obj][obj2] = "0";
        } 
    }
    function nolocal(obj,obj2) 
    { 
        if(no_local[obj][obj2] != "1"){
            no_local[obj][obj2] = "1";
        }else{
           no_local[obj][obj2] = "0";
        } 
    }
    function bigsoe(obj,obj2) 
    { 
        if(bsoe_num[obj][obj2] != "1"){
            bsoe_num[obj][obj2] = "1";
        }else{
           bsoe_num[obj][obj2] = "0";
        } 
    }
    function mixtwo(obj,obj2) 
    { 
        if(mix_two[obj][obj2] != "1"){
            mix_two[obj][obj2] = "1";
        }else{
           mix_two[obj][obj2] = "0";
        } 
    }
    function mixthree(obj,obj2) 
    { 
        if(mix_three[obj][obj2] != "1"){
            mix_three[obj][obj2] = "1";
        }else{
           mix_three[obj][obj2] = "0";
        } 
    }
    function mixfour(obj,obj2) 
    { 
        if(mix_four[obj][obj2] != "1"){
            mix_four[obj][obj2] = "1";
        }else{
           mix_four[obj][obj2] = "0";
        } 
    }
    function longhu(obj,obj2) 
    { 
        if(longhu_num[obj][obj2] != "1"){
            longhu_num[obj][obj2] = "1";
        }else{
           longhu_num[obj][obj2] = "0";
        } 
    }
    function playtype1(obj){

         if ($(".fl").hasClass("active")) {
           $(".fl").removeClass("active");
        }

        niuniu_word=new Array(); //先宣告一維 
        for(var i=0;i<10;i++){  //一維長度為2
        niuniu_word[i]=new Array(); //再宣告二維 
    }

        play_type1=obj;
    }
    function playtype2(obj){

         if ($(".fl").hasClass("active")) {
           $(".fl").removeClass("active");
        }

        niuniu_word=new Array(); //先宣告一維 
                for(var i=0;i<10;i++){  //一維長度為2
                niuniu_word[i]=new Array(); //再宣告二維 
            }

        play_type2=obj;
    }
    function betmoney(obj){
        bet_money=obj;
    }
    var cont = 0;
    var betlist = new Array(); //先宣告一維 
    for (var i = 0; i <150; i++) {  //一維長度為2
        betlist[i] = new Array(); //再宣告二維 
    }
    function niuniu(playtype1,playtype2,clicknum,betmoney) 
    {   


        betlist[cont][0] = play_type1 + play_type2;
        betlist[cont][1] = bet_money;
        var a=document.getElementById("typebet").value;
        betlist[cont][3] = a;
        var betlogo = document.getElementById("logoname");
        betlist[cont][5] = betlogo.innerHTML;
        //open date
        var shishiopen = document.getElementById("shishidate");
        betlist[cont][6] = shishiopen.innerHTML;
        // 产生投注时间
        var today = new Date(); 
        hour = (today.getHours() < 10 ? '0' : '') + today.getHours();// 取得时数
        minute = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes(); // 取得分数
        var todayAtMidn = hour + ':' + minute;
        betlist[cont][7] = todayAtMidn;
        var p="";
        var s="";
        var m="";
        var f="";
        var bet ="";
        var niu="";
        var num;
        var i,j;
        switch(bet_money){
            case'1厘':
            bet = "0.001";
            break;

            case'2厘':
            bet = "0.002";
            break;

            case'1分':
            bet = "0.01";
            break;

            case'2分':
            bet = "0.02";
            break;

            case'1角':
            bet = "0.1";
            break;

            case'2角':
            bet = "0.2";
            break;

            case'1元':
            bet = "1";
            break;

            case'2元':
            bet = "2";
            break;
        }

         switch(play_type1){
            case'四星':
            if(play_type2 == "复式" || play_type2 == "组合" ) num=4;
            if(play_type2 == "组选12" || play_type2 == "组选4" ) num=2;
            if(play_type2 == "组选24" || play_type2 == "组选6" ) num=1;
                for(i = 0 ; i<num;i++){
                for(j = 0 ; j<10;j++){
                    if( niuniu_word[i][j]=="1") {
                        niuniu_word[i][j] = 0;
                    s = s + j;
                }
            }
            if(i!=num-1)  s += ",";
            }break;
            

            case'定位':
            case'五星':
            if(play_type2 == "复式" || play_type2 == "组合" ) num=5;

            if(play_type2 == "组选120" || play_type2 == "一帆风顺" || play_type2 == "好事成双" || play_type2 == "三星报喜" || play_type2 == "四季发财" ) num=1;
            if(play_type2 == "组选60" || play_type2 == "组选30" || play_type2 == "组选20" || play_type2 == "组选10" || play_type2 == "组选5" ) num=2;

            for(i = 0 ; i<num;i++){
                for(j = 0 ; j<10;j++){
                    if( niuniu_word[i][j]=="1") {
                        niuniu_word[i][j] = 0;
                    s = s + j;
                }
            }
            if(i!=num-1)  s += ",";
            }break;


            case'前三':
            case'后三':
            case'中三':
            if(play_type2 == "复式" || play_type2 == "组合" ) num=3;
            if(play_type2 == "组三复式" || play_type2 == "组六复式" || play_type2 == "和值尾数" ) num=1;
            for(i = 0 ; i<num;i++){
                for(j = 0 ; j<10;j++){
                    if( niuniu_word[i][j]=="1") {
                        niuniu_word[i][j] = 0;
                    s = s + j;
                }
            }
            if(i!=num-1)  s += ",";
            }break;

            case'不定位':
            for(i = 0 ; i<10;i++){
                for(j = 0 ; j<10;j++){
                    if( niuniu_word[i][j]=="1") {
                        niuniu_word[i][j] = 0;
                    s = s + j;
                }
            }
            if(i!=10-1)  s += "";
            }break;

            case'前二':
            case'后二':
            if(play_type2 == "复式" || play_type2 == "和值" ) num=2;
            for(i = 0 ; i<num;i++){
                for(j = 0 ; j<10;j++){
                    if( niuniu_word[i][j]=="1") {
                        niuniu_word[i][j] = 0;
                    s = s + j;
                }
            }
            if(i!=num-1)  s += ",";
            }break;
        }

        

        betlist[cont][4] = a * bet;
        betlist[cont][2] = s; 

        cont++;

        var showAnswer ="";
        // console.log("ifNumNull:", ifNumNull(num));
        // if (ifNumNull(num)) {

            for (i = 0; i < cont; i++) {
            showAnswer += "<div class='listInfo align-items-center d-flex justify-content-around even'  id='showBlock'>";
            showAnswer += "<div class='T1' id='playtypename' style='display: inline'>";
            showAnswer += betlist[i][0];
            showAnswer += "</div>";
            showAnswer += "<div class='T2' id='lotterynumber' style='display: inline'>";
            showAnswer += betlist[i][2];
            showAnswer += "</div>";
            showAnswer += "<div class='T3' id='play' style='display: inline'>";
            showAnswer += betlist[i][1];
            showAnswer += "</div>";
            showAnswer += "<div class='T4' style='display: inline'>";
            showAnswer += "</div>";
            showAnswer += "<div class='T5' id='bettype' style='display: inline'>";
            showAnswer += betlist[i][3];
            showAnswer += "</div>";
            showAnswer += "<div class='T6' id='moneyBet' style='display: inline'>";
            showAnswer += betlist[i][4];  
            showAnswer += "</div>";
            showAnswer += "<div class='T7' style='display: inline'>";
            showAnswer += "</div>";
            showAnswer += "<div class='T8' id='deletebutton' style='display: inline'>";
            showAnswer += "<i class='fa fa-close' onclick ='del(" + i + ")'></i>";
            showAnswer += "</div>";
            showAnswer += "</div>";
             
             }
            $("#showAnswer").empty().append(showAnswer);  
        // } else {
        //     alert("fuckyou78");
        //     return;
        // }

        // reset all of the button color.
        if ($(".fl").hasClass("active")) {
           $(".fl").removeClass("active");
        }
         
        } 



    // function ifNumNull(numRow) {
    //     var rowSelected = 0;
    //     for(i = 0 ; i<numRow;i++)
    //        for(j = 0; j<10; j++)
    //         if (niuniu_word[i][j]=="1") {
    //             rowSelected++;
    //             break;
    //         }
    //     console.log("rowSelected:", rowSelected);
    //     console.log("numRow:", numRow);
    //     if (rowSelected == numRow)
    //         return true;
    //     return false;
    // }
    function special(control,obj){
        var i;
        switch(control){
            case 'all':
                for(i = 0 ; i<10;i++)
                    niuniu_word[obj][i] = "1";
                break;
            case 'big':
                for(i = 5 ; i<10;i++)
                    niuniu_word[obj][i] = "1";
                break;          
            case 'small':
                for(i = 0 ; i<5;i++)
                    niuniu_word[obj][i] = "1";
                break;        
            case 'even':
               for(i = 0; i<10;i=i+2)
                    niuniu_word[obj][i] = "1";
                break;       
            case 'odd':
               for(i = 1; i<10;i=i+2)
                    niuniu_word[obj][i] = "1";
                break;
            case 'clear':
               for(i = 0; i<10;i++)
                    niuniu_word[obj][i] = "0";
                break;

        }
    }
function del(obj) {
            for (i = obj; i < cont-1; i++) {
                betlist[i][0] = betlist[i + 1][0];
                betlist[i][1] = betlist[i + 1][1];
                betlist[i][2] = betlist[i + 1][2];
                betlist[i][3] = betlist[i + 1][3];
            }
            betlist[cont - 1][0] = "";
            betlist[cont - 1][1] = "";
            betlist[cont - 1][2] = "";
            betlist[cont - 1][3] = "";

            cont--;
            var showAnswer = "";
            for (i = 0; i < cont; i++) {   
            showAnswer += "<div class='listInfo align-items-center d-flex justify-content-around even'  id='showBlock'>";
            showAnswer += "<div class='T1' id='playtypename' style='display: inline'>";
            showAnswer += betlist[i][0];
            showAnswer += "</div>";
            showAnswer += "<div class='T2' style='display: inline'>";
            showAnswer += betlist[i][2];
            showAnswer += "</div>";
            showAnswer += "<div class='T3' id='play' style='display: inline'>";
            showAnswer += betlist[i][1];
            showAnswer += "</div>";
            showAnswer += "<div class='T4' style='display: inline'>";
            showAnswer += "</div>";
            showAnswer += "<div class='T5' id='bettype' style='display: inline'>";
            showAnswer += betlist[i][3];
            showAnswer += "</div>";
            showAnswer += "<div class='T6' style='display: inline'>";
            showAnswer += "</div>";
            showAnswer += "<div class='T7' id='userbetmoney' style='display: inline'>";
            showAnswer +=
            showAnswer += "</div>";
            showAnswer += "<div class='T8' id='deletebutton' style='display: inline'>";
            showAnswer += "<i class='fa fa-close' onclick ='del(" + i + ")'></i>";
            showAnswer += "</div>";
            showAnswer += "</div>";
            }
            $("#showAnswer").empty().append(showAnswer);

            
}
function removeAllDiv(obj) {
            for (i = obj; i < cont.length; i++) {
                betlist[cont.length][i][0] = "";
                betlist[cont.length][i][1] = "";
                betlist[cont.length][i][2] = "";
                betlist[cont.length][i][3] = "";


            }
            cont =0;
            var showAnswer = "";

            $("#showAnswer").empty().append(showAnswer);
}
//userallBet

var betallList = new Array(); //先宣告一維 
for (var i = 0; i < 50; i++) {  //一維長度為2
    betallList[i] = new Array(); //再宣告二維 
}
//for (var i = 0; i <150; i++) {  //一維長度為2
//    betallList[i] = new Array(); //再宣告二維 
//}

function allBet(playtype1,playtype2,UserName,clicknum,){

    var result = new Array();
    var value = UserName.split(',');
    var user = value[0].trim();
    var Issue = document.getElementById('shishidate').innerText;
    //result.push({ Name: "Apple" , money:"100"});

    var showallAnswer ="";
             for (i = 0; i < cont; i++) {
            //showallAnswer += "<div class='listInfo align-items-center d-flex justify-content-around even'  id='mybetList'>";
            //showallAnswer += "<div class='T1' id='betdate' style='display: inline'>";
            //showallAnswer += betlist[i][6];
            //showallAnswer += "</div>";
            //showallAnswer += "<div class='T2' id='bettime' style='display: inline'>";
            //showallAnswer += betlist[i][7];
            //showallAnswer += "</div>";
            //showallAnswer += "<div class='T3' id='playform' style='display: inline'>";
            //showallAnswer += betlist[i][5];
            //showallAnswer += "</div>";
            //showallAnswer += "<div class='T4' id='appType' style='display: inline'>";
            //showallAnswer += betlist[i][0];
            //showallAnswer += "</div>";
            //showallAnswer += "<div class='T5' id='appNum' style='display: inline'>";
            //showallAnswer += betlist[i][2];   
            //showallAnswer += "</div>";
            //showallAnswer += "<div class='T6' id='oplottertNum' style='display: inline'>";
            //showallAnswer += "</div>";
            //showallAnswer += "<div class='T7' id='userbetmoney' style='display: inline'>";
            //showallAnswer += betlist[i][4];
            //showallAnswer += "</div>";
            //showallAnswer += "<div class='T8' id='userwinMoney' style='display: inline'>";
            //showallAnswer += "</div>";
            //showallAnswer += "<div class='T9' id='winStatus' style='display: inline'>";
            //showallAnswer += "</div>";
            //showallAnswer += "<div class='T10' id='statusUser' style='display: inline'>";
            //showallAnswer += "<a href='#' class='detail pr-0' data-toggle='modal' data-target='.removeBetDetail'><span id='details'>详情</span></a>";
            //showallAnswer += "<div class='T11' id='cancelall' style='display: inline' onclick='cancelBet()'>";
            //showallAnswer +=  "<a  href = '#' class='remove pl-0' ><span>撤单</span></a>";
            //showallAnswer += "</div>";                    
            //showallAnswer += "</div>";
            //showallAnswer += "</div>";
                
            result.push({
                betid: 0, Name: user, amount: betlist[i][4], betUnit: 0,
                betNumber: betlist[i][2], playType: betlist[i][0],
                lotteryType: betlist[i][5], betTime: "",
                betIssue: Issue , serialNumber: 0,
                status: 0, prize: 0, position: "", returnRate: 0
            });

            for(x = 0; x<8; x++){
                betlist[i][x] = "";
            }
    }
    
     //$("#myallBet").empty().append(showallAnswer);   
     $("#showAnswer").empty();
    cont = 0;

    var betJsonString = JSON.stringify(result);

    $.ajax({
        'url': 'Home/betInsert',
        'type': 'GET',
        'dataType': 'json',
        'data': { "betJsonString" : betJsonString },
        'success': function (response) {

            var infoCount = response.data.length;
            var data = response.data;
            //console.log(response);
            for (i = 0; i < infoCount; i++) { 
                showallAnswer += "<div class='listInfo align-items-center d-flex justify-content-around even'  id='mybetList'>";
                showallAnswer += "<div class='T1' id='betdate' style='display: inline'>";
                showallAnswer += data[i]["betIssue"]; //期數
                showallAnswer += "</div>";
                showallAnswer += "<div class='T2' id='bettime' style='display: inline'>";
                showallAnswer += data[i]["betTime"]; //時間 
                showallAnswer += "</div>";
                showallAnswer += "<div class='T3' id='playform' style='display: inline'>";
                showallAnswer += data[i]["lotteryType"]; //彩種
                showallAnswer += "</div>";
                showallAnswer += "<div class='T4' id='appType' style='display: inline'>";
                showallAnswer += data[i]["playType"]; //玩法
                showallAnswer += "</div>";
                showallAnswer += "<div class='T5' id='appNum' style='display: inline'>";
                showallAnswer += data[i]["betNumber"];   //投注內容
                showallAnswer += "</div>";
                showallAnswer += "<div class='T6' id='oplottertNum' style='display: inline'>";
                showallAnswer += data[i]["serialNumber"];  //開講號
                showallAnswer += "</div>";
                showallAnswer += "<div class='T7' id='userbetmoney' style='display: inline'>";
                showallAnswer += data[i]["amount"]; //投注額
                showallAnswer += "</div>";
                showallAnswer += "<div class='T8' id='userwinMoney' style='display: inline'>";
                showallAnswer += data[i]["prize"]; //獎金
                showallAnswer += "</div>";
                showallAnswer += "<div class='T9' id='winStatus' style='display: inline'>";
                if (data[i]["status"] == 0)
                    showallAnswer += data[i]["status"]; //狀態
                else
                    showallAnswer += "撤单"; //狀態
                showallAnswer += "</div>";
                showallAnswer += "<div class='T10' id='statusUser' style='display: inline'>";
                showallAnswer += "<a href='#' class='detail pr-0' data-toggle='modal' data-target='.removeBetDetail'><span id='details'>详情</span></a>";
                showallAnswer += "<div class='T11' id='cancelall' style='display: inline' onclick='cancelBet(" + data[i]["betId"] + "," + i + ")'>";//betId
                showallAnswer +=  "<a  href = '#' class='remove pl-0' ><span>撤单</span></a>";
                showallAnswer += "</div>";                    
                showallAnswer += "</div>";
                showallAnswer += "</div>";
            }

            $("#myallBet").empty().append(showallAnswer);
        }
    });
}

//一鍵撤單
function onetimebet(playtype1,playtype2,clicknum,betmoney){
    var shishiopen = document.getElementById("shishidate");
    var betlogo = document.getElementById("logoname");
    var today = new Date(); 
    hour = (today.getHours() < 10 ? '0' : '') + today.getHours();// 取得时数
    minute = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes(); // 取得分数
    var todayAtMidn = hour + ':' + minute;
    
    var showallAnswer ="";
            showallAnswer += "<div class='listInfo align-items-center d-flex justify-content-around even'  id='mybetList'>";
            showallAnswer += "<div class='T1' id='betdate' style='display: inline'>";
            showallAnswer += shishiopen.innerHTML;
            showallAnswer += "</div>";
            showallAnswer += "<div class='T2' id='bettime' style='display: inline'>";
            showallAnswer += todayAtMidn;
            showallAnswer += "</div>";
            showallAnswer += "<div class='T3' id='playform' style='display: inline'>";
            showallAnswer += betlogo.innerHTML;
            showallAnswer += "</div>";
            showallAnswer += "<div class='T4' id='appType' style='display: inline'>";
            showallAnswer += play_type1 + play_type2;
            showallAnswer += "</div>";
            showallAnswer += "<div class='T5' id='appNum' style='display: inline'>";
            showallAnswer += 
            showallAnswer += "</div>";
            showallAnswer += "<div class='T6' id='oplottertNum' style='display: inline'>";
            showallAnswer += "</div>";
            showallAnswer += "<div class='T7' id='userbetmoney' style='display: inline'>"; 
            showallAnswer += "</div>";
            showallAnswer += "<div class='T8' id='userwinMoney' style='display: inline'>";
            showallAnswer += "</div>";
            showallAnswer += "<div class='T9' id='winStatus' style='display: inline'>";
            showallAnswer += "</div>";
            showallAnswer += "<div class='T10' id='statusUser' style='display: inline'>";
            showallAnswer += "<a href='#' class='detail pr-0' data-toggle='modal' data-target='.removeBetDetail'><span id='details'>详情</span></a>";
            showallAnswer += "<div class='T11' id='cancelall' style='display: inline' onclick='cancelBet(" + data[i]["betId"] + "," + i +")'>";//betId
            showallAnswer +=  "<a  href = '#' class='remove pl-0' ><span>撤单</span></a>";
            showallAnswer += "</div>";                    
            showallAnswer += "</div>";
            showallAnswer += "</div>";
             

     $("#myallBet").empty().append(showallAnswer);

    // reset all of the button color.
    if ($(".fl").hasClass("active")) {
        $(".fl").removeClass("active");
    }
    
}

//撤單  
function cancelBet(betid, childrenNum) {
    var changeDiv = document.getElementById('myallBet').children[childrenNum];
    var cancaltheBet = changeDiv.children[9].innerHTML = "<a href='#' class='detail pr-0' data-toggle='modal' data-target='.removeBetDetail'><span id='details'>详情</span></a>";
    var betStatus = changeDiv.children[8].innerHTML = "撤单";

    $.ajax({
        'url': 'Home/betCancelUpdate',
        'type': 'GET',
        'dataType': 'json',
        'data': { "betid": betid },
        'success': function (response) {

            $("#myallBet").empty().append(showallAnswer);
        }
    });
}



