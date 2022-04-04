# vscode-ditto 🧑‍💻

Ditto language support for [Visual Studio Code](https://code.visualstudio.com/).

> ⚠️ Very much a work-in-progress, don't expect much (yet).

## Installing

This extension isn't _currently_ available on the [marketplace](https://marketplace.visualstudio.com/).

In the meantime, you can install it like so...

```sh
# Install dependencies (if you haven't already)
npm install

# Generate the .vsix file
npm run package

# Install the .vsix file
# (replacing VERSION with the output of the previous command)
code --install-extension ./vscode-ditto-VERSION.vsix
```

## Features

All functionality is provided by the [ditto language server](https://github.com/ditto-lang/ditto/tree/main/crates/ditto-lsp).

- [x] Semantic highlighting
- [x] Formatting
- [ ] Diagnostics
- [ ] Go-to definition
- [ ] Hover
- [ ] Completion
- [ ] Snippets
- [ ] Renaming
