const Generator = require('yeoman-generator');
const { magentaBright } = require('chalk');
const yosay = require('yosay');

const files = [
    '.gitignore',
    'README.md',
    'tsconfig.json',
    'src/controllers/index.ts',
    'src/models/index.ts',
    'src/routes/index.ts',
    'src/service/index.ts',
]

const filesTpl = [
    '.env',
    'src/index.ts',
    'package.json',
]

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.appname = 'crud-example'
        this.port = '3000'
    }

    initializing() {
        this.log(yosay(`CRUD Example Generator by ${magentaBright('Valchan')}`));
    }

    prompting() {
        // https://yeoman.github.io/generator/Generator.html#prompt
        return this.prompt([
            {
                type: 'input',
                name: 'appname',
                message: `What's the project name?`,
                default: this.appname
            }, {
                type: 'input',
                name: 'port',
                message: 'Which port will this project run on?',
                default: this.port
            }
        ]).then((props) => {
            this.props = props;
        });
    }

    writing() {
        let props = this.props;
        let copy = this.fs.copy.bind(this.fs);
        let copyTpl = this.fs.copyTpl.bind(this.fs);
        // https://yeoman.github.io/generator/Generator.html#templatePath
        let tPath = this.templatePath.bind(this);
        // https://yeoman.github.io/generator/Generator.html#destinationPath
        let dPath = this.destinationPath.bind(this);

        filesTpl.forEach(file => copyTpl(tPath(file), dPath(file), props))
        files.forEach(file => copy(tPath(file), dPath(file), props))
    }

    install() {}

    end() {
        this.log(`${magentaBright('Everything is ready!')}`);
    }
};