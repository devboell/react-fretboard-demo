import React from 'react'
import Fretboard, { fretMatrixForInterval } from 'react-fretboard'
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
    settings={{ showPositions: false }}
    fretMatrix={fretMatrixForInterval(tuning, width, 'A3', '4P', true)}
  />
`

const FBNoteInterval = () =>
  <div>
    <FBLabel>Interval with note, without positions</FBLabel>
    <Fretboard
      settings={{ showPositions: false }}
      fretMatrix={fretMatrixForInterval(tuning, width, 'A3', '4P', true)}
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

export default FBNoteInterval
