import React from 'react'
import Fretboard from 'react-fretboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { solarizedLight } from 'react-syntax-highlighter/dist/styles'

import HighlightWrapper from '../HighlightWrapper'
import FBLabel from '../FBLabel'


const codeString = `  <Fretboard
    settings={{ showNotes: true }}
  />`

const FBDefault = () =>
  <div>
    <FBLabel>Default with notes</FBLabel>
    <Fretboard
      settings={{ showNotes: true }}
    />
    <HighlightWrapper>
      <SyntaxHighlighter
        language="javascript"
        style={solarizedLight}
      >
        {codeString}
      </SyntaxHighlighter>
    </HighlightWrapper>

  </div>


export default FBDefault
