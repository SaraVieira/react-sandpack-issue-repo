import React from 'react';
import './App.css';

import {
  FileExplorer,
  CodeMirror,
  BrowserPreview,
  SandpackProvider,
} from 'react-smooshpack/es/components';

const files = {
  '/index.js': {
    code: "<div>Hello There! Inside React-Sandbox</div>",
  },
};

const dependencies = {
  uuid: 'latest',
};

const App = () => (
  <SandpackProvider files={files} dependencies={dependencies} entry="/index.js">
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      <FileExplorer style={{ width: 300 }} />
      <CodeMirror style={{ flex: 1 }} />
      <BrowserPreview style={{ flex: 1 }} />
    </div>
  </SandpackProvider>
);

export default App;
