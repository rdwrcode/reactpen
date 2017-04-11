import React from 'react'
import './overflow.css'

export default () => (
  <div className='Overflow'>
    <ul>
      <li><code>overflow-x:hidden</code> — hides the text outside the box
        <div className="div1">
          ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
        </div>
      </li>

      <li><code>overflow-x:scroll</code> — always add a scrollbar
        <div className="div2">
          ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
        </div>
      </li>

      <li><code>overflow-x:visible</code> — displays the text outside the box if needed
        <div className="div3">
          ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
        </div>
      </li>

      <li><code>overflow-x:auto</code> — on most browsers, equivalent to <code>scroll</code>
        <div className="div4">
          ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
        </div>
      </li>
    </ul>
  </div>
)