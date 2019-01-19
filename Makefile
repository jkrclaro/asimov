deploy: 
	cd humblepage && npm run build && rm -rf ../humblepage.github.io/static && mv build/* ../humblepage.github.io
	cd humblepage.github.io && git add . && git commit -m 'update' && git push

start:
	cd humblepage	&& npm run start