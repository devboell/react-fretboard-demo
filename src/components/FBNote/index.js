import React from 'react'
import Fretboard, { fretMatrixForNote } from 'react-fretboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { solarizedLight } from 'react-syntax-highlighter/dist/styles'

import HighlightWrapper from '../HighlightWrapper'
import FBLabel from '../FBLabel'

const width = 13
const tuning = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4']

const codeString = `  const width = 13
  const tuning = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4']

  ...

  <Fretboard
    settings={{ showOctaves: true }}
    fretMatrix={fretMatrixForNote(tuning, width, 'D3', true)}
  />
`

const FBNote = () =>
  <div>
    <FBLabel>Note (with octave)</FBLabel>
    <Fretboard
      settings={{ showOctaves: true }}
      fretMatrix={fretMatrixForNote(tuning, width, 'D3', true)}
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

export default FBNote
