all: | build update-wpa

build:
	docker run -v ${PWD}:/srv/jekyll jekyll/jekyll:3.8.5 jekyll build

update-wpa:
	docker run -v ${PWD}:/app bltavares/workbox generateSW .workbox-config

announce:
	bash ./ping.sh

.PHONY: build update-wpa
