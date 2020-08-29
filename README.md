# Class Note Angular 10 Router
- 100 pages is one page (index.html / app component) in SPA => how? => router mechanism
- Only app component keep live in all Angular, other component，就是換component
- no wild card in real word -> hard to debug
    - the default active css class functionality will active include. parent and selected child note, and you can de-active
    - hash router and original route is nearly no dif for user... and SEO is a better for not hash, and sometimes, we can't rewrite url..we have to use hash route
    - use `a-router` intelligence to avoid type wrong word
    - suggest not to use `auto-save` in vscode, due to its continous. building and sometimes mess up the build process (but I prefer auto-save and I will constantly rebuild)
- state
    - 路由就是狀態管理
    - 類別裡面的屬性就是資料就是狀態
    - 狀態會消失，所以需要管理
    - JS的物件就是狀態，重跑，存在記憶體裡面，F5就消失了。
    - 你進入一個畫面，點了很多頁，你reload救回到首頁了嗎？沒有喔。有路由機制再進行"狀態管理"。
    - 這個機制就是管理 網址路徑 和 元件 的關係
    - 利用網址來記錄狀態
    - 其他記錄方式
        - localStorage, sessionStorage, indexDB....打開你的 application in dev tool, 很多存狀態的方法，當然也可以放 text, 或是放server
            - 沒事不要做狀態管理，KISS
            - 不然就是客戶說要offline...
            - HTML5很多技術可以用
- hash location strategy and path location strategy
- 路由參數有分必要color/:type和非必要?app=23&size=2 類似 query string
    - 拿參數
        - 注入 router 路由器 and route（type 是 已經啟用的路由）
        - 取法
            - route.snapshop
            - 訂閱方式 route.paraMap.subscribe
                - 切換參數都是在同一個路由下，需要用這個
            - .queryParamMap
- ctrl + space -> 當你沒有時，你又需要看有哪些property, 可以用這個
- f12 可以去definition
- lazy load -> for module
    - you can put lazy load module in lazy load module
    - you can do anove via cli schematic, no need to move code by yourself
- ngx-quicklink
可視範圍看到的都先load
- 這個人也有另一個套件，guess.js, 可以去抓google analytics分析然後去判斷要先load那一個
- 前端不可信任，後端吃進來的一定都要驗證
- 用overide可以直接改前端，你就可以找到route guard的地方，把那些code return true
- 寫API也是，也要檢查
- 攻擊都是攻擊後端，前端本來就看光光的
- 保護做到後端
- JWT: header, payload, signaturer
- key always put backend
- [http://www.jsfuck.com/](http://www.jsfuck.com/)
- aaencode or [https://blog.techbridge.cc/2016/07/16/javascript-jsfuck-and-aaencode/](https://blog.techbridge.cc/2016/07/16/javascript-jsfuck-and-aaencode/)
- CanDeactive
讓你無法離開
譬如你填表單，你可以讓這個人是否可以離開（依照表單狀態, touch, dirty)
true -> 可以離開
false -> 不可離開
可以讓他離開前可以跳出一個dialog, 確定是否要離開

    CanLoad -> 是否可以lazy load