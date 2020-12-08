import { DefineComponent, defineComponent, PropType } from 'vue'

interface ISBCloseButtonProps {
  disabled?: boolean,
  onClick?: () => void,
  class?: string
}

const SBCloseButton = defineComponent({
  name: 'SBCloseButton',
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
    onClick: {
      type: Function as PropType<(event: MouseEvent) => void>,
      required: false,
      default: () => {}
    },
    class: {
      type: String,
      required: false
    }
  },
  methods: {
    emitToParent(event: MouseEvent) {
      this.onClick(event)
    }
  },
  render() {
    let computeClass = (props: ISBCloseButtonProps) => {
      return [
        'btn-close',
        {
          disabled: props.disabled,
        },
        props.class
      ]
    }

    return (
      <button type="button" class={computeClass((this as any).$props)} aria-label="Close" onClick={($event) => this.emitToParent($event)}></button>
    )
  }
})

export default SBCloseButton
