{extends "designs/site.tpl"}

{block "title"}{$dashboardTitle}&mdash;{$dwoo.parent}{/block}

{block "css"}
    {$dwoo.parent}
    {cssmin "looker-embed.css"}
{/block}

{block "body-class"}looker-embed{/block}

{block "header-wrapper"}
    <header class="header site">
        {block "header-content"}
            <h1>{$dashboardTitle}</h1>
        {/block}
    </header>
{/block}

{block "content-wrapper"}
    <main class="content site" role="main">
        {block "iframe"}
            <iframe
                src="https://building21.looker.com/embed/{$dashboardType|default:dashboards}/{$dashboardId}?theme={$theme|default:Staff_StudentPLP}&allow_login_screen=true"
                scrolling="yes"
                frameborder="0">
            </iframe>
        {/block}
    </main>
{/block}

{block "footer-wrapper"}{/block}
