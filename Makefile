all: | update-wpa

update-wpa:
	docker run -v ${PWD}:/app bltavares/workbox generateSW .workbox-config

.PHONY: update-wpa