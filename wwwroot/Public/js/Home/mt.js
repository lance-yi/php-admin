// b3170-京东评价
var strVar = "";
var not3appbiaoqians = "口感不错(158)|第一次买酒(16)|酒不错(88)|包装不错(24)|包装不错(24)|酒包装很好(28)|入口好(56)|酒味纯正(18)|好酒啊(36)|老牌名酒(13)|价格便宜(258)";
var not3appbiaoqian = not3appbiaoqians.split("|");
var not3appdianhuas = "189****9787[$a$]139****6431 [$a$]158****0966[$a$]134****9639[$a$]133****1163[$a$]135****5987[$a$]139****6917[$a$]133****6777[$a$]139****8736[$a$]138****2720[$a$]136****7461[$a$]139****6677[$a$]139****4503[$a$]";
var not3appcitys = "湖北省武汉市[$a$]上海市长宁区[$a$]广西壮族自治区柳州市[$a$]广西壮族自治区南宁市[$a$]山西省晋中市[$a$]上海市浦东新区[$a$]山东省威海市[$a$]浙江省金华市[$a$]四川省成都市[$a$]上海市长宁区[$a$]福建省泉州市[$a$]江苏省南通市[$a$]山西省晋中市[$a$]";
var not3appstars = "5[$a$]5[$a$]5[$a$]4.9[$a$]5[$a$]5[$a$]5[$a$]5[$a$]5[$a$]5[$a$]5[$a$]5[$a$]5[$a$]";
var not3apppingjias = "物流快又好，国酒茅台不用介绍！[$a$]给老爸买的，盼了好久，担心限购，就准备抢6箱，结果抢不了，今天一大早买了四箱（分两次），说好今天下午能到，结果下午六点还不能到，打电话问快递，说是快递员有事没发送，因为明天要上班，家里没人，就自己打车去取，来回车费40大洋，还不给报销。总体来说还挺满意，看包装应该是真的，等会验证一下，配送很快，但这一次不让人满意，希望改进。有情况后续跟进追评[$a$]大促活动非常给力，今天到货了，NFC验证没问题[$a$]包装好，没有任何漏酒，每年都买飞天，今年最难买，价格贵还要抢，但是这次买的放心，划算[$a$]真难抢，好不容易抢到1箱。[$a$]好不容易抢了四箱茅台酒飞天，好好收藏，物流快，第二天就送到门口，非常快，口感不错。非常满意！[$a$]早上看到果断下单，居然有货，然后第三天下午就送到了！[$a$]看到很多评论说买到假酒，心存疑惑，毕竟那么贵的东西买来就开瓶喝不大现实，存个几年如果不是真酒也够堵心。从外观来看和前两天在实体店买得一摸一样，除了日期，其余没有差别。没有漏酒，包装很好。称了一下，裸瓶946克，还是可以的。[$a$]噢耶！终于等到你！53度飞天茅台！立马就买两箱回来家里珍藏起来！上午从快递小哥接过尚品时，哈哈！好啦不说了，先把好酒藏起来先，等过年再拿出来和家人一起品尝！[$a$]买了一箱，包装完好，外面是用茅台的箱子装的。回来称重了一下，955克一瓶，950克2瓶，947克2瓶，最轻的945克一瓶。好像来去有点大。仔细观察了一下，不漏，没浓烈的酒味散出来。打开一瓶品尝了下，口感很好！国酒茅台不是盖的。[$a$]现在的飞天茅台就像楼价一样，不停地涨价又限购，年底不知道涨到什么价钱，上一年搞活动的时候不舍得买，现在又涨了几百块！53度的盒子比43度的盒子真的是好太多，但价钱也贵了一倍，这次活动能抢到，真是很幸运！[$a$]还不错，就是挺贵的，突发状况，一抢购就抢到了，不过地址一开始搞错了，也不能改地址，只有留着自己喝了[$a$]作为中国最好的酒真的秒杀国外的洋酒了，中餐佐餐第一选择！喝白酒就喝好酒！我爸说当年想和喝不起，一月工资只够买3瓶，现在我一月工资购买12瓶，喝酒还得茅台，强烈推荐！[$a$]";
var not3apptupians = "https://img.alicdn.com/imgextra/i4/767173256/TB2ppFIiXOWBuNjy0FiXXXFxVXa_!!767173256.jpg[tu]https://img.alicdn.com/imgextra/i1/767173256/TB2tV0Vif1TBuNjy0FjXXajyXXa_!!767173256.jpg[tu]https://img.alicdn.com/imgextra/i2/767173256/TB2sAlviXGWBuNjy0FbXXb4sXXa_!!767173256.jpg[$a$]https://img.alicdn.com/imgextra/i3/767173256/TB2F9xAiaSWBuNjSsrbXXa0mVXa_!!767173256.jpg[tu]https://img.alicdn.com/imgextra/i3/767173256/TB2Ev9bib9YBuNjy0FgXXcxcXXa_!!767173256.jpg[$a$]https://img.alicdn.com/imgextra/i1/767173256/TB2GFJsiXuWBuNjSszbXXcS7FXa_!!767173256.jpg[tu]https://img.alicdn.com/imgextra/i1/767173256/TB2GFJsiXuWBuNjSszbXXcS7FXa_!!767173256.jpg[tu]https://img.alicdn.com/imgextra/i3/767173256/TB2DaX1ib1YBuNjSszhXXcUsFXa_!!767173256.jpg[tu]https://img.alicdn.com/imgextra/i2/767173256/TB2TdRTih1YBuNjy1zcXXbNcXXa_!!767173256.jpg[$a$]https://img.alicdn.com/imgextra/i2/767173256/TB2nDxdieuSBuNjSsplXXbe8pXa_!!767173256.jpg[tu]https://img.alicdn.com/imgextra/i3/767173256/TB2.XRIiXOWBuNjy0FiXXXFxVXa_!!767173256.jpghttps://img.alicdn.com/imgextra/i2/767173256/TB2.kNEif5TBuNjSspcXXbnGFXa_!!767173256.jpg[$a$][$a$][$a$][$a$][$a$][$a$][$a$][$a$][$a$][$a$]";
var not3apptaocans = "贵州茅台飞天 53度 1箱6瓶装[$a$]贵州茅台飞天 53度 1箱6瓶装[$a$]贵州茅台飞天 53度 1箱6瓶装[$a$]贵州茅台飞天 53度 1箱6瓶装[$a$]贵州茅台飞天 53度 2箱12瓶装[$a$]贵州茅台飞天 53度 2箱12瓶装[$a$]贵州茅台飞天 53度 1箱6瓶装[$a$]贵州茅台飞天 53度 1箱6瓶装[$a$]贵州茅台飞天 53度 1箱6瓶装[$a$]【促销A】53°飞天茅台酒1件6瓶 [$a$]【促销A】53°飞天茅台酒1件6瓶 [$a$]贵州茅台飞天 53度 1箱6瓶装[$a$]贵州茅台飞天 53度 1箱6瓶装[$a$]";

var not3appdianhua = not3appdianhuas.split("[$a$]");
var not3appcity = not3appcitys.split("[$a$]");
var not3apppingjia = not3apppingjias.split("[$a$]");
var not3apptupian = not3apptupians.split("[$a$]");
var not3appstar = not3appstars.split("[$a$]");
var not3apptaocan = not3apptaocans.split("[$a$]");

function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期 
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;//获取当前月份的日期 
    var d = dd.getDate();
    return y + "-" + m + "-" + d;
}

strVar += "<style>\n";
strVar += ".not3comment{margin:0;padding:0;font:12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,\"\\u5b8b\\u4f53\",sans-serif}.mt{background-color:#f7f7f7;border:1px solid #eee;padding:10px;font:700 14px \"microsoft yahei\"}.not3comment .tag-list{height:22px;overflow:hidden}.not3comment .tag-list span{display:inline-block;line-height:20px;padding:0 9px;border:1px solid #e0e0e0;border-radius:2px;margin-right:10px;margin-bottom:10px;color:#999;cursor:pointer}.not3comment .not3comment-info{overflow:hidden;zoom:1;padding:25px 0}.not3comment .not3comment-info .not3comment-percent{width:90px;padding:15px 0 0 40px;float:left}.not3comment .not3comment-info .percent-tit{font-size:12px;color:#666;font-weight:400}.not3comment .not3comment-info .percent-con{line-height:110%;font-size:45px;color:#E4393C;font-family:arial}.not3comment .not3comment-info .percent-con span{font-size:23px}.not3comment .not3comment-info .percent-info{margin-left:90px}.not3comment .not3comment-info .percent-info .tag-list{height:auto;overflow:visible}.not3comment .not3comment-info .percent-rate{padding-top:15px;height:60px;overflow:hidden;zoom:1}.not3comment .not3comment-info .inner-rate{height:10px;overflow:hidden;border-radius:5px;background:#e4393c}.not3comment .not3comment-info .rate-info{color:#e4393c}.not3comment .not3comment-info .rate-info span{color:#999;float:right}.not3comment .not3comments-list{min-height:93px}.not3comment .not3comments-list .ui-page-wrap{text-align:right;padding-top:15px}.not3comment .not3comment-item{zoom:1;padding:15px;border-bottom:1px solid #ddd}.not3comment .not3comment-item .tag-list{padding-bottom:12px}.not3comment .not3comment-item .tag-list span{cursor:text}.not3comment .not3comment-item .tag-list span:hover{color:#999;border-color:#e0e0e0}@media screen and (max-width:481px){.not3comment .not3comment-item .user-column{margin-bottom:10px}.not3comment .not3comment-item .user-column div{display:inline}.J-pic-view-wrap img{max-width:90%;margin-bottom:10px}.not3comment .not3comment-info .percent-con{font-size:25px}}@media screen and (min-width:481px){.not3comment .not3comment-item .user-column{width:80px;float:left}.not3comment .not3comment-item .not3comment-column{margin-left:90px}.J-pic-view-wrap img{max-width:500px;margin-bottom:10px}}.not3comment .not3comment-item .user-info{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.not3comment .not3comment-item .user-info img{border-radius:50%;margin-right:5px}.not3comment .not3comment-item .user-level{padding-top:3px}.not3comment .not3comment-item .user-level span{color:#088000;margin-right:8px}.not3comment .not3comment-item .not3comment-star{width:78px;height:14px;background:url(https://img.alicdn.com/imgextra/i4/398223532/TB2M7f4aTIlyKJjSZFrXXXn2VXa_!!398223532.png) no-repeat}.not3comment .not3comment-item .star0{background-position:-80px 0}.not3comment .not3comment-item .star1{background-position:-64px 0}.not3comment .not3comment-item .star2{background-position:-48px 0}.not3comment .not3comment-item .star3{background-position:-32px 0}.not3comment .not3comment-item .star4{background-position:-16px 0}.not3comment .not3comment-item .star5{background-position:0 0}.not3comment .not3comment-item .not3comment-con{font-size:14px;line-height:180%;color:#333}.not3comment .not3comment-item .order-info{float:left;color:#999}.not3comment .not3comment-item .order-info span{margin-right:20px}.not3comment .not3comment-item .pic-list{padding-bottom:15px}.not3comment .not3comment-item .pic-list img{border:1px solid #e2e2e2;padding:1px;margin-right:6px}.not3comment .not3comment-item .pic-list .current img{border:2px solid #e53e41;padding:0}.not3comment .not3comment-item .pic-view{position:relative;border:1px solid #e3e3e3;margin:7px 0 11px;float:left}.not3comment .not3comment-item .not3comment-time{color:#999;clear:both}.not3comment .not3comment-item .append-time{color:#999}.not3comment .not3comment-message:after{content:\".\";height:0;visibility:hidden;display:block;clear:both}.J-thumb-img img{width:40px;height:40px;cursor:pointer}.user-info img{width:25px;height:25px}\n";
strVar += "<\/style>\n";
strVar += "<div class=\"not3comment\">\n";
strVar += "	<div class=\"mt\">商品评价<\/div>\n";
strVar += "	<div class=\"mc\">\n";
strVar += "		<div class=\"not3comment-info J-not3comment-info\" style=\"border-bottom: 1px solid #ddd;\">\n";
strVar += "			<div class=\"not3comment-percent\">\n";
strVar += "				<strong class=\"percent-tit\">好评度<\/strong>\n";
strVar += "				<div class=\"percent-con\">\n";
strVar += "					" + 99 + "<span>%<\/span>\n";
strVar += "				<\/div>\n";
strVar += "			<\/div>\n";
strVar += "			<div class=\"percent-info\">\n";
strVar += "				<div class=\"tag-list\">\n";
for (var i = 0; i < not3appbiaoqian.length; i++) {
    strVar += "					<span>" + not3appbiaoqian[i] + "<\/span>\n";
}
strVar += "				<\/div>\n";
strVar += "			<\/div>\n";
strVar += "		<\/div>\n";
strVar += "		<div class=\"J-not3comments-list not3comments-list ETab\">\n";
strVar += "			<div class=\"tab-con\">\n";
strVar += "				<div id=\"not3comment-0\" data-tab=\"item\">\n";
for (var i = 0; i < not3appdianhua.length; i++) {
    if (not3appdianhua[i] != "" && not3appdianhua[i] != "undefined") {
        strVar += "                    <!--kaishi-->\n";
        strVar += "					<div class=\"not3comment-item\">\n";
        strVar += "						<div class=\"user-column\">\n";
        strVar += "							<div class=\"user-info\">\n";
        strVar += "								<img src=\"https://img.alicdn.com/imgextra/i2/767173256/TB2k_qcib9YBuNjy0FgXXcxcXXa_!!767173256.gif\" class=\"avatar\"> <div>" + not3appdianhua[i] + "<\/div>\n";
        strVar += "							<\/div>\n";
        strVar += "							<div class=\"user-level\">\n";
        strVar += "								<span style=\"color:#e1a10a\">" + not3appcity[i] + "<\/span>\n";
        strVar += "							<\/div>\n";
        strVar += "						<\/div>\n";
        strVar += "						<div class=\"not3comment-column J-not3comment-column\">\n";
        strVar += "							<div class=\"not3comment-star star" + not3appstar[i] + "\">\n";
        strVar += "							<\/div>\n";
        strVar += "							<p class=\"not3comment-con\">\n";
        strVar += not3apppingjia[i] + "\n";
        strVar += "							<\/p>\n";
        strVar += "							<div class=\"pic-list J-pic-list\">\n";
        if (not3apptupian[i] != "" && not3apptupian[i] != "undefined") {
            tupin = not3apptupian[i].split("[tu]");
            for (var j = 0; j < tupin.length; j++) {
                if (tupin[j].indexOf("http") > -1) {
                    strVar += "								<a name=\"showimg" + i + "\" class=\"J-thumb-img\"><img src='" + tupin[j] + "'><\/a>\n";
                }
            }
        }
        strVar += "							<\/div>\n";
        strVar += "							<div id=\"showimg" + i + "\" class=\"J-pic-view-wrap clearfix\"><\/div>\n";
        strVar += "							<div class=\"not3comment-message\">\n";
        strVar += "								<div class=\"order-info\">\n";
        strVar += "									<span>" + not3apptaocan[i] + "<\/span><span>" + GetDateStr(-1) + "<\/span>\n";
        strVar += "								<\/div>\n";
        strVar += "							<\/div>\n";
        strVar += "						<\/div>\n";
        strVar += "					<\/div>\n";
        strVar += "                    <!--结束-->\n";
    }
}
strVar += "\n";
strVar += "				<\/div>\n";
strVar += "			<\/div>\n";
strVar += "		<\/div>\n";
strVar += "	<\/div>\n";
strVar += "<\/div>\n";

$(document).ready(function () {
    $("#not3apppingjia").html(strVar);
    $(".J-pic-list a").bind("click", function () {
        var o = $(this);
        if (!o.hasClass("current")) {
            $(".J-pic-list a").removeClass("current");
            o.addClass("current");
        }
        $("#" + this.name).html(o.html());
    });
});
// e3170-京东评价
