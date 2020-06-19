{extends "designs/site.tpl"}

{block "title"}Embed Demo&mdash;{$dwoo.parent}{/block}

{block "content-wrapper"}
    <div class="wrapper site">
        <main class="content site" role="main">

            <!-- START FULL-WIDTH CONTENT HERE -->
            <div style="width:80%; height: 100%; margin:0 auto;">
                    <iframe
                        src="https://building21.looker.com/embed/dashboards/162?theme=Test"
                        width=100%;
                        height=1000px;
                        scrolling="no";
                        frameborder="0">
                    </iframe>
                </div>
            <!-- END SPACE FOR FULL-WIDTH CONTENT -->
        </main>
    </div>
{/block}