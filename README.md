# link-all

Symlink files togother.

## Install

```
npm install -g link-all
```

## Usage

Inside your project folder, create a file named **linkfile.js**:

```javascript
module.exports = {
    // The key is target folder, the value is the file you want to symlink into it.
    'moduleA': [
        'js/moduleA.js:moduleB.js',
        // If you want to change the filename, append it after ":"
        'css/moduleA.css',
        'html/moduleA.html'
    ]
};
```

Run command `linkall`, it's going to create a **moduleA** folder containing three files from different directory.
