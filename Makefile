deploy: 
	cd $(PROJECT) && npm run build && rm -rf ../$(PROJECT).github.io/static && mv build/* ../$(PROJECT).github.io
	cd $(PROJECT).github.io && git add . && git commit -m 'update' && git push

start:
	cd $(PROJECT) && npm run start

new:
	npx create-react-app $(PROJECT)
	cd $(PROJECT)