import React from 'react'
import Fretboard, { fretMatrixForChord } from 'react-fretboard'
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
    fretMatrix={fretMatrixForChord(tuning, width, 'Cmaj7', true)}
    theme={{ statusMap: { selected: 'lightblue' }}}
  />
`

const FBChord = () =>
  <div>
    <FBLabel>Chord with custom styling</FBLabel>
    <Fretboard
      fretMatrix={fretMatrixForChord(tuning, width, 'Cmaj7', true)}
      theme={{ statusMap: { selected: 'lightblue' }}}
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

export default FBChord
