$(function () {
  let arrList = [{
      coverImg: "./img/news/news1.jpg",
      title: "BTA | 张犁 ：为什么需要一个通用...",
      content: "作为多链结构，在UDAP平台可有很多不同的应用…",
      url:"https://mp.weixin.qq.com/s?__biz=MzU2MTE1NDk2Mg%3D%3D&mid=2247485134&idx=3&sn=056a25361e0f09dbaeec6b25fb8c667e&scene=45#wechat_redirect",
      date: "28 April 2018"
    },
    {
      coverImg: "./img/news/news2.jpg",
      title: "杀手级应用还未出现？UDAP想建一...",
      content: "和一众区块链创业者比起来，UDAP基金会张犁想做的事情很不一样。",
      url:"https://mp.weixin.qq.com/s?__biz=MzU1MDczNDY1OA==&mid=2247483665&idx=1&sn=64daa77e67edcd24447f948ae2664436&chksm=fb9d5f3cccead62a7b3a6e9ca458f21f98022acddb20296ddec49d0483acabfbc458bdd30a58&scene=0&key=e0b8d9a8d980553acf95354b75c05113cd0263156b1482fa630e10737dc3387e1eba4a5e227d338110042d7d421d68013a9941771d2253502d4bb21249d36a594b6a37f21e89f87959ef436aa1b182ec&ascene=0&uin=MTE2MTY3MzcyMA%3D%3D&devicetype=iMac+MacBookAir7%2C2+OSX+OSX+10.12.6+build(16G1212)&version=12020810&nettype=WIFI&lang=zh_CN&fontScale=100&pass_ticket=bK7h56DsjmM7zbP53FVPjmNZrlYM8J%2FC7QA4auQCIDJbJ265ECFZMbUG4b8o9hUK",
      date: "28 April 2018"
    },
    {
      coverImg: "./img/news/news3.png",
      title: "UDAP：激活你的代币生活",
      content: "与大家分享一次有趣的代币旅行经历…",
      url:"https://mp.weixin.qq.com/s?__biz=MzU1MDczNDY1OA==&mid=2247483668&idx=1&sn=fffb298e2e43a069e2f3e80e018ebc09&chksm=fb9d5f39ccead62fbcd383145fc3b8c3e95da2c27630eb6c9314c6d9302e8d77a0f7d1e545e9&mpshare=1&scene=1&srcid=0427nFTV1xW2olpbfyNGI5mx&key=e0b8d9a8d980553a26459a74652f869c1f438b33c7174b50ef5b7c453e599ec807239a0834643a2b25ce08761b0875db55b1e8b882db3060cceff713003b9742c8a771c964abf84e9c1d8051f77019e6&ascene=0&uin=MTE2MTY3MzcyMA%3D%3D&devicetype=iMac+MacBookAir7%2C2+OSX+OSX+10.12.6+build(16G1212)&version=12020810&nettype=WIFI&lang=zh_CN&fontScale=100&pass_ticket=bK7h56DsjmM7zbP53FVPjmNZrlYM8J%2FC7QA4auQCIDJbJ265ECFZMbUG4b8o9hUK",
      date: "28 April 2018"
    },
  ];

  var splicing = "";
  for (let i = 0; i < arrList.length; i++) {
    splicing =
      splicing +
      '<div class="media new__wrap">' +
      ' <div class="media-left news__img">' +
      ' <a href="'+arrList[i].url +'" target="_blank">' +
      ' <img class="media-object" src="' + arrList[i].coverImg + '" alt="...">' +
      '</a>' +
      '</div>' +
      '<div class="media-body news__content">' +
      '<h4 class="media-heading">' +
      arrList[i].title +
      '</h4>' +
      '<p>' +
      arrList[i].content +
      '</p>' +
      '<p>' + arrList[i].date + '</p>' +
      '</div>' +
      '</div>';
  }
  $("#newsContent").html(splicing);


  function newPage() {
    let page_html = "";
    for (let i = 0; i < parseInt(arrList.length / 10); i++) {
      page_html =
        page_html +
        `
       <li class="on">1</li>
      `
    }
    $("#Page").html(page_html);
  }
  newPage();
})