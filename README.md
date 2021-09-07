**Wizard Component**
1. Clone Repo
2. npm install
3. npm run dev

import Wizard component

When using the Wizard component you must have the attribute titles with an array of stage titles, you must also give it children. The stage titles array and children must be the same length and in the same order.

Inside the Wizard tags anything within a parent element will present itself as a stage.
Example:
  <Wizard title={['test','test2']}>
    <div>
      This is a stage in the wizard.  
    </div>
    <div>
      This is another stage in the wizard.  
    </div>
  </wizard>
