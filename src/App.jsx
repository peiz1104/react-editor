import React,{ useEffect, useState } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import './App.scss';

function App() {
  const [editorState, setEditor] = useState('');
  useEffect(() => {
    const htmlContent = BraftEditor.createEditorState('<h2>hello world<h2>');
    setEditor(htmlContent);
    document.addEventListener('visibilitychange',function(e){
      if (document["hidden"] || document["webkitHidden"] || document["mozHidden"]) {
       console.log('pagehidden');
      }else {
       console.log('pageshow');
      }
    })
}, []);

const submitContent = async () => {
    const htmlContent = editorState.toHTML();
    console.log(htmlContent);
};

const handleEditorChange = (editorState) => {
    setEditor({ editorState });
};
  return (
    <div className="App">
      <header className="App-header">
        <p className="myeditor">
          Edit <code>src/App.js</code> myeditor.
        </p>
        <div className="my-component-editor">
        <BraftEditor
          value={editorState}
          onChange={handleEditorChange}
          onSave={submitContent}
        />
      </div>
      </header>
    </div>
  );
}

export default App;
