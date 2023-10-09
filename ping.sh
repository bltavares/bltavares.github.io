#!/bin/bash

declare -a sites=(
	'https://www.google.com/webmasters/sitemaps/ping?sitemap=https://blog.bltavares.com/atom.xml'
	'https://www.bing.com/webmaster/ping.aspx?siteMap=https://blog.bltavares.com/atom.xml'
	'https://blogs.yandex.ru/pings/?status=success&url=https://blog.bltavares.com/atom.xml'
)

for x in "${sites[@]}"; do
	(
		set -x
		curl --silent "$x" >/dev/null
	)
done
