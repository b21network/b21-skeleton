{extends "designs/site.tpl"}

{block "title"}Embed Demo&mdash;{$dwoo.parent}{/block}

{block "content-wrapper"}
    <div class="wrapper site">
        <main class="content site" role="main">

            <!-- START FULL-WIDTH CONTENT HERE -->
            <div style="width: 100%; height: 100%;">
                <iframe
                    src="https://building21.looker.com/embed/dashboards/161?allow_login_screen=true"
                    width=100%
                    height="2000"
                    frameborder="0">
                </iframe>
            </div>
            <!-- END SPACE FOR FULL-WIDTH CONTENT -->
        </main>
    </div>
{/block}