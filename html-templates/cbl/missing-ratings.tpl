{extends "designs/site.tpl"}

{block "title"}Missed Ratings &middot; {$dwoo.parent}{/block}

{block "content"}
    {load_templates "subtemplates/paging.tpl"}

    <header class="page-header">
        <h2 class="header-title">{tif $student != $.User ? $student->FirstNamePossessive} Missed Ratings</h2>

        <div class="page-buttons">
            <span class="button-group">
                <label class="muted">Download all results:&nbsp;</label>
                <a class="button small" href="?{refill_query format=json limit=0 offset=0}">JSON</a>
                <a class="button small" href="?{refill_query format=csv limit=0 offset=0}">CSV</a>
            </span>
        </div>
    </header>

    {if $.User->hasAccountLevel('Staff')}
        <form class="filter-list">
            <fieldset class="inline-fields">
                <h4 class="section-title">Filters</h4>

                {field
                    inputName=student
                    default=$.get.student
                    label='Student'
                    placeholder='jdoe'
                }

                <div class="submit-area">
                    <input type="submit" value="Apply Filters">
                    <a href="/missing-ratings" class="button">Reset Filters</a>
                </div>
            </fieldset>
        </form>
    {/if}

    <table class="auto-width row-stripes row-highlight">
        <thead>
            <tr>
                <th scope="col">Studio</th>
                <th scope="col">Teacher</th>
                <th scope="col">Task</th>
                <th scope="col">Skill</th>
                <th scope="col">Date</th>
                <th scope="col">Rating</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
        {foreach item=row from=$data}
            <tr>
                <td>{$row.studio}</td>
                <td>{$row.teacher}</td>
                <td>{$row.task}</td>
                <td>{$row.skill}</td>
                <td>{$row.demonstration_demonstrated_date|date_format}</td>
                <td>{$row.demonstrated_level}</td>
                <td><a href="{$row.link}">View Tasks Dashboard</a></td>
            </tr>
        {/foreach}
        </tbody>
    </table>
{/block}