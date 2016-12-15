# requireJs-test
RequireJS采用不同的方法来加载脚本，它鼓励模块化编程，使用RequireJS编程不但可以模块化编程
而且他依旧可以运行的很快。

RequireJS鼓励使用模块ID，而不是像原来那样使用script标签使用url引入。

RequireJS加载代码时候，其相对路径为baseUrl，baseUrl通常被设置为data-main指定文件的目录

默认情况下不要在模块id上加上.js后缀，requireJS会在运行时自己加上

<!--加载requirejs脚本的script标签加入了data-main属性，这个属性指定的js将在加载完
    reuqire.js后处理，我们把require.config的配置加入到data-main后，就可以使每一个页面
    都使用这个配置，然后页面中就可以直接使用require来加载所有的短模块名data-main还有一个
    重要的功能，当script标签指定data-main属性时，require会默认的将data-main指定的js为
    根路径，是什么意思呢？如上面的data-main="js/main"设定后，我们在使用require(['jquery'])
    后(不配置jquery的paths)，require会自动加载js/jquery.js这个文件，而不是jquery.js-->


    <!--实际上，以下面的代码为例，就算后面配置了jquery的path,如：js/lib/jquery.min ,
     require中加入了jquery模板，require还是会这样去加载：js/lib/jquery，
     所以如果我们在lib中只放了压缩后的jquery.min而没有放jquery，就会报错，
     说是找不到js/lib/jquery.js. 我不知道是什么原因。
     奇怪的是，改进写法demo2.html这个里面没有用data-main,但是像上述做法就不会出错，
     神啊，告诉我是啥原因吧，疯了。。。-->