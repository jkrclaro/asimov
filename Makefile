deploy: 
	cd $(PROJECT) && npm run build && rm -rf ../$(PROJECT).github.io/static && mv build/* ../$(PROJECT).github.io
	cd $(PROJECT).github.io && git add . && git commit -m 'update' && git push

start:
	cd $(PROJECT) && npm run start

new:
	npx create-react-app $(PROJECT)
	cd $(PROJECT) && mkdir src/components
	cd $(PROJECT) && npm i react-router-dom webfontloader bootstrap

h:
	cd humblepage && npm run start

n:
	cd nilsfischerkerrane && npm run start

p:
	cd pilarlokko && npm run start