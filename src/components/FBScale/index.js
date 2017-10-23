import React from 'react'
import Fretboard, { fretMatrixForScale } from 'react-fretboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { solarizedLight } from 'react-syntax-highlighter/dist/styles'

import HighlightWrapper from '../HighlightWrapper'
import FBLabel from '../FBLabel'

const width = 19
const tuning = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4']

const codeString = `  const width = 19
  const tuning = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4']

  ...

  <Fretboard
    fretMatrix={fretMatrixForScale(tuning, width, 'E', 'phrygian')}
  />
`

const FBScale = () =>
  <div>
    <FBLabel>Scale without showing names, 19 frets</FBLabel>
    <Fretboard
      fretMatrix={fretMatrixForScale(tuning, width, 'E', 'phrygian')}
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

export default FBScale
