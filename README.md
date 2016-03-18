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
    'moduleA': [
        'js/moduleA.js',
        'css/moduleA.css',
        'html/moduleA.html'
    ]
    // The key is target folder, the value is the file you want to symlink into it.
};
```

Run command `linkall`, it's going to create a **moduleA** folder containing three files from different directory.
