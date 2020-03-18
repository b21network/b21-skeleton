{extends "designs/site.tpl"}

{block "title"}Missed Ratings &middot; {$dwoo.parent}{/block}

{block "content"}
    {load_templates "subtemplates/paging.tpl"}

    <header class="page-header">
        <h2 class="header-title">Missed Ratings</h2>
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
        {foreach item=DemonstrationSkill from=$data}
            <tr>
                <td>{$DemonstrationSkill->Demonstration->Context}</td>
                <td>{personLink $DemonstrationSkill->Demonstration->Creator}</td>
                <td>{$DemonstrationSkill->Demonstration->PerformanceType}</td>
                <td>{$DemonstrationSkill->Skill->Code}</td>
                <td>{$DemonstrationSkill->Demonstration->Created|date_format}</td>
                <td>{$DemonstrationSkill->DemonstratedLevel}</td>
                <td><a href="/cbl/dashboards/tasks/student#{tif $.User == $Student ? 'me' : $Student->Username}/{$tasks[$DemonstrationSkill->DemonstrationID]->Task->Section->Code}">View Tasks Dashboard</a></td>
            </tr>
        {/foreach}
        </tbody>
    </table>

    {pagingArrows count($data) $total $limit $offset}
{/block}