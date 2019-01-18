deploy: 
	cd humblepage && npm run build && rm -rf ../static && mv build/* ../

start:
	cd humblepage	&& npm run start