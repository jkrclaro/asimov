const { exec } = require('child_process');


class Website {

    create() {
        exec('npx create-react-app project', (err, stdout, stderr) => {
            console.log(err);
            console.log(stdout);
            console.log(stderr);
        })
    }

    build() {
        exec('cd project && npm run build', (err, stdout, stderr) => {
            console.log(err);
            console.log(stdout);
            console.log(stderr);
        })
    }

    hey() {
        console.log('Hey!')
    }
}

module.exports = Website;


if (require.main === module) {
    const website = new Website();
    website.create();
} else {
    console.log('oh no!')
}
