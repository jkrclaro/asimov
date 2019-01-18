deploy: 
	cd humblepage && npm run build && rm -rf ../humblepage.github.io/static && mv build/* ../humblepage.github.io

start:
	cd humblepage	&& npm run start