---
layout: page.liquid
pageTitle: Service Status
description: Hosted Service Uptime (Updated Hourly)
---

<!-- CSS stylesheet in body (bad practice, but it is what it is) -->
<link rel=StyleSheet type="text/css" href="https://trentwil.es/a/flags2.min.css"/>

<!-- override table width -->
<style>
table {
  width: 80%;
}
</style>

{{ uptimeTable }}