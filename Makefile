deploy: 
	cd clearwdd && npm run build && rm -rf ../static && mv build/* ../
