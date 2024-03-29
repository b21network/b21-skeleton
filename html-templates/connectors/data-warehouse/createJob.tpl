{extends designs/site.tpl}

{block title}Push to Data Warehouse &mdash; {$dwoo.parent}{/block}

{block content}
  <h1>Push to Data Warehouse</h1>
  <h2>Input</h2>
  <h3>Run from template</h3>
  <ul>
    {foreach item=TemplateJob from=$templates}
      <li><a href="{$connectorBaseUrl}/synchronize/{$TemplateJob->Handle}"
          title="{$TemplateJob->Config|http_build_query|escape}">Job #{$TemplateJob->ID} &mdash; created by
          {$TemplateJob->Creator->Username} on {$TemplateJob->Created|date_format:'%c'}</a></li>
    {/foreach}
  </ul>

  <h3>Run or save a new job</h3>
  <form method="POST">
    <fieldset>
      <legend>Job Configuration</legend>
      <p>
        <label>
          Pretend
          <input type="checkbox" name="pretend" value="true" {refill field=pretend checked="true" default="true"}>
        </label>
        <span class="hint">Check to prevent saving any changes to the database</span>
      </p>
      <p>
        <label>
          Create Template
          <input type="checkbox" name="createTemplate" value="true" {refill field=createTemplate checked="true"}>
        </label>
        <span class="hint">Check to create a template job that can be repeated automatically instead of running it
          now</span>
      </p>
      <p>
        <label>
          Email report
          <input type="text" name="reportTo" value="{refill field=reportTo}" length="100">
        </label>
        <span class="hint">Email recipient or list of recipients to send post-sync report to</span>
      </p>
      <p>
        Exports
        <span class="hint">Check to export to data warehouse.</span>
      </p>
      {$exports = \Slate\Connectors\DataWarehouse\Connector::$exports}
      <p>
        {foreach from=$exports key=path item=cfg implode="<br>"}
          <label>
            {$path}
            <input type="checkbox" name="exports[]" value="{$path}" {refill field=exports checked="$path" default="$path"}>
          </label>
        {/foreach}
      </p>
      <p>
        <label>
          Leave Backups?
          <input type="checkbox" name="leaveBackups" value="true"
            {refill field=leaveBackups checked="true" default=false}>
          <span class="hint">Useful for debug purposes</span>
        </label>
      </p>
    </fieldset>

    <input type="submit" value="Synchronize">
  </form>
{/block}