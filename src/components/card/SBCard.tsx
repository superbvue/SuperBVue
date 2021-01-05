import { ComponentPublicInstance, defineComponent, PropType } from 'vue'
// import SBButton from '../button/SBButton'

interface ISBCardProps {
  title?: string
  imgSrc?: string
  imgTop?: boolean,
  imgBottom?: boolean,
  // imgEnd?: boolean,
  // imgLeft?: boolean,
  // imgRight?: boolean,
  imgWidth?: boolean,
  imgHeight?: boolean,
  imgAlt?: string,
  overlay?: boolean,
  borderVariant?: string,
  header?: string,
  headerBgVariant?: string,
  headerTextVariant?: string,
  align?: string,
  class?: string,
  id?: string,
  style?: string
}

// TODO: NOT DONE.. NEED MORE WORK ON...
type TVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-success'
  | 'outline-danger'
  | 'outline-warning'
  | 'outline-info'
  | 'outline-light'
  | 'outline-dark'
  | 'link'
  | 'white'


const SBCard = defineComponent({
  name: 'SBCard',
  props: {
    title: {
      type: String,
      required: false
    },
    imgSrc: {
      type: String,
      required: false
    },
    imgTop: {
      type: Boolean,
      required: false
    },
    imgBottom: {
      type: Boolean,
      required: false
    },
    // imgEnd: {
    //   type: Boolean,
    //   required: false
    // },
    // imgLeft: {
    //   type: Boolean,
    //   required: false
    // },
    // imgRight: {
    //   type: Boolean,
    //   required: false
    // },
    imgWidth: {
      type: Boolean,
      required: false
    },
    imgHeight: {
      type: Boolean,
      required: false
    },
    imgAlt: {
      type: String,
      required: false
    },
    overlay: {
      type: Boolean,
      required: false
    },
    borderVariant: {
      type: String as PropType<TVariant>,
      required: false,
    },
    header: {
      type: String,
      required: false
    },
    headerBgVariant: {
      type: String as PropType<TVariant>,
      required: false,
    },
    headerTextVariant: {
      type: String as PropType<TVariant>,
      required: false,
    },
    align: {
      type: String,
      required: false
    },
    class: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: false
    },
    style: {
      type: String,
      required: false,
      default: ""
    },

  },
  data() {
    return {
      state: {
        listed: [{ id: 0, isShow: false, class: '', isCollapse: false }]
      }
    }
  },
  methods: {
    // emitToParent(event: MouseEvent) {
    //   this.onClick(event)
    // },
    // handleShowCollapse(id: string) {
    //   console.log({ id })
    // }
  },
  computed: {
    imgPositionClass(): string | null {
      if (this.imgTop) {
        return 'card-img-top'
      } else if (this.imgBottom) {
        return 'card-img-bottom'
      }
      return ''
    }
  },
  render() {
    let computeClass = (props: ISBCardProps) => {
      return [
        'card',
        props.borderVariant ? props.borderVariant : null,
        props.class
      ]
    }
    let computeCardHeaderClass = (props: ISBCardProps) => {
      return [
        'card-header',
        props.headerBgVariant ? `bg-${props.headerBgVariant}` : null,
        props.headerTextVariant ? `text-${props.headerTextVariant}` : null
      ]
    }
    let renderNestedChildrenElement: JSX.Element | null = null
    let renderImgElement: JSX.Element | null = null
    
    if ((this as ComponentPublicInstance).$slots.default) {

      // For <SBListgroup /> inside card
      if ( (this as any).$slots.default()[0].type.name === "SBListgroup") {
        renderNestedChildrenElement = (
          <div class="card">
            {(this as any).$slots.default()}
          </div>
        )

        // Header and footer element 
      } else if (this.header) {
        renderNestedChildrenElement = (
          <div class="card">
            <div class={computeCardHeaderClass(this.$props)}>
              {this.header}
            </div>
            {(this as any).$slots.default()}
          </div>
        )

        // For overlay or not
      } else {
        renderNestedChildrenElement = (
          <div class={`${this.overlay ? "card-img-overlay" : "card-body"}`}>
            {(this as any).$slots.default()}
          </div>
        )
      }

    }

    if (this.imgSrc) {
      renderImgElement = (
        <img src={this.imgSrc} class={this.imgPositionClass} alt={this.imgAlt ? this.imgAlt : ""} />
      )
    }

    return (
        <div class={computeClass((this as any).$props)} id={this.id ? this.id : "card"} style={this.style}>
          {renderImgElement}
          {renderNestedChildrenElement}
        </div>
    )
  }
})

export default SBCard
