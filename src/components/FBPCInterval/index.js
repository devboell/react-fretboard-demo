import React from 'react'
import Fretboard, { fretMatrixForInterval } from 'react-fretboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { solarizedLight } from 'react-syntax-highlighter/dist/styles'

import HighlightWrapper from '../HighlightWrapper'
import FBLabel from '../FBLabel'

const width = 13
const tuning = ['D2', 'G2', 'D3', 'G3', 'B3', 'D4']

const codeString = `  const width = 13
  const tuning = ['D2', 'G2', 'D3', 'G3', 'B3', 'D4']

  ...

  <Fretboard
    settings={{ showNotes: true }}
    fretMatrix={fretMatrixForInterval(tuning, width, 'G#', '6m', true)}
  />
`

const FBPCInterval = () =>
  <div>
    <FBLabel>Interval with pitch class and Open G tuning</FBLabel>
    <Fretboard
      settings={{ showNotes: true }}
      fretMatrix={fretMatrixForInterval(tuning, width, 'G#', '6m', true)}
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

export default FBPCInterval
