var path = require('path'),
    fs = require('fs'),
    mkdirp = require('mkdirp'),
    _ = require('./util');

var cwd = process.cwd();

try {
    var config = require(path.resolve(cwd, 'linkfile'));
} catch (e)
{
    console.log('Configuration file "linkfile.js" is not found!');
    process.exit();
}

_.each(config, function (files, output)
{
    output = path.resolve(cwd, output);

    mkdirp(output, function (err)
    {
        if (err) return console.error(err);

        files.forEach(function (file)
        {
            file = path.resolve(cwd, file);

            var fileName = path.basename(file),
                outputPath = path.resolve(output, fileName);

            fs.symlink(file, outputPath, function (err)
            {
                var linkMsg = 'Link: ' + file + ' -> ' + outputPath;

                if (err) linkMsg += ' Error!';

                console.log(linkMsg);
            });
        });
    });
});
