<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Timelines</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <style type="text/css">
        #footer {
            margin-top: 150px;
            height: 60px;
        }
    </style>

</head>
<body>

<!--<div class="container">-->

<!--<div class="bs-docs-section clearfix">-->
<!--<div class="row">-->
<!--<div class="col-lg-12">-->
<!--<div class="page-header">-->
<!--<h1 id="navbar">Таймлайны</h1>-->
<!--</div>-->

<!--<div class="bs-component">-->
<!--<div class="navbar navbar-inverse">-->
<!--<div class="navbar-header">-->
<!--<button type="button" class="navbar-toggle" data-toggle="collapse"-->
<!--data-target=".navbar-inverse-collapse">-->
<!--<span class="icon-bar"></span>-->
<!--<span class="icon-bar"></span>-->
<!--<span class="icon-bar"></span>-->
<!--</button>-->
<!--&lt;!&ndash;<a class="navbar-brand" href="#">Brand</a>&ndash;&gt;-->
<!--</div>-->
<!--<div class="navbar-collapse collapse navbar-inverse-collapse">-->
<!--<ul class="nav navbar-nav">-->
<!--&lt;!&ndash;<li class="active"><a href="#">Active</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;<li><a href="#">Link</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;<li class="dropdown">&ndash;&gt;-->
<!--&lt;!&ndash;<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>&ndash;&gt;
-->
<!--&lt;!&ndash;<ul class="dropdown-menu">&ndash;&gt;-->
<!--&lt;!&ndash;<li><a href="#">Action</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;<li><a href="#">Another action</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;<li><a href="#">Something else here</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;<li class="divider"></li>&ndash;&gt;-->
<!--&lt;!&ndash;<li class="dropdown-header">Dropdown header</li>&ndash;&gt;-->
<!--&lt;!&ndash;<li><a href="#">Separated link</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;<li><a href="#">One more separated link</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;</ul>&ndash;&gt;-->
<!--&lt;!&ndash;</li>&ndash;&gt;-->
<!--</ul>-->
<!--&lt;!&ndash;<form class="navbar-form navbar-left">&ndash;&gt;-->
<!--&lt;!&ndash;<input class="form-control col-lg-8" placeholder="Search" type="text">&ndash;&gt;-->
<!--&lt;!&ndash;</form>&ndash;&gt;-->
<!--<ul class="nav navbar-nav navbar-right">-->
<!--&lt;!&ndash;<li><a href="#">Link</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;<li class="dropdown">&ndash;&gt;-->
<!--&lt;!&ndash;<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>&ndash;&gt;
-->
<!--&lt;!&ndash;<ul class="dropdown-menu">&ndash;&gt;-->
<!--&lt;!&ndash;<li><a href="#">Action</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;<li><a href="#">Another action</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;<li><a href="#">Something else here</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;<li class="divider"></li>&ndash;&gt;-->
<!--&lt;!&ndash;<li><a href="#">Separated link</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;</ul>&ndash;&gt;-->
<!--&lt;!&ndash;</li>&ndash;&gt;-->
<!--</ul>-->
<!--</div>-->
<!--</div>-->
<!--<div style="display: none;" id="source-button" class="btn btn-primary btn-xs">&lt; &gt;</div>-->
<!--</div>-->
<!--&lt;!&ndash; /example &ndash;&gt;-->

<!--</div>-->
<!--</div>-->
<!--</div>-->

<!--<div class="col-md-12" role="main">-->
<!--<div class="row">-->

<!--<p><a href="https://github.com/sushilshik/timelines">Код на Githab</a>. Радости жизни =)</p>-->

<!--</div>-->

<!--</div>-->

<!--</div>-->

<div id="wrap">

    <div class="container">
        <div class="masthead">
            <ul class="nav nav-pills pull-right">
                <li><a href="/timelines">Главная</a></li>
                <li class="active"><a href="about.php">Что это?</a></li>
                <li><a href="https://github.com/sushilshik/timelines">Код</a></li>
            </ul>
            <h3 class="muted">Таймлайны</h3>
        </div>
        <br>
        <br>

        <div class="page-header">
            <h1>Что это?</h1>
        </div>

        <p class="lead">&laquo;Исходные коды&raquo; и скрипты для генерации исторических таймлайнов.</p>

        <p>Существует уже довольно много онлайн-сервисов для создания таймлайнов. Но&nbsp;у&nbsp;них есть важные недостатки.
            Например, стили и&nbsp;интерфейсы онлайн-таймлайнов обычно фиксированные, то&nbsp;есть под себя не&nbsp;настроишь.
            Механизмы коллективной работы самопальные, а&nbsp;хотелось&nbsp;бы что-то вроде <a href="http://git-scm.com/">git</a>, то&nbsp;есть знакомую,
            профессиональную систему контроля версий.</p>

        <h5>Как работает?</h5>

        <p>Скрипт запускает Adobe Illustrator и&nbsp;согласно содержимому текстового файлика со&nbsp;списком дат рисует
            в&nbsp;Illustratore таймлайн&nbsp;&mdash; шкалу лет, а&nbsp;над ней ставит прямоугольнички-плашки событий,
            каждая плашка стоит как раз над своим местом на&nbsp;временнОй шкале таймлайна. Потом рисунок сохраняется в&nbsp;PDF
            файл. Чтобы добавить новую дату на&nbsp;таймлайн, нужно просто дописать строчку в&nbsp;текстовый файлик с&nbsp;&laquo;исходным
            кодом&raquo; таймлайна и&nbsp;опять запустить скрипт-построитель, который пересоздаст PDF файл. Для каждого
            таймлайна свой текстовый файл с&nbsp;&laquo;исходным кодом&raquo;&nbsp;&mdash; с&nbsp;конфигами и&nbsp;списком
            дат. Например, на&nbsp;основе данных из&nbsp;файла 1930-1947.txt строится таймлайн о&nbsp;Второй мировой
            войне, событиях ей&nbsp;предшествующих и&nbsp;последующих&nbsp;ей. На&nbsp;гитхабе в&nbsp;одном репозитории
            вместе лежат и&nbsp;файлы с&nbsp;&laquo;исходными кодами&raquo; таймлайнов и&nbsp;скрипты, которые строят
            изображения таймлайнов на&nbsp;основе этих &laquo;исходных кодов&raquo;. Как говорится, делайте форк и&nbsp;добавляйте
            свои даты в&nbsp;таймлайны.</p>

        <h5>Как поставить и пользоваться?</h5>

        <p>Чтобы строить таймлайны на&nbsp;своем компьютере&nbsp;&mdash; нужен Illustrator СС&nbsp;18 (скрипты писал под
            него на&nbsp;windows&nbsp;7) и&nbsp;ruby 2.2. В файле timeline.rb пропишите переменной illustrator_exe путь до файла illustrator.exe в вашей системе. Откройте cmd.exe и&nbsp;в&nbsp;директории проекта запустите
            команду &laquo;ruby timelines.rb 1913-1924.txt&raquo;. Из&nbsp;&laquo;исходников&raquo; файла 1913-1924.txt
            построится таймлайн о&nbsp;первой мировой, революции и&nbsp;гражданской. Код &laquo;наколеночный&raquo;&nbsp;&mdash;
            you are warned. And you are welcome.</  p>

        <h5>Почему под Illustrator?</h5>

        <p>Почему не&nbsp;в&nbsp;Inkscape, или не&nbsp;сразу в&nbsp;SVG, или вообще в&nbsp;TeX? В&nbsp;принципе
            ничто не&nbsp;мешает потом написать скрипты, которые на&nbsp;основе &laquo;исходников&raquo; таймланов будут
            строить схемы в&nbsp;перечисленных форматах. Потом. А&nbsp;причина выбора Illustrator, во-первых, в&nbsp;возможности
            в&nbsp;перспективе отправить pdf (или ai&nbsp;файл&nbsp;&mdash; в&nbsp;скрипте можно включить сохранение в
            .ai) сразу в&nbsp;издательство без лишних проволочек, во-вторых, в&nbsp;Illustrator есть встроенный стиль
            OuterGlow (Внешнее свечение)&nbsp;&mdash; им&nbsp;удобно оформлять плавно-высветляющим свечением плашки
            событий на&nbsp;таймлайне, размывая объекты вокруг плашки, в&nbsp;результате уменьшается ощущение
            скученности, &laquo;толкания локтями&raquo; элементов, свойственное насыщенным схемам.</p>

        <h5>Как отмечать неточные, спорные даты?</h5>

        <p>Некоторые важные для понимания истории периоды не&nbsp;имеют дат известных с&nbsp;точностью до&nbsp;дня.
            Поэтому, если даты приблизительные с&nbsp;точностью до&nbsp;месяца, спорные, то&nbsp;в&nbsp;подписи события
            добавляем в&nbsp;скобках тире и&nbsp;по&nbsp;соответствующие от&nbsp;него стороны буковки d&nbsp;или&nbsp;m,
            которые и&nbsp;означают неточную дату. Например, первый день бомбардировки Лондона ракетами Фау-1&nbsp;известен,
            а&nbsp;последний&nbsp;&mdash; нет, поэтому указываем &laquo;(-d)&raquo;. Если&nbsp;бы и&nbsp;первый день не&nbsp;был
            известен точно, то&nbsp;написали&nbsp;бы &laquo;(d-d)&raquo;. Если обе даты точные&nbsp;&mdash; пояснения не&nbsp;нужны.
            Если и&nbsp;день и&nbsp;месяц в&nbsp;году не&nbsp;известны точно&nbsp;&mdash; пишем, например, &laquo;(m-)&raquo;.
            Если день месяца точно не&nbsp;известен, то&nbsp;в&nbsp;&laquo;исходном коде&raquo; пишем 15-ый день, если
            аналогичная ситуация с&nbsp;месяцем, то&nbsp;прописываем &laquo;07&raquo; (июль). Если более-менее точный
            день или месяц известны, но&nbsp;вы&nbsp;не&nbsp;уверены&nbsp;&mdash; указываете известную цифру, но&nbsp;все
            равно добавляйте пометку. Для описываемых одной датой исторических событий в&nbsp;аналогичных случаях ставим
            пометку в&nbsp;скобках, но&nbsp;уже без тире, например &laquo;(d)&raquo;. Эти правила не&nbsp;окончательные,
            будем вместе дорабатывать.</p>

        <h5>Формат событий и периодов</h5>

        <p>Пример формата строки периода &laquo;17.07.1942,02.02.1943, Сталинградская битва, 35, g&raquo;. Перед номером
            дня или месяца ставим &laquo;лидирующий&raquo; ноль. Запятые являются частью формата, поэтому в&nbsp;названии
            события их&nbsp;не&nbsp;должно быть, иначе скрипт не&nbsp;отработает. Формат будем еще совершенствовать.
            Если у&nbsp;нас не&nbsp;период, а&nbsp;событие описываемое одной датой, то&nbsp;между первой и&nbsp;второй
            запятой не&nbsp;должно быть знаков или пробелов, например, &laquo;12.04.1961,,Полет Гагарина,50,g&raquo;.
            Цифра после третьей запятой означает расстояние от&nbsp;временной шкалы по&nbsp;вертикали в&nbsp;процентах,
            иначе говоря, от&nbsp;0&nbsp;до&nbsp;100 и&nbsp;чем больше, тем выше. Пока в&nbsp;основном располагаю
            события по&nbsp;высоте с&nbsp;учетом удобства и&nbsp;наглядности, а&nbsp;не&nbsp;их&nbsp;исторической
            важности. Буква &laquo;g&raquo; означает календарную шкалу относительно которой которой должно быть
            расположено событие, в&nbsp;данном случае это код григорианского календаря, но&nbsp;функция пока еще не&nbsp;реализована.</p>

        <h5>Планы</h5>

        <p>Добавить шкалу с&nbsp;вековым масштабом, на&nbsp;одном таймлайне выводить шкалы разных летоисчислений,
            вместе создавать новые таймлайны и&nbsp;наполнять их&nbsp;значимыми событиями.</p>

    </div>

    <div id="push"></div>
</div>

<div id="footer">
  <div class="container">
    <p class="muted credit">Таймлайны 2014</p>
    <p></p>
  </div>
</div>

<?php include_once("../analyticstracking.php"); ?>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/bootstrap.min.js"></script>
</body>
</html>