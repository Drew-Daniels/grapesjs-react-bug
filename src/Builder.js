import { useState, useEffect } from 'react';

import grapesjs from 'grapesjs';

import 'grapesjs/dist/css/grapes.min.css';

import config from './config';

export default function Builder() {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    if (!editor) {
      const newEditor = grapesjs.init(config);
      newEditor.addComponents(`
      <mjml>
        <mj-body></mj-body>
      </mjml>
      `)
      setEditor(newEditor);
    }
  }, [editor])

  return (
    <div id="gjs" style={{ overflow: 'hidden', height: '100%' }} />
  )
}
