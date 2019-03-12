deploy: 
	cd $(PROJECT) && npm run build && rm -rf ../$(PROJECT).github.io/static && mv build/* ../$(PROJECT).github.io
	cd $(PROJECT).github.io && git add . && git commit -m 'update' && git push

start:
	cd $(PROJECT) && npm run start

new:
	npx create-react-app $(PROJECT)
	cd $(PROJECT) && mkdir src/components
	cd $(PROJECT) && npm i react-router-dom webfontloader bootstrap

l:
	cd leprechaundesign && npm run start

ld:
	make deploy PROJECT=leprechaundesign

h:
	cd hoppyhistory && npm run start

hd:
	make deploy PROJECT=hoppyhistory

p:
	cd pilarlokko && npm run start

pd:
	make deploy PROJECT=pilarlokko

c:
	cd ciaramccormack && npm run start

cd:
	make deploy PROJECT=ciaramccormack