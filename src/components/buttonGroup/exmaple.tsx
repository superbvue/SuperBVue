import { defineComponent } from 'vue'
import SBButtonGroup from './SBButtonGroup'
import SBButton from '../button/SBButton'

const Exmaple = defineComponent({
  name: 'Exmaple',
  render() {
    return (
      <SBButtonGroup size="md" class="me" data-cy="testing" me-too="1">
        <SBButton variant="primary">Left</SBButton>
        <SBButton variant="primary">Middle</SBButton>
        <SBButton variant="primary">Right</SBButton>
      </SBButtonGroup>
    )
  }
})

export default Exmaple
