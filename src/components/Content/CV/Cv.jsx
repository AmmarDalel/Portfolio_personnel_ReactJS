import React from 'react'
import cvpdf from '../../../asserts/images/cv.pdf'
function Cv() {
  return (
    <div>
        <embed src={cvpdf} type="application/pdf" width="100%" height="900rem" />

    </div>
  )
}

export default Cv