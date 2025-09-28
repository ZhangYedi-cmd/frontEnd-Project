# Frontend Engineering Learning Project

A comprehensive collection of frontend engineering code examples and learning materials covering various build tools, module systems, and optimization techniques.

## 📋 Table of Contents

- [Project Structure](#-project-structure)
  - [Engineering](#️-engineering)
    - [Build Volume Analysis](#build-volume-analysis-engineeringbuild-volume)
    - [Bundless Architecture](#bundless-architecture-engineeringbundless)
    - [CommonJS & ESM](#commonjs--esm-engineeringcjsesm)
    - [Code Splitting](#code-splitting-engineeringcode-spliting)
    - [Custom JSON Loader](#custom-json-loader-engineeringjson-loader)
    - [Rollup Bundling](#rollup-bundling-engineeringrollup)
    - [Tree Shaking](#tree-shaking-engineeringtreeshaking)
    - [Webpack Build Performance](#webpack-build-performance-engineeringwebpack-build-proformance)
    - [Webpack Runtime](#webpack-runtime-engineeringwebpack-runtime)
  - [Mini Codes](#-mini-codes-mini-codes)
  - [Node.js](#-nodejs-node)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Learning Topics Covered](#-learning-topics-covered)
- [Key Technologies](#-key-technologies)
- [Reference](#-reference)
- [Contributing](#-contributing)
- [License](#-license)

## 📁 Project Structure

### 🛠️ Engineering
Core frontend engineering concepts and implementations:

#### Build Volume Analysis (`engineering/build-volume/`)
- **Purpose**: Webpack bundle size analysis and optimization
- **Features**: 
  - Bundle analyzer integration
  - Content hashing for cache busting
  - Terser plugin for minification
- **Key Files**: `build.js`, `index.js`, `sum.js`

#### Bundless Architecture (`engineering/bundless/`)
- **Purpose**: Exploring bundless development approaches
- **Features**: Direct module loading without bundling
- **Key Files**: `cjs.js`, `index.js`, `index.html`

#### CommonJS & ESM (`engineering/cjs&esm/`)
- **Purpose**: Understanding module systems differences
- **Features**:
  - CommonJS vs ES6 modules comparison
  - Static vs dynamic loading examples
  - Circular dependency examples (循环导入示例)
- **Key Files**: `helloCjs.js`, `helloEsm.js`, `sum.js`, `sumESM.js`

#### Code Splitting (`engineering/code-spliting/`)
- **Purpose**: Webpack code splitting techniques
- **Features**: Dynamic imports and chunk optimization
- **Key Files**: `build.js`, `sum.js`, `sum2.js`

#### Custom JSON Loader (`engineering/json-loader/`)
- **Purpose**: Creating custom webpack loaders
- **Features**: Custom JSON loader implementation
- **Key Files**: `jsonLoader.js`, `user.json`

#### Rollup Bundling (`engineering/rollup/`)
- **Purpose**: Rollup bundler configuration and usage
- **Features**: ESM output with Rollup
- **Key Files**: `rollup.config.js`, `bundle.js`

#### Tree Shaking (`engineering/treeShaking/`)
- **Purpose**: Dead code elimination techniques
- **Features**:
  - Webpack tree shaking configuration
  - Used exports analysis
  - Minification with Terser
- **Key Files**: `build.js`, `math.js`, `global.js`

#### Webpack Build Performance (`engineering/webpack-build-proformance/`)
- **Purpose**: Webpack build optimization
- **Features**:
  - Babel and SWC loader comparison
  - Thread loader for parallel processing
  - Speed measurement and bundle analysis
- **Key Files**: `babel.config.js`, `build.js`

#### Webpack Runtime (`engineering/webpack-runtime/`)
- **Purpose**: Understanding webpack runtime behavior
- **Features**: Module system implementation
- **Key Files**: `webpack.config.js`, `modules/hello.js`

### 🎯 Mini Codes (`mini-codes/`)
- **Purpose**: Small code examples and utilities
- **Features**: SSR (Server-Side Rendering) examples
- **Directory**: `ssr/`

### 🟢 Node.js (`node/`)
- **Purpose**: Node.js code examples and utilities
- **Features**: Simple Node.js implementations

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
Each module in the `engineering/` directory has its own `package.json` and can be run independently:

```bash
# Navigate to a specific module
cd engineering/build-volume

# Install dependencies
npm install

# Run the build script
node build.js
```

## 📚 Learning Topics Covered

- **Module Systems**: CommonJS vs ES6 Modules
- **Build Tools**: Webpack, Rollup configuration
- **Performance Optimization**: 
  - Bundle size analysis
  - Code splitting
  - Tree shaking
  - Build performance tuning
- **Loaders & Plugins**: Custom webpack loaders
- **Modern JavaScript**: ESM, bundless development

## 🔧 Key Technologies

- **Webpack 5**: Module bundling and optimization
- **Rollup**: ESM-focused bundling
- **Babel**: JavaScript transpilation
- **SWC**: Fast JavaScript/TypeScript compiler
- **Terser**: JavaScript minification
- **Bundle Analyzer**: Bundle size visualization

## 📖 Reference

This project is based on learning materials from:
- **Bilibili**: 程序员山月 (Programmer Shanyue)

## 🤝 Contributing

This is a learning repository. Feel free to:
- Add more examples
- Improve existing implementations
- Share your learning insights

## 📄 License

This project is for educational purposes.