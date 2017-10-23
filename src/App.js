import React from 'react'
import FBDefault from './components/FBDefault'
import FBPitchClass from './components/FBPitchClass'
import FBNote from './components/FBNote'
import FBPCInterval from './components/FBPCInterval'
import FBNoteInterval from './components/FBNoteInterval'
import FBChord from './components/FBChord'
import FBScale from './components/FBScale'

import Wrapper from './Wrapper'

const App = () =>
  <Wrapper>
    <FBDefault />
    <FBPitchClass />
    <FBNote />
    <FBPCInterval />
    <FBNoteInterval />
    <FBChord />
    <FBScale />
  </Wrapper>

export default App
