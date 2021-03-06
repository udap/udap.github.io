# 区块链简史


一切都源于2008年的这篇文章： “Bitcoin: A Peer-to-Peer Electronic Cash System ”/“比特币， 一个对对等电子货币系统”。 这篇文章是一个自称“中本聪”的人这一个讨论加密学的学术邮件列表中发出来的。 

这篇文章的摘要说： 

“(比特币是一个)纯粹的对等人之间的电子现金, 它将允许在线支付从一方直接发送到另一方，而无需通过金融机构…. 我们提出了使用对等网络解决双重支出问题的解决方案。网络通过将交易的摘要放到持续进行的基于散列的工作证明链中来对交易打上时间戳，形成无需重做工作证明就无法更改的记录。 最长的链不仅可以证明事件发生的顺序，而且可以证明它来自最多的CPU计算工作。只要大部分CPU计算力由那些不会合谋来攻击网络的节点控制，这些节点就会产生最长的区块链而且领先攻击者。网络结构很简单。消息以尽力而为的方式进行广播，节点可以随意离开和重新加入网络，加入时接受最长的工作证明链来证明他们离开期间发生了什么。” 

简单地说， 中本聪发名了一种后来被称之为“区块链”的技术， 可以建立一个任何人可以随时加入或者离开的对等化的网络， 使得人和人之间可以不通过任何中介进行汇款。

多少人回顾这个这个时刻的时候， 用了极端的赞美之词：

- “这是自互联网以来最为伟大的发明”
- “改变了一切”
- “让人获得了自由”

当然反向的评论也很极端：

- “这是有史以来最大的金融泡沫”
- “彻头彻尾的庞氏骗局”
- “一切都将重归于零”


处于这个风暴中心的比特币到底是什么？

## 1. 万币之母 - 比特币

想象一下， 世界上有一个由上十万台电脑组成的计算机网络。 这些电脑都运行这一个相同的软件， 这个软件维护着一份数字的账本，这个帐本上记录了数以亿计的个人账户，以及这些账户之间相互发送数字的信息。这个账本在直观上更像一个传统的真实的账本，分成好多大小基本相同的页面，每一个页面上记录了几百笔交易的记录。页面之间用加密的方式互相串联在一起，每一页都有一个本页所有交易的加密指纹，这样就保证了所有的交易记录不能被修改或者删除， 或者插入。

每一个人都可以在这个网络上使用免费的软件创建一个或者多个帐号， 用于发送或者接受代表交易额的数字。 这个数字被称之为比特币。

一个人获得了一个比特币帐号的时候这个账号的余额（比特币账本中实际上没“余额”的概念，记录的是自从比特币创始以来所有的交易记录， 一个账户的余额是通过这个账户的来往金额相加计算出来的）实际上为零。 一个帐号获得比特币的方式有两种： 一是别的帐号向这个账号汇进比特币， 另一种是这个账号参与到比特币的挖矿过程， 并且在挖矿成功时获得比特币作为奖励。 

### 1.1. 挖矿

比特币是如何从无到有的？比特币在被称之为“挖矿”的过程产生的。 实际上这个过程非常类似于人类获得黄金的过程。 现在社会中流通的所有的黄金都是在监控重点挖掘出来。 不同的一点是， 我们所现在能看到的黄金都是在宇宙的演化过程中保存在地球之中。 比特币是在挖苦的过程中使用计算机算法计算出来的。 

挖矿本质上就是记账， 也就是向比特币账本添加经过核实的交易记录的过程。比特币是给被公众所接受的记账工作的奖励。

整个过程从发送交易开始。

拥有比特币的人可以向比特币网络发送一个汇款交易的请求。简化而言，这个汇款的请求就像人们发送一个电子邮件一样， 由下面几部分构成：
1. 发送者的账号
2. 接受者的帐号
3. 汇款金额的大小
4. 给记账人的小费
5. 发送人的数字签名

发送者把这条消息发送给比特币网络上的邻居。 这个邻居会把这条消息公布给他们的邻居， 通过这种方式这条消息会最终传遍给比特币网络上所有的节点。 

每一个节点收到消息以后，首先验证汇款人账户中有足够的余额。当然在比特币的概念中，这个余额是通过它过去的所有的汇入和汇出的记录计算出来的。验证无误以后，节点把这条消息放到节点节点自身的等待记账的所有交易记录的队列中。然后几点按照每个记录愿意给你记账人的小费的多少选择，其中一些把它放到一个数据块中，这个数据块也被称之为区块。每一个区块都会携带一个数字指纹，数字指纹的意义是保护区块中的内容不会被篡改。每一个区块都有一个指针指向了前一个区块的数字指纹，通过这种方法所有的区块都会环环相扣，形成一个长长的链条，这个链条就被称之为区块链。这个链条也就是我们所说的账本。

所有的节点都有阅读这个账本的权限。 所有的节点也有对本地账本的写的权限。 那到底所有的节点之间如何形成一个大家都共同认可的账本呢？

### 1.2. 共识

比特币网络通过一套规则来形成大家认可的账本。 这套规则被称之为共识机制。

比特币的共识机制叫做工作证明（Proof of work）。 这个机制要求所有参与记账的人必须做一个数学题目。这个数学的题目给了一个固定的计算公式（叫做“哈希函数”）要求“矿工”（也就是挖矿的计算机节点）使用不同的整数作为输入参数进行反复试算，直到函数输出的数字小于某个预设的数字（这个数字代表了挖出一个“块”的难度）。一个节点找到答案（也就是那个输入参数）以后，他马上把这个答案写到当前的区块中，并且在当前的区块中记录中向自己的帐号添加按照规则定好的一定数目的比特币，然后马上把这个区块向自己的邻居广播出去。以上这个步骤被称之为“挖矿”。邻居接到这个区块后以后马上进行简单的验算（这个验算所需要的时间非常短），一旦验算通过，这些邻居就把这个区块添加在自己的区块链的末尾。如果这个邻居原来也在做记账竞争的数学题。那么他会放弃已经做的工作然后从剩余的交易记录队列中选择新一批的交易来进行下一个你的记账的竞争。

比特币算法通过调整难度使得平均而言大概每10分钟会有一个区块会被大家认可并且追加到所有节点所维护的账本中。对每一次成功挖矿矿工会得到一定数量的比特币作为奖励。 在2016-2020年期间， 每一个被成功挖出的区块会得到12.5个比特币的奖励。 这个奖励的数字每四年会被减少一半，直到降为0（预计那将于 2140 年的某一天）。 按此累计， 比特币系统最多产生2,100万个比特币。在那以后， 挖矿的收入来自于区块内的所有交易所给予的小费。

### 1.3.  比特币网络是一只电老虎

因为比特币的挖矿就是进行反复的计算，所以实际上所有的节点都在进行着重复的劳动。这个过程需要消费大量的电力，实际上，当前区块练网路上从事挖矿工作，节点所消耗的电力已经超过了一些中等发达国家的电力消费。这种非常不绿色环保的挖矿机制是比特币系统被人诟病的一个地方。

这种机制除了消费电力以外，还有一个很大的缺点，就是效率比较低下，这是因为所有的几点都要相互之间，展开记账的竞争在。这一轮竞争中只有一个胜出者其他参与竞争的外框节点的工作都会被浪费掉，所以整个网络实际上的工作效率，大概也就相当于其中一个节点的工作效率。

但是这个机制也有他非常突出的优点，就是非常安全，因为所有的记录都是口消费大量的电力而得到的，一个可能的作弊的人，如果想修改这个链条上的记录的话，它需要消费同样多的电力才能达到目的。

### 1.4. 数字黄金

2009年比特币上线伊始， 就有社区成员认为这是一个革命性的平台， 可以让自由主义者和无政府主义者摆脱政府和大银行的控制。 但是似乎 连发明者中本聪或许都觉得心灰意懒， 在2011 年撂挑子， 退出比特币江湖， 从此不知所踪。

刚刚开始的时候，比特币只是作为一种数学游戏，在一个小圈子内部的一些计算机之间来来回回传递。 那时候很多人都不认为这种东西有任何价值更谈不上愿意花钱去购买这种东西，但是随着一些核心人员不断地持之以恒的宣传和鼓动，终于有些人觉得可以尝试把比特币和现实生活关联在一起，并且赋予这个数学以一定的价值。 由此可见， 比特币并没有什么内在的价值，所谓价值都是人们在以后赋予的。 其实查看人类社会文明发展过程中的货币本质上也都是这个规律。人类曾经赋予了贝壳以特殊的价值， 也曾赋予了郁金香这种价值， 同样也赋予了黄金， 白银， 甚至钻石这种特殊的价值， 而现在，在互联网上的一个部落赋予了比特币这种价值。 

比特币到底有何德何能获得这种过去只有黄金能获得的特殊荣耀呢？ 

1. 比特币有严密的防止作弊的机制。
2. 比特币的发行总量有上限来保证比特币的稀缺性。 
3. 比特币投放到市场的数量，在时间上有严格的规律性。
4. 比特币网络在运行中从来没有被攻破过。 

仔细想来这些特征，其实是任何要作为货币的载体，所需要的基本特征。 

### 1.5. 交易所

2010年， 有个程序员叫Jed McCaleb 意识到可以办一个交易所来买买比特币。 后来他打了一个网站叫 mtgox.com，短暂运行以后卖给了一个住在日本的法国人Mark Karpelès, 后来这个交易所承载了比特币几乎80% 的交易量， 直到 2014 年这个交易所因为 85万枚比特币被盗而宣布破产。 

有了和法币的交换的渠道，比特币开始变得有一些货币的影子了，使用经济学的术语，这叫做比特币开始有了流动性。

那个时候比特币的价格也就几美分，人们根本不觉得比特币是一种多么稀缺的东西，人们随意的相互赠送，比特币，甚至拿比特币来买一些非常廉价的东西，甚至比特币的钱包被丢了也不当成一回事情。

到2018 年初， 各种比特币交易所的数量达到了将近200 所。 价格也从分文不值涨到了可观的 10000 美元。 

￼
（需要使用一张包涵2018 年价格的图片）



这其中有一个人的名字叫做Andreas Atonopolous (简称 AA) 的人， 这个人后来被称之为比特币的布道者。 这个人虽然是计算机硕士出生，但是他对金融对社会学对经济学都有着他独特的见解，他有着非常伶俐和清晰的口齿，同时在表达的时候又具有让人能够接受的温和感，所以他经常出现在各种比特币的演讲会和交流，甚至政府的关于比特币的听证会上。 在会上他能够一口气脱稿发表演讲， 这些演讲不修改一个字可以发表。 Andreas 这个人的思想有着强烈的个人主义和自由主义倾向， 但是他的表达非常温和得体。 

早年的时候他通过玩挖矿有上千枚的比特币。 后来他拿去付房租和换比萨饼吃了。 到2017年底的时候他竟然手中没有一个比特币， 勉强考演讲和出书维持生计。  不过2018 年初当他不经意把这个略显尴尬的事实分享到 Twitter 上， 24 小时之内， 他收到了价值超过 100 万美元的比特币。 无数人在他的twitter 留言， 感谢他为比特币在主流社会发声的杰出贡献， 也感谢他的演讲让理解比特币， 并且投资比特币获得可观回报。 
 
### 1.6. 分叉

TO DO

### 1.7. 钱包



## 2. 以太坊 - 区块练2.0


2014年一种新的区块练技术支撑的加密货币产生了。这个加密货币的名字叫Ethereum，中文翻译成以太坊。 发明者是不到二十岁的俄裔加拿大人 Vitalik Buterin。汉语界对他崇拜的人叫他 “V神”。 以太坊实现了所谓的“智能合约”。 智能合约宣告了区块链 2.0 时代的到来。

### 2.1. 智能合约

如果比特币是*钱*， 那么以太坊就是*可程序控制的钱*。 

通俗来讲，比特币的帐号中只记录资金来往而已，以太坊不仅仅记录资金的来往和余额，而且以太坊的账号可以编写一段小小的程序。 任何用户可以通过向这个小程序发送请求来完成较为复杂的计算工作。 不仅仅如此。 以太坊中账号还可以拥有自己的小数据库。 以太坊体系可以理解成像一个大的集团公司。这个集团公司有一个大家共同维护的账本。同时集团公司所拥有的各个子公司和部门还可以拥有自己的小账本， 这些小账本受智能合约的控制。

智能合约的产生给区块链科技插上了一双巨大的翅膀，在比特币的基础上带来了一个无边界的想象力的空间。

智能合约的影响是空前的。到目前为止，具有智能合约的以太坊所产生的流量，已经超过了其他所有的区块链网络的总和。一个令人震惊的数据显示， 全世界每天调用以太坊的流量已经超过了调用谷歌的流量！ 这毫无争议地意味着一个新时代的到来。

### 2.2. 人人都能发行加密货币

智能合约最基本的应用是用它来创建一种新的加密货币。在智能合约出现之前，要创建一种加密货币，必须创建一种新的区块链，并且运行这个区块链的网络。在有了智能合约以后，开发者可以利用智能合约内置的数据库，创建一种新的加密货币。这种加密货币运行在以太坊上， 同时有自己的发行规则， 一切都写在人人都能看见的智能合约的代码中。人们通过特定的钱包查询他拥有的这些自定义的加密货币的余额，并且可以在账户之间传送这种特殊的加密货币。

为什么要发行自己的加密货币呢？说来话长。这其实牵涉到货币的基本功能。按照传统经济学的观点，一个货币具有三个属性。一是价值存储，二是商品定价的的单位。三是价值流通和交换的载体。发现在一个相对封闭的经济体中需要一个好的，方便的。工具，来实现经济体内的价值的循环。法币当然是一个选择。但是人们发现使用法币，经常不方便。最不方便的地方是因为法币的流通性太强。它破坏了一个经济体的设计者所希望达到的某种自我保护和价值体内循环的愿望。如果一个经济循环体内一切的价值载体和交换的工具都是有法币来充当的话，这个价值体会随时被用户拿走而流失。这样经济体设计所需要的保护就完全没有了围墙。

法币都是保守的（在一些经济破产的国家除外）。法币体系其实不愿意和比特币等虚拟币打交道。

过去的一些经济模型中，人们发明了积分或者奖励，来作为特定经济体内价值循环的载体。但这种经济价值载体具有不透明性和可被操纵的可能。而加密货币的出现，一方面满足了经济体内循环中价值载体的需求，同时本身的透明性，也使得用户更为乐意接受这种价值载体。


### 2.3. ICO

智能合约可以用于创建非常多有创造性的应用。但是到目前为止，没有什么应用比得上大名鼎鼎的ICO （Initial Coin Offering/初始货币售卖邀约的简称）。

但有了区块链的技术，使得发行自己的货币变得非常容易的时候。人们又构思出了一种新的玩法。那就是。他自己发行的这种新的货币。作为向公众。预售某种未来的产品和服务的符号。销售给公众。一般的做法是让公众使用较为流行的，加密货币，例如比特币或者一台。来购买自己定义和发行的加密货币。这个购买的过程发生在。互联网上的众多的，所谓加密货币交易所中。
这种向公众销售自定义加密货币的过程，就被称之为ico。

ICO最早是以太坊所开创的交易模式。现在这种模式已经被广为采用。市面上能够查到的公开的加密货币已经有2000种以上。并且每天都在产生新的加币货币的种类。绝大部份的加密货币产生的原因都是为了拿来圈钱。 

不幸的是，科技的创新，使得人性中的贪婪找到了一个最为便捷的实现方法得到满足。ICO的世界充满谎言，虚假新闻庄家对散户的赤裸裸掠夺， 就像任何一个新技术的产生永远会被我们称之为坏人的人群首先探索并且成规模使用一样。ICO 是给贪婪的人群提供了一个，快速从其他人手中掠夺财富的机会。

出现了大量的公司，他们向公众许诺一片光明的前景， 吸引公众用他们的比特币或者以太币来购买自定义发行的虚拟货币。一旦他们收到了流通性更好的虚拟货币， 他们就去买兰博基尼，然后开到沙滩上晒太阳。而公众对他们毫无办法， 因为在他们的“招股书”上甚至没有留下任何真实的联系方式。 

有比较激进人士的估计，现在市面上99%以上的自定义货币都没有任何价值。 除了存心欺骗的意外， 这其中也不乏很多团队，他们真心实意想利用这种机制来进行融资来创造创新，这样的创新最终以失败告终，导致发行的自定义虚拟货币没有任何价值。 

同时，现有的法律法规在处理ICO上也显得“笨手笨脚”。 ICO 大致类同于 证券体系中的IPO（就是所谓的公司“上市”）。 各国对IPO都有成体系的规范和法律。 很多法律都有几十年以上的历史。 面对加密货币和ICO， 现成的法律的充足性和适用性出现了很大的争议。  

ICO的争议是如此巨大。以至于不少的国家性质IC区的活动，当然，中国是其中最大的国家。对于中国政府而言，ICO极大的冲击了现在当前的金融秩序，引发或者将会引发欺诈带来的大量的群体事件，这对于追求稳定的执政风格而言是不可接受的，但是从全球的氛围和历史的角度来看，IC区有着他积极创新的一面，他开辟了一组创业团队融资的一种崭新的方法，同时能够使得更多的消费者能够参与和支持符合自己理想和趣味的投资项目，而这些财富的机会，再过去只在已经拥有大量财富的人（被美其名曰“合格投资者”）的手中。

### 2.4. 依旧低下的效率


todo


## 3. 区块链 3.0

to do


## 4. 围绕加密货币的巨大的争议

争议1:  虚拟币是货币还是商品还是什么都不是？
争议2: ICO 合法吗？
争议3：虚拟币是庞氏骗局吗？
争议4: 加密货币会有未来吗？
争议5:  区块链和加密货币可以分开吗？
争议6:  去中心化真的是未来的趋势吗？
争议7:  中本聪到底是谁？






